import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import CheckoutClient from "@/components/CheckoutClient";

export const metadata: Metadata = {
  title: `Checkout | ${siteConfig.fullName}`,
  description: "Review your bag and send an order request to BigH.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
