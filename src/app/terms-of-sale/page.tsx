import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: `Terms Of Sale | ${siteConfig.fullName}`,
  description: "The terms that apply when you order from BigH.",
};

export default function TermsOfSalePage() {
  return (
    <InfoPage kicker="Legal" title="Terms Of Sale">
      <p>
        Every order placed with {siteConfig.fullName} is made to order and
        confirmed directly with you by WhatsApp or email before production
        begins. Pricing, fabric, and any customisation are agreed at that
        point — there is no automated checkout on this site.
      </p>
      <p>
        Payment details and accepted methods are shared with you directly
        when your order is confirmed. Production starts once payment terms
        agreed for your order have been met.
      </p>
      <p>
        See{" "}
        <a href="/returns" className="text-foreground underline underline-offset-4">
          Returns &amp; Exchanges
        </a>{" "}
        for what happens if a piece arrives faulty or mismade, and{" "}
        <a
          href="/shipping-delivery"
          className="text-foreground underline underline-offset-4"
        >
          Shipping &amp; Delivery
        </a>{" "}
        for delivery terms.
      </p>
      <p>
        If any part of an order needs to change after confirmation —
        sizing, fabric, timeline — contact us as early as possible so we can
        accommodate it before production is underway.
      </p>
    </InfoPage>
  );
}
