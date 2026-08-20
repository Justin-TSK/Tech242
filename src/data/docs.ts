export interface Doc {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "official" | "tutorial" | "course" | "book" | "tool";
  domain: string[];
  difficulty: "débutant" | "intermédiaire" | "avancé";
  isFree: boolean;
  language: "fr" | "en" | "both";
}

export const DOCS: Doc[] = [
  // Dev Web
  {
    id: "mdn",
    title: "MDN Web Docs",
    description:
      "La référence officielle du web. Documentation complète HTML, CSS, JavaScript et APIs.",
    url: "https://developer.mozilla.org",
    type: "official",
    domain: ["dev-web"],
    difficulty: "débutant",
    isFree: true,
    language: "both",
  },
  {
    id: "nextjs-docs",
    title: "Next.js Documentation",
    description:
      "Documentation officielle de Next.js. Apprends le framework React le plus populaire.",
    url: "https://nextjs.org/docs",
    type: "official",
    domain: ["dev-web"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "react-docs",
    title: "React Documentation",
    description:
      "Documentation officielle de React. Apprends les hooks, composants et patterns modernes.",
    url: "https://react.dev",
    type: "official",
    domain: ["dev-web"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "freecodecamp",
    title: "freeCodeCamp",
    description:
      "Plateforme d'apprentissage gratuite avec certifications. HTML, CSS, JS, React, et plus.",
    url: "https://freecodecamp.org",
    type: "course",
    domain: ["dev-web"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  {
    id: "css-tricks",
    title: "CSS-Tricks",
    description:
      "Le site de référence pour CSS. Guides, techniques, et flexbox/grid cheat sheets.",
    url: "https://css-tricks.com",
    type: "tutorial",
    domain: ["dev-web"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "javascript-info",
    title: "JavaScript.info",
    description:
      "Le guide moderne de JavaScript. Du débutant au niveau avancé avec des exemples pratiques.",
    url: "https://javascript.info",
    type: "course",
    domain: ["dev-web"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  // Data Science
  {
    id: "kaggle",
    title: "Kaggle Learn",
    description:
      "Cours gratuits de data science avec des notebooks pratiques et des compétitions.",
    url: "https://kaggle.com/learn",
    type: "course",
    domain: ["data-science", "ia-ml"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  {
    id: "pandas-docs",
    title: "Pandas Documentation",
    description:
      "Documentation officielle de Pandas. La bibliothèque essentielle pour la data en Python.",
    url: "https://pandas.pydata.org/docs",
    type: "official",
    domain: ["data-science"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "statquest",
    title: "StatQuest",
    description:
      "Vidéos YouTube expliquant les statistiques et le ML de façon simple et visuelle.",
    url: "https://youtube.com/statquest",
    type: "tutorial",
    domain: ["data-science", "ia-ml"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  // IA/ML
  {
    id: "fastai",
    title: "fast.ai",
    description:
      "Cours pratique de deep learning. Apprends à créer des modèles performants rapidement.",
    url: "https://course.fast.ai",
    type: "course",
    domain: ["ia-ml"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "tensorflow-docs",
    title: "TensorFlow Documentation",
    description:
      "Documentation officielle de TensorFlow. Tutos, guides et API pour le ML.",
    url: "https://www.tensorflow.org/docs",
    type: "official",
    domain: ["ia-ml"],
    difficulty: "avancé",
    isFree: true,
    language: "en",
  },
  {
    id: "pytorch-docs",
    title: "PyTorch Documentation",
    description:
      "Documentation officielle de PyTorch. Le framework ML privilégié par la recherche.",
    url: "https://pytorch.org/docs",
    type: "official",
    domain: ["ia-ml"],
    difficulty: "avancé",
    isFree: true,
    language: "en",
  },
  {
    id: "deeplearning-coursera",
    title: "Deep Learning Specialization",
    description:
      "La spécialisation Deep Learning de Andrew Ng sur Coursera. Référence mondiale.",
    url: "https://coursera.org/specializations/deep-learning",
    type: "course",
    domain: ["ia-ml"],
    difficulty: "intermédiaire",
    isFree: false,
    language: "en",
  },
  // Cybersécurité
  {
    id: "owasp",
    title: "OWASP Top 10",
    description:
      "Les 10 vulnérabilités web les plus critiques. Base essentielle pour la sécurité web.",
    url: "https://owasp.org/www-project-top-ten",
    type: "official",
    domain: ["cybersecurite", "dev-web"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "hack-the-box",
    title: "Hack The Box",
    description:
      "Plateforme de pentest légale. Entraîne-toi à résoudre des challenges de sécurité.",
    url: "https://hackthebox.com",
    type: "tool",
    domain: ["cybersecurite"],
    difficulty: "avancé",
    isFree: false,
    language: "en",
  },
  {
    id: "tryhackme",
    title: "TryHackMe",
    description:
      "Apprends la cybersécurité de façon gamifiée. Parcours guidés pour débutants.",
    url: "https://tryhackme.com",
    type: "course",
    domain: ["cybersecurite"],
    difficulty: "débutant",
    isFree: false,
    language: "en",
  },
  {
    id: "overthewire",
    title: "OverTheWire",
    description:
      "Wargames pour apprendre la sécurité et Linux de façon ludique avec des niveaux progressifs.",
    url: "https://overthewire.org",
    type: "tool",
    domain: ["cybersecurite", "reseaux"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  // DevOps
  {
    id: "docker-docs",
    title: "Docker Documentation",
    description:
      "Documentation officielle de Docker. Apprends les containers de A à Z.",
    url: "https://docs.docker.com",
    type: "official",
    domain: ["devops"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "kubernetes-docs",
    title: "Kubernetes Documentation",
    description:
      "Documentation officielle de K8s. L'orchestration de containers en production.",
    url: "https://kubernetes.io/docs",
    type: "official",
    domain: ["devops"],
    difficulty: "avancé",
    isFree: true,
    language: "en",
  },
  {
    id: "linuxjourney",
    title: "Linux Journey",
    description:
      "Apprends Linux de façon interactive. Du débutant à l'administrateur système.",
    url: "https://linuxjourney.com",
    type: "course",
    domain: ["devops", "reseaux", "cybersecurite"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  // UI/UX
  {
    id: "figma-docs",
    title: "Figma Resources",
    description:
      "Documentation et ressources officielles de Figma. Design system, plugins, tutos.",
    url: "https://help.figma.com",
    type: "official",
    domain: ["ui-ux"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  {
    id: "nngroup",
    title: "Nielsen Norman Group",
    description:
      "Articles de recherche sur l'UX. La référence mondiale en ergonomie et UX design.",
    url: "https://nngroup.com",
    type: "tutorial",
    domain: ["ui-ux"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  // Général
  {
    id: "roadmap-sh",
    title: "Roadmap.sh",
    description:
      "Roadmaps visuelles pour tous les domaines de l'informatique. Le guide d'orientation ultime.",
    url: "https://roadmap.sh",
    type: "tool",
    domain: ["dev-web", "devops", "cybersecurite", "data-science", "dev-mobile", "data-engineering"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  {
    id: "github-education",
    title: "GitHub Education",
    description:
      "Ressources gratuites pour étudiants. GitHub Pro, Copilot, et outils gratuits.",
    url: "https://education.github.com",
    type: "tool",
    domain: ["Général"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  {
    id: "devdocs",
    title: "DevDocs",
    description:
      "Documentation aggregée de toutes les technologies. Recherche rapide et hors-ligne.",
    url: "https://devdocs.io",
    type: "tool",
    domain: ["dev-web", "dev-mobile"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  // Dev Web enrichi
  {
    id: "typescript-handbook",
    title: "TypeScript Handbook",
    description:
      "Le guide officiel de TypeScript. Apprends le typage statique pour JavaScript.",
    url: "https://typescriptlang.org/docs/handbook",
    type: "official",
    domain: ["dev-web", "dev-mobile"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "vite-docs",
    title: "Vite Documentation",
    description:
      "Documentation officielle de Vite. Le bundler moderne, ultra-rapide pour le dev web.",
    url: "https://vitejs.dev",
    type: "official",
    domain: ["dev-web"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  // Dev Mobile enrichi
  {
    id: "flutter-docs",
    title: "Flutter Documentation",
    description:
      "Documentation officielle de Flutter. Développe des apps mobiles multi-plateformes avec Dart.",
    url: "https://docs.flutter.dev",
    type: "official",
    domain: ["dev-mobile"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "react-native-docs",
    title: "React Native Documentation",
    description:
      "Documentation officielle de React Native. Apps mobiles avec React et JavaScript.",
    url: "https://reactnative.dev",
    type: "official",
    domain: ["dev-mobile"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  // Cybersécurité enrichi
  {
    id: "nmap-docs",
    title: "Nmap Documentation",
    description:
      "La documentation de Nmap. L'outil de scan réseau indispensable en sécurité.",
    url: "https://nmap.org/docs.html",
    type: "official",
    domain: ["cybersecurite", "reseaux"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "burp-academy",
    title: "PortSwigger Academy",
    description:
      "Cours gratuits de sécurité web par les créateurs de Burp Suite. Labs pratiques.",
    url: "https://portswigger.net/web-security",
    type: "course",
    domain: ["cybersecurite", "dev-web"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  // DevOps enrichi
  {
    id: "terraform-docs",
    title: "Terraform Documentation",
    description:
      "Documentation officielle de Terraform. Infrastructure as Code par HashiCorp.",
    url: "https://developer.hashicorp.com/terraform",
    type: "official",
    domain: ["devops"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "aws-docs",
    title: "AWS Documentation",
    description:
      "Documentation officielle d'Amazon Web Services. Le cloud leader mondial.",
    url: "https://docs.aws.amazon.com",
    type: "official",
    domain: ["devops"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "github-actions-docs",
    title: "GitHub Actions Documentation",
    description:
      "Documentation de GitHub Actions. CI/CD automatisé directement depuis GitHub.",
    url: "https://docs.github.com/actions",
    type: "official",
    domain: ["devops", "dev-web"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  // Réseaux enrichi
  {
    id: "cisco-netacad",
    title: "Cisco Networking Academy",
    description:
      "Cours de réseaux informatiques par Cisco. Prépare les certifications CCNA.",
    url: "https://skillsnetworklabs.com",
    type: "course",
    domain: ["reseaux", "cybersecurite"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  // ERP & Systèmes
  {
    id: "sap-learning",
    title: "SAP Learning",
    description:
      "Plateforme officielle SAP pour apprendre les modules ERP, S/4HANA et l'administration.",
    url: "https://learning.sap.com",
    type: "course",
    domain: ["erp-systemes"],
    difficulty: "intermédiaire",
    isFree: false,
    language: "en",
  },
  {
    id: "odoo-docs",
    title: "Odoo Documentation",
    description:
      "Documentation officielle d'Odoo. ERP open source complet pour toutes les entreprises.",
    url: "https://www.odoo.com/documentation",
    type: "official",
    domain: ["erp-systemes"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "both",
  },
  // Business Intelligence
  {
    id: "powerbi-docs",
    title: "Microsoft Power BI Documentation",
    description:
      "Documentation officielle de Power BI. Crée des dashboards et rapports interactifs.",
    url: "https://learn.microsoft.com/power-bi",
    type: "official",
    domain: ["business-intelligence", "data-science"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "tableau-training",
    title: "Tableau Public Training",
    description:
      "Cours gratuits Tableau. Apprends la visualisation et le data storytelling.",
    url: "https://public.tableau.com/en-us/s/resources",
    type: "course",
    domain: ["business-intelligence", "data-science"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  // Gestion de projet
  {
    id: "scrum-guide",
    title: "Scrum Guide",
    description:
      "Le guide officiel de Scrum. La méthode Agile la plus utilisée pour la gestion de projet.",
    url: "https://scrumguides.org",
    type: "official",
    domain: ["gestion-projet-it"],
    difficulty: "débutant",
    isFree: true,
    language: "both",
  },
  {
    id: "atlassian-agile",
    title: "Atlassian Agile Coach",
    description:
      "Ressources Atlassian pour maîtriser Agile, Scrum et Kanban.",
    url: "https://www.atlassian.com/agile",
    type: "tutorial",
    domain: ["gestion-projet-it"],
    difficulty: "débutant",
    isFree: true,
    language: "en",
  },
  // IT Management
  {
    id: "itil-4",
    title: "ITIL 4 Foundation",
    description:
      "Le cadre ITIL pour la gestion des services IT. Référence mondiale.",
    url: "https://www.axelos.com/itil",
    type: "official",
    domain: ["it-management"],
    difficulty: "intermédiaire",
    isFree: false,
    language: "en",
  },
  {
    id: "cobit",
    title: "ISACA COBIT",
    description:
      "COBIT : cadre de gouvernance et de management de l'IT pour les entreprises.",
    url: "https://www.isaca.org/resources/cobit",
    type: "official",
    domain: ["it-management", "securite-gouvernance"],
    difficulty: "avancé",
    isFree: false,
    language: "en",
  },
  // Data Engineering
  {
    id: "spark-docs",
    title: "Apache Spark Documentation",
    description:
      "Documentation officielle de Spark. Le framework de traitement de données big data.",
    url: "https://spark.apache.org/docs/latest",
    type: "official",
    domain: ["data-engineering", "data-science"],
    difficulty: "avancé",
    isFree: true,
    language: "en",
  },
  {
    id: "dbt-docs",
    title: "dbt Documentation",
    description:
      "Documentation de dbt. Transforme tes données avec SQL dans ton data warehouse.",
    url: "https://docs.getdbt.com",
    type: "official",
    domain: ["data-engineering", "business-intelligence"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "airflow-docs",
    title: "Apache Airflow Documentation",
    description:
      "Documentation officielle d'Airflow. Orchestre tes pipelines de données.",
    url: "https://airflow.apache.org/docs",
    type: "official",
    domain: ["data-engineering"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  // Sécurité & Gouvernance
  {
    id: "nist-framework",
    title: "NIST Cybersecurity Framework",
    description:
      "Le cadre NIST pour la gestion des risques cybersécurité. Référence gouvernementale.",
    url: "https://nist.gov/cyberframework",
    type: "official",
    domain: ["securite-gouvernance", "cybersecurite"],
    difficulty: "intermédiaire",
    isFree: true,
    language: "en",
  },
  {
    id: "rgpd-cnil",
    title: "CNIL - Guide RGPD",
    description:
      "Guide pratique du RGPD par la CNIL. Protection des données en France et en Europe.",
    url: "https://cnil.fr/rgpd",
    type: "official",
    domain: ["securite-gouvernance"],
    difficulty: "débutant",
    isFree: true,
    language: "fr",
  },
];

export function getDocsByDomain(domain: string): Doc[] {
  return DOCS.filter((d) => d.domain.includes(domain));
}

export function getDocById(id: string): Doc | undefined {
  return DOCS.find((d) => d.id === id);
}
