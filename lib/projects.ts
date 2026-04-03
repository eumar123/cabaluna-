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
  
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
