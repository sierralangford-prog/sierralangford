import { createFileRoute, Link } from "@tanstack/react-router";
import { featuredProjects } from "@/data/projects";
import { shortTestimonials } from "@/data/testimonials";
import { img } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sierra Langford — Marketing and Communications Strategist" },
      {
        name: "description",
        content:
          "I find the human story underneath complicated work, then build the communications, programs, content and experiences that help people understand it and care.",
      },
      { property: "og:title", content: "Sierra Langford — Marketing and Communications Strategist" },
      {
        property: "og:description",
        content:
          "Marketing and communications strategist across healthcare, health technology, AI, cybersecurity and small business.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="fade-up">
          <p className="eyebrow">Franklin, Tennessee</p>
          <h1 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">Hi there! I'm Sierra Langford.</h1>
          <p className="mt-3 text-lg text-muted-foreground">Builder, innovator and creative.</p>
          <p className="mt-7 max-w-xl font-display text-2xl leading-snug sm:text-3xl">
            I find the human story underneath complicated work, then build the communications, programs,
            content and experiences that help people understand it and care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="bg-foreground px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Work
            </Link>
            <Link to="/contact" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="fade-up">
          <img
            src={img.portrait}
            alt="Portrait of Sierra Langford, marketing and communications strategist"
            className="aspect-square w-full rounded-full object-cover shadow-[0_18px_40px_-28px_rgba(20,30,60,0.55)]"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2 className="mt-3 text-4xl">Selected work</h2>
          </div>
          <Link to="/work" className="link-underline text-sm">
            Browse the full work archive
          </Link>
        </div>

        <div className="mt-8 grid border-t border-border md:grid-cols-2">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="border-b border-border py-5 pr-6 text-xl transition-colors hover:text-teal md:odd:border-r md:even:pl-6"
            >
              {p.title}
            </Link>
          ))}
        </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="eyebrow">Testimonials</p>
            <Link to="/recognition" className="link-underline text-sm">
              Read all recommendations
            </Link>
          </div>
          {shortTestimonials.slice(0, 1).map((t) => (
            <figure key={t.name} className="mt-7 border-l-2 border-coral pl-5">
              <blockquote className="text-lg leading-relaxed text-foreground/85">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">{t.name} · {t.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
