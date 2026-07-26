"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons";

export default function CollectionModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink">
        <Image
          src={product.image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-lg rounded-3xl bg-surface p-8 shadow-2xl sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-surface-muted hover:text-foreground"
        >
          &#10005;
        </button>

        <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
          {product.category}
        </p>
        <h3 className="mt-3 font-serif text-3xl text-foreground">
          {product.name}
        </h3>
        <p className="mt-4 text-foreground/70">{product.description}</p>

        <a
          href={`https://wa.me/${siteConfig.whatsapp[0].number}?text=${encodeURIComponent(
            `Hi BigH, I'd love to know more about the ${product.name} collection.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-widest text-background transition-colors hover:bg-gold-deep"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Enquire on WhatsApp
        </a>
      </motion.div>
    </motion.div>
  );
}
