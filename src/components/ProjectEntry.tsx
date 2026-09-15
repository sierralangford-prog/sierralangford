import { getDisplayPhotos, type Project } from "@/data/projects";
import { CoverArt } from "@/components/CoverArt";
import { ProjectDetails } from "@/components/ProjectDetails";

/**
 * A project's card — always shows its content directly (no click to expand).
 * Not a toggle: this sits inside a category section, and a toggle inside a
 * toggle makes examples harder to reach, not easier.
 */
export function ProjectEntry({ project }: { project: Project }) {
  const thumb = getDisplayPhotos(project)[0];
  return (
    <div className="border border-border bg-card">
      <div className="flex items-center gap-4 p-3">
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
          <span className="mt-0.5 text-base leading-tight sm:text-xl">{project.title}</span>
        </span>
      </div>
      <div className="border-t border-border px-4 pb-8 pt-6 sm:px-6">
        <ProjectDetails project={project} />
      </div>
    </div>
  );
}
