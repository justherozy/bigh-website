"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { editorialSlides } from "@/lib/site-config";

export default function EditorialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % editorialSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = editorialSlides[index];

  const goTo = (next: number) => {
    setIndex((next + editorialSlides.length) % editorialSlides.length);
  };

  return (
    <section id="edit" className="scroll-mt-24 bg-surface-muted px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            The Edit
          </p>
          <h2 className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
            Fashion, considered
          </h2>
        </div>

        <div className="relative mt-14 bg-surface">
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-left sm:p-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    {slide.kicker}
                  </p>
                  <h3 className="max-w-md text-2xl tracking-tight text-background sm:text-3xl">
                    {slide.title}
                  </h3>
                  <p className="max-w-lg text-sm text-background/85 sm:text-base">
                    {slide.copy}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="absolute left-0 top-1/2 flex h-11 w-9 -translate-y-1/2 items-center justify-center bg-background/70 text-ink transition-colors hover:bg-background"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="absolute right-0 top-1/2 flex h-11 w-9 -translate-y-1/2 items-center justify-center bg-background/70 text-ink transition-colors hover:bg-background"
            >
              &#8594;
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 py-5">
            {editorialSlides.map((item, i) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-px transition-all ${
                  i === index ? "w-8 bg-foreground" : "w-4 bg-line"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
