import { getDisplayPhotos, type Project, type ProjectLink } from "@/data/projects";
import { CoverArt } from "@/components/CoverArt";

const MAX_LIST_ITEMS = 4;
const MAX_VISIBLE_LINKS = 3;

/** Renders `**text**` segments as bold, everything else as plain text. */
function withBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section>
      <h3 className="text-3xl">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {items.slice(0, MAX_LIST_ITEMS).map((i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-foreground/85">
            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-teal" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function LinkRow({ link }: { link: ProjectLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex items-center gap-4 border border-border bg-card p-3 transition-colors hover:border-foreground"
    >
      {link.thumb ? (
        <span className="block h-16 w-24 shrink-0 overflow-hidden border border-border">
          <img
            src={link.thumb.src}
            alt={link.thumb.alt}
            loading="lazy"
            className="h-full w-full scale-[1.9] object-cover object-center"
          />
        </span>
      ) : null}
      <span className="flex flex-col gap-1">
        <span className="text-sm underline underline-offset-4 group-hover:text-teal">
          {link.label} <span aria-hidden>↗</span>
        </span>
        {link.description ? (
          <span className="text-sm leading-snug text-foreground/70">{link.description}</span>
        ) : null}
      </span>
    </a>
  );
}

/**
 * The full story for a single project: photo, examples and details.
 * Shared by the standalone /work/$slug page and the inline toggle on the
 * work archive, so both stay in sync.
 */
export function ProjectDetails({ project, titleAs = "h2" }: { project: Project; titleAs?: "h1" | "h2" }) {
  const primaryLink = project.links?.[0];
  const hasThumbs = Boolean(project.links?.some((l) => l.thumb));
  const photo = getDisplayPhotos(project)[0];
  const Title = titleAs;
  const allLinks = project.links ?? [];
  // Only the plain-text link list gets truncated — the thumbnailed list
  // (photo + description) is meant to be seen in full.
  const visibleLinks = hasThumbs ? allLinks : allLinks.slice(0, MAX_VISIBLE_LINKS);
  const hiddenLinks = hasThumbs ? [] : allLinks.slice(MAX_VISIBLE_LINKS);

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

      {photo ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="mt-10 aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
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

      {visibleLinks.length > 0 ? (
        <section className="mt-12 border-t border-border pt-8" aria-labelledby={`examples-${project.slug}`}>
          <h3 id={`examples-${project.slug}`} className="text-3xl">Examples</h3>
          {hasThumbs ? (
            <ul className="mt-6 space-y-3">
              {visibleLinks.map((l) => (
                <li key={l.url}>
                  <LinkRow link={l} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-5 flex flex-wrap items-start gap-3">
              {visibleLinks.map((l) => (
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
              {hiddenLinks.length > 0 ? (
                <details className="inline-block">
                  <summary className="cursor-pointer border border-border px-5 py-3 text-sm underline underline-offset-4 text-foreground/70 hover:border-foreground hover:text-teal">
                    +{hiddenLinks.length} more
                  </summary>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {hiddenLinks.map((l) => (
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
                </details>
              ) : null}
            </div>
          )}
        </section>
      ) : null}

      <div className="mt-14 border-t border-border pt-10">
        <div className="grid gap-10 sm:grid-cols-2">
          <section>
            <h3 className="text-3xl">The challenge</h3>
            <p className="mt-4 leading-relaxed text-foreground/85">{withBold(project.challenge)}</p>
          </section>
          <List title="What I did" items={project.owned} />
        </div>
        <section className="mt-12 border-t border-border pt-8">
          <h3 className="text-3xl">Results</h3>
          <ul className="mt-5 space-y-2.5">
            {project.results.slice(0, MAX_LIST_ITEMS).map((result) => (
              <li key={result} className="flex gap-3 leading-relaxed text-foreground/85">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
