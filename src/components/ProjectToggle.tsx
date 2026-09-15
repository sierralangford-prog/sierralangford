import { getDisplayPhotos, type Project } from "@/data/projects";
import { CoverArt } from "@/components/CoverArt";
import { ProjectDetails } from "@/components/ProjectDetails";

/**
 * A project that opens in place instead of navigating to another page.
 */
export function ProjectToggle({ project }: { project: Project }) {
  const thumb = getDisplayPhotos(project)[0];
  return (
    <details className="group border border-border bg-card transition-colors open:border-foreground">
      <summary className="flex cursor-pointer list-none items-center gap-4 p-3">
        <span className="block h-24 w-36 shrink-0 overflow-hidden bg-secondary sm:h-28 sm:w-44">
          {thumb ? (
            <img src={thumb.src} alt={thumb.alt} loading="lazy" className="h-full w-full object-cover" />
          ) : (
            <CoverArt project={project} className="h-full w-full p-3" />
          )}
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          {/client/i.test(project.organization) ? (
            <span className="eyebrow">{project.organization}</span>
          ) : null}
          <span className="mt-0.5 text-base leading-tight group-hover:text-teal sm:text-xl">
            {project.title}
          </span>
        </span>
        <span aria-hidden className="shrink-0 text-lg text-muted-foreground transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="border-t border-border px-4 pb-8 pt-6 sm:px-6">
        <ProjectDetails project={project} titleAs="h2" />
      </div>
    </details>
  );
}
