"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { editorialSlides } from "@/lib/site-config";

function randomNextIndex(current: number, length: number) {
  if (length <= 1) return current;
  let next = current;
  while (next === current) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}

export default function EditorialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => randomNextIndex(current, editorialSlides.length));
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = editorialSlides[index];

  const goTo = (next: number) => {
    setIndex(((next % editorialSlides.length) + editorialSlides.length) % editorialSlides.length);
  };

  // Subtle pointer-tracked 3D tilt on the current slide.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 80, damping: 20 });
  const smy = useSpring(my, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(smy, [0, 1], [4, -4]);
  const rotateY = useTransform(smx, [0, 1], [-5, 5]);

  const sectionRef = useRef<HTMLElement>(null);
  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    },
    [mx, my]
  );
  const handleLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <section
      id="edit"
      ref={sectionRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative h-screen min-h-[560px] w-full overflow-hidden bg-ink"
      style={{ perspective: 1600 }}
    >
      <p className="absolute left-6 top-24 z-20 text-xs uppercase tracking-[0.3em] text-background/70 sm:left-10">
        The Edit
      </p>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateY: 55, scale: 0.94 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          exit={{ opacity: 0, rotateY: -55, scale: 0.94 }}
          transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ rotateX, rotateY, scale: 1.05, transformStyle: "preserve-3d" }}
            className="absolute inset-[-2%]"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/10" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 text-left sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              {slide.kicker}
            </p>
            <h2 className="max-w-2xl text-3xl tracking-tight text-background sm:text-5xl">
              {slide.title}
            </h2>
            <p className="max-w-xl text-sm text-background/85 sm:text-base">
              {slide.copy}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-0 top-1/2 z-20 flex h-14 w-11 -translate-y-1/2 items-center justify-center bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20"
      >
        &#8592;
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-0 top-1/2 z-20 flex h-14 w-11 -translate-y-1/2 items-center justify-center bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20"
      >
        &#8594;
      </button>

      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2 sm:bottom-8">
        {editorialSlides.map((item, i) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-px transition-all ${
              i === index ? "w-8 bg-background" : "w-4 bg-background/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
