"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brandStatements } from "@/lib/site-config";

export default function BrandStatement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % brandStatements.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-background px-6 py-32 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Our Philosophy
        </p>

        <div className="flex min-h-[6rem] items-center sm:min-h-[8rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-2xl leading-snug tracking-tight text-foreground sm:text-3xl"
            >
              {brandStatements[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
