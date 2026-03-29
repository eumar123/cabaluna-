import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section className="border-t border-[var(--border)] py-12 sm:py-16">
      <SectionHeading>My Experience</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="mb-4 text-base font-semibold text-[var(--foreground)]">
            Company Name
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted-foreground)]">
            <li>Collaborated on marketing pages and internal tools.</li>
            <li>Partnered with design to ship accessible components.</li>
          </ul>
        </article>
        <article className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="mb-4 text-base font-semibold text-[var(--foreground)]">
            Job Title
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted-foreground)]">
            <li>Owned UI implementation for portfolio-style sites.</li>
            <li>Improved performance and consistency across routes.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
