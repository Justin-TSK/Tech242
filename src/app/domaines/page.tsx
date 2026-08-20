import Link from "next/link";
import { DOMAINES } from "@/data/domaines";
import { DOMAIN_ICONS } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export default function DomainesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <Badge variant="primary" dot>Exploration</Badge>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Domaines Informatiques
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Explorez les différents parcours et trouvez celui qui vous correspond
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DOMAINES.map((domaine) => {
          const Icon = DOMAIN_ICONS[domaine.slug];
          return (
            <Link key={domaine.slug} href={`/domaines/${domaine.slug}`}>
              <Card hover className="group h-full">
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${domaine.color}15` }}
                  >
                    {Icon && (
                      <Icon
                        className="h-7 w-7"
                        style={{ color: domaine.color }}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        domaine.difficulty === "débutant"
                          ? "success"
                          : domaine.difficulty === "intermédiaire"
                            ? "warning"
                            : "danger"
                      }
                      dot
                    >
                      {domaine.difficulty}
                    </Badge>
                    <ArrowRight className="h-4 w-4 text-text-tertiary opacity-0 group-hover:opacity-100 group-hover:text-accent-primary" />
                  </div>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-text-primary">
                  {domaine.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {domaine.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {domaine.subDomaines.slice(0, 3).map((sub) => (
                    <span
                      key={sub}
                      className="rounded-lg bg-bg-tertiary px-2.5 py-1 text-xs font-medium text-text-secondary"
                    >
                      {sub}
                    </span>
                  ))}
                  {domaine.subDomaines.length > 3 && (
                    <span className="rounded-lg bg-bg-tertiary px-2.5 py-1 text-xs font-medium text-text-secondary">
                      +{domaine.subDomaines.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-border-secondary pt-4 text-sm">
                  <span className="text-text-tertiary">
                    {domaine.dureeApprentissage}
                  </span>
                  <span className="font-semibold text-accent-primary">
                    {domaine.salaireMoyen}
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
