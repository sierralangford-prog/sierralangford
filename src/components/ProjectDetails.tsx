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

/** Example card: thumbnail (when we have one) + linked title only. No blurb. */
function LinkCard({ link }: { link: ProjectLink }) {
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
      <span className="text-sm underline underline-offset-4 group-hover:text-teal">
        {link.label} <span aria-hidden>↗</span>
      </span>
    </a>
  );
}

/**
 * The full story for a single project, in a fixed order used on every
 * project page: title, role, examples, challenge, what I did, results.
 * Shared by the standalone /work/$slug page and the inline toggle on the
 * work archive, so both stay in sync.
 */
export function ProjectDetails({ project, titleAs = "h2" }: { project: Project; titleAs?: "h1" | "h2" }) {
  const photo = getDisplayPhotos(project)[0];
  const Title = titleAs;
  const allLinks = project.links ?? [];
  const visibleLinks = allLinks.slice(0, MAX_VISIBLE_LINKS);
  const hiddenLinks = allLinks.slice(MAX_VISIBLE_LINKS);

  if (project.minimal) {
    const primaryLink = project.links?.[0];
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
        <Title className="text-4xl leading-tight sm:text-5xl">{project.title}</Title>
        {project.organization ? (
          <p className="mt-3 text-lg text-muted-foreground">{project.organization}</p>
        ) : null}
        {project.role ? <p className="mt-1 text-base text-foreground/80">{project.role}</p> : null}
      </header>

      {photo ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="mt-8 aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
        />
      ) : (
        <CoverArt project={project} className="mt-8 h-64 w-full sm:h-80" />
      )}

      {visibleLinks.length > 0 ? (
        <section className="mt-10" aria-labelledby={`examples-${project.slug}`}>
          <h3 id={`examples-${project.slug}`} className="text-3xl">Examples</h3>
          <ul className="mt-5 space-y-3">
            {visibleLinks.map((l) => (
              <li key={l.url}>
                <LinkCard link={l} />
              </li>
            ))}
          </ul>
          {hiddenLinks.length > 0 ? (
            <details className="mt-3">
              <summary className="cursor-pointer text-sm underline underline-offset-4 text-foreground/70 hover:text-teal">
                +{hiddenLinks.length} more
              </summary>
              <ul className="mt-3 space-y-3">
                {hiddenLinks.map((l) => (
                  <li key={l.url}>
                    <LinkCard link={l} />
                  </li>
                ))}
              </ul>
            </details>
          ) : null}
        </section>
      ) : null}

      <div className="mt-12 border-t border-border pt-10">
        <div className="grid gap-10 sm:grid-cols-2">
          <section>
            <h3 className="text-3xl">The challenge</h3>
            <p className="mt-4 leading-relaxed text-foreground/85">{withBold(project.challenge)}</p>
          </section>
          <List title="What I did" items={project.owned} />
        </div>
      </div>

      <section className="mt-12 border-t border-border pt-8">
        <h3 className="text-3xl">Results</h3>
        <p className="mt-4 border-l-2 border-coral pl-4 font-display text-2xl leading-snug">
          {project.headlineResult}
        </p>
        <ul className="mt-6 space-y-2.5">
          {project.results.slice(0, MAX_LIST_ITEMS).map((result) => (
            <li key={result} className="flex gap-3 leading-relaxed text-foreground/85">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
