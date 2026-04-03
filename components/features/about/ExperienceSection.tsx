import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section className="border-t border-[var(--border)] py-12 sm:py-16">
      <SectionHeading>My Experience</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="mb-4 text-base font-semibold text-[var(--foreground)]">
            Ecommerce
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted-foreground)]">
            <li>I will be sharing my work experience related to e-commerce buying and selling.

In my e-commerce experience, I was involved in selling products online through digital platforms. My responsibilities included product sourcing, pricing, marketing, and customer service</li>
          </ul>
        </article>
        <article className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="mb-4 text-base font-semibold text-[var(--foreground)]">
            Roblox BNS (Buy and Sell)
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted-foreground)]">
            <li>I developed skills in online entrepreneurship, communication, and decision-making. My main task involved buying limited items at a lower price and selling them at a higher value to make a profit.</li>
            <li>Through this experience, I improved my financial awareness, critical thinking, and communication skills. I also learned the importance of risk management, as not all trades result in profit.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
