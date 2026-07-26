import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/site-config";

export default function CategoryShowcase() {
  return (
    <section className="bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Shop By Category
          </p>
          <h2 className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
            Find your edit
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px bg-line sm:gap-px lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="group relative flex aspect-[3/4] w-full overflow-hidden bg-background"
            >
              <Image
                src={category.image}
                alt={category.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="relative z-10 mt-auto flex flex-col gap-1 p-5">
                <span className="text-xl text-background">
                  {category.label}
                </span>
                <span className="text-xs uppercase tracking-widest text-background/70">
                  Shop now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
