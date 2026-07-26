import Image from "next/image";
import Link from "next/link";
import { siteConfig, categories, products } from "@/lib/site-config";
import NavDropdown from "@/components/NavDropdown";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/bigh-logo.jpeg"
            alt={`${siteConfig.fullName} logo`}
            width={36}
            height={36}
            className="object-cover"
            priority
          />
          <span className="text-sm uppercase tracking-[0.3em] text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-xs uppercase tracking-[0.2em] text-foreground/80 sm:flex">
          <Link href="/" className="transition-colors hover:text-muted">
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
          <Link href="/#edit" className="transition-colors hover:text-muted">
            The Edit
          </Link>
          <a href="#contact" className="transition-colors hover:text-muted">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden border border-foreground px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background sm:block"
          >
            Contact Us
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
