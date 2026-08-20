import Link from "next/link";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { icon: "h-7 w-7", text: "text-base" },
    md: { icon: "h-9 w-9", text: "text-lg" },
    lg: { icon: "h-16 w-16", text: "text-2xl" },
  };
  const s = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg viewBox="0 0 512 512" role="img" aria-label="Tech242" className={`${s.icon} shrink-0 rounded-[22%]`}>
        <rect width="512" height="512" rx="108" fill="#7c6dab" />
        <rect x="104" y="100" width="304" height="56" rx="12" fill="#ffffff" />
        <rect x="206" y="192" width="100" height="216" rx="12" fill="#ffffff" />
      </svg>
      <span className={`${s.text} font-bold tracking-tight text-text-primary`}>
        Tech242
      </span>
    </Link>
  );
}
