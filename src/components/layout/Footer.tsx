import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-primary bg-bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 ring-1 ring-accent-primary/20">
                <Compass className="h-4 w-4 text-accent-primary" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-bold tracking-tight text-text-primary">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Votre boussole numérique pour naviguer dans le monde de
              l&apos;informatique. 16 domaines, IA, docs, roadmaps et glossaire.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              Ressources
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/domaines", label: "Domaines" },
                { href: "/ia", label: "IA Éducatives" },
                { href: "/docs", label: "Documentation" },
                { href: "/roadmap", label: "Roadmaps" },
                { href: "/plateformes", label: "Plateformes" },
                { href: "/glossaire", label: "Glossaire IT" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              À propos
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              TechCompass est une application éducative gratuite destinée aux
              étudiants en informatique.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border-primary pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-text-tertiary">
              © {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-1 text-xs text-text-tertiary">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Tous les systèmes opérationnels
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
