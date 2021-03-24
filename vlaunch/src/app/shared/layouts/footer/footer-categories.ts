import { FooterCategory } from "./footer-category/footer-category";

export const FOOTER_INFO_CATEGORIES: FooterCategory[] = [
  {
    title: "company",
    categories: [
      { path: "/styletools", name: "contact us" },
      { path: "/", name: "products" },
      { path: "/", name: "brand" },
      { path: "/sitemap", name: "sitemap" },
      { path: "/", name: "swatches" },
      { path: "/", name: "media" },
    ],
  },
  {
    title: "support",
    categories: [
      { path: "/", name: "trade professional" },
      { path: "/", name: "locate" },
      { path: "/", name: "email" },
      { path: "/", name: "FAQ" },
      { path: "/", name: "terms & conditions" },
      { path: "/", name: "pricing & shipping rates" },
      { path: "/", name: "privacy policy" },
      { path: "/", name: "returns policy" },
      { path: "/", name: "product information" },
      { path: "/", name: "accessibility" },
    ],
  },
];

export const FOOTER_FEATURE_CATEGORIES: FooterCategory[] = [
  {
    title: "styletools",
    categories: [
      { path: "/", name: "styleplan" },
      { path: "/", name: "floorplan" },
      { path: "/", name: "wallplan" },
      { path: "/", name: "projectplan" },
      { path: "/", name: "overview" },
    ],
  },
  {
    title: "media",
    categories: [
      { path: "/", name: "film" },
      { path: "/", name: "magazine" },
      { path: "/", name: "social" },
    ],
  },
];