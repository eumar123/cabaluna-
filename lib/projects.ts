export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  descriptions: string[];
  keyFeatures: string[];
  /** Public path under `/public`, e.g. `/images/photo.png` */
  imageSrc?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "shop-hub",
    title: "SHOP HUB",
    imageSrc: "/images/shop-hub-cpu.png",
    imageAlt:
      "Close-up of an AMD Ryzen 7 3700X processor installed in an AM4 motherboard socket.",
    shortDescription: "Discover Amazing Products. Browse our curated collection of high-quality products at unbeatable prices.",
    descriptions: [
      "This website, ShopHub, is an online shopping platform that lets users browse and purchase products—mainly tech items like computer parts. It features product listings with images, prices, ratings, and stock availability, along with filtering options (categories, price range, ratings) and sorting tools to help users easily find what they need.",
    ],
    keyFeatures: [
      "Product Catalog Display Shows a grid of products with images, names, prices, ratings, and stock status.",
      "Allows users to quickly find products using a search bar.",
      "Product Details Preview Each item includes ratings, availability, and discounted pricing",
    ],
  },
  {
    slug: "shop-hub-showcase",
    title: "SHOP HUB",
    imageSrc: "/images/shop-hub-cpu.png",
    imageAlt:
      "Close-up of an AMD Ryzen 7 3700X processor installed in an AM4 motherboard socket.",
    shortDescription: "Discover Amazing Products. Browse our curated collection of high-quality products at unbeatable prices.",
    descriptions: [
      "Composable sections for hero, features, and testimonials.",
      "Designed to match hand-drawn wireframe layouts.",
      "Easy to extend with new routes and content.",
    ],
    keyFeatures: [
      "Grid-based project showcase.",
      "Featured project detail panel.",
      "Clear typography and spacing scale.",
    ],
  },
  {
    slug: "shop-hub-showcase",
    title: "SHOP HUB",
    imageSrc: "/images/shop-hub-cpu.png",
    imageAlt:
      "Close-up of an AMD Ryzen 7 3700X processor installed in an AM4 motherboard socket.",
    shortDescription: "Discover Amazing Products. Browse our curated collection of high-quality products at unbeatable prices.",
    descriptions: [
      "Composable sections for hero, features, and testimonials.",
      "Designed to match hand-drawn wireframe layouts.",
      "Easy to extend with new routes and content.",
    ],
    keyFeatures: [
      "Grid-based project showcase.",
      "Featured project detail panel.",
      "Clear typography and spacing scale.",
    ],
  },
  {
    slug: "shop-hub-showcase",
    title: "SHOP HUB",
    imageSrc: "/images/shop-hub-cpu.png",
    imageAlt:
      "Close-up of an AMD Ryzen 7 3700X processor installed in an AM4 motherboard socket.",
    shortDescription: "Discover Amazing Products. Browse our curated collection of high-quality products at unbeatable prices.",
    descriptions: [
      "Composable sections for hero, features, and testimonials.",
      "Designed to match hand-drawn wireframe layouts.",
      "Easy to extend with new routes and content.",
    ],
    keyFeatures: [
      "Grid-based project showcase.",
      "Featured project detail panel.",
      "Clear typography and spacing scale.",
    ],
  },
  {
    slug: "commerce-ui",
    title: "Commerce UI",
    shortDescription: "Product listing UI with cards and filters.",
    descriptions: [
      "Card grid inspired by portfolio wireframes.",
      "Emphasis on imagery placeholders and titles.",
      "Scales down cleanly on small screens.",
    ],
    keyFeatures: [
      "Responsive 3-column grid on desktop.",
      "Stacked layout on narrow viewports.",
      "Consistent section headings with rules.",
    ],
  },
  {
    slug: "analytics-lite",
    title: "Analytics Lite",
    shortDescription: "Lightweight charts and KPI summaries.",
    descriptions: [
      "Pairs well with dashboard-style portfolios.",
      "Uses neutral surfaces and subtle borders.",
      "Keeps focus on readability.",
    ],
    keyFeatures: [
      "Summary cards for key metrics.",
      "Bullet lists for insights.",
      "Theme-aware colors.",
    ],
  },
  {
    slug: "content-blocks",
    title: "Content Blocks",
    shortDescription: "Composable content sections for long-form pages.",
    descriptions: [
      "Split layouts into named blocks for easier maintenance.",
      "Works with both server and client islands.",
      "Encourages consistent spacing between sections.",
    ],
    keyFeatures: [
      "Reusable section headings with rules.",
      "Responsive stacks and grids.",
      "Theme tokens for surfaces and borders.",
    ],
  },
  {
    slug: "photo-grid",
    title: "Photo Grid",
    shortDescription: "Image galleries with lazy-friendly placeholders.",
    descriptions: [
      "Square tiles that align to a simple grid rhythm.",
      "Uses neutral placeholders until assets load.",
      "Scales from two columns on phones to three on desktop.",
    ],
    keyFeatures: [
      "Accessible alt text patterns.",
      "Hover states that respect reduced motion.",
      "Dark mode friendly borders.",
    ],
  },
  {
    slug: "notes-app",
    title: "Notes App",
    shortDescription: "Quick capture UI with a calm, minimal chrome.",
    descriptions: [
      "Focused writing area with subtle toolbar actions.",
      "Keyboard-friendly navigation between notes.",
      "Exports clean text for sharing.",
    ],
    keyFeatures: [
      "Local-first interactions with optimistic UI.",
      "Clear empty states and loading feedback.",
      "Compact list + detail split view.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
