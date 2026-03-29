import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--muted)]/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Eumar. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/resources"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            Resources
          </Link>
          <Link
            href="/category/design/notes"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            Category demo
          </Link>
          <Link
            href="/archive/2026/03"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            Archive demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
