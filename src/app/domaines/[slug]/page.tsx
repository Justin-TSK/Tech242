import Link from "next/link";
import { notFound } from "next/navigation";
import { DOMAINES } from "@/data/domaines";
import { getRoadmapByDomain } from "@/data/roadmaps";
import { getDocsByDomain } from "@/data/docs";
import { getIAByCategory } from "@/data/ia";
import { DOMAIN_ICONS } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  Clock,
  DollarSign,
  Briefcase,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DOMAINES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const domaine = DOMAINES.find((d) => d.slug === slug);
  if (!domaine) return {};
  return {
    title: domaine.title,
    description: domaine.description,
  };
}

export default async function DomaineDetailPage({ params }: Props) {
  const { slug } = await params;
  const domaine = DOMAINES.find((d) => d.slug === slug);
  if (!domaine) notFound();

  const roadmap = getRoadmapByDomain(slug);
  const docs = getDocsByDomain(slug);
  const ia = getIAByCategory(slug);
  const Icon = DOMAIN_ICONS[slug];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="mb-8 flex items-center gap-2 text-sm text-text-tertiary">
        <Link href="/domaines" className="hover:text-accent-primary">
          Domaines
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-text-secondary">{domaine.title}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${domaine.color}15` }}
        >
          {Icon && (
            <Icon className="h-10 w-10" style={{ color: domaine.color }} strokeWidth={1.5} />
          )}
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              {domaine.title}
            </h1>
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
          </div>
          <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">
            {domaine.longDescription}
          </p>
        </div>
      </div>

      {/* Info cards */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-text-tertiary">
            <DollarSign className="h-4 w-4" />
            Salaire moyen
          </div>
          <p className="mt-2 text-lg font-bold text-accent-primary">
            {domaine.salaireMoyen}
          </p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-text-tertiary">
            <Clock className="h-4 w-4" />
            Durée d&apos;apprentissage
          </div>
          <p className="mt-2 text-lg font-bold text-text-primary">
            {domaine.dureeApprentissage}
          </p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-text-tertiary">
            <Briefcase className="h-4 w-4" />
            Débouchés
          </div>
          <p className="mt-2 text-lg font-bold text-text-primary">
            {domaine.debouches.length} métiers
          </p>
        </Card>
      </div>

      {/* Two columns */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-text-primary">
            Compétences clés
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {domaine.keySkills.map((skill) => (
              <Badge key={skill} variant="primary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-text-primary">
            Outils principaux
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {domaine.outils.map((outil) => (
              <Badge key={outil}>{outil}</Badge>
            ))}
          </div>
        </Card>
      </div>

      {/* Sous-domaines */}
      <Card className="mt-8">
        <h2 className="text-xl font-semibold text-text-primary">
          Sous-domaines
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {domaine.subDomaines.map((sub) => (
            <div
              key={sub}
              className="flex items-center gap-2.5 rounded-xl bg-bg-tertiary p-3.5"
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-accent-primary" />
              <span className="text-sm font-medium text-text-primary">{sub}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Débouchés */}
      <Card className="mt-8">
        <h2 className="text-xl font-semibold text-text-primary">
          Débouchés professionnels
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {domaine.debouches.map((deb) => (
            <Badge key={deb} variant="success">
              {deb}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Roadmap */}
      {roadmap && (
        <Card className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-text-primary">
              Roadmap d&apos;apprentissage
            </h2>
            <Button href="/roadmap" variant="ghost" size="sm">
              Voir toutes les roadmaps
            </Button>
          </div>
          <p className="mt-2 text-text-secondary">{roadmap.description}</p>
          <div className="mt-6 space-y-4">
            {roadmap.steps.map((step, index) => (
              <div
                key={step.id}
                className="flex gap-4 rounded-xl bg-bg-tertiary p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-text-tertiary">
                    <Clock className="h-3 w-3" />
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Docs */}
      {docs.length > 0 && (
        <Card className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            Documentations recommandées
          </h2>
          <div className="mt-4 space-y-3">
            {docs.map((doc) => (
              <a
                key={doc.id}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-bg-tertiary p-3.5 hover:bg-bg-card-hover"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 shrink-0 text-text-tertiary" />
                  <div>
                    <h3 className="font-medium text-text-primary">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {doc.description}
                    </p>
                  </div>
                </div>
                <Badge variant={doc.isFree ? "success" : "warning"} dot>
                  {doc.isFree ? "Gratuit" : "Payant"}
                </Badge>
              </a>
            ))}
          </div>
        </Card>
      )}

      {/* IA */}
      {ia.length > 0 && (
        <Card className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            IA utiles pour ce domaine
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {ia.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl bg-bg-tertiary p-3.5 hover:bg-bg-card-hover"
              >
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-text-tertiary" />
                <div>
                  <h3 className="font-medium text-text-primary">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {tool.bestFor}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
