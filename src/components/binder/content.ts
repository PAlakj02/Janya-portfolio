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
  { value: "1K+", label: "Students reached, LivLit" },
  { value: "600+", label: "Students mentored, Stanford Moonshot" },
  { value: "Top 3%", label: "John Locke Essay Prize" },
  { value: "4", label: "Ventures founded" },
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
        body: "Through initiatives in AI literacy, digital wellbeing, financial literacy, research, dance, and entrepreneurship, I build projects that help people feel more prepared for the future.",
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
        meta: "Bangkok Patana School · 2013 – Present",
        items: [
          "IB Higher Level — Economics (7) · Biology (6) · Business Management (7)",
          "IB Standard Level — Math AA (7) · English Lang & Lit (6) · Thai Lang & Culture (7)",
          "IGCSE — A*A*A*A8888B",
          "SAT — 1460 superscore (Math 780 · Reading & Writing 680)",
        ],
      },
      {
        heading: "Skills",
        items: [
          "AI & development — Claude Code, Replit, Framer, HTML & CSS",
          "Design & content — Canva, Figma, Notion, iMovie, VN Editor",
          "Marketing — Social media & digital marketing",
          "Communication — Public speaking, workshop facilitation, panel moderation",
          "Research — Economics & social science research writing",
          "Languages — English (fluent) · Thai (intermediate) · Punjabi (basic)",
        ],
      },
      {
        heading: "Media & validation",
        body: "Featured in The Nation Thailand · Bambi Magazine · TSN Talks · Bangkok Post · MASALA Magazine · Woody Talks. Recognised by YPO, the British Science Association (CREST Gold), and Noah Berkson (Guest Lecturer, Stanford).",
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
        meta: "Founder & Mentor · Mar 2025 – Present",
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
        body: "I founded LivLit, a youth AI literacy and digital wellbeing initiative, to help students stay irreplaceable in the age of AI — using AI as an amplifier rather than a replacement.",
        items: [
          "1K+ students reached through workshops in Thailand & India",
          "Keynote on AI to 400 Bangkok Patana School staff",
          "Organised Becoming Irreplaceable: Lead Well in the Age of AI with Dragonfly360 — 120+ high schoolers",
          "Speakers from Stanford, Sasin, AgentDee, TalentHero & Foundry",
          "2K+ Instagram community",
          "Featured in The Nation Thailand, Bambi Magazine & TSN Talks",
        ],
      },
      {
        heading: "Tokado",
        meta: "Co-Founder & Research Author · Aug 2025 – Present",
        photos: PHOTOS.tokado,
        body: "An LLM optimisation platform I co-founded that routes company prompts to the most efficient model, cutting AI costs by up to 65%.",
        items: [
          "Up to 65% lower AI costs",
          "5+ clients pitched & onboarded, incl. DeeMoney & AgentDee",
          "Built the company website on Framer",
          "Integrated Alibaba's LLM library",
          "Published a white paper",
        ],
      },
      {
        heading: "Irreplaceable Institute",
        meta: "Certified Facilitator & Curriculum Designer · Aug 2024 – Present",
        photos: PHOTOS.irreplaceable,
        body: "I design the curriculum for and facilitate after-school workshops for middle school students focused on reflection, identity, and wellbeing.",
        items: [
          "10+ workshops facilitated",
          "200+ students reached",
          "Designed the workshop curriculum",
          "Commended by Noah Berkson, Guest Lecturer at Stanford",
        ],
      },
      {
        heading: "Super Satang",
        meta: "Co-Founder & President · Aug 2023 – Present",
        body: "A financial literacy program I co-founded — with a newsletter, podcast, and a financial literacy card game — making money education accessible and engaging for youth.",
        items: [
          "Collaborations with Teach for Thailand & Saturday School",
          "Newsletter & podcast",
          "Financial literacy card game",
          "MAIA Special Commendation — Best Teacher, Student or Class-Led Project",
        ],
      },
      {
        heading: "Stanford Moonshot",
        meta: "Managing Director, Thailand · Aug 2024 – Present",
        body: "I lead Stanford's Moonshot Innovation Incubator in Thailand, guiding students from problem identification through prototyping to pitching ambitious solutions to real-world challenges.",
        items: [
          "600+ students guided",
          "5+ schools across Thailand",
          "Weekly coaching sessions on ideation & pitching",
        ],
      },
      {
        heading: "Protect Your Think Tank",
        meta: "Founder · Aug 2025 – Present",
        body: "A motorcycle helmet safety initiative I launched at Bangkok Patana School, serving a 1,000+ student community.",
        items: [
          "400+ surveys to map the need",
          "QR-coded helmet rental system",
          "Raised intent to wear helmets by 60%",
        ],
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
          "Co-Founder & Research Author — Tokado",
          "Co-Founder & President — Super Satang",
          "Managing Director, Thailand — Stanford Moonshot Innovation Incubator",
          "Founder — Protect Your Think Tank",
          "Vice Captain — Varsity Dance Tigers",
          "Certified Facilitator & Curriculum Designer — Irreplaceable Institute",
          "Senior Wellbeing Ambassador — Bangkok Patana School",
          "House Captain — Samui House, Bangkok Patana School",
          "Community Volunteer — Gurdwara Siri Guru Singh Sabha",
          "Head of IT — CORE Annual Magazine",
          "Managing Director — Krishelin Chilli Oil",
        ],
      },
      {
        heading: "Awards & Honors",
        meta: "A wall of glowing moments",
        items: [
          "John Locke Global Essay Prize — High Commendation · Psychology · top 3% of 63K+ entrants · 2025",
          "CREST Gold Award — British Science Association · 2026",
          "MAIA Special Commendation — Money Awareness and Inclusion Awards · Super Satang · 2024",
          "Duke of Edinburgh's Bronze Award — 2024",
          "ATOD International Gold — Dance · 2024 · 2025 · 2026",
          "CSTD 1st Place — Open Hip-Hop Group · 2025",
          "School Awards — Sports, Dance & Economics",
          "ICT Excellence Award · Cambridge ICE Award",
        ],
      },
      {
        heading: "Internships & Service",
        meta: "Beyond the classroom",
        items: [
          "AgentDee — Summer AI Intern, Business Growth & Operations · 2026: diagnosed workflow gaps and built marketing dashboards the team adopted",
          "DeeMoney — Summer UI/UX Intern · 2024: user research and a Figma prototype for a cross-border payments app",
          "Senior Wellbeing Ambassador — 10 weeks of peer counselling training; 1:1 support for 20+ students, 85% of whom reported lower stress",
          "House Captain, Samui House — leading events for 1,000+ attendees and running guided meditation sessions",
          "Gurdwara Siri Guru Singh Sabha — Community Volunteer since 2020: langar for 5,000+ people, cultural events, Kaur Circle art lessons, visual design",
          "Krishelin Chilli Oil — Managing Director: operations, sales, marketing, social",
        ],
      },
      {
        heading: "Dance",
        meta: "Bollywood · Latin · Hip-Hop",
        photos: PHOTOS.dance,
        body: "I'm Vice Captain of the Varsity Dance Tigers, performing Bollywood, Latin, and Hip-Hop and helping lead training for 10+ competitions and performances.",
        items: [
          "ATOD International Gold · 2024 · 2025 · 2026",
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
        heading: "Measuring Happiness Beyond GDP",
        meta: "Published · IJSSER · 2024 – 2026",
        body: "My research paper comparing happiness indices across five Asian countries, published in the International Journal of Social Science & Economic Research. Awarded the British Science Association CREST Gold, and commended by Dheeraj Singh (Economics Dept, Oxford) and Dr. Nandini Sud.",
      },
      {
        heading: "Tokado: AI Cost Optimization",
        meta: "Published · White paper",
        body: "As co-founder and research author of Tokado, I wrote a white paper on LLM efficiency and how routing prompts to the most efficient model can cut company AI costs by up to 65%.",
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
