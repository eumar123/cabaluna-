import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogPostSection({ post }: { post: BlogPost }) {
  return (
    <article className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm text-[var(--muted-foreground)]">{post.date}</p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--muted-foreground)]">{post.excerpt}</p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--foreground)]">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 border-t border-[var(--border)] pt-8 text-sm">
          <Link href="/blog" className="text-[var(--accent)] hover:underline">
            ← All posts
          </Link>
          <Link
            href={`/category/${post.categorySegments.join("/")}`}
            className="text-[var(--accent)] hover:underline"
          >
            Category: {post.categorySegments.join(" / ")}
          </Link>
          <Link
            href={`/archive/${post.dateIso.replaceAll("-", "/")}`}
            className="text-[var(--accent)] hover:underline"
          >
            Same-day archive
          </Link>
        </div>
      </div>
    </article>
  );
}
