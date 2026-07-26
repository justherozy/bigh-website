import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { products, siteConfig } from "@/lib/site-config";
import PageHero from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | ${siteConfig.fullName}`,
    description: product.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        kicker={product.category}
        title={product.name}
        description={product.description}
        image={product.image}
        accent={product.accent}
      />

      <section
        className="px-6 py-20 sm:px-10"
        style={{ backgroundColor: product.accentSoft }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-ink/80">
            {product.longDescription}
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsapp[0].number}?text=${encodeURIComponent(
              `Hi BigH, I'd love to know more about the ${product.name} collection.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-90"
            style={{ backgroundColor: product.accent }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-background px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gold-deep">
            More To Explore
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/collections/${other.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-md shadow-ink/5 ring-1 ring-ink/5 transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={other.image}
                    alt={other.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="px-5 py-4">
                  <h3 className="font-serif text-lg text-foreground">
                    {other.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gold-deep/90">
                    {other.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
