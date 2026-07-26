import Image from "next/image";
import Link from "next/link";
import { products, siteConfig } from "@/lib/site-config";
import Tilt3DCard from "@/components/Tilt3DCard";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            Our Collections
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            Pieces made to last
          </h2>
          <p className="mt-4 text-foreground/70">
            {`A curated edit of ${siteConfig.name} silhouettes. Open a collection for its own story.`}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Tilt3DCard key={product.slug}>
              <Link
                href={`/collections/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface text-left shadow-md shadow-ink/5 ring-1 ring-ink/5 transition-shadow hover:shadow-xl hover:shadow-ink/10"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex flex-col gap-1 px-5 py-5">
                  <h3 className="font-serif text-lg text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gold-deep/90">
                    {product.category}
                  </p>
                </div>
              </Link>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
