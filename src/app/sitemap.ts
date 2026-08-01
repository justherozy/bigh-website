import type { MetadataRoute } from "next";
import { categories, journalEntries, products } from "@/lib/site-config";

const siteUrl = "https://bigh-website-gamma.vercel.app";

const staticRoutes = [
  "",
  "/checkout",
  "/how-to-order",
  "/shipping-delivery",
  "/returns",
  "/faq",
  "/legal-notice",
  "/privacy-policy",
  "/terms-of-sale",
  "/sitemap",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.5,
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/shop/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/collections/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...journalEntries.map((entry) => ({
      url: `${siteUrl}/journal/${entry.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
