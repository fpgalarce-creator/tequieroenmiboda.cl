import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
        variant === "primary"
          ? "bg-gold text-black hover:bg-gold-soft"
          : "border border-white/20 bg-white/5 text-white hover:border-gold/70",
        className
      )}
    >
      {children}
    </Link>
  );
}
