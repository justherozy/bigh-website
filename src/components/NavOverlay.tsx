"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { categories, products, siteConfig, type Product } from "@/lib/site-config";
import { toggleBag, toggleWishlist, useCollectionsStore } from "@/lib/collections-store";
import {
  BagIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  CloseIcon as RemoveIcon,
  FacebookIcon,
  GlobeIcon,
  HeartIcon,
  InstagramIcon,
  PersonIcon,
  SearchIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/icons";

export type Panel =
  | "root"
  | "shop"
  | "collections"
  | "follow"
  | "wishlist"
  | "bag"
  | "login";

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
  { label: "Contact Us", href: "#contact", group: "Page" },
];

const panelTitle: Record<Exclude<Panel, "root">, string> = {
  shop: "Shop",
  collections: "Collections",
  follow: "Follow Us",
  wishlist: "Wishlist",
  bag: "Shopping Bag",
  login: "Account",
};

export default function NavOverlay({
  open,
  onOpenChange,
  panel,
  onPanelChange,
  searchOpen,
  onSearchOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  panel: Panel;
  onPanelChange: (panel: Panel) => void;
  searchOpen: boolean;
  onSearchOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const { wishlist, bag } = useCollectionsStore();

  const close = () => {
    onOpenChange(false);
    onPanelChange("root");
    onSearchOpenChange(false);
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

  const wishlistItems = products.filter((p) => wishlist.includes(p.slug));
  const bagItems = products.filter((p) => bag.includes(p.slug));

  const bagMessage = (items: Product[]) =>
    `Hi BigH, I'm interested in: ${items.map((i) => i.name).join(", ")}.`;

  return (
    <AnimatePresence>
      {open && (
        <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              aria-hidden
              className="fixed inset-0 z-[199] bg-ink/50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="fixed right-0 top-0 z-[200] flex h-dvh w-[88%] max-w-xl flex-col overflow-y-auto bg-background text-foreground shadow-2xl sm:w-1/2"
            >
              {/* Close / Search bar */}
              <div className="flex items-center justify-between border-b border-line px-6 py-5 sm:px-8">
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
                  onClick={() => onSearchOpenChange(!searchOpen)}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <SearchIcon className="h-4 w-4" />
                  Search
                </button>
              </div>

              {searchOpen && (
                <div className="border-b border-line px-6 py-4 sm:px-8">
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Women, Shoes, Evening Elegance…"
                    className="w-full bg-transparent text-base text-foreground placeholder:text-muted focus:outline-none"
                  />
                </div>
              )}

              <div className="flex w-full flex-1 flex-col px-6 sm:px-8">
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
                          className="flex items-center justify-between border-b border-line py-4 text-base text-foreground"
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
                          <RootRow label="Shop" onClick={() => onPanelChange("shop")} />
                          <RootRow
                            label="Collections"
                            onClick={() => onPanelChange("collections")}
                          />
                          <Link
                            href="/#edit"
                            onClick={close}
                            className="border-b border-line py-5 text-base text-foreground"
                          >
                            The Edit
                          </Link>
                          <RootRow
                            label="Follow Us"
                            onClick={() => onPanelChange("follow")}
                          />
                        </nav>

                        <div className="mt-auto flex flex-col gap-1 py-8">
                          <UtilityRow
                            icon={<PersonIcon className="h-5 w-5" />}
                            label="Log In or Register"
                            onClick={() => onPanelChange("login")}
                          />
                          <UtilityRow
                            icon={<BagIcon className="h-5 w-5" />}
                            label={`Shopping Bag${bag.length ? ` (${bag.length})` : ""}`}
                            onClick={() => onPanelChange("bag")}
                          />
                          <UtilityRow
                            icon={<HeartIcon className="h-5 w-5" />}
                            label={`Wishlist${wishlist.length ? ` (${wishlist.length})` : ""}`}
                            onClick={() => onPanelChange("wishlist")}
                          />
                          <UtilityLink
                            icon={<WhatsAppIcon className="h-5 w-5" />}
                            label="Contact Us"
                            href="#contact"
                            onClick={close}
                          />
                          <UtilityLink
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
                          onClick={() => onPanelChange("root")}
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
                                className="border-b border-line py-5 text-base text-foreground"
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
                                className="border-b border-line py-5 text-base text-foreground"
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
                                <span className="text-base text-foreground">
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

                        {panel === "wishlist" && (
                          <ItemListPanel
                            items={wishlistItems}
                            emptyLabel="Nothing saved yet. Tap the heart on any collection to save it here."
                            onRemove={toggleWishlist}
                            onNavigate={close}
                          />
                        )}

                        {panel === "bag" && (
                          <>
                            <ItemListPanel
                              items={bagItems}
                              emptyLabel="Your bag is empty. Add collections you'd like to enquire about."
                              onRemove={toggleBag}
                              onNavigate={close}
                            />
                            {bagItems.length > 0 && (
                              <a
                                href={`https://wa.me/${siteConfig.whatsapp[0].number}?text=${encodeURIComponent(
                                  bagMessage(bagItems)
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={close}
                                className="mt-6 flex items-center justify-center gap-2 bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
                              >
                                <WhatsAppIcon className="h-4 w-4" />
                                Enquire via WhatsApp
                              </a>
                            )}
                          </>
                        )}

                        {panel === "login" && (
                          <div className="flex flex-col gap-4 py-6">
                            <p className="text-base text-foreground">
                              Accounts are coming soon.
                            </p>
                            <p className="text-sm text-muted">
                              For now, message us directly on WhatsApp and
                              we&apos;ll take care of your order, fitting, or
                              question personally.
                            </p>
                            <a
                              href={`https://wa.me/${siteConfig.whatsapp[0].number}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={close}
                              className="mt-2 flex items-center justify-center gap-2 bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
                            >
                              <WhatsAppIcon className="h-4 w-4" />
                              Message Us
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
  );
}

function RootRow({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-between border-b border-line py-5 text-left text-base text-foreground"
    >
      {label}
      <ChevronRightIcon className="h-4 w-4 text-muted" />
    </button>
  );
}

function UtilityRow({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 py-3 text-sm text-foreground"
    >
      {icon}
      {label}
    </button>
  );
}

function UtilityLink({
  icon,
  label,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 py-3 text-sm text-foreground"
    >
      {icon}
      {label}
    </a>
  );
}

function ItemListPanel({
  items,
  emptyLabel,
  onRemove,
  onNavigate,
}: {
  items: Product[];
  emptyLabel: string;
  onRemove: (slug: string) => void;
  onNavigate: () => void;
}) {
  if (items.length === 0) {
    return <p className="py-6 text-sm text-muted">{emptyLabel}</p>;
  }

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div
          key={item.slug}
          className="flex items-center gap-4 border-b border-line py-4"
        >
          <Link
            href={`/collections/${item.slug}`}
            onClick={onNavigate}
            className="relative h-16 w-14 shrink-0 overflow-hidden bg-surface-muted"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </Link>
          <Link
            href={`/collections/${item.slug}`}
            onClick={onNavigate}
            className="flex-1 text-sm text-foreground"
          >
            {item.name}
            <span className="mt-0.5 block text-xs uppercase tracking-widest text-muted">
              {item.category}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => onRemove(item.slug)}
            aria-label={`Remove ${item.name}`}
            className="text-foreground/50 transition-colors hover:text-foreground"
          >
            <RemoveIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
