export interface IA {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string[];
  pricing: "gratuit" | "freemium" | "payant";
  features: string[];
  bestFor: string;
}

export const IA_LIST: IA[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "Assistant IA conversationnel de OpenAI. Idéal pour apprendre, coder, rédiger et résoudre des problèmes.",
    url: "https://chat.openai.com",
    category: ["Général", "dev-web", "data-science", "ia-ml"],
    pricing: "freemium",
    features: [
      "Conversation naturelle",
      "Génération de code",
      "Explication de concepts",
      "Rédaction",
      "Analyse de données",
    ],
    bestFor: "Apprendre n'importe quel sujet, coder plus vite",
  },
  {
    id: "claude",
    name: "Claude",
    description:
      "Assistant IA d'Anthropic, connu pour sa capacité d'analyse et sa sécurité. Excellent pour le code et l'écriture.",
    url: "https://claude.ai",
    category: ["Général", "dev-web", "cybersecurite"],
    pricing: "freemium",
    features: [
      "Analyse approfondie",
      "Long context window",
      "Code quality",
      "Reasoning",
      "Document analysis",
    ],
    bestFor: "Analyse de code, rédaction technique, debugging",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "Assistant de code IA intégré à VS Code. Suggère du code en temps réel pendant que tu codes.",
    url: "https://github.com/features/copilot",
    category: ["dev-web", "dev-mobile"],
    pricing: "payant",
    features: [
      "Autocomplétion de code",
      "Suggestions contextuelles",
      "Multi-langages",
      "Chat intégré",
      "CLI assistance",
    ],
    bestFor: "Coder plus vite, découvrir de nouvelles APIs",
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "IDE basé sur VS Code avec IA intégrée. Édite, refactorise et comprend tout ton projet.",
    url: "https://cursor.sh",
    category: ["dev-web", "dev-mobile", "game-dev"],
    pricing: "freemium",
    features: [
      "Édition intelligente",
      "Codebase understanding",
      "Chat contextuel",
      "Refactoring",
      "Multi-fichiers",
    ],
    bestFor: "Développement rapide, refactoring de code existant",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description:
      "Moteur de recherche IA qui cite ses sources. Parfait pour trouver de la doc et des tutorials.",
    url: "https://perplexity.ai",
    category: ["Général", "data-science", "cybersecurite", "devops"],
    pricing: "freemium",
    features: [
      "Recherche avec sources",
      "Citations vérifiables",
      "Questions follow-up",
      "Focus académique",
      "Images",
    ],
    bestFor: "Rechercher de la documentation officielle",
  },
  {
    id: "v0",
    name: "Vercel v0",
    description:
      "Générateur d'interfaces UI par IA. Décris ce que tu veux et obtient du code React/Tailwind.",
    url: "https://v0.dev",
    category: ["dev-web", "ui-ux"],
    pricing: "freemium",
    features: [
      "Génération UI",
      "React/Tailwind",
      "Prototypage rapide",
      "Design responsive",
      "Code exportable",
    ],
    bestFor: "Créer rapidement des interfaces web",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description:
      "Génération d'images par IA. Utile pour le design, les prototypes et la créativité.",
    url: "https://midjourney.com",
    category: ["ui-ux", "game-dev"],
    pricing: "payant",
    features: [
      "Génération d'images",
      "Styles variés",
      "Haute qualité",
      "Upscaling",
      "Variations",
    ],
    bestFor: "Créer des visuels, illustrations, concepts",
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description:
      "Assistant d'écriture IA. Corrige, améliore et adapte ton texte automatiquement.",
    url: "https://grammarly.com",
    category: ["Général", "dev-web"],
    pricing: "freemium",
    features: [
      "Correction grammaticale",
      "Style d'écriture",
      "Ton adaptatif",
      "Plagiarism check",
      "Suggestions",
    ],
    bestFor: "Rédiger de la documentation professionnelle",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description:
      "IA intégrée à Notion pour résumer, rédiger et organiser tes notes et projets.",
    url: "https://notion.so",
    category: ["Général", "dev-web", "ui-ux"],
    pricing: "payant",
    features: [
      "Rédaction assistée",
      "Résumés",
      "Traduction",
      "Organisation",
      "Templates IA",
    ],
    bestFor: "Prendre des notes structurées, documenter",
  },
  {
    id: "khanmigo",
    name: "Khanmigo",
    description:
      "Tuteur IA de Khan Academy. Apprends la programmation, les maths et plus avec un coach personnalisé.",
    url: "https://khanacademy.org",
    category: ["Général", "data-science", "ia-ml"],
    pricing: "gratuit",
    features: [
      "Tutorat personnalisé",
      "Exercices interactifs",
      "Explications pas à pas",
      "Suivi de progression",
      "Multi-sujets",
    ],
    bestFor: "Apprendre les bases de la programmation et des maths",
  },
  {
    id: "replit-ai",
    name: "Replit AI",
    description:
      "Environnement de développement cloud avec IA. Code directement dans le navigateur.",
    url: "https://replit.com",
    category: ["dev-web", "dev-mobile"],
    pricing: "freemium",
    features: [
      "IDE cloud",
      "Génération de code",
      "Déploiement instantané",
      "Collaboration",
      "Multi-langages",
    ],
    bestFor: "Pratiquer la programmation en ligne",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    description:
      "La plateforme de référence pour les modèles de ML et NLP. Accède à des milliers de modèles open source.",
    url: "https://huggingface.co",
    category: ["ia-ml", "data-science"],
    pricing: "gratuit",
    features: [
      "Modèles open source",
      "Datasets",
      "Spaces (démo)",
      "Tokenizers",
      "Fine-tuning",
    ],
    bestFor: "Expérimenter avec des modèles ML/IA",
  },
  {
    id: "google-ai-studio",
    name: "Google AI Studio",
    description:
      "Outil Google pour expérimenter avec Gemini. Teste les modèles IA les plus avancés de Google.",
    url: "https://aistudio.google.com",
    category: ["ia-ml", "data-science"],
    pricing: "gratuit",
    features: [
      "Modèles Gemini",
      "Prompt engineering",
      "API gratuite",
      "Multimodal",
      "Fine-tuning",
    ],
    bestFor: "Expérimenter avec Gemini, apprendre le prompt engineering",
  },
  {
    id: "codeium",
    name: "Codeium (Windsurf)",
    description:
      "Alternative gratuite à Copilot. Autocomplétion IA et chat intégré dans ton éditeur.",
    url: "https://codeium.com",
    category: ["dev-web", "dev-mobile", "devops"],
    pricing: "gratuit",
    features: [
      "Autocomplétion gratuite",
      "Chat IA",
      "Multi-éditeurs",
      "Multi-langages",
      "Search",
    ],
    bestFor: "Avoir un assistant IA gratuit pour coder",
  },
  {
    id: "photogpt",
    name: "PhotoGPT",
    description:
      "Générateur de photos IA pour créer des visuels professionnels et des avatars.",
    url: "https://photogpt.ai",
    category: ["ui-ux", "game-dev"],
    pricing: "freemium",
    features: [
      "Génération de portraits",
      "Styles professionnels",
      "Avatars",
      "Backgrounds",
      "Haute résolution",
    ],
    bestFor: "Créer des visuels pour portfolios et projets",
  },
  {
    id: "powerbi-copilot",
    name: "Microsoft Copilot for Power BI",
    description:
      "IA intégrée à Power BI pour générer des formules DAX, des rapports et des insights automatiquement.",
    url: "https://powerbi.microsoft.com",
    category: ["business-intelligence", "data-science"],
    pricing: "payant",
    features: [
      "Génération DAX automatique",
      "Rapports assistés par IA",
      "Résumés de données",
      "Questions en langage naturel",
      "Suggestions de visualisations",
    ],
    bestFor: "Créer des dashboards BI rapidement",
  },
  {
    id: "sap-joule",
    name: "SAP Joule",
    description:
      "Assistant IA de SAP pour accélérer l'implémentation ERP et automatiser les tâches métier.",
    url: "https://www.sap.com/products/artificial-intelligence.html",
    category: ["erp-systemes"],
    pricing: "payant",
    features: [
      "Génération de code ABAP",
      "Automatisation ERP",
      "Analyse de processus",
      "Assistance configuration",
      "Code review",
    ],
    bestFor: "Accélérer le développement et la config SAP",
  },
  {
    id: "jira-ai",
    name: "Atlassian Intelligence",
    description:
      "IA intégrée à JIRA et Confluence pour automatiser la gestion de projet et la documentation.",
    url: "https://www.atlassian.com/software/artificial-intelligence",
    category: ["gestion-projet-it", "dev-web", "devops"],
    pricing: "freemium",
    features: [
      "Résumés de tickets",
      "Génération de user stories",
      "Rétrospectives IA",
      "Recherche intelligente",
      "Suggestion de priorités",
    ],
    bestFor: "Gérer les projets plus intelligemment",
  },
  {
    id: "snowflake-cortex",
    name: "Snowflake Cortex",
    description:
      "IA intégrée à Snowflake pour analyser les données, générer du SQL et créer des modèles ML.",
    url: "https://www.snowflake.com/product/snowflake-cortex",
    category: ["data-engineering", "data-science", "business-intelligence"],
    pricing: "payant",
    features: [
      "SQL analyste IA",
      "Modèles ML intégrés",
      "Résumés de données",
      "Search SQL",
      "Fine-tuning",
    ],
    bestFor: "Analyser des données directement dans Snowflake",
  },
  {
    id: "mendix-ai",
    name: "Mendix Assist",
    description:
      "Plateforme low-code avec IA pour créer des applications métier et ERP rapidement.",
    url: "https://www.mendix.com",
    category: ["erp-systemes", "dev-web"],
    pricing: "freemium",
    features: [
      "Génération de pages",
      "Suggestions de logic",
      "Modélisation assistée",
      "Intégration IA",
      "Low-code",
    ],
    bestFor: "Créer des apps métier rapidement",
  },
  {
    id: "datadog-ai",
    name: "Datadog AI",
    description:
      "Monitoring intelligent avec IA pour detecter les anomalies, prédire les pannes et optimiser les performances.",
    url: "https://www.datadoghq.com",
    category: ["devops", "data-engineering"],
    pricing: "payant",
    features: [
      "Anomaly detection",
      "Predictive monitoring",
      "Log analysis IA",
      "Root cause analysis",
      "Dashboards intelligents",
    ],
    bestFor: "Monitoring et observabilité intelligente",
  },
  {
    id: "sentinelone",
    name: "SentinelOne",
    description:
      "Cybersécurité basée sur l'IA. Détection et réponse aux menaces automatisées.",
    url: "https://www.sentinelone.com",
    category: ["cybersecurite", "securite-gouvernance"],
    pricing: "payant",
    features: [
      "Détection IA de menaces",
      "Réponse automatisée",
      "Analyse comportementale",
      "Forensics",
      "Compliance reporting",
    ],
    bestFor: "Protection automatisée des endpoints",
  },
  {
    id: "gemini",
    name: "Gemini",
    description:
      "Assistant IA de Google basé sur les modèles Gemini. Multimodal, rapide et intégré à l'écosystème Google.",
    url: "https://gemini.google.com",
    category: ["Général", "dev-web", "data-science", "ia-ml"],
    pricing: "freemium",
    features: [
      "Multimodal (texte, image, audio)",
      "Long context window",
      "Intégration Google",
      "Génération de code",
      "Analyse de documents",
    ],
    bestFor: "Assistant généraliste puissant, intégré à Google Workspace",
  },
  {
    id: "opencode",
    name: "OpenCode",
    description:
      "Assistant IA open source pour le développement. Alternatif gratuit et transparent aux assistants propriétaires.",
    url: "https://opencode.ai",
    category: ["dev-web", "dev-mobile", "devops"],
    pricing: "gratuit",
    features: [
      "Open source",
      "Autocomplétion de code",
      "Chat contextuel",
      "Multi-langages",
      "Self-hosted",
    ],
    bestFor: "Alternative gratuite open source pour coder",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description:
      "Modèle de langage chinois performant en code et raisonnement. Compétitif face aux meilleurs modèles occidentaux.",
    url: "https://deepseek.com",
    category: ["Général", "dev-web", "ia-ml", "data-science"],
    pricing: "freemium",
    features: [
      "Raisonnement avancé",
      "Excellence en code",
      "Long context",
      "Open weights",
      "Compétitif en mathématiques",
    ],
    bestFor: "Raisonnement complexe et génération de code de haute qualité",
  },
  {
    id: "codex",
    name: "Codex (OpenAI)",
    description:
      "Modèle spécialisé dans la génération et compréhension de code par OpenAI. Puissant pour le développement logiciel.",
    url: "https://openai.com/index/introducing-codex/",
    category: ["dev-web", "dev-mobile", "ia-ml"],
    pricing: "payant",
    features: [
      "Génération de code avancée",
      "Compréhension de code",
      "Multi-langages",
      "Autonomous coding agents",
      "Code review",
    ],
    bestFor: "Générer et comprendre du code complexe automatiquement",
  },
];

export function getIAByCategory(category: string): IA[] {
  return IA_LIST.filter((ia) => ia.category.includes(category));
}

export function getIAById(id: string): IA | undefined {
  return IA_LIST.find((ia) => ia.id === id);
}
