import { notFound } from "next/navigation";
import { BlogPostSection } from "@/components/features/blog/BlogPostSection";
import { getPostBySlug } from "@/lib/blog";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostSection post={post} />;
}
