import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] disabled:pointer-events-none disabled:opacity-50";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90"
      : variant === "outline"
        ? "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]"
        : "bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]";

  return (
    <button type="button" className={`${base} ${styles} ${className}`} {...props} />
  );
}
