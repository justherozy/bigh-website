"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { categories, products, siteConfig } from "@/lib/site-config";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/icons";

const serviceLinks = [
  { label: "How To Order", href: "/how-to-order" },
  { label: "Shipping & Delivery", href: "/shipping-delivery" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Legal Notice", href: "/legal-notice" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms Of Sale", href: "/terms-of-sale" },
  { label: "Sitemap", href: "/sitemap" },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    const to = siteConfig.brands[0].email;
    const subject = encodeURIComponent("Newsletter signup");
    const body = encodeURIComponent(
      `Please add me to the BigH newsletter: ${email}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label
        htmlFor="newsletter-email"
        className="text-[11px] font-bold uppercase leading-snug tracking-[0.15em] text-foreground"
      >
        Subscribe To Our Newsletter
      </label>
      <div className="flex items-center gap-2 border-b border-line pb-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Insert your e-mail address *"
          className="w-full min-w-0 bg-transparent text-xs text-foreground placeholder:text-muted focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="shrink-0 text-foreground transition-transform hover:translate-x-0.5"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="text-[11px] leading-relaxed text-muted">
        By subscribing, you agree to receive newsletters and marketing
        messages from BigH by email or WhatsApp.
      </p>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          <div className="lg:col-span-1">
            <NewsletterForm />
          </div>

          <div id="contact" className="flex scroll-mt-24 flex-col gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
              Contact Us
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-muted">
              {siteConfig.whatsapp.map((entry) => (
                <li key={entry.label}>
                  <a
                    href={`https://wa.me/${entry.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    WhatsApp ({entry.label})
                  </a>
                </li>
              ))}
              {siteConfig.brands.map((brand) => (
                <li key={brand.key}>
                  <a
                    href={`mailto:${brand.email}`}
                    className="transition-colors hover:text-foreground"
                  >
                    Email {brand.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
              Shop
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-muted">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/shop/${category.slug}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
              Collections
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-muted">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/collections/${product.slug}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
              Services
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-muted">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold uppercase leading-snug tracking-[0.15em] text-foreground">
              Legal Terms And Conditions
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-muted">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
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

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            {siteConfig.brands.map((brand) => (
              <div key={brand.key} className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-muted">
                  {brand.label}
                </span>
                <div className="flex gap-3">
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.label} on Instagram`}
                    title={`${brand.label} on Instagram`}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={brand.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.label} on TikTok`}
                    title={`${brand.label} on TikTok`}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    <TikTokIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={brand.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.label} on Facebook`}
                    title={`${brand.label} on Facebook`}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 border-t border-line pt-6 text-center text-xs text-muted sm:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
