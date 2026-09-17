import type { Project, ProjectLink } from "@/data/projects";

const MAX_LIST_ITEMS = 4;

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

/** A polished placeholder for a link with no real thumbnail — never a broken image. */
function LinkThumbPlaceholder() {
  return (
    <span
      className="flex h-16 w-24 shrink-0 items-center justify-center border border-border bg-secondary"
      aria-hidden
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
        <path
          d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6v6M10 14 20 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** A single work-link card: thumbnail (real, or a polished placeholder) + linked title only. */
export function LinkCard({ link, fallbackThumb }: { link: ProjectLink; fallbackThumb?: Project["cover"] }) {
  const thumb = link.thumb ?? fallbackThumb;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex items-center gap-4 border border-border bg-card p-3 transition-colors hover:border-foreground"
    >
      {thumb ? (
        <span className="block h-20 w-28 shrink-0 overflow-hidden bg-secondary sm:w-32">
          <img
            src={thumb.src}
            alt={thumb.alt}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </span>
      ) : (
        <LinkThumbPlaceholder />
      )}
      <span className="text-sm underline underline-offset-4 group-hover:text-teal">
        {link.label} <span aria-hidden>↗</span>
      </span>
    </a>
  );
}

/**
 * A project's story, starting directly with the work links. Title only shows
 * when `showTitle` is true — the card already shows it, so the expanded
 * panel (inside a toggle) skips it to avoid repeating it. Challenge, What I
 * Did and Results only render when the project actually has content for
 * them, so a link-only project doesn't get an empty case-study shell.
 */
export function ProjectDetails({ project, showTitle = false }: { project: Project; showTitle?: boolean }) {
  const links = project.links ?? [];
  const hasWork = links.length > 0 || Boolean(project.folderLink);

  return (
    <div>
      {showTitle ? <h1 className="text-4xl leading-tight sm:text-5xl">{project.title}</h1> : null}

      {hasWork ? (
        <section className={showTitle ? "mt-8" : ""}>
          <h3 className="text-2xl">Examples</h3>
          {links.length > 0 ? (
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.url}>
                  <LinkCard link={l} fallbackThumb={project.cover} />
                </li>
              ))}
            </ul>
          ) : null}
          {project.folderLink ? (
            <div className={links.length > 0 ? "mt-3" : "mt-5"}>
              <LinkCard link={project.folderLink} fallbackThumb={project.cover} />
            </div>
          ) : null}
        </section>
      ) : null}

      {project.challenge || project.owned.length > 0 ? (
        <div className={`grid gap-10 sm:grid-cols-2 ${hasWork ? "mt-12 border-t border-border pt-10" : ""}`}>
          {project.challenge ? (
            <section>
              <h3 className="text-3xl">The challenge</h3>
              <p className="mt-4 leading-relaxed text-foreground/85">{withBold(project.challenge)}</p>
            </section>
          ) : null}
          <List title="What I did" items={project.owned} />
        </div>
      ) : null}

      {project.results.length > 0 ? (
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
      ) : null}
    </div>
  );
}
