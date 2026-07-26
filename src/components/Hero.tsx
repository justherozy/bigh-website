import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 pt-24 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,162,75,0.16),transparent_60%)]"
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <Image
          src="/bigh-logo.jpeg"
          alt={`${siteConfig.fullName} logo`}
          width={140}
          height={140}
          className="rounded-full object-cover"
          priority
        />

        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-6xl">
            {siteConfig.fullName}
          </h1>
          <p className="font-serif text-lg italic text-gold-soft sm:text-xl">
            {siteConfig.tagline}
          </p>
        </div>

        <p className="max-w-xl text-balance text-foreground/70">
          {siteConfig.description}
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="#products"
            className="rounded-full bg-gold px-8 py-3 text-sm uppercase tracking-widest text-background transition-colors hover:bg-gold-soft"
          >
            Explore Collections
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gold-soft/60 px-8 py-3 text-sm uppercase tracking-widest text-gold-soft transition-colors hover:bg-white/5"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
