"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      videoRef.current?.play().catch(() => {});
    }
  }, []);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  const bgX = useTransform(smx, [0, 1], ["2%", "-2%"]);
  const bgY = useTransform(smy, [0, 1], ["2%", "-2%"]);
  const logoX = useTransform(smx, [0, 1], [-14, 14]);
  const logoY = useTransform(smy, [0, 1], [-10, 10]);
  const logoRotateX = useTransform(smy, [0, 1], [8, -8]);
  const logoRotateY = useTransform(smx, [0, 1], [-8, 8]);

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="home"
      onPointerMove={handleMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 text-center"
    >
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-[-3%]">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster={siteConfig.heroImage}
          className="h-full w-full object-cover object-top"
        >
          <source src={siteConfig.heroVideo} type="video/mp4" />
        </video>
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/10 via-background/35 to-background"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background/20"
      />

      <div className="relative z-10 flex flex-col items-center gap-8 rounded-[2.5rem] bg-background/45 px-8 py-14 shadow-2xl shadow-ink/10 backdrop-blur-md sm:px-16">
        <motion.div
          style={{
            x: logoX,
            y: logoY,
            rotateX: logoRotateX,
            rotateY: logoRotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/bigh-logo.jpeg"
            alt={`${siteConfig.fullName} logo`}
            width={120}
            height={120}
            className="rounded-full object-cover shadow-xl shadow-ink/20"
            priority
          />
        </motion.div>

        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-6xl">
            {siteConfig.fullName}
          </h1>
          <p className="font-serif text-lg italic text-gold-deep sm:text-xl">
            {siteConfig.tagline}
          </p>
        </div>

        <p className="max-w-xl text-balance text-foreground/70">
          {siteConfig.description}
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="#products"
            className="rounded-full bg-gold px-8 py-3 text-sm uppercase tracking-widest text-background transition-colors hover:bg-gold-deep"
          >
            Explore Collections
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/20 px-8 py-3 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-ink/5"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
