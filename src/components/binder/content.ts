import { PHOTOS, type Photo } from "./photos";

export type Press = {
  outlet: string;
  headline: string;
  date: string;
  url: string;
  quote?: string;
};

export type Section = {
  heading: string;
  meta?: string;
  body?: string;
  items?: string[];
  photos?: Photo[];
  press?: Press[];
};

export type Tab = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  intro?: string;
  photos?: Photo[];
  spine: string;
  sections: Section[];
};

export const ROLES = [
  "Student Founder",
  "AI Educator",
  "Wellbeing Advocate",
  "Researcher",
  "Dancer",
];

export const HERO_TAGLINE = "Building human potential in an AI-driven world.";

export const TICKER_ITEMS = [
  "AI EDUCATION",
  "DIGITAL WELLBEING",
  "RESEARCH",
  "FINANCIAL LITERACY",
  "DANCE",
  "ENTREPRENEURSHIP",
];

export const STATS = [
  { value: "11+", label: "Leadership roles" },
  { value: "500+", label: "Students reached, LivLit" },
  { value: "100+", label: "Creative commissions" },
  { value: "3", label: "Ventures founded" },
];

export const TABS: Tab[] = [
  {
    id: "core",
    label: "About",
    kicker: "Hey, I'm Janya",
    title: "How I stay human while building with AI.",
    intro:
      "I'm a student founder, researcher, and creative leader exploring one question: how can young people stay human, capable, and emotionally grounded in a world increasingly shaped by artificial intelligence?",
    photos: PHOTOS.about,
    spine: "oklch(0.92 0.022 8)",
    sections: [
      {
        heading: "What I'm building toward",
        body: "Through initiatives in digital wellbeing, responsible AI, financial literacy, research, dance, and entrepreneurship, I build projects that help people feel more prepared for the future.",
      },
      {
        heading: "At a glance",
        items: [
          "School — Bangkok Patana School",
          "Programme — IB Diploma",
          "Focus — AI · Wellbeing · Education",
          "Based in — Bangkok, Thailand",
        ],
      },
      {
        heading: "Education",
        meta: "Bangkok Patana School",
        items: [
          "IB Diploma",
          "HL Biology · HL Business · HL Economics",
          "SL Math AA · SL English · SL Thai",
        ],
      },
      {
        heading: "Skills",
        items: [
          "AI education & prompt engineering",
          "Curriculum design & workshop facilitation",
          "Research writing · Public speaking",
          "Figma · Framer · UI/UX · Illustration",
          "Entrepreneurship · Client pitching",
          "Dance choreography · Financial literacy",
        ],
      },
      {
        heading: "Media & validation",
        body: "Featured in Bangkok Post · The Nation Thailand · MASALA Magazine · YPO · Gurgaon School · Stanford Professor · Alibaba Exec · Woody Talks · CREST Gold Report.",
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    kicker: "Work",
    title: "A deck of ventures.",
    intro: "Each card is a project I've built — the story, my role, and the impact.",
    spine: "oklch(0.93 0.018 8)",
    sections: [
      {
        heading: "LivLit",
        meta: "Founder & Mentor",
        photos: PHOTOS.livlit,
        press: [
          {
            outlet: "The Nation Thailand",
            headline:
              "17-Year-Old Bangkok Student Launches LivLit to Help Young People Build the Human Skills AI Cannot Replace",
            date: "August 20, 2026",
            url: "https://www.nationthailand.com/blogs/business/tech/40069981",
            quote: "We are still preparing students for a world that no longer exists.",
          },
        ],
        body: "I started LivLit to help middle and high school students become emotionally literate, digitally balanced, and prepared to use AI as an amplifier rather than a replacement.",
        items: [
          "500+ students reached",
          "2,000+ Instagram community",
          "Workshops in India & Bangkok",
          "CREST Gold · YPO recommendation · MASALA, The Nation, Bangkok Post",
        ],
      },
      {
        heading: "Tokado",
        meta: "Creator & Co-Founder",
        photos: PHOTOS.tokado,
        body: "A platform I'm building that helps companies reduce AI operating costs by routing prompts to the most efficient large language model. Currently integrating Alibaba's LLM library.",
        items: ["Built website & brand", "Leads client pitches", "Whitepaper in progress"],
      },
      {
        heading: "Irreplaceable Institute",
        meta: "Certified Facilitator",
        photos: PHOTOS.irreplaceable,
        body: "I help design and facilitate after-school workshops for middle school students focused on reflection, identity, wellbeing, and becoming irreplaceable.",
        items: ["200+ students reached", "Weekly workshop curriculum", "Certified facilitator"],
      },
      {
        heading: "Super Satang",
        meta: "Co-Founder & President",
        body: "A newsletter, podcast, weekly school programs, and a financial literacy card game I co-run — making money education accessible and engaging for youth.",
        items: [
          "Teach for Thailand partnership",
          "Card game in classrooms",
          "Weekly school programs",
          "MAIA Special Commendation",
        ],
      },
      {
        heading: "Stanford Moonshot",
        meta: "Co-Founder & Managing Director, Thailand",
        body: "I guide students through problem identification, prototyping, brainstorming, and pitching ambitious solutions to real-world challenges.",
        items: ["Brought program to Thailand", "Multi-school cohorts", "Mentors student founders"],
      },
      {
        heading: "Protect Your Think Tank",
        meta: "Founder & Co-Leader",
        body: "A student-led initiative I founded promoting helmet safety, including 400+ surveys, branding, and a QR-coded helmet rental concept serving 1,000+ students.",
        items: ["400+ safety surveys", "QR rental concept", "Serving 1,000+ students"],
      },
    ],
  },
  {
    id: "experiences",
    label: "Experiences",
    kicker: "Record",
    title: "Leadership, honors, dance and everything beyond the classroom.",
    intro: "The roles I've stepped into, the awards I've earned, and the stages I've danced on.",
    spine: "oklch(0.94 0.014 8)",
    sections: [
      {
        heading: "Leadership",
        meta: "A timeline of stepping up",
        items: [
          "Founder & Mentor — LivLit",
          "Creator & Co-Founder — Tokado",
          "Managing Director, Thailand — Stanford Moonshot Innovation Incubator",
          "Co-Founder & President — Super Satang",
          "Certified Facilitator — Irreplaceable Institute",
          "School Wellbeing Ambassador — The Hub",
          "House Captain — Samui House",
          "Vice Captain — Varsity Dance Team",
          "Head of IT — CORE Annual Magazine",
          "Senior Community Volunteer — Sikh Temple",
          "Managing Director — Krishelin Chilli Oil",
        ],
      },
      {
        heading: "Awards & Honors",
        meta: "A wall of glowing moments",
        items: [
          "Duke of Edinburgh Bronze — International · Grade 9",
          "John Locke Essay Competition — High Commendation · Psychology",
          "MAIA Special Commendation — Best Student-Led Project · Super Satang",
          "CREST Gold Award — LivLit · Science & Research",
          "Motivated & Engaged in Economics — Grade 10",
          "Independent Learning in ICT — Grade 10",
          "IB Blues / Varsity Sports — Dance Achievement",
          "ATOD National Gold — Dance · 2024 · 2025 · 2026",
          "CSTD 1st Place — Open Hip-Hop Group · 2025",
        ],
      },
      {
        heading: "Internships & Service",
        meta: "Beyond the classroom",
        items: [
          "DeeMoney — UI/UX Intern: user research, wireframes, Figma prototypes",
          "Higher Growth, Bangkok — Summer Intern, June 2026: business growth & startup operations",
          "Krishelin Chilli Oil — Managing Director: operations, sales, marketing, social",
          "Sikh Temple — Senior Community Volunteer: Langar, events, cultural materials",
        ],
      },
      {
        heading: "Dance",
        meta: "Bollywood · Latin · Hip-Hop",
        photos: PHOTOS.dance,
        body: "I'm Vice Captain of the Varsity Dance Team — choreography, mentoring, and a stage full of medals. A team of 15.",
        items: [
          "ATOD National Gold · 2024 · 2025 · 2026",
          "CSTD 1st Place — Open Hip-Hop Group · 2025",
        ],
      },
      {
        heading: "Creative Work",
        meta: "Made with hands and pixels",
        items: [
          "Brown Girl's Brush — Founder · 100+ commissions in digital art & graphic design",
          "Follow the Coin — chapter illustrations for the book by Kriahaan Phlaphongphanich",
          "Visual Identity Work — brand systems for LivLit, Super Satang, Protect Your Think Tank",
          "Instagram Studio — content & storytelling for digital wellbeing and AI literacy",
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Research",
    kicker: "Papers",
    title: "Papers, questions, curiosities.",
    intro: "The questions I've chased far enough to write down.",
    spine: "oklch(0.95 0.012 8)",
    sections: [
      {
        heading: "Happiness Index for Thailand",
        meta: "Published",
        body: "My research paper examining happiness indices across Asian countries, with a focus on Thailand. Published in the International Journal of Social Science & Economic Research. Mentor: Dr. Nandini Sood.",
      },
      {
        heading: "Tokado: AI Cost Optimization",
        meta: "In progress · Whitepaper 2026",
        body: "I'm investigating LLM efficiency and the business applications of routing-based AI cost optimization.",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    kicker: "The final card",
    title: "Let's build what comes next.",
    intro: "For collaborations, mentorship, press, or just a conversation — my door is open.",
    spine: "oklch(0.96 0.01 8)",
    sections: [{ heading: "Reach out", items: ["Email", "Instagram", "LinkedIn", "Resume"] }],
  },
];
