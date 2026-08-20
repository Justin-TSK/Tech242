"use client";

import { useState } from "react";
import { IA_LIST } from "@/data/ia";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const CATEGORIES = [
  "Toutes",
  "Général",
  "dev-web",
  "dev-mobile",
  "data-science",
  "ia-ml",
  "cybersecurite",
  "devops",
  "ui-ux",
  "erp-systemes",
  "business-intelligence",
  "gestion-projet-it",
  "data-engineering",
  "securite-gouvernance",
];

export default function IAPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [search, setSearch] = useState("");

  const filtered = IA_LIST.filter((ia) => {
    const matchesCategory =
      selectedCategory === "Toutes" ||
      ia.category.includes(selectedCategory);
    const matchesSearch =
      search === "" ||
      ia.name.toLowerCase().includes(search.toLowerCase()) ||
      ia.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <Badge variant="primary" dot>Intelligence Artificielle</Badge>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          IA Éducatives
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Les meilleures intelligences artificielles pour apprendre et coder
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mt-8 max-w-md">
        <input
          type="text"
          placeholder="Rechercher une IA..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-border-primary bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
        />
      </div>

      {/* Filters */}
      <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              selectedCategory === cat
                ? "bg-accent-primary text-white"
                : "bg-bg-tertiary text-text-secondary hover:bg-bg-card-hover"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ia) => (
          <a
            key={ia.id}
            href={ia.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card hover className="h-full">
              <div className="flex items-start justify-between">
                <Badge
                  variant={
                    ia.pricing === "gratuit"
                      ? "success"
                      : ia.pricing === "freemium"
                        ? "primary"
                        : "warning"
                  }
                  dot
                >
                  {ia.pricing}
                </Badge>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-text-primary">
                {ia.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {ia.description}
              </p>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                  Idéal pour
                </p>
                <p className="mt-1 text-sm font-medium text-accent-primary">
                  {ia.bestFor}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {ia.features.slice(0, 3).map((f) => (
                  <span
                    key={f}
                    className="rounded-lg bg-bg-tertiary px-2.5 py-1 text-xs font-medium text-text-secondary"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Card>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-text-tertiary">Aucune IA trouvée pour cette recherche.</p>
        </div>
      )}
    </div>
  );
}
