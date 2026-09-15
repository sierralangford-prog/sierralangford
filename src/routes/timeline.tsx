import { createFileRoute, Link } from "@tanstack/react-router";
import { roles, skills } from "@/data/career";
import { getProject } from "@/data/projects";
import { img } from "@/lib/images";
import linkedinPdf from "@/assets/linkedin-pdf.asset.json";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Experience — Sierra Langford" },
      {
        name: "description",
        content:
          "Sierra Langford's experience, skills, education and certifications across communications, healthcare technology, field marketing and creative work.",
      },
      { property: "og:title", content: "Experience — Sierra Langford" },
      {
        property: "og:description",
        content: "Roles, accomplishments, credentials and project proof in one page.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/timeline" },
    ],
    links: [{ rel: "canonical", href: "/timeline" }],
  }),
  component: Experience,
});

function Experience() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="eyebrow">Experience</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Sierra Langford</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Marketing and Communications Strategist · Franklin, Tennessee
          </p>
        </div>
        <div className="flex flex-wrap gap-3 print:hidden">
          <a
            href={linkedinPdf.url}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-foreground px-5 py-3 text-sm text-primary-foreground hover:opacity-90"
          >
            Download PDF
          </a>
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
        <div className="space-y-10">
          {roles.map((role) => (
            <article key={`${role.organization}-${role.title}`}>
              <h2 className="text-2xl leading-snug">{role.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{role.organization}</p>
              <ul className="mt-3 space-y-2">
                {role.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-relaxed text-foreground/85">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              {role.projects && role.projects.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
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

      <section className="mt-14 border-t border-border pt-8">
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

      <section className="mt-14 border-t border-border pt-8">
        <h2 className="text-3xl">Education</h2>
        <p className="mt-4 text-xl">University of Tennessee, Knoxville</p>
        <p className="mt-1 leading-relaxed text-muted-foreground">
          Bachelor of Science in Communication, Journalism and Electronic Media, Creative Media Concentration.
          Magna Cum Laude, graduated in three years, GPA 3.81.
        </p>
      </section>

      <section className="mt-14 border-t border-border pt-8">
        <h2 className="text-3xl">Recognition and certifications</h2>
        <ul className="mt-4 space-y-2 leading-relaxed text-foreground/85">
          <li>Gold Stevie Award, Technology Shows, for The CereCore Podcast</li>
          <li>CereCore AI Steering Committee member</li>
          <li>HubSpot Academy, Social Media Certified</li>
          <li>Hootsuite Academy, Social Media Marketing Certification</li>
          <li>Hootsuite Academy, Hootsuite Platform Certification</li>
          <li>Selected to represent the University of Tennessee at the Real Screen Summit</li>
        </ul>
        <div className="mt-8 grid gap-5 sm:grid-cols-3 print:hidden">
          {[
            { src: img.certHubspotSocial, alt: "HubSpot Academy Social Media Certified certificate" },
            { src: img.certHootsuiteSmm, alt: "Hootsuite Academy Social Media Marketing Certification" },
            { src: img.certHootsuitePlatform, alt: "Hootsuite Academy Platform Certification" },
          ].map((c) => (
            <img
              key={c.alt}
              src={c.src}
              alt={c.alt}
              loading="lazy"
              className="w-full border border-border object-cover"
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground print:hidden">
          Certificates are issued under my maiden name, Sierra Scott.
        </p>
      </section>

      <div className="mt-16 border-t border-border pt-8 flex flex-wrap gap-3 print:hidden">
        <Link to="/work" className="bg-foreground px-5 py-3 text-sm text-primary-foreground hover:opacity-90">
          Browse the work archive
        </Link>
        <Link to="/contact" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
          Contact me
        </Link>
      </div>
    </div>
  );
}
