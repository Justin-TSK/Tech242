import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "outline";
  className?: string;
  dot?: boolean;
}

const variants = {
  default: "bg-bg-tertiary/80 text-text-secondary border border-transparent",
  primary: "bg-accent-primary/10 text-accent-primary border border-accent-primary/20",
  success: "bg-success/10 text-success border border-success/20",
  warning: "bg-warning/10 text-warning border border-warning/20",
  danger: "bg-danger/10 text-danger border border-danger/20",
  outline: "bg-transparent text-text-secondary border border-border-primary",
};

export function Badge({ children, variant = "default", className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      {dot && (
        <span className={cn(
          "h-1.5 w-1.5 rounded-full",
          variant === "success" && "bg-success",
          variant === "warning" && "bg-warning",
          variant === "danger" && "bg-danger",
          variant === "primary" && "bg-accent-primary",
          variant === "default" && "bg-text-tertiary",
          variant === "outline" && "bg-text-tertiary",
        )} />
      )}
      {children}
    </span>
  );
}
