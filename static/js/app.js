/**
 * OpenWebUI Code Reviewer - Frontend Application
 * Supports: OpenAI, Ollama, Anthropic
 */

// Internationalization
const i18n = {
    en: {
        title: "AI Code Reviewer",
        subtitle: "Intelligent code analysis powered by AI",
        codePanel: "CODE INPUT",
        reviewPanel: "REVIEW RESULTS",
        chatPanel: "ASK ABOUT CODE",
        placeholder: "// Paste your code here...\n// Supports: Python, JavaScript, TypeScript, Java, Go, Rust, and more",
        reviewBtn: "Review Code",
        reviewing: "Analyzing...",
        languageLabel: "Language",
        autoDetect: "Auto Detect",
        focusAreas: "Focus Areas",
        security: "Security",
        performance: "Performance",
        maintainability: "Maintainability",
        bugs: "Bug Detection",
        bestPractices: "Best Practices",
        documentation: "Documentation",
        score: "Quality Score",
        issues: "Issues Found",
        suggestions: "Suggestions",
        chatPlaceholder: "Ask about this code...",
        send: "Send",
        emptyTitle: "No Review Yet",
        emptyDesc: "Paste your code and click 'Review Code' to get started",
        noIssues: "No issues found! Great code quality.",
        lines: "Lines",
        functions: "Functions",
        complexity: "Complexity",
        critical: "Critical",
        high: "High",
        medium: "Medium",
        low: "Low",
        info: "Info",
        line: "Line",
        suggestion: "Suggestion",
        welcome: "Hello! I'm your AI code reviewer. Paste some code and ask me anything about it - I can help with explanations, optimizations, and best practices.",
    },
    ko: {
        title: "AI 코드 리뷰어",
        subtitle: "AI 기반 지능형 코드 분석",
        codePanel: "코드 입력",
        reviewPanel: "리뷰 결과",
        chatPanel: "코드에 대해 질문하기",
        placeholder: "// 여기에 코드를 붙여넣으세요...\n// 지원: Python, JavaScript, TypeScript, Java, Go, Rust 등",
        reviewBtn: "코드 리뷰",
        reviewing: "분석 중...",
        languageLabel: "언어",
        autoDetect: "자동 감지",
        focusAreas: "집중 분석 영역",
        security: "보안",
        performance: "성능",
        maintainability: "유지보수성",
        bugs: "버그 탐지",
        bestPractices: "모범 사례",
        documentation: "문서화",
        score: "품질 점수",
        issues: "발견된 이슈",
        suggestions: "제안 사항",
        chatPlaceholder: "이 코드에 대해 질문하세요...",
        send: "전송",
        emptyTitle: "아직 리뷰가 없습니다",
        emptyDesc: "코드를 붙여넣고 '코드 리뷰' 버튼을 클릭하세요",
        noIssues: "이슈가 없습니다! 훌륭한 코드 품질입니다.",
        lines: "라인",
        functions: "함수",
        complexity: "복잡도",
        critical: "심각",
        high: "높음",
        medium: "보통",
        low: "낮음",
        info: "정보",
        line: "라인",
        suggestion: "제안",
        welcome: "안녕하세요! AI 코드 리뷰어입니다. 코드를 붙여넣고 무엇이든 물어보세요 - 설명, 최적화, 모범 사례에 대해 도움을 드릴 수 있습니다.",
    },
    ja: {
        title: "AIコードレビューア",
        subtitle: "AI搭載のインテリジェントコード分析",
        codePanel: "コード入力",
        reviewPanel: "レビュー結果",
        chatPanel: "コードについて質問",
        placeholder: "// ここにコードを貼り付けてください...\n// 対応: Python, JavaScript, TypeScript, Java, Go, Rust など",
        reviewBtn: "コードレビュー",
        reviewing: "分析中...",
        languageLabel: "言語",
        autoDetect: "自動検出",
        focusAreas: "重点分析エリア",
        security: "セキュリティ",
        performance: "パフォーマンス",
        maintainability: "保守性",
        bugs: "バグ検出",
        bestPractices: "ベストプラクティス",
        documentation: "ドキュメント",
        score: "品質スコア",
        issues: "検出された問題",
        suggestions: "提案",
        chatPlaceholder: "このコードについて質問...",
        send: "送信",
        emptyTitle: "レビューがありません",
        emptyDesc: "コードを貼り付けて「コードレビュー」をクリックしてください",
        noIssues: "問題が見つかりませんでした！素晴らしいコード品質です。",
        lines: "行数",
        functions: "関数",
        complexity: "複雑度",
        critical: "重大",
        high: "高",
        medium: "中",
        low: "低",
        info: "情報",
        line: "行",
        suggestion: "提案",
        welcome: "こんにちは！AIコードレビューアです。コードを貼り付けて何でも聞いてください - 説明、最適化、ベストプラクティスについてお手伝いします。",
    }
};

// State
let currentLang = 'en';
let currentCode = '';
let reviewResult = null;
let chatHistory = [];
let selectedFocusAreas = [];

// DOM Elements
const codeEditor = document.getElementById('codeEditor');
const languageSelect = document.getElementById('languageSelect');
const reviewBtn = document.getElementById('reviewBtn');
const reviewResults = document.getElementById('reviewResults');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    loadLanguages();
    setupFocusAreas();
    addWelcomeMessage();
});

// Language switching
function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    // Update all text elements
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('codePanelTitle').textContent = t.codePanel;
    document.getElementById('reviewPanelTitle').textContent = t.reviewPanel;
    document.getElementById('chatPanelTitle').textContent = t.chatPanel;
    document.getElementById('reviewBtnText').textContent = t.reviewBtn;
    document.getElementById('chatInput').placeholder = t.chatPlaceholder;
    document.getElementById('sendBtnText').textContent = t.send;

    codeEditor.placeholder = t.placeholder;

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update focus area chips
    updateFocusAreaLabels();

    // Update review results if present
    if (reviewResult) {
        renderReviewResults(reviewResult);
    }
}

// Load programming languages
async function loadLanguages() {
    try {
        const response = await fetch('/api/languages');
        const data = await response.json();

        languageSelect.innerHTML = data.languages.map(lang =>
            `<option value="${lang.code}">${lang.name}</option>`
        ).join('');
    } catch (error) {
        console.error('Failed to load languages:', error);
    }
}

// Setup focus areas
function setupFocusAreas() {
    const container = document.getElementById('focusAreas');
    const areas = ['security', 'performance', 'maintainability', 'bugs', 'bestPractices', 'documentation'];

    container.innerHTML = areas.map(area =>
        `<button class="focus-chip" data-area="${area}" onclick="toggleFocusArea('${area}')">
            ${i18n[currentLang][area]}
        </button>`
    ).join('');
}

function updateFocusAreaLabels() {
    const t = i18n[currentLang];
    document.querySelectorAll('.focus-chip').forEach(chip => {
        const area = chip.dataset.area;
        chip.textContent = t[area];
    });
}

function toggleFocusArea(area) {
    const index = selectedFocusAreas.indexOf(area);
    if (index > -1) {
        selectedFocusAreas.splice(index, 1);
    } else {
        selectedFocusAreas.push(area);
    }

    document.querySelectorAll('.focus-chip').forEach(chip => {
        chip.classList.toggle('active', selectedFocusAreas.includes(chip.dataset.area));
    });
}

// Code Review
async function reviewCode() {
    const code = codeEditor.value.trim();
    if (!code) return;

    currentCode = code;
    const t = i18n[currentLang];

    // Show loading state
    reviewBtn.disabled = true;
    document.getElementById('reviewBtnText').textContent = t.reviewing;
    reviewResults.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <span>${t.reviewing}</span>
        </div>
    `;

    try {
        const response = await fetch('/api/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: code,
                language: languageSelect.value,
                focus_areas: selectedFocusAreas
            })
        });

        if (!response.ok) throw new Error('Review failed');

        reviewResult = await response.json();
        renderReviewResults(reviewResult);

    } catch (error) {
        console.error('Review error:', error);
        reviewResults.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <h3>Error</h3>
                <p>${error.message}</p>
            </div>
        `;
    } finally {
        reviewBtn.disabled = false;
        document.getElementById('reviewBtnText').textContent = t.reviewBtn;
    }
}

// Render review results
function renderReviewResults(result) {
    const t = i18n[currentLang];

    const scoreColor = result.score >= 80 ? 'var(--secondary)' :
                       result.score >= 60 ? 'var(--warning)' : 'var(--danger)';

    let issuesHTML = '';
    if (result.issues && result.issues.length > 0) {
        issuesHTML = result.issues.map(issue => `
            <div class="issue-item ${issue.severity}">
                <div class="issue-header">
                    <span class="issue-severity ${issue.severity}">${t[issue.severity] || issue.severity}</span>
                    <span class="issue-line">${t.line} ${issue.line_start}${issue.line_end ? '-' + issue.line_end : ''}</span>
                </div>
                <div class="issue-message">${issue.message}</div>
                ${issue.suggestion ? `<div class="issue-suggestion">💡 ${t.suggestion}: ${issue.suggestion}</div>` : ''}
            </div>
        `).join('');
    } else {
        issuesHTML = `<div class="empty-state" style="padding: 1rem;"><p>✅ ${t.noIssues}</p></div>`;
    }

    const localAnalysis = result.local_analysis || {};

    reviewResults.innerHTML = `
        <div class="review-container">
            <div class="score-section">
                <div class="score-circle" style="--score: ${result.score}">
                    <span style="color: ${scoreColor}">${result.score}</span>
                </div>
                <div class="score-label">${t.score}</div>
                <div class="summary-text">${result.summary}</div>
            </div>

            <div class="metrics-grid">
                <div class="metric-card">
                    <div class="metric-value">${localAnalysis.lines?.total || '-'}</div>
                    <div class="metric-label">${t.lines}</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value">${localAnalysis.function_count || '-'}</div>
                    <div class="metric-label">${t.functions}</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value">${localAnalysis.complexity || '-'}</div>
                    <div class="metric-label">${t.complexity}</div>
                </div>
            </div>

            <h4 style="margin-bottom: 0.75rem; color: var(--text-secondary); font-size: 0.875rem;">
                ${t.issues} (${result.issues?.length || 0})
            </h4>
            <div class="issues-section">
                ${issuesHTML}
            </div>

            ${result.suggestions && result.suggestions.length > 0 ? `
                <h4 style="margin: 1rem 0 0.75rem; color: var(--text-secondary); font-size: 0.875rem;">
                    ${t.suggestions}
                </h4>
                <ul style="padding-left: 1.25rem; color: var(--text-secondary); font-size: 0.875rem;">
                    ${result.suggestions.map(s => `<li style="margin-bottom: 0.5rem;">${s}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `;
}

// Chat functionality
function addWelcomeMessage() {
    const t = i18n[currentLang];
    addMessage(t.welcome, 'assistant');
}

function addMessage(content, role) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    messageDiv.innerHTML = formatMessage(content);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatMessage(content) {
    // Simple markdown-like formatting for code blocks
    return content.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/\n/g, '<br>');
}

async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Add to history
    chatHistory.push({ role: 'user', content: message });

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: message,
                code: currentCode || null,
                language: currentLang,
                history: chatHistory.slice(-10) // Last 10 messages for context
            })
        });

        if (!response.ok) throw new Error('Chat failed');

        const data = await response.json();
        addMessage(data.response, 'assistant');
        chatHistory.push({ role: 'assistant', content: data.response });

    } catch (error) {
        console.error('Chat error:', error);
        addMessage('Sorry, an error occurred. Please try again.', 'assistant');
    }
}

// Event listeners
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Clear code
function clearCode() {
    codeEditor.value = '';
    currentCode = '';
    reviewResult = null;
    reviewResults.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📝</div>
            <h3>${i18n[currentLang].emptyTitle}</h3>
            <p>${i18n[currentLang].emptyDesc}</p>
        </div>
    `;
}
