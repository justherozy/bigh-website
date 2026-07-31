import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: `Shipping & Delivery | ${siteConfig.fullName}`,
  description: "Shipping timelines and delivery details for BigH orders.",
};

export default function ShippingDeliveryPage() {
  return (
    <InfoPage kicker="Services" title="Shipping & Delivery">
      <p>
        Because every piece is made to order, delivery timelines are quoted
        per order rather than fixed at checkout — production time depends on
        the piece, fabric, and current order volume.
      </p>
      <p>
        We currently ship to customers in Nigeria and the United Kingdom,
        with delivery arranged directly once your order is complete. Exact
        cost and timing will be confirmed with you before your order is
        placed.
      </p>
      <p>
        For a delivery estimate on a specific piece, message us on WhatsApp
        or email and we&apos;ll give you a timeline before you commit to an
        order.
      </p>
    </InfoPage>
  );
}
