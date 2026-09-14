import { createFileRoute, Link } from "@tanstack/react-router";
import { featuredProjects } from "@/data/projects";
import { shortTestimonials } from "@/data/testimonials";
import { stats } from "@/data/career";
import { ProjectCard } from "@/components/ProjectCard";
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
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="fade-up">
          <p className="eyebrow">Franklin, Tennessee</p>
          <h1 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">Sierra Langford</h1>
          <p className="mt-3 text-lg text-muted-foreground">Marketing and Communications Strategist</p>
          <p className="mt-8 max-w-xl font-display text-2xl leading-snug sm:text-3xl">
            I find the human story underneath complicated work, then build the communications, programs,
            content and experiences that help people understand it and care.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-foreground/80">
            My work connects internal communications, executive storytelling, healthcare technology, AI,
            cybersecurity, events, content and community building.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="bg-foreground px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Selected Work
            </Link>
            <Link to="/resume" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
              View Resume
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
            className="w-full object-cover shadow-[0_18px_40px_-28px_rgba(20,30,60,0.55)]"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Selected Results</p>
          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {stats.slice(0, 6).map((s) => (
              <div key={s.label} className="border-t border-border pt-4">
                <p className="font-display text-4xl leading-none">{s.value}</p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <Link to="/resume" className="link-underline mt-8 inline-block text-sm">
            See the full picture on my resume
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2 className="mt-3 text-4xl">Six projects that show how I work.</h2>
          </div>
          <Link to="/work" className="link-underline text-sm">
            Browse the full work archive
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="eyebrow">Testimonials</p>
            <Link to="/recognition" className="link-underline text-sm">
              Read all recommendations
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {shortTestimonials.map((t) => (
              <figure key={t.name + t.quote.slice(0, 20)} className="border border-border bg-card p-6">
                <blockquote className="leading-relaxed text-foreground/85">{t.quote}</blockquote>
                <figcaption className="mt-5 border-l-2 border-coral pl-3 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="block text-muted-foreground">{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <img
            src={img.boardroomPresentation}
            alt="Sierra Langford presenting a storytelling workshop to colleagues in a boardroom"
            loading="lazy"
            className="w-full object-cover"
          />
          <div>
            <p className="eyebrow">How I think</p>
            <h2 className="mt-3 text-4xl leading-tight">
              A songwriter's instinct for the moment someone decides to lean in.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/85">
              Strategy, structure and systems matter, but people remember the moment a story lands. I spend
              most of my time finding that moment inside complicated technical work, then building everything
              around it: the newsletter, the podcast, the stage, the program, the campaign.
            </p>
            <Link to="/about" className="mt-7 inline-block border border-foreground px-5 py-3 text-sm hover:bg-secondary">
              Read more about me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
