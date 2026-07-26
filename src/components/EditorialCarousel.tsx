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
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            The Edit
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            Fashion, considered
          </h2>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl bg-surface shadow-xl shadow-ink/5">
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
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">
                    {slide.kicker}
                  </p>
                  <h3 className="max-w-md font-serif text-2xl text-background sm:text-3xl">
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
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-ink backdrop-blur transition-colors hover:bg-background sm:left-5"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-ink backdrop-blur transition-colors hover:bg-background sm:right-5"
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
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold" : "w-2 bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
