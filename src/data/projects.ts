import { img } from "@/lib/images";

export type Visibility =
  | "Public"
  | "Archive only";

export type ProjectImage = { src: string; alt: string };
export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  organization: string;
  period: string;
  role: string;
  industries: string[];
  categories: string[];
  summary: string;
  challenge: string;
  owned: string[];
  audiences: string[];
  deliverables: string[];
  tools: string[];
  results: string[];
  headlineResult: string;
  tags: string[];
  featured?: boolean;
  archive?: boolean;
  visibility: Visibility;
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  visualNote?: string;
  links?: ProjectLink[];
  related?: string[];
};

export const CATEGORIES = [
  "Internal and External Communications",
  "Healthcare and Customer Stories",
  "Events and Field Marketing",
  "Podcasts and Video",
  "AI, Technology and Cybersecurity",
  "Brand, Social and Entrepreneurship",
  "Photography and Creative Work",
  "Earlier Career Archive",
] as const;

/** Older, narrower labels are folded into the small set of categories above. */
const CATEGORY_GROUPS: Record<string, string> = {
  "Internal Communications": "Internal and External Communications",
  "Executive Communications": "Internal and External Communications",
  "Content and Editorial": "Internal and External Communications",
  "Healthcare and Health Technology": "Healthcare and Customer Stories",
  "Customer Stories": "Healthcare and Customer Stories",
  "Events and Field Marketing": "Events and Field Marketing",
  "Podcasts and Video": "Podcasts and Video",
  "AI and Technology": "AI, Technology and Cybersecurity",
  Cybersecurity: "AI, Technology and Cybersecurity",
  "Social Media and Brand": "Brand, Social and Entrepreneurship",
  Entrepreneurship: "Brand, Social and Entrepreneurship",
  "Photography and Creative Work": "Photography and Creative Work",
  "Earlier Career Archive": "Earlier Career Archive",
};

const groupCategories = (list: string[]) =>
  Array.from(new Set(list.map((c) => CATEGORY_GROUPS[c] ?? c)));

const SAMPLE_NOTE =
  "More visual examples from this project live in the shared example library.";

const rawProjects: Project[] = [
  {
    slug: "cerecore-podcast",
    title: "The CereCore Podcast",
    organization: "CereCore, an HCA Healthcare company",
    period: "2025 – 2026",
    role: "Sole Producer and Host Support",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Podcasts and Video", "Healthcare and Health Technology", "Content and Editorial"],
    summary:
      "Built and produced a healthcare IT thought leadership podcast end to end, from show concept and guest strategy through publishing and promotion.",
    challenge:
      "Healthcare IT leaders are surrounded by vendor noise. The company needed a credible, genuinely useful conversation with hospital and health technology leaders that did not sound like a sales pitch.",
    owned: [
      "Show concept, positioning and episode architecture",
      "Guest strategy, outreach systems and scheduling",
      "Guest briefs, research and interview question sets",
      "Recording coordination and production direction",
      "Transcript cleanup, episode writing and editing",
      "Publishing, show notes and promotion across channels",
    ],
    audiences: [
      "Hospital CIOs and IT leaders",
      "Clinical leaders",
      "Health technology partners",
      "Clients and prospects",
      "Employees",
    ],
    deliverables: [
      "12 published episodes",
      "Guest brief and question set templates",
      "Episode artwork and promotional cards",
      "Show notes and transcript-based articles",
      "Social and newsletter promotion kits",
    ],
    tools: ["Riverside", "Descript", "HubSpot", "Canva", "LinkedIn", "Adobe Premiere"],
    results: [
      "22,973 views across 12 episodes",
      "Top episode reached 3,219 views",
      "Approximately 37 healthcare and health technology leaders featured",
      "Gold Stevie Award, Technology Shows category",
    ],
    headlineResult: "22,973 views across 12 episodes and a Gold Stevie Award",
    tags: ["Podcast", "Thought Leadership", "Healthcare IT", "Cybersecurity", "AI", "EHR"],
    featured: true,
    visibility: "Public",
    cover: { src: img.stevieAward, alt: "The American Business Awards 2026 Gold Stevie Award winner graphic for The CereCore Podcast" },
    gallery: [
      { src: img.podcastArtwork, alt: "The CereCore Podcast cover artwork" },
      { src: img.stevieAward, alt: "The American Business Awards 2026 Stevie Award winner graphic" },
      { src: img.boothRecording, alt: "Recording setup at a healthcare conference booth" },
      { src: img.videoRig, alt: "Mobile video production rig used for podcast and interview capture" },
      { src: img.podcastPipeline, alt: "Podcast pipeline planning deck for the 2026 episode slate" },
    ],
    links: [
      { label: "Listen to the podcast", url: "https://podcast.cerecore.net/" },
      { label: "Guest brief: Dr. Devjit Roy", url: "https://drive.google.com/file/d/11zrA5weo4MEV4FGDZVZgRN5IdqeUeX27/view" },
      { label: "Guest brief: Craig Rice", url: "https://drive.google.com/file/d/1bHq9rWyFr_ZZ9Q-dJSi7AnUgC7Xpk8A1/view" },
      { label: "Guest brief: Paula Blomquist", url: "https://drive.google.com/file/d/1jIH2ayzOmDQadGjibDg08vjlzDupNsym/view" },
      { label: "Guest brief: James Wellman", url: "https://drive.google.com/file/d/1JKz8xSumpDZnrrH5BUjSvcqLLu6K_Ax9/view" },
      { label: "Guest brief: David Singer", url: "https://drive.google.com/file/d/1-q_4K4SGRLywFZgZoHuyxuQw0w4EBhyg/view" },
      { label: "Guest brief: Tiffany Laurenz", url: "https://drive.google.com/file/d/1ngvnbd1pBxMc9YdDyn3NgWdgw-2hw_iR/view" },
      { label: "Guest brief: Julie Demaree", url: "https://drive.google.com/file/d/1YA576EqTKMPpV-mVyNL3TCz2M6jPYjpO/view" },
      { label: "Guest brief: Judy Krupala", url: "https://drive.google.com/file/d/1uesz8zf8H9xXEp0Ru2IsNmUUgq9ySSr5/view" },
    ],
    related: ["himss-2026", "healthcare-customer-stories", "cerecore-client-newsletter"],
  },
  {
    slug: "cerecore-client-newsletter",
    title: "CereCore Client Newsletter",
    organization: "CereCore, an HCA Healthcare company",
    period: "2025 – 2026",
    role: "Marketing Communications Strategist",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Content and Editorial", "Healthcare and Health Technology", "Internal Communications"],
    summary:
      "Built the client newsletter from zero, including the editorial plan, voice, production process and distribution system, and ran it as a demand generation product rather than a broadcast channel.",
    challenge:
      "Clients heard from the company only when something went wrong or when someone was selling. There was no consistent, useful channel that kept hospital leaders informed between projects.",
    owned: [
      "Editorial strategy, voice and issue architecture",
      "Production calendar and approval workflow",
      "Writing and producing every issue",
      "HubSpot build, segmentation and distribution",
      "Performance reporting and iteration",
    ],
    audiences: ["Hospital and health system clients", "Client executives", "Internal account teams"],
    deliverables: [
      "Recurring newsletter issues",
      "Editorial calendar and intake process",
      "Email templates and design system",
      "Feature articles on healthcare technology topics",
    ],
    tools: ["HubSpot", "SharePoint", "Canva", "Excel"],
    results: [
      "Grew to 3,307 recipients within six months",
      "70 percent average open rate",
      "Approximately 17 points above the 53 percent industry benchmark",
      "Became a recurring source of client conversations for account teams",
    ],
    headlineResult: "3,307 recipients and a 70 percent average open rate in six months",
    tags: ["Email Marketing", "Editorial", "Demand Generation", "HubSpot", "Healthcare IT"],
    featured: true,
    visibility: "Public",
    cover: { src: img.clientUpdate, alt: "Spring 2026 CereCore client newsletter with client success stories" },
    gallery: [
      { src: img.clientUpdate, alt: "Spring edition of the CereCore client newsletter" },
      { src: img.newsletterStats, alt: "Newsletter performance statistics showing open and click rates" },
    ],
    links: [
      { label: "Read the first issue, June 2025", url: "https://cerecore.net/introducing-the-cerecore-client-newsletter" },
      {
        label: "Read the July 2025 issue: app rationalization",
        url: "https://cerecore.net/how-hospitals-are-using-app-rationalization-to-cut-costs-fast",
      },
      {
        label: "Read the August 2025 client update",
        url: "https://cerecore.net/how-hospitals-are-using-app-rationalization-to-cut-costs-fast-1",
      },
      {
        label: "Read the September 2025 client update",
        url: "https://cerecore.net/youre-a-cerecore-client-important-updates-inside-for-contact.company",
      },
      { label: "Read the October 2025 issue", url: "https://cerecore.net/client-news-oct-2025" },
      {
        label: "Read the November 2025 issue",
        url: "https://cerecore.net/-temporary-slug-13af47d4-426b-4772-a3d0-e1144fc4c28c?hs_preview=jNkQZsfQ-197699330738",
      },
      {
        label: "Read the December 2025 issue",
        url: "https://cerecore.net/-temporary-slug-0413fe3d-c5f0-44af-8c4b-607ced364200?hs_preview=Lsxzfafo-200325112084",
      },
      {
        label: "Read the spring client update",
        url: "https://cerecore.net/-temporary-slug-0f96e5c8-e6e7-46ba-8181-12cec8a6b0a9?hs_preview=xaghNIZk-202737326107",
      },
    ],
    related: ["cerecore-internal-comms", "healthcare-customer-stories", "cerecore-podcast"],
  },
  {
    slug: "cerecore-internal-comms",
    title: "CereCore Internal and External Communications",
    organization: "CereCore, an HCA Healthcare company",
    period: "2025 – 2026",
    role: "Communications Lead, then Marketing Communications Strategist",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Internal Communications", "Content and Editorial", "Executive Communications"],
    summary:
      "Ran the internal communications rhythm for a company of approximately 1,000 people, including a biweekly newsletter, roughly 82 internal stories and a rebuilt SharePoint intranet experience.",
    challenge:
      "News, employee stories and operational updates lived in scattered inboxes and team channels. Employees across the United States and United Kingdom had no reliable place to understand what was happening.",
    owned: [
      "The CereCore Link biweekly internal newsletter",
      "Editorial calendar and story sourcing across departments",
      "Writing and publishing internal blogs and employee stories",
      "SharePoint intranet structure, navigation and content experience",
      "Leadership messaging and internal announcement support",
    ],
    audiences: ["All employees", "People leaders", "Executive leadership", "Remote and UK teams"],
    deliverables: [
      "Biweekly internal newsletter",
      "Approximately 82 internal blogs and stories",
      "Rebuilt intranet pages and navigation",
      "Announcement and leadership message templates",
    ],
    tools: ["SharePoint", "Microsoft Teams", "Outlook", "Poppulo", "Canva"],
    results: [
      "Approximately 3,200 monthly intranet views",
      "Approximately 82 internal stories published",
      "A consistent communication rhythm for roughly 1,000 employees",
    ],
    headlineResult: "Approximately 3,200 monthly views and 82 internal stories published",
    tags: ["Internal Comms", "Intranet", "Employee Engagement", "Editorial"],
    featured: true,
    visibility: "Public",
    cover: { src: img.boardroomPresentation, alt: "Sierra Langford presenting a storytelling workshop in a boardroom" },
    gallery: [
      { src: img.boardroomPresentation, alt: "Sierra Langford presenting a storytelling workshop to colleagues" },
      { src: img.companyMeeting, alt: "Sierra Langford presenting at a company wide meeting" },
      { src: img.internalVideoStill, alt: "Still from an internal communications video presentation" },
      { src: img.masterclassSession, alt: "Sierra Langford hosting an internal masterclass session" },
      { src: img.blogBalance, alt: "Internal blog post: Finding Balance While Working from Home" },
      { src: img.blogMicrostress, alt: "Internal blog post: Microstress, the toll we do not have to pay" },
      { src: img.internalAgenda, alt: "2026 internal meetings agenda planning deck" },
    ],
    links: [
      {
        label: "Read the March 2026 CereCore Link newsletter",
        url: "https://drive.google.com/file/d/1jprVY_LBttRuUqg9QdlAqI3YLHEZnX6t/view",
      },
      {
        label: "Read an issue on AI, go lives and employee updates",
        url: "https://drive.google.com/file/d/1F-djRPpwWRFfpX9s2-vJqIikxiqSEXP1/view",
      },
      {
        label: "View the weekly social plan",
        url: "https://drive.google.com/file/d/1-rhxviqgE-FBPDQ_4igqjJti5oAIKGj9/view",
      },
      {
        label: "Open the executive and change communications library",
        url: "https://drive.google.com/drive/folders/1ENSKEChZdrzlr1R9JRAswM1xTK0n14rZ",
      },
    ],
    visualNote: SAMPLE_NOTE,
    related: ["marketing-advocacy-group", "enterprise-communications-calendar", "cerecore-mentorship-program"],
  },
  {
    slug: "marketing-advocacy-group",
    title: "Marketing Advocacy Group",
    organization: "CereCore, an HCA Healthcare company",
    period: "2025 – 2026",
    role: "Founder and Program Lead",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Internal Communications", "Social Media and Brand"],
    summary:
      "Founded an employee advocacy program, recruited and coached 34 members across departments, and helped them surface and tell accurate stories from their own teams.",
    challenge:
      "The people closest to the work had the best stories and the least confidence sharing them. Marketing could not be the only voice representing a technical, credibility driven business.",
    owned: [
      "Program design, recruitment and onboarding",
      "Coaching sessions and story sourcing prompts",
      "Messaging guidance and approval guardrails",
      "Connecting advocates to campaigns, events and content",
    ],
    audiences: ["Employees across departments", "Sales and delivery teams", "External social audiences"],
    deliverables: [
      "Advocacy program structure and charter",
      "Monthly prompts and ready to use messaging",
      "Coaching sessions and polling",
      "Campaign and event amplification kits",
    ],
    tools: ["LinkedIn", "Microsoft Teams", "SharePoint", "Canva"],
    results: [
      "34 employee advocates recruited and coached",
      "Consistent employee generated content tied to campaigns and events",
      "More stories sourced directly from delivery teams",
    ],
    headlineResult: "34 employee advocates recruited and coached across departments",
    tags: ["Employee Advocacy", "Social", "Enablement", "Program Design"],
    visibility: "Public",
    cover: { src: img.masterclassSession, alt: "Sierra Langford leading an internal communications masterclass" },
    links: [
      {
        label: "Open the advocacy program deck",
        url: "https://docs.google.com/presentation/d/1ToJpBzYzcjDxL32NxYqxC64OI3Hc2ycM/edit",
      },
    ],
    visualNote: SAMPLE_NOTE,
    related: ["cerecore-internal-comms", "cerecore-mentorship-program"],
  },
  {
    slug: "cerecore-mentorship-program",
    title: "CereCore Mentorship Program",
    organization: "CereCore, an HCA Healthcare company",
    period: "2025 – 2026",
    role: "Program Creator",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Internal Communications", "Entrepreneurship"],
    summary:
      "Built a company mentorship program from scratch, including structure, toolkit, recruitment and launch communications, and designed it to keep running without me.",
    challenge:
      "Employees wanted growth and connection across a distributed company, but there was no structure for pairing people or supporting mentors once they were matched.",
    owned: [
      "Program framework and matching structure",
      "Mentor and mentee toolkit",
      "Participant recruitment process",
      "Launch communications and enrollment campaign",
      "Mentor best practices session and materials",
    ],
    audiences: ["Employees", "People leaders", "Executive sponsors"],
    deliverables: [
      "Mentorship toolkit",
      "Program framework documentation",
      "Launch communication plan",
      "Mentor best practices presentation",
    ],
    tools: ["SharePoint", "Microsoft Teams", "PowerPoint", "Outlook"],
    results: [
      "Program launched company wide and continued after my departure",
      "Mentor best practices session delivered to an audience of 245 plus",
    ],
    headlineResult: "A program built from scratch that outlasted my tenure",
    tags: ["Program Design", "Culture", "Enablement"],
    visibility: "Public",
    cover: { src: img.mentorshipToolkit, alt: "CereCore Mentorship Toolkit presentation slide" },
    gallery: [
      { src: img.mentorshipToolkit, alt: "Mentorship toolkit presentation" },
      { src: img.mentorBestPractices, alt: "Sierra Langford presenting mentor best practices to a large audience" },
      { src: img.navigatingPurpose, alt: "Navigating With Purpose mentorship schedule and plan document" },
    ],
    links: [
      {
        label: "View the mentorship program deck",
        url: "https://docs.google.com/presentation/d/1ToJpBzYzcjDxL32NxYqxC64OI3Hc2ycM/edit",
      },
    ],
    related: ["cerecore-internal-comms", "marketing-advocacy-group"],
  },
  {
    slug: "enterprise-communications-calendar",
    title: "Enterprise Communications Calendar",
    organization: "CereCore, an HCA Healthcare company",
    period: "2025 – 2026",
    role: "Communications Strategist",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Internal Communications", "Executive Communications"],
    summary:
      "Identified a coordination gap across departments and built a centralized enterprise communications calendar with a repeatable planning process that departments adopted.",
    challenge:
      "Departments planned communications independently, so employees received overlapping messages in the same week while other weeks went quiet. Nobody had a single view of what was going out.",
    owned: [
      "Discovery interviews with each department",
      "Calendar structure and taxonomy",
      "Intake and planning process",
      "Rollout, training and adoption support",
    ],
    audiences: ["Department leads", "HR and operations", "Executive leadership", "All employees"],
    deliverables: [
      "Centralized communications calendar",
      "Repeatable planning and intake process",
      "Governance guidance for message timing",
    ],
    tools: ["SharePoint", "Microsoft Teams", "Excel", "Outlook"],
    results: [
      "Adopted across departments",
      "Estimated annual time savings of 1,468 hours (estimate)",
      "Described by leadership as a significant enabler across teams",
    ],
    headlineResult: "Adopted across departments with an estimated 1,468 hours saved annually",
    tags: ["Operations", "Internal Comms", "Process Design"],
    visibility: "Public",
    cover: { src: img.impactReview, alt: "2025 internal and external communications impact review deck" },
    gallery: [
      { src: img.impactReview, alt: "Title slide of the 2025 communications impact review" },
      { src: img.internalAgenda, alt: "2026 internal meetings agenda and planning calendar" },
    ],
    links: [
      {
        label: "Open communications examples",
        url: "https://drive.google.com/drive/folders/1vPKk2Qi0LDmxD8T9JWcJ4vP8_sNjpk1R",
      },
    ],
    related: ["cerecore-internal-comms", "cerecore-mentorship-program"],
  },
  {
    slug: "connection-2026",
    title: "Planned Connection 2026 Nashville Conference",
    organization: "CereCore, an HCA Healthcare company",
    period: "2026",
    role: "Communications and Content Lead",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Events and Field Marketing", "Executive Communications", "Podcasts and Video"],
    summary:
      "Planned and executed the flagship company wide event for approximately 1,000 attendees in person and virtual, owning communication strategy, content, run of show, executive scripts and onsite execution.",
    challenge:
      "A distributed company across the United States and United Kingdom needed one event that actually connected people, communicated strategy clearly and did not feel like a day of slides.",
    owned: [
      "Communication strategy and attendee journey",
      "Content plan and session structure",
      "Run of show and stage direction",
      "Executive scripts and speaker coaching",
      "Award video production",
      "Co writing and acting in the mockumentary style opening film",
      "Onsite execution and AV coordination",
    ],
    audiences: ["All employees", "Executive leadership", "Virtual attendees", "UK teams"],
    deliverables: [
      "Run of show",
      "Executive scripts",
      "Opening film",
      "Award videos",
      "Session content and stage graphics",
      "Pre-event and post-event communications",
    ],
    tools: ["PowerPoint", "Adobe Premiere", "Canva", "Microsoft Teams", "Survey tooling"],
    results: [
      "Approximately 500 in person and 500 virtual attendees",
      "95 percent of respondents rated the event 4 or 5 out of 5",
      "Feedback described it as the best Connection event yet",
    ],
    headlineResult: "Approximately 1,000 attendees and 95 percent top ratings",
    tags: ["Events", "Production", "Scriptwriting", "Executive Comms"],
    featured: true,
    visibility: "Public",
    cover: { src: img.connectionStage, alt: "Sierra Langford presenting on stage at Connection 2026" },
    gallery: [
      { src: img.connectionStage, alt: "Sierra Langford on stage at Connection 2026" },
      { src: img.liveEvent, alt: "Live event production at a company wide conference" },
      { src: img.companyMeeting, alt: "Sierra Langford presenting at a company meeting" },
      { src: img.connectionOutlines, alt: "Connection 2026 run of show and session outlines" },
    ],
    links: [{ label: "View company event work", url: "https://sierralangford.netlify.app/#events" }],
    related: ["himss-2026", "cerecore-internal-comms", "veronica-survivor-story"],
  },
  {
    slug: "himss-2026",
    title: "HIMSS 2026 Conference Interview Series",
    organization: "CereCore, an HCA Healthcare company",
    period: "2026",
    role: "Field Marketing and Content Producer",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Events and Field Marketing", "Podcasts and Video", "Healthcare and Health Technology"],
    summary:
      "Represented the company at HIMSS in Las Vegas and produced a short form interview series on the conference floor with a hospital CIO, a CNO, a health technology CMO and a MEDITECH partner.",
    challenge:
      "Conference presence usually produces a booth and a badge scan list. The goal was to leave with content worth publishing for months.",
    owned: [
      "Interview subject outreach and preparation",
      "Question development and on camera interviewing",
      "Onsite capture with phone, tripod and microphone",
      "Client dinner coordination and booth activation support",
      "Repurposing footage across social, newsletter and podcast content",
    ],
    audiences: ["Hospital executives", "Clients and prospects", "Partners", "Social audiences"],
    deliverables: [
      "Short form interview series",
      "Booth activation support materials",
      "Client dinner coordination",
      "Social clips and follow up content",
    ],
    tools: ["iPhone", "Lavalier microphone", "Adobe Premiere", "Descript", "LinkedIn"],
    results: [
      "Four executive interviews captured in two days",
      "Footage repurposed across social, newsletter and podcast channels",
    ],
    headlineResult: "Four executive interviews captured onsite and repurposed across every channel",
    tags: ["Trade Show", "Video", "Field Marketing", "Healthcare IT"],
    visibility: "Public",
    cover: { src: img.himssInterview, alt: "Sierra Langford interviewing a physician leader at HIMSS 2026" },
    gallery: [
      { src: img.himssInterview, alt: "Interview on the HIMSS conference floor" },
      { src: img.himssSuki, alt: "Booth interview at HIMSS 2026" },
      { src: img.himssMeditech, alt: "MEDITECH partner booth interview at HIMSS 2026" },
      { src: img.himssBoothInterview, alt: "Sierra Langford interviewing a guest at the CereCore booth at HIMSS 2026" },
      { src: img.himssInnovators, alt: "Sierra Langford with healthcare technology leaders at HIMSS 2026" },
      { src: img.videoRig, alt: "Mobile video production rig used on the conference floor" },
    ],
    links: [{ label: "View event work", url: "https://sierralangford.netlify.app/#events" }],
    related: ["connection-2026", "cerecore-podcast"],
  },
  {
    slug: "healthcare-customer-stories",
    title: "Healthcare Stories and Blogs",
    organization: "CereCore, an HCA Healthcare company",
    period: "2025 – 2026",
    role: "Storyteller and Case Study Lead",
    industries: ["Healthcare", "Health Technology"],
    categories: ["Customer Stories", "Healthcare and Health Technology", "Content and Editorial"],
    summary:
      "Interviewed hospital leaders, clients and subject matter experts to turn complex health IT implementations into clear human stories, published as case studies, blogs and feature articles used across marketing, sales and leadership communications.",
    challenge:
      "Implementation stories were written as technical summaries. They were accurate and forgettable, and they never showed the people affected by the work.",
    owned: [
      "Interviewing hospital leaders, clients and internal experts",
      "Story structure and writing",
      "Approvals with clients and legal",
      "Adaptation for web, newsletter, social, sales and leadership use",
    ],
    audiences: ["Prospective hospital clients", "Current clients", "Sales teams", "Employees", "Leadership"],
    deliverables: [
      "18 healthcare case studies",
      "More than 82 published stories and blogs",
      "Sales-ready one pagers and excerpts",
      "Social and newsletter adaptations",
    ],
    tools: ["HubSpot", "SharePoint", "Word", "Canva"],
    results: [
      "18 healthcare case studies produced",
      "More than 82 published stories",
      "Stories reused across sales conversations, newsletters and leadership messaging",
    ],
    headlineResult: "18 case studies and more than 82 published stories",
    tags: ["Case Studies", "Blogs", "Interviewing", "Healthcare IT", "Writing"],
    featured: true,
    visibility: "Public",
    cover: { src: img.veronica, alt: "A healthcare story subject with her son" },
    gallery: [
      { src: img.regionalCaseStudy, alt: "Regional Medical Center Epic go-live story with the project team" },
      { src: img.lehighCaseStudy, alt: "Lehigh Regional Medical Center EHR transformation story" },
      { src: img.schneckCaseStudy, alt: "Schneck Medical Center case study cover and results" },
      { src: img.appRationalizationStory, alt: "Published article on application rationalization in hospitals" },
    ],
    links: [
      {
        label: "Regional Medical Center Epic go live",
        url: "https://drive.google.com/file/d/1OTyBKQceCCv1Dpp8dxUBZ2uK6VJTQ8eC/view",
      },
      {
        label: "Lehigh Regional EHR transformation",
        url: "https://drive.google.com/file/d/13UBqFYqPYLevWCY32HYCWYZysbL3t3sS/view",
      },
      {
        label: "Schneck Medical Center story",
        url: "https://docs.google.com/document/d/1OmZxwCl2-X8nQjA7LkxY2gdTf4-BwvNI/edit",
      },
      {
        label: "App rationalization feature article",
        url: "https://cerecore.net/how-hospitals-are-using-app-rationalization-to-cut-costs-fast",
      },
    ],
    visualNote:
      "Published case studies and interview source documents are collected in the shared example library.",
    related: ["cerecore-client-newsletter", "cerecore-internal-comms", "veronica-survivor-story"],
  },

  {
    slug: "veronica-survivor-story",
    title: "Veronica's Survivor Story",
    organization: "CereCore, an HCA Healthcare company",
    period: "2025",
    role: "Concept, Interviewer and Producer",
    industries: ["Healthcare"],
    categories: ["Podcasts and Video", "Customer Stories", "Internal Communications"],
    summary:
      "Interviewed a colleague who nearly died and produced a company wide video that connected employees' daily technology work to patient survival.",
    challenge:
      "Employees who support hospital systems rarely see a patient. The connection between their work and clinical outcomes was abstract.",
    owned: [
      "Story concept and approach",
      "Interview with the subject",
      "Video production and edit direction",
      "Rollout as a company wide moment",
    ],
    audiences: ["All employees", "Leadership"],
    deliverables: ["Documentary style video", "Company wide screening and follow up communications"],
    tools: ["Adobe Premiere", "Canon", "Microsoft Teams"],
    results: [
      "Shown company wide",
      "Employees reported finally understanding why their work mattered",
    ],
    headlineResult: "A company wide story that connected technical work to patient survival",
    tags: ["Video", "Storytelling", "Internal Comms"],
    visibility: "Public",
    cover: { src: img.veronica, alt: "Story subject with her son making heart shapes with their hands" },
    links: [
      {
        label: "Watch the published story",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7319019919994458115/",
      },
    ],
    visualNote: "Published with subject approval.",
    related: ["connection-2026", "healthcare-customer-stories"],
  },
  {
    slug: "hca-censhare",
    title: "Censhare Change Communications",
    organization: "HCA Healthcare",
    period: "June 2024 – March 2025",
    role: "Marketing Operations",
    industries: ["Healthcare"],
    categories: ["Internal Communications", "AI and Technology", "Executive Communications"],
    summary:
      "Supported the enterprise rollout of the Censhare digital asset management platform inside a large matrixed health system, including stakeholder communications, training materials and adoption support.",
    challenge:
      "Thousands of digital assets and dozens of teams had to move to a new platform. Adoption depended on communication and training, not on the software.",
    owned: [
      "Stakeholder communication plans",
      "Articulate training module development",
      "Sizzle reel overview video",
      "Adoption and change communications",
      "Asset migration and tagging support",
    ],
    audiences: ["Marketing teams", "Agency partners", "Department stakeholders", "Platform administrators"],
    deliverables: [
      "Stakeholder communication plan",
      "Articulate training modules",
      "Platform overview sizzle reel",
      "Migration support documentation",
    ],
    tools: ["Censhare", "Articulate", "Adobe Premiere", "SharePoint", "Workfront"],
    results: [
      "Supported migration of more than 5,000 digital assets",
      "Tagged 318 assets in a single week during migration",
      "Training materials used across the rollout",
    ],
    headlineResult: "Supported migration of more than 5,000 digital assets",
    tags: ["Change Management", "Enablement", "DAM", "Training"],
    featured: true,
    visibility: "Public",
    cover: { src: img.marketingPortfolio, alt: "Portfolio of healthcare marketing and change communications work" },
    links: [
      {
        label: "Open change communications examples",
        url: "https://drive.google.com/drive/folders/1ENSKEChZdrzlr1R9JRAswM1xTK0n14rZ",
      },
    ],
    visualNote:
      "Training modules, the sizzle reel and migration documentation are collected in the shared example library.",
    related: ["ai-enablement", "cerecore-internal-comms"],
  },
  {
    slug: "monetizeiq-product-storytelling",
    title: "MonetizeIQ AI Product Storytelling",
    organization: "StrategyCorps",
    period: "May 2026 – August 2026",
    role: "Field Marketing Lead",
    industries: ["Financial Services", "AI and Emerging Technology"],
    categories: ["AI and Technology", "Social Media and Brand", "Content and Editorial"],
    summary:
      "Shaped how the market would understand MonetizeIQ, an AI platform for banks and credit unions, from hero statement and product narrative through voice guidance and video pitch concepts.",
    challenge:
      "The product's AI capability was real and technical. Bankers needed to hear business value, not model architecture, within the first sentence.",
    owned: [
      "Hero statement and core product narrative",
      "Voice and messaging guidance",
      "Video pitch concepts and short script",
      "Translation of technical AI capability into business value",
      "Field marketing playbooks, templates and repeatable systems",
    ],
    audiences: ["Bank and credit union executives", "Sales team", "Prospects", "Partners"],
    deliverables: [
      "Product narrative document",
      "Hero messaging and voice guidance",
      "Video script",
      "Presentation and roadshow slides",
      "Field marketing playbooks",
    ],
    tools: ["Notion", "Asana", "Claude", "Canva", "PowerPoint"],
    results: [
      "A single product narrative adopted across sales, events and marketing",
      "Repeatable field marketing playbooks created for the launch",
    ],
    headlineResult: "One product narrative adopted across sales, events and marketing",
    tags: ["AI", "Positioning", "Messaging", "Fintech", "Product Marketing"],
    featured: true,
    visibility: "Public",
    cover: { src: img.monetizeiqWebinar, alt: "MonetizeIQ webinar graphic featuring banking executives" },
    gallery: [
      {
        src: img.monetizeiqWebinar,
        alt: "MonetizeIQ webinar promotion graphic featuring BankPlus and StrategyCorps speakers",
      },
    ],
    links: [
      {
        label: "Read the webinar campaign: From Signal to Personalized Campaign",
        url: "https://docs.google.com/document/d/145zDc-PgsZoaOLu6RsK9VYWdSeZIbDjA/edit",
      },
      {
        label: "Read the webinar moderator script",
        url: "https://docs.google.com/document/d/1yc8L3tSjASZ19awbH14YBejBuas4C79q/edit",
      },
      {
        label: "Read the product story and video script",
        url: "https://docs.google.com/document/d/1LluIc2Pm4BpC8byMsg5TVERrQtI6iqcQYxX5bpBcXD0/edit",
      },
      {
        label: "View the StrategyCorps brand refresh overview",
        url: "https://drive.google.com/file/d/177rIn_IO9K94fpUeydYozrwJBw-vlDiG/view",
      },
    ],
    related: ["monetizeiq-roadshow", "ai-enablement", "strategycorps-leadership-series"],
  },
  {
    slug: "monetizeiq-roadshow",
    title: "MonetizeIQ Roadshow and Executive Events",
    organization: "StrategyCorps",
    period: "May 2026 – August 2026",
    role: "Field Marketing Lead",
    industries: ["Financial Services", "AI and Emerging Technology"],
    categories: ["Events and Field Marketing", "AI and Technology"],
    summary:
      "Built the field marketing foundation for an AI product launch: conference activations, roadshows, executive dinners, webinars and advisory board concepts, all supported by repeatable briefs and SOPs.",
    challenge:
      "A new AI product needed in-person credibility with conservative buyers, and the team needed a system they could repeat without rebuilding every event from scratch.",
    owned: [
      "Roadshow concepts and city selection support",
      "Executive dinner concepts and experience design",
      "Conference and booth activations",
      "Webinar and Client Advisory Board concepts",
      "Event briefs, SOPs, templates and workflows",
      "Attendee communications and follow up",
    ],
    audiences: ["Bank and credit union executives", "Prospects", "Clients", "Sales team"],
    deliverables: [
      "Roadshows in Indianapolis (Dallara Experience Hub), Chicago (LondonHouse) and Los Angeles (Aquarium of the Pacific)",
      "Executive dinners in Washington DC (Top of the Town), New York City (Penthouse 45) and Boston (Fenway Park)",
      "ABA Bank Marketing Conference strategy, booth layout and live demo concept",
      "VIP YETI Austin experience with personalization and shopping credit",
      "Account based marketing targeting and attendee communications",
    ],
    tools: ["Asana", "Notion", "HubSpot", "Canva", "PowerPoint"],
    results: [
      "A repeatable event system with briefs, SOPs and templates",
      "Programs refined using direct prospect feedback",
    ],
    headlineResult: "A repeatable national event system built during a product launch",
    tags: ["Field Marketing", "Events", "ABM", "Experience Design"],
    visibility: "Public",
    cover: { src: img.liveEvent, alt: "Guests at a MonetizeIQ executive event" },
    links: [
      {
        label: "Read the ABA Bank Marketing and YETI event campaign",
        url: "https://docs.google.com/document/d/1ZL96tEdb-p2n9T07zde_EdUpa4Xrxirl/edit",
      },
      {
        label: "View the YETI event landing page",
        url: "https://www2.strategycorps.com/l/146821/2026-07-14/fshhky",
      },
      {
        label: "Open the ABA and YETI event brief deck",
        url: "https://drive.google.com/file/d/12Ii7DZXHM5uVvNWjhwRLWmyhgjqf5MfG/view",
      },
      {
        label: "Open the field marketing playbook",
        url: "https://drive.google.com/file/d/1S2dzEvIKrst4avOPTPfM06lQUYIlKxmP/view",
      },
      {
        label: "Read the executive dinners event brief",
        url: "https://docs.google.com/document/d/10Nm3hh9uvpX9S9pZl_8EyTz5IcLnMnto/edit",
      },
      {
        label: "View the executive dinner format refresh",
        url: "https://drive.google.com/file/d/1IWQ7U0BKZ5mKjNYW2cd7Cla81VL0lLL6/view",
      },
      {
        label: "Open the Future Branches event materials",
        url: "https://drive.google.com/drive/folders/15-nqNDZc6u5JBhYjVF6Vtfgv9j1yeBni",
      },
      {
        label: "Open the field marketing and events library",
        url: "https://drive.google.com/drive/folders/18_KRSaVno8giwpuOWfNI-5hIOVj54MPI",
      },
    ],
    visualNote: SAMPLE_NOTE,
    related: ["monetizeiq-product-storytelling", "himss-2026"],
  },
  {
    slug: "strategycorps-leadership-series",
    title: "25th Anniversary Leadership Interview Series",
    organization: "StrategyCorps",
    period: "2026",
    role: "Creator and Interviewer",
    industries: ["Financial Services"],
    categories: ["Executive Communications", "Content and Editorial", "Podcasts and Video"],
    summary:
      "Created a leadership interview series with 11 executives to capture company history and perspective, and turned it into reusable brand content.",
    challenge:
      "Twenty five years of company history lived in the memories of a handful of leaders and had never been captured in a usable form.",
    owned: [
      "Storytelling framework",
      "Interview question development",
      "Interviews with 11 executives",
      "Editing into reusable brand content",
    ],
    audiences: ["Clients", "Prospects", "Employees", "Partners"],
    deliverables: ["Interview framework", "Question sets", "Edited interview content", "Anniversary campaign assets"],
    tools: ["Notion", "Descript", "Canva"],
    results: ["11 executive interviews captured", "Reusable brand and anniversary content library"],
    headlineResult: "11 executive interviews turned into a reusable content library",
    tags: ["Executive Comms", "Interviewing", "Brand"],
    visibility: "Public",
    cover: { src: img.videoRig, alt: "Video interview rig set up for a leadership interview series" },
    links: [
      {
        label: "Read the leadership interview series",
        url: "https://docs.google.com/document/d/1ZuAfEmrjQHvbHvLQ5gEw1rscaiuLkhrz/edit",
      },
    ],
    visualNote: SAMPLE_NOTE,
    related: ["monetizeiq-product-storytelling"],
  },
  {
    slug: "ai-enablement",
    title: "AI Enablement and Workflow Design",
    organization: "CereCore and StrategyCorps",
    period: "2025 – 2026",
    role: "AI Steering Committee Member and Practitioner",
    industries: ["Healthcare", "Financial Services", "AI and Emerging Technology"],
    categories: ["AI and Technology", "Internal Communications"],
    summary:
      "Helped teams adopt AI in practical, role relevant ways: training colleagues on everyday tools and designing assisted workflows that removed real administrative work.",
    challenge:
      "AI enthusiasm outpaced AI usefulness. People needed permission, guardrails and concrete examples tied to their own jobs, not another webinar about the future of work.",
    owned: [
      "Serving on the AI Steering Committee",
      "Teaching colleagues to use ChatGPT, Gemini, Microsoft Copilot, Notion AI, Claude and Perplexity",
      "Designing role relevant AI workflows",
      "Building an AI assisted follow up workflow connecting Outlook, Teams, SharePoint and Office to Asana",
      "Building repeatable marketing systems in Notion, Asana and Claude",
    ],
    audiences: ["Marketing teams", "Department leads", "Executives", "Colleagues across functions"],
    deliverables: [
      "Enablement sessions and practical guides",
      "AI assisted follow up workflow",
      "Repeatable marketing system templates",
    ],
    tools: ["ChatGPT", "Claude", "Microsoft Copilot", "Gemini", "Perplexity", "Notion AI", "Asana"],
    results: [
      "Teams using AI in daily workflows rather than in experiments",
      "Follow up and task capture automated across Microsoft tools and Asana",
    ],
    headlineResult: "Practical AI adoption across marketing and communications workflows",
    tags: ["AI Enablement", "Workflow Design", "Training", "Systems"],
    visibility: "Public",
    cover: { src: img.boardroomPresentation, alt: "Sierra Langford presenting a practical communications workshop" },
    links: [
      {
        label: "Open AI and workflow examples",
        url: "https://drive.google.com/drive/folders/18_KRSaVno8giwpuOWfNI-5hIOVj54MPI",
      },
    ],
    visualNote: SAMPLE_NOTE,
    related: ["monetizeiq-product-storytelling", "hca-censhare"],
  },
  {
    slug: "cyberprotex",
    title: "CyberProtex Cybersecurity Communications",
    organization: "CyberProtex (Strive Society client)",
    period: "June 2023 – January 2024",
    role: "Sales and Marketing Strategist",
    industries: ["Cybersecurity", "Government", "Technology"],
    categories: ["Cybersecurity", "AI and Technology", "Content and Editorial"],
    summary:
      "Led marketing for a cybersecurity training and managed security services firm, from brand positioning and go to market content through lead generation and signed contracts.",
    challenge:
      "Highly technical certification and managed security offerings were being sold to buyers who needed plain language, proof and trust before they would take a meeting.",
    owned: [
      "Brand positioning and messaging",
      "Go to market content",
      "Ideal customer profile and account based marketing frameworks",
      "Lead generation through signed contracts",
      "Email campaigns and social content",
      "Lunch and Learn webinars and technical demos",
      "Website maintenance",
    ],
    audiences: [
      "Enterprise security buyers",
      "Government and defense contacts",
      "Certification students",
      "Partners connected to NASA work",
    ],
    deliverables: [
      "Positioning and messaging framework",
      "Email campaigns and nurture sequences",
      "Webinar and Lunch and Learn programs",
      "Social content and website updates",
      "CISSP and Security Plus program marketing",
    ],
    tools: ["WordPress", "Mailchimp", "LinkedIn", "Zoom", "Canva"],
    results: [
      "96 percent certification exam pass rate supported by program marketing and enablement",
      "Pipeline managed from lead generation through signed contracts",
    ],
    headlineResult: "96 percent certification exam pass rate and pipeline owned to signed contracts",
    tags: ["Cybersecurity", "ABM", "Demand Generation", "Webinars"],
    visibility: "Public",
    links: [{ label: "Visit the CyberProtex site", url: "https://www.cyberprotex.com/" }],
    cover: {
      src: img.cyberprotexBootcamp,
      alt: "CyberProtex CISSP Exam Prep Bootcamp promotional graphic with instructor headshot",
    },
    related: ["strive-society", "digital-motif"],
  },
  {
    slug: "strive-society",
    title: "Strive Society Creative",
    organization: "Strive Society",
    period: "August 2017 – Present",
    role: "Founder and Creative Marketing Partner",
    industries: [
      "Healthcare",
      "Cybersecurity",
      "Technology",
      "Real Estate",
      "Retail",
      "Hospitality",
      "Professional Services",
    ],
    categories: ["Entrepreneurship", "Social Media and Brand", "Photography and Creative Work"],
    summary:
      "Founded and still run a creative marketing practice with 16 long term client partnerships across healthcare, cybersecurity, technology, real estate, retail, hospitality and professional services.",
    challenge:
      "Small and mid sized organizations rarely need an agency retainer. They need one strategic partner who can think, write, shoot and ship.",
    owned: [
      "Prospecting, pitching and closing accounts independently",
      "Marketing strategy and go to market plans",
      "Ideal customer profiles and account based campaigns",
      "Websites, email campaigns, SEO content and social media",
      "Photography, video and podcast production",
      "Webinars and events",
      "Directing a team of four creatives",
    ],
    audiences: ["Small and mid sized business owners", "Executives", "Local and regional customers"],
    deliverables: [
      "Brand and go to market strategy",
      "Websites and content systems",
      "Email and social programs",
      "Photography and video libraries",
      "Podcasts, webinars and events",
    ],
    tools: ["Squarespace", "WordPress", "Mailchimp", "HubSpot", "Adobe Creative Suite", "Canon R5 and R10"],
    results: [
      "16 long term client partnerships",
      "A practice sustained alongside full time roles since 2017",
      "A team of four creatives directed on client work",
    ],
    headlineResult: "16 long term client partnerships built since 2017",
    tags: ["Entrepreneurship", "Agency", "Brand", "Photography"],
    visibility: "Public",
    cover: { src: img.brandBanner, alt: "Marketing and brand storytelling since 2017 banner" },
    links: [
      {
        label: "Open the client work library",
        url: "https://drive.google.com/drive/folders/1vPKk2Qi0LDmxD8T9JWcJ4vP8_sNjpk1R",
      },
      {
        label: "Open the client writing samples",
        url: "https://drive.google.com/drive/folders/10PoINBpU3fUhLH5d6kowvAprFkK0KdjU",
      },
    ],
    related: ["cyberprotex", "digital-motif", "photography"],
  },
  {
    slug: "digital-motif",
    title: "Digital Motif Client Portfolio",
    organization: "Digital Motif Marketing",
    period: "January 2024 – June 2024",
    role: "Marketing Communications Manager",
    industries: ["Retail", "Hospitality", "Real Estate", "Food and Beverage"],
    categories: ["Social Media and Brand", "Photography and Creative Work", "Content and Editorial"],
    summary:
      "Managed strategy and content for 13 client accounts and 16 social channels supporting approximately 225,000 combined followers, while directing photo and video shoots.",
    challenge:
      "Thirteen very different local brands needed distinct voices, consistent output and content good enough to compete with national advertising budgets.",
    owned: [
      "Content strategy for 13 accounts",
      "Management of 16 social channels",
      "Photo and video shoot direction",
      "Campaign planning and reporting",
    ],
    audiences: ["Local and regional consumers", "Restaurant and retail customers", "Business owners"],
    deliverables: [
      "Monthly content calendars",
      "Photography and video libraries",
      "Social campaigns and community management",
    ],
    tools: ["Later", "Meta Business Suite", "Canon", "Lightroom", "Canva"],
    results: [
      "Approximately 225,000 combined followers supported",
      "16 social channels managed across 13 accounts",
    ],
    headlineResult: "Approximately 225,000 combined followers across 16 managed channels",
    tags: ["Social Media", "Content", "Photography", "Local Brands"],
    visibility: "Archive only",
    cover: { src: img.photographyCanon, alt: "Sierra Langford directing photography and social content" },
    links: [
      {
        label: "Open client campaign examples",
        url: "https://drive.google.com/drive/folders/1vPKk2Qi0LDmxD8T9JWcJ4vP8_sNjpk1R",
      },
    ],
    visualNote:
      "Former client work. Client examples included Ancient Lore Village, Alewine Pottery, Crafty Bastard Brewery, Smash City Burger, Wagon Wheel Knoxville, Brentwood Jewelry, Roxana's Hair, Knox Brewsters, Elrod Laskey Group, Salsarita's East Tennessee, Advantage Shutters, CyberProtex and Rafael Custom Jewelry. Examples are collected in the shared example library.",
    related: ["strive-society", "photography"],
  },
  {
    slug: "national-panhellenic-conference",
    title: "National Panhellenic Conference Creative Design",
    organization: "National Panhellenic Conference",
    period: "August 2021 – August 2022",
    role: "Creative Designer",
    industries: ["Nonprofit", "Education"],
    categories: ["Earlier Career Archive", "Social Media and Brand"],
    summary:
      "Supported marketing strategies and communications for a national organization, with visual communication work focused on alumni and community connection.",
    challenge:
      "A national membership organization needed communications that felt personal to local chapters and alumni.",
    owned: ["Visual design support", "Communications materials", "Community oriented content"],
    audiences: ["Members", "Alumni", "Chapter leaders"],
    deliverables: ["Design assets", "Communication materials", "Community campaigns"],
    tools: ["Adobe Creative Suite", "Canva"],
    results: ["Strengthened alumni and community connection through consistent visual communication"],
    headlineResult: "Communications and design supporting national alumni engagement",
    tags: ["Design", "Community", "Nonprofit"],
    archive: true,
    visibility: "Archive only",
    cover: { src: img.brandBanner, alt: "Creative marketing and community communications portfolio artwork" },
    links: [
      {
        label: "Open design examples",
        url: "https://drive.google.com/drive/folders/1vPKk2Qi0LDmxD8T9JWcJ4vP8_sNjpk1R",
      },
    ],
    visualNote: SAMPLE_NOTE,
    related: ["strive-society"],
  },
  {
    slug: "bliss-box",
    title: "Bliss Box",
    organization: "Williamson County Entrepreneurship and Innovation Campus",
    period: "2019 – 2021",
    role: "Founder",
    industries: ["Mental Health", "Consumer"],
    categories: ["Entrepreneurship", "Earlier Career Archive"],
    summary:
      "Created a mental health wellness care package with coping tools for anxiety and stress, funded and mentored through a county entrepreneurship program.",
    challenge:
      "Students and patients dealing with anxiety were given advice but rarely given anything tangible to use in the moment.",
    owned: [
      "Product concept and contents",
      "Branding and packaging",
      "Funding pitch and mentorship program participation",
      "Distribution to a therapy practice",
      "Public speaking in Williamson County schools",
    ],
    audiences: ["Students", "Therapy practice clients", "School communities"],
    deliverables: ["Care package product", "Brand identity", "School speaking program"],
    tools: ["Adobe Illustrator", "Canva"],
    results: [
      "Approximately 80 care packages created and distributed to a therapy practice",
      "Spoke at Williamson County schools on mental health, resilience and entrepreneurship",
    ],
    headlineResult: "Approximately 80 care packages distributed and school speaking engagements",
    tags: ["Entrepreneurship", "Mental Health", "Product", "Speaking"],
    visibility: "Public",
    cover: { src: img.navigatingPurpose, alt: "Creative planning materials representing Sierra's early program work" },
    links: [
      {
        label: "Open early creative examples",
        url: "https://drive.google.com/drive/folders/1vPKk2Qi0LDmxD8T9JWcJ4vP8_sNjpk1R",
      },
    ],
    related: ["realscreen-breaking-in"],
  },
  {
    slug: "realscreen-breaking-in",
    title: "Real Screen Summit and Breaking In",
    organization: "Real Screen Summit, New Orleans",
    period: "2024",
    role: "Creator and Editor",
    industries: ["Entertainment", "Media"],
    categories: ["Earlier Career Archive", "Podcasts and Video", "Photography and Creative Work"],
    summary:
      "Pitched an original television concept called Breaking In to Netflix and Hulu executives at the Real Screen Summit in New Orleans, backed by a pitch deck and a sizzle reel I wrote, shot and edited.",
    challenge:
      "The pitch had to hold its own in a room of working producers, which meant the concept and the sizzle reel had to be genuinely watchable.",
    owned: ["Show concept", "Pitch deck", "Sizzle reel edit in Adobe Premiere", "Live pitch delivery"],
    audiences: ["Netflix and Hulu executives", "Industry producers"],
    deliverables: ["Pitch deck", "Sizzle reel", "Live pitch"],
    tools: ["Adobe Premiere", "Keynote"],
    results: ["Pitched directly to Netflix and Hulu executives", "Featured in published coverage of the summit"],
    headlineResult: "Pitched an original show concept to Netflix and Hulu executives",
    tags: ["Pitching", "Video", "Entertainment", "Storytelling"],
    visibility: "Public",
    cover: { src: img.videoRig, alt: "Video production setup representing Sierra's pitch and editing work" },
    links: [
      { label: "Watch the video", url: "https://youtu.be/Seat0OVm6D4" },
      {
        label: "Read the article",
        url: "https://jem.utk.edu/2024/03/05/students-attend-realscreen-summit-2024-in-new-orleans",
      },
    ],
    related: ["bliss-box", "earlier-creative-work"],
  },
  {
    slug: "photography",
    title: "Photography and Shoot Direction",
    organization: "Strive Society and client work",
    period: "2017 – Present",
    role: "Photographer and Creative Director",
    industries: ["Retail", "Hospitality", "Healthcare", "Professional Services"],
    categories: ["Photography and Creative Work", "Social Media and Brand"],
    summary:
      "Portrait, event, brand and social photography that feeds directly into the content, campaigns and stories I build. Photography is how I learned to see the visual story inside a project.",
    challenge:
      "Most marketing content fails visually before anyone reads a word. Being able to shoot means never waiting for a stock image that almost works.",
    owned: [
      "Portrait, event and brand photography",
      "Social media photography",
      "Photo and video shoot direction",
      "Editing and asset library management",
    ],
    audiences: ["Clients", "Brands", "Event attendees", "Social audiences"],
    deliverables: ["Brand photo libraries", "Event coverage", "Portraits", "Social ready assets"],
    tools: ["Canon EOS R5", "Canon EOS R10", "Lightroom", "Adobe Premiere"],
    results: ["A multi year body of client and event photography used across campaigns and content"],
    headlineResult: "A working photography practice that supplies the content I strategize",
    tags: ["Photography", "Creative Direction", "Events", "Portraits"],
    visibility: "Public",
    cover: { src: img.photographyCanon, alt: "Sierra Langford holding a Canon camera on a shoot" },
    gallery: [
      { src: img.photographyCanon, alt: "Sierra Langford photographing on location" },
      { src: img.liveEvent, alt: "Live event photography" },
    ],
    links: [{ label: "View photography portfolio", url: "https://sierralangfordphotography.mypixieset.com/" }],
    related: ["strive-society", "digital-motif"],
  },
  {
    slug: "earlier-creative-work",
    title: "Earlier Creative and Academic Work",
    organization: "University of Tennessee, Knoxville",
    period: "2021 – 2024",
    role: "Student Creator",
    industries: ["Media", "Education"],
    categories: ["Earlier Career Archive", "Photography and Creative Work"],
    summary:
      "An archive of earlier creative and academic work, including a stage play, media research projects, mental health advocacy work and songwriting.",
    challenge:
      "Early creative work is where the habits form: structure, tension, clarity and knowing when an audience is about to stop listening.",
    owned: ["Writing", "Research", "Production", "Songwriting and creative media work"],
    audiences: ["Faculty", "Student audiences", "Workshop participants"],
    deliverables: [
      "Trapped, an original play",
      "Media stereotypes research project",
      "Mental health priority project",
      "Beats reporting assignment",
      "Couples personal development workshop",
      "Songwriting and creative media projects",
    ],
    tools: ["Adobe Premiere", "Word", "Piano"],
    results: ["A creative foundation that still shapes how I structure stories"],
    headlineResult: "The creative foundation underneath the professional work",
    tags: ["Archive", "Creative Writing", "Songwriting", "Academic"],
    archive: true,
    visibility: "Archive only",
    cover: { src: img.boardroomPresentation, alt: "Sierra Langford presenting creative storytelling work" },
    links: [
      {
        label: "Open the writing sample library",
        url: "https://drive.google.com/drive/folders/10PoINBpU3fUhLH5d6kowvAprFkK0KdjU",
      },
    ],
    related: ["realscreen-breaking-in"],
  },
];

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  categories: groupCategories(p.categories),
}));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredSlugs = [
  "cerecore-podcast",
  "cerecore-internal-comms",
  "connection-2026",
  "monetizeiq-product-storytelling",
  "healthcare-customer-stories",
  "hca-censhare",
];

export const featuredProjects = featuredSlugs
  .map((s) => getProject(s))
  .filter((p): p is Project => Boolean(p));

export const allIndustries = Array.from(new Set(projects.flatMap((p) => p.industries))).sort();
export const allOrganizations = Array.from(new Set(projects.map((p) => p.organization))).sort();
export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
