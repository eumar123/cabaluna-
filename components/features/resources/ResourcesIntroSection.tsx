import { SectionHeading } from "@/components/ui/section-heading";

export function ResourcesIntroSection() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--card)] py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionHeading>Quick resources</SectionHeading>
        <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
          A small, plain page with the same section style as the rest of the site—short intro
          and a few hand-picked links.
        </p>
      </div>
    </section>
  );
}
