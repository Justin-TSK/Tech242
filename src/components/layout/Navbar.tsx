"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { NAV_ICONS } from "@/lib/icons";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <header
        className={`sticky top-0 z-50 hidden transition-all duration-300 md:block ${
          scrolled
            ? "border-b border-white/10 bg-bg-primary/40 shadow-lg shadow-black/5 backdrop-blur-2xl"
            : "border-b border-border-primary bg-bg-primary/90"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const Icon = NAV_ICONS[link.icon];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent-primary/10 text-accent-primary"
                      : "text-text-secondary hover:bg-bg-tertiary hover:text-text-primary"
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" strokeWidth={1.5} />}
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          <ThemeToggle />
        </nav>
      </header>

      {/* Mobile navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 md:hidden ${
          scrolled
            ? "border-b border-white/10 bg-bg-primary/40 shadow-lg shadow-black/5 backdrop-blur-2xl"
            : "border-b border-border-primary bg-bg-primary"
        }`}
      >
        {/* Top: logo + theme */}
        <div className="flex h-14 items-center justify-between px-4">
          <Logo />
          <ThemeToggle />
        </div>
        {/* Bottom: icons + labels */}
        <div className="flex items-center justify-around border-t border-border-primary px-1 py-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const Icon = NAV_ICONS[link.icon];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex flex-col items-center gap-0.5 px-1.5 py-2 text-center ${
                  isActive ? "text-accent-primary" : "text-text-tertiary"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" strokeWidth={1.5} />}
                <span className="text-[9px] font-medium leading-tight">{link.label}</span>
                {isActive && (
                  <span className="absolute top-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent-primary" />
                )}
              </Link>
            );
          })}
        </div>
      </header>
    </>
  );
}
