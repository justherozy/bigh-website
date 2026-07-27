import Image from "next/image";
import Link from "next/link";
import { products, siteConfig } from "@/lib/site-config";
import ProductCardActions from "@/components/ProductCardActions";

export default function ShopGrid() {
  return (
    <section id="products" className="scroll-mt-24 bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Our Collections
          </p>
          <h2 className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
            Pieces made to last
          </h2>
          <p className="mt-4 text-foreground/70">
            {`A curated edit of ${siteConfig.name} silhouettes. Open a collection for its own story.`}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/collections/${product.slug}`}
              className="group flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <Image
                  src={product.hoverImage}
                  alt=""
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <ProductCardActions slug={product.slug} />
              </div>
              <div className="flex flex-col gap-1 pt-4">
                <h3 className="text-lg text-foreground">{product.name}</h3>
                <p className="text-xs uppercase tracking-widest text-muted">
                  {product.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
