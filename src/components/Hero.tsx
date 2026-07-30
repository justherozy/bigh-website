"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PauseIcon, PlayIcon } from "@/components/icons";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      videoRef.current
        ?.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

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
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/45 to-transparent"
      />

      <button
        type="button"
        onClick={toggleVideo}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        aria-pressed={isPlaying}
        className="absolute bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-background/20 sm:bottom-8 sm:right-8"
      >
        {isPlaying ? (
          <PauseIcon className="h-4 w-4" />
        ) : (
          <PlayIcon className="h-4 w-4" />
        )}
      </button>

      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-6 pb-16 text-center sm:px-10 sm:pb-20">
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

        <h1 className="max-w-3xl text-3xl font-light uppercase leading-[1.15] tracking-[0.12em] text-background sm:text-5xl sm:tracking-[0.15em] lg:text-6xl">
          Big H Style Hub
          <span className="text-background/60"> &amp; Footwears</span>
        </h1>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/shop/men"
            className="text-xs font-light uppercase tracking-[0.25em] text-background transition-colors hover:text-background/70"
          >
            Men
          </Link>
          <span aria-hidden className="h-3 w-px bg-background/40" />
          <Link
            href="/shop/women"
            className="text-xs font-light uppercase tracking-[0.25em] text-background transition-colors hover:text-background/70"
          >
            Women
          </Link>
          <span aria-hidden className="h-3 w-px bg-background/40" />
          <Link
            href="/shop/kids"
            className="text-xs font-light uppercase tracking-[0.25em] text-background transition-colors hover:text-background/70"
          >
            Kids
          </Link>
        </div>
      </div>
    </section>
  );
}
