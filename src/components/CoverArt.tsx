import type { Project } from "@/data/projects";

const palettes = [
  { bg: "var(--color-paper)", accent: "var(--color-teal)" },
  { bg: "color-mix(in oklab, var(--color-teal) 12%, var(--color-paper))", accent: "var(--color-coral)" },
  { bg: "color-mix(in oklab, var(--color-gold) 16%, var(--color-paper))", accent: "var(--color-ink, currentColor)" },
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 997;
  return h;
}

/**
 * A designed typographic cover used when a project has no photograph yet.
 * It never imitates a screenshot or invents imagery.
 */
export function CoverArt({ project, className = "" }: { project: Project; className?: string }) {
  const p = palettes[hash(project.slug) % palettes.length]!;
  return (
    <div
      role="img"
      aria-label={`${project.title}, ${project.organization}`}
      className={`flex flex-col justify-between p-6 ${className}`}
      style={{ background: p.bg }}
    >
      <span className="eyebrow">{project.categories[0]}</span>
      <span className="font-display text-2xl leading-tight sm:text-3xl">{project.organization}</span>
      <span className="h-1 w-16" style={{ background: p.accent }} aria-hidden />
    </div>
  );
}
