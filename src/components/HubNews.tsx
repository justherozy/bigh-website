"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hubNews } from "@/lib/site-config";

export default function HubNews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: track.clientWidth * 0.82, behavior: "smooth" });
      }
    }, 4200);
    return () => clearInterval(timer);
  }, [paused]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: "smooth" });
  };

  return (
    <section className="bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Updates</p>
          <h2 className="text-3xl tracking-tight text-foreground sm:text-4xl">
            Big H Hub News
          </h2>
        </div>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {hubNews.map((item) => (
              <div key={item.title} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
                <Link
                  href={item.href}
                  className="group relative block aspect-[4/5] overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.focal ?? "center" }}
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40">
                    <span className="translate-y-2 border border-background px-6 py-2 text-xs uppercase tracking-[0.25em] text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Discover
                    </span>
                  </div>
                </Link>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-widest text-gold/90">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-lg text-foreground">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-[36%] z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-foreground shadow-md transition-colors hover:bg-surface-muted"
          >
            &#8592;
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-[36%] z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-foreground shadow-md transition-colors hover:bg-surface-muted"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
