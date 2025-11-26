# AI Code Reviewer

> 🔍 AI-powered code review tool supporting OpenAI, Ollama, and Anthropic

**[Live Demo](https://yoon-k.github.io/openwebui-code-reviewer/)** | [한국어](#한국어) | [日本語](#日本語)

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

## License

MIT License - See [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## Support

- 📧 Issues: [GitHub Issues](https://github.com/yoon-k/openwebui-code-reviewer/issues)
- 📖 Docs: [GitHub Pages](https://yoon-k.github.io/openwebui-code-reviewer/)
