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
    free: false,
  },
  {
    id: "coursera",
    name: "Coursera",
    url: "https://coursera.org",
    category: "certifiant",
    type: "Cours universitaires certifiants",
    description:
      "Partenariats avec les meilleures universités (Stanford, MIT, Google). Cours auditables gratuitement, certificats payants reconnus dans l'industrie.",
    domains: [
      "dev-web",
      "data-science",
      "ia-ml",
      "cybersecurite",
      "devops",
    ],
    free: false,
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
      "Cours interactifs directement dans le navigateur. Le plan gratuit offre les bases, le plan Pro débloque des projets et des quiz.",
    domains: ["dev-web", "data-science", "ia-ml"],
    free: false,
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
];

export function getPlatformsByCategory(category: PlatformCategory): Platform[] {
  return PLATFORMS.filter((p) => p.category === category);
}

export function getPlatformById(id: string): Platform | undefined {
  return PLATFORMS.find((p) => p.id === id);
}
