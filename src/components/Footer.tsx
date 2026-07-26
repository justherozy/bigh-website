import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TikTokIcon,
} from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/bigh-logo.jpeg"
            alt={`${siteConfig.fullName} logo`}
            width={32}
            height={32}
            className="object-cover"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-xs text-muted">{siteConfig.tagline}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
          {siteConfig.brands.map((brand) => (
            <div key={brand.key} className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {brand.label}
              </p>
              <div className="flex gap-4">
                <a
                  href={`mailto:${brand.email}`}
                  aria-label={`Email ${brand.label}`}
                  title={brand.email}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  <MailIcon className="h-5 w-5" />
                </a>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${brand.label} on Instagram`}
                  title={`${brand.label} on Instagram`}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={brand.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${brand.label} on TikTok`}
                  title={`${brand.label} on TikTok`}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a
                  href={brand.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${brand.label} on Facebook`}
                  title={`${brand.label} on Facebook`}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 text-center text-xs text-muted sm:text-left">
        &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights
        reserved.
      </p>
    </footer>
  );
}
