import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: `FAQ | ${siteConfig.fullName}`,
  description: "Answers to common questions about ordering from BigH.",
};

const faqs = [
  {
    question: "Do you have a physical store?",
    answer:
      "BigH operates online and by appointment. All orders are placed through WhatsApp or email — see How To Order for the full process.",
  },
  {
    question: "How long does a made-to-order piece take?",
    answer:
      "It varies by piece and fabric. We'll give you a specific timeline once your order is confirmed.",
  },
  {
    question: "Do you ship outside Nigeria and the UK?",
    answer:
      "We currently ship to Nigeria and the UK. Message us if you're elsewhere and we'll see what's possible.",
  },
  {
    question: "Can I get custom measurements?",
    answer:
      "Yes — every piece is made to order, so we'll ask for your measurements before production starts.",
  },
  {
    question: "What's the difference between BigH Style Hub and BigH Footwears?",
    answer:
      "BigH Style Hub covers clothing and tailoring; BigH Footwears covers shoes. Both are reachable through the contact details in the footer.",
  },
];

export default function FaqPage() {
  return (
    <InfoPage kicker="Services" title="FAQ">
      <div className="flex flex-col gap-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="flex flex-col gap-1.5">
            <p className="text-foreground">{faq.question}</p>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <p>
        Question not covered here? Reach us on WhatsApp or at{" "}
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
