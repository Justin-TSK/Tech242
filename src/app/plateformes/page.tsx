import type { Metadata } from "next";
import { PLATFORMS, CATEGORY_LABELS, CATEGORY_ORDER } from "@/data/platforms";
import type { PlatformCategory } from "@/data/platforms";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Code2, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Plateformes",
  description: "Les meilleures plateformes d'apprentissage en informatique : cours, exercices et certifications.",
};

const CATEGORY_ICONS: Record<PlatformCategory, React.ReactNode> = {
  certifiant: <GraduationCap className="h-6 w-6 text-accent-primary" strokeWidth={1.5} />,
  pratique: <Code2 className="h-6 w-6 text-success" strokeWidth={1.5} />,
  documentation: <BookOpen className="h-6 w-6 text-accent-secondary" strokeWidth={1.5} />,
};

export default function PlateformesPage() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    icon: CATEGORY_ICONS[cat],
    platforms: PLATFORMS.filter((p) => p.category === cat),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <Badge variant="primary" dot>Apprentissage</Badge>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Plateformes d&apos;Apprentissage
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Les meilleures ressources pour apprendre, pratiquer et certifier vos
          compétences
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {grouped.map(({ category, label, icon, platforms }) => (
          <section key={category}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-tertiary">
                {icon}
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-text-primary">{label}</h2>
              <Badge>{platforms.length}</Badge>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card hover className="h-full">
                    <div className="flex items-start justify-between">
                      <Badge variant={platform.free ? "success" : "warning"} dot>
                        {platform.free ? "Gratuit" : "Payant"}
                      </Badge>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-text-primary">
                      {platform.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-primary">
                      {platform.type}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {platform.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {platform.domains.map((d) => (
                        <span
                          key={d}
                          className="rounded-lg bg-bg-tertiary px-2.5 py-1 text-xs font-medium text-text-secondary"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
