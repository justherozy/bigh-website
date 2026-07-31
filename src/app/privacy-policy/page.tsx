import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.fullName}`,
  description: "How BigH handles the information you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage kicker="Legal" title="Privacy Policy">
      <p>
        This site does not use cookies or third-party analytics, and it
        doesn&apos;t require an account to browse. The only information
        stored in your browser is your wishlist and enquiry bag, kept
        locally on your device — it&apos;s never sent to us unless you
        choose to share it.
      </p>
      <p>
        When you contact us to place an order — by WhatsApp or email — we
        collect what you send us directly: your name, contact details,
        measurements, and delivery address. This information is used only
        to process and deliver your order, and to communicate with you
        about it.
      </p>
      <p>
        We don&apos;t sell or share your information with third parties,
        beyond what&apos;s necessary to fulfil an order (for example, a
        delivery courier).
      </p>
      <p>
        If you&apos;d like your information removed or have any questions
        about how it&apos;s handled, email{" "}
        <a
          href={`mailto:${siteConfig.brands[0].email}`}
          className="text-foreground underline underline-offset-4"
        >
          {siteConfig.brands[0].email}
        </a>
        .
      </p>
    </InfoPage>
  );
}
