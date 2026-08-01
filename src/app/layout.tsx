import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import JournalCarousel from "@/components/JournalCarousel";
import Footer from "@/components/Footer";

// Display face: headlines only. Quiet sans (Inter) carries body copy and UI.
const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://bigh-website-gamma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "BigH Style Hub",
    "BigH Footwears",
    "Nigerian fashion",
    "African fashion",
    "aso-oke",
    "agbada",
    "gele",
    "Lagos fashion brand",
  ],
  icons: {
    icon: "/bigh-logo.jpeg",
    apple: "/bigh-logo.jpeg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/bigh-logo.jpeg",
        width: 512,
        height: 512,
        alt: `${siteConfig.fullName} logo`,
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/bigh-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bodoniModa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <JournalCarousel />
        <Footer />
      </body>
    </html>
  );
}
