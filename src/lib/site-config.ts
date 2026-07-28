// Edit this file to update brand details, contact info, and social links across the whole site.

export const siteConfig = {
  name: "BigH",
  fullName: "BigH Style Hub",
  tagline: "the thread between you and elegance",
  description:
    "BigH is one house, two crafts: BigH Style Hub for considered clothing, and BigH Footwears for footwear made with the same care. Global tailoring discipline, worn alongside the colour and craft of Nigerian heritage dress.",

  // Background photo for the hero section (used as the video poster / fallback).
  heroImage: "https://images.unsplash.com/photo-1782566208081-6b5135fddf23",
  // Background video for the hero section.
  heroVideo: "/videos/hero.mp4",

  // WhatsApp numbers (used for "Contact Us" buttons). Format: country code + number, no spaces or symbols.
  whatsapp: [
    { label: "Nigeria", number: "2347068922698" },
    { label: "UK", number: "447459476730" },
  ],

  // One entry per brand line. Each field is used across the footer, contact section, and nav.
  brands: [
    {
      key: "stylehub",
      label: "BigH Style Hub",
      email: "bighstylehub@gmail.com",
      instagram:
        "https://www.instagram.com/bigh_stylehub?igsh=MXZhN2Z3dnB2aXVsYw%3D%3D&utm_source=qr",
      tiktok: "https://www.tiktok.com/@bigh_stylehub?_r=1&_t=ZN-98MhmynoZfT",
      facebook: "https://www.facebook.com/share/1Ei4ei3d2o/?mibextid=wwXIfr",
    },
    {
      key: "footwears",
      label: "BigH Footwears",
      email: "bighfootwears@gmail.com",
      instagram:
        "https://www.instagram.com/bigh_footwears?igsh=MXU3dXhvYTcyNW0yeA%3D%3D&utm_source=qr",
      tiktok: "https://www.tiktok.com/@bigh_footwears?_r=1&_t=ZN-98MhoJUTb7u",
      facebook: "https://www.facebook.com/share/1ECyr99bzb/?mibextid=wwXIfr",
    },
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
    accent: "#141414",
    accentSoft: "#ececec",
  },
  {
    slug: "evening-elegance",
    name: "Evening Elegance",
    category: "Occasion wear",
    image: "https://images.unsplash.com/photo-1642808637173-070a839ddae2",
    description:
      "Aso-oke and agbada, tailored for the room you're about to walk into — traditional cloth, modern proportion.",
    longDescription:
      "Evening Elegance is where BigH's Nigerian heritage speaks loudest — aso-oke, coral, and gele reworked with a tailoring hand for weddings, owambe, and the nights that call for ceremony. Made for two, worn by one.",
    accent: "#8a6a2f",
    accentSoft: "#eee4cf",
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
    accent: "#242424",
    accentSoft: "#e9e9e9",
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
    accent: "#1a1a1a",
    accentSoft: "#e7e7e7",
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
    image: "https://images.unsplash.com/photo-1769451741943-7c0897deac21",
    description: "Tailored Western lines, worn alongside gele and lace.",
    longDescription:
      "From sculpted evening wear to aso-oke reworked for modern proportion, the Women's edit moves between two wardrobes at once. New arrivals are added regularly — message us for the current in-stock edit while the full lookbook is being finalised.",
    accent: "#7a2f4f",
    accentSoft: "#f2dde7",
    relatedCollections: ["evening-elegance", "everyday-refined"],
  },
  {
    slug: "men",
    label: "Men",
    kicker: "Shop Men",
    image: "https://images.unsplash.com/photo-1782566208081-6b5135fddf23",
    description: "Agbada and tailoring, cut with the same discipline.",
    longDescription:
      "Outerwear and tailoring built around a simple idea, applied to two traditions at once: the quiet confidence of Western menswear, and the presence of a well-cut agbada. The Men's edit is being photographed now — reach out on WhatsApp for current availability.",
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
    kicker: "Heritage",
    title: "Wear Your Roots, Cut For Now",
    copy: "Aso-oke and agbada tailored with the same discipline as a blazer. Heritage dressing you'll reach for again — not just for one big day.",
    image: "https://images.unsplash.com/photo-1648328168368-3a25f2152802",
  },
  {
    kicker: "Craft",
    title: "Nothing Machine-Made About It",
    copy: "Every stitch is placed by hand, not stamped by a factory line. Buy once, wear for years — that's the promise behind every BigH piece.",
    image: "https://images.unsplash.com/photo-1674077342248-9c6484a77034",
  },
  {
    kicker: "Colour",
    title: "Colour That Gets You Noticed",
    copy: "Some pieces whisper. Ours are built to turn heads the moment you walk in. If you want to disappear into a crowd, BigH isn't for you.",
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8",
  },
  {
    kicker: "Detail",
    title: "The Finish Is The Difference",
    copy: "Anyone can sell a shirt. Few get the collar, the button, the hem exactly right. That difference is why our customers come back.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    kicker: "Occasion",
    title: "Dressed Right, Remembered Forever",
    copy: "Weddings, owambe, the big entrance — these are the days people photograph for years. Make sure what you're wearing earns its place in every shot.",
    image: "https://images.unsplash.com/photo-1682903702424-2bf1c8e4e12b",
  },
  {
    kicker: "Confidence",
    title: "Walk In Like You Own The Room",
    copy: "The right fit changes how you carry yourself before you say a word. That's not vanity — that's what considered tailoring actually does.",
    image: "https://images.unsplash.com/photo-1782462238852-ac00d3403c32",
  },
  {
    kicker: "Availability",
    title: "Made To Order, Not Mass Produced",
    copy: "We don't flood racks with hundreds of the same piece. Once it's gone, it's gone — message us before your size does.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
];

// Rotating brand-philosophy statements shown in the quiet section between
// the hero and The Edit. Keep these short — one or two sentences, read aloud
// in under five seconds.
export const brandStatements: string[] = [
  "Fashion is not what you wear — it's the discipline behind it. BigH is built on that discipline, one considered piece at a time.",
  "We don't design for trends. We design for the version of you that still looks right ten years from now.",
  "Every BigH piece carries two traditions in one hand: the precision of global tailoring, and the soul of Nigerian craft.",
  "Confidence isn't loud. It's a perfectly cut shoulder, a hem that falls exactly right, a colour chosen on purpose.",
  "We measure success one way: pieces our clients still reach for, season after season.",
  "This is dressing with intention — for the room you're walking into, and the one you're building.",
];
