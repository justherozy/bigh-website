"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { categories, products, siteConfig } from "@/lib/site-config";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/icons";

export default function NavOverlay() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Open menu"
        className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-muted"
      >
        <span className="flex h-3 w-4 flex-col justify-between">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
        Menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[200] flex h-dvh w-screen flex-col overflow-y-auto bg-ink"
          >
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
              <Link href="/" onClick={close} className="flex items-center gap-3">
                <Image
                  src="/bigh-logo.jpeg"
                  alt={`${siteConfig.fullName} logo`}
                  width={36}
                  height={36}
                  className="object-cover"
                />
                <span className="text-sm uppercase tracking-[0.3em] text-background">
                  {siteConfig.name}
                </span>
              </Link>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center text-2xl text-background/70 transition-colors hover:text-background"
              >
                &#10005;
              </button>
            </div>

            <nav className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-14 px-6 py-10 sm:px-10 sm:py-16">
              <div>
                <Link
                  href="/"
                  onClick={close}
                  className="text-4xl text-background transition-colors hover:text-background/70 sm:text-5xl"
                >
                  Home
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    Shop
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/shop/${c.slug}`}
                        onClick={close}
                        className="text-3xl text-background transition-colors hover:text-background/70 sm:text-4xl"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    Collections
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/collections/${p.slug}`}
                        onClick={close}
                        className="text-3xl text-background transition-colors hover:text-background/70 sm:text-4xl"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm uppercase tracking-[0.2em] text-background/70">
                <Link
                  href="/#edit"
                  onClick={close}
                  className="transition-colors hover:text-background"
                >
                  The Edit
                </Link>
                <a
                  href="#contact"
                  onClick={close}
                  className="transition-colors hover:text-background"
                >
                  Contact
                </a>
              </div>
            </nav>

            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-t border-background/15 px-6 py-6 text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <p className="text-xs uppercase tracking-[0.2em]">
                {siteConfig.brands.map((b) => b.email).join("  ·  ")}
              </p>
              <div className="flex gap-5">
                {siteConfig.brands.map((brand) => (
                  <span key={brand.key} className="flex gap-3">
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.label} on Instagram`}
                      className="transition-colors hover:text-background"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={brand.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.label} on TikTok`}
                      className="transition-colors hover:text-background"
                    >
                      <TikTokIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={brand.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.label} on Facebook`}
                      className="transition-colors hover:text-background"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
