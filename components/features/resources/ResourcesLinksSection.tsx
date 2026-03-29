import Link from "next/link";

const items = [
  { href: "/blog", label: "Blog", hint: "Posts and write-ups" },
  { href: "/project", label: "Projects", hint: "Grid and featured work" },
  { href: "/contact", label: "Contact", hint: "Email, phone, and form" },
  { href: "/archive/2026", label: "2026 archive", hint: "Posts from this year" },
] as const;

export function ResourcesLinksSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-6 text-lg font-semibold text-[var(--foreground)]">
          Internal links
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition hover:border-[var(--accent)]"
              >
                <span className="font-medium text-[var(--foreground)]">{item.label}</span>
                <span className="mt-1 block text-xs text-[var(--muted-foreground)]">
                  {item.hint}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
