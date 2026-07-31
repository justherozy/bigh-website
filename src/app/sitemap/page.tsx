import type { Metadata } from "next";
import Link from "next/link";
import { categories, products, siteConfig } from "@/lib/site-config";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: `Sitemap | ${siteConfig.fullName}`,
  description: "Every page on the BigH website, in one place.",
};

const sections: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Shop",
    links: categories.map((c) => ({ label: c.label, href: `/shop/${c.slug}` })),
  },
  {
    heading: "Collections",
    links: products.map((p) => ({ label: p.name, href: `/collections/${p.slug}` })),
  },
  {
    heading: "Services",
    links: [
      { label: "How To Order", href: "/how-to-order" },
      { label: "Shipping & Delivery", href: "/shipping-delivery" },
      { label: "Returns & Exchanges", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Legal Notice", href: "/legal-notice" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms Of Sale", href: "/terms-of-sale" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <InfoPage kicker="Legal" title="Sitemap">
      <Link href="/" className="text-foreground underline underline-offset-4 w-fit">
        Home
      </Link>
      <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {sections.map((section) => (
          <div key={section.heading} className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground">
              {section.heading}
            </p>
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </InfoPage>
  );
}
