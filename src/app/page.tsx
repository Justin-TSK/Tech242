import Link from "next/link";
import type { Metadata } from "next";
import { DOMAINES } from "@/data/domaines";
import { DOMAIN_ICONS } from "@/lib/icons";
import { Hero } from "@/components/home/Hero";
import { WorldMapClient } from "@/components/home/WorldMapClient";

export const metadata: Metadata = {
  title: "Tech242",
  description: "Votre boussole numérique pour naviguer dans le monde de l'informatique. 16 domaines, IA, docs, roadmaps et glossaire.",
};
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Zap, Target, BookOpen, Route, BookMarked } from "lucide-react";

const STATS = [
  { value: "16", label: "Domaines", icon: Target, color: "text-accent-primary" },
  { value: "26+", label: "IA Référencées", icon: Zap, color: "text-success" },
  { value: "45+", label: "Documentations", icon: BookOpen, color: "text-warning" },
  { value: "16", label: "Roadmaps", icon: Route, color: "text-danger" },
  { value: "48", label: "Termes Glossaire", icon: BookMarked, color: "text-accent-primary" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Hero />

      {/* Stats Bar */}
      <section className="mt-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-2xl border border-border-primary bg-bg-card p-3 sm:gap-4 sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-tertiary sm:h-12 sm:w-12">
                  <Icon className={`h-4 w-4 ${stat.color} sm:h-5 sm:w-5`} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-tight text-text-primary sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-medium text-text-tertiary sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Domaines Grid */}
      <section className="mt-24">
        <div className="flex items-end justify-between">
          <div>
            <Badge variant="primary" dot>Parcours</Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Choisissez votre domaine
            </h2>
            <p className="mt-2 text-text-secondary">
              16 parcours pour trouver votre voie en informatique
            </p>
          </div>
          <Link
            href="/domaines"
            className="hidden items-center gap-1.5 text-sm font-semibold text-accent-primary hover:text-accent-secondary sm:inline-flex"
          >
            Tout voir
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {DOMAINES.map((domaine) => {
            const Icon = DOMAIN_ICONS[domaine.slug];
            return (
              <Link key={domaine.slug} href={`/domaines/${domaine.slug}`}>
                <div className="group h-full rounded-2xl border border-border-primary bg-bg-card p-5 hover:border-accent-primary/30 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${domaine.color}15` }}
                    >
                      {Icon && (
                        <Icon
                          className="h-5 w-5"
                          style={{ color: domaine.color }}
                          strokeWidth={1.5}
                        />
                      )}
                    </div>
                    <ArrowRight className="h-4 w-4 text-text-tertiary opacity-0 group-hover:opacity-100 group-hover:text-accent-primary" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-text-primary">
                    {domaine.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-text-tertiary line-clamp-2">
                    {domaine.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/domaines"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary"
          >
            Voir tous les domaines
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Carte du monde */}
      <section className="mt-24">
        <div>
          <Badge variant="primary" dot>Global</Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Géographie de la Tech
          </h2>
          <p className="mt-2 text-text-secondary">
            Les pays qui dominent le numérique à l&apos;échelle mondiale
          </p>
        </div>
        <div className="mt-10">
          <WorldMapClient />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-3xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 via-bg-card to-accent-secondary/5 p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Prêt à commencer votre voyage ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary leading-relaxed">
            Explorez les domaines, découvrez les meilleures IA et suivez les
            roadmaps pour construire votre carrière en informatique.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/ia"
              className="inline-flex items-center gap-2.5 rounded-xl bg-accent-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-secondary"
            >
              Découvrir les IA
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl border border-border-primary bg-bg-card px-7 py-3.5 text-sm font-semibold text-text-primary hover:bg-bg-card-hover"
            >
              Parcourir les docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
