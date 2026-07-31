import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { journalEntries, siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find((e) => e.slug === slug);
  if (!entry) return {};
  return {
    title: `${entry.title} | ${siteConfig.fullName} Journal`,
    description: entry.excerpt,
  };
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = journalEntries.find((e) => e.slug === slug);
  if (!entry) notFound();

  const others = journalEntries.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[75vh] items-end overflow-hidden pt-24">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: entry.focal ?? "center" }}
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.45) 45%, rgba(10,10,10,0.1) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 text-left sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {entry.category}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight text-background sm:text-6xl">
            {entry.title}
          </h1>
          <p className="mt-5 max-w-xl text-background/85">{entry.excerpt}</p>
        </div>
      </section>

      <section className="bg-background px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-foreground/80">
            {entry.story}
          </p>
        </div>
      </section>

      <section className="bg-surface-muted px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gold">
            More From The Journal
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/journal/${other.slug}`}
                className="group flex flex-col gap-3"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: other.focal ?? "center" }}
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40">
                    <span className="text-xs uppercase tracking-[0.3em] text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Discover
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold/90">
                    {other.category}
                  </p>
                  <h3 className="mt-1 text-lg text-foreground">
                    {other.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
