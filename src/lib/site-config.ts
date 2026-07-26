// Edit this file to update brand details, contact info, and social links across the whole site.

export const siteConfig = {
  name: "BigH",
  fullName: "BigH Style Hub",
  tagline: "...the thread between you and elegance",
  description:
    "BigH Style Hub is a fashion brand crafting timeless, elegant pieces for those who dress with intention.",

  // Background photo for the hero section.
  heroImage: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",

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
  image: string;
  description: string;
};

// TODO: swap "image" for real product photography whenever it's ready — same field, just a
// new URL or a local path like "/products/dress-1.jpg" dropped into the public folder.
export const products: Product[] = [
  {
    name: "Signature Collection",
    category: "Ready-to-wear",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    description:
      "Everyday silhouettes built on clean lines and considered fabrics — pieces that anchor a wardrobe rather than chase a season.",
  },
  {
    name: "Evening Elegance",
    category: "Occasion wear",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    description:
      "Statement pieces for the nights that matter — tailored drama, rich colour, and details made to be noticed.",
  },
  {
    name: "Everyday Refined",
    category: "Casual luxury",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    description:
      "Elevated basics for real life — polished enough for the city, easy enough for every day.",
  },
  {
    name: "Accessories Edit",
    category: "Finishing touches",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985",
    description:
      "The details that complete a look — considered accessories chosen to pair effortlessly with every collection.",
  },
];

export type EditorialSlide = {
  kicker: string;
  title: string;
  copy: string;
  image: string;
};

export const editorialSlides: EditorialSlide[] = [
  {
    kicker: "Craft",
    title: "Crafted With Intention",
    copy: "Every BigH piece starts with a question: will this still feel right in ten years? Craftsmanship and considered fabric choices are non-negotiable.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
  {
    kicker: "Colour",
    title: "Colour That Speaks",
    copy: "Fashion is a language before it's a product. We build colour stories that let you say something without saying a word.",
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8",
  },
  {
    kicker: "Individuality",
    title: "Style With Personality",
    copy: "Trends fade, personality doesn't. BigH pieces are designed to be worn your way — mixed, layered, and made personal.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
  {
    kicker: "Detail",
    title: "Details That Delight",
    copy: "The finishing touch is never an afterthought. From stitch to clasp, the small decisions are where elegance actually lives.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
];
