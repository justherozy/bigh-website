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

  // Pool of hero videos — one is picked at random on every page load/reload.
  // All feature real Nigerians in genuine Nigerian traditional attire.
  heroVideos: [
    {
      src: "/videos/hero.mp4",
      poster:
        "https://images.pexels.com/videos/27939220/african-culture-african-tradition-agbada-ancestral-worship-27939220.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
      src: "/videos/hero-2.mp4",
      poster:
        "https://images.pexels.com/videos/27939221/african-culture-african-tradition-agbada-ancestral-worship-27939221.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
      src: "/videos/hero-3.mp4",
      poster:
        "https://images.pexels.com/videos/27939222/african-culture-african-tradition-agbada-ancestral-worship-27939222.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
  ],

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
  // CSS object-position for the hero image — see Category.focal above.
  focal?: string;
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
    focal: "center 8%",
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
  // CSS object-position for the hero image. Portrait-oriented photos need
  // this tuned so wide desktop viewports (which crop hard vertically) keep
  // the subject's face in frame. Defaults to "center" if omitted.
  focal?: string;
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
    focal: "center 10%",
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
    focal: "center 12%",
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
    image: "/shoes/shoe-loafers-tan-white.jpg",
    description: "Considered footwear, crafted for comfort.",
    longDescription:
      "From polished leather to everyday staples, the BigH footwear edit is crafted to carry every other collection. Full catalogue coming soon — message us for the current selection.",
    accent: "#5c4330",
    accentSoft: "#e9e0d5",
    relatedCollections: ["accessories-edit"],
  },
];

export type ShoeGalleryItem = {
  image: string;
  alt: string;
};

// Real product shots pulled from @bigh_footwears on Instagram — shown as a
// gallery on the Shoes category page. Update this list as new stock drops.
export const shoeGallery: ShoeGalleryItem[] = [
  { image: "/shoes/shoe-loafers-black.jpg", alt: "Black leather penny loafers" },
  { image: "/shoes/shoe-loafers-tan-white.jpg", alt: "Two-tone tan and white leather loafers" },
  { image: "/shoes/shoe-mules-velvet-black.jpg", alt: "Black velvet crystal-embellished mules" },
  { image: "/shoes/shoe-slides-duo.jpg", alt: "Woven leather slides in black and tan" },
  { image: "/shoes/shoe-loafer-embroidered.jpg", alt: "Embroidered suede loafer" },
  { image: "/shoes/shoe-mules-knit-grey.jpg", alt: "Grey knit buckle mules" },
  { image: "/shoes/shoe-sandals-green.jpg", alt: "Green suede H-strap sandals" },
];

export type EditorialSlide = {
  kicker: string;
  title: string;
  copy: string;
  image: string;
  // CSS object-position for the background image. Defaults to "center".
  // Portrait-oriented photos need this tuned so wide desktop viewports
  // (which crop hard vertically) keep the subject's face in frame.
  focal?: string;
};

export const editorialSlides: EditorialSlide[] = [
  {
    kicker: "Heritage",
    title: "Wear Your Roots, Cut For Now",
    copy: "Aso-oke and agbada tailored with the same discipline as a blazer. Heritage dressing you'll reach for again — not just for one big day.",
    image: "https://images.unsplash.com/photo-1648328168368-3a25f2152802",
    focal: "center 20%",
  },
  {
    kicker: "Craft",
    title: "Nothing Machine-Made About It",
    copy: "Every stitch is placed by hand, not stamped by a factory line. Buy once, wear for years — that's the promise behind every BigH piece.",
    image: "https://images.unsplash.com/photo-1763368161231-3d1e91e48d08",
    focal: "center 15%",
  },
  {
    kicker: "Colour",
    title: "Colour That Gets You Noticed",
    copy: "Some pieces whisper. Ours are built to turn heads the moment you walk in. If you want to disappear into a crowd, BigH isn't for you.",
    image: "https://images.unsplash.com/photo-1632948056627-41482f69c38c",
    focal: "center 12%",
  },
  {
    kicker: "Detail",
    title: "The Finish Is The Difference",
    copy: "Anyone can sell a shirt. Few get the collar, the button, the hem exactly right. That difference is why our customers come back.",
    image: "https://images.unsplash.com/photo-1661332360810-28aa035f14db",
    focal: "center 12%",
  },
  {
    kicker: "Occasion",
    title: "Dressed Right, Remembered Forever",
    copy: "Weddings, owambe, the big entrance — these are the days people photograph for years. Make sure what you're wearing earns its place in every shot.",
    image: "https://images.unsplash.com/photo-1682903702424-2bf1c8e4e12b",
    focal: "center 15%",
  },
  {
    kicker: "Confidence",
    title: "Walk In Like You Own The Room",
    copy: "The right fit changes how you carry yourself before you say a word. That's not vanity — that's what considered tailoring actually does.",
    image: "https://images.unsplash.com/photo-1782566208081-6b5135fddf23",
    focal: "center 12%",
  },
  {
    kicker: "Availability",
    title: "Made To Order, Not Mass Produced",
    copy: "We don't flood racks with hundreds of the same piece. Once it's gone, it's gone — message us before your size does.",
    image: "https://images.unsplash.com/photo-1763823132521-72f373850de2",
    focal: "center 12%",
  },
  {
    kicker: "Presence",
    title: "Command A Room Without Trying",
    copy: "Some outfits perform. This one just fits — and lets you actually enjoy the party you got dressed for.",
    image: "https://images.unsplash.com/photo-1757683435646-4952c9daeba5",
    focal: "center 12%",
  },
  {
    kicker: "Legacy",
    title: "Elegance That Doesn't Age",
    copy: "Real style isn't a trend you outgrow. It's a standard you keep for life — and pass down when it's time.",
    image: "https://images.unsplash.com/photo-1661332306744-70f9ed1a7f40",
    focal: "center 15%",
  },
  {
    kicker: "Statement",
    title: "Lace That Moves With You",
    copy: "This isn't an outfit you sit still in. Dance in it, laugh in it, live in it — BigH is built for the whole night, not just the photos.",
    image: "https://images.unsplash.com/photo-1654420664484-3d1aae7d8a34",
    focal: "center 12%",
  },
];

export type JournalGalleryImage = {
  image: string;
  alt: string;
  focal?: string;
};

export type JournalEntry = {
  slug: string;
  // Short label shown as the card caption — Prada-style: CAMPAIGN, FASHION SHOW, EVENTS, etc.
  category: string;
  title: string;
  image: string;
  focal?: string;
  // One-line teaser used on the entry's own page, under the title.
  excerpt: string;
  // Longer narrative for the entry's dedicated /journal/[slug] page, one
  // paragraph per array entry.
  story: string[];
  // Supporting images shown between paragraphs on the entry's own page.
  gallery: JournalGalleryImage[];
};

// BigH Journal — the auto-sliding image strip shown where "Get In Touch" used
// to sit (see layout.tsx). Deliberately a different image set from
// editorialSlides above, sourced from free-license African photography.
// Each entry gets its own page at /journal/[slug].
export const journalEntries: JournalEntry[] = [
  {
    slug: "in-the-studio",
    category: "Campaign",
    title: "In The Studio",
    image: "https://images.unsplash.com/photo-1531299983330-093763e1d963",
    excerpt: "One light, one look, and everything the outfit needs to say.",
    story: [
      "Every BigH campaign starts the same way: strip away the noise until only the cut, the fabric, and the person wearing it are left in frame. No trend chasing, no filler — just the piece, doing the talking.",
      "A campaign shoot is where a garment is asked to prove itself without the help of a party, a runway, or a crowd. One light, one backdrop, one look — and if the tailoring doesn't hold up under that kind of scrutiny, it doesn't make the edit. That standard is deliberate: it's the same one every BigH piece is held to before it ever reaches a client.",
      "What ends up in frame is rarely the first take. Sleeves get re-set, collars get steamed twice, a fold gets adjusted a centimetre to the left — small corrections most people will never notice, and that we'd notice immediately if we skipped them. That's the real subject of every BigH campaign: not a season, not a trend, just the standard the house won't compromise on.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993",
        alt: "Grayscale studio portrait of a woman wearing a necklace",
      },
      {
        image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc",
        alt: "Studio portrait of a woman in a black crew neck top",
      },
    ],
  },
  {
    slug: "on-the-runway",
    category: "Fashion Show",
    title: "On The Runway",
    image: "https://images.unsplash.com/photo-1747171053296-84c4e8015b24",
    focal: "center 5%",
    excerpt: "A cut only really reveals itself once it's moving.",
    story: [
      "Photographs can only tell you so much about how a garment falls — the runway is where it proves itself. Every hem, every sleeve, every drape gets tested in motion, in front of a room that notices everything.",
      "A show is the only setting where a garment is tested exactly the way it will be worn — walking, turning, catching light from every angle, for a room that has seen enough clothes to know the difference between a good drape and a great one. Nothing about that pressure is forgiving, which is exactly why it matters.",
      "For BigH, the runway isn't a marketing exercise — it's quality control performed in public. A hem that swings correctly, a sleeve that moves with the arm instead of against it, a silhouette that holds its shape after twenty steps rather than five: these are details a photograph can flatter but only motion can confirm.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1733322992706-1210ca79f4df",
        alt: "A group of models walking down a runway",
      },
      {
        image: "https://images.unsplash.com/photo-1733322987267-f691d5be2bc6",
        alt: "An audience watching a fashion show in Lagos, Nigeria",
      },
    ],
  },
  {
    slug: "owambe-energy",
    category: "Events",
    title: "Owambe Energy",
    image: "https://images.unsplash.com/photo-1681545303529-b6beb2e19f02",
    excerpt: "The room BigH gets dressed for.",
    story: [
      "Weddings, owambe, the big entrance — these are the days people photograph for years. This is the energy every occasion piece is built to survive: heat, dancing, and a room full of people who remember exactly what you wore.",
      "In Nigerian culture, an owambe isn't a side event — it's the event. Aso-ebi coordinated to the last bead, gele tied high enough to be seen across the room, and an unspoken rule that whatever you wear needs to survive hours of dancing, greeting, and being photographed from every angle by someone's cousin with a good camera.",
      "We design occasion wear with that reality in mind, not a quiet studio one. A BigH piece for an owambe is cut to move, built to hold its shape after the third dance of the night, and finished with enough presence to be remembered the next morning — which, for this kind of event, is really the whole point.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1784202387839-05ad29074027",
        alt: "A bride dancing with guests under the night sky",
      },
      {
        image: "https://images.unsplash.com/photo-1660675133902-acd1b057f75d",
        alt: "A group of people in traditional dress at a celebration",
      },
    ],
  },
  {
    slug: "lagos-unscripted",
    category: "Street Style",
    title: "Lagos, Unscripted",
    image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052",
    focal: "center 15%",
    excerpt: "The best style moments are rarely the planned ones.",
    story: [
      "Some of the sharpest looks happen off-schedule — on a street corner, between appointments, when nobody's posing for anyone. That's the energy BigH is built for: pieces that hold up whether the day goes to plan or not.",
      "Lagos doesn't really do quiet fashion. Between the traffic, the markets, and the sheer pace of the city, personal style here gets tested constantly — and the pieces that survive it aren't the delicate ones, they're the considered ones. Structure that holds up to a full day. Colour that reads from across the street. Fabric that doesn't wilt by 3pm.",
      "This is the energy behind BigH's everyday pieces: designed less for a controlled studio moment and more for a Tuesday afternoon that might include three meetings, a market run, and an unplanned photo. If it can't survive Lagos, it doesn't leave the workshop.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1618434772075-47936b9f2840",
        alt: "A man in a red jacket standing beside a yellow car in Lagos",
      },
      {
        image: "https://images.unsplash.com/photo-1618434772352-4e2ac5d9d0a4",
        alt: "A man in a red shirt beside a Lagos danfo bus",
      },
    ],
  },
  {
    slug: "off-duty",
    category: "Lookbook",
    title: "Off Duty",
    image: "https://images.unsplash.com/photo-1738363436272-f191888a398b",
    focal: "center 55%",
    excerpt: "The version of confidence that doesn't need an occasion.",
    story: [
      "Not every strong look is built for a stage. Some of the most confident pieces in a wardrobe are the ones worn on a quiet day — a sharp cap, a clean collar, a posture that doesn't ask for attention but holds it anyway.",
      "This edit is about that quieter register of style: pieces that don't need an event to justify themselves. A well-cut shirt worn plainly. Colour used with intention instead of noise. The kind of look that reads as considered even when nobody's explaining it.",
      "It's a reminder that BigH isn't only occasion wear — the same discipline that goes into a wedding piece goes into the pieces worn on the days in between, when the only person you're dressing for is yourself.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1533108344127-a586d2b02479",
        alt: "A man in a white dress shirt in Lagos, Nigeria",
      },
      {
        image: "https://images.unsplash.com/photo-1440451185281-11ff5853ce0a",
        alt: "A man sitting on a chair near a wall",
      },
    ],
  },
  {
    slug: "the-headwrap",
    category: "Portrait",
    title: "The Headwrap",
    image: "https://images.unsplash.com/photo-1781184921203-f12a852b6b85",
    excerpt: "A finishing touch that's really the whole statement.",
    story: [
      "Long before an outfit is complete, the details decide how it reads — colour, wrap, the angle of a fold. This portrait is a reminder that presentation is never an afterthought at BigH; it's where the look actually begins.",
      "Across West Africa, the headwrap has never just been a finishing touch — it's a form of language. Colour, fold, height, and angle all carry meaning, and the way a woman ties her gele can say as much about the occasion as the dress underneath it. It's one of the oldest style statements in the region, and one of the most consistently modern.",
      "We treat presentation the same way: never an afterthought, always a decision. Every BigH look is finished with the same intention this portrait captures — the understanding that the smallest choices are often the ones people remember longest.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73",
        alt: "A smiling woman wearing a turban in Lagos, Nigeria",
      },
      {
        image: "https://images.unsplash.com/photo-1505421031134-e57263cae630",
        alt: "A woman wearing a black and multicoloured turban",
      },
    ],
  },
  {
    slug: "the-finishing-touch",
    category: "Accessories",
    title: "The Finishing Touch",
    image: "https://images.unsplash.com/photo-1757140448448-90ed1f18fcbb",
    excerpt: "Small pieces, doing the most work.",
    story: [
      "Beads, pendants, the last layer before an outfit leaves the house — the Accessories Edit exists because the smallest choices carry the most weight. Nothing here competes with the rest of the look; it completes it.",
      "Jewellery in West African style has always done more than decorate — beads signal status, gold signals occasion, and the specific pieces a woman chooses to layer on say something about the story she's telling that day. None of it is incidental.",
      "The Accessories Edit exists in that same spirit: pieces chosen to complete a look, not distract from it. A necklace that catches light without overwhelming the dress. Earrings that hold their own next to a bold gele. Small decisions, made with the same care as everything else BigH puts a name to.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1713845784494-33f5d1f96d25",
        alt: "A woman with an afro wearing a necklace and earrings",
      },
      {
        image: "https://images.unsplash.com/photo-1641498974986-5a3011255841",
        alt: "A collection of necklaces laid out on a table",
      },
    ],
  },
  {
    slug: "before-the-walk",
    category: "Behind The Scenes",
    title: "Before The Walk",
    image: "https://images.unsplash.com/photo-1742237424056-ea5cbb674d66",
    focal: "center 30%",
    excerpt: "The minutes before a show are where the real work shows.",
    story: [
      "Nobody sees the fittings, the pinning, the last-minute adjustments before a model steps out — but that's where a collection is actually made. BigH pieces are built to survive that pressure, not just look good standing still.",
      "Every show that looks effortless from the audience was, minutes earlier, a small controlled panic backstage — pins being adjusted, makeup being touched up, someone checking a hem for the third time while a stylist counts down the walk order. None of that discipline is visible once the lights come up, which is exactly the point.",
      "We think about BigH pieces the same way: built to survive the parts nobody sees. A seam that holds through a quick change. A fabric that doesn't crease sitting backstage for an hour. The finished look on the runway is only half the story — the other half happens in a room like this one.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1636023730877-233b9237d4ec",
        alt: "A woman getting her makeup done backstage",
      },
      {
        image: "https://images.unsplash.com/photo-1699802703426-a65263511fc2",
        alt: "A woman checking her reflection in a mirror backstage",
      },
    ],
  },
  {
    slug: "frame-by-frame",
    category: "Editorial",
    title: "Frame By Frame",
    image: "https://images.unsplash.com/photo-1625646741211-711bdd65c570",
    focal: "center 15%",
    excerpt: "Colour, cut, and confidence — one frame at a time.",
    story: [
      "Every BigH shoot is a chance to show a piece somewhere new: different light, different mood, different story. This is that idea distilled into a single frame — a look that holds up under any lens.",
      "An editorial shoot gives a piece room a campaign doesn't always allow — space to be reinterpreted, styled differently, shot in a mood that says something beyond 'buy this.' It's less about the product and more about the feeling a piece is capable of creating, in the right light, on the right day.",
      "That's the appeal of editorial work for BigH: proof that a single piece can hold more than one story. The same garment that reads as quietly confident in one frame can read as bold, dramatic, or unexpected in another — without a single stitch being changed.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1667714789831-66e2297b35e7",
        alt: "A woman with her hand resting on her face",
      },
      {
        image: "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a",
        alt: "A black and white portrait of a woman with long hair",
      },
    ],
  },
  {
    slug: "where-fabric-begins",
    category: "Craft",
    title: "Where Fabric Begins",
    image: "https://images.unsplash.com/photo-1552710307-537199cd41c0",
    excerpt: "Before a piece is cut, it's chosen — one bolt at a time.",
    story: [
      "Every BigH garment starts at the fabric table, not the sewing machine. Colour, weight, and hand-feel get chosen with the same care that goes into the final stitch — because the finish is only as good as what you start with.",
      "Long before a pattern is cut, someone has already made dozens of decisions — the weight of the cloth, how it drapes, whether the colour holds up in daylight versus indoor light, whether it's worth the price per yard. Most of that judgment happens at the fabric table, not the design table, and it's easy to underestimate how much it decides about the finished piece.",
      "That's why BigH treats sourcing as its own craft. A beautiful cut can't rescue a poor fabric choice, but the right fabric makes even a simple silhouette look considered. Every garment we make starts with that first, unglamorous decision — because the finish is only ever as good as what you start with.",
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1641320197434-6ae0ca235048",
        alt: "Close-up of a person using a sewing machine",
      },
      {
        image: "https://images.unsplash.com/photo-1606501126768-b78d4569d3f9",
        alt: "A person in a gray shirt sewing fabric",
      },
    ],
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
