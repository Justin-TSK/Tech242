import Link from "next/link";
import { ROADMAPS } from "@/data/roadmaps";
import { DOMAINES } from "@/data/domaines";
import { DOMAIN_ICONS } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Clock, ArrowRight } from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <Badge variant="primary" dot>Parcours</Badge>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Roadmaps d&apos;Apprentissage
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Des parcours structurés pour guider votre apprentissage étape par
          étape
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {ROADMAPS.map((roadmap) => {
          const domaine = DOMAINES.find(
            (d) => d.slug === roadmap.domaineSlug,
          );
          const Icon = DOMAIN_ICONS[roadmap.domaineSlug];
          return (
            <div key={roadmap.id}>
              {/* Roadmap header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {domaine && Icon && (
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${domaine.color}15` }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: domaine.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                    {roadmap.title}
                  </h2>
                  <p className="mt-1 text-text-secondary">
                    {roadmap.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      roadmap.difficulty === "débutant"
                        ? "success"
                        : roadmap.difficulty === "intermédiaire"
                          ? "warning"
                          : "danger"
                    }
                    dot
                  >
                    {roadmap.difficulty}
                  </Badge>
                  <Badge>{roadmap.totalTime}</Badge>
                </div>
              </div>

              {/* Steps timeline */}
              <div className="mt-8 ml-6 border-l-2 border-border-primary pl-8">
                {roadmap.steps.map((step, index) => (
                  <div key={step.id} className="relative pb-8 last:pb-0">
                    {/* Dot */}
                    <div className="absolute -left-[45px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <Card>
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-text-primary">
                          {step.title}
                        </h3>
                        <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
                          <Clock className="h-3.5 w-3.5" />
                          {step.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {step.skills.map((skill) => (
                          <Badge key={skill} variant="primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {step.resources.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {step.resources.map((r) => (
                            <a
                              key={r.url}
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-accent-primary hover:text-accent-secondary"
                            >
                              {r.name}
                              <ArrowRight className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </Card>
                  </div>
                ))}
              </div>

              {/* Link to detail */}
              {domaine && (
                <div className="mt-4">
                  <Link
                    href={`/domaines/${domaine.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary hover:text-accent-secondary"
                  >
                    Voir le détail du domaine {domaine.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
