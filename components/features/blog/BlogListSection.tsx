import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export function BlogListSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-10 text-3xl font-semibold text-[var(--foreground)]">
          Blog
        </h1>
        <ul className="space-y-6">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-xs text-[var(--muted-foreground)]">{post.date}</p>
                <h2 className="mt-2 text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[var(--foreground)] hover:text-[var(--accent)]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/category/${post.categorySegments.join("/")}`}
                  className="mt-3 inline-block text-sm text-[var(--accent)] hover:underline"
                >
                  View category →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
