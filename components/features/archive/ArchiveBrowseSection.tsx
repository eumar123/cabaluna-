import Link from "next/link";
import { getPostsByDateScope } from "@/lib/blog";

type Props = {
  /** Optional segments under `/archive` — e.g. ['2026'], ['2026','03'], ['2026','03','12']. */
  segments?: string[];
};

export function ArchiveBrowseSection({ segments }: Props) {
  const year = segments?.[0];
  const month = segments?.[1];
  const day = segments?.[2];
  const scoped = getPostsByDateScope(year, month, day);
  const label = segments?.length
    ? segments.join(" / ")
    : "All dates (root)";

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-[var(--foreground)]">Archive</h1>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Active filter:{" "}
          <span className="font-mono text-[var(--foreground)]">{label}</span>
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
          This route uses an optional catch-all segment so <code className="font-mono">/archive</code>{" "}
          lists everything, while deeper paths like{" "}
          <code className="font-mono">/archive/2026/03</code> scope posts to that year and month.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-[var(--foreground)]">
          Matching posts
        </h2>
        {scoped.length === 0 ? (
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            No posts in this date scope.
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            {scoped.map((post) => (
              <li key={post.slug} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
                <p className="text-xs text-[var(--muted-foreground)]">{post.date}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-1 inline-block font-medium text-[var(--accent)] hover:underline"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <Link href="/archive" className="text-[var(--accent)] hover:underline">
            Clear to root archive
          </Link>
          <Link href="/archive/2026" className="text-[var(--accent)] hover:underline">
            Year 2026
          </Link>
          <Link href="/archive/2026/03" className="text-[var(--accent)] hover:underline">
            March 2026
          </Link>
        </div>
      </div>
    </section>
  );
}
