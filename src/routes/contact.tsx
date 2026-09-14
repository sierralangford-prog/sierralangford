import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sierra Langford" },
      {
        name: "description",
        content:
          "Get in touch with Sierra Langford about communications strategy, content, events, podcasts, photography or private work samples.",
      },
      { property: "og:title", content: "Contact Sierra Langford" },
      {
        property: "og:description",
        content: "Reach out about strategy, storytelling, events, production or private work samples.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Let's connect</p>
      <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
        I would love to hear what you are building and how I can help.
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-foreground/85">
        Recruiters, hiring managers, clients and collaborators are all welcome here. If a project on this site
        you want to see in more detail, message me and I will send the full example.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a
          href="https://www.linkedin.com/in/sierralangford1/"
          target="_blank"
          rel="noreferrer noopener"
          className="border border-border bg-card p-7 transition-colors hover:border-foreground"
        >
          <p className="eyebrow">Best way to reach me</p>
          <p className="mt-3 font-display text-3xl">Connect on LinkedIn</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Messages here get the fastest reply, including requests for full examples.
          </p>
        </a>

        <a
          href="https://sierralangfordphotography.mypixieset.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="border border-border bg-card p-7 transition-colors hover:border-foreground"
        >
          <p className="eyebrow">Photography</p>
          <p className="mt-3 font-display text-3xl">View photography portfolio</p>
          <p className="mt-2 text-sm text-muted-foreground">Portraits, events, brand and social work.</p>
        </a>

        <a
          href="https://podcast.cerecore.net/"
          target="_blank"
          rel="noreferrer noopener"
          className="border border-border bg-card p-7 transition-colors hover:border-foreground"
        >
          <p className="eyebrow">Listen</p>
          <p className="mt-3 font-display text-3xl">Listen to the podcast</p>
          <p className="mt-2 text-sm text-muted-foreground">
            The CereCore Podcast, a Gold Stevie Award winning healthcare IT show.
          </p>
        </a>

        <a
          href="https://drive.google.com/drive/folders/1vPKk2Qi0LDmxD8T9JWcJ4vP8_sNjpk1R?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="border border-border bg-card p-7 transition-colors hover:border-foreground"
        >
          <p className="eyebrow">Examples</p>
          <p className="mt-3 font-display text-3xl">Open the example library</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Additional writing, campaign and event samples in one shared folder.
          </p>
        </a>

        <Link to="/work" className="border border-border bg-card p-7 transition-colors hover:border-foreground">
          <p className="eyebrow">Before you write</p>
          <p className="mt-3 font-display text-3xl">Browse the work archive</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Every project includes what I owned and what it produced.
          </p>
        </Link>
      </div>

      <div className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
        Based in Franklin, Tennessee. Available for strategy, communications, content, events, production and
        creative consulting.
      </div>
    </div>
  );
}
