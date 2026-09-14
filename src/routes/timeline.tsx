import { createFileRoute, Link } from "@tanstack/react-router";
import { roles } from "@/data/career";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Career Timeline — Sierra Langford" },
      {
        name: "description",
        content:
          "Roles from 2017 to today across StrategyCorps, CereCore, HCA Healthcare, Digital Motif, CyberProtex, ABH Connect and Strive Society.",
      },
      { property: "og:title", content: "Career Timeline — Sierra Langford" },
      {
        property: "og:description",
        content: "A decade of marketing and communications roles, with the projects attached to each one.",
      },
      { property: "og:url", content: "/timeline" },
    ],
    links: [{ rel: "canonical", href: "/timeline" }],
  }),
  component: Timeline,
});

function Timeline() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Career Timeline</p>
      <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">One career, built in public since 2017.</h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-foreground/80">
        CereCore is a subsidiary of HCA Healthcare, so you will see both names here. Strive Society has run
        alongside every role since 2017.
      </p>

      <ol className="mt-14 border-l border-border">
        {roles.map((role) => (
          <li key={`${role.organization}-${role.title}-${role.start}`} className="relative pb-14 pl-8 last:pb-0">
            <span aria-hidden className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-teal" />
            <p className="eyebrow">
              {role.start} – {role.end}
            </p>
            <h2 className="mt-2 text-3xl leading-snug">{role.title}</h2>
            <p className="mt-1 text-lg text-muted-foreground">{role.organization}</p>
            {role.note ? <p className="mt-1 text-sm text-muted-foreground">{role.note}</p> : null}

            <ul className="mt-4 space-y-2">
              {role.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {role.projects && role.projects.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {role.projects.map((slug) => {
                  const p = getProject(slug);
                  if (!p) return null;
                  return (
                    <Link
                      key={slug}
                      to="/work/$slug"
                      params={{ slug }}
                      className="border border-border bg-secondary px-3 py-1.5 text-sm hover:border-foreground"
                    >
                      {p.title}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
