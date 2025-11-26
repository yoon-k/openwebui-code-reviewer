"""LLM service for code review - supports OpenAI, Ollama, and Anthropic."""
import os
import json
import aiohttp
from typing import Optional, List, Dict, Any
from abc import ABC, abstractmethod


class LLMProvider(ABC):
    """Abstract base class for LLM providers."""

    @abstractmethod
    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        """Generate a response from the LLM."""
        pass

    @abstractmethod
    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        """Chat with the LLM."""
        pass


class OpenAIProvider(LLMProvider):
    """OpenAI API provider."""

    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY", "")
        self.model = os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview")
        self.base_url = "https://api.openai.com/v1"

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})
        return await self.chat(messages)

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        if system_prompt and (not messages or messages[0].get("role") != "system"):
            messages = [{"role": "system", "content": system_prompt}] + messages

        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/chat/completions",
                headers={
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": self.model,
                    "messages": messages,
                    "temperature": 0.3,
                    "max_tokens": 4096
                }
            ) as response:
                if response.status != 200:
                    error = await response.text()
                    raise Exception(f"OpenAI API error: {error}")
                data = await response.json()
                return data["choices"][0]["message"]["content"]


class OllamaProvider(LLMProvider):
    """Ollama local LLM provider."""

    def __init__(self):
        self.base_url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
        self.model = os.getenv("OLLAMA_MODEL", "codellama:13b")

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        full_prompt = f"{system_prompt}\n\n{prompt}" if system_prompt else prompt

        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/api/generate",
                json={
                    "model": self.model,
                    "prompt": full_prompt,
                    "stream": False,
                    "options": {
                        "temperature": 0.3,
                        "num_predict": 4096
                    }
                }
            ) as response:
                if response.status != 200:
                    error = await response.text()
                    raise Exception(f"Ollama API error: {error}")
                data = await response.json()
                return data["response"]

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        if system_prompt and (not messages or messages[0].get("role") != "system"):
            messages = [{"role": "system", "content": system_prompt}] + messages

        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/api/chat",
                json={
                    "model": self.model,
                    "messages": messages,
                    "stream": False,
                    "options": {
                        "temperature": 0.3,
                        "num_predict": 4096
                    }
                }
            ) as response:
                if response.status != 200:
                    error = await response.text()
                    raise Exception(f"Ollama API error: {error}")
                data = await response.json()
                return data["message"]["content"]


class AnthropicProvider(LLMProvider):
    """Anthropic Claude API provider."""

    def __init__(self):
        self.api_key = os.getenv("ANTHROPIC_API_KEY", "")
        self.model = os.getenv("ANTHROPIC_MODEL", "claude-3-sonnet-20240229")
        self.base_url = "https://api.anthropic.com/v1"

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        messages = [{"role": "user", "content": prompt}]
        return await self.chat(messages, system_prompt)

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        # Filter out system messages for Anthropic (handled separately)
        filtered_messages = [m for m in messages if m.get("role") != "system"]

        async with aiohttp.ClientSession() as session:
            payload = {
                "model": self.model,
                "max_tokens": 4096,
                "messages": filtered_messages
            }
            if system_prompt:
                payload["system"] = system_prompt

            async with session.post(
                f"{self.base_url}/messages",
                headers={
                    "x-api-key": self.api_key,
                    "anthropic-version": "2023-06-01",
                    "Content-Type": "application/json"
                },
                json=payload
            ) as response:
                if response.status != 200:
                    error = await response.text()
                    raise Exception(f"Anthropic API error: {error}")
                data = await response.json()
                return data["content"][0]["text"]


class LLMService:
    """Main LLM service that routes to appropriate provider."""

    _instance = None
    _provider: Optional[LLMProvider] = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if self._provider is None:
            self._initialize_provider()

    def _initialize_provider(self):
        """Initialize the appropriate LLM provider based on configuration."""
        provider_name = os.getenv("LLM_PROVIDER", "openai").lower()

        if provider_name == "ollama":
            self._provider = OllamaProvider()
        elif provider_name == "anthropic":
            self._provider = AnthropicProvider()
        else:  # default to openai
            self._provider = OpenAIProvider()

    async def review_code(self, code: str, language: str = "auto",
                          focus_areas: List[str] = None) -> Dict[str, Any]:
        """Review code and return structured analysis."""
        system_prompt = self._get_review_system_prompt(language, focus_areas or [])
        prompt = self._build_review_prompt(code, language, focus_areas or [])

        response = await self._provider.generate(prompt, system_prompt)
        return self._parse_review_response(response)

    async def chat(self, message: str, code: Optional[str] = None,
                   history: List[Dict[str, str]] = None, ui_language: str = "en") -> str:
        """Chat about code with context awareness."""
        system_prompt = self._get_chat_system_prompt(ui_language)

        messages = []
        if history:
            messages.extend(history)

        user_message = message
        if code:
            user_message = f"Code context:\n```\n{code}\n```\n\nQuestion: {message}"

        messages.append({"role": "user", "content": user_message})

        return await self._provider.chat(messages, system_prompt)

    def _get_review_system_prompt(self, language: str, focus_areas: List[str]) -> str:
        """Generate system prompt for code review."""
        focus_text = ""
        if focus_areas:
            focus_text = f"\nFocus especially on: {', '.join(focus_areas)}"

        return f"""You are an expert code reviewer with deep knowledge of software engineering best practices.
Analyze the provided code and return a JSON response with the following structure:
{{
    "summary": "Brief overall assessment",
    "score": <0-100>,
    "language_detected": "detected programming language",
    "issues": [
        {{
            "line_start": <number>,
            "line_end": <number or null>,
            "severity": "critical|high|medium|low|info",
            "category": "security|performance|maintainability|bug|style|best_practice|documentation",
            "message": "Description of the issue",
            "suggestion": "How to fix it",
            "code_snippet": "relevant code"
        }}
    ],
    "suggestions": ["General improvement suggestions"],
    "metrics": {{
        "complexity": "low|medium|high",
        "readability": "low|medium|high",
        "test_coverage_needed": true/false
    }}
}}

Be thorough but fair. Prioritize critical issues.{focus_text}
Return ONLY valid JSON, no markdown formatting."""

    def _get_chat_system_prompt(self, ui_language: str) -> str:
        """Generate system prompt for chat."""
        language_instructions = {
            "en": "Respond in English.",
            "ko": "한국어로 응답해주세요.",
            "ja": "日本語で応答してください。"
        }

        return f"""You are an expert code reviewer and software engineer.
Help users understand their code, suggest improvements, and explain best practices.
Be concise but thorough. Use code examples when helpful.
{language_instructions.get(ui_language, language_instructions['en'])}"""

    def _build_review_prompt(self, code: str, language: str, focus_areas: List[str]) -> str:
        """Build the review prompt."""
        lang_hint = f" (Language: {language})" if language != "auto" else ""
        focus_hint = f"\nFocus on: {', '.join(focus_areas)}" if focus_areas else ""

        return f"""Please review the following code{lang_hint}:{focus_hint}

```
{code}
```

Provide a comprehensive code review in JSON format."""

    def _parse_review_response(self, response: str) -> Dict[str, Any]:
        """Parse the LLM response into structured data."""
        try:
            # Try to extract JSON from response
            response = response.strip()
            if response.startswith("```"):
                # Remove markdown code blocks
                lines = response.split("\n")
                response = "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])

            return json.loads(response)
        except json.JSONDecodeError:
            # Return a basic structure if parsing fails
            return {
                "summary": response[:500],
                "score": 50,
                "language_detected": "unknown",
                "issues": [],
                "suggestions": [response],
                "metrics": {}
            }


# Global instance
llm_service = LLMService()
