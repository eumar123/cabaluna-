export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--border)]" aria-hidden />
      <h2 className="text-center text-lg font-semibold tracking-tight text-[var(--foreground)]">
        {children}
      </h2>
      <span className="h-px flex-1 bg-[var(--border)]" aria-hidden />
    </div>
  );
}
