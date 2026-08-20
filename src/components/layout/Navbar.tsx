"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { NAV_ICONS } from "@/lib/icons";
import { ThemeToggle } from "./ThemeToggle";
import { Compass } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop navbar */}
      <header className="sticky top-0 z-50 border-b border-border-primary bg-bg-primary/90 hidden md:block">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-primary/10">
              <Compass className="h-5 w-5 text-accent-primary" strokeWidth={1.5} />
            </div>
            <span className="text-lg font-bold tracking-tight text-text-primary">
              {SITE_NAME}
            </span>
          </Link>

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
      <header className="sticky top-0 z-50 bg-bg-primary md:hidden">
        {/* Top: logo + theme */}
        <div className="flex h-14 items-center justify-between border-b border-border-primary px-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Compass className="h-5 w-5 text-accent-primary" strokeWidth={1.5} />
            <span className="text-lg font-bold tracking-tight text-text-primary">
              {SITE_NAME}
            </span>
          </Link>
          <ThemeToggle />
        </div>
        {/* Bottom: icons + labels */}
        <div className="flex items-center justify-around border-b border-border-primary px-2 py-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const Icon = NAV_ICONS[link.icon];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex flex-col items-center gap-0.5 px-3 py-2 text-center ${
                  isActive ? "text-accent-primary" : "text-text-tertiary"
                }`}
              >
                {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                <span className="text-[10px] font-medium leading-tight">{link.label}</span>
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
