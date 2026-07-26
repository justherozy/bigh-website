import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/bigh-logo.jpeg"
            alt={`${siteConfig.fullName} logo`}
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-serif text-lg tracking-wide text-gold-soft">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden gap-8 text-sm uppercase tracking-widest text-foreground/80 sm:flex">
          <a href="#home" className="transition-colors hover:text-gold">
            Home
          </a>
          <a href="#products" className="transition-colors hover:text-gold">
            Collections
          </a>
          <a href="#contact" className="transition-colors hover:text-gold">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-gold px-4 py-1.5 text-xs uppercase tracking-widest text-gold-soft transition-colors hover:bg-gold hover:text-background"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
