import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, type Project } from "@/data/projects";

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

  if (project.minimal) {
    return (
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Link to="/work" className="link-underline text-sm">
          Back to the work archive
        </Link>
        <h1 className="mt-8 text-4xl leading-tight sm:text-5xl">{project.title}</h1>
        {primaryLink ? (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-block bg-foreground px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-85"
          >
            {primaryLink.label} <span aria-hidden>↗</span>
          </a>
        ) : null}
      </article>
    );
  }

  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
      <Link to="/work" className="link-underline text-sm">
        Back to the work archive
      </Link>

      <header className="mt-8">
        <p className="eyebrow">{project.categories.join(" · ")}</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{project.title}</h1>
        {project.organization ? (
          <p className="mt-4 text-lg text-muted-foreground">{project.organization}</p>
        ) : null}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">{project.summary}</p>
      </header>

      {project.links && project.links.length > 0 ? (
        <section className="mt-9 border-t border-border pt-7" aria-labelledby="examples-heading">
          <h2 id="examples-heading" className="text-2xl">Examples</h2>
          {project.links.some((l) => l.thumb) ? (
            <ul className="mt-6 space-y-3">
              {project.links.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 border border-border bg-card p-2 transition-colors hover:border-foreground"
                  >
                    {l.thumb ? (
                      <span className="block h-16 w-24 shrink-0 overflow-hidden border border-border">
                        <img
                          src={l.thumb.src}
                          alt={l.thumb.alt}
                          loading="lazy"
                          className="h-full w-full scale-[1.9] object-cover object-center"
                        />
                      </span>
                    ) : null}
                    <span className="text-sm underline underline-offset-4 group-hover:text-teal">
                      {l.label} <span aria-hidden>↗</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {project.links.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between gap-4 py-3 text-sm underline underline-offset-4 hover:text-teal"
                  >
                    {l.label} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : null}

      <section className="mt-10 border-y border-border bg-paper px-5 py-7 sm:px-8">
        <p className="eyebrow">Result</p>
        <p className="mt-3 font-display text-2xl leading-snug">{project.headlineResult}</p>
      </section>

      <List title="What I did" items={project.owned.slice(0, 4)} />

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-3xl">Results</h2>
        <ul className="mt-5 space-y-2.5">
          {project.results.slice(0, 3).map((result) => (
            <li key={result} className="flex gap-3 leading-relaxed text-foreground/85">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </section>


      {related.length > 0 ? (
        <section className="mt-16 border-t border-border pt-8">
          <h2 className="text-3xl">Related projects</h2>
          <ul className="mt-5 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link to="/work/$slug" params={{ slug: r.slug }} className="link-underline text-lg">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
