export { DOMAINES, getDomaineBySlug } from "./domaines";
export type { Domaine } from "./domaines";

export { IA_LIST, getIAByCategory, getIAById } from "./ia";
export type { IA } from "./ia";

export { DOCS, getDocsByDomain, getDocById } from "./docs";
export type { Doc } from "./docs";

export { ROADMAPS, getRoadmapByDomain, getRoadmapById } from "./roadmaps";
export type { Roadmap, RoadmapStep } from "./roadmaps";

export { PLATFORMS, CATEGORY_LABELS, CATEGORY_ORDER, getPlatformsByCategory, getPlatformById } from "./platforms";
export type { Platform, PlatformCategory } from "./platforms";

export { GLOSSARY, GLOSSARY_CATEGORIES } from "./glossary";
export type { GlossaryTerm, GlossaryCategory } from "./glossary";
