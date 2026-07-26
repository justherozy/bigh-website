"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NavDropdown({
  label,
  items,
  feature,
}: {
  label: string;
  items: { label: string; href: string; hint?: string }[];
  feature?: {
    image: string;
    title: string;
    subtitle: string;
    href: string;
  };
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 transition-colors hover:text-muted"
      >
        {label}
        <svg
          viewBox="0 0 10 6"
          className={`h-2 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 mt-0 flex w-[24rem] -translate-x-1/2 border border-line bg-surface normal-case tracking-normal"
          >
            <div className="flex flex-1 flex-col py-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-sm text-foreground transition-colors hover:bg-surface-muted"
                >
                  {item.label}
                  {item.hint && (
                    <span className="ml-2 text-xs text-muted">
                      {item.hint}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {feature && (
              <Link
                href={feature.href}
                onClick={() => setOpen(false)}
                className="group relative w-40 shrink-0 overflow-hidden border-l border-line"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-sm leading-tight text-background">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-background/70">
                    {feature.subtitle}
                  </p>
                </div>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
