// All page content lives here. A value of `null` means "not provided yet" and
// renders as a visible marker. Never fill these with guesses.

export type Maybe<T> = T | null;

export interface Fact {
  label: string;
  value: Maybe<string>;
}

export interface CaseStudy {
  id: string;
  kicker: string;
  title: string;
  status: Maybe<string>;
  /** Work done for a client, as opposed to a product of my own. */
  client?: boolean;
  summary: string;
  points: string[];
  facts: Fact[];
  link: Maybe<{ href: string; label: string }>;
  /** Text shown in the little address bar of the laptop mockup. */
  urlLabel: string;
  /** "phone": mobile screenshots morph into a laptop scene. "desktop": a desktop screenshot fills the laptop. */
  device: "phone" | "desktop";
  /** Real screenshots in /public/images, or placeholder labels when not yet supplied. */
  images: { src: string; alt: string; tone?: string; aspect?: string }[] | { placeholder: string }[];
  /** For "desktop" projects: the phone view shown while the device is a phone. */
  mobile?: { src: string; alt: string; tone?: string; aspect?: string }[] | { placeholder: string }[];
}

export interface NeedChip {
  id: string;
  label: string;
  pitch: string;
  /** ids of the projects this need points to. The first one sets the hero's brand colour. */
  targets: string[];
}

export const profile = {
  name: "Chris Yiga Walter",
  headline: "Software that does the busywork.",
  subline:
    "I help businesses find the work that eats their time and their customers, then fix it with websites, software and AI automation that handles the follow-ups.",
  availability: "Available for new projects",
  location: "Entebbe, Uganda",
  email: "yigachristian@gmail.com",
  phone: "+256 746 707012",
  whatsapp:
    "https://wa.me/256746707012?text=" +
    encodeURIComponent("Hi Chris, I'd like to talk about a project."),
  github: "https://github.com/aldanmali21",
};

/** Social links. An account only shows on the page once its href is set. */
export const social: { label: string; href: Maybe<string> }[] = [
  { label: "LinkedIn", href: null }, // TODO: LinkedIn URL
  { label: "X", href: null }, // TODO: X URL
  { label: "Instagram", href: null }, // TODO: Instagram URL
  { label: "GitHub", href: profile.github },
];

/** Afritam: shown as a "Currently" line in the hero. */
export const currently = {
  before: "Right now I'm building",
  name: "Afritam website",
  after: ", a software consultancy.",
  /** The name links to its project in the portfolio, not to an outside site. */
  href: "#afritam",
};

export const needs: NeedChip[] = [
  {
    id: "conversations",
    label: "Automate conversations and bookings",
    pitch:
      "A Telegram assistant that qualifies buyers and renters, matches listings and books viewings for the agent to confirm.",
    targets: ["real-estate-ai"],
  },
  {
    id: "operations",
    label: "Run records and operations",
    pitch:
      "Livestock records, due work and money in one place, plus a farm management system built for a client.",
    targets: ["farmarq", "bmk"],
  },
  {
    id: "website",
    label: "Get a website that books clients",
    pitch:
      "A clinic website built around one action: booking a consultation, with WhatsApp a tap away.",
    targets: ["kampala-dermatology"],
  },
  {
    id: "platform",
    label: "Build a platform or marketplace",
    pitch:
      "A multi-sided marketplace with quotes, escrow, live tracking and verification.",
    targets: ["akalimo"],
  },
  {
    id: "portal",
    label: "Launch a portal or school site",
    pitch:
      "A school website where teachers upload and share resources.",
    targets: ["pearlworth"],
  },
];

export const projects: CaseStudy[] = [
  {
    id: "farmarq",
    kicker: "Livestock records",
    title: "Farmarq",
    status: null,
    summary:
      "Livestock record-keeping for farms in Uganda and beyond. Cattle and goats each get a workspace for records, due work and money. Free during the beta.",
    points: [
      "Pick the activities you run, like milk, meat or breeding.",
      "A farm overview shows profit across species, with each cost counted once.",
      "Invite managers, workers and vets, and see who recorded each update.",
      "Entries save offline and sync when you reconnect. Android app coming soon.",
    ],
    facts: [
      { label: "Role", value: "Lead developer" },
      { label: "Stack", value: "Next.js, Supabase, Cloudinary, Vercel (hosting), GitHub (version control)" },
    ],
    link: { href: "https://farmarq.com", label: "farmarq.com" },
    urlLabel: "farmarq.com",
    device: "desktop",
    images: [{ src: "/images/farmarq-desktop.webp", alt: "Farmarq home page on a computer" }],
    mobile: [
      { src: "/images/farmarq.webp", alt: "Farmarq home page on a phone", tone: "#dec9bb", aspect: "640 / 1189" },
    ],
  },
  {
    id: "kampala-dermatology",
    kicker: "Clinic website",
    title: "Kampala Dermatology",
    status: null,
    client: true,
    summary:
      "The website for a dermatologist-led clinic in Bugolobi, Kampala, that treats skin, hair and nails.",
    points: [
      "One main action: book a consultation. The button is in the hero and a booking tab sits on the screen edge.",
      "Services and conditions are laid out for patients, from acne and hair loss to eczema and psoriasis.",
      "Skincare kits are priced in shillings and ordered on WhatsApp.",
      "Shows the clinic's address, opening hours and a skin-care blog.",
    ],
    facts: [
      { label: "Role", value: "Lead developer" },
      { label: "Stack", value: "Next.js, Vercel (hosting)" },
    ],
    link: { href: "https://kampaladermatology.com", label: "kampaladermatology.com" },
    urlLabel: "kampaladermatology.com",
    device: "desktop",
    images: [{ src: "/images/kampala-dermatology-desktop.webp", alt: "Kampala Dermatology home page on a computer" }],
    mobile: [
      {
        src: "/images/kampala-dermatology.webp",
        alt: "Kampala Dermatology home page on a phone",
        tone: "#e3e9e6",
        aspect: "640 / 1189",
      },
    ],
  },
  {
    id: "real-estate-ai",
    kicker: "AI automation",
    title: "Real Estate AI Assistant",
    status: "In progress",
    client: true,
    summary:
      "A Telegram bot that talks to property clients first, so the agent only steps in when there is a viewing to confirm.",
    points: [
      "Asks what the client wants (rent or buy, bedrooms, budget) and keeps up when they change their mind.",
      "Matches a listing and books the viewing for the agent to confirm.",
      "Says so when a detail is missing from the listing.",
    ],
    facts: [
      { label: "Role", value: "Lead developer" },
      {
        label: "Stack",
        value: "Next.js, Trigger.dev (hosting), Google Calendar (viewings and leads), Telegram bot (AI conversations)",
      },
    ],
    link: null,
    urlLabel: "Telegram bot: Ctrap",
    device: "desktop",
    images: [
      { src: "/images/real-estate-desktop.webp", alt: "Telegram on a computer: the Real Estate AI Assistant chatting with a client" },
    ],
    mobile: [
      {
        src: "/images/real-estate-mobile.webp",
        alt: "Telegram chat with the Real Estate AI Assistant matching a listing and booking a viewing",
        tone: "#0b0b0b",
        aspect: "540 / 1204",
      },
    ],
  },
  {
    id: "akalimo",
    kicker: "Marketplace",
    title: "Akalimo",
    status: "In progress",
    client: true,
    summary:
      "A marketplace that connects clients with tradespeople. A client posts a job, tradespeople send quotes, and payment sits in escrow until the work is approved.",
    points: [
      "Live map tracking of the tradesperson on the way.",
      "Identity checks for people who get paid through the platform.",
      "An apprenticeship programme with supervisors and graded reports.",
      "Urgent updates go to WhatsApp, records to email.",
    ],
    facts: [
      { label: "Role", value: "Lead developer" },
      { label: "Stack", value: "React, TypeScript, Node.js, Supabase (database), Mapbox, Cloudinary" },
      { label: "Access", value: "Private, screenshots only" },
    ],
    link: null,
    urlLabel: "private project",
    device: "desktop",
    images: [{ src: "/images/akalimo-desktop.webp", alt: "Akalimo home page on a computer: a live job with quotes to compare" }],
    mobile: [
      {
        src: "/images/akalimo-mobile.webp",
        alt: "Akalimo home page on a phone",
        tone: "#fdfbff",
        aspect: "251 / 562",
      },
    ],
  },
  {
    id: "afritam",
    kicker: "Software consultancy website",
    title: "Afritam",
    status: "In progress",
    client: true,
    summary:
      "The website for a software consultancy that provides software services, including AI services and software development. It is not live yet.",
    points: [
      "Presents the consultancy's software development and AI services.",
      "Works on a phone and a computer.",
    ],
    facts: [
      { label: "Role", value: "Lead developer" },
      { label: "Stack", value: "Next.js" },
    ],
    link: null,
    urlLabel: "not live yet",
    device: "desktop",
    images: [{ src: "/images/afritam-desktop.webp", alt: "Afritam home page on a computer: consulting, IT, research and capacity building services" }],
    mobile: [
      {
        src: "/images/afritam-mobile.webp",
        alt: "Afritam Executive Academy page on a phone",
        tone: "#ffffff",
        aspect: "252 / 560",
      },
    ],
  },
];

/** Shown behind the "Other projects" button instead of in the main slider. */
export const otherProjects: CaseStudy[] = [
  {
    id: "pearlworth",
    kicker: "School website",
    title: "Pearlworth Foundation School",
    status: null,
    client: true,
    summary: "The website for Pearlworth Foundation School.",
    points: [
      "Teachers upload resources and share them with each other.",
      "Works on any device.",
      "Gets regular updates for performance and security.",
    ],
    facts: [
      { label: "Role", value: "Lead developer" },
      { label: "Stack", value: "HTML, CSS, JavaScript, PHP, InfinityFree (hosting)" },
    ],
    link: {
      href: "https://pearlworthfoundationschool.com",
      label: "pearlworthfoundationschool.com",
    },
    urlLabel: "pearlworthfoundationschool.com",
    device: "desktop",
    images: [{ placeholder: "Website screenshot" }],
    mobile: [{ placeholder: "Mobile view" }],
  },
  {
    id: "bmk",
    kicker: "Farm management",
    title: "BMK Farm Management System",
    status: "Ongoing",
    client: true,
    summary:
      "A farm management system for Bart Magunda Katureebe, former Chief Justice of Uganda.",
    points: [
      "Tracks animal health, history and productivity.",
      "Separate access for administrators, managers and veterinarians.",
      "Works on a phone for staff out in the field.",
    ],
    facts: [
      { label: "Role", value: "Lead developer" },
      { label: "Stack", value: "PHP, MySQL, Cloudinary" },
      { label: "Client", value: "Bart Magunda Katureebe" },
    ],
    link: null,
    urlLabel: "private client system",
    device: "desktop",
    images: [{ src: "/images/bmk-desktop.webp", alt: "BMK Farm Management System dashboard on a computer" }],
    mobile: [
      {
        src: "/images/bmk-mobile.webp",
        alt: "BMK Farm Management System dashboard on a phone",
        tone: "#f9fafb",
        aspect: "250 / 560",
      },
    ],
  },
];

export const experience = [
  {
    title: "BSc Computer Science",
    place: "Mbarara University of Science and Technology",
    when: "2023 to present",
  },
  {
    title: "IT Support and Networking Intern",
    place: "Uganda Virus Research Institute",
    when: "June to August 2025",
  },
];

export const stack = [
  {
    label: "AI tools",
    items: "Claude Code, ChatGPT Codex, open-source models through Command Code",
  },
  { label: "Languages", items: "JavaScript, TypeScript, Python, PHP" },
  {
    label: "Frameworks",
    items: "Next.js, React, React Native, Astro, Node.js, Tailwind",
  },
  {
    label: "Back end and data",
    items: "Supabase, Convex, Firebase, PostgreSQL, MySQL, MongoDB",
  },
  { label: "Shipping", items: "Git, Docker, CI/CD, Kubernetes, DigitalOcean" },
  { label: "Automation", items: "AI workflow automation" },
];
