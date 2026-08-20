export type PlatformCategory =
  | "certifiant"
  | "pratique"
  | "documentation";

export interface Platform {
  id: string;
  name: string;
  url: string;
  category: PlatformCategory;
  type: string;
  description: string;
  domains: string[];
  free: boolean;
}

export const CATEGORY_LABELS: Record<PlatformCategory, string> = {
  certifiant: "Cours certifiants",
  pratique: "Pratique intensive",
  documentation: "Documentation de référence",
};

export const CATEGORY_ORDER: PlatformCategory[] = [
  "certifiant",
  "pratique",
  "documentation",
];

export const PLATFORMS: Platform[] = [
  {
    id: "harvard-cs50",
    name: "Harvard CS50",
    url: "https://cs50.harvard.edu",
    category: "certifiant",
    type: "Cours gratuit certifiant",
    description:
      "Le cours d'introduction à l'informatique le plus populaire au monde. Couvre les bases de la programmation, structures de données, algorithmes et web.",
    domains: ["dev-web", "data-science", "ia-ml"],
    free: true,
  },
  {
    id: "openclassrooms",
    name: "OpenClassrooms",
    url: "https://openclassrooms.com",
    category: "certifiant",
    type: "Certifiant reconnu par l'État",
    description:
      "Plateforme francophone avec des parcours complets menant à des diplômes reconnus. Idéal pour obtenir une certification-valide tout en apprenant.",
    domains: ["dev-web", "dev-mobile", "data-science", "ui-ux"],
    free: true,
  },
  {
    id: "coursera",
    name: "Coursera",
    url: "https://coursera.org",
    category: "certifiant",
    type: "Cours universitaires certifiants",
    description:
      "Partenariats avec les meilleures universités (Stanford, MIT, Google). Cours auditables gratuitement, certificats reconnus dans l'industrie.",
    domains: [
      "dev-web",
      "data-science",
      "ia-ml",
      "cybersecurite",
      "devops",
    ],
    free: true,
  },
  {
    id: "freecodecamp",
    name: "FreeCodeCamp",
    url: "https://freecodecamp.org",
    category: "pratique",
    type: "100% gratuit et pratique",
    description:
      "Apprendre en codant directement dans le navigateur. Des dizaines de projets concrets et des certifications gratuites. La référence pour apprendre le web.",
    domains: ["dev-web", "data-science"],
    free: true,
  },
  {
    id: "theodinproject",
    name: "The Odin Project",
    url: "https://theodinproject.com",
    category: "pratique",
    type: "Open source, projet-based",
    description:
      "Curriculum complet et ouvert pour devenir développeur full-stack. Projets réels à chaque étape, forte communauté d'entraide.",
    domains: ["dev-web"],
    free: true,
  },
  {
    id: "exercism",
    name: "Exercism",
    url: "https://exercism.org",
    category: "pratique",
    type: "Exercices pratiques guidés",
    description:
      "Plus de 60 langages de programmation avec des exercices progressifs et du mentorat gratuit. Parfait pour maîtriser la logique algorithmique.",
    domains: ["dev-web", "dev-mobile", "data-science"],
    free: true,
  },
  {
    id: "codecademy",
    name: "Codecademy",
    url: "https://codecademy.com",
    category: "pratique",
    type: "Interactif en ligne",
    description:
      "Cours interactifs directement dans le navigateur. Accès complet gratuit avec des projets, quiz et défis pratiques.",
    domains: ["dev-web", "data-science", "ia-ml"],
    free: true,
  },
  {
    id: "mdn-web-docs",
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    category: "documentation",
    type: "Documentation officielle",
    description:
      "La bible du web. Référence ultime pour HTML, CSS, JavaScript et les APIs web. Maintenue par Mozilla, incontournable pour tout développeur web.",
    domains: ["dev-web"],
    free: true,
  },
  {
    id: "rust-docs",
    name: "The Rust Book",
    url: "https://doc.rust-lang.org/book",
    category: "documentation",
    type: "Documentation officielle",
    description:
      "Le guide officiel de Rust, lisible comme un livre. Excellent pour comprendre les systèmes de gestion mémoire et la programmation bas niveau.",
    domains: ["dev-web", "cybersecurite"],
    free: true,
  },
  {
    id: "pytorch-docs",
    name: "PyTorch Documentation",
    url: "https://pytorch.org/docs",
    category: "documentation",
    type: "Documentation officielle",
    description:
      "Documentation de la bibliothèque d'IA la plus utilisée en recherche. Tutoriels, guides et exemples pour deep learning et ML.",
    domains: ["ia-ml", "data-science"],
    free: true,
  },
  {
    id: "owasp",
    name: "OWASP",
    url: "https://owasp.org",
    category: "documentation",
    type: "Référence sécurité",
    description:
      "Open Web Application Security Project. Référence mondiale pour la cybersécurité web. Le Top 10 des vulnérabilités est un incontournable.",
    domains: ["cybersecurite"],
    free: true,
  },
  {
    id: "leetcode",
    name: "LeetCode",
    url: "https://leetcode.com",
    category: "pratique",
    type: "Algorithmique & entretiens",
    description:
      "La plateforme de référence pour préparer les entretiens techniques. Plus de 2000 problèmes d'algorithmes classés par difficulté, Blind 75 et simulations d'entretiens d'entreprises tech.",
    domains: ["dev-web", "dev-mobile", "data-engineering"],
    free: true,
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    url: "https://hackerrank.com",
    category: "pratique",
    type: "Défi algorithmique & certification",
    description:
      "Exercices d'algorithmes, de code et de SQL. Certifications reconnues par les recruteurs. Challenges hebdomadaires et competitions live.",
    domains: ["dev-web", "data-science", "data-engineering"],
    free: true,
  },
  {
    id: "kaggle",
    name: "Kaggle",
    url: "https://kaggle.com",
    category: "pratique",
    type: "Data Science & Machine Learning",
    description:
      "La plus grande communauté de data scientists au monde. Datasets, competitions, notebooks interactifs et cours gratuits. Indispensable pour pratiquer le ML en conditions réelles.",
    domains: ["data-science", "ia-ml", "data-engineering", "business-intelligence"],
    free: true,
  },
  {
    id: "hackthebox",
    name: "Hack The Box",
    url: "https://hackthebox.com",
    category: "pratique",
    type: "Cybersecurité offensive",
    description:
      "Plateforme de laboratoires de cybersécurité avec des machines à compromettre. Challenges de pentest,forensics, crypto et steganographie. Communauté active de hackers éthiques.",
    domains: ["cybersecurite", "securite-gouvernance"],
    free: true,
  },
  {
    id: "tryhackme",
    name: "TryHackMe",
    url: "https://tryhackme.com",
    category: "certifiant",
    type: "Parcours cybersécurité guidés",
    description:
      "Apprenez la cybersécurité pas à pas avec des parcours guidés, des machines virtuelles et des CTF. Parfait pour les débutants comme pour les confirmés.",
    domains: ["cybersecurite", "reseaux", "securite-gouvernance"],
    free: true,
  },
  {
    id: "google-cloud-skills",
    name: "Google Cloud Skills Boost",
    url: "https://cloudskillsboost.google",
    category: "certifiant",
    type: "Cloud & DevOps certifiant",
    description:
      "Parcours d'apprentissage Google Cloud avec labs pratiques en temps réel. Prépare les certifications GCP (Associate Cloud Engineer, Professional Data Engineer, etc.).",
    domains: ["devops", "data-engineering", "data-science"],
    free: true,
  },
  {
    id: "microsoft-learn",
    name: "Microsoft Learn",
    url: "https://learn.microsoft.com",
    category: "documentation",
    type: "Documentation & certifications Microsoft",
    description:
      "Parcours d'apprentissage officiels pour Azure, Microsoft 365, Power Platform et développement. Modules interactifs gratuits avec badges de progression.",
    domains: ["devops", "data-engineering", "business-intelligence", "erp-systemes"],
    free: true,
  },
  {
    id: "acloudguru",
    name: "A Cloud Guru",
    url: "https://acloudguru.com",
    category: "certifiant",
    type: "Cloud Computing certifiant",
    description:
      "Plateforme leader pour les certifications cloud (AWS, Azure, GCP). Cours vidéo, labs sandboxes et parcours de préparation aux examens.",
    domains: ["devops", "data-engineering"],
    free: true,
  },
  {
    id: "khan-academy",
    name: "Khan Academy",
    url: "https://khanacademy.org",
    category: "certifiant",
    type: "Maths & bases informatique",
    description:
      "Ressources éducatives gratuites couvrant les mathématiques, l'algorithmique, la logique et les bases de la programmation. Idéal pour construire des fondations solides.",
    domains: ["data-science", "ia-ml", "dev-web"],
    free: true,
  },
  {
    id: "android-developers",
    name: "Android Developers",
    url: "https://developer.android.com",
    category: "documentation",
    type: "Documentation officielle Android",
    description:
      "Documentation officielle Google pour le développement Android. Tutoriels, guides de conception Material Design, cours Kotlin et Jetpack Compose.",
    domains: ["dev-mobile"],
    free: true,
  },
  {
    id: "flutter-dev",
    name: "Flutter.dev",
    url: "https://flutter.dev",
    category: "documentation",
    type: "Documentation Flutter",
    description:
      "Documentation officielle du SDK Flutter pour créer des applications multiplateformes. Cours, samples et widgets interactifs pour iOS, Android et web.",
    domains: ["dev-mobile", "ui-ux"],
    free: true,
  },
  {
    id: "figma-resources",
    name: "Figma Resources",
    url: "https://figma.com/resources",
    category: "documentation",
    type: "UI/UX Design",
    description:
      "Ressources officielles Figma : tutoriels de design, communautés de fichiers, plugins et meilleures pratiques pour le prototypage et le design system.",
    domains: ["ui-ux"],
    free: true,
  },
  {
    id: "interactive-svg",
    name: "SVG on the Web",
    url: "https://svgontheweb.com",
    category: "documentation",
    type: "Référence SVG interactive",
    description:
      "Guide complet pour utiliser SVG dans le web : animations, interactivité, optimisation et accessibilité. Ressource précieuse pour les UI designers et développeurs frontend.",
    domains: ["ui-ux", "dev-web", "game-dev"],
    free: true,
  },
  {
    id: "unity-learn",
    name: "Unity Learn",
    url: "https://learn.unity.com",
    category: "certifiant",
    type: "Game Development certifiant",
    description:
      "Plateforme d'apprentissage officielle Unity. Tutoriels, projets guidés et parcours pour créer des jeux 2D/3D. Du débutant au développement professionnel.",
    domains: ["game-dev"],
    free: true,
  },
  {
    id: "godot-docs",
    name: "Godot Engine Docs",
    url: "https://docs.godotengine.org",
    category: "documentation",
    type: "Documentation Godot Engine",
    description:
      "Documentation officielle du moteur de jeu open source Godot. Tutoriels pas à pas pour le GDScript, les scènes, les shaders et la publication multiplateforme.",
    domains: ["game-dev"],
    free: true,
  },
  {
    id: "opengenus-foundation",
    name: "OpenGenus Foundation",
    url: "https://.opengenus.org",
    category: "documentation",
    type: "Algorithmes & Data Structures",
    description:
      "Fondation open source dédiée aux algorithmes. Cosmo est un guide interactif, et la base de connaissances couvre les structures de données et algorithmes en profondeur.",
    domains: ["dev-web", "data-engineering", "data-science"],
    free: true,
  },
  {
    id: "roadmap-sh",
    name: "Roadmap.sh",
    url: "https://roadmap.sh",
    category: "documentation",
    type: "Parcours d'apprentissage visuels",
    description:
      "Roadmaps interactives et visuelles pour tous les métiers de l'informatique. DevOps, Backend, Frontend, Data Engineer, Security — chaque chemin est détaillé étape par étape.",
    domains: ["dev-web", "devops", "cybersecurite", "data-engineering", "dev-mobile"],
    free: true,
  },
  {
    id: "cybrary",
    name: "Cybrary",
    url: "https://cybrary.it",
    category: "certifiant",
    type: "Cybersécurité & gouvernance",
    description:
      "Plateforme de formation en cybersécurité avec des parcours certifiants (CEH, CISSP, CompTIA Security+). Labs pratiques et simulations d'attaques.",
    domains: ["cybersecurite", "securite-gouvernance", "it-management"],
    free: true,
  },
  {
    id: "terraform-learn",
    name: "HashiCorp Learn",
    url: "https://developer.hashicorp.com/terraform/tutorials",
    category: "certifiant",
    type: "Infrastructure as Code",
    description:
      "Tutoriels officiels HashiCorp pour Terraform, Vault, Consul et Nomad. Labs interactifs pour apprendre l'Infrastructure as Code et le provisioning cloud.",
    domains: ["devops", "it-management"],
    free: true,
  },
  {
    id: "github-skills",
    name: "GitHub Skills",
    url: "https://skills.github.com",
    category: "pratique",
    type: "Git & Collaboration",
    description:
      "Cours interactifs intégrés à GitHub pour maîtriser Git, GitHub Actions, GitHub Pages et la collaboration en équipe. Chaque leçon est un vrai dépôt.",
    domains: ["dev-web", "devops", "it-management"],
    free: true,
  },
  {
    id: "powerbi-microsoft",
    name: "PL-300 Power BI Learn",
    url: "https://learn.microsoft.com/en-us/training/paths/power-bi-analyst/",
    category: "certifiant",
    type: "Power BI & BI certifiant",
    description:
      "Parcours officiel Microsoft pour la certification PL-300 Power BI Data Analyst. Modélisation, visualisation, DAX et gouvernance des données.",
    domains: ["business-intelligence", "data-science", "data-engineering"],
    free: true,
  },
  {
    id: "sap-learning",
    name: "SAP Learning",
    url: "https://learning.sap.com",
    category: "certifiant",
    type: "ERP & Business Process",
    description:
      "Plateforme officielle SAP pour apprendre les systèmes ERP, S/4HANA, SuccessFactors et l'intégration business. Parcours gratuits et certifications SAP.",
    domains: ["erp-systemes", "gestion-projet-it", "it-management"],
    free: true,
  },
  {
    id: "scrum-org",
    name: "Scrum.org Resources",
    url: "https://scrum.org/resources",
    category: "documentation",
    type: "Gestion de projet Agile",
    description:
      "Ressources officielles Scrum.org : guides, articles, webinaires et formations pour maîtriser Scrum, Kanban et les méthodes Agiles en gestion de projet IT.",
    domains: ["gestion-projet-it", "it-management"],
    free: true,
  },
  {
    id: "linux-kernel-docs",
    name: "The Linux Documentation Project",
    url: "https://tldp.org",
    category: "documentation",
    type: "Documentation Linux & Réseaux",
    description:
      "Référence historique pour Linux : guides d'installation, administration système, scripting shell et configuration réseau. Indispensable pour les ops et les devs backend.",
    domains: ["reseaux", "devops", "cybersecurite"],
    free: true,
  },
  {
    id: "networking-ccna",
    name: "Cisco Networking Academy",
    url: "https://netacad.com",
    category: "certifiant",
    type: "Réseaux & Infrastructure certifiant",
    description:
      "Programme officiel Cisco pour les réseaux : CCNA, CyberOps, Python for Networking. Cours interactifs, packet tracer et préparation aux certifications Cisco.",
    domains: ["reseaux", "cybersecurite", "devops"],
    free: true,
  },
  {
    id: "deep-learning-specialization",
    name: "DeepLearning.AI",
    url: "https://deeplearning.ai",
    category: "certifiant",
    type: "Deep Learning & IA",
    description:
      "Cours du Dr Andrew Ng, pionnier du Deep Learning. Spécialisation en IA, NLP, Computer Vision et MLOps. Cours gratuits disponibles sur Coursera.",
    domains: ["ia-ml", "data-science", "data-engineering"],
    free: true,
  },
  {
    id: "fast-ai",
    name: "fast.ai",
    url: "https://fast.ai",
    category: "certifiant",
    type: "Practical Deep Learning",
    description:
      "Cours de deep learning pratique et gratuit. Approche top-down pour apprendre les réseaux de neurones en les utilisant avant de les comprendre. Excellent pour démarrer rapidement.",
    domains: ["ia-ml", "data-science"],
    free: true,
  },
  {
    id: "realpython",
    name: "Real Python",
    url: "https://realpython.com",
    category: "documentation",
    type: "Tutoriels Python",
    description:
      "Tutoriels Python de haute qualité : du débutant à l'advanced. Couvre le web (Django/Flask), la data science, l'automatisation et le machine learning.",
    domains: ["data-science", "ia-ml", "dev-web", "data-engineering"],
    free: true,
  },
  {
    id: "typescript-docs",
    name: "TypeScript Handbook",
    url: "https://typescriptlang.org/docs/handbook",
    category: "documentation",
    type: "Documentation officielle TypeScript",
    description:
      "Le guide officiel de TypeScript : types, generics, utility types et migration depuis JavaScript. Référence incontournable pour tout développeur TypeScript.",
    domains: ["dev-web", "dev-mobile"],
    free: true,
  },
  {
    id: "atlassian-university",
    name: "Atlassian University",
    url: "https://university.atlassian.com",
    category: "certifiant",
    type: "Gestion de projet agile — Jira & Confluence",
    description:
      "Formation officielle Atlassian : Jira Software, Confluence, Jira Service Management. Cours interactifs, certifications et labs pratiques pour maîtriser les outils de gestion de projet agile incontournables en entreprise.",
    domains: ["gestion-projet-it", "it-management", "devops"],
    free: true,
  },
  {
    id: "axelos-itil",
    name: "AXELOS / ITIL",
    url: "https://axelos.com/certifications/itil",
    category: "certifiant",
    type: "Gestion des services IT — ITSM",
    description:
      "Cadre de référence mondial pour la gestion des services informatiques (ITSM). Certifications ITIL 4 Foundation, Managing Professional et Strategic Leader. Indispensable pour les chefs de service et DSI.",
    domains: ["it-management", "gestion-projet-it", "securite-gouvernance"],
    free: true,
  },
  {
    id: "aws-skill-builder",
    name: "AWS Skill Builder",
    url: "https://skillbuilder.aws",
    category: "certifiant",
    type: "Cloud Computing certifiant — AWS",
    description:
      "Plateforme officielle Amazon Web Services pour apprendre l'architecture cloud, l'administration, le machine learning et la sécurité. Prépare les certifications AWS (Cloud Practitioner, Solutions Architect, etc.).",
    domains: ["devops", "data-engineering", "securite-gouvernance"],
    free: true,
  },
  {
    id: "comptia-professor-messer",
    name: "Professor Messer",
    url: "https://professormesser.com",
    category: "certifiant",
    type: "Certifications CompTIA — Support & Réseau",
    description:
      "Cours gratuits complets pour les certifications CompTIA : A+, Network+, Security+, CySA+, Pentest+. Vidéos, notes de cours et quiz pratiques. La référence pour démarrer en support IT et sécurité.",
    domains: ["reseaux", "cybersecurite", "it-management"],
    free: true,
  },
  {
    id: "scrum-alliance",
    name: "Scrum Alliance",
    url: "https://scrumalliance.org",
    category: "certifiant",
    type: "Management Agile certifiant",
    description:
      "Certifications CSM, CSPO, A-CSM et CSP-SM pour les managers agiles et Product Owners. Forums, événements et ressources pour accompagner la transformation Agile des entreprises.",
    domains: ["gestion-projet-it", "it-management"],
    free: true,
  },
];

export function getPlatformsByCategory(category: PlatformCategory): Platform[] {
  return PLATFORMS.filter((p) => p.category === category);
}

export function getPlatformById(id: string): Platform | undefined {
  return PLATFORMS.find((p) => p.id === id);
}
