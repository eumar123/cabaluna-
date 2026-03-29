import { CategoryBrowseSection } from "@/components/features/category/CategoryBrowseSection";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return <CategoryBrowseSection segments={slug} />;
}
