import { products, siteConfig } from "@/lib/site-config";

export default function Products() {
  return (
    <section id="products" className="bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Our Collections
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            Pieces made to last
          </h2>
          <p className="mt-4 text-foreground/70">
            {`A curated edit of ${siteConfig.name} silhouettes. Full product photography is on its way — reach out for the current catalogue.`}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal transition-colors hover:border-gold/50"
            >
              <div className="relative flex aspect-[3/4] items-center justify-center bg-[linear-gradient(160deg,#1c1c20_0%,#0b0b0c_100%)]">
                <span className="font-serif text-5xl text-gold/30 transition-colors group-hover:text-gold/50">
                  {siteConfig.name[0]}
                </span>
              </div>
              <div className="flex flex-col gap-1 px-5 py-5">
                <h3 className="font-serif text-lg text-foreground">
                  {product.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-gold-soft/80">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
