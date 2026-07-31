import Image from "next/image";

export default function PageHero({
  kicker,
  title,
  description,
  image,
  accent,
  focal,
}: {
  kicker: string;
  title: string;
  description: string;
  image: string;
  accent: string;
  focal?: string;
}) {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden pt-24">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        style={{ objectPosition: focal ?? "center" }}
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${accent}e6 0%, rgba(15,13,11,0.55) 45%, rgba(15,13,11,0.15) 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 text-left sm:px-10">
        <p
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "#f4ead0" }}
        >
          {kicker}
        </p>
        <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight text-background sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-background/85">{description}</p>
      </div>
    </section>
  );
}
