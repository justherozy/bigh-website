"use client";

import { BagIcon, HeartIcon } from "@/components/icons";
import { toggleBag, toggleWishlist, useCollectionsStore } from "@/lib/collections-store";

export default function ProductCardActions({ slug }: { slug: string }) {
  const { wishlist, bag } = useCollectionsStore();
  const inWishlist = wishlist.includes(slug);
  const inBag = bag.includes(slug);

  return (
    <div
      className="absolute right-3 top-3 z-10 flex gap-2"
      style={{ transform: "translateZ(24px)" }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist(slug);
        }}
        aria-pressed={inWishlist}
        aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        className="flex h-8 w-8 items-center justify-center bg-background/90 text-foreground transition-colors hover:bg-background"
      >
        <HeartIcon className="h-4 w-4" filled={inWishlist} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleBag(slug);
        }}
        aria-pressed={inBag}
        aria-label={inBag ? "Remove from bag" : "Add to bag"}
        className="flex h-8 w-8 items-center justify-center bg-background/90 text-foreground transition-colors hover:bg-background"
      >
        <BagIcon className="h-4 w-4" filled={inBag} />
      </button>
    </div>
  );
}
