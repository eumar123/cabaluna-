export function ContactHeroSection() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--card)] py-12 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:gap-12">
        <div
          className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--muted)] text-5xl"
          aria-hidden
        >
          ✉️
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Contact Me
          </h1>
          <p className="text-lg text-[var(--muted-foreground)]">
            Got a Question? Let&apos;s work together!
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            Reach out using the details below or send a message with the form.
          </p>
        </div>
      </div>
    </section>
  );
}
