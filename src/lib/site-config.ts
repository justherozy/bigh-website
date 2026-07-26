// Edit this file to update brand details, contact info, and social links across the whole site.

export const siteConfig = {
  name: "BigH",
  fullName: "BigH Style Hub",
  tagline: "...the thread between you and elegance",
  description:
    "BigH Style Hub is a fashion brand crafting timeless, elegant pieces for those who dress with intention.",

  // WhatsApp numbers (used for "Contact Us" buttons). Format: country code + number, no spaces or symbols.
  whatsapp: [
    { label: "Nigeria", number: "2347068922698" },
    { label: "UK", number: "447459476730" },
  ],

  // TODO: replace "#" with real profile URLs once available.
  social: [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "Facebook", href: "#" },
  ],

  // TODO: replace with a real contact email once available.
  email: "hello@bigh.com",
};

export type Product = {
  name: string;
  category: string;
};

// TODO: replace with real product photos and names. Add an "image" field once you have photos
// (e.g. image: "/products/dress-1.jpg") and drop the file into the public/products folder.
export const products: Product[] = [
  { name: "Signature Collection", category: "Ready-to-wear" },
  { name: "Evening Elegance", category: "Occasion wear" },
  { name: "Everyday Refined", category: "Casual luxury" },
  { name: "Accessories Edit", category: "Finishing touches" },
];
