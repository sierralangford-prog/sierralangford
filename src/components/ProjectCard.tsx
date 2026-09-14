import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { CoverArt } from "@/components/CoverArt";

export function VisibilityTag({ value }: { value: Project["visibility"] }) {
  if (value === "Public") return null;
  return (
    <span className="inline-block border border-border bg-secondary px-2 py-1 text-[0.68rem] uppercase tracking-wider text-muted-foreground">
      {value}
    </span>
  );
}

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const mediaHeight = large ? "h-64" : "h-52";
  const primaryLink = project.links?.[0];
  return (
    <article className="group flex h-full flex-col border border-border bg-card">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="block overflow-hidden bg-secondary"
        aria-label={`View ${project.title}`}
      >
        {project.cover ? (
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${mediaHeight}`}
          />
        ) : (
          <CoverArt project={project} className={`w-full ${mediaHeight}`} />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{project.categories[0]}</p>
        <h3 className="mt-2 text-2xl leading-tight">
          <Link to="/work/$slug" params={{ slug: project.slug }} className="hover:text-teal">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.organization}</p>
        <p className="mt-4 border-l-2 border-coral pl-3 text-sm font-medium">{project.headlineResult}</p>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-foreground px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-85"
            >
              {primaryLink.label}
            </a>
          ) : null}
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="link-underline px-1 py-2 text-sm"
          >
            Project details
          </Link>
          <VisibilityTag value={project.visibility} />
        </div>
      </div>
    </article>
  );
}
