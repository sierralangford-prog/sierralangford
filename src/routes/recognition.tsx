import { createFileRoute, Link } from "@tanstack/react-router";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { img } from "@/lib/images";

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

/** Bolds the marked phrases without altering any wording. */
function Emphasized({ text, phrases }: { text: string; phrases: string[] }) {
  const found = phrases.filter((p) => text.includes(p));
  if (found.length === 0) return <>{text}</>;

  const parts: Array<string | { bold: string }> = [text];
  for (const phrase of found) {
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (typeof part !== "string") continue;
      const at = part.indexOf(phrase);
      if (at === -1) continue;
      parts.splice(i, 1, part.slice(0, at), { bold: phrase }, part.slice(at + phrase.length));
      break;
    }
  }

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <strong key={i} className="font-semibold text-foreground">
            {part.bold}
          </strong>
        ),
      )}
    </>
  );
}

function QuoteCard({ t }: { t: Testimonial }) {
  const initials = t.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <figure className="flex h-full flex-col border border-border bg-card p-6 sm:p-7">
      <span aria-hidden className="block font-display text-3xl leading-none text-coral">
        “
      </span>
      <blockquote className="mt-3 flex-1 space-y-4 text-[0.975rem] leading-relaxed text-foreground/85">
        {t.quote.split("\n\n").map((para, index) => (
          <p key={index}>
            <Emphasized text={para} phrases={t.emphasis ?? []} />
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5 text-sm">
        <span
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-medium text-teal"
        >
          {initials}
        </span>
        <span>
          <span className="block font-medium text-foreground">{t.name}</span>
          <span className="block text-muted-foreground">{t.title}</span>
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

      <section className="mt-12">
        <h2 className="text-2xl">Recommendations</h2>
        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-2">
          {recs.map((t, i) => (
            <QuoteCard key={i} t={t} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Published on{" "}
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
        <h2 className="text-2xl">Recognition at work</h2>
        <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((t, i) => (
            <QuoteCard key={i} t={t} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl">Notes and keepsakes</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
              Devjit Roy’s book, <em className="not-italic font-medium">Between Heartbeats and Algorithms</em>.
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="mt-16 rule-top pt-8 flex flex-wrap gap-3">
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
  );
}
