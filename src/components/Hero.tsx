import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen min-h-[560px] w-full items-end">
      <Image
        src={siteConfig.heroImage}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
      />

      <div className="relative z-10 flex w-full flex-col gap-5 px-6 pb-16 sm:px-10 sm:pb-20">
        <Image
          src="/bigh-logo.jpeg"
          alt={`${siteConfig.fullName} logo`}
          width={44}
          height={44}
          className="object-cover"
          priority
        />
        <p className="max-w-2xl text-3xl leading-tight tracking-tight text-background sm:text-5xl">
          {siteConfig.tagline}
        </p>
      </div>
    </section>
  );
}
