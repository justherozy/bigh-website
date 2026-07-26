import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons";

export default function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink px-6 py-24 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">
          Get In Touch
        </p>
        <h2 className="font-serif text-3xl text-background sm:text-4xl">
          Ready to elevate your wardrobe?
        </h2>
        <p className="max-w-lg text-background/70">
          Message us on WhatsApp for orders, custom fittings, and enquiries.
          We&apos;re happy to help you find the perfect piece.
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          {siteConfig.whatsapp.map((contact) => (
            <a
              key={contact.number}
              href={`https://wa.me/${contact.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-gold-soft"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp ({contact.label})
            </a>
          ))}
        </div>

        <div className="mt-2 flex flex-col gap-1 text-sm text-background/60 sm:flex-row sm:gap-6">
          {siteConfig.emails.map((item) => (
            <a
              key={item.address}
              href={`mailto:${item.address}`}
              className="underline decoration-gold-soft/40 underline-offset-4 transition-colors hover:text-gold-soft"
            >
              {item.label}: {item.address}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
