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
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group flex h-full flex-col border border-border bg-card transition-colors hover:border-foreground"
    >
      <div className="overflow-hidden bg-secondary">
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
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{project.organization}</p>
        <h3 className="mt-2 text-2xl leading-tight group-hover:text-teal">{project.title}</h3>
        <p className="mt-4 border-l-2 border-coral pl-3 text-sm font-medium">{project.headlineResult}</p>
        <span className="link-underline mt-auto pt-6 text-sm">View project</span>
      </div>
    </Link>
  );
}
