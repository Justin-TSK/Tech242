export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  resources: { name: string; url: string }[];
  skills: string[];
}

export interface Roadmap {
  id: string;
  domaineSlug: string;
  title: string;
  description: string;
  totalTime: string;
  difficulty: "débutant" | "intermédiaire" | "avancé";
  steps: RoadmapStep[];
}

export const ROADMAPS: Roadmap[] = [
  {
    id: "rw-dev-web",
    domaineSlug: "dev-web",
    title: "Parcours Développeur Web",
    description:
      "De zéro à développeur web compétent en suivant les étapes essentielles.",
    totalTime: "6-12 mois",
    difficulty: "débutant",
    steps: [
      {
        id: "rw-web-1",
        title: "Les bases du web",
        description:
          "HTML, CSS, bases de JavaScript. Comprendre comment le web fonctionne.",
        duration: "2-3 semaines",
        resources: [
          { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
          { name: "freeCodeCamp", url: "https://freecodecamp.org" },
        ],
        skills: ["HTML sémantique", "CSS Flexbox/Grid", "JavaScript basique"],
      },
      {
        id: "rw-web-2",
        title: "JavaScript intermédiaire",
        description:
          "ES6+, DOM, async/await, modules. Maîtriser le langage.",
        duration: "3-4 semaines",
        resources: [
          { name: "JavaScript.info", url: "https://javascript.info" },
        ],
        skills: [
          "ES6+",
          "DOM manipulation",
          "Async/Await",
          "Fetch API",
          "Modules",
        ],
      },
      {
        id: "rw-web-3",
        title: "Git & GitHub",
        description:
          "Versionnement, branches, pull requests. Collaborer efficacement.",
        duration: "1 semaine",
        resources: [
          { name: "Git Handbook", url: "https://docs.github.com" },
        ],
        skills: ["Git basics", "Branching", "Pull Requests", "Merge"],
      },
      {
        id: "rw-web-4",
        title: "React & Next.js",
        description:
          "Composants, hooks, routing, SSR. Le framework frontend moderne.",
        duration: "4-6 semaines",
        resources: [
          { name: "React Docs", url: "https://react.dev" },
          { name: "Next.js Docs", url: "https://nextjs.org/docs" },
        ],
        skills: [
          "React components",
          "Hooks",
          "Next.js App Router",
          "Server Components",
        ],
      },
      {
        id: "rw-web-5",
        title: "Backend & Bases de données",
        description:
          "Node.js, Express, bases de données SQL et NoSQL.",
        duration: "3-4 semaines",
        resources: [
          { name: "Node.js Docs", url: "https://nodejs.org/docs" },
        ],
        skills: ["Node.js", "Express/Fastify", "PostgreSQL", "MongoDB"],
      },
      {
        id: "rw-web-6",
        title: "Projets pratiques",
        description:
          "Construire 3-5 projets pour ton portfolio. Appliquer tout ce que tu as appris.",
        duration: "4-8 semaines",
        resources: [
          { name: "GitHub", url: "https://github.com" },
        ],
        skills: [
          "Full-stack project",
          "Déploiement",
          "Documentation",
          "Portfolio",
        ],
      },
    ],
  },
  {
    id: "rw-ia-ml",
    domaineSlug: "ia-ml",
    title: "Parcours Data Scientist / ML Engineer",
    description:
      "De zéro à compétent en data science et machine learning.",
    totalTime: "12-18 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-ia-1",
        title: "Python & Mathématiques",
        description:
          "Python de base, algèbre linéaire, statistiques, probabilités.",
        duration: "4-6 semaines",
        resources: [
          { name: "Python.org", url: "https://python.org" },
          { name: "3Blue1Brown", url: "https://youtube.com/3blue1brown" },
        ],
        skills: ["Python", "Algèbre linéaire", "Statistiques", "NumPy"],
      },
      {
        id: "rw-ia-2",
        title: "Data Analysis",
        description:
          "Pandas, Matplotlib, exploration de données, data cleaning.",
        duration: "3-4 semaines",
        resources: [
          { name: "Kaggle Learn", url: "https://kaggle.com/learn" },
        ],
        skills: ["Pandas", "Matplotlib", "Data Cleaning", "EDA"],
      },
      {
        id: "rw-ia-3",
        title: "Machine Learning",
        description:
          "Scikit-learn, régression, classification, clustering, évaluation.",
        duration: "4-6 semaines",
        resources: [
          { name: "Scikit-learn Docs", url: "https://scikit-learn.org" },
        ],
        skills: [
          "Scikit-learn",
          "Régression",
          "Classification",
          "Cross-validation",
        ],
      },
      {
        id: "rw-ia-4",
        title: "Deep Learning",
        description:
          "Neural networks, CNN, RNN, TensorFlow/PyTorch.",
        duration: "6-8 semaines",
        resources: [
          { name: "fast.ai", url: "https://course.fast.ai" },
        ],
        skills: ["Neural Networks", "CNN", "RNN", "TensorFlow", "PyTorch"],
      },
      {
        id: "rw-ia-5",
        title: "Projets & Portfolio",
        description:
          "Projets Kaggle, portfolio GitHub, projets personnels.",
        duration: "6-12 semaines",
        resources: [
          { name: "Kaggle", url: "https://kaggle.com" },
        ],
        skills: [
          "Projet complet",
          "Kaggle",
          "Portfolio",
          "Communication",
        ],
      },
    ],
  },
  {
    id: "rw-cyber",
    domaineSlug: "cybersecurite",
    title: "Parcours Cybersécurité",
    description:
      "Apprends les fondamentaux de la sécurité informatique et le pentesting.",
    totalTime: "10-16 mois",
    difficulty: "avancé",
    steps: [
      {
        id: "rw-cyber-1",
        title: "Fondamentaux IT & Linux",
        description:
          "Réseaux, systèmes, ligne de commande Linux.",
        duration: "4-6 semaines",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com" },
        ],
        skills: ["Linux CLI", "Réseaux TCP/IP", "Systèmes fichiers"],
      },
      {
        id: "rw-cyber-2",
        title: "Scripting & Automatisation",
        description:
          "Python, Bash, PowerShell pour automatiser les tâches sécurité.",
        duration: "3-4 semaines",
        resources: [
          { name: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com" },
        ],
        skills: ["Python", "Bash", "Automatisation"],
      },
      {
        id: "rw-cyber-3",
        title: "Sécurité Web & Réseau",
        description:
          "OWASP, scan de vulnérabilités, analyse réseau.",
        duration: "4-6 semaines",
        resources: [
          { name: "OWASP", url: "https://owasp.org" },
        ],
        skills: ["OWASP Top 10", "Nmap", "Wireshark", "SQL Injection"],
      },
      {
        id: "rw-cyber-4",
        title: "Pentesting",
        description:
          "Méthodologie de pentest, outils, éthique.",
        duration: "6-8 semaines",
        resources: [
          { name: "TryHackMe", url: "https://tryhackme.com" },
          { name: "Hack The Box", url: "https://hackthebox.com" },
        ],
        skills: [
          "Reconnaissance",
          "Exploitation",
          "Post-exploitation",
          "Rapport",
        ],
      },
      {
        id: "rw-cyber-5",
        title: "Certifications & Veille",
        description:
          "Prépare les certifications (CEH, CompTIA Security+) et entretiens ta veille.",
        duration: "8-12 semaines",
        resources: [
          { name: "CompTIA", url: "https://comptia.org" },
        ],
        skills: ["Certifications", "Veille sécurité", "CTF"],
      },
    ],
  },
  {
    id: "rw-devops",
    domaineSlug: "devops",
    title: "Parcours DevOps & Cloud",
    description:
      "Maîtrise l'automatisation, les containers et le cloud computing.",
    totalTime: "8-14 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-devops-1",
        title: "Linux & Scripting",
        description:
          "Administration Linux, Bash, automatisation de base.",
        duration: "3-4 semaines",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com" },
        ],
        skills: ["Linux admin", "Bash", "Shell scripting"],
      },
      {
        id: "rw-devops-2",
        title: "Git & CI/CD",
        description:
          "Git avancé, pipelines CI/CD, GitHub Actions.",
        duration: "2-3 semaines",
        resources: [
          { name: "GitHub Actions Docs", url: "https://docs.github.com/actions" },
        ],
        skills: ["Git", "GitHub Actions", "CI/CD", "Automatisation"],
      },
      {
        id: "rw-devops-3",
        title: "Docker & Containers",
        description:
          "Docker, Docker Compose, conteneurisation d'applications.",
        duration: "3-4 semaines",
        resources: [
          { name: "Docker Docs", url: "https://docs.docker.com" },
        ],
        skills: ["Docker", "Docker Compose", "Images", "Volumes"],
      },
      {
        id: "rw-devops-4",
        title: "Cloud (AWS/Azure/GCP)",
        description:
          "Services cloud, déploiement, scaling.",
        duration: "4-6 semaines",
        resources: [
          { name: "AWS Skill Builder", url: "https://skillbuilder.aws" },
        ],
        skills: ["AWS/Azure/GCP", "IAM", "EC2/VM", "S3", "Databases"],
      },
      {
        id: "rw-devops-5",
        title: "Kubernetes & Monitoring",
        description:
          "Orchestration de containers, monitoring, observabilité.",
        duration: "4-6 semaines",
        resources: [
          { name: "Kubernetes Docs", url: "https://kubernetes.io/docs" },
        ],
        skills: ["Kubernetes", "Prometheus", "Grafana", "Logs"],
      },
    ],
  },
  {
    id: "rw-uiux",
    domaineSlug: "ui-ux",
    title: "Parcours UI/UX Designer",
    description:
      "Apprends à concevoir des interfaces utilisateur intuitives et belles.",
    totalTime: "6-10 mois",
    difficulty: "débutant",
    steps: [
      {
        id: "rw-uiux-1",
        title: "Principes de Design",
        description:
          "Théorie du design, couleurs, typographie, hiérarchie visuelle.",
        duration: "2-3 semaines",
        resources: [
          { name: "Design Principles", url: "https://designsystemsguide.com" },
        ],
        skills: [
          "Théorie des couleurs",
          "Typographie",
          "Hiérarchie",
          "Gestalt",
        ],
      },
      {
        id: "rw-uiux-2",
        title: "Figma & Prototypage",
        description:
          "Maîtrise Figma, composants, auto-layout, prototypage.",
        duration: "3-4 semaines",
        resources: [
          { name: "Figma Resources", url: "https://help.figma.com" },
        ],
        skills: ["Figma", "Components", "Auto-layout", "Prototyping"],
      },
      {
        id: "rw-uiux-3",
        title: "UX Research",
        description:
          "Interviews utilisateurs, testing, personas, user journeys.",
        duration: "2-3 semaines",
        resources: [
          { name: "NNG Group", url: "https://nngroup.com" },
        ],
        skills: [
          "User Interviews",
          "Personas",
          "User Journey",
          "A/B Testing",
        ],
      },
      {
        id: "rw-uiux-4",
        title: "Design Systems",
        description:
          "Créer et maintenir un design system cohérent.",
        duration: "2-3 semaines",
        resources: [
          { name: "Atomic Design", url: "https://atomicdesign.bradfrost.com" },
        ],
        skills: [
          "Design Tokens",
          "Composants",
          "Documentation",
          "Governance",
        ],
      },
      {
        id: "rw-uiux-5",
        title: "Portfolio & Projets",
        description:
          "Crée 3-5 projets pour montrer ton travail. Présente-les sur un portfolio.",
        duration: "4-8 semaines",
        resources: [],
        skills: ["Case Study", "Portfolio", "Présentation", "Feedback"],
      },
    ],
  },
  {
    id: "rw-dev-mobile",
    domaineSlug: "dev-mobile",
    title: "Parcours Développeur Mobile",
    description: "Crée des applications mobiles performantes pour iOS et Android.",
    totalTime: "8-14 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-mobile-1",
        title: "Fondamentaux de la programmation",
        description: "Apprends les bases avec Python ou JavaScript avant de te lancer en mobile.",
        duration: "3-4 semaines",
        resources: [
          { name: "freeCodeCamp", url: "https://freecodecamp.org" },
        ],
        skills: ["Variables", "Fonctions", "POO", "Logique"],
      },
      {
        id: "rw-mobile-2",
        title: "React Native ou Flutter",
        description: "Choisis un framework cross-platform et crée tes premières apps.",
        duration: "4-6 semaines",
        resources: [
          { name: "React Native Docs", url: "https://reactnative.dev" },
          { name: "Flutter Docs", url: "https://flutter.dev" },
        ],
        skills: ["Composants", "Navigation", "State management", "API REST"],
      },
      {
        id: "rw-mobile-3",
        title: "UI/UX Mobile",
        description: "Design d'interfaces mobiles, gestuelles, navigation native.",
        duration: "2-3 semaines",
        resources: [
          { name: "Material Design", url: "https://m3.material.io" },
        ],
        skills: ["Design guidelines", "Responsive", "Animations", "Accessibilité"],
      },
      {
        id: "rw-mobile-4",
        title: "Fonctionnalités avancées",
        description: "Notifications push, stockage local, caméra, géolocalisation.",
        duration: "3-4 semaines",
        resources: [],
        skills: ["Push notifications", "AsyncStorage", "Caméra", "GPS"],
      },
      {
        id: "rw-mobile-5",
        title: "Publication & Portfolio",
        description: "Publie sur les stores, crée un portfolio de projets mobiles.",
        duration: "4-6 semaines",
        resources: [
          { name: "Google Play Console", url: "https://play.google.com/console" },
          { name: "App Store Connect", url: "https://appstoreconnect.apple.com" },
        ],
        skills: ["Publication", "ASCI", "CI/CD mobile", "Portfolio"],
      },
    ],
  },
  {
    id: "rw-data-science",
    domaineSlug: "data-science",
    title: "Parcours Data Scientist",
    description: "De zéro à compétent en analyse de données et machine learning appliqué.",
    totalTime: "10-16 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-ds-1",
        title: "Python & Statistiques",
        description: "Python pour la data, statistiques descriptives, probabilités.",
        duration: "4-6 semaines",
        resources: [
          { name: "Kaggle Learn", url: "https://kaggle.com/learn" },
        ],
        skills: ["Python", "NumPy", "Statistiques", "Probabilités"],
      },
      {
        id: "rw-ds-2",
        title: "Data Wrangling",
        description: "Pandas, nettoyage de données, transformation, exploration.",
        duration: "3-4 semaines",
        resources: [
          { name: "Pandas Docs", url: "https://pandas.pydata.org" },
        ],
        skills: ["Pandas", "Data cleaning", "Merge/Join", "GroupBy"],
      },
      {
        id: "rw-ds-3",
        title: "Visualisation de données",
        description: "Matplotlib, Seaborn, Plotly pour créer des visualisations impactantes.",
        duration: "2-3 semaines",
        resources: [],
        skills: ["Matplotlib", "Seaborn", "Plotly", "Storytelling"],
      },
      {
        id: "rw-ds-4",
        title: "Machine Learning appliqué",
        description: "Scikit-learn, features engineering, évaluation de modèles.",
        duration: "4-6 semaines",
        resources: [
          { name: "Scikit-learn", url: "https://scikit-learn.org" },
        ],
        skills: ["Régression", "Classification", "Clustering", "Cross-validation"],
      },
      {
        id: "rw-ds-5",
        title: "Projets Kaggle & Portfolio",
        description: "Participe à des compétitions Kaggle et construis ton portfolio.",
        duration: "6-10 semaines",
        resources: [
          { name: "Kaggle", url: "https://kaggle.com" },
        ],
        skills: ["Kaggle", "Portfolio", "Communication", "Projet complet"],
      },
    ],
  },
  {
    id: "rw-reseaux",
    domaineSlug: "reseaux",
    title: "Parcours Réseaux & Systèmes",
    description: "Maîtrise l'infrastructure informatique, l'administration et les réseaux.",
    totalTime: "6-12 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-res-1",
        title: "Fondamentaux réseau",
        description: "Modèle OSI/TCP-IP, adressage, routage, protocoles essentiels.",
        duration: "3-4 semaines",
        resources: [
          { name: "Cisco Networking Academy", url: "https://skillsnetworklabs.com" },
        ],
        skills: ["OSI", "TCP/IP", "IPv4/IPv6", "DNS", "DHCP"],
      },
      {
        id: "rw-res-2",
        title: "Administration Linux",
        description: "Installation, configuration, gestion des utilisateurs, services.",
        duration: "3-4 semaines",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com" },
        ],
        skills: ["CLI Linux", "Systemd", "Gestion disques", "Firewall"],
      },
      {
        id: "rw-res-3",
        title: "Virtualisation",
        description: "VMware, Proxmox, conteneurs. Créer et gérer des infrastructures virtualisées.",
        duration: "3-4 semaines",
        resources: [],
        skills: ["VMware", "Proxmox", "Docker", "Réseaux virtuels"],
      },
      {
        id: "rw-res-4",
        title: "Monitoring & Automatisation",
        description: "Zabbix, Ansible, scripts d'automatisation.",
        duration: "2-3 semaines",
        resources: [],
        skills: ["Zabbix", "Ansible", "Bash scripting", "Alertes"],
      },
      {
        id: "rw-res-5",
        title: "Certifications",
        description: "Prépare les certifications réseau et système (CCNA, LPIC).",
        duration: "6-10 semaines",
        resources: [
          { name: "CompTIA", url: "https://comptia.org" },
        ],
        skills: ["CCNA", "LPIC-1/2", "CompTIA Network+", "Infrastructure"],
      },
    ],
  },
  {
    id: "rw-game-dev",
    domaineSlug: "game-dev",
    title: "Parcours Game Developer",
    description: "Crée des jeux vidéo avec Unity ou Unreal Engine.",
    totalTime: "12-24 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-gd-1",
        title: "Programmation & Logique",
        description: "Apprends C# ou C++ et les bases de la programmation.",
        duration: "4-6 semaines",
        resources: [
          { name: "Unity Learn", url: "https://learn.unity.com" },
        ],
        skills: ["C# ou C++", "POO", "Algorithmes", "Logique"],
      },
      {
        id: "rw-gd-2",
        title: "Game Design Fundamentals",
        description: "Mécaniques de jeu, level design, game loop, rétroaction.",
        duration: "3-4 semaines",
        resources: [
          { name: "GDC Vault", url: "https://gdcvault.com" },
        ],
        skills: ["Game Design", "Level Design", "Narrative", "UX Jeu"],
      },
      {
        id: "rw-gd-3",
        title: "Unity ou Unreal Engine",
        description: "Maîtrise un moteur de jeu, scenes, physics, animations.",
        duration: "6-8 semaines",
        resources: [
          { name: "Unity Learn", url: "https://learn.unity.com" },
        ],
        skills: ["Unity/Unreal", "Scenes", "Physics", "Animations", "UI"],
      },
      {
        id: "rw-gd-4",
        title: "Art & Audio",
        description: "Blender pour le 3D, audio de jeux, particles, shaders.",
        duration: "4-6 semaines",
        resources: [
          { name: "Blender Guru", url: "https://youtube.com/blenderguru" },
        ],
        skills: ["Blender", "3D Modeling", "Audio", "Shaders", "Particles"],
      },
      {
        id: "rw-gd-5",
        title: "Publication & Portfolio",
        description: "Crée et publie un jeu complet. Construis ton portfolio.",
        duration: "8-16 semaines",
        resources: [
          { name: "itch.io", url: "https://itch.io" },
        ],
        skills: ["Game jam", "Publication", "Marketing", "Portfolio"],
      },
    ],
  },
  {
    id: "rw-web3",
    domaineSlug: "web3",
    title: "Parcours Blockchain & Web3",
    description: "Développe des smart contracts et des applications décentralisées.",
    totalTime: "10-18 mois",
    difficulty: "avancé",
    steps: [
      {
        id: "rw-w3-1",
        title: "Fondamentaux Blockchain",
        description: "Comprendre la blockchain, consensus, crypto, Bitcoin, Ethereum.",
        duration: "2-3 semaines",
        resources: [
          { name: "Ethereum.org", url: "https://ethereum.org" },
        ],
        skills: ["Blockchain basics", "Consensus", "Crypto wallets", "Gas"],
      },
      {
        id: "rw-w3-2",
        title: "Solidity & Smart Contracts",
        description: "Écris des smart contracts en Solidity sur Ethereum.",
        duration: "4-6 semaines",
        resources: [
          { name: "CryptoZombies", url: "https://cryptozombies.io" },
        ],
        skills: ["Solidity", "Smart Contracts", "ERC-20", "Security basics"],
      },
      {
        id: "rw-w3-3",
        title: "Outils de développement",
        description: "Hardhat, Remix, tests, déploiement de contrats.",
        duration: "3-4 semaines",
        resources: [
          { name: "Hardhat Docs", url: "https://hardhat.org" },
        ],
        skills: ["Hardhat", "Remix", "Tests", "Gas optimization"],
      },
      {
        id: "rw-w3-4",
        title: "dApps Frontend",
        description: "Crée des interfaces web3 avec Ethers.js, wagmi, RainbowKit.",
        duration: "3-4 semaines",
        resources: [],
        skills: ["Ethers.js", "wagmi", "React", "Wallet connection"],
      },
      {
        id: "rw-w3-5",
        title: "Projets & Sécurité",
        description: "Audit de contrats, projets complets, participation à des hackathons.",
        duration: "6-10 semaines",
        resources: [
          { name: "Immunefi", url: "https://immunefi.com" },
        ],
        skills: ["Smart contract audit", "Bug bounty", "Portfolio", "Hackathon"],
      },
    ],
  },
  {
    id: "rw-erp",
    domaineSlug: "erp-systemes",
    title: "Parcours Consultant ERP",
    description: "Implémente et personnalise les systèmes ERP pour les entreprises.",
    totalTime: "8-16 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-erp-1",
        title: "Compréhension métier",
        description: "Processus Finance, Supply Chain, RH, Production.",
        duration: "3-4 semaines",
        resources: [
          { name: "SAP Learning", url: "https://learning.sap.com" },
        ],
        skills: ["Processus métiers", "KPI", "Reporting", "Fonctionnement ERP"],
      },
      {
        id: "rw-erp-2",
        title: "SQL & Bases de données",
        description: "Maîtrise SQL pour interagir avec les bases de données ERP.",
        duration: "3-4 semaines",
        resources: [
          { name: "SQLBolt", url: "https://sqlbolt.com" },
        ],
        skills: ["SQL", "Requêtes complexes", "Modélisation", "Jointures"],
      },
      {
        id: "rw-erp-3",
        title: "Choix d'un ERP",
        description: "SAP, Odoo ou Oracle. Approfondis un ERP spécifique.",
        duration: "4-6 semaines",
        resources: [
          { name: "Odoo Tutorials", url: "https://www.odoo.com/documentation" },
        ],
        skills: ["Paramétrage ERP", "Configuration modules", "Tests"],
      },
      {
        id: "rw-erp-4",
        title: "Implémentation",
        description: "Méthodologie d'implémentation, migration de données, tests.",
        duration: "4-6 semaines",
        resources: [],
        skills: ["AS-IS / TO-BE", "Migration", "UAT", "Formation utilisateurs"],
      },
      {
        id: "rw-erp-5",
        title: "Certification & Projets",
        description: "Obtiens une certification ERP et réalise des projets pratiques.",
        duration: "6-10 semaines",
        resources: [
          { name: "SAP Certification", url: "https://training.sap.com" },
        ],
        skills: ["Certification", "Portfolio", "Gestion de projet", "Client"],
      },
    ],
  },
  {
    id: "rw-bi",
    domaineSlug: "business-intelligence",
    title: "Parcours Data Analyst / BI",
    description: "Transforme les données en dashboards et insights pour les décideurs.",
    totalTime: "6-12 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-bi-1",
        title: "SQL & Bases de données",
        description: "Maîtrise les requêtes SQL pour extraire et manipuler des données.",
        duration: "3-4 semaines",
        resources: [
          { name: "SQLBolt", url: "https://sqlbolt.com" },
        ],
        skills: ["SQL", "SELECT", "JOIN", "GROUP BY", "Sous-requêtes"],
      },
      {
        id: "rw-bi-2",
        title: "Excel avancé",
        description: "Tableaux croisés dynamiques, formules avancées, VBA basique.",
        duration: "2-3 semaines",
        resources: [],
        skills: ["Pivot Tables", "VLOOKUP", "INDEX/MATCH", "Macros"],
      },
      {
        id: "rw-bi-3",
        title: "Power BI ou Tableau",
        description: "Crée des dashboards interactifs et des rapports visuels.",
        duration: "4-6 semaines",
        resources: [
          { name: "Microsoft Learn", url: "https://learn.microsoft.com" },
        ],
        skills: ["Power BI/Tableau", "DAX", "Visualisations", "Dashboards"],
      },
      {
        id: "rw-bi-4",
        title: "Modélisation de données",
        description: "Schéma en étoile, schéma en flocon, data warehouse.",
        duration: "3-4 semaines",
        resources: [],
        skills: ["Dimensionnel", "Faits/Dimensions", "ETL", "Data Warehouse"],
      },
      {
        id: "rw-bi-5",
        title: "Projets & Storytelling",
        description: "Construis un portfolio BI et maîtrise le data storytelling.",
        duration: "4-8 semaines",
        resources: [],
        skills: ["Data storytelling", "Portfolio", "Présentation", "Business acumen"],
      },
    ],
  },
  {
    id: "rw-gestion-projet",
    domaineSlug: "gestion-projet-it",
    title: "Parcours Chef de projet IT",
    description: "Pilote des projets techniques avec les méthodes Agiles.",
    totalTime: "4-8 mois",
    difficulty: "débutant",
    steps: [
      {
        id: "rw-gp-1",
        title: "Fondamentaux Agile & Scrum",
        description: "Les valeurs Agile, les événements Scrum, les rôles.",
        duration: "2 semaines",
        resources: [
          { name: "Scrum Guide", url: "https://scrumguides.org" },
        ],
        skills: ["Scrum", "Kanban", "Valeurs Agile", "Rôles"],
      },
      {
        id: "rw-gp-2",
        title: "JIRA & Outils",
        description: "Maîtrise JIRA, Trello, Confluence pour le suivi de projet.",
        duration: "1-2 semaines",
        resources: [
          { name: "Atlassian University", url: "https://university.atlassian.com" },
        ],
        skills: ["JIRA", "Trello", "Confluence", "Backlog management"],
      },
      {
        id: "rw-gp-3",
        title: "Communication & Leadership",
        description: "Gestion des parties prenantes, communication, leadership d'équipe.",
        duration: "2-3 semaines",
        resources: [],
        skills: ["Communication", "Négociation", "Leadership", "Conflits"],
      },
      {
        id: "rw-gp-4",
        title: "Estimation & Planification",
        description: "Story points, vélocité, planification de sprint et de release.",
        duration: "2 semaines",
        resources: [],
        skills: ["Planning poker", "Vélocité", "Release planning", "Burndown"],
      },
      {
        id: "rw-gp-5",
        title: "Certification & Expérience",
        description: "Obtiens la certification PSM ou CSM et pratique en réel.",
        duration: "4-8 semaines",
        resources: [
          { name: "Scrum.org", url: "https://scrum.org" },
        ],
        skills: ["PSM/CSM", "Expérience terrain", "Rétrospectives", "Amélioration continue"],
      },
    ],
  },
  {
    id: "rw-it-management",
    domaineSlug: "it-management",
    title: "Parcours DSI / IT Manager",
    description: "Pilote la stratégie IT et la transformation digitale de l'entreprise.",
    totalTime: "12-24 mois",
    difficulty: "avancé",
    steps: [
      {
        id: "rw-itm-1",
        title: "ITIL 4 Foundation",
        description: "Le cadre de gestion des services IT. Livraison de valeur et workflows.",
        duration: "4-6 semaines",
        resources: [
          { name: "ITIL 4 Foundation", url: "https://www.axelos.com" },
        ],
        skills: ["ITIL 4", "Service desk", "Incident management", "Change management"],
      },
      {
        id: "rw-itm-2",
        title: "Gouvernance IT",
        description: "COBIT, alignement stratégique, gestion des risques IT.",
        duration: "4-6 semaines",
        resources: [
          { name: "ISACA COBIT", url: "https://isaca.org" },
        ],
        skills: ["COBIT", "Gouvernance", "Risk management", "Compliance"],
      },
      {
        id: "rw-itm-3",
        title: "Budget IT & ROI",
        description: "Calcul de ROI, gestion budgétaire IT, analyse TCO.",
        duration: "3-4 semaines",
        resources: [],
        skills: ["Budget", "ROI", "TCO", "Business case"],
      },
      {
        id: "rw-itm-4",
        title: "Conduite du changement",
        description: "Accompagner la transformation digitale et les équipes.",
        duration: "3-4 semaines",
        resources: [],
        skills: ["Change management", "Formation", "Communication", "Adoption"],
      },
      {
        id: "rw-itm-5",
        title: "Certifications & Leadership",
        description: "Obtiens ITIL Managing Professional ou CGEIT.",
        duration: "8-16 semaines",
        resources: [
          { name: "Axelos", url: "https://www.axelos.com" },
        ],
        skills: ["ITIL MP", "CGEIT", "Leadership", "Vision stratégique"],
      },
    ],
  },
  {
    id: "rw-data-eng",
    domaineSlug: "data-engineering",
    title: "Parcours Data Engineer",
    description: "Conçois et maintiens les pipelines de données de l'entreprise.",
    totalTime: "8-14 mois",
    difficulty: "intermédiaire",
    steps: [
      {
        id: "rw-de-1",
        title: "SQL avancé & Modélisation",
        description: "SQL complexe, modélisation dimensionnelle, optimisation de requêtes.",
        duration: "3-4 semaines",
        resources: [
          { name: "Mode Analytics SQL", url: "https://mode.com/sql-tutorial" },
        ],
        skills: ["SQL avancé", "Window functions", "CTE", "Indexation"],
      },
      {
        id: "rw-de-2",
        title: "Python pour la Data",
        description: "Python, Pandas, scripting d'automatisation de pipelines.",
        duration: "3-4 semaines",
        resources: [
          { name: "Python.org", url: "https://python.org" },
        ],
        skills: ["Python", "Pandas", "Scripting", "API REST"],
      },
      {
        id: "rw-de-3",
        title: "ETL & Orchestration",
        description: "Apache Airflow, dbt, conception de pipelines ETL fiables.",
        duration: "4-6 semaines",
        resources: [
          { name: "Airflow Docs", url: "https://airflow.apache.org" },
          { name: "dbt Docs", url: "https://docs.getdbt.com" },
        ],
        skills: ["Airflow", "dbt", "DAGs", "Monitoring pipelines"],
      },
      {
        id: "rw-de-4",
        title: "Cloud & Data Warehousing",
        description: "Snowflake, BigQuery, data warehouses cloud, Data Lakes.",
        duration: "4-6 semaines",
        resources: [
          { name: "Snowflake Docs", url: "https://docs.snowflake.com" },
        ],
        skills: ["Snowflake", "BigQuery", "Data Lake", "Partitionnement"],
      },
      {
        id: "rw-de-5",
        title: "Streaming & Projets",
        description: "Kafka, streaming temps réel, projets portfolio complets.",
        duration: "4-8 semaines",
        resources: [
          { name: "Confluent", url: "https://confluent.io" },
        ],
        skills: ["Kafka", "Streaming", "End-to-end pipeline", "Portfolio"],
      },
    ],
  },
  {
    id: "rw-securite-gouv",
    domaineSlug: "securite-gouvernance",
    title: "Parcours Auditeur IT / Compliance",
    description: "Garantis la conformité et la sécurité des systèmes d'information.",
    totalTime: "10-18 mois",
    difficulty: "avancé",
    steps: [
      {
        id: "rw-sg-1",
        title: "Fondamentaux sécurité IT",
        description: "Principes de sécurité, CIA triad, menaces et vulnérabilités.",
        duration: "2-3 semaines",
        resources: [
          { name: "NIST Framework", url: "https://nist.gov" },
        ],
        skills: ["CIA triad", "Menaces", "Vulnérabilités", "Risques"],
      },
      {
        id: "rw-sg-2",
        title: "ISO 27001 & 27002",
        description: "Système de management de la sécurité de l'information.",
        duration: "4-6 semaines",
        resources: [
          { name: "ISO 27001", url: "https://iso.org/isoiec-27001-information-security" },
        ],
        skills: ["ISO 27001", "Annexes", "Audits", "Politiques"],
      },
      {
        id: "rw-sg-3",
        title: "RGPD & Protection des données",
        description: "Règlement général, DPO, registre des traitements, DPIA.",
        duration: "3-4 semaines",
        resources: [
          { name: "CNIL RGPD", url: "https://cnil.fr" },
        ],
        skills: ["RGPD", "DPO", "DPIA", "Consentement", "Droits des personnes"],
      },
      {
        id: "rw-sg-4",
        title: "Audit IT",
        description: "Méthodologie d'audit, collecte de preuves, recommandations.",
        duration: "4-6 semaines",
        resources: [],
        skills: ["Audit", "Piste d'audit", "Recommandations", "Rapport"],
      },
      {
        id: "rw-sg-5",
        title: "Certifications & Pratique",
        description: "CISA, ISO 27001 Lead Auditor, mise en pratique.",
        duration: "8-14 semaines",
        resources: [
          { name: "ISACA CISA", url: "https://isaca.org" },
        ],
        skills: ["CISA", "ISO 27001 LA", "Examen terrain", "Portfolio"],
      },
    ],
  },
];

export function getRoadmapByDomain(domaineSlug: string): Roadmap | undefined {
  return ROADMAPS.find((r) => r.domaineSlug === domaineSlug);
}

export function getRoadmapById(id: string): Roadmap | undefined {
  return ROADMAPS.find((r) => r.id === id);
}
