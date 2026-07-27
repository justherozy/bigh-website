import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import NavOverlay from "@/components/NavOverlay";
import { WhatsAppIcon } from "@/components/icons";

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

        <div className="flex items-center gap-4 sm:gap-8">
          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-muted"
          >
            Contact
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp[0].number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="flex h-9 w-9 items-center justify-center text-foreground transition-colors hover:text-muted"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <NavOverlay />
        </div>
      </div>
    </header>
  );
}
