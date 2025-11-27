/**
 * OpenWebUI Code Reviewer - Frontend Application
 * Production-level with 7 languages, presets, history, and export features
 */

const i18n = {
    en: {
        title: "AI Code Reviewer",
        subtitle: "Intelligent code analysis powered by AI",
        codePanel: "CODE INPUT",
        reviewPanel: "REVIEW RESULTS",
        chatPanel: "ASK ABOUT CODE",
        placeholder: "// Paste your code here...\n// Supports: Python, JavaScript, TypeScript, Java, Go, Rust, C++, and more",
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
        testing: "Testing",
        accessibility: "Accessibility",
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
        tabReview: "Review",
        tabChat: "Chat",
        tabHistory: "History",
        tabPresets: "Presets",
        history: "Review History",
        noHistory: "No history yet",
        noHistoryDesc: "Your code reviews will appear here",
        clearHistory: "Clear History",
        viewDetails: "View Details",
        deleteItem: "Delete",
        savedAt: "Saved",
        presets: "Review Presets",
        presetsDesc: "Quick review configurations",
        usePreset: "Use Preset",
        securityAudit: "Security Audit",
        performanceReview: "Performance Review",
        codeQuality: "Code Quality",
        fullReview: "Full Review",
        quickCheck: "Quick Check",
        exportMarkdown: "Export Markdown",
        exportJson: "Export JSON",
        copyToClipboard: "Copy to Clipboard",
        copied: "Copied!",
        notification: "Notification",
        typing: "AI is thinking...",
        codeStats: "Code Statistics",
        reviewTime: "Review Time",
        issueBreakdown: "Issue Breakdown",
    },
    ko: {
        title: "AI 코드 리뷰어",
        subtitle: "AI 기반 지능형 코드 분석",
        codePanel: "코드 입력",
        reviewPanel: "리뷰 결과",
        chatPanel: "코드에 대해 질문하기",
        placeholder: "// 여기에 코드를 붙여넣으세요...\n// 지원: Python, JavaScript, TypeScript, Java, Go, Rust, C++ 등",
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
        testing: "테스트",
        accessibility: "접근성",
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
        tabReview: "리뷰",
        tabChat: "채팅",
        tabHistory: "히스토리",
        tabPresets: "프리셋",
        history: "리뷰 히스토리",
        noHistory: "히스토리가 없습니다",
        noHistoryDesc: "코드 리뷰가 여기에 표시됩니다",
        clearHistory: "히스토리 삭제",
        viewDetails: "자세히 보기",
        deleteItem: "삭제",
        savedAt: "저장 시간",
        presets: "리뷰 프리셋",
        presetsDesc: "빠른 리뷰 설정",
        usePreset: "프리셋 사용",
        securityAudit: "보안 감사",
        performanceReview: "성능 리뷰",
        codeQuality: "코드 품질",
        fullReview: "전체 리뷰",
        quickCheck: "빠른 검사",
        exportMarkdown: "마크다운 내보내기",
        exportJson: "JSON 내보내기",
        copyToClipboard: "클립보드에 복사",
        copied: "복사됨!",
        notification: "알림",
        typing: "AI가 생각하는 중...",
        codeStats: "코드 통계",
        reviewTime: "리뷰 시간",
        issueBreakdown: "이슈 분류",
    },
    ja: {
        title: "AIコードレビューア",
        subtitle: "AI搭載のインテリジェントコード分析",
        codePanel: "コード入力",
        reviewPanel: "レビュー結果",
        chatPanel: "コードについて質問",
        placeholder: "// ここにコードを貼り付けてください...\n// 対応: Python, JavaScript, TypeScript, Java, Go, Rust, C++ など",
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
        testing: "テスト",
        accessibility: "アクセシビリティ",
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
        tabReview: "レビュー",
        tabChat: "チャット",
        tabHistory: "履歴",
        tabPresets: "プリセット",
        history: "レビュー履歴",
        noHistory: "履歴がありません",
        noHistoryDesc: "コードレビューがここに表示されます",
        clearHistory: "履歴を削除",
        viewDetails: "詳細を見る",
        deleteItem: "削除",
        savedAt: "保存日時",
        presets: "レビュープリセット",
        presetsDesc: "クイックレビュー設定",
        usePreset: "プリセットを使用",
        securityAudit: "セキュリティ監査",
        performanceReview: "パフォーマンスレビュー",
        codeQuality: "コード品質",
        fullReview: "フルレビュー",
        quickCheck: "クイックチェック",
        exportMarkdown: "Markdownエクスポート",
        exportJson: "JSONエクスポート",
        copyToClipboard: "クリップボードにコピー",
        copied: "コピーしました！",
        notification: "通知",
        typing: "AIが考え中...",
        codeStats: "コード統計",
        reviewTime: "レビュー時間",
        issueBreakdown: "問題の内訳",
    },
    zh: {
        title: "AI代码审查器",
        subtitle: "AI驱动的智能代码分析",
        codePanel: "代码输入",
        reviewPanel: "审查结果",
        chatPanel: "询问代码",
        placeholder: "// 在此粘贴代码...\n// 支持: Python, JavaScript, TypeScript, Java, Go, Rust, C++ 等",
        reviewBtn: "审查代码",
        reviewing: "分析中...",
        languageLabel: "语言",
        autoDetect: "自动检测",
        focusAreas: "重点分析领域",
        security: "安全性",
        performance: "性能",
        maintainability: "可维护性",
        bugs: "Bug检测",
        bestPractices: "最佳实践",
        documentation: "文档",
        testing: "测试",
        accessibility: "可访问性",
        score: "质量评分",
        issues: "发现的问题",
        suggestions: "建议",
        chatPlaceholder: "询问关于此代码...",
        send: "发送",
        emptyTitle: "暂无审查",
        emptyDesc: "粘贴代码并点击'审查代码'开始",
        noIssues: "未发现问题！代码质量优秀。",
        lines: "行数",
        functions: "函数",
        complexity: "复杂度",
        critical: "严重",
        high: "高",
        medium: "中",
        low: "低",
        info: "信息",
        line: "行",
        suggestion: "建议",
        welcome: "你好！我是AI代码审查器。粘贴代码并询问任何问题 - 我可以帮助解释、优化和最佳实践。",
        tabReview: "审查",
        tabChat: "聊天",
        tabHistory: "历史",
        tabPresets: "预设",
        history: "审查历史",
        noHistory: "暂无历史",
        noHistoryDesc: "代码审查将显示在这里",
        clearHistory: "清除历史",
        viewDetails: "查看详情",
        deleteItem: "删除",
        savedAt: "保存时间",
        presets: "审查预设",
        presetsDesc: "快速审查配置",
        usePreset: "使用预设",
        securityAudit: "安全审计",
        performanceReview: "性能审查",
        codeQuality: "代码质量",
        fullReview: "完整审查",
        quickCheck: "快速检查",
        exportMarkdown: "导出Markdown",
        exportJson: "导出JSON",
        copyToClipboard: "复制到剪贴板",
        copied: "已复制！",
        notification: "通知",
        typing: "AI正在思考...",
        codeStats: "代码统计",
        reviewTime: "审查时间",
        issueBreakdown: "问题分类",
    },
    es: {
        title: "Revisor de Código IA",
        subtitle: "Análisis de código inteligente con IA",
        codePanel: "ENTRADA DE CÓDIGO",
        reviewPanel: "RESULTADOS DE REVISIÓN",
        chatPanel: "PREGUNTAR SOBRE CÓDIGO",
        placeholder: "// Pega tu código aquí...\n// Soporta: Python, JavaScript, TypeScript, Java, Go, Rust, C++ y más",
        reviewBtn: "Revisar Código",
        reviewing: "Analizando...",
        languageLabel: "Lenguaje",
        autoDetect: "Auto Detectar",
        focusAreas: "Áreas de Enfoque",
        security: "Seguridad",
        performance: "Rendimiento",
        maintainability: "Mantenibilidad",
        bugs: "Detección de Bugs",
        bestPractices: "Mejores Prácticas",
        documentation: "Documentación",
        testing: "Pruebas",
        accessibility: "Accesibilidad",
        score: "Puntuación de Calidad",
        issues: "Problemas Encontrados",
        suggestions: "Sugerencias",
        chatPlaceholder: "Pregunta sobre este código...",
        send: "Enviar",
        emptyTitle: "Sin Revisión Aún",
        emptyDesc: "Pega tu código y haz clic en 'Revisar Código' para comenzar",
        noIssues: "¡No se encontraron problemas! Excelente calidad de código.",
        lines: "Líneas",
        functions: "Funciones",
        complexity: "Complejidad",
        critical: "Crítico",
        high: "Alto",
        medium: "Medio",
        low: "Bajo",
        info: "Info",
        line: "Línea",
        suggestion: "Sugerencia",
        welcome: "¡Hola! Soy tu revisor de código IA. Pega código y pregúntame cualquier cosa - puedo ayudar con explicaciones, optimizaciones y mejores prácticas.",
        tabReview: "Revisión",
        tabChat: "Chat",
        tabHistory: "Historial",
        tabPresets: "Presets",
        history: "Historial de Revisiones",
        noHistory: "Sin historial",
        noHistoryDesc: "Tus revisiones de código aparecerán aquí",
        clearHistory: "Limpiar Historial",
        viewDetails: "Ver Detalles",
        deleteItem: "Eliminar",
        savedAt: "Guardado",
        presets: "Presets de Revisión",
        presetsDesc: "Configuraciones rápidas de revisión",
        usePreset: "Usar Preset",
        securityAudit: "Auditoría de Seguridad",
        performanceReview: "Revisión de Rendimiento",
        codeQuality: "Calidad de Código",
        fullReview: "Revisión Completa",
        quickCheck: "Verificación Rápida",
        exportMarkdown: "Exportar Markdown",
        exportJson: "Exportar JSON",
        copyToClipboard: "Copiar al Portapapeles",
        copied: "¡Copiado!",
        notification: "Notificación",
        typing: "IA está pensando...",
        codeStats: "Estadísticas de Código",
        reviewTime: "Tiempo de Revisión",
        issueBreakdown: "Desglose de Problemas",
    },
    fr: {
        title: "Réviseur de Code IA",
        subtitle: "Analyse de code intelligente par IA",
        codePanel: "ENTRÉE DE CODE",
        reviewPanel: "RÉSULTATS DE RÉVISION",
        chatPanel: "QUESTIONS SUR LE CODE",
        placeholder: "// Collez votre code ici...\n// Supporte: Python, JavaScript, TypeScript, Java, Go, Rust, C++ et plus",
        reviewBtn: "Réviser le Code",
        reviewing: "Analyse en cours...",
        languageLabel: "Langage",
        autoDetect: "Détection Auto",
        focusAreas: "Domaines d'Intérêt",
        security: "Sécurité",
        performance: "Performance",
        maintainability: "Maintenabilité",
        bugs: "Détection de Bugs",
        bestPractices: "Meilleures Pratiques",
        documentation: "Documentation",
        testing: "Tests",
        accessibility: "Accessibilité",
        score: "Score de Qualité",
        issues: "Problèmes Trouvés",
        suggestions: "Suggestions",
        chatPlaceholder: "Posez une question sur ce code...",
        send: "Envoyer",
        emptyTitle: "Pas de Révision",
        emptyDesc: "Collez votre code et cliquez sur 'Réviser le Code' pour commencer",
        noIssues: "Aucun problème trouvé! Excellente qualité de code.",
        lines: "Lignes",
        functions: "Fonctions",
        complexity: "Complexité",
        critical: "Critique",
        high: "Élevé",
        medium: "Moyen",
        low: "Faible",
        info: "Info",
        line: "Ligne",
        suggestion: "Suggestion",
        welcome: "Bonjour! Je suis votre réviseur de code IA. Collez du code et posez-moi n'importe quelle question - je peux aider avec les explications, optimisations et meilleures pratiques.",
        tabReview: "Révision",
        tabChat: "Chat",
        tabHistory: "Historique",
        tabPresets: "Préréglages",
        history: "Historique des Révisions",
        noHistory: "Pas d'historique",
        noHistoryDesc: "Vos révisions de code apparaîtront ici",
        clearHistory: "Effacer l'Historique",
        viewDetails: "Voir les Détails",
        deleteItem: "Supprimer",
        savedAt: "Enregistré",
        presets: "Préréglages de Révision",
        presetsDesc: "Configurations rapides de révision",
        usePreset: "Utiliser le Préréglage",
        securityAudit: "Audit de Sécurité",
        performanceReview: "Révision de Performance",
        codeQuality: "Qualité de Code",
        fullReview: "Révision Complète",
        quickCheck: "Vérification Rapide",
        exportMarkdown: "Exporter Markdown",
        exportJson: "Exporter JSON",
        copyToClipboard: "Copier dans le Presse-papiers",
        copied: "Copié!",
        notification: "Notification",
        typing: "L'IA réfléchit...",
        codeStats: "Statistiques du Code",
        reviewTime: "Temps de Révision",
        issueBreakdown: "Répartition des Problèmes",
    },
    de: {
        title: "KI-Code-Reviewer",
        subtitle: "Intelligente KI-gestützte Code-Analyse",
        codePanel: "CODE-EINGABE",
        reviewPanel: "REVIEW-ERGEBNISSE",
        chatPanel: "ÜBER CODE FRAGEN",
        placeholder: "// Fügen Sie hier Ihren Code ein...\n// Unterstützt: Python, JavaScript, TypeScript, Java, Go, Rust, C++ und mehr",
        reviewBtn: "Code überprüfen",
        reviewing: "Analysiere...",
        languageLabel: "Sprache",
        autoDetect: "Auto-Erkennung",
        focusAreas: "Schwerpunktbereiche",
        security: "Sicherheit",
        performance: "Leistung",
        maintainability: "Wartbarkeit",
        bugs: "Bug-Erkennung",
        bestPractices: "Best Practices",
        documentation: "Dokumentation",
        testing: "Tests",
        accessibility: "Barrierefreiheit",
        score: "Qualitätspunktzahl",
        issues: "Gefundene Probleme",
        suggestions: "Vorschläge",
        chatPlaceholder: "Fragen Sie zu diesem Code...",
        send: "Senden",
        emptyTitle: "Noch kein Review",
        emptyDesc: "Fügen Sie Code ein und klicken Sie auf 'Code überprüfen', um zu starten",
        noIssues: "Keine Probleme gefunden! Ausgezeichnete Code-Qualität.",
        lines: "Zeilen",
        functions: "Funktionen",
        complexity: "Komplexität",
        critical: "Kritisch",
        high: "Hoch",
        medium: "Mittel",
        low: "Niedrig",
        info: "Info",
        line: "Zeile",
        suggestion: "Vorschlag",
        welcome: "Hallo! Ich bin Ihr KI-Code-Reviewer. Fügen Sie Code ein und fragen Sie mich alles - ich kann bei Erklärungen, Optimierungen und Best Practices helfen.",
        tabReview: "Review",
        tabChat: "Chat",
        tabHistory: "Verlauf",
        tabPresets: "Vorlagen",
        history: "Review-Verlauf",
        noHistory: "Kein Verlauf",
        noHistoryDesc: "Ihre Code-Reviews erscheinen hier",
        clearHistory: "Verlauf löschen",
        viewDetails: "Details anzeigen",
        deleteItem: "Löschen",
        savedAt: "Gespeichert",
        presets: "Review-Vorlagen",
        presetsDesc: "Schnelle Review-Konfigurationen",
        usePreset: "Vorlage verwenden",
        securityAudit: "Sicherheitsaudit",
        performanceReview: "Performance-Review",
        codeQuality: "Code-Qualität",
        fullReview: "Vollständiges Review",
        quickCheck: "Schnellprüfung",
        exportMarkdown: "Markdown exportieren",
        exportJson: "JSON exportieren",
        copyToClipboard: "In Zwischenablage kopieren",
        copied: "Kopiert!",
        notification: "Benachrichtigung",
        typing: "KI denkt nach...",
        codeStats: "Code-Statistiken",
        reviewTime: "Review-Zeit",
        issueBreakdown: "Problemaufschlüsselung",
    }
};

// Review presets
const reviewPresets = {
    securityAudit: {
        icon: '🔒',
        areas: ['security', 'bugs'],
        description: 'Focus on security vulnerabilities and potential exploits'
    },
    performanceReview: {
        icon: '⚡',
        areas: ['performance'],
        description: 'Analyze performance bottlenecks and optimization opportunities'
    },
    codeQuality: {
        icon: '✨',
        areas: ['maintainability', 'bestPractices', 'documentation'],
        description: 'Check code style, readability, and documentation'
    },
    fullReview: {
        icon: '🔍',
        areas: ['security', 'performance', 'maintainability', 'bugs', 'bestPractices', 'documentation'],
        description: 'Comprehensive review of all aspects'
    },
    quickCheck: {
        icon: '⚡',
        areas: ['bugs', 'bestPractices'],
        description: 'Quick scan for obvious issues'
    }
};

// State
let currentLang = 'en';
let currentCode = '';
let currentTab = 'review';
let reviewResult = null;
let chatHistory = [];
let selectedFocusAreas = [];
let reviewHistory = [];

// DOM Elements
const codeEditor = document.getElementById('codeEditor');
const languageSelect = document.getElementById('languageSelect');
const reviewBtn = document.getElementById('reviewBtn');
const reviewResults = document.getElementById('reviewResults');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    setLanguage(currentLang);
    loadLanguages();
    setupFocusAreas();
    addWelcomeMessage();
});

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('codeReviewHistory');
        if (saved) reviewHistory = JSON.parse(saved);

        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && i18n[savedLang]) currentLang = savedLang;
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('codeReviewHistory', JSON.stringify(reviewHistory.slice(-50)));
        localStorage.setItem('preferredLanguage', currentLang);
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

// Language switching
function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    // Update all text elements
    const elements = {
        'title': t.title,
        'subtitle': t.subtitle,
        'codePanelTitle': t.codePanel,
        'reviewPanelTitle': t.reviewPanel,
        'chatPanelTitle': t.chatPanel,
        'reviewBtnText': t.reviewBtn,
        'sendBtnText': t.send,
    };

    Object.entries(elements).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });

    if (codeEditor) codeEditor.placeholder = t.placeholder;
    if (chatInput) chatInput.placeholder = t.chatPlaceholder;

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update focus area chips
    updateFocusAreaLabels();

    // Update tabs
    updateTabLabels();

    // Update review results if present
    if (reviewResult) {
        renderReviewResults(reviewResult);
    }

    saveToLocalStorage();
}

function updateTabLabels() {
    const t = i18n[currentLang];
    document.querySelectorAll('.tab').forEach(tab => {
        const tabType = tab.dataset.tab;
        if (tabType && t['tab' + tabType.charAt(0).toUpperCase() + tabType.slice(1)]) {
            tab.textContent = t['tab' + tabType.charAt(0).toUpperCase() + tabType.slice(1)];
        }
    });
}

// Load programming languages
async function loadLanguages() {
    try {
        const response = await fetch('/api/languages');
        const data = await response.json();

        if (languageSelect) {
            languageSelect.innerHTML = data.languages.map(lang =>
                `<option value="${lang.code}">${lang.name}</option>`
            ).join('');
        }
    } catch (error) {
        console.error('Failed to load languages:', error);
        // Fallback languages
        if (languageSelect) {
            languageSelect.innerHTML = `
                <option value="auto">Auto Detect</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="java">Java</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
                <option value="cpp">C++</option>
            `;
        }
    }
}

// Setup focus areas
function setupFocusAreas() {
    const container = document.getElementById('focusAreas');
    if (!container) return;

    const areas = ['security', 'performance', 'maintainability', 'bugs', 'bestPractices', 'documentation', 'testing'];

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
        if (area && t[area]) {
            chip.textContent = t[area];
        }
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

// Tab switching
function showTab(tab) {
    currentTab = tab;
    const reviewResultsEl = document.getElementById('reviewResults');
    const chatPanel = document.getElementById('chatPanel');

    document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });

    if (tab === 'review') {
        if (reviewResultsEl) reviewResultsEl.style.display = 'block';
        if (chatPanel) chatPanel.style.display = 'none';
        if (reviewResult) {
            renderReviewResults(reviewResult);
        } else {
            renderEmptyState();
        }
    } else if (tab === 'chat') {
        if (reviewResultsEl) reviewResultsEl.style.display = 'none';
        if (chatPanel) chatPanel.style.display = 'flex';
    } else if (tab === 'history') {
        if (reviewResultsEl) reviewResultsEl.style.display = 'block';
        if (chatPanel) chatPanel.style.display = 'none';
        renderHistory();
    } else if (tab === 'presets') {
        if (reviewResultsEl) reviewResultsEl.style.display = 'block';
        if (chatPanel) chatPanel.style.display = 'none';
        renderPresets();
    }
}

// Code Review
async function reviewCode() {
    const code = codeEditor?.value.trim();
    if (!code) {
        showNotification('Please enter code to review', 'warning');
        return;
    }

    currentCode = code;
    const t = i18n[currentLang];

    // Show loading state
    if (reviewBtn) reviewBtn.disabled = true;
    const reviewBtnText = document.getElementById('reviewBtnText');
    if (reviewBtnText) reviewBtnText.textContent = t.reviewing;

    if (reviewResults) {
        reviewResults.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <span>${t.reviewing}</span>
            </div>
        `;
    }

    const startTime = Date.now();

    try {
        const response = await fetch('/api/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: code,
                language: languageSelect?.value || 'auto',
                focus_areas: selectedFocusAreas,
                lang: currentLang
            })
        });

        if (!response.ok) throw new Error('Review failed');

        reviewResult = await response.json();
        reviewResult.reviewTime = ((Date.now() - startTime) / 1000).toFixed(1);

        // Save to history
        saveToHistory(reviewResult);

        renderReviewResults(reviewResult);
        showNotification('Code review completed!', 'success');

    } catch (error) {
        console.error('Review error:', error);
        if (reviewResults) {
            reviewResults.innerHTML = `
                <div class="empty-state error">
                    <div class="empty-state-icon">⚠️</div>
                    <h3>Error</h3>
                    <p>${error.message}</p>
                </div>
            `;
        }
    } finally {
        if (reviewBtn) reviewBtn.disabled = false;
        if (reviewBtnText) reviewBtnText.textContent = t.reviewBtn;
    }
}

function saveToHistory(result) {
    const historyItem = {
        id: Date.now(),
        score: result.score,
        issueCount: result.issues?.length || 0,
        language: languageSelect?.value || 'auto',
        timestamp: new Date().toISOString(),
        result: result
    };

    reviewHistory.unshift(historyItem);
    if (reviewHistory.length > 50) reviewHistory.pop();
    saveToLocalStorage();
}

// Render review results
function renderReviewResults(result) {
    const t = i18n[currentLang];

    const scoreColor = result.score >= 80 ? 'var(--success)' :
                       result.score >= 60 ? 'var(--warning)' : 'var(--error)';

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
        issuesHTML = `<div class="no-issues">✅ ${t.noIssues}</div>`;
    }

    const localAnalysis = result.local_analysis || {};

    // Count issues by severity
    const issueCounts = {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0
    };
    (result.issues || []).forEach(issue => {
        if (issueCounts.hasOwnProperty(issue.severity)) {
            issueCounts[issue.severity]++;
        }
    });

    if (reviewResults) {
        reviewResults.innerHTML = `
            <div class="review-container">
                <div class="review-header">
                    <div class="score-section">
                        <div class="score-circle" style="--score: ${result.score}; --score-color: ${scoreColor}">
                            <span style="color: ${scoreColor}">${result.score}</span>
                        </div>
                        <div class="score-label">${t.score}</div>
                    </div>
                    <div class="review-actions">
                        <button class="action-btn" onclick="copyToClipboard()" title="${t.copyToClipboard}">
                            <span>📋</span>
                        </button>
                        <button class="action-btn" onclick="exportMarkdown()" title="${t.exportMarkdown}">
                            <span>📝</span>
                        </button>
                        <button class="action-btn" onclick="exportJson()" title="${t.exportJson}">
                            <span>📄</span>
                        </button>
                    </div>
                </div>

                <div class="summary-text">${result.summary || ''}</div>

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
                    <div class="metric-card">
                        <div class="metric-value">${result.reviewTime || '-'}s</div>
                        <div class="metric-label">${t.reviewTime}</div>
                    </div>
                </div>

                ${result.issues && result.issues.length > 0 ? `
                    <div class="issue-breakdown">
                        <h4>${t.issueBreakdown}</h4>
                        <div class="breakdown-bars">
                            ${issueCounts.critical > 0 ? `<div class="breakdown-item critical"><span class="count">${issueCounts.critical}</span><span class="label">${t.critical}</span></div>` : ''}
                            ${issueCounts.high > 0 ? `<div class="breakdown-item high"><span class="count">${issueCounts.high}</span><span class="label">${t.high}</span></div>` : ''}
                            ${issueCounts.medium > 0 ? `<div class="breakdown-item medium"><span class="count">${issueCounts.medium}</span><span class="label">${t.medium}</span></div>` : ''}
                            ${issueCounts.low > 0 ? `<div class="breakdown-item low"><span class="count">${issueCounts.low}</span><span class="label">${t.low}</span></div>` : ''}
                        </div>
                    </div>
                ` : ''}

                <div class="issues-section">
                    <h4>${t.issues} (${result.issues?.length || 0})</h4>
                    ${issuesHTML}
                </div>

                ${result.suggestions && result.suggestions.length > 0 ? `
                    <div class="suggestions-section">
                        <h4>${t.suggestions}</h4>
                        <ul class="suggestions-list">
                            ${result.suggestions.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
    }
}

function renderEmptyState() {
    const t = i18n[currentLang];
    if (reviewResults) {
        reviewResults.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📝</div>
                <h3>${t.emptyTitle}</h3>
                <p>${t.emptyDesc}</p>
            </div>
        `;
    }
}

function renderHistory() {
    const t = i18n[currentLang];

    if (!reviewHistory.length) {
        if (reviewResults) {
            reviewResults.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📜</div>
                    <h3>${t.noHistory}</h3>
                    <p>${t.noHistoryDesc}</p>
                </div>
            `;
        }
        return;
    }

    const historyHtml = reviewHistory.map(item => {
        const date = new Date(item.timestamp).toLocaleString();
        const scoreColor = item.score >= 80 ? 'var(--success)' :
                          item.score >= 60 ? 'var(--warning)' : 'var(--error)';

        return `
            <div class="history-item" data-id="${item.id}">
                <div class="history-score" style="color: ${scoreColor}">${item.score}</div>
                <div class="history-info">
                    <div class="history-lang">${item.language}</div>
                    <div class="history-date">${date}</div>
                    <div class="history-issues">${item.issueCount} ${t.issues.toLowerCase()}</div>
                </div>
                <div class="history-actions">
                    <button class="action-btn small" onclick="viewHistoryItem(${item.id})" title="${t.viewDetails}">
                        <span>👁️</span>
                    </button>
                    <button class="action-btn small danger" onclick="deleteHistoryItem(${item.id})" title="${t.deleteItem}">
                        <span>🗑️</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    if (reviewResults) {
        reviewResults.innerHTML = `
            <div class="history-container">
                <div class="history-header">
                    <h3><span class="icon">📜</span> ${t.history}</h3>
                    <button class="btn btn-secondary small" onclick="clearHistory()">
                        <span>🗑️</span> ${t.clearHistory}
                    </button>
                </div>
                <div class="history-list">
                    ${historyHtml}
                </div>
            </div>
        `;
    }
}

function renderPresets() {
    const t = i18n[currentLang];

    const presetsHtml = Object.entries(reviewPresets).map(([key, preset]) => `
        <div class="preset-card" onclick="usePreset('${key}')">
            <div class="preset-icon">${preset.icon}</div>
            <div class="preset-info">
                <h4>${t[key] || key}</h4>
                <p>${preset.description}</p>
                <div class="preset-areas">
                    ${preset.areas.map(area => `<span class="preset-area">${t[area]}</span>`).join('')}
                </div>
            </div>
            <button class="preset-use-btn">${t.usePreset}</button>
        </div>
    `).join('');

    if (reviewResults) {
        reviewResults.innerHTML = `
            <div class="presets-container">
                <div class="presets-header">
                    <h3><span class="icon">⚙️</span> ${t.presets}</h3>
                    <p>${t.presetsDesc}</p>
                </div>
                <div class="presets-grid">
                    ${presetsHtml}
                </div>
            </div>
        `;
    }
}

// History functions
function viewHistoryItem(id) {
    const item = reviewHistory.find(h => h.id === id);
    if (!item || !item.result) return;

    reviewResult = item.result;
    showTab('review');
}

function deleteHistoryItem(id) {
    reviewHistory = reviewHistory.filter(h => h.id !== id);
    saveToLocalStorage();
    renderHistory();
    showNotification('Item deleted', 'success');
}

function clearHistory() {
    if (confirm('Are you sure you want to clear all history?')) {
        reviewHistory = [];
        saveToLocalStorage();
        renderHistory();
        showNotification('History cleared', 'success');
    }
}

// Preset functions
function usePreset(presetKey) {
    const preset = reviewPresets[presetKey];
    if (!preset) return;

    selectedFocusAreas = [...preset.areas];

    document.querySelectorAll('.focus-chip').forEach(chip => {
        chip.classList.toggle('active', selectedFocusAreas.includes(chip.dataset.area));
    });

    showTab('review');
    showNotification(`Preset "${i18n[currentLang][presetKey]}" applied!`, 'success');
}

// Export functions
function copyToClipboard() {
    if (!reviewResult) return;

    const text = generateMarkdown();
    navigator.clipboard.writeText(text).then(() => {
        showNotification(i18n[currentLang].copied, 'success');
    });
}

function exportMarkdown() {
    if (!reviewResult) return;

    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code-review-${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
}

function exportJson() {
    if (!reviewResult) return;

    const json = JSON.stringify(reviewResult, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code-review-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function generateMarkdown() {
    const t = i18n[currentLang];
    let md = `# Code Review Report\n\n`;
    md += `**${t.score}:** ${reviewResult.score}/100\n\n`;
    md += `## Summary\n${reviewResult.summary}\n\n`;

    if (reviewResult.issues?.length) {
        md += `## ${t.issues}\n\n`;
        reviewResult.issues.forEach((issue, i) => {
            md += `### ${i + 1}. ${issue.message}\n`;
            md += `- **Severity:** ${t[issue.severity] || issue.severity}\n`;
            md += `- **${t.line}:** ${issue.line_start}${issue.line_end ? '-' + issue.line_end : ''}\n`;
            if (issue.suggestion) {
                md += `- **${t.suggestion}:** ${issue.suggestion}\n`;
            }
            md += '\n';
        });
    }

    if (reviewResult.suggestions?.length) {
        md += `## ${t.suggestions}\n\n`;
        reviewResult.suggestions.forEach(s => {
            md += `- ${s}\n`;
        });
    }

    return md;
}

// Chat functionality
function addWelcomeMessage() {
    const t = i18n[currentLang];
    chatHistory = [{ role: 'assistant', content: t.welcome }];
    renderChatMessages();
}

function addMessage(content, role) {
    chatHistory.push({ role, content });
    renderChatMessages();
}

function renderChatMessages() {
    if (!chatMessages) return;

    chatMessages.innerHTML = chatHistory.map(msg => `
        <div class="message ${msg.role}">
            ${formatMessage(msg.content)}
        </div>
    `).join('');

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatMessage(content) {
    return content.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/\n/g, '<br>');
}

async function sendMessage() {
    const message = chatInput?.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    if (chatInput) chatInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: message,
                code: currentCode || null,
                language: currentLang,
                history: chatHistory.slice(-10)
            })
        });

        hideTypingIndicator();

        if (!response.ok) throw new Error('Chat failed');

        const data = await response.json();
        addMessage(data.response, 'assistant');

    } catch (error) {
        hideTypingIndicator();
        console.error('Chat error:', error);
        addMessage('Sorry, an error occurred. Please try again.', 'assistant');
    }
}

function showTypingIndicator() {
    if (!chatMessages) return;

    const typing = document.createElement('div');
    typing.className = 'message assistant typing-indicator';
    typing.id = 'typingIndicator';
    typing.innerHTML = `
        <div class="typing-dots">
            <span></span><span></span><span></span>
        </div>
        <span class="typing-text">${i18n[currentLang].typing}</span>
    `;
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

// Notification
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Event listeners
if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

// Clear code
function clearCode() {
    if (codeEditor) codeEditor.value = '';
    currentCode = '';
    reviewResult = null;
    renderEmptyState();
}
