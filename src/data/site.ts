// All page content lives here. A value of `null` means "not provided yet" and
// renders as a visible TODO marker. Never fill these with guesses.

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
  /** Screenshot files in /public/images, or placeholder labels when not yet supplied. */
  images: { src: string; alt: string }[] | { placeholder: string }[];
}

export interface AlsoBuilt {
  id: string;
  title: string;
  status: Maybe<string>;
  summary: string;
  facts: Fact[];
  link: Maybe<{ href: string; label: string }>;
}

export interface NeedChip {
  id: string;
  label: string;
  pitch: string;
  /** ids of the case studies (or also-built cards) this need points to. */
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

/** Afritam: shown as a "Currently" strip near the top. */
export const currently = {
  text: "Currently building Afritam, a software consultancy.",
  link: null as Maybe<{ href: string; label: string }>, // TODO: Afritam URL
  description: null as Maybe<string>, // TODO: one-line description of what Afritam does
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
      "A responsive school website where teachers upload and share resources.",
    targets: ["pearlworth"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "farmarq",
    kicker: "Livestock records",
    title: "Farmarq",
    status: null,
    summary:
      "Livestock records for Uganda and beyond. A workspace for each species, built around what the farmer does: cattle and goat records, the work that is due and the money, in one place.",
    points: [
      "Works offline on the farm, on Android, iPhone and computer.",
      "Choose your activities and the workspace shapes itself around them.",
      "Free during beta.",
    ],
    facts: [
      { label: "My role", value: null }, // TODO
      { label: "Stack", value: null }, // TODO
      { label: "Outcome", value: null }, // TODO
    ],
    link: { href: "https://farmarq.com", label: "Visit farmarq.com" },
    images: [
      { src: "/images/farmarq.webp", alt: "Farmarq home page on a phone" },
    ],
  },
  {
    id: "kampala-dermatology",
    kicker: "Clinic website",
    title: "Kampala Dermatology",
    status: null,
    summary:
      "The website for a dermatologist-led clinic treating skin, hair and nails. It is built around one action: book a consultation.",
    points: [
      "A clear “Book a Consultation” button and a booking tab that follows the visitor.",
      "WhatsApp chat one tap away, the way patients already reach clinics.",
      "A plain-language opening line: a dermatologist-led clinic for skin, hair and nails.",
    ],
    facts: [
      { label: "My role", value: null }, // TODO
      { label: "Stack", value: null }, // TODO
      { label: "Outcome", value: null }, // TODO
    ],
    link: {
      href: "https://kampaladermatology.com",
      label: "Visit kampaladermatology.com",
    },
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
      "A Telegram bot that handles the first conversation with a property client, so the agent only steps in when there is a real viewing to confirm.",
    points: [
      "Understands what the client wants, whether to rent or buy, and how many bedrooms and what budget.",
      "Follows the client when their needs change mid-conversation.",
      "Matches a listing and books the viewing, which the agent confirms.",
      "Says so when a detail is not in the listing, instead of inventing an answer.",
    ],
    facts: [
      { label: "Reached through", value: "A Telegram bot" },
      { label: "Stack", value: null }, // TODO: AI model and back end
      { label: "Outcome", value: null }, // TODO
    ],
    link: null,
    images: [
      {
        src: "/images/real-estate-ai.webp",
        alt: "Telegram chat with the Real Estate AI Assistant matching a listing and booking a viewing",
      },
    ],
  },
  {
    id: "akalimo",
    kicker: "Marketplace platform",
    title: "Akalimo",
    status: null,
    summary:
      "A service marketplace that connects clients with skilled tradespeople, suppliers and training workshops. Post a job, compare quotes, pay through escrow and watch the work arrive.",
    points: [
      "Clients post a job, tradespeople quote, and payment is held in escrow until the work is approved.",
      "Live map tracking shows the tradesperson on the way.",
      "Identity verification for the people who earn on the platform.",
      "An apprenticeship programme with supervisors, reports and grading.",
      "Urgent updates over WhatsApp, records by email.",
    ],
    facts: [
      {
        label: "Stack",
        value: "React, TypeScript, Tailwind, Supabase, Mapbox",
      },
      { label: "Access", value: "Private. Screenshots only." },
      { label: "Outcome", value: null }, // TODO
    ],
    link: null,
    images: [
      { placeholder: "Post a job" },
      { placeholder: "Compare quotes" },
      { placeholder: "Live tracking" },
    ],
  },
];

export const alsoBuilt: AlsoBuilt[] = [
  {
    id: "bmk",
    title: "BMK Farm Management System",
    status: "Ongoing",
    summary:
      "A farm management system built for Bart Magunda Katureebe, former Chief Justice of Uganda. It tracks animal health, history and productivity, with tiered access for administrators, managers and veterinarians.",
    facts: [
      { label: "Stack", value: "PHP, MySQL" },
      { label: "Outcome", value: null }, // TODO
    ],
    link: null,
  },
  {
    id: "pearlworth",
    title: "Pearlworth Foundation School",
    status: null,
    summary:
      "The school's website, with teacher uploads and resource sharing. Built responsive so it works on any device, and kept updated after launch.",
    facts: [
      { label: "Stack", value: "HTML, CSS, JavaScript, PHP" },
      { label: "Outcome", value: null }, // TODO
    ],
    link: {
      href: "https://pearlworthfoundationschool.com",
      label: "Visit the site",
    },
  },
];

export const process = [
  {
    title: "Listen",
    body: "We start with the problem and the people who will use the system.",
  },
  {
    title: "Scope",
    body: "A small first version, agreed in plain language before any code.",
  },
  {
    title: "Build",
    body: "Secure by default, with the right access for the right people.",
  },
  {
    title: "Support",
    body: "Updates, fixes and maintenance after launch.",
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
    when: "Jun to Aug 2025",
  },
];

export const skills = [
  "AI workflow automation",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Firebase",
  "Docker",
  "CI/CD",
  "Kubernetes",
  "DigitalOcean",
  "Git",
];
