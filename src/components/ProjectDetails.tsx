import { Link } from "@tanstack/react-router";
import { getDisplayPhotos, getProject, type Project } from "@/data/projects";
import { CoverArt } from "@/components/CoverArt";

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
      <h3 className="text-3xl">{title}</h3>
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

/**
 * The full story for a single project: photos, examples and details.
 * Shared by the standalone /work/$slug page and the inline toggle on the
 * work archive, so both stay in sync.
 */
export function ProjectDetails({ project, titleAs = "h2" }: { project: Project; titleAs?: "h1" | "h2" }) {
  const related = (project.related ?? [])
    .map((s) => getProject(s))
    .filter((p): p is Project => Boolean(p));
  const primaryLink = project.links?.[0];
  const hasThumbs = Boolean(project.links?.some((l) => l.thumb));
  const photos = getDisplayPhotos(project);
  const Title = titleAs;

  if (project.minimal) {
    return (
      <div>
        <Title className="text-4xl leading-tight sm:text-5xl">{project.title}</Title>
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
      </div>
    );
  }

  return (
    <div>
      <header>
        <p className="eyebrow">{project.categories.join(" · ")}</p>
        <Title className="mt-4 text-4xl leading-tight sm:text-5xl">{project.title}</Title>
        {project.organization ? (
          <p className="mt-4 text-lg text-muted-foreground">{project.organization}</p>
        ) : null}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">{project.summary}</p>
        {primaryLink && !hasThumbs ? (
          <div className="mt-7">
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block bg-foreground px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-85"
            >
              {primaryLink.label}
            </a>
          </div>
        ) : null}
      </header>

      {photos.length > 0 ? (
        <section className="mt-10">
          <div className={`grid gap-5 ${photos.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {photos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            ))}
          </div>
        </section>
      ) : (
        <CoverArt project={project} className="mt-10 h-64 w-full sm:h-80" />
      )}

      <section className="mt-10 border-y border-border bg-paper px-5 py-8 sm:px-8">
        <p className="eyebrow">Result</p>
        <p className="mt-4 border-l-2 border-coral pl-4 font-display text-2xl leading-snug">
          {project.headlineResult}
        </p>
      </section>

      {project.links && project.links.length > 0 ? (
        <section className="mt-12 border-t border-border pt-8" aria-labelledby={`examples-${project.slug}`}>
          <h3 id={`examples-${project.slug}`} className="text-3xl">Examples</h3>
          {hasThumbs ? (
            <ul className="mt-6 space-y-3">
              {project.links.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 border border-border bg-card p-3 transition-colors hover:border-foreground"
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
                    <span className="flex flex-col gap-1">
                      <span className="text-sm underline underline-offset-4 group-hover:text-teal">
                        {l.label} <span aria-hidden>↗</span>
                      </span>
                      {l.description ? (
                        <span className="text-sm leading-snug text-foreground/70">{l.description}</span>
                      ) : null}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-5 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border border-foreground px-5 py-3 text-sm underline underline-offset-4 transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  {l.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </section>
      ) : null}

      <div className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <section>
            <h3 className="text-3xl">The challenge</h3>
            <p className="mt-4 leading-relaxed text-foreground/85">{project.challenge}</p>
          </section>
          <List title="What I did" items={project.owned} />
          <section className="mt-12 border-t border-border pt-8">
            <h3 className="text-3xl">Results</h3>
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
          <h3 className="text-3xl">Related projects</h3>
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
    </div>
  );
}
