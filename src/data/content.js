export const NAV_LINKS = [
  { href: "#practice", label: "Practice" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const PRACTICE = [
  {
    title: "Graphic Design & Layout",
    body: "Brand identities, menus, packaging, loyalty cards and covers. Files built to spec — correct dimensions, bleeds and color — so nothing surprises you at the press.",
    tools: "Photoshop · Illustrator · CorelDRAW · Affinity Designer · Canva",
  },
  {
    title: "Advertising & Print Production",
    body: "Tarpaulins, banners, booth builds, gift certificates and campaign posters. I follow a job from the client brief through sublimation, large-format printing and quality checking.",
    tools: "Large-format · Sublimation · Customized products",
  },
  {
    title: "Web & UI/UX Design",
    body: "Mobile app interfaces, wireframes and interactive prototypes. Listing pages and web layouts that stay readable once they reach a phone.",
    tools: "Figma · Prototyping · Wireframing",
  },
];

export const FILTERS = [
  { key: "all", label: "Everything" },
  { key: "design", label: "Graphic Design" },
  { key: "ads", label: "Advertising" },
  { key: "ui", label: "Web & UI/UX" },
];

export const WORK = [
  // Advertising
  { id: "atiatihan", cat: "ads", wide: true, file: "jollibee-atiatihan-banner.jpg", title: "Ati-Atihan Festival 2026", meta: "Jollibee · Wide-format banner", alt: "Jollibee Ati-Atihan Festival 2026 banner" },
  { id: "dinagyang-banner", cat: "ads", wide: true, file: "jollibee-dinagyang-banner.jpg", title: "Hala Bira, Iloilo", meta: "Jollibee · Streamer", alt: "Hala Bira Iloilo Dinagyang streamer" },
  { id: "dinagyang-2026", cat: "ads", file: "jollibee-dinagyang-2026.jpg", title: "Dinagyang Festival 2026", meta: "Jollibee · Tarpaulin", alt: "Jollibee Dinagyang Festival 2026 tarpaulin" },
  { id: "dinagyang-2025", cat: "ads", file: "jollibee-dinagyang-2025.jpg", title: "Dinagyang Festival 2025", meta: "Jollibee · Tarpaulin", alt: "Jollibee Dinagyang Festival 2025 tarpaulin" },
  { id: "festival-tarps", cat: "ads", file: "jollibee-festival-tarps.jpg", title: "Festival Campaign Set", meta: "Jollibee · Tarpaulin series", alt: "Set of Jollibee festival tarpaulin designs" },
  { id: "dinagyang-booth", cat: "ads", file: "dinagyang-booth.jpg", title: "Festival Booth Build", meta: "Jollibee · Tent & booth mockup", alt: "Festival booth and tent mockups" },
  { id: "love-telecom", cat: "ads", file: "love-telecom-gc.jpg", title: "Love Telecom × MECA", meta: "Gift certificate & signage", alt: "Love Telecom and MECA gift certificate and signage designs" },
  { id: "grand-opening", cat: "ads", file: "grand-opening-posters.jpg", title: "Grand Opening, San Carlos", meta: "Event posters", alt: "Grand opening and event poster designs" },
  { id: "event-banners", cat: "ads", file: "event-banners.jpg", title: "Event Banners", meta: "Birthday · Beach party · Market stall", alt: "Assorted event banner designs" },
  { id: "election-posters", cat: "ads", file: "election-posters.jpg", title: "Campaign Posters", meta: "Local election collateral, 2023", alt: "Local election campaign poster designs" },
  { id: "ig-ads-01", cat: "ads", file: "instagram-ads-01.jpg", title: "Instagram Ads I", meta: "Social campaign set", alt: "Collection of Instagram advertisement designs" },
  { id: "ig-ads-02", cat: "ads", file: "instagram-ads-02.jpg", title: "Instagram Ads II", meta: "Social campaign set", alt: "Second collection of Instagram advertisement designs" },
  { id: "social-ads", cat: "ads", file: "social-media-ads.jpg", title: "Social Media Ads", meta: "Gym · Real estate · Retail", alt: "Social media advertisement designs for gym, real estate and retail" },

  // Graphic Design
  { id: "coffee-cloud", cat: "design", file: "coffee-cloud-brand.jpg", title: "Coffee Cloud", meta: "Café brand identity", alt: "Coffee Cloud café brand identity board" },
  { id: "lavish-locks", cat: "design", file: "lavish-locks-branding.jpg", title: "Lavish Locks", meta: "Salon branding & loyalty card", alt: "Lavish Locks salon branding and loyalty card designs" },
  { id: "food-menus", cat: "design", file: "food-menus.jpg", title: "Mahen’s & Angel Pizza", meta: "Menu boards", alt: "Catering and pizza menu board designs" },
  { id: "sip-snack", cat: "design", file: "sip-snack-menu.jpg", title: "Sip & Snack Corner", meta: "Menu layout", alt: "Sip and Snack Corner menu layout" },
  { id: "chip-bag", cat: "design", file: "chip-bag-packaging.jpg", title: "Snack Packaging", meta: "Chip bags for giveaways", alt: "Custom chip bag packaging designs" },
  { id: "jerseys", cat: "design", file: "jersey-mockups.jpg", title: "Team Jerseys", meta: "Sublimation apparel", alt: "Sublimated team jersey designs" },
  { id: "shirts", cat: "design", file: "shirt-mockups.jpg", title: "Shirt Mockups", meta: "Production-ready apparel", alt: "Polo and jersey shirt production mockups" },
  { id: "raffle", cat: "design", file: "raffle-tickets.jpg", title: "Christmas Party Raffle", meta: "Ticket layout, BFCCFI", alt: "Christmas party raffle ticket designs" },
  { id: "piece-heaven", cat: "design", file: "piece-of-heaven.jpg", title: "Piece of Heaven", meta: "Typographic cover", alt: "Piece of Heaven typographic cover design" },
  { id: "portfolio-cover", cat: "design", file: "portfolio-cover.jpg", title: "Portfolio Cover", meta: "Personal branding", alt: "Personal portfolio cover design" },

  // Web & UI/UX
  { id: "rentnav", cat: "ui", file: "rentnav-mobile-ui.jpg", title: "RentNav", meta: "Mobile rental app · Figma", alt: "RentNav mobile rental application screens designed in Figma" },
  { id: "rentnav-expo", cat: "ui", file: "rentnav-expo-poster.jpg", title: "RentNav at ICT Expo 2025", meta: "Research poster", alt: "RentNav research poster presented at the 19th ICT Expo 2025" },
  { id: "royalton", cat: "ui", file: "royalton-suites-web.jpg", title: "Royalton Suites", meta: "Listing page layouts", alt: "Royalton luxury suite listing page layouts" },
].map((item) => ({
  ...item,
  thumb: `/assets/thumb/${item.file}`,
  full: `/assets/full/${item.file}`,
}));

export const EDUCATION = [
  { term: "BS Information Technology", detail: "STI West Negros University · Graduated July 2025" },
  { term: "Contact Center Services NC II", detail: "TESDA · AMEFIL Training and Skill Development Institute" },
  { term: "RentNav — Capstone Project", detail: "UI/UX Designer. Wireframes, mobile interfaces and interactive prototypes in Figma." },
  { term: "Explore DSB — Tourism Website Prototype", detail: "Website UI prototype in Figma focused on local tourism and clear navigation." },
];

export const SNAPS = [
  { id: "portrait-01", alt: "Victoria Sumilhig at a hilltop viewpoint overlooking Bohol's Chocolate Hills" },
  { id: "portrait-02", alt: "Victoria Sumilhig walking along a viewpoint railing overlooking the Chocolate Hills" },
  { id: "portrait-03", alt: "Victoria Sumilhig walking across a red truss bridge" },
].map((snap) => ({
  ...snap,
  thumb: `/assets/thumb/${snap.id}.jpg`,
  full: `/assets/full/${snap.id}.jpg`,
  title: "Victoria Sumilhig",
  meta: "Personal photo",
}));

export const ROLES = [
  {
    when: "Aug 2024 – Aug 2026",
    title: "Senior Layout Artist",
    org: "PrintWorx Advertising",
    bullets: [
      "Created print-ready designs and layouts for tarpaulins, banners, posters, T-shirts, IDs, stickers and other advertising materials.",
      "Developed designs from client requirements, references and brand guidelines, through revisions to final adjustments.",
      "Prepared files to specific dimensions, bleeds and printing specifications for accurate production.",
      "Assisted with printing and production — sublimation, large-format printing, customized products and quality checking.",
    ],
  },
  {
    when: "July 2025",
    title: "English Instructor",
    tag: "Part-time",
    org: "Speaking On Language Center, Inc.",
    bullets: [
      "Conducted basic English lessons for Korean students through structured activities and interactive learning games.",
      "Prepared lessons around each student’s learning needs and communication level.",
    ],
  },
  {
    when: "Mar – Jun 2025",
    title: "Layout & Digital Design Intern",
    org: "DemPrints Ads and Services",
    bullets: [
      "Assisted in producing layout designs for marketing and printing materials.",
      "Contributed to digital content preparation for campaigns.",
      "Collaborated on creative projects for internal and client-based designs.",
    ],
  },
  {
    when: "Apr – Jun 2024",
    title: "Instagram Feed Advertiser",
    tag: "Freelance",
    org: "Gym Fitness & Solar Panel",
    bullets: [
      "Designed and scheduled promotional Instagram content around campaign goals.",
      "Focused on visual storytelling, consistent branding and audience-focused content.",
    ],
  },
  {
    when: "Ongoing",
    title: "Executive Assistant & Graphic Artist",
    tag: "Part-time freelance",
    org: "Cosno Trade",
    bullets: [
      "Assisted with administrative and day-to-day business tasks — organising information, preparing documents and coordinating work requirements.",
      "Created graphic designs and promotional materials based on business and client needs.",
      "Prepared and organised digital files, reports and business documents using Microsoft Office and design tools.",
    ],
  },
  {
    when: "Freelance",
    title: "Real Estate Listing Agent",
    org: "Independent",
    bullets: [
      "Gathered accurate property information directly from sellers and owners — pricing, location and amenities.",
      "Connected interested clients with property owners to assist with inquiries and transactions.",
      "Maintained organised and up-to-date property listing records.",
    ],
  },
];

export const TOOLKIT = [
  { title: "Graphic design & layout", body: "Adobe Photoshop, Adobe Illustrator, CorelDRAW, Affinity Designer, Canva" },
  { title: "UI/UX & prototyping", body: "Figma, Canva" },
  { title: "Video editing", body: "CapCut, Filmora, DaVinci Resolve" },
  { title: "Productivity & admin", body: "Microsoft Word, Excel, PowerPoint" },
  { title: "Also", body: "Print production, social media content, photo editing, branding, administrative support, client coordination", wide: true },
];

export const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=victoriasumilhig1@gmail.com";

export const CONTACT = [
  { label: "Email", value: "victoriasumilhig1@gmail.com", href: GMAIL_COMPOSE_URL },
  { label: "Phone", value: "0961 906 1430", href: "tel:+639619061430" },
  { label: "Based in", value: "Bacolod City, Philippines" },
];

export const RESUME_URL = "/ba51c0edf4c81c8c9577257c790f77d7.pdf";

export const SOCIALS = [
  { label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/victoria-sumilhig-79b3ba3b7/", icon: "linkedin" },
  { label: "Portfolio", value: "Canva Site", href: "https://victoriasumilhigportfolio.my.canva.site/", icon: "portfolio" },
  { label: "Gmail", value: "victoriasumilhig1@gmail.com", href: GMAIL_COMPOSE_URL, icon: "mail" },
];
