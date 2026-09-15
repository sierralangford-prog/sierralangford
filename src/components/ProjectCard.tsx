import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { CoverArt } from "@/components/CoverArt";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const mediaHeight = large ? "h-52" : "h-40";
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

      <div className="flex flex-1 flex-col p-4">
        {/client/i.test(project.organization) ? (
          <p className="eyebrow">{project.organization}</p>
        ) : null}
        <h3 className="mt-1 text-base leading-tight underline decoration-transparent underline-offset-4 transition-colors group-hover:text-teal group-hover:decoration-teal sm:text-lg">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
