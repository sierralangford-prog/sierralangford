import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";
import { projects, CATEGORIES, type Project } from "@/data/projects";


export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Sierra Langford" },
      {
        name: "description",
        content:
          "Selected communications, content, event, podcast, AI, brand and creative work by Sierra Langford.",
      },
      { property: "og:title", content: "Selected Work — Sierra Langford" },
      {
        property: "og:description",
        content: "Browse Sierra Langford’s selected projects and examples by type of work.",
      },
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  // Each project appears exactly once, under its primary (first) category.
  const groups = useMemo(() => {
    const byCategory = new Map<string, typeof projects>();
    const usedExamples = new Set<string>();
    for (const p of projects) {
      const primary = p.categories[0];
      if (!primary) continue;
      const list = byCategory.get(primary) ?? [];
      const deduplicated: Project = {
        ...p,
      };
      if (p.links) {
        deduplicated.links = p.links.filter((link) => {
          if (usedExamples.has(link.url)) return false;
          usedExamples.add(link.url);
          return true;
        });
      }
      list.push(deduplicated);
      byCategory.set(primary, list);
    }
    return CATEGORIES.map((category) => ({
      category,
      items: byCategory.get(category) ?? [],
    })).filter((g) => g.items.length > 0);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Selected Work</h1>

      <div className="mt-10 space-y-12">
        {groups.map((g) => (
          <section key={g.category} aria-labelledby={`category-${g.category}`}>
            <h2 id={`category-${g.category}`} className="eyebrow border-b border-border pb-3">
              {g.category}
            </h2>
            <div>
              {g.items.map((project) => (
                <WorkProject key={project.slug} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function WorkProject({ project }: { project: Project }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (window.location.hash !== `#${project.slug}`) return;
    const details = detailsRef.current;
    if (!details) return;
    details.open = true;
    requestAnimationFrame(() => details.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [project.slug]);

  return (
    <details ref={detailsRef} id={project.slug} className="group scroll-mt-24 border-b border-border">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-3 marker:hidden">
        <h3 className="text-xl leading-tight sm:text-2xl">{project.title}</h3>
        <span
          aria-hidden
          className="text-xl text-muted-foreground transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="max-w-3xl pb-6">
        {project.headlineResult ? (
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.headlineResult}</p>
        ) : null}
        {project.links?.length ? (
          <ul className="divide-y divide-border border-y border-border">
            {project.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link flex items-center gap-3 py-3 text-sm hover:text-teal"
                >
                  {link.thumb ? (
                    <span className="block h-12 w-20 shrink-0 overflow-hidden border border-border bg-secondary">
                      <img
                        src={link.thumb.src}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </span>
                  ) : null}
                  <span className="flex flex-1 items-center justify-between gap-3">
                    <span className="underline underline-offset-4">{link.label}</span>
                    <span aria-hidden>↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No public example available.</p>
        )}
      </div>
    </details>
  );
}

