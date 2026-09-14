import { createFileRoute, Link } from "@tanstack/react-router";
import { roles, skills } from "@/data/career";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Sierra Langford, Marketing and Communications Strategist" },
      {
        name: "description",
        content:
          "Resume for Sierra Langford: communications strategy, content, events, podcasts, AI enablement and field marketing across healthcare, fintech and small business.",
      },
      { property: "og:title", content: "Resume — Sierra Langford" },
      {
        property: "og:description",
        content: "Experience, skills, education and certifications, with links to real project examples.",
      },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

function Resume() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Sierra Langford</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Marketing and Communications Strategist · Franklin, Tennessee
          </p>
        </div>
        <div className="flex flex-wrap gap-3 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-foreground px-5 py-3 text-sm text-primary-foreground hover:opacity-90"
          >
            Download resume
          </button>
          <a
            href="https://www.linkedin.com/in/sierralangford1/"
            target="_blank"
            rel="noreferrer noopener"
            className="border border-foreground px-5 py-3 text-sm hover:bg-secondary"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-3xl">Summary</h2>
        <p className="mt-4 leading-relaxed text-foreground/85">
          Marketing and communications strategist across healthcare, health technology, AI, cybersecurity and
          small business. I find the human story underneath complicated work, then build the communications,
          programs, content and experiences that help people understand it and care. Award winning podcast
          producer, internal communications lead, customer story writer, event producer and founder of a
          creative marketing practice running since 2017.
        </p>
      </section>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-3xl">Core skills</h2>
        <div className="mt-5 grid gap-8 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-xl">{group}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-3xl">Experience</h2>
        <div className="mt-6 space-y-9">
          {roles.map((role) => (
            <div key={`${role.organization}-${role.title}-${role.start}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl">{role.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {role.start} – {role.end}
                </p>
              </div>
              <p className="text-muted-foreground">{role.organization}</p>
              <ul className="mt-3 space-y-1.5 text-[0.98rem] leading-relaxed text-foreground/85">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-teal" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {role.projects && role.projects.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2 print:hidden">
                  {role.projects.map((slug) => {
                    const p = getProject(slug);
                    if (!p) return null;
                    return (
                      <Link
                        key={slug}
                        to="/work/$slug"
                        params={{ slug }}
                        className="link-underline text-sm text-muted-foreground"
                      >
                        {p.title}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-3xl">Education</h2>
        <p className="mt-4 text-xl">University of Tennessee, Knoxville</p>
        <p className="mt-1 leading-relaxed text-muted-foreground">
          Bachelor of Science in Communication, Journalism and Electronic Media, Creative Media Concentration.
          Magna Cum Laude, graduated in three years, GPA 3.81.
        </p>
      </section>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-3xl">Recognition and certifications</h2>
        <ul className="mt-4 space-y-2 leading-relaxed text-foreground/85">
          <li>Gold Stevie Award, Technology Shows, for The CereCore Podcast</li>
          <li>CereCore AI Steering Committee member</li>
          <li>HubSpot email and content marketing platform experience</li>
          <li>Selected to represent the University of Tennessee at the Real Screen Summit</li>
        </ul>
      </section>

      <section className="mt-12 border-t border-border pt-8 print:hidden">
        <h2 className="text-3xl">See the proof</h2>
        <p className="mt-4 leading-relaxed text-foreground/85">
          Every role above has real project pages with the challenge, what I owned and the result.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/work" className="bg-foreground px-5 py-3 text-sm text-primary-foreground hover:opacity-90">
            Browse the work archive
          </Link>
          <Link to="/contact" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
            Contact me
          </Link>
        </div>
      </section>
    </div>
  );
}
