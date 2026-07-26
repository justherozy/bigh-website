// Edit this file to update brand details, contact info, and social links across the whole site.

export const siteConfig = {
  name: "BigH",
  fullName: "BigH Style Hub",
  tagline: "...the thread between you and elegance",
  description:
    "BigH is one house, two crafts: BigH Style Hub for considered clothing, and BigH Footwears for footwear made with the same care. Timeless pieces for those who dress with intention, head to toe.",

  // Background photo for the hero section (used as the video poster / fallback).
  heroImage: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
  // Background video for the hero section.
  heroVideo: "/videos/hero.mp4",

  // WhatsApp numbers (used for "Contact Us" buttons). Format: country code + number, no spaces or symbols.
  whatsapp: [
    { label: "Nigeria", number: "2347068922698" },
    { label: "UK", number: "447459476730" },
  ],

  // Contact emails per brand line.
  emails: [
    { label: "Style Hub", address: "bighstylehub@gmail.com" },
    { label: "Footwears", address: "bighfootwears@gmail.com" },
  ],

  // TODO: replace TikTok/Facebook "#" with real profile URLs once available.
  social: [
    {
      platform: "instagram" as const,
      label: "BigH Style Hub",
      href: "https://www.instagram.com/bigh_stylehub?igsh=MXZhN2Z3dnB2aXVsYw%3D%3D&utm_source=qr",
    },
    {
      platform: "instagram" as const,
      label: "BigH Footwears",
      href: "https://www.instagram.com/bigh_footwears?igsh=MXU3dXhvYTcyNW0yeA%3D%3D&utm_source=qr",
    },
    { platform: "tiktok" as const, label: "TikTok", href: "#" },
    { platform: "facebook" as const, label: "Facebook", href: "#" },
  ],
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  accent: string;
  accentSoft: string;
};

// TODO: swap "image" for real product photography whenever it's ready — same field, just a
// new URL or a local path like "/products/dress-1.jpg" dropped into the public folder.
// Each collection gets its own page at /collections/[slug] with its own accent colour.
export const products: Product[] = [
  {
    slug: "signature-collection",
    name: "Signature Collection",
    category: "Ready-to-wear",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    description:
      "Everyday silhouettes built on clean lines and considered fabrics — pieces that anchor a wardrobe rather than chase a season.",
    longDescription:
      "The Signature Collection is where BigH begins: considered basics, cut from fabrics that age well and colours that never feel dated. This is the wardrobe foundation — the pieces you reach for first, season after season.",
    accent: "#9c7a3c",
    accentSoft: "#f1e6cf",
  },
  {
    slug: "evening-elegance",
    name: "Evening Elegance",
    category: "Occasion wear",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    description:
      "Statement pieces for the nights that matter — tailored drama, rich colour, and details made to be noticed.",
    longDescription:
      "Evening Elegance is built for the moments that call for more — galas, dinners, the night you want to remember. Rich colour, sculpted silhouettes, and finishing details designed to catch the light and hold a room.",
    accent: "#6e2a52",
    accentSoft: "#f1dbe9",
  },
  {
    slug: "everyday-refined",
    name: "Everyday Refined",
    category: "Casual luxury",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    description:
      "Elevated basics for real life — polished enough for the city, easy enough for every day.",
    longDescription:
      "Everyday Refined is casual luxury done properly: pieces polished enough for a client lunch, easy enough for a Sunday. It's the art of looking put-together without looking like you tried too hard.",
    accent: "#8a3d2c",
    accentSoft: "#f2ddd4",
  },
  {
    slug: "accessories-edit",
    name: "Accessories Edit",
    category: "Finishing touches",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985",
    description:
      "The details that complete a look — considered accessories chosen to pair effortlessly with every collection.",
    longDescription:
      "The Accessories Edit is proof that the smallest choices carry the most weight. Watches, jewellery, and finishing pieces selected to complete every other BigH collection, not compete with it.",
    accent: "#3f3a34",
    accentSoft: "#e7e3da",
  },
];

export type Category = {
  slug: string;
  label: string;
  kicker: string;
  image: string;
  description: string;
  longDescription: string;
  accent: string;
  accentSoft: string;
  relatedCollections: string[];
};

// TODO: replace with real per-category product grids once inventory photography is ready.
// Each entry gets its own page at /shop/[slug] with its own accent colour and background.
export const categories: Category[] = [
  {
    slug: "women",
    label: "Women",
    kicker: "Shop Women",
    image: "https://images.unsplash.com/photo-1645561305502-63a9ba09ab09",
    description: "Tailored, considered, unmistakably BigH.",
    longDescription:
      "From sculpted evening wear to refined daywear, the Women's edit spans every occasion BigH dresses for. New arrivals are added regularly — message us for the current in-stock edit while the full lookbook is being finalised.",
    accent: "#7a2f4f",
    accentSoft: "#f2dde7",
    relatedCollections: ["evening-elegance", "everyday-refined"],
  },
  {
    slug: "men",
    label: "Men",
    kicker: "Shop Men",
    image: "https://images.unsplash.com/photo-1619603364904-c0498317e145",
    description: "Sharp tailoring, quiet confidence.",
    longDescription:
      "Outerwear, knitwear, and tailoring built around a simple idea: understated pieces with real presence. The Men's edit is being photographed now — reach out on WhatsApp for current availability.",
    accent: "#33475b",
    accentSoft: "#dbe4ea",
    relatedCollections: ["signature-collection"],
  },
  {
    slug: "kids",
    label: "Kids",
    kicker: "Shop Kids",
    image: "https://images.unsplash.com/photo-1760287363879-6012adab292c",
    description: "Playful pieces, built to last.",
    longDescription:
      "A junior edit built with the same care as the rest of BigH — durable fabrics, easy colour, room to move. The Kids line is launching soon; get in touch to be the first to know when it drops.",
    accent: "#2f7266",
    accentSoft: "#dcece7",
    relatedCollections: ["signature-collection"],
  },
  {
    slug: "shoes",
    label: "Shoes",
    kicker: "Shop Shoes",
    image: "https://images.unsplash.com/photo-1549290127-7f758fdadff7",
    description: "Considered footwear, crafted for comfort.",
    longDescription:
      "From polished leather to everyday staples, the BigH footwear edit is crafted to carry every other collection. Full catalogue coming soon — message us for the current selection.",
    accent: "#5c4330",
    accentSoft: "#e9e0d5",
    relatedCollections: ["accessories-edit"],
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
