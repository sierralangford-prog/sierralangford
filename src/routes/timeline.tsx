import { createFileRoute, Link } from "@tanstack/react-router";
import { roles } from "@/data/career";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Experience — Sierra Langford" },
      {
        name: "description",
        content:
          "Professional experience across communications, healthcare technology, field marketing, agency leadership and entrepreneurship.",
      },
      { property: "og:title", content: "Experience — Sierra Langford" },
      {
        property: "og:description",
        content: "Organizations, roles, responsibilities and project proof across Sierra Langford's career.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/timeline" },
    ],
    links: [{ rel: "canonical", href: "/timeline" }],
  }),
  component: Timeline,
});

const experienceGroups = [
  {
    label: "In-house communications and technology",
    organizations: ["StrategyCorps", "CereCore, an HCA Healthcare company", "HCA Healthcare"],
  },
  {
    label: "Agency, consulting and client leadership",
    organizations: ["Digital Motif Marketing", "CyberProtex", "ABH Connect", "Strive Society"],
  },
  {
    label: "Creative and community foundations",
    organizations: ["National Panhellenic Conference", "WCS Entrepreneurship and Innovation Campus"],
  },
];

function Timeline() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Experience</p>
      <h1 className="mt-4 max-w-4xl text-4xl leading-tight sm:text-5xl">
        A career built across stories, systems, programs and experiences.
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-foreground/80">
        This is an overview of the environments where I have worked and the scope I have owned. The project
        archive holds the detailed proof, organized by type of work rather than chronology.
      </p>

      <div className="mt-14 space-y-16">
        {experienceGroups.map((group) => {
          const groupRoles = roles.filter((role) => group.organizations.includes(role.organization));
          return (
            <section key={group.label}>
              <h2 className="rule-top pt-5 text-3xl">{group.label}</h2>
              <div className="mt-7 grid gap-x-10 gap-y-12 md:grid-cols-2">
                {groupRoles.map((role) => (
                  <article key={`${role.organization}-${role.title}`}>
                    <p className="eyebrow">{role.organization}</p>
                    <h3 className="mt-2 text-2xl leading-snug">{role.title}</h3>
                    {role.note ? <p className="mt-2 text-sm text-muted-foreground">{role.note}</p> : null}
                    <ul className="mt-4 space-y-2">
                      {role.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex gap-3 leading-relaxed text-foreground/85">
                          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    {role.projects && role.projects.length > 0 ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {role.projects.map((slug) => {
                          const project = getProject(slug);
                          if (!project) return null;
                          return (
                            <Link
                              key={slug}
                              to="/work/$slug"
                              params={{ slug }}
                              className="border border-border bg-secondary px-3 py-1.5 text-sm hover:border-foreground"
                            >
                              {project.title}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <p className="max-w-2xl leading-relaxed text-foreground/85">
          Looking for the tailored chronology? Use the current resume. Looking for evidence of how I work?
          Browse the project archive by capability.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/work" className="bg-foreground px-5 py-3 text-sm text-primary-foreground hover:opacity-90">
            Browse work by capability
          </Link>
          <Link to="/resume" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
            View resume
          </Link>
        </div>
      </div>
    </div>
  );
}
