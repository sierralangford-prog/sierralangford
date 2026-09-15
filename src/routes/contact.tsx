import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sierra Langford" },
      {
        name: "description",
        content:
          "Get in touch with Sierra Langford about communications strategy, content, events, podcasts, photography or creative consulting.",
      },
      { property: "og:title", content: "Contact Sierra Langford" },
      {
        property: "og:description",
        content: "Reach out about strategy, storytelling, events, production or creative consulting.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Let's connect</p>
      <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Let’s talk.</h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-foreground/85">
        Reach out about a role, project or collaboration.
      </p>

      <div className="mt-10 max-w-2xl divide-y divide-border border-y border-border">
        <a
          href="https://www.linkedin.com/in/sierralangford1/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-teal"
        >
          <span className="font-display text-2xl">Connect on LinkedIn</span><span aria-hidden>↗</span>
        </a>
        <Link to="/work" className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-teal">
          <span className="font-display text-2xl">Browse my work</span><span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
        Based in Franklin, Tennessee. Available for strategy, communications, content, events, production and
        creative consulting.
      </div>
    </div>
  );
}
