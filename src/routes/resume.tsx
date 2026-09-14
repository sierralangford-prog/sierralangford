import { createFileRoute, Link } from "@tanstack/react-router";
import { skills } from "@/data/career";
import { img } from "@/lib/images";
import linkedinPdf from "@/assets/linkedin-pdf.asset.json";

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
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
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
            Print this resume
          </button>
          <a
            href={linkedinPdf.url}
            target="_blank"
            rel="noreferrer noopener"
            className="border border-foreground px-5 py-3 text-sm hover:bg-secondary"
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
        <h2 className="text-3xl">Summary</h2>
        <p className="mt-4 leading-relaxed text-foreground/85">
          Marketing and communications strategist across healthcare, health technology, AI, cybersecurity and
          small business. I find the human story underneath complicated work, then build the communications,
          programs, content and experiences that help people understand it and care. Award winning podcast
          producer, internal communications lead, customer story writer, event producer and founder of a
          creative marketing practice serving clients across multiple industries.
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
        <h2 className="text-3xl">Experience at a glance</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-foreground/85">
          Substantial experience spanning in-house communications, healthcare technology, field marketing,
          agency leadership and entrepreneurship. The portfolio documents the organizations, responsibilities,
          deliverables and measurable outcomes behind that work.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 print:hidden">
          <Link to="/timeline" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
            View experience
          </Link>
          <Link to="/work" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
            Browse project proof
          </Link>
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
