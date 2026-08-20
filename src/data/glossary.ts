export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  // Dev
  { term: "API", definition: "Application Programming Interface. Ensemble de règles permettant à deux logiciels de communiquer entre eux.", category: "Dev" },
  { term: "REST", definition: "Representational State Transfer. Architecture de conception d'API web utilisant les verbes HTTP (GET, POST, PUT, DELETE).", category: "Dev" },
  { term: "GraphQL", definition: "Langage de requête pour les API, permet au client de demander exactement les données dont il a besoin.", category: "Dev" },
  { term: "Frontend", definition: "Partie visible d'une application web, côté navigateur. HTML, CSS, JavaScript.", category: "Dev" },
  { term: "Backend", definition: "Partie serveur d'une application, gère la logique métier, les bases de données et l'authentification.", category: "Dev" },
  { term: "Full-stack", definition: "Développeur capable de travailler aussi bien sur le frontend que le backend.", category: "Dev" },
  { term: "SDK", definition: "Software Development Kit. Ensemble d'outils et de bibliothèques pour développer sur une plateforme spécifique.", category: "Dev" },
  { term: "JSON", definition: "JavaScript Object Notation. Format de données léger et lisible, très utilisé pour les API web.", category: "Dev" },
  { term: "CI/CD", definition: "Continuous Integration / Continuous Delivery. Automatisation de l'intégration, des tests et du déploiement du code.", category: "Dev" },
  { term: "Git", definition: "Système de contrôle de version distribué, permet de suivre les modifications du code source.", category: "Dev" },

  // Data
  { term: "SQL", definition: "Structured Query Language. Langage de requête pour manipuler et interroger les bases de données relationnelles.", category: "Data" },
  { term: "NoSQL", definition: "Bases de données non relationnelles (MongoDB, Redis). Adaptées aux données massives et non structurées.", category: "Data" },
  { term: "ETL", definition: "Extract, Transform, Load. Processus d'extraction de données, transformation et chargement dans un data warehouse.", category: "Data" },
  { term: "Data Warehouse", definition: "Entrepôt de données centralisé pour l'analyse et le reporting business.", category: "Data" },
  { term: "Data Lake", definition: "Stockage massif de données brutes dans leur format natif, avant traitement.", category: "Data" },
  { term: "DAX", definition: "Data Analysis Expressions. Langage de formules utilisé dans Power BI pour créer des mesures et colonnes calculées.", category: "Data" },
  { term: "Dashboard", definition: "Tableau de bord visuel présentant les KPIs et métriques clés de manière interactive.", category: "Data" },
  { term: "ETL Pipeline", definition: "Chaîne automatisée de traitement de données, de la source jusqu'à la destination finale.", category: "Data" },

  // DevOps & Cloud
  { term: "Docker", definition: "Plateforme de conteneurisation. Permet de packager une application avec toutes ses dépendances.", category: "DevOps" },
  { term: "Kubernetes", definition: "Orchestrateur de containers. Gère le déploiement, l'escalade et la disponibilité des applications conteneurisées.", category: "DevOps" },
  { term: "Cloud", definition: "Informatique en ligne. Fournit des ressources (serveurs, stockage, bases de données) à la demande via Internet.", category: "DevOps" },
  { term: "IaC", definition: "Infrastructure as Code. Gestion de l'infrastructure informatique via du code (Terraform, Ansible).", category: "DevOps" },
  { term: "Microservices", definition: "Architecture décomposée en petits services indépendants communiquant par API.", category: "DevOps" },
  { term: "Monitoring", definition: "Surveillance en temps réel des performances et de la disponibilité des systèmes.", category: "DevOps" },
  { term: "SRE", definition: "Site Reliability Engineering. Pratique combinant operations et développement pour la fiabilité des systèmes.", category: "DevOps" },

  // Sécurité
  { term: "Pentest", definition: "Test de pénétration. Simulation d'attaque sur un système pour identifier les vulnérabilités.", category: "Sécurité" },
  { term: "Vulnérabilité", definition: "Faille ou faiblesse dans un système pouvant être exploitée par un attaquant.", category: "Sécurité" },
  { term: "Phishing", definition: "Technique d'ingénierie sociale pour voler des informations sensibles en se faisant passer pour une entité de confiance.", category: "Sécurité" },
  { term: "Chiffrement", definition: "Transformation des données pour les rendre illisibles sans la clé de déchiffrement.", category: "Sécurité" },
  { term: "Audit IT", definition: "Examen méthodique des systèmes d'information pour évaluer la conformité et la sécurité.", category: "Sécurité" },
  { term: "SOC", definition: "Security Operations Centre. Équipe chargée de surveiller et répondre aux incidents de sécurité.", category: "Sécurité" },

  // Réseaux
  { term: "TCP/IP", definition: "Suite de protocoles de communication Internet. Le modèle de réseau fondamental.", category: "Réseaux" },
  { term: "DNS", definition: "Domain Name System. Traduit les noms de domaine en adresses IP.", category: "Réseaux" },
  { term: "Firewall", definition: "Pare-feu. Système filtrant le trafic réseau pour bloquer les accès non autorisés.", category: "Réseaux" },
  { term: "VPN", definition: "Virtual Private Network. Connexion sécurisée et chiffrée sur un réseau public.", category: "Réseaux" },
  { term: "Load Balancer", definition: "Répartiteur de charge. Distribue le trafic réseau sur plusieurs serveurs.", category: "Réseaux" },

  // Gestion & Entreprise
  { term: "ERP", definition: "Enterprise Resource Planning. Système intégré gérant les processus métiers (finance, RH, supply chain).", category: "Gestion" },
  { term: "ITIL", definition: "Information Technology Infrastructure Library. Cadre de bonnes pratiques pour la gestion des services IT.", category: "Gestion" },
  { term: "Scrum", definition: "Framework Agile itératif et incrémental pour la gestion de projets complexes.", category: "Gestion" },
  { term: "Kanban", definition: "Méthode de gestion de flux de travail visualisée avec un tableau à colonnes.", category: "Gestion" },
  { term: "ROI", definition: "Return on Investment. Mesure la rentabilité d'un investissement. ROI = (Gain - Coût) / Coût.", category: "Gestion" },
  { term: "COBIT", definition: "Control Objectives for Information and Related Technologies. Cadre de gouvernance IT.", category: "Gestion" },
  { term: "DSI", definition: "Direction des Systèmes d'Information. Pilote la stratégie technologique de l'entreprise.", category: "Gestion" },
  { term: "RGPD", definition: "Règlement Général sur la Protection des Données. Réglementation européenne pour la protection des données personnelles.", category: "Gestion" },

  // IA & ML
  { term: "Machine Learning", definition: "Apprentissage automatique. L'algorithme apprend à partir de données pour faire des prédictions.", category: "IA" },
  { term: "Deep Learning", definition: "Sous-ensemble du ML utilisant des réseaux de neurones profonds pour des tâches complexes.", category: "IA" },
  { term: "NLP", definition: "Natural Language Processing. Traitement automatique du langage naturel par les machines.", category: "IA" },
  { term: "LLM", definition: "Large Language Model. Modèle de langage massif entraîné sur des milliards de paramètres (GPT, Claude).", category: "IA" },
  { term: "Fine-tuning", definition: "Entraînement supplémentaire d'un modèle pré-entraîné sur des données spécifiques à un domaine.", category: "IA" },
  { term: "Prompt Engineering", definition: "Art de formuler des instructions pour obtenir les meilleurs résultats d'un modèle IA.", category: "IA" },
];

export const GLOSSARY_CATEGORIES = ["Dev", "Data", "DevOps", "Sécurité", "Réseaux", "Gestion", "IA"] as const;

export type GlossaryCategory = (typeof GLOSSARY_CATEGORIES)[number];
