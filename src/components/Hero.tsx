import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 text-center"
    >
      <Image
        src={siteConfig.heroImage}
        alt=""
        fill
        priority
        className="object-cover object-top"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <Image
          src="/bigh-logo.jpeg"
          alt={`${siteConfig.fullName} logo`}
          width={120}
          height={120}
          className="rounded-full object-cover shadow-lg shadow-ink/10"
          priority
        />

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
