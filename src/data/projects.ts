import { img } from "@/lib/images";

export type ProjectImage = { src: string; alt: string };
export type ProjectLink = { label: string; url: string; thumb?: ProjectImage };

export type Project = {
  slug: string;
  title: string;
  organization: string;
  categories: string[];
  /** Splits a category into clearly labeled groups, e.g. internal vs. external. */
  subsection?: string;
  /** Used only for SEO meta description, not shown on the page. */
  summary: string;
  challenge: string;
  owned: string[];
  results: string[];
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  links?: ProjectLink[];
  /** A "See all" button to the complete Drive folder, separate from individual work links. */
  folderLink?: { label: string; url: string };
};

export const CATEGORIES = [
  "B2B & Audience Marketing",
  "Email & Newsletters",
  "Blogs and Healthcare Storytelling",
  "Field Marketing and Event Strategy",
  "Programs I Built",
  "Podcast, Video & Interviews",
  "Strive Society Client Work",
  "Brand, Creative & Entrepreneurship",
] as const;

const rawProjects: Project[] = [
  {
    slug: "monetizeiq-product-storytelling",
    title: "Shaped MonetizeIQ AI Product Storytelling",
    organization: "StrategyCorps",
    categories: ["B2B & Audience Marketing"],
    summary:
      "Shaped how the market would understand MonetizeIQ, an AI platform for banks and credit unions, from hero statement and product narrative through voice guidance and video pitch concepts.",
    challenge:
      "The product's AI capability was real and technical. Bankers needed to hear **business value, not model architecture**, within the first sentence.",
    owned: ["Hero statement and core product narrative", "Voice and messaging guidance", "Video pitch concepts and short script"],
    results: [
      "A single product narrative adopted across sales, events and marketing",
      "Repeatable field marketing playbooks created for the launch",
    ],
    cover: { src: img.monetizeiqWebinar, alt: "MonetizeIQ webinar graphic featuring banking executives" },
    links: [
      {
        label: "MonetizeIQ product story and video script",
        url: "https://docs.google.com/document/d/1LluIc2Pm4BpC8byMsg5TVERrQtI6iqcQYxX5bpBcXD0/edit",
        thumb: { src: img.monetizeiqWebinar, alt: "MonetizeIQ AI software webinar campaign" },
      },
    ],
  },
  {
    slug: "cerecore-client-newsletter",
    title: "Built a Client Newsletter Program",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Email & Newsletters"],
    subsection: "External / Client Newsletters",
    summary:
      "Built the client newsletter from zero, including the editorial plan, voice, production process and distribution system, and ran it as a demand generation product rather than a broadcast channel.",
    challenge:
      "Clients heard from the company only when something went wrong or when someone was selling. There was **no consistent, useful channel** that kept hospital leaders informed between projects.",
    owned: [
      "Editorial strategy, voice and issue architecture",
      "Production calendar and approval workflow",
      "Writing and producing every issue",
      "HubSpot build, segmentation and distribution",
    ],
    results: [
      "Grew to 3,307 recipients within six months",
      "70 percent average open rate, about 17 points above the industry benchmark",
      "Became a recurring source of client conversations for account teams",
    ],
    cover: { src: img.clientUpdate, alt: "CereCore client newsletter issue with client success stories" },
    links: [
      {
        label: "Read a client newsletter issue",
        url: "https://drive.google.com/file/d/1p5ntCfZ4so0y9EmjqFlpQTqBgIv3xC1p/view",
        thumb: { src: img.newsletterStats, alt: "CereCore client newsletter performance snapshot" },
      },
    ],
    folderLink: {
      label: "See all client newsletters",
      url: "https://drive.google.com/drive/folders/1yqzajcuk8xorADXvV_Gk10D6OlXNPcTP",
    },
  },
  {
    slug: "internal-employee-newsletters",
    title: "Created Internal Employee Newsletters",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Email & Newsletters"],
    subsection: "Internal / Employee Newsletters",
    summary:
      "Wrote and produced the biweekly internal newsletter that kept about 1,000 employees across the United States and United Kingdom informed between company wide updates.",
    challenge:
      "News, employee stories and operational updates lived in scattered inboxes and team channels. Employees had **no reliable place** to understand what was happening.",
    owned: [
      "The CereCore Link biweekly internal newsletter",
      "Editorial calendar and story sourcing across departments",
      "Writing and publishing internal blogs and employee stories",
    ],
    results: ["Reached roughly 1,000 employees with about 3,200 monthly intranet views"],
    cover: { src: img.boardroomPresentation, alt: "Sierra Langford presenting an internal communications workshop" },
    links: [
      {
        label: "Read the March 2026 CereCore Link newsletter",
        url: "https://drive.google.com/file/d/1jprVY_LBttRuUqg9QdlAqI3YLHEZnX6t/view",
      },
      {
        label: "View the internal social and content plan",
        url: "https://drive.google.com/file/d/1-rhxviqgE-FBPDQ_4igqjJti5oAIKGj9/view",
      },
    ],
    folderLink: {
      label: "See all internal newsletters",
      url: "https://drive.google.com/drive/folders/1ghSZwqAsgRg_Ec_BNn8hjQFflvwATlyd",
    },
  },
  {
    slug: "internal-blogs",
    title: "Blogs and Stories",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Blogs and Healthcare Storytelling"],
    summary: "Wrote internal blog content for employees at CereCore, an HCA Healthcare company.",
    challenge: "",
    owned: [],
    results: [],
    cover: { src: img.blogBalance, alt: "Internal blog post: Finding Balance While Working from Home" },
    folderLink: {
      label: "See all internal blog issues",
      url: "https://drive.google.com/drive/folders/1wD8GuL0YqgqcW0Ra73N43n-0yubuvOwr",
    },
  },
  {
    slug: "healthcare-customer-stories",
    title: "Created Healthcare Go-Live and Transformation Stories",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Blogs and Healthcare Storytelling"],
    summary:
      "Interviewed hospital leaders, clients and subject matter experts to turn complex health IT implementations into clear human stories, published as case studies, blogs and feature articles.",
    challenge:
      "Implementation stories were written as technical summaries. They were **accurate and forgettable**, and they never showed the people affected by the work.",
    owned: [
      "Interviewing hospital leaders, clients and internal experts",
      "Story structure and writing",
      "Adaptation for web, newsletter, social, sales and leadership use",
    ],
    results: [
      "18 healthcare case studies produced",
      "More than 82 published stories",
      "Stories reused across sales conversations, newsletters and leadership messaging",
    ],
    cover: { src: img.jamesWellmanInterview, alt: "Sierra Langford interviewing a hospital CIO for a healthcare customer story" },
    links: [
      {
        label: "Regional Medical Center Epic go live",
        url: "https://drive.google.com/file/d/1OTyBKQceCCv1Dpp8dxUBZ2uK6VJTQ8eC/view",
        thumb: { src: img.regionalCaseStudy, alt: "Regional Medical Center Epic go-live story" },
      },
      {
        label: "Lehigh Regional EHR transformation",
        url: "https://drive.google.com/file/d/13UBqFYqPYLevWCY32HYCWYZysbL3t3sS/view",
        thumb: { src: img.lehighCaseStudy, alt: "Lehigh Regional Medical Center EHR transformation story" },
      },
      {
        label: "Schneck Medical Center story",
        url: "https://docs.google.com/document/d/1OmZxwCl2-X8nQjA7LkxY2gdTf4-BwvNI/edit",
        thumb: { src: img.schneckCaseStudy, alt: "Schneck Medical Center case study" },
      },
      {
        label: "Brattleboro Retreat go-live success",
        url: "https://drive.google.com/file/d/1DHTGDbLGYNXv9Sp09JdhThHu-jEzXv1n/view",
      },
      {
        label: "Additional healthcare go-live story",
        url: "https://drive.google.com/file/d/1omKT5yMwuQiIL1Gd0lRftqQ8_pnmAIpd/view",
      },
    ],
    folderLink: {
      label: "See all healthcare storytelling",
      url: "https://drive.google.com/drive/folders/1N-zm8Ba9wvmENHrq4D-bH-0_BChcqXq7",
    },
  },
  {
    slug: "veronica-survivor-story",
    title: "Produced a Healthcare Survivor Story",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Blogs and Healthcare Storytelling"],
    summary:
      "Interviewed a colleague who nearly died and produced a company wide video that connected employees' daily technology work to patient survival.",
    challenge:
      "Employees who support hospital systems **rarely see a patient**. The connection between their work and clinical outcomes was abstract.",
    owned: ["Story concept and approach", "Interview with the subject", "Video production and edit direction"],
    results: ["Shown company wide", "Employees reported finally understanding why their work mattered"],
    cover: { src: img.veronica, alt: "Story subject with her son making heart shapes with their hands" },
    links: [
      {
        label: "Watch the published story",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7319019919994458115/",
      },
    ],
  },
  {
    slug: "marketing-advocacy-group",
    title: "Created a 34-Person Marketing Advocacy Group",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Programs I Built"],
    summary:
      "Founded an employee advocacy program, recruited and coached 34 members across departments, and helped them surface and tell accurate stories from their own teams.",
    challenge:
      "The people closest to the work had the best stories and **the least confidence sharing them**. Marketing could not be the only voice representing a technical, credibility driven business.",
    owned: ["Program design, recruitment and onboarding", "Coaching sessions and story sourcing prompts", "Messaging guidance and approval guardrails"],
    results: [
      "34 employee advocates recruited and coached",
      "Consistent employee generated content tied to campaigns and events",
    ],
    cover: { src: img.masterclassSession, alt: "Sierra Langford leading an internal communications masterclass" },
    links: [
      {
        label: "Marketing Advocacy kickoff presentation",
        url: "https://docs.google.com/presentation/d/1V865xDfKewqRHgx3U2_UHaognMm5uAhQ/edit",
        thumb: { src: img.masterclassSession, alt: "Marketing advocacy program kickoff session" },
      },
      {
        label: "Marketing Advocacy program guide",
        url: "https://docs.google.com/presentation/d/1RKVpd8ZfYzezZM-Moh1Q8b1v597QO4HV/edit",
        thumb: { src: img.boardroomPresentation, alt: "Marketing advocacy program presentation" },
      },
      {
        label: "Marketing Advocacy monthly meetup recording",
        url: "https://drive.google.com/file/d/1igO6rB2ohFFPBVkfk0k74laJIITIIPWJ/view",
        thumb: { src: img.internalVideoStill, alt: "Marketing advocacy monthly meetup recording" },
      },
      {
        label: "Story idea collection tool",
        url: "https://docs.google.com/presentation/d/1Ro3xgvrRpGKMkiBRvsLkQS5A09-KLNBF/edit",
        thumb: { src: img.cerecoreHumanTouch, alt: "Story development session with colleagues" },
      },
    ],
  },
  {
    slug: "cerecore-mentorship-program",
    title: "Built a Mentorship Program Toolkit",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Programs I Built"],
    summary:
      "Built a company mentorship program from scratch, including structure, toolkit, recruitment and launch communications, and designed it to keep running without me.",
    challenge:
      "Employees wanted growth and connection across a distributed company, but there was **no structure for pairing people** or supporting mentors once they were matched.",
    owned: ["Program framework and matching structure", "Mentor and mentee toolkit", "Launch communications and enrollment campaign"],
    results: [
      "Program launched company wide and continued after my departure",
      "Mentor best practices session delivered to an audience of 245 plus",
    ],
    cover: { src: img.cerecoreMentorshipToolkitCover, alt: "CereCore Mentorship Toolkit presentation cover" },
    links: [
      {
        label: "Company-wide Mentorship Program presentation",
        url: "https://drive.google.com/file/d/181Sgd3N1Av2DAoI7rSwgzUN1foL9IgnH/view",
        thumb: { src: img.cerecoreMentorshipSlido, alt: "Company-wide mentorship program presentation" },
      },
      {
        label: "CereCore Mentorship Toolkit",
        url: "https://drive.google.com/file/d/1DENUTuSB7SINUmh8O-LqqDTtBk9-Qoel/view",
        thumb: { src: img.mentorshipToolkit, alt: "CereCore mentorship toolkit presentation" },
      },
      {
        label: "Mentorship overview",
        url: "https://drive.google.com/file/d/12jd5HDAvQ40nDYXjIcil1S2UZmAuL95O/view",
        thumb: { src: img.cerecoreMentorshipToolkitCover, alt: "CereCore mentorship program overview" },
      },
      {
        label: "Mentorship program guidelines",
        url: "https://drive.google.com/file/d/11nE9j3CaKLmjQQsj5mLCtxL7sJd8Icns5B4y/view",
        thumb: { src: img.mentorBestPracticesSlide, alt: "Mentor best practices from the mentorship program guidelines" },
      },
    ],
  },
  {
    slug: "enterprise-communications-calendar",
    title: "Built an Enterprise Communications Calendar",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Programs I Built"],
    summary:
      "Identified a coordination gap across departments and built a centralized enterprise communications calendar and intake process that departments adopted.",
    challenge: "",
    owned: [],
    results: [
      "Approximately 82 internal stories published",
      "Communications calendar adopted across departments",
      "Estimated annual time savings of 1,468 hours",
    ],
    links: [
      {
        label: "2025 Communication Impact Review",
        url: "https://drive.google.com/file/d/1EmM9XFPtF7yh1e9Z7xxNV_fyIGItPzqo/view",
        thumb: { src: img.impactReview, alt: "2025 internal and external communications impact review deck" },
      },
    ],
    folderLink: {
      label: "See all communications work",
      url: "https://drive.google.com/drive/folders/15ochAlt0ql2Y_CANRZ_R5XyrmlrGITyb",
    },
  },
  {
    slug: "hca-censhare",
    title: "Created Change Communications for a System Transition",
    organization: "HCA Healthcare",
    categories: ["Programs I Built"],
    summary:
      "Supported the enterprise rollout of the Censhare digital asset management platform inside a large matrixed health system, including stakeholder communications, training materials and adoption support.",
    challenge:
      "Thousands of digital assets and dozens of teams had to move to a new platform. Adoption depended on **communication and training, not the software**.",
    owned: ["Stakeholder communication plans", "Articulate training module development", "Adoption and change communications"],
    results: ["Supported migration of more than 5,000 digital assets, including tagging 318 in a single week"],
    cover: { src: img.censhareNursesVideo, alt: "Still from the Censhare platform overview sizzle reel" },
    links: [
      {
        label: "Watch the Censhare sizzle reel",
        url: "https://drive.google.com/file/d/1iYrFcsV4JYM2sWbvVheUxiDyM6wOIe0j/view",
        thumb: { src: img.censhareNursesVideo, alt: "Censhare platform overview sizzle reel" },
      },
    ],
  },
  {
    slug: "ai-enablement",
    title: "Created AI Enablement Content",
    organization: "CereCore and StrategyCorps",
    categories: ["Programs I Built"],
    summary:
      "Helped teams adopt AI in practical, role relevant ways: training colleagues on everyday tools and designing assisted workflows that removed real administrative work.",
    challenge:
      "**AI enthusiasm outpaced AI usefulness**. People needed permission, guardrails and concrete, job-specific starting points.",
    owned: ["Serving on the AI Steering Committee", "Teaching colleagues practical AI tools", "Designing role relevant AI workflows"],
    results: [
      "Teams using AI in daily workflows rather than in experiments",
      "Follow up and task capture automated across Microsoft tools and Asana",
    ],
    cover: { src: img.boardroomPresentation, alt: "Sierra Langford presenting a practical communications workshop" },
    links: [
      {
        label: "View the AI enablement presentation",
        url: "https://docs.google.com/presentation/d/1PpQymdNHli_m4vkbn12TkQrXW56yWWlH/edit",
      },
    ],
  },
  {
    slug: "connection-2026",
    title: "Planned Connection 2026 Conference for 1,000 People in Nashville",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Field Marketing and Event Strategy"],
    summary:
      "Planned and executed the flagship company wide event for approximately 1,000 attendees in person and virtual, owning communication strategy, content, run of show, executive scripts and onsite execution.",
    challenge:
      "A distributed company across the United States and United Kingdom needed one event that actually connected people, communicated strategy clearly and **did not feel like a day of slides**.",
    owned: [
      "Communication strategy and attendee journey",
      "Content plan, run of show and stage direction",
      "Executive scripts and speaker coaching",
      "Award video production and opening film",
    ],
    results: [
      "Approximately 500 in person and 500 virtual attendees",
      "95 percent of respondents rated the event 4 or 5 out of 5",
      "Feedback described it as the best Connection event yet",
    ],
    cover: { src: img.connectionStage, alt: "Sierra Langford presenting on stage at Connection 2026" },
    links: [
      {
        label: "Connection 2026 strategy and content",
        url: "https://drive.google.com/file/d/1TeXuXIKWxWUkYqXk1IgA6Uh2VQ8D1Ps5/view",
        thumb: { src: img.connectionStage, alt: "Sierra Langford presenting on stage at Connection 2026" },
      },
      {
        label: "Connection 2026 event feedback and results",
        url: "https://drive.google.com/file/d/1oGdZiWQzjiHw8uUA0gVuU2xK6tpzj7o1/view",
        thumb: { src: img.companyMeeting, alt: "Company-wide event audience and presentation" },
      },
      {
        label: "Connection 2026 additional event materials",
        url: "https://drive.google.com/file/d/1j9PaBosp7sLSd0xU7xE-iDTIZxIcfnMD/view",
        thumb: { src: img.liveEvent, alt: "Live company event production" },
      },
    ],
    folderLink: {
      label: "See all campaigns and events",
      url: "https://drive.google.com/drive/folders/1RkWSlTroSVxVvSiLBhe87fu7cHOEQECu",
    },
  },
  {
    slug: "himss-2026",
    title: "HIMSS 2026 Vegas Work Trip — Interviewed CIOs, CNOs, and Colleagues for Testimonial Video Clips",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Field Marketing and Event Strategy"],
    summary:
      "Represented the company at HIMSS in Las Vegas and produced a short form interview series on the conference floor with a hospital CIO, a CNO, a health technology CMO and a MEDITECH partner.",
    challenge:
      "Conference presence usually produces a booth and a badge scan list. The goal was to leave with **content worth publishing for months**.",
    owned: [
      "Interview subject outreach and preparation",
      "Question development and on camera interviewing",
      "Onsite capture with phone, tripod and microphone",
    ],
    results: [
      "Four executive interviews captured in two days",
      "Footage repurposed across social, newsletter and podcast channels",
    ],
    cover: { src: img.himssInterview, alt: "Sierra Langford interviewing a physician leader at HIMSS 2026" },
    links: [
      {
        label: "HIMSS 2026 interview clip",
        url: "https://drive.google.com/file/d/1ROQmr15cFuUTRqwMDX-_tUT2d5nZ-N2M/view",
        thumb: { src: img.himssMeditech, alt: "MEDITECH partner booth interview at HIMSS 2026" },
      },
    ],
    folderLink: {
      label: "See all HIMSS interviews",
      url: "https://drive.google.com/drive/folders/1p_38o4DmlIJqGGBytPPoF_IId4JLQVRX",
    },
  },
  {
    slug: "monetizeiq-roadshow",
    title: "Created MonetizeIQ Roadshow Content",
    organization: "StrategyCorps",
    categories: ["Field Marketing and Event Strategy"],
    summary:
      "Built the field marketing foundation for an AI product launch: conference activations, roadshows, executive dinners, webinars and advisory board concepts, all supported by repeatable briefs and SOPs.",
    challenge:
      "A new AI product needed **in-person credibility** with conservative buyers, and the team needed a system they could repeat without rebuilding every event from scratch.",
    owned: ["Roadshow concepts and city selection support", "Executive dinner concepts and experience design", "Event briefs, SOPs, templates and workflows"],
    results: [
      "A repeatable event system with briefs, SOPs and templates",
      "Programs refined using direct prospect feedback",
    ],
    cover: { src: img.strategycorpsRoadshowCities, alt: "StrategyCorps MonetizeIQ roadshow schedule across 16 cities" },
    links: [
      {
        label: "Multi-Market Roadshow email journey",
        url: "https://drive.google.com/file/d/1WopDvTdRGugSwfiytE2IdonG038qi5Hd/view",
        thumb: { src: img.strategycorpsRoadshowCities, alt: "StrategyCorps multi-market roadshow across 16 cities" },
      },
      {
        label: "Roadshow repositioning strategy",
        url: "https://drive.google.com/file/d/1RrQiRjqVO_B4YY7HqEb6HU5C04E_1hvY/view",
        thumb: { src: img.eventNetworking, alt: "Field marketing conversations at an industry event" },
      },
      {
        label: "Executive Dinner Series event brief",
        url: "https://drive.google.com/file/d/1XCdjjOj4ZxuHW6R20NVcJRPSL8fyZAMM/view",
        thumb: { src: img.teamYeehawRestaurant, alt: "Colleagues gathered around a dinner table" },
      },
      {
        label: "Field Marketing Event Playbook",
        url: "https://drive.google.com/file/d/1NWKjesU4pAwnOvoVvl2tn10tDgfoD6kK/view",
        thumb: { src: img.strategycorpsTeamPage, alt: "StrategyCorps team featured in field marketing materials" },
      },
      {
        label: "Webinar presentation — new AI software",
        url: "https://docs.google.com/presentation/d/1uantFy-0vv2Ff6ZXXH_MKwz7J-sFHjzn/edit",
        thumb: { src: img.monetizeiqWebinar, alt: "MonetizeIQ webinar featuring banking and technology leaders" },
      },
      {
        label: "MonetizeIQ webinar moderator script",
        url: "https://docs.google.com/document/d/1yc8L3tSjASZ19awbH14YBejBuas4C79q/edit",
        thumb: { src: img.monetizeiqWebinar, alt: "MonetizeIQ webinar moderator and speakers" },
      },
      {
        label: "Webinar abstract",
        url: "https://docs.google.com/document/d/145zDc-PgsZoaOLu6RsK9VYWdSeZIbDjA/edit",
        thumb: { src: img.monetizeiqWebinar, alt: "MonetizeIQ AI software webinar campaign" },
      },
    ],
  },
  {
    slug: "cerecore-podcast",
    title: "Produced The CereCore Podcast",
    organization: "CereCore, an HCA Healthcare company",
    categories: ["Podcast, Video & Interviews"],
    summary:
      "Built and produced a healthcare IT thought leadership podcast end to end, from show concept and guest strategy through publishing and promotion.",
    challenge:
      "Healthcare IT leaders are surrounded by vendor noise. The company needed a **genuinely useful conversation** with hospital and health technology leaders that did not sound like a sales pitch.",
    owned: [
      "Show concept, positioning and episode architecture",
      "Guest strategy, outreach systems and scheduling",
      "Recording coordination and production direction",
      "Publishing, show notes and promotion across channels",
    ],
    results: [
      "22,973 views across 12 episodes",
      "Approximately 37 healthcare and health technology leaders featured",
      "Gold Stevie Award, Technology Shows category",
    ],
    cover: { src: img.stevieAward, alt: "The American Business Awards 2026 Gold Stevie Award winner graphic for The CereCore Podcast" },
    links: [
      { label: "Listen to the podcast", url: "https://podcast.cerecore.net/", thumb: { src: img.podcastArtwork, alt: "The CereCore Podcast cover artwork" } },
    ],
    folderLink: {
      label: "View the complete podcast work",
      url: "https://drive.google.com/drive/folders/1wwUZp5RL728AfUpjHtZ4k8OHdOWwCry6",
    },
  },
  {
    slug: "strategycorps-leadership-series",
    title: "Produced a 25th Anniversary Leadership Interview Series",
    organization: "StrategyCorps",
    categories: ["Podcast, Video & Interviews"],
    summary:
      "Created a leadership interview series with 11 executives to capture company history and perspective, and turned it into reusable brand content.",
    challenge:
      "Twenty five years of company history lived in the memories of a handful of leaders and had **never been captured** in a usable form.",
    owned: ["Storytelling framework", "Interview question development", "Interviews with 11 executives"],
    results: ["11 executive interviews created a reusable brand and anniversary content library"],
    cover: { src: img.videoRig, alt: "Video interview rig set up for a leadership interview series" },
    links: [
      {
        label: "Read the leadership interview series",
        url: "https://docs.google.com/document/d/1ZuAfEmrjQHvbHvLQ5gEw1rscaiuLkhrz/edit",
      },
    ],
  },
  {
    slug: "realscreen-breaking-in",
    title: "Created the Breaking In Campaign Concept",
    organization: "Real Screen Summit, New Orleans",
    categories: ["Podcast, Video & Interviews"],
    summary:
      "Pitched an original television concept called Breaking In to Netflix and Hulu executives at the Real Screen Summit in New Orleans, backed by a pitch deck and a sizzle reel I wrote, shot and edited.",
    challenge:
      "The pitch had to hold its own in a room of working producers, which meant the concept and the sizzle reel had to be **genuinely watchable**.",
    owned: ["Show concept and pitch deck", "Sizzle reel edit in Adobe Premiere", "Live pitch delivery"],
    results: ["Pitched directly to Netflix and Hulu executives", "Featured in published coverage of the summit"],
    cover: { src: img.videoRig, alt: "Camera rig used for interview and video production" },
    links: [
      { label: "Watch the sizzle reel", url: "https://youtu.be/Seat0OVm6D4" },
      { label: "View the Breaking In pitch deck", url: "https://drive.google.com/file/d/1nK-7mzbKjdzkfcNTA1twOFkS1wNLhKBM/view" },
    ],
  },
  {
    slug: "strive-society",
    title: "Founded Strive Society Creative",
    organization: "Strive Society",
    categories: ["Strive Society Client Work"],
    summary:
      "Founded and still run a creative marketing practice with 16 long term client partnerships across healthcare, cybersecurity, technology, real estate, retail, hospitality and professional services.",
    challenge:
      "Small and mid sized organizations rarely need an agency retainer. They need **one strategic partner who can think, write, shoot and ship**.",
    owned: ["Prospecting, pitching and closing accounts independently", "Marketing strategy and go to market plans", "Directing a team of four creatives"],
    results: ["16 long term client partnerships", "A practice sustained alongside full time roles since 2017"],
    cover: { src: img.brandBanner, alt: "Marketing and brand storytelling since 2017 banner" },
    links: [
      {
        label: "View the marketing portfolio",
        url: "https://drive.google.com/file/d/1qzryhF4vjF1LP1AFZPUHuy_Ucjmanmco/view",
        thumb: { src: img.marketingPortfolio, alt: "Sierra Langford marketing portfolio overview" },
      },
      {
        label: "Open the client writing samples",
        url: "https://drive.google.com/drive/folders/10PoINBpU3fUhLH5d6kowvAprFkK0KdjU",
      },
    ],
    folderLink: {
      label: "See all Strive Society client work",
      url: "https://drive.google.com/drive/folders/1rkqWpRqggmlWc7IDlV814-aKKRi1ujzX",
    },
  },
  {
    slug: "tammie-osborne-video",
    title: "Created Video Content for Tammie Osborne",
    organization: "Strive Society client",
    categories: ["Strive Society Client Work"],
    summary: "Produced video content for Strive Society client Tammie Osborne.",
    challenge: "",
    owned: [],
    results: [],
    cover: { src: img.liveEvent, alt: "Professional video production at a live event" },
    links: [
      {
        label: "View the video on LinkedIn",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7503872548749680641/",
      },
    ],
  },
  {
    slug: "roxys-hair-salon",
    title: "Built a Website for Roxy's Hair Salon",
    organization: "Strive Society client",
    categories: ["Strive Society Client Work"],
    summary: "Built the website for Strive Society client Roxy's Hair Salon.",
    challenge: "",
    owned: [],
    results: [],
    cover: { src: img.sierraAtDesk, alt: "Sierra Langford working at her desk" },
    links: [{ label: "Visit the Roxy's Hair Salon website", url: "https://roxyshair.netlify.app/" }],
  },
  {
    slug: "salsaritas-social",
    title: "Created Social Content for Salsarita's East Tennessee",
    organization: "Strive Society client",
    categories: ["Strive Society Client Work"],
    summary: "Created social content for Strive Society client Salsarita's East Tennessee.",
    challenge: "",
    owned: [],
    results: [],
    cover: { src: img.teamYeehawRestaurant, alt: "A group gathered around a restaurant table" },
    links: [{ label: "View Salsarita's East Tennessee on Instagram", url: "https://www.instagram.com/salsaritaseasttn/" }],
  },
  {
    slug: "brentwood-jewelry-social",
    title: "Created Social Content for Brentwood Jewelry",
    organization: "Strive Society client",
    categories: ["Strive Society Client Work"],
    summary: "Created social content for Strive Society client Brentwood Jewelry.",
    challenge: "",
    owned: [],
    results: [],
    cover: { src: img.photographyCanon, alt: "Sierra Langford creating brand photography" },
    links: [{ label: "View Brentwood Jewelry on Instagram", url: "https://www.instagram.com/brentwoodjewelry/" }],
  },
  {
    slug: "cyberprotex",
    title: "Developed Cybersecurity Marketing Content",
    organization: "CyberProtex, a Strive Society client",
    categories: ["Strive Society Client Work"],
    summary:
      "Led marketing for a cybersecurity training and managed security services firm, from brand positioning and go to market content through lead generation and signed contracts.",
    challenge:
      "Highly technical certification and managed security offerings were being sold to buyers who needed **plain language, proof and trust** before they would take a meeting.",
    owned: ["Brand positioning and messaging", "Go to market content", "Email campaigns and social content"],
    results: ["96 percent certification exam pass rate supported by program marketing and enablement"],
    cover: { src: img.cyberprotexBootcamp, alt: "CyberProtex CISSP Exam Prep Bootcamp promotional graphic" },
    links: [{ label: "Visit the CyberProtex site", url: "https://www.cyberprotex.com/" }],
  },
  {
    slug: "national-panhellenic-conference",
    title: "Led Creative Design for the National Panhellenic Conference",
    organization: "National Panhellenic Conference",
    categories: ["Brand, Creative & Entrepreneurship"],
    summary:
      "Supported marketing strategies and communications for a national organization, with visual communication work focused on alumni and community connection.",
    challenge:
      "A national membership organization needed communications that **felt personal** to local chapters and alumni.",
    owned: ["Visual design support", "Communications materials", "Community oriented content"],
    results: ["Strengthened alumni and community connection through consistent visual communication"],
    cover: { src: img.brandBanner, alt: "Creative marketing and community communications portfolio artwork" },
    links: [
      {
        label: "Browse design work",
        url: "https://drive.google.com/drive/folders/1vPKk2Qi0LDmxD8T9JWcJ4vP8_sNjpk1R",
      },
    ],
  },
  {
    slug: "bliss-box",
    title: "Created the Bliss Box Brand Concept",
    organization: "Williamson County Entrepreneurship and Innovation Campus",
    categories: ["Brand, Creative & Entrepreneurship"],
    summary:
      "Created a mental health wellness care package with coping tools for anxiety and stress, funded and mentored through a county entrepreneurship program.",
    challenge:
      "Students and patients dealing with anxiety were given advice but **rarely given anything tangible** to use in the moment.",
    owned: ["Product concept and contents", "Branding and packaging", "Funding pitch and mentorship program participation"],
    results: [
      "Approximately 80 care packages created and distributed to a therapy practice",
      "Spoke at Williamson County schools on mental health, resilience and entrepreneurship",
    ],
    cover: { src: img.navigatingPurpose, alt: "Bliss Box brand concept planning materials" },
    links: [
      {
        label: "View the Bliss Box brand deck",
        url: "https://docs.google.com/presentation/d/1IOaw-Gvb4Z3nai9PtVicuHTzlcgVTAA-1hap3rB4wM4/edit",
      },
      {
        label: "Read the Bliss Box brand concept document",
        url: "https://docs.google.com/document/d/1PuJYefD7KszZXWDbF_fhJbI6DR6CzGO9_1e6XrRf-uc/edit",
      },
    ],
  },
  {
    slug: "photography",
    title: "Professional Brand and Portrait Photography",
    organization: "Sierra Langford Photography",
    categories: ["Brand, Creative & Entrepreneurship"],
    summary: "Brand and portrait photography.",
    challenge: "",
    owned: [],
    results: [],
    cover: { src: img.photographyCanon, alt: "Sierra Langford holding her camera" },
    links: [
      {
        label: "Visit my photography website",
        url: "https://sierralangfordphotography.mypixieset.com/",
      },
    ],
  },
];

export const projects: Project[] = rawProjects;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** The photo shown on a project's card: its cover, or the first gallery image. */
export const getDisplayPhotos = (project: Project, max = 1): ProjectImage[] => {
  const candidates = [...(project.cover ? [project.cover] : []), ...(project.gallery ?? [])];
  const seen = new Set<string>();
  const deduped: ProjectImage[] = [];
  for (const image of candidates) {
    if (seen.has(image.src)) continue;
    seen.add(image.src);
    deduped.push(image);
    if (deduped.length >= max) break;
  }
  return deduped;
};

export const featuredSlugs = ["cerecore-client-newsletter", "healthcare-customer-stories", "connection-2026"];

export const featuredProjects = featuredSlugs
  .map((s) => getProject(s))
  .filter((p): p is Project => Boolean(p));
