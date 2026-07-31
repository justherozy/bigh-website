import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: `Returns & Exchanges | ${siteConfig.fullName}`,
  description: "Our returns and exchanges policy for made-to-order pieces.",
};

export default function ReturnsPage() {
  return (
    <InfoPage kicker="Services" title="Returns & Exchanges">
      <p>
        Because each piece is cut and made to your measurements, we&apos;re
        not able to offer returns for change of mind. If something arrives
        faulty, mismade, or not as described, contact us within 7 days of
        delivery and we&apos;ll sort it out — repair, remake, or refund,
        depending on the issue.
      </p>
      <p>
        Exchanges (for example, a sizing adjustment) are handled case by
        case — message us with your order details and we&apos;ll work out
        the best fix together.
      </p>
      <p>
        Reach out on WhatsApp or email as soon as an issue comes up; the
        sooner we hear from you, the faster we can resolve it.
      </p>
    </InfoPage>
  );
}
