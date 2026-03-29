import { CategoryBrowseSection } from "@/components/features/category/CategoryBrowseSection";

/** `/category` — no catch-all segments; nested paths use `[...slug]`. */
export default function CategoryIndexPage() {
  return <CategoryBrowseSection segments={[]} />;
}
