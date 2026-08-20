import Link from "next/link";
import { SearchX, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-accent-primary/5 blur-2xl" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-bg-tertiary ring-1 ring-border-primary">
          <SearchX className="h-10 w-10 text-text-tertiary" strokeWidth={1.5} />
        </div>
      </div>
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-text-primary">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-text-secondary leading-relaxed">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2.5 rounded-xl bg-accent-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-primary/20 transition-all duration-200 hover:bg-accent-secondary hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
