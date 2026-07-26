"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      videoRef.current?.play().catch(() => {});
    }
  }, []);

  return (
    <section id="home" className="relative flex h-screen min-h-[640px] w-full items-end">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={siteConfig.heroImage}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={siteConfig.heroVideo} type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
      />

      <div className="relative z-10 flex w-full flex-col gap-6 px-6 pb-16 sm:px-10 sm:pb-20">
        <div className="flex items-center gap-3">
          <Image
            src="/bigh-logo.jpeg"
            alt={`${siteConfig.fullName} logo`}
            width={40}
            height={40}
            className="object-cover"
            priority
          />
          <span className="text-xs uppercase tracking-[0.35em] text-background/80">
            {siteConfig.tagline}
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl leading-[1.05] tracking-tight text-background sm:text-6xl lg:text-7xl">
          {siteConfig.fullName}
          <span className="text-background/60"> &amp; Footwears</span>
        </h1>

        <p className="max-w-xl text-sm text-background/80 sm:text-base">
          {siteConfig.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-4">
          <a
            href="#products"
            className="border border-background px-7 py-3 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-ink"
          >
            Explore Collections
          </a>
          <a
            href="#contact"
            className="px-7 py-3 text-xs uppercase tracking-[0.2em] text-background/80 underline underline-offset-4 transition-colors hover:text-background"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
