"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { editorialSlides } from "@/lib/site-config";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export default function JournalCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.6;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const atStart = track.scrollLeft <= 4;

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => scrollByCard(1), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-ink py-20 sm:py-24">
      <p className="mx-auto max-w-6xl px-6 text-center text-2xl font-bold text-background sm:px-10 sm:text-3xl">
        BigH Journal
      </p>

      <div className="relative mt-12">
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-6 sm:px-10"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {editorialSlides.map((slide) => (
            <div
              key={slide.title}
              data-card
              className="flex w-[78vw] shrink-0 flex-col gap-3 sm:w-[52vw] lg:w-[38vw]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: slide.focal ?? "center" }}
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 52vw, 78vw"
                />
              </div>
              <p className="text-center text-xs uppercase tracking-[0.3em] text-background/60">
                {slide.kicker}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
          className="absolute left-1 top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-background/70 transition-colors hover:text-background sm:flex"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
          className="absolute right-1 top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-background/70 transition-colors hover:text-background sm:flex"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
