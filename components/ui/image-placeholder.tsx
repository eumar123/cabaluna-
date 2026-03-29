export function ImagePlaceholder({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-square w-full items-center justify-center rounded-md border border-dashed border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)] ${className}`}
      role="img"
      aria-label={label ?? "Image placeholder"}
    >
      <span className="text-3xl font-light" aria-hidden>
        ×
      </span>
    </div>
  );
}
