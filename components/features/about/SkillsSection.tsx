import { SectionHeading } from "@/components/ui/section-heading";

const skills = ["HTML", "CSS", "JS", "PHP"] as const;

export function SkillsSection() {
  return (
    <section className="border-t border-[var(--border)] py-12 sm:py-16">
      <SectionHeading>Skills &amp; tools</SectionHeading>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
