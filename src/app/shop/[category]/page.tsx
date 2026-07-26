import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, products, siteConfig } from "@/lib/site-config";
import PageHero from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/icons";
import Tilt3DCard from "@/components/Tilt3DCard";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.label} | ${siteConfig.fullName}`,
    description: category.description,
  };
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const related = products.filter((p) =>
    category.relatedCollections.includes(p.slug)
  );

  return (
    <>
      <PageHero
        kicker={category.kicker}
        title={category.label}
        description={category.description}
        image={category.image}
        accent={category.accent}
      />

      <section
        className="px-6 py-20 sm:px-10"
        style={{ backgroundColor: category.accentSoft }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-ink/80">
            {category.longDescription}
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsapp[0].number}?text=${encodeURIComponent(
              `Hi BigH, I'd love to know more about the ${category.label} edit.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
            style={{ backgroundColor: category.accent }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-background px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gold">
              Collections Featuring {category.label}
            </p>
            <div
              className={`mx-auto mt-10 grid grid-cols-1 gap-6 ${
                { 1: "max-w-sm", 2: "max-w-2xl sm:grid-cols-2", 3: "sm:grid-cols-3" }[
                  Math.min(related.length, 3) as 1 | 2 | 3
                ]
              }`}
            >
              {related.map((product) => (
                <Tilt3DCard key={product.slug}>
                  <Link
                    href={`/collections/${product.slug}`}
                    className="group flex flex-col bg-background shadow-lg shadow-ink/10"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 640px) 33vw, 100vw"
                      />
                    </div>
                    <div className="px-5 py-4">
                      <h3 className="text-lg text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-gold/90">
                        {product.category}
                      </p>
                    </div>
                  </Link>
                </Tilt3DCard>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
