import Image from "next/image";
import { editorialFeature } from "@/lib/site-config";

export default function EditorialFeature() {
  return (
    <section id="edit" className="scroll-mt-24 bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]">
          <Image
            src={editorialFeature.image}
            alt={editorialFeature.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 900px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-left sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              {editorialFeature.kicker}
            </p>
            <h2 className="max-w-md text-2xl tracking-tight text-background sm:text-3xl">
              {editorialFeature.title}
            </h2>
            <p className="max-w-lg text-sm text-background/85 sm:text-base">
              {editorialFeature.copy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
