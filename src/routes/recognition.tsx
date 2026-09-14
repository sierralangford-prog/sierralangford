import { createFileRoute, Link } from "@tanstack/react-router";
import { testimonials, type Testimonial } from "@/data/testimonials";

export const Route = createFileRoute("/recognition")({
  head: () => ({
    meta: [
      { title: "Testimonials — Sierra Langford" },
      {
        name: "description",
        content:
          "Testimonials from colleagues and leaders about Sierra Langford's storytelling, podcasts, events and communications work.",
      },
      { property: "og:title", content: "Testimonials — Sierra Langford" },
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

function Quote({ t, featured = false }: { t: Testimonial; featured?: boolean }) {
  const initials = t.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <figure className={`relative border-t border-border py-8 ${featured ? "md:py-10" : ""}`}>
      <span aria-hidden className="block text-4xl leading-none text-coral">“</span>
      <blockquote className={`mt-3 space-y-4 ${featured ? "text-[1.05rem]" : "text-base"}`}>
        {t.quote.split("\n\n").map((para, index) => (
          <p key={index} className="leading-relaxed text-foreground/85">
            {para}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 text-sm">
        <span
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-medium text-teal"
        >
          {initials}
        </span>
        <span>
          <span className="block font-medium text-foreground">{t.name}</span>
          <span className="block text-muted-foreground">{t.title}</span>
          {t.context ? <span className="block text-xs text-muted-foreground">{t.context}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}

function Recognition() {
  const recs = testimonials.filter((t) => t.group === "Recommendations");
  const notes = testimonials.filter((t) => t.group === "Recognition at work");

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Testimonials</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
        What the people I have worked with say.
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-foreground/80">
        Recommendations from colleagues and leaders, plus recognition notes from teammates across
        podcasts, events, internal communications and advocacy work.
      </p>

      <section className="mt-14 border-y border-border bg-paper px-5 sm:px-8">
        <div className="grid gap-x-12 lg:grid-cols-2">
          {recs.map((t, i) => (
            <Quote key={i} t={t} featured />
          ))}
        </div>
        <p className="border-t border-border py-5 text-sm text-muted-foreground">
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
        <p className="eyebrow">Notes from collaborators</p>
        <h2 className="mt-3 text-3xl">Recognition at work</h2>
        <div className="mt-6 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((t, i) => (
            <Quote key={i} t={t} />
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <p className="eyebrow">Artifacts</p>
        <h2 className="mt-3 text-3xl">Notes and keepsakes</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <figure className="border border-border bg-card p-5">
            <img
              src={img.devRoyHandwrittenNote}
              alt="Handwritten note from Devjit Roy thanking Sierra for being a voice in healthcare"
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="mt-4 text-sm text-muted-foreground">
              Handwritten note from Devjit Roy, MD — “Thank you for being a voice in healthcare.”
            </figcaption>
          </figure>
          <figure className="border border-border bg-card p-5">
            <img
              src={img.betweenHeartbeatsAlgorithmsBook}
              alt="Book cover for Between Heartbeats and Algorithms by Devjit Roy"
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="mt-4 text-sm text-muted-foreground">
              Devjit Roy’s book, <em className="not-italic font-medium">Between Heartbeats and Algorithms</em>,
              which Sierra supported through advocacy and communications.
            </figcaption>
          </figure>
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
