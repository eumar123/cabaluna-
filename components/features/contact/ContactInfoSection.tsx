import { SITE } from "@/lib/site";

export function ContactInfoSection() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
        <div className="flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] text-lg"
            aria-hidden
          >
            ✉️
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[var(--foreground)]">
              Email Me
            </h2>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 block text-sm text-[var(--accent)] hover:underline"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] text-lg"
              aria-hidden
            >
              📞
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[var(--foreground)]">
                Call Me
              </h2>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-1 block text-sm text-[var(--accent)] hover:underline"
              >
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] text-lg"
              aria-hidden
            >
              🐦
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-semibold text-[var(--foreground)]">
                Follow Me
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {["f", "✉", "◎", "in"].map((icon) => (
                  <span
                    key={icon}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-xs font-semibold text-[var(--foreground)]"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
