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
  summary: string;
  points: string[];
  facts: Fact[];
  link: Maybe<{ href: string; label: string }>;
  /** Text shown in the little address bar of the laptop mockup. */
  urlLabel: string;
  /** "phone": mobile screenshots morph into a laptop scene. "desktop": a desktop screenshot fills the laptop. */
  device: "phone" | "desktop";
  /** Real screenshots in /public/images, or placeholder labels when not yet supplied. */
  images: { src: string; alt: string }[] | { placeholder: string }[];
}

export interface NeedChip {
  id: string;
  label: string;
  pitch: string;
  /** ids of the projects this need points to. The first one sets the hero's brand colour. */
  targets: string[];
}

export const profile = {
  name: "Chris Yiga",
  headline: "Software that does the busywork.",
  subline:
    "I'm Chris Yiga, a developer who automates workflows with AI and builds secure web and mobile systems for businesses.",
  availability: "Available for new projects",
  location: "Entebbe, Uganda",
  email: "yigachristian@gmail.com",
  phone: "+256 746 707012",
  whatsapp:
    "https://wa.me/256746707012?text=" +
    encodeURIComponent("Hi Chris, I'd like to talk about a project."),
  github: "https://github.com/aldanmali21",
};

/** Afritam: shown as a "Currently" line in the hero. */
export const currently = {
  text: "Right now I'm building Afritam, a software consultancy.",
  link: null as Maybe<{ href: string; label: string }>, // TODO: Afritam URL
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
      "Record-keeping for livestock farmers in Uganda. Each species gets its own workspace for records, work that is due, and money.",
    points: [
      "Works offline on the farm, on Android, iPhone and computer.",
      "Free during beta.",
    ],
    facts: [
      { label: "Role", value: null }, // TODO
      { label: "Stack", value: null }, // TODO
      { label: "Result", value: null }, // TODO
    ],
    link: { href: "https://farmarq.com", label: "farmarq.com" },
    urlLabel: "farmarq.com",
    device: "phone",
    images: [{ src: "/images/farmarq.webp", alt: "Farmarq home page on a phone" }],
  },
  {
    id: "kampala-dermatology",
    kicker: "Clinic website",
    title: "Kampala Dermatology",
    status: null,
    summary:
      "The website for a dermatologist-led clinic that treats skin, hair and nails.",
    points: [
      "One main action: book a consultation. The button is in the hero and a booking tab sits on the screen edge.",
      "WhatsApp chat is a tap away.",
    ],
    facts: [
      { label: "Role", value: null }, // TODO
      { label: "Stack", value: null }, // TODO
      { label: "Result", value: null }, // TODO
    ],
    link: { href: "https://kampaladermatology.com", label: "kampaladermatology.com" },
    urlLabel: "kampaladermatology.com",
    device: "phone",
    images: [
      {
        src: "/images/kampala-dermatology.webp",
        alt: "Kampala Dermatology home page on a phone",
      },
    ],
  },
  {
    id: "real-estate-ai",
    kicker: "AI automation",
    title: "Real Estate AI Assistant",
    status: "In progress",
    summary:
      "A Telegram bot that talks to property clients first, so the agent only steps in when there is a viewing to confirm.",
    points: [
      "Asks what the client wants (rent or buy, bedrooms, budget) and keeps up when they change their mind.",
      "Matches a listing and books the viewing for the agent to confirm.",
      "Says when a detail is not in the listing instead of guessing.",
    ],
    facts: [
      { label: "Channel", value: "Telegram bot" },
      { label: "Stack", value: null }, // TODO: AI model and back end
      { label: "Result", value: null }, // TODO
    ],
    link: null,
    urlLabel: "Telegram bot: Ctrap",
    device: "phone",
    images: [
      {
        src: "/images/real-estate-ai.webp",
        alt: "Telegram chat with the Real Estate AI Assistant matching a listing and booking a viewing",
      },
    ],
  },
  {
    id: "akalimo",
    kicker: "Marketplace",
    title: "Akalimo",
    status: null,
    summary:
      "A marketplace that connects clients with tradespeople. A client posts a job, tradespeople send quotes, and payment sits in escrow until the work is approved.",
    points: [
      "Live map tracking of the tradesperson on the way.",
      "Identity checks for people who get paid through the platform.",
      "An apprenticeship programme with supervisors and graded reports.",
      "Urgent updates go to WhatsApp, records to email.",
    ],
    facts: [
      { label: "Stack", value: "React, TypeScript, Supabase, Mapbox" },
      { label: "Access", value: "Private, screenshots only" },
      { label: "Result", value: null }, // TODO
    ],
    link: null,
    urlLabel: "private project",
    device: "phone",
    images: [
      { placeholder: "Post a job" },
      { placeholder: "Compare quotes" },
      { placeholder: "Live tracking" },
    ],
  },
  {
    id: "bmk",
    kicker: "Farm management",
    title: "BMK Farm Management System",
    status: "Ongoing",
    summary:
      "A farm management system for Bart Magunda Katureebe, former Chief Justice of Uganda.",
    points: [
      "Tracks animal health, history and productivity.",
      "Separate access for administrators, managers and veterinarians.",
      "Works on a phone for staff out in the field.",
    ],
    facts: [
      { label: "Stack", value: "PHP, MySQL" },
      { label: "Client", value: "Bart Magunda Katureebe" },
      { label: "Result", value: null }, // TODO
    ],
    link: null,
    urlLabel: "private client system",
    device: "desktop",
    images: [{ placeholder: "Dashboard screenshot" }],
  },
  {
    id: "pearlworth",
    kicker: "School website",
    title: "Pearlworth Foundation School",
    status: null,
    summary: "The website for Pearlworth Foundation School.",
    points: [
      "Teachers upload resources and share them with each other.",
      "Works on any device.",
      "Kept up with regular updates for performance and security.",
    ],
    facts: [
      { label: "Stack", value: "HTML, CSS, JavaScript, PHP" },
      { label: "Role", value: "Lead developer" },
      { label: "Result", value: null }, // TODO
    ],
    link: {
      href: "https://pearlworthfoundationschool.com",
      label: "pearlworthfoundationschool.com",
    },
    urlLabel: "pearlworthfoundationschool.com",
    device: "desktop",
    images: [{ placeholder: "Website screenshot" }],
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
