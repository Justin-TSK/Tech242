"use client";

import Link from "next/link";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { TYPING_PHRASES } from "@/lib/constants";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const typedText = useTypingEffect({
    phrases: TYPING_PHRASES,
    typingSpeed: 60,
    deletingSpeed: 40,
    pauseDuration: 800,
  });

  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 -z-10" />

      <div className="flex flex-col items-center text-center">
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-primary/5 px-4 py-1.5 text-xs font-medium text-accent-primary">
          <Sparkles className="h-3 w-3" />
          Plateforme éducative 100% gratuite
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
          Votre boussole vers{" "}
          <span className="gradient-text">l&apos;informatique</span>
        </h1>

        <div className="mt-6 h-10 font-mono text-lg text-accent-secondary sm:text-xl">
          <span>{typedText}</span>
          <span className="cursor-blink ml-0.5 inline-block h-5 w-0.5 bg-accent-primary" />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          Tech242 centralise les meilleures IA, documentations et roadmaps
          pour guider les étudiants en informatique vers la réussite.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/domaines"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-accent-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-primary/20 transition-all duration-200 hover:bg-accent-secondary hover:shadow-xl hover:shadow-accent-primary/25 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Explorer les domaines
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 rounded-xl border border-border-primary bg-bg-card px-7 py-3.5 text-sm font-semibold text-text-primary shadow-sm transition-all duration-200 hover:bg-bg-card-hover hover:border-accent-primary/30 hover:shadow-md active:scale-[0.98]"
          >
            Voir les roadmaps
          </Link>
        </div>
      </div>
    </section>
  );
}
