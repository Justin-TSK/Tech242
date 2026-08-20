import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-primary bg-bg-card p-6",
        hover && "cursor-pointer hover:border-accent-primary/30 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
