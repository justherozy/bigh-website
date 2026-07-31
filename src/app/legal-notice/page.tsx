import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: `Legal Notice | ${siteConfig.fullName}`,
  description: "Legal information about the operator of this website.",
};

export default function LegalNoticePage() {
  return (
    <InfoPage kicker="Legal" title="Legal Notice">
      <p>
        This website is operated by {siteConfig.fullName}, trading as{" "}
        {siteConfig.brands.map((b) => b.label).join(" and ")}.
      </p>
      <p>
        For all correspondence relating to this site, contact us using the
        details below:
      </p>
      <ul className="flex flex-col gap-1">
        {siteConfig.brands.map((brand) => (
          <li key={brand.key}>
            {brand.label}:{" "}
            <a
              href={`mailto:${brand.email}`}
              className="text-foreground underline underline-offset-4"
            >
              {brand.email}
            </a>
          </li>
        ))}
      </ul>
      <p>
        The content of this site — including product names, photography, and
        text — is the property of {siteConfig.fullName} and may not be
        reproduced without permission.
      </p>
    </InfoPage>
  );
}
