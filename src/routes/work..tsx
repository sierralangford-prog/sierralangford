import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, type Project } from "@/data/projects";
import { VisibilityTag } from "@/components/ProjectCard";
import { CoverArt } from "@/components/CoverArt";

export const Route = createFileRoute("/work/")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project unavailable — Sierra Langford" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    const description = p.summary.slice(0, 155);
    return {
      meta: [
        { title: `${p.title} — Sierra Langford` },
        { name: "description", content: description },
        { property: "og:title", content: `${p.title} — Sierra Langford` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: ProjectPage,
});

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-3">
      <p className="eyebrow">{label}</p>
      <p className="mt-1.5 text-sm leading-snug">{value}</p>
    </div>
  );
}

function List({ title, items, className = "" }: { title: string; items: string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <section className={`mt-12 border-t border-border pt-8 ${className}`}>
      <h2 className="text-3xl">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-foreground/85">
            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-teal" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = (project.related ?? [])
    .map((s) => getProject(s))
    .filter((p): p is Project => Boolean(p));

  const primaryLink = project.links && project.links.length > 0 ? project.links[0] : null;
  const libraryUrl = "https://drive.google.com/drive/folders/1vPKk2Qi0LDmxD8T9JWcJ4vP8_sNjpk1R?usp=sharing";

  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
      <Link to="/work" className="link-underline text-sm">
        Back to the work archive
      </Link>

      <header className="mt-8">
        <p className="eyebrow">{project.categories.join(" · ")}</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.organization}</p>
        <p className="mt-6 max-w-3xl font-display text-2xl leading-snug">{project.summary}</p>
        
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
            >
              {primaryLink.label}
            </a>
          ) : project.visualNote ? (
            <a
              href={libraryUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
            >
              Open example library
            </a>
          ) : null}
          <VisibilityTag value={project.visibility} />
        </div>
      </header>

      {project.cover ? (
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          className="mt-12 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <CoverArt project={project} className="mt-12 h-64 w-full sm:h-80" />
      )}

      {/* Visual examples moved up for immediate impact */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-12">
          <div className="grid gap-5 sm:grid-cols-2">
            {project.gallery.map((g) => (
              <img key={g.src + g.alt} src={g.src} alt={g.alt} loading="lazy" className="w-full object-cover border border-border" />
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section className="border-t border-border pt-8">
            <h2 className="text-3xl">The challenge</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-foreground/85">{project.challenge}</p>
          </section>

          <section className="mt-12 border-t border-border pt-8">
            <h2 className="text-3xl">Results</h2>
            <p className="mt-4 border-l-2 border-coral pl-4 font-display text-2xl leading-snug">
              {project.headlineResult}
            </p>
            <ul className="mt-5 space-y-2.5">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3 leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-12">
          <div>
            <Field label="Role" value={project.role} />
            <div className="mt-6">
              <Field label="Industry" value={project.industries.join(", ")} />
            </div>
          </div>

          <List title="What I owned" items={project.owned} className="mt-0" />
          
          <section className="border-t border-border pt-8">
            <h2 className="text-xl">Tools</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="border border-border bg-secondary px-2 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </section>
          
          {project.links && project.links.length > 1 && (
            <section className="border-t border-border pt-8">
              <h2 className="text-xl">More links</h2>
              <div className="mt-4 flex flex-col gap-2">
                {project.links.slice(1).map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm link-underline inline-block w-fit"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="text-3xl">Related projects</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug} className="border border-border bg-card p-6">
                <p className="eyebrow">{r.categories[0]}</p>
                <Link to="/work/$slug" params={{ slug: r.slug }} className="mt-3 block font-display text-2xl hover:text-teal">
                  {r.title}
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">{r.headlineResult}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
