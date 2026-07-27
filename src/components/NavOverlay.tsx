"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { categories, products, siteConfig } from "@/lib/site-config";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  SearchIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/icons";

type Panel = "root" | "shop" | "collections" | "follow";

const searchIndex = [
  { label: "Home", href: "/", group: "Page" },
  ...categories.map((c) => ({
    label: c.label,
    href: `/shop/${c.slug}`,
    group: "Shop",
  })),
  ...products.map((p) => ({
    label: p.name,
    href: `/collections/${p.slug}`,
    group: "Collection",
  })),
  { label: "The Edit", href: "/#edit", group: "Page" },
  { label: "Contact", href: "#contact", group: "Page" },
];

export default function NavOverlay() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>("root");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const close = () => {
    setOpen(false);
    setPanel("root");
    setSearchOpen(false);
    setQuery("");
  };

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

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return searchIndex.filter((i) => i.label.toLowerCase().includes(q));
  }, [query]);

  const panelTitle: Record<Exclude<Panel, "root">, string> = {
    shop: "Shop",
    collections: "Collections",
    follow: "Follow Us",
  };

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
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[200] flex h-dvh w-screen flex-col overflow-y-auto bg-background text-foreground"
          >
            {/* Close / Search bar */}
            <div className="flex items-center justify-between border-b border-line px-6 py-5 sm:px-10">
              <button
                type="button"
                onClick={close}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <CloseIcon className="h-4 w-4" />
                Close
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <SearchIcon className="h-4 w-4" />
                Search
              </button>
            </div>

            {searchOpen && (
              <div className="border-b border-line px-6 py-4 sm:px-10">
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Women, Shoes, Evening Elegance…"
                  className="w-full bg-transparent text-lg text-foreground placeholder:text-muted focus:outline-none"
                />
              </div>
            )}

            <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 sm:px-10">
              {query.trim() ? (
                <div className="flex flex-col py-2">
                  {results.length === 0 ? (
                    <p className="py-6 text-sm text-muted">
                      No matches for &ldquo;{query}&rdquo;.
                    </p>
                  ) : (
                    results.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        onClick={close}
                        className="flex items-center justify-between border-b border-line py-4 text-lg text-foreground"
                      >
                        {r.label}
                        <span className="text-xs uppercase tracking-widest text-muted">
                          {r.group}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  {panel === "root" ? (
                    <motion.div
                      key="root"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-1 flex-col"
                    >
                      <nav className="flex flex-col py-2">
                        <RootRow
                          label="Shop"
                          onClick={() => setPanel("shop")}
                        />
                        <RootRow
                          label="Collections"
                          onClick={() => setPanel("collections")}
                        />
                        <Link
                          href="/#edit"
                          onClick={close}
                          className="border-b border-line py-5 text-lg text-foreground"
                        >
                          The Edit
                        </Link>
                        <RootRow
                          label="Follow Us"
                          onClick={() => setPanel("follow")}
                        />
                      </nav>

                      <div className="mt-auto flex flex-col gap-1 py-8">
                        <UtilityRow
                          icon={<WhatsAppIcon className="h-5 w-5" />}
                          label="WhatsApp Us"
                          href={`https://wa.me/${siteConfig.whatsapp[0].number}`}
                          external
                          onClick={close}
                        />
                        <UtilityRow
                          icon={<MailIcon className="h-5 w-5" />}
                          label="Email Us"
                          href="#contact"
                          onClick={close}
                        />
                        <UtilityRow
                          icon={<GlobeIcon className="h-5 w-5" />}
                          label="Nigeria · United Kingdom"
                          href="#contact"
                          onClick={close}
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={panel}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col"
                    >
                      <button
                        type="button"
                        onClick={() => setPanel("root")}
                        className="flex items-center gap-2 border-b border-line py-5 text-sm uppercase tracking-[0.2em] text-muted"
                      >
                        <ChevronLeftIcon className="h-4 w-4" />
                        {panelTitle[panel]}
                      </button>

                      {panel === "shop" && (
                        <div className="flex flex-col">
                          {categories.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/shop/${c.slug}`}
                              onClick={close}
                              className="border-b border-line py-5 text-lg text-foreground"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}

                      {panel === "collections" && (
                        <div className="flex flex-col">
                          {products.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/collections/${p.slug}`}
                              onClick={close}
                              className="border-b border-line py-5 text-lg text-foreground"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      )}

                      {panel === "follow" && (
                        <div className="flex flex-col">
                          {siteConfig.brands.map((brand) => (
                            <div
                              key={brand.key}
                              className="flex items-center justify-between border-b border-line py-5"
                            >
                              <span className="text-lg text-foreground">
                                {brand.label}
                              </span>
                              <div className="flex gap-4 text-foreground/70">
                                <a
                                  href={brand.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${brand.label} on Instagram`}
                                  onClick={close}
                                  className="transition-colors hover:text-foreground"
                                >
                                  <InstagramIcon className="h-5 w-5" />
                                </a>
                                <a
                                  href={brand.tiktok}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${brand.label} on TikTok`}
                                  onClick={close}
                                  className="transition-colors hover:text-foreground"
                                >
                                  <TikTokIcon className="h-5 w-5" />
                                </a>
                                <a
                                  href={brand.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${brand.label} on Facebook`}
                                  onClick={close}
                                  className="transition-colors hover:text-foreground"
                                >
                                  <FacebookIcon className="h-5 w-5" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function RootRow({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-between border-b border-line py-5 text-left text-lg text-foreground"
    >
      {label}
      <ChevronRightIcon className="h-4 w-4 text-muted" />
    </button>
  );
}

function UtilityRow({
  icon,
  label,
  href,
  external,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 py-3 text-sm text-foreground"
    >
      {icon}
      {label}
    </a>
  );
}
