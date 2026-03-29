import Link from "next/link";
import { blogPosts } from "@/lib/blog";

type Props = {
  /** Dynamic path segments after `/category/` (excludes the static `category` root). */
  segments: string[];
};

export function CategoryBrowseSection({ segments }: Props) {
  const path = segments.join("/");
  const matching = blogPosts.filter(
    (post) => post.categorySegments.join("/") === path,
  );

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-[var(--foreground)]">Category</h1>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Path segments from this route:{" "}
          <span className="font-mono text-[var(--foreground)]">{path || "∅"}</span>
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
          Page logic only consumes the catch-all <code className="font-mono">slug</code>{" "}
          array. The static <code className="font-mono">category</code> folder is not part
          of that data—URLs are normalized to the nested segments you see above.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-[var(--foreground)]">
          Posts in this category
        </h2>
        {matching.length === 0 ? (
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            No posts for this combination yet.
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            {matching.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
