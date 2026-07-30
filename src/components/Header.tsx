"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import NavOverlay, { type Panel } from "@/components/NavOverlay";
import { useCollectionsStore } from "@/lib/collections-store";
import { BagIcon, HeartIcon, PersonIcon, SearchIcon } from "@/components/icons";

export default function Header() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>("root");
  const [searchOpen, setSearchOpen] = useState(false);
  const { wishlist, bag } = useCollectionsStore();

  // Only the homepage has a full-bleed video hero behind the header — let
  // the video show through until the visitor's cursor is on the bar itself.
  const isHome = pathname === "/";
  const transparent = isHome && !hovered;

  const openPanel = (p: Panel, search = false) => {
    setPanel(p);
    setSearchOpen(search);
    setOpen(true);
  };

  const iconClass = `relative flex h-9 w-9 items-center justify-center transition-colors duration-300 ${
    transparent
      ? "text-background hover:text-background/70"
      : "text-foreground hover:text-muted"
  }`;

  const badgeClass =
    "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center bg-accent px-1 text-[10px] leading-none text-ink";

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-background"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 sm:px-10">
        <div className="col-start-1 hidden items-center gap-1 sm:flex">
          <button
            type="button"
            aria-label="Search"
            onClick={() => openPanel("root", true)}
            className={`flex items-center gap-2 px-2 py-2 text-xs font-light uppercase tracking-[0.2em] transition-colors duration-300 ${
              transparent
                ? "text-background hover:text-background/70"
                : "text-foreground hover:text-muted"
            }`}
          >
            <SearchIcon className="h-5 w-5" />
            <span>Search</span>
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            onClick={() => openPanel("wishlist")}
            className={iconClass}
          >
            <HeartIcon className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className={badgeClass}>{wishlist.length}</span>
            )}
          </button>
        </div>

        <Link
          href="/"
          className="col-start-2 flex items-center justify-center gap-3 justify-self-center"
        >
          <Image
            src="/bigh-logo.jpeg"
            alt={`${siteConfig.fullName} logo`}
            width={52}
            height={52}
            className="object-cover"
            priority
          />
          <span
            className={`whitespace-nowrap font-sans text-base font-light uppercase tracking-[0.2em] transition-colors duration-300 sm:text-xl sm:tracking-[0.25em] ${
              transparent ? "text-background" : "text-foreground"
            }`}
          >
            Big H Style Hub
          </span>
        </Link>

        <div className="col-start-3 flex items-center justify-end gap-1">
          <button
            type="button"
            aria-label="Log in or register"
            onClick={() => openPanel("login")}
            className={`hidden ${iconClass} sm:flex`}
          >
            <PersonIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Shopping bag"
            onClick={() => openPanel("bag")}
            className={`hidden ${iconClass} sm:flex`}
          >
            <BagIcon className="h-5 w-5" />
            {bag.length > 0 && <span className={badgeClass}>{bag.length}</span>}
          </button>
          <button
            type="button"
            onClick={() => openPanel("root")}
            className={`flex items-center gap-2 px-2 py-2 text-xs font-light uppercase tracking-[0.2em] transition-colors duration-300 ${
              transparent
                ? "text-background hover:text-background/70"
                : "text-foreground hover:text-muted"
            }`}
          >
            <span className="flex h-3.5 w-5 flex-col justify-between">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>

      <NavOverlay
        open={open}
        onOpenChange={setOpen}
        panel={panel}
        onPanelChange={setPanel}
        searchOpen={searchOpen}
        onSearchOpenChange={setSearchOpen}
      />
    </header>
  );
}
