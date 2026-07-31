import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: `How To Order | ${siteConfig.fullName}`,
  description: "How ordering works at BigH — no cart, just a conversation.",
};

export default function HowToOrderPage() {
  return (
    <InfoPage kicker="Services" title="How To Order">
      <p>
        BigH pieces are made to order rather than pulled off a shelf, so
        there&apos;s no cart or checkout on this site. Every order starts
        with a message — WhatsApp is fastest, email works too.
      </p>
      <ol className="flex flex-col gap-3 pl-5 list-decimal">
        <li>
          Browse the{" "}
          <Link href="/" className="text-foreground underline underline-offset-4">
            collections
          </Link>{" "}
          and note the piece, colour, and size you have in mind.
        </li>
        <li>
          Reach out on WhatsApp or email with the piece name and your
          measurements — we&apos;ll confirm fabric, fit, and price.
        </li>
        <li>
          Once confirmed, your piece goes into production. We&apos;ll keep
          you updated until it&apos;s ready to ship.
        </li>
      </ol>
      <div className="mt-4 flex flex-col gap-2">
        {siteConfig.whatsapp.map((entry) => (
          <a
            key={entry.label}
            href={`https://wa.me/${entry.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-foreground transition-colors hover:text-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp ({entry.label})
          </a>
        ))}
      </div>
    </InfoPage>
  );
}
