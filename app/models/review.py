"""Data models for code review."""
from pydantic import BaseModel, Field
from typing import Optional, List
from enum import Enum


class Severity(str, Enum):
    """Issue severity levels."""
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
    INFO = "info"


class IssueCategory(str, Enum):
    """Categories of code issues."""
    SECURITY = "security"
    PERFORMANCE = "performance"
    MAINTAINABILITY = "maintainability"
    BUG = "bug"
    STYLE = "style"
    BEST_PRACTICE = "best_practice"
    DOCUMENTATION = "documentation"


class CodeIssue(BaseModel):
    """Represents a single code issue found during review."""
    line_start: int = Field(..., description="Starting line number")
    line_end: Optional[int] = Field(None, description="Ending line number")
    severity: Severity = Field(..., description="Issue severity")
    category: IssueCategory = Field(..., description="Issue category")
    message: str = Field(..., description="Description of the issue")
    suggestion: Optional[str] = Field(None, description="Suggested fix")
    code_snippet: Optional[str] = Field(None, description="Relevant code snippet")


class ReviewRequest(BaseModel):
    """Request model for code review."""
    code: str = Field(..., description="Code to review")
    language: str = Field("auto", description="Programming language")
    filename: Optional[str] = Field(None, description="Original filename")
    context: Optional[str] = Field(None, description="Additional context")
    focus_areas: List[str] = Field(
        default_factory=list,
        description="Specific areas to focus on"
    )


class ReviewResponse(BaseModel):
    """Response model for code review."""
    summary: str = Field(..., description="Overall review summary")
    score: int = Field(..., ge=0, le=100, description="Code quality score (0-100)")
    issues: List[CodeIssue] = Field(default_factory=list, description="List of issues found")
    suggestions: List[str] = Field(default_factory=list, description="General suggestions")
    language_detected: str = Field(..., description="Detected programming language")
    metrics: dict = Field(default_factory=dict, description="Code metrics")


class ChatMessage(BaseModel):
    """Chat message model."""
    role: str = Field(..., description="Message role: user or assistant")
    content: str = Field(..., description="Message content")


class ChatRequest(BaseModel):
    """Request model for chat endpoint."""
    message: str = Field(..., description="User message")
    code: Optional[str] = Field(None, description="Code context")
    language: str = Field("en", description="UI language: en, ko, ja")
    history: List[ChatMessage] = Field(default_factory=list, description="Chat history")
