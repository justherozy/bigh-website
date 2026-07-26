import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/icons";

const socialIcons = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  facebook: FacebookIcon,
};

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-background px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/bigh-logo.jpeg"
            alt={`${siteConfig.fullName} logo`}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-serif text-foreground">{siteConfig.fullName}</p>
            <p className="text-xs text-foreground/50">{siteConfig.tagline}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm">
          {siteConfig.emails.map((item) => (
            <a
              key={item.address}
              href={`mailto:${item.address}`}
              className="text-foreground/70 transition-colors hover:text-gold-deep"
            >
              <span className="text-foreground/40">{item.label}: </span>
              {item.address}
            </a>
          ))}
        </div>

        <div className="flex gap-5">
          {siteConfig.social.map((item) => {
            const Icon = socialIcons[item.platform];
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className="text-foreground/60 transition-colors hover:text-gold-deep"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-ink/10 pt-6 text-center text-xs text-foreground/40 sm:text-left">
        &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights
        reserved.
      </p>
    </footer>
  );
}
