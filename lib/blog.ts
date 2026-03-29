export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  /** ISO date for filtering */
  dateIso: string;
  /** Category path segments (no leading "category" segment) */
  categorySegments: string[];
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "design-systems-101",
    title: "Design Systems 101",
    excerpt: "How I structure tokens, type, and spacing for small sites.",
    date: "March 12, 2026",
    dateIso: "2026-03-12",
    categorySegments: ["design", "notes"],
    body: [
      "Design systems start with constraints: a small palette, two or three type sizes, and consistent spacing steps.",
      "For personal sites, I prefer utility-friendly tokens that map directly to CSS variables.",
      "The goal is predictable composition without a heavy toolchain.",
    ],
  },
  {
    slug: "next-app-router-tips",
    title: "Next.js App Router Tips",
    excerpt: "Sections, server components, and where to put client logic.",
    date: "March 18, 2026",
    dateIso: "2026-03-18",
    categorySegments: ["dev", "next"],
    body: [
      "Keep page files thin: compose feature sections instead of embedding large UI trees.",
      "Reach for client components at the edges—forms, search, theme toggles.",
      "Dynamic routes pair naturally with data modules and small helpers.",
    ],
  },
  {
    slug: "accessible-forms",
    title: "Accessible Forms Checklist",
    excerpt: "Labels, focus order, and helpful error patterns.",
    date: "February 2, 2026",
    dateIso: "2026-02-02",
    categorySegments: ["design", "a11y"],
    body: [
      "Every control needs a visible label and a clear focus ring.",
      "Validate early, but explain errors in plain language.",
      "Keep layouts stable so users are not surprised by shifting content.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByDateScope(year?: string, month?: string, day?: string) {
  return blogPosts.filter((post) => {
    const d = new Date(post.dateIso);
    if (Number.isNaN(d.getTime())) return false;
    if (year && String(d.getFullYear()) !== year) return false;
    if (month && String(d.getMonth() + 1).padStart(2, "0") !== month) return false;
    if (day && String(d.getDate()).padStart(2, "0") !== day) return false;
    return true;
  });
}
