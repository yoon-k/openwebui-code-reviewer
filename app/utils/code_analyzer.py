"""Code analysis utilities."""
import re
from typing import Dict, List, Tuple, Optional
from pygments.lexers import get_lexer_by_name, guess_lexer
from pygments.util import ClassNotFound


# Language detection patterns
LANGUAGE_PATTERNS = {
    "python": [
        r"^import\s+\w+",
        r"^from\s+\w+\s+import",
        r"def\s+\w+\s*\(",
        r"class\s+\w+\s*[:\(]",
        r"if\s+__name__\s*==",
    ],
    "javascript": [
        r"^const\s+\w+\s*=",
        r"^let\s+\w+\s*=",
        r"^var\s+\w+\s*=",
        r"function\s+\w+\s*\(",
        r"=>\s*{",
        r"require\s*\(",
        r"module\.exports",
    ],
    "typescript": [
        r"^interface\s+\w+",
        r"^type\s+\w+\s*=",
        r":\s*(string|number|boolean|any)\s*[;=\)]",
        r"<\w+>",
    ],
    "java": [
        r"^public\s+class",
        r"^private\s+\w+",
        r"^protected\s+\w+",
        r"System\.out\.print",
        r"@Override",
    ],
    "go": [
        r"^package\s+\w+",
        r"^func\s+\w+",
        r"^import\s+\(",
        r":=",
        r"fmt\.Print",
    ],
    "rust": [
        r"^fn\s+\w+",
        r"^let\s+mut\s+",
        r"^impl\s+\w+",
        r"^use\s+\w+::",
        r"println!\s*\(",
    ],
    "cpp": [
        r"^#include\s*<",
        r"std::",
        r"cout\s*<<",
        r"cin\s*>>",
        r"nullptr",
    ],
    "c": [
        r"^#include\s*<stdio\.h>",
        r"printf\s*\(",
        r"scanf\s*\(",
        r"malloc\s*\(",
        r"NULL",
    ],
    "ruby": [
        r"^require\s+['\"]",
        r"^class\s+\w+\s*<",
        r"def\s+\w+",
        r"end$",
        r"puts\s+",
    ],
    "php": [
        r"<\?php",
        r"\$\w+\s*=",
        r"echo\s+",
        r"function\s+\w+\s*\(",
    ],
    "swift": [
        r"^import\s+\w+",
        r"^func\s+\w+",
        r"^var\s+\w+:",
        r"^let\s+\w+:",
        r"guard\s+let",
    ],
    "kotlin": [
        r"^fun\s+\w+",
        r"^val\s+\w+",
        r"^var\s+\w+",
        r"println\s*\(",
        r"@\w+",
    ],
    "sql": [
        r"^SELECT\s+",
        r"^INSERT\s+INTO",
        r"^UPDATE\s+\w+\s+SET",
        r"^DELETE\s+FROM",
        r"^CREATE\s+TABLE",
    ],
    "html": [
        r"<!DOCTYPE\s+html>",
        r"<html",
        r"<head>",
        r"<body>",
        r"<div",
    ],
    "css": [
        r"^\s*\.\w+\s*{",
        r"^\s*#\w+\s*{",
        r"@media\s*\(",
        r":\s*\d+px",
    ],
}


def detect_language(code: str) -> str:
    """Detect the programming language of the given code."""
    if not code or not code.strip():
        return "unknown"

    # Try pygments first
    try:
        lexer = guess_lexer(code)
        return lexer.name.lower()
    except ClassNotFound:
        pass

    # Fallback to pattern matching
    scores: Dict[str, int] = {}

    for lang, patterns in LANGUAGE_PATTERNS.items():
        score = 0
        for pattern in patterns:
            if re.search(pattern, code, re.MULTILINE | re.IGNORECASE):
                score += 1
        if score > 0:
            scores[lang] = score

    if scores:
        return max(scores, key=scores.get)

    return "unknown"


def count_lines(code: str) -> Dict[str, int]:
    """Count different types of lines in the code."""
    lines = code.split("\n")
    total = len(lines)
    blank = sum(1 for line in lines if not line.strip())
    comment = 0

    # Simple comment detection (varies by language)
    for line in lines:
        stripped = line.strip()
        if stripped.startswith(("#", "//", "/*", "*", "<!--", "--", ";")):
            comment += 1

    return {
        "total": total,
        "code": total - blank - comment,
        "blank": blank,
        "comment": comment
    }


def find_functions(code: str, language: str) -> List[Dict[str, any]]:
    """Find function definitions in the code."""
    functions = []

    patterns = {
        "python": r"def\s+(\w+)\s*\((.*?)\)",
        "javascript": r"(?:function\s+(\w+)|(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s*)?\()",
        "typescript": r"(?:function\s+(\w+)|(?:const|let)\s+(\w+)\s*=\s*(?:async\s*)?\()",
        "java": r"(?:public|private|protected)?\s*(?:static)?\s*\w+\s+(\w+)\s*\(",
        "go": r"func\s+(?:\(\w+\s+\*?\w+\)\s*)?(\w+)\s*\(",
        "rust": r"fn\s+(\w+)\s*(?:<[^>]+>)?\s*\(",
        "cpp": r"\w+\s+(\w+)\s*\([^)]*\)\s*{",
        "c": r"\w+\s+(\w+)\s*\([^)]*\)\s*{",
        "ruby": r"def\s+(\w+)",
        "php": r"function\s+(\w+)\s*\(",
        "swift": r"func\s+(\w+)\s*\(",
        "kotlin": r"fun\s+(\w+)\s*\(",
    }

    pattern = patterns.get(language, patterns.get("javascript"))
    if pattern:
        for i, line in enumerate(code.split("\n"), 1):
            match = re.search(pattern, line)
            if match:
                name = next((g for g in match.groups() if g), "anonymous")
                functions.append({
                    "name": name,
                    "line": i,
                    "signature": line.strip()[:100]
                })

    return functions


def calculate_complexity(code: str) -> str:
    """Calculate rough code complexity."""
    # Simple heuristic based on control flow statements
    complexity_indicators = [
        r"\bif\b",
        r"\belse\b",
        r"\bfor\b",
        r"\bwhile\b",
        r"\bswitch\b",
        r"\bcase\b",
        r"\bcatch\b",
        r"\btry\b",
        r"\b&&\b",
        r"\b\|\|\b",
        r"\?.*:",  # ternary
    ]

    score = 0
    for pattern in complexity_indicators:
        score += len(re.findall(pattern, code))

    lines = len(code.split("\n"))

    # Normalize by lines of code
    if lines > 0:
        normalized = score / lines * 10

    if normalized < 1:
        return "low"
    elif normalized < 3:
        return "medium"
    else:
        return "high"


def analyze_code(code: str, language: str = "auto") -> Dict[str, any]:
    """Perform comprehensive code analysis."""
    if language == "auto":
        language = detect_language(code)

    line_counts = count_lines(code)
    functions = find_functions(code, language)
    complexity = calculate_complexity(code)

    return {
        "language": language,
        "lines": line_counts,
        "functions": functions,
        "function_count": len(functions),
        "complexity": complexity,
    }
