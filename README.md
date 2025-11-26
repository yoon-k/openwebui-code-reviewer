# AI Code Reviewer

> 🔍 AI-powered code review tool supporting OpenAI, Ollama, and Anthropic

**[Live Demo](https://yoon-k.github.io/openwebui-code-reviewer/)** | [한국어](#한국어) | [日本語](#日本語)

---

## 📚 About This Project

> **🎓 Reference & Study Project**
>
> This project is created for **learning and reference purposes**. It's a "**Fullstack with AI**" collaboration project - not built by a traditional fullstack developer, but through partnership with AI assistance.
>
> Feel free to use this as a reference for:
> - Learning LLM integration patterns
> - Understanding multi-provider architecture
> - Studying modern Python web development
> - Building your own AI-powered tools
>
> 🚀 **Continuous Improvement**: This project is under active development with ongoing enhancements planned.

---

## Overview

AI Code Reviewer is a production-ready code analysis tool that leverages Large Language Models (LLMs) to provide intelligent, comprehensive code reviews. It supports multiple LLM providers and can be deployed locally with Ollama or connected to cloud-based services like OpenAI and Anthropic.

## Features

- **🔒 Security Analysis**: Detect SQL injection, XSS, CSRF, and other vulnerabilities
- **⚡ Performance Optimization**: Identify bottlenecks and suggest improvements
- **📊 Quality Scoring**: Get an objective 0-100 score for your code
- **🌐 15+ Languages**: Python, JavaScript, TypeScript, Java, Go, Rust, and more
- **💬 Interactive Chat**: Ask follow-up questions about your code
- **🔧 Multiple LLM Providers**: OpenAI, Ollama (local), Anthropic Claude
- **🌍 Multi-language UI**: English, Korean, Japanese

## Quick Start

### Option 1: Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/yoon-k/openwebui-code-reviewer.git
cd openwebui-code-reviewer

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Run with Docker Compose
docker-compose up -d

# Access at http://localhost:5000
```

### Option 2: Local Installation

```bash
# Clone and setup
git clone https://github.com/yoon-k/openwebui-code-reviewer.git
cd openwebui-code-reviewer

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Run the application
python -m app.api
```

### Option 3: With Local Ollama

```bash
# Start Ollama with Code Llama
docker-compose --profile local-llm up -d

# Pull the model
docker exec -it openwebui-code-reviewer-ollama-1 ollama pull codellama:13b

# Set LLM_PROVIDER=ollama in .env
```

## Architecture

```
openwebui-code-reviewer/
├── app/
│   ├── api.py                 # Flask API endpoints
│   ├── models/
│   │   └── review.py          # Pydantic data models
│   ├── services/
│   │   └── llm_service.py     # LLM provider abstraction
│   └── utils/
│       └── code_analyzer.py   # Static code analysis
├── static/
│   ├── css/style.css          # Modern UI styles
│   └── js/app.js              # Frontend application
├── templates/
│   └── index.html             # Main application template
├── docs/
│   └── index.html             # GitHub Pages demo
├── Dockerfile                 # Production container
├── docker-compose.yml         # Docker orchestration
└── requirements.txt           # Python dependencies
```

## API Reference

### POST /api/review

Review code and get analysis results.

```bash
curl -X POST http://localhost:5000/api/review \
  -H "Content-Type: application/json" \
  -d '{
    "code": "def hello(): print(\"world\")",
    "language": "python",
    "focus_areas": ["security", "performance"]
  }'
```

**Response:**
```json
{
  "summary": "Clean, simple function with no major issues",
  "score": 95,
  "language_detected": "python",
  "issues": [],
  "suggestions": ["Consider adding type hints"],
  "metrics": {
    "complexity": "low",
    "readability": "high"
  }
}
```

### POST /api/chat

Interactive chat about code.

```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How can I improve this code?",
    "code": "for i in range(len(items)): print(items[i])",
    "language": "en"
  }'
```

### GET /api/languages

List supported programming languages.

### GET /api/focus-areas

List available focus areas for review.

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `LLM_PROVIDER` | Provider: `openai`, `ollama`, `anthropic` | `openai` |
| `OPENAI_API_KEY` | OpenAI API key | - |
| `OPENAI_MODEL` | OpenAI model | `gpt-4-turbo-preview` |
| `OLLAMA_BASE_URL` | Ollama server URL | `http://localhost:11434` |
| `OLLAMA_MODEL` | Ollama model | `codellama:13b` |
| `ANTHROPIC_API_KEY` | Anthropic API key | - |
| `ANTHROPIC_MODEL` | Claude model | `claude-3-sonnet-20240229` |

## Technical Deep Dive

### LLM Provider Architecture

The `LLMService` class implements the Strategy pattern for LLM providers:

```python
class LLMProvider(ABC):
    @abstractmethod
    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        pass

    @abstractmethod
    async def chat(self, messages: List[Dict], system_prompt: str = "") -> str:
        pass
```

Each provider (OpenAI, Ollama, Anthropic) implements this interface, allowing seamless switching between providers through configuration.

### Code Analysis Pipeline

1. **Local Analysis**: Uses Pygments for language detection and pattern matching for function extraction
2. **LLM Analysis**: Sends code to the selected LLM with structured prompt for comprehensive review
3. **Result Merging**: Combines local metrics with LLM insights for complete analysis

### Async Design

The application uses `aiohttp` for non-blocking API calls to LLM providers:

```python
async with aiohttp.ClientSession() as session:
    async with session.post(url, json=payload) as response:
        return await response.json()
```

---

## 한국어

### 개요

AI 코드 리뷰어는 대규모 언어 모델(LLM)을 활용하여 지능적이고 포괄적인 코드 리뷰를 제공하는 프로덕션 준비 코드 분석 도구입니다.

### 주요 기능

- **🔒 보안 분석**: SQL 인젝션, XSS, CSRF 등 취약점 감지
- **⚡ 성능 최적화**: 병목 현상 식별 및 개선 제안
- **📊 품질 점수**: 0-100점 객관적 코드 점수
- **🌐 15개 이상 언어 지원**: Python, JavaScript, TypeScript, Java, Go, Rust 등
- **💬 대화형 채팅**: 코드에 대한 후속 질문 가능
- **🔧 다중 LLM 제공자**: OpenAI, Ollama (로컬), Anthropic Claude

### 빠른 시작

```bash
git clone https://github.com/yoon-k/openwebui-code-reviewer.git
cd openwebui-code-reviewer
cp .env.example .env
# .env 파일에 API 키 설정
docker-compose up -d
```

---

## 日本語

### 概要

AIコードレビューアは、大規模言語モデル（LLM）を活用して、インテリジェントで包括的なコードレビューを提供する本番環境対応のコード分析ツールです。

### 主な機能

- **🔒 セキュリティ分析**: SQLインジェクション、XSS、CSRFなどの脆弱性を検出
- **⚡ パフォーマンス最適化**: ボトルネックの特定と改善提案
- **📊 品質スコア**: 0-100の客観的なコードスコア
- **🌐 15以上の言語サポート**: Python、JavaScript、TypeScript、Java、Go、Rustなど
- **💬 インタラクティブチャット**: コードについてのフォローアップ質問が可能
- **🔧 複数のLLMプロバイダー**: OpenAI、Ollama（ローカル）、Anthropic Claude

### クイックスタート

```bash
git clone https://github.com/yoon-k/openwebui-code-reviewer.git
cd openwebui-code-reviewer
cp .env.example .env
# .envファイルにAPIキーを設定
docker-compose up -d
```

---

---

## 🔬 Technical Study Guide

### Key Technologies Explained

#### 1. Flask Web Framework
Flask is a lightweight WSGI web application framework in Python. It's designed to make getting started quick and easy, with the ability to scale up to complex applications.

```python
from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/api/endpoint', methods=['POST'])
def handle_request():
    data = request.get_json()
    return jsonify({"result": "success"})
```

**Why Flask?**
- Minimalist and flexible
- Great for APIs and microservices
- Extensive ecosystem of extensions
- Easy to learn and deploy

#### 2. Pydantic Data Validation
Pydantic is a data validation library that uses Python type annotations to validate and parse data.

```python
from pydantic import BaseModel, Field
from typing import List, Optional

class CodeReviewRequest(BaseModel):
    code: str = Field(..., description="Code to review")
    language: str = Field(default="auto")
    focus_areas: Optional[List[str]] = None
```

**Benefits:**
- Automatic type coercion
- Built-in validation
- JSON Schema generation
- Great IDE support with type hints

#### 3. Abstract Base Classes (ABC Pattern)
The ABC pattern allows defining interfaces that child classes must implement.

```python
from abc import ABC, abstractmethod

class LLMProvider(ABC):
    @abstractmethod
    async def generate(self, prompt: str) -> str:
        """All providers must implement this method"""
        pass
```

**This enables:**
- Swappable LLM providers
- Consistent interfaces
- Easy testing with mocks
- Clean separation of concerns

#### 4. Async/Await with aiohttp
Asynchronous programming allows handling multiple requests without blocking.

```python
import aiohttp

async def call_llm_api(url: str, payload: dict) -> dict:
    async with aiohttp.ClientSession() as session:
        async with session.post(url, json=payload) as response:
            return await response.json()
```

**Advantages:**
- Non-blocking I/O operations
- Better resource utilization
- Handles concurrent requests efficiently
- Essential for LLM API calls (which can be slow)

#### 5. Docker Containerization
Docker packages applications with their dependencies for consistent deployment.

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app.api:app"]
```

**Key Concepts:**
- **Image**: Blueprint for containers
- **Container**: Running instance of an image
- **Volume**: Persistent data storage
- **Network**: Container communication

#### 6. LLM API Integration Patterns

**OpenAI Pattern:**
```python
headers = {"Authorization": f"Bearer {api_key}"}
payload = {
    "model": "gpt-4",
    "messages": [{"role": "user", "content": prompt}],
    "temperature": 0.7
}
response = await session.post(url, headers=headers, json=payload)
```

**Ollama Pattern (Local):**
```python
payload = {
    "model": "codellama",
    "prompt": prompt,
    "stream": False
}
response = await session.post("http://localhost:11434/api/generate", json=payload)
```

### Learning Path Recommendations

1. **Beginner**: Start with Flask basics, then add Pydantic
2. **Intermediate**: Implement the ABC pattern for providers
3. **Advanced**: Add async support and Docker deployment
4. **Expert**: Optimize with caching, rate limiting, and monitoring

---

## License

MIT License - See [LICENSE](LICENSE) for details.

## Author

**yoon-k** - [GitHub Profile](https://github.com/yoon-k)

---

⭐ If this project helps you learn, please give it a star!
