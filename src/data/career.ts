export type Role = {
  organization: string;
  title: string;
  start: string;
  end: string;
  note?: string;
  highlights: string[];
  projects?: string[];
};

export const roles: Role[] = [
  {
    organization: "StrategyCorps",
    title: "Field Marketing Lead",
    start: "May 2026",
    end: "August 2026",
    highlights: [
      "Shaped the market narrative for MonetizeIQ, an AI platform for banks and credit unions",
      "Built roadshows, executive dinners, conference activations and webinar programs",
      "Created repeatable event briefs, SOPs, templates and field marketing playbooks",
      "Produced a 25th anniversary leadership interview series with 11 executives",
    ],
    projects: ["monetizeiq-product-storytelling", "monetizeiq-roadshow", "strategycorps-leadership-series"],
  },
  {
    organization: "CereCore, an HCA Healthcare company",
    title: "Marketing Communications Strategist",
    start: "July 2025",
    end: "May 2026",
    note: "CereCore is a subsidiary of HCA Healthcare.",
    highlights: [
      "Produced The CereCore Podcast, which earned a Gold Stevie Award",
      "Built the client newsletter to 3,307 recipients with a 70 percent open rate",
      "Led communications and content for Connection 2026",
      "Created 18 healthcare case studies and more than 82 published stories",
    ],
    projects: ["cerecore-podcast", "cerecore-client-newsletter", "connection-2026", "healthcare-customer-stories"],
  },
  {
    organization: "CereCore, an HCA Healthcare company",
    title: "Communications Lead",
    start: "March 2025",
    end: "July 2025",
    highlights: [
      "Ran internal communications for approximately 1,000 employees",
      "Rebuilt the SharePoint intranet experience to roughly 3,200 monthly views",
      "Founded the Marketing Advocacy Group and coached 34 employee advocates",
      "Built the enterprise communications calendar adopted across departments",
    ],
    projects: ["cerecore-internal-comms", "marketing-advocacy-group", "enterprise-communications-calendar"],
  },
  {
    organization: "HCA Healthcare",
    title: "Marketing Operations",
    start: "June 2024",
    end: "March 2025",
    highlights: [
      "Supported the enterprise rollout of the Censhare digital asset management platform",
      "Built stakeholder communication plans and Articulate training materials",
      "Supported migration of more than 5,000 digital assets",
    ],
    projects: ["hca-censhare"],
  },
  {
    organization: "Digital Motif Marketing",
    title: "Marketing Communications Manager",
    start: "January 2024",
    end: "June 2024",
    highlights: [
      "Managed strategy and content for 13 client accounts and 16 social channels",
      "Supported approximately 225,000 combined followers",
      "Directed photo and video shoots across retail, hospitality and real estate",
    ],
    projects: ["digital-motif"],
  },
  {
    organization: "CyberProtex",
    title: "Sales and Marketing Strategist",
    start: "June 2023",
    end: "January 2024",
    highlights: [
      "Built positioning and go to market content for cybersecurity training and managed services",
      "Owned lead generation through signed contracts",
      "Supported CISSP and Security Plus programs with a 96 percent exam pass rate",
    ],
    projects: ["cyberprotex"],
  },
  {
    organization: "ABH Connect",
    title: "Business Development and Marketing Manager",
    start: "November 2022",
    end: "December 2023",
    highlights: [
      "Built email marketing systems and content calendars for 16 clients",
      "Wrote monthly SEO blogs and managed social content",
      "Managed a three person team and long term client relationships",
    ],
    projects: ["abh-connect"],
  },
  {
    organization: "National Panhellenic Conference",
    title: "Creative Designer",
    start: "August 2021",
    end: "August 2022",
    highlights: [
      "Supported marketing strategies and communications",
      "Strengthened alumni and community connection through visual communication",
    ],
    projects: ["national-panhellenic-conference"],
  },
  {
    organization: "WCS Entrepreneurship and Innovation Campus",
    title: "Entrepreneurship Program",
    start: "August 2019",
    end: "August 2021",
    highlights: [
      "Founded Bliss Box, a mental health wellness care package",
      "Received funding and mentorship, distributed approximately 80 packages",
      "Spoke at Williamson County schools on mental health and entrepreneurship",
    ],
    projects: ["bliss-box"],
  },
  {
    organization: "Strive Society",
    title: "Founder and Creative Marketing Partner",
    start: "August 2017",
    end: "Present",
    highlights: [
      "Built 16 long term client partnerships across seven industries",
      "Prospected, pitched and closed every account independently",
      "Directed a team of four creatives across strategy, content, photography and video",
    ],
    projects: ["strive-society", "cyberprotex", "photography"],
  },
];

export const stats = [
  { value: "22,973", label: "podcast views across 12 episodes" },
  { value: "Gold", label: "Stevie Award for The CereCore Podcast" },
  { value: "70%", label: "average newsletter open rate" },
  { value: "3,307", label: "client newsletter recipients" },
  { value: "18", label: "healthcare case studies" },
  { value: "82+", label: "published stories" },
  { value: "34", label: "employee advocates recruited and coached" },
  { value: "~1,000", label: "people connected through company wide events" },
  { value: "16", label: "long term client partnerships" },
  { value: "96%", label: "cybersecurity certification exam pass rate" },
  { value: "~225k", label: "combined followers across managed social channels" },
];

export const skills = {
  "Communications Strategy": [
    "Internal communications",
    "Executive communications and ghostwriting",
    "Change communications",
    "Message architecture",
    "Editorial strategy",
  ],
  "Content and Storytelling": [
    "Case studies and customer stories",
    "Interviewing",
    "Newsletters and email",
    "Long form and SEO writing",
    "Scriptwriting",
  ],
  "Programs and Events": [
    "Company wide event production",
    "Run of show and stage direction",
    "Field marketing and roadshows",
    "Executive dinners and trade shows",
    "Program design and enablement",
  ],
  "Production and Creative": [
    "Podcast production",
    "Video production and direction",
    "Photography",
    "Creative direction",
    "Design systems for content",
  ],
  "Technology and Systems": [
    "AI enablement and workflow design",
    "HubSpot, SharePoint, Asana, Notion",
    "Analytics and performance reporting",
    "Marketing operations",
    "Digital asset management",
  ],
};

export const industries = [
  "Healthcare",
  "Health technology",
  "AI and emerging technology",
  "Cybersecurity",
  "Financial services",
  "Small business",
  "Retail",
  "Hospitality",
  "Real estate",
  "Professional services",
];
