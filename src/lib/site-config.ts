// Edit this file to update brand details, contact info, and social links across the whole site.

export const siteConfig = {
  name: "BigH",
  fullName: "BigH Style Hub",
  tagline: "the thread between you and elegance",
  description:
    "BigH is one house, two crafts: BigH Style Hub for considered clothing, and BigH Footwears for footwear made with the same care. Global tailoring discipline, worn alongside the colour and craft of Nigerian heritage dress.",

  // Full-bleed background photo for the hero section.
  heroImage: "https://images.unsplash.com/photo-1782566208081-6b5135fddf23",

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
  hoverImage: string;
  description: string;
  longDescription: string;
  accent: string;
  accentSoft: string;
};

// TODO: swap "image"/"hoverImage" for real product photography whenever it's ready — same
// fields, just a new URL or a local path like "/products/dress-1.jpg" in the public folder.
// "hoverImage" is what the homepage grid swaps to on hover.
// Each collection gets its own page at /collections/[slug] with its own accent colour.
export const products: Product[] = [
  {
    slug: "signature-collection",
    name: "Signature Collection",
    category: "Ready-to-wear",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    hoverImage: "https://images.unsplash.com/photo-1769107805412-90d9191d53e9",
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
    hoverImage: "https://images.unsplash.com/photo-1749657726882-a4df541652a2",
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
    hoverImage: "https://images.unsplash.com/photo-1518204928-69aa89a61291",
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
    hoverImage: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd",
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

export const editorialFeature = {
  kicker: "Heritage",
  title: "Two Wardrobes, One Hand",
  copy: "An agbada tailored with the same discipline as a blazer. BigH exists in the space between Nigerian heritage dress and global tailoring, not choosing one over the other.",
  image: "https://images.unsplash.com/photo-1648328168368-3a25f2152802",
};

export type EditorialSlide = {
  kicker: string;
  title: string;
  copy: string;
  image: string;
};

// Powers the full-bleed rotating feature on the homepage ("The Edit").
// TODO: swap these Unsplash images for real campaign photography whenever it's ready.
export const editorialSlides: EditorialSlide[] = [
  {
    kicker: "Heritage",
    title: "Two Wardrobes, One Hand",
    copy: "An agbada tailored with the same discipline as a blazer. BigH exists in the space between Nigerian heritage dress and global tailoring, not choosing one over the other.",
    image: "https://images.unsplash.com/photo-1648328168368-3a25f2152802",
  },
  {
    kicker: "Craft",
    title: "Cloth With Ceremony",
    copy: "Aso-oke and coral, reworked with a tailoring hand. Evening Elegance is built for the room you're about to walk into.",
    image: "https://images.unsplash.com/photo-1642808637173-070a839ddae2",
  },
  {
    kicker: "Details",
    title: "The Last Ten Percent",
    copy: "The smallest choices carry the most weight. Finishing pieces selected to complete a look, not compete with it.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
  {
    kicker: "Silhouette",
    title: "Tailored, Not Traded",
    copy: "Sculpted evening wear beside aso-oke cut for modern proportion. One wardrobe, moving between two traditions.",
    image: "https://images.unsplash.com/photo-1769451741943-7c0897deac21",
  },
  {
    kicker: "Footwear",
    title: "Built From the Ground Up",
    copy: "Polished leather and everyday staples, crafted to carry every other collection.",
    image: "https://images.unsplash.com/photo-1549290127-7f758fdadff7",
  },
  {
    kicker: "Everyday",
    title: "Considered, Not Costumed",
    copy: "Polished enough for a client lunch, easy enough for a Sunday — the art of looking put-together without looking like you tried.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
];
