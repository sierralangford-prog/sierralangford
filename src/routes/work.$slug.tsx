import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, type Project } from "@/data/projects";
import { CoverArt } from "@/components/CoverArt";

export const Route = createFileRoute("/work/$slug")({
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
        { name: "twitter:card", content: "summary_large_image" },
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

function List({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-12 border-t border-border pt-8">
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
  const primaryLink = project.links?.[0];

  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
      <Link to="/work" className="link-underline text-sm">
        Back to the work archive
      </Link>

      <header className="mt-8">
        <p className="eyebrow">{project.categories.join(" · ")}</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.organization}</p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">{project.summary}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-foreground px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-85"
            >
              {primaryLink.label}
            </a>
          ) : null}
          <a href="#details" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
            Read project details
          </a>
        </div>
      </header>

      {project.cover ? (
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          className="mt-10 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <CoverArt project={project} className="mt-10 h-64 w-full sm:h-80" />
      )}

      <section className="mt-10 border-y border-border bg-paper px-5 py-8 sm:px-8">
        <p className="eyebrow">Result</p>
        <p className="mt-4 border-l-2 border-coral pl-4 font-display text-2xl leading-snug">
          {project.headlineResult}
        </p>
      </section>

      <section className="mt-12">
        {project.gallery && project.gallery.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {project.gallery.map((g) => (
              <img key={g.src + g.alt} src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            ))}
          </div>
        ) : null}
      </section>

      {project.links && project.links.length > 0 ? (
        <section className="mt-12 border-t border-border pt-8" aria-labelledby="examples-heading">
          <h2 id="examples-heading" className="text-3xl">Examples</h2>
          <p className="mt-2 text-sm text-muted-foreground">Each one opens the real work in a new tab.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-foreground px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <div id="details" className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <section>
            <h2 className="text-3xl">The challenge</h2>
            <p className="mt-4 leading-relaxed text-foreground/85">{project.challenge}</p>
          </section>
          <List title="What I did" items={project.owned} />
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="text-3xl">Results</h2>
            <ul className="mt-5 space-y-2.5">
              {project.results.map((result) => (
                <li key={result} className="flex gap-3 leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside>
          <Field label="Role" value={project.role} />
          <div className="mt-6"><Field label="Industry" value={project.industries.join(", ")} /></div>
          <div className="mt-6"><Field label="Tools" value={project.tools.join(", ")} /></div>
        </aside>
      </div>


      {related.length > 0 ? (
        <section className="mt-16 border-t border-border pt-8">
          <h2 className="text-3xl">Related projects</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug} className="border border-border bg-card p-5">
                <p className="eyebrow">{r.categories[0]}</p>
                <Link to="/work/$slug" params={{ slug: r.slug }} className="mt-2 block font-display text-2xl hover:text-teal">
                  {r.title}
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">{r.headlineResult}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
