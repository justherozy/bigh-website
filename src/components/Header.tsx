import Image from "next/image";
import Link from "next/link";
import { siteConfig, categories, products } from "@/lib/site-config";
import NavDropdown from "@/components/NavDropdown";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-ink/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/bigh-logo.jpeg"
            alt={`${siteConfig.fullName} logo`}
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-serif text-lg tracking-wide text-gold-deep">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-widest text-foreground/70 sm:flex">
          <Link href="/" className="transition-colors hover:text-gold-deep">
            Home
          </Link>
          <NavDropdown
            label="Shop"
            items={categories.map((c) => ({
              label: c.label,
              href: `/shop/${c.slug}`,
            }))}
            feature={{
              image: categories.find((c) => c.slug === "shoes")!.image,
              title: "The Footwear Edit",
              subtitle: "Shop Shoes",
              href: "/shop/shoes",
            }}
          />
          <NavDropdown
            label="Collections"
            items={products.map((p) => ({
              label: p.name,
              href: `/collections/${p.slug}`,
            }))}
            feature={{
              image: products.find((p) => p.slug === "evening-elegance")!
                .image,
              title: "Evening Elegance",
              subtitle: "View Collection",
              href: "/collections/evening-elegance",
            }}
          />
          <Link href="/#edit" className="transition-colors hover:text-gold-deep">
            The Edit
          </Link>
          <a href="#contact" className="transition-colors hover:text-gold-deep">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full border border-gold px-4 py-1.5 text-xs uppercase tracking-widest text-gold-deep transition-colors hover:bg-gold hover:text-background sm:block"
          >
            Contact Us
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
