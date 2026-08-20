"use client";

import { useState } from "react";
import { DOCS } from "@/data/docs";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const TYPES = ["Tous", "official", "tutorial", "course", "tool"];
const DOMAINES = [
  "Tous",
  "dev-web",
  "dev-mobile",
  "data-science",
  "ia-ml",
  "cybersecurite",
  "devops",
  "reseaux",
  "ui-ux",
  "erp-systemes",
  "business-intelligence",
  "gestion-projet-it",
  "it-management",
  "data-engineering",
  "securite-gouvernance",
];

const TYPE_LABELS: Record<string, string> = {
  official: "Officiel",
  tutorial: "Tutorial",
  course: "Cours",
  tool: "Outil",
};

export default function DocsPage() {
  const [selectedType, setSelectedType] = useState("Tous");
  const [selectedDomaine, setSelectedDomaine] = useState("Tous");
  const [search, setSearch] = useState("");

  const filtered = DOCS.filter((doc) => {
    const matchesType =
      selectedType === "Tous" || doc.type === selectedType;
    const matchesDomaine =
      selectedDomaine === "Tous" || doc.domain.includes(selectedDomaine);
    const matchesSearch =
      search === "" ||
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.description.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesDomaine && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <Badge variant="primary" dot>Ressources</Badge>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Documentations
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Les meilleures ressources pour apprendre chaque domaine
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mt-8 max-w-md">
        <input
          type="text"
          placeholder="Rechercher une doc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-border-primary bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
        />
      </div>

      {/* Filters */}
      <div className="mx-auto mt-6 max-w-4xl space-y-4">
        <div className="flex flex-wrap justify-center gap-2">
          {TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedType === type
                  ? "bg-accent-primary text-white"
                  : "bg-bg-tertiary text-text-secondary hover:bg-bg-card-hover"
              }`}
            >
              {TYPE_LABELS[type] || type}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {DOMAINES.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDomaine(d)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                selectedDomaine === d
                  ? "bg-accent-secondary text-white"
                  : "bg-bg-tertiary text-text-secondary hover:bg-bg-card-hover"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((doc) => (
          <a
            key={doc.id}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card hover className="h-full">
              <div className="flex items-start justify-between">
                <Badge variant="primary">{TYPE_LABELS[doc.type]}</Badge>
                <Badge variant={doc.isFree ? "success" : "warning"} dot>
                  {doc.isFree ? "Gratuit" : "Payant"}
                </Badge>
              </div>

              <h2 className="mt-4 text-lg font-semibold text-text-primary">
                {doc.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {doc.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-border-secondary pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {doc.domain.slice(0, 2).map((d) => (
                    <span
                      key={d}
                      className="rounded-lg bg-bg-tertiary px-2 py-0.5 text-xs font-medium text-text-secondary"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-text-tertiary">
                  {doc.difficulty}
                </span>
              </div>
            </Card>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-text-tertiary">Aucune documentation trouvée.</p>
        </div>
      )}
    </div>
  );
}
