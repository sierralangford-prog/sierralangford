import { createFileRoute, Link } from "@tanstack/react-router";
import { testimonials, type Testimonial } from "@/data/testimonials";

export const Route = createFileRoute("/recognition")({
  head: () => ({
    meta: [
      { title: "Recognition and References — Sierra Langford" },
      {
        name: "description",
        content:
          "Recommendations and recognition from colleagues and leaders at CereCore, HCA Healthcare and beyond, about storytelling, podcasts, events and internal communications.",
      },
      { property: "og:title", content: "Recognition and References — Sierra Langford" },
      {
        property: "og:description",
        content: "What the people Sierra Langford has worked with say about her work.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/recognition" },
    ],
    links: [{ rel: "canonical", href: "/recognition" }],
  }),
  component: Recognition,
});

function Quote({ t, large = false }: { t: Testimonial; large?: boolean }) {
  return (
    <figure className={`border border-border bg-card p-6 ${large ? "" : "h-full"}`}>
      <blockquote className={large ? "space-y-4" : ""}>
        {t.quote.split("\n\n").map((para, i) => (
          <p
            key={i}
            className={`leading-relaxed text-foreground/85 ${large && i === 0 ? "font-display text-xl sm:text-2xl leading-snug text-foreground" : ""}`}
          >
            {para}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-5 border-l-2 border-coral pl-3 text-sm">
        <span className="font-medium">{t.name}</span>
        <span className="block text-muted-foreground">{t.title}</span>
        {t.context ? <span className="block text-muted-foreground">{t.context}</span> : null}
      </figcaption>
    </figure>
  );
}

function Recognition() {
  const recs = testimonials.filter((t) => t.group === "Recommendations");
  const notes = testimonials.filter((t) => t.group === "Recognition at work");

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Recognition</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
        What the people I have worked with say.
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-foreground/80">
        Recommendations from colleagues and leaders, plus recognition notes from teammates across
        podcasts, events, internal communications and advocacy work.
      </p>

      <section className="mt-14">
        <h2 className="rule-top pt-5 text-3xl">Recommendations</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {recs.map((t, i) => (
            <Quote key={i} t={t} large />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          These recommendations are published on{" "}
          <a
            href="https://www.linkedin.com/in/sierralangford1/"
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline"
          >
            my LinkedIn profile
          </a>
          .
        </p>
      </section>

      <section className="mt-16">
        <h2 className="rule-top pt-5 text-3xl">Recognition at work</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((t, i) => (
            <Quote key={i} t={t} />
          ))}
        </div>
      </section>

      <div className="mt-16 rule-top pt-8">
        <p className="font-display text-2xl">Want the work behind the words?</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/work"
            className="bg-foreground px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            View the work archive
          </Link>
          <Link to="/contact" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
