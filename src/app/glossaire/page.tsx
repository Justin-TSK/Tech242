"use client";

import { useState, useMemo } from "react";
import { GLOSSARY, GLOSSARY_CATEGORIES, type GlossaryCategory } from "@/data/glossary";
import { Search } from "lucide-react";

export default function GlossairePage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<GlossaryCategory | "Tous">("Tous");

  const filtered = useMemo(() => {
    return GLOSSARY.filter((t) => {
      const matchSearch =
        search === "" ||
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selected === "Tous" || t.category === selected;
      return matchSearch && matchCategory;
    });
  }, [search, selected]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const term of filtered) {
      const list = map.get(term.category) || [];
      list.push(term);
      map.set(term.category, list);
    }
    return map;
  }, [filtered]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Glossaire IT
        </h1>
        <p className="mt-2 text-text-secondary">
          Les termes techniques de l&apos;informatique expliqués simplement en français.
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-tertiary" />
        <input
          type="text"
          placeholder="Rechercher un terme..."
          aria-label="Rechercher un terme du glossaire"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-border-primary bg-bg-card py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/30"
        />
      </div>

      {/* Category filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSelected("Tous")}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            selected === "Tous"
              ? "bg-accent-primary text-white"
              : "bg-bg-tertiary text-text-secondary hover:text-text-primary"
          }`}
        >
          Tous ({GLOSSARY.length})
        </button>
        {GLOSSARY_CATEGORIES.map((cat) => {
          const count = GLOSSARY.filter((t) => t.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                selected === cat
                  ? "bg-accent-primary text-white"
                  : "bg-bg-tertiary text-text-secondary hover:text-text-primary"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Terms */}
      <div className="mt-10 space-y-10">
        {Array.from(grouped.entries()).map(([category, terms]) => (
          <section key={category}>
            <h2 className="mb-4 text-lg font-bold text-text-primary">{category}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {terms.map((t) => (
                <div
                  key={t.term}
                  className="rounded-xl border border-border-primary bg-bg-card p-4"
                >
                  <h3 className="text-sm font-bold text-accent-primary">{t.term}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                    {t.definition}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-20 text-center text-text-tertiary">
          Aucun terme trouvé pour « {search} ».
        </div>
      )}
    </div>
  );
}
