"use client";

import { BagIcon, HeartIcon } from "@/components/icons";
import { toggleBag, toggleWishlist, useCollectionsStore } from "@/lib/collections-store";

export default function CollectionActions({
  slug,
  accent,
}: {
  slug: string;
  accent: string;
}) {
  const { wishlist, bag } = useCollectionsStore();
  const inWishlist = wishlist.includes(slug);
  const inBag = bag.includes(slug);

  return (
    <div className="mt-4 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em]">
      <button
        type="button"
        onClick={() => toggleWishlist(slug)}
        aria-pressed={inWishlist}
        className="flex items-center gap-2 transition-opacity hover:opacity-70"
        style={{ color: accent }}
      >
        <HeartIcon className="h-4 w-4" filled={inWishlist} />
        {inWishlist ? "Saved" : "Wishlist"}
      </button>
      <button
        type="button"
        onClick={() => toggleBag(slug)}
        aria-pressed={inBag}
        className="flex items-center gap-2 transition-opacity hover:opacity-70"
        style={{ color: accent }}
      >
        <BagIcon className="h-4 w-4" filled={inBag} />
        {inBag ? "In Bag" : "Add to Bag"}
      </button>
    </div>
  );
}
