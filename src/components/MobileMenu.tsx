"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { categories, products } from "@/lib/site-config";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span className="h-px w-6 bg-foreground" />
        <span className="h-px w-6 bg-foreground" />
        <span className="h-px w-6 bg-foreground" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex h-dvh w-screen flex-col overflow-y-auto bg-background px-6 py-6"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center text-2xl text-foreground/70"
              >
                &#10005;
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-8 text-lg">
              <Link href="/" onClick={close} className="text-foreground">
                Home
              </Link>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
                  Shop
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/shop/${c.slug}`}
                      onClick={close}
                      className="text-foreground"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
                  Collections
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/collections/${p.slug}`}
                      onClick={close}
                      className="text-foreground"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/#edit" onClick={close} className="text-foreground">
                The Edit
              </Link>
              <a href="#contact" onClick={close} className="text-foreground">
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
