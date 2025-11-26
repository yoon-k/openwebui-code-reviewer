"""Flask API for code reviewer."""
import os
import asyncio
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv

from app.models import ReviewRequest, ChatRequest
from app.services import llm_service
from app.utils import analyze_code

load_dotenv()

app = Flask(__name__,
            template_folder="../templates",
            static_folder="../static")
CORS(app)


def run_async(coro):
    """Run async function in sync context."""
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        return loop.run_until_complete(coro)
    finally:
        loop.close()


@app.route("/")
def index():
    """Serve the main page."""
    return render_template("index.html")


@app.route("/api/health", methods=["GET"])
def health():
    """Health check endpoint."""
    return jsonify({
        "status": "healthy",
        "provider": os.getenv("LLM_PROVIDER", "openai")
    })


@app.route("/api/review", methods=["POST"])
def review_code():
    """Review code and return analysis."""
    try:
        data = request.get_json()
        req = ReviewRequest(**data)

        # First, do local analysis
        local_analysis = analyze_code(req.code, req.language)

        # Then get LLM review
        llm_review = run_async(
            llm_service.review_code(
                req.code,
                local_analysis["language"],
                req.focus_areas
            )
        )

        # Merge results
        result = {
            **llm_review,
            "local_analysis": local_analysis
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/chat", methods=["POST"])
def chat():
    """Chat endpoint for code discussions."""
    try:
        data = request.get_json()
        req = ChatRequest(**data)

        history = [{"role": m.role, "content": m.content} for m in req.history]

        response = run_async(
            llm_service.chat(
                req.message,
                req.code,
                history,
                req.language
            )
        )

        return jsonify({
            "response": response,
            "role": "assistant"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/analyze", methods=["POST"])
def analyze():
    """Quick local code analysis without LLM."""
    try:
        data = request.get_json()
        code = data.get("code", "")
        language = data.get("language", "auto")

        result = analyze_code(code, language)
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/languages", methods=["GET"])
def get_languages():
    """Get supported programming languages."""
    return jsonify({
        "languages": [
            {"code": "auto", "name": "Auto Detect"},
            {"code": "python", "name": "Python"},
            {"code": "javascript", "name": "JavaScript"},
            {"code": "typescript", "name": "TypeScript"},
            {"code": "java", "name": "Java"},
            {"code": "go", "name": "Go"},
            {"code": "rust", "name": "Rust"},
            {"code": "cpp", "name": "C++"},
            {"code": "c", "name": "C"},
            {"code": "ruby", "name": "Ruby"},
            {"code": "php", "name": "PHP"},
            {"code": "swift", "name": "Swift"},
            {"code": "kotlin", "name": "Kotlin"},
            {"code": "sql", "name": "SQL"},
            {"code": "html", "name": "HTML"},
            {"code": "css", "name": "CSS"},
        ]
    })


@app.route("/api/focus-areas", methods=["GET"])
def get_focus_areas():
    """Get available focus areas for review."""
    return jsonify({
        "focus_areas": [
            {"id": "security", "name": "Security", "description": "Check for vulnerabilities"},
            {"id": "performance", "name": "Performance", "description": "Identify bottlenecks"},
            {"id": "maintainability", "name": "Maintainability", "description": "Code quality and readability"},
            {"id": "bugs", "name": "Bug Detection", "description": "Find potential bugs"},
            {"id": "best_practices", "name": "Best Practices", "description": "Follow industry standards"},
            {"id": "documentation", "name": "Documentation", "description": "Check comments and docs"},
        ]
    })


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    app.run(host="0.0.0.0", port=port, debug=debug)
