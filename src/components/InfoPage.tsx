import type { ReactNode } from "react";

export default function InfoPage({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-background px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {kicker}
        </p>
        <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-foreground/80 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
