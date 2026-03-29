import { SectionHeading } from "@/components/ui/section-heading";

export function AboutMeSection() {
  return (
    <section className="py-12 sm:py-16">
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-6 text-center text-[var(--muted-foreground)]">
        A little bit about myself…..
      </p>
      <div className="mx-auto max-w-3xl space-y-3 text-sm leading-relaxed text-[var(--foreground)]">
        <p>
          I design and build interfaces that stay readable in both light and dark
          environments, with layouts that mirror simple wireframes: clear
          sections, predictable spacing, and straightforward navigation.
        </p>
        <p>
          My process favors small reusable pieces—navigation, section headings,
          cards—so each page stays easy to scan and maintain.
        </p>
        <p>
          When I prototype, I start with structure first: hero, supporting
          content, then calls to action. Visual polish comes after the skeleton
          feels right.
        </p>
        <p>
          Outside of UI work, I like refining typography, tightening copy, and
          making sure interactive elements give obvious feedback.
        </p>
      </div>
    </section>
  );
}
