import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { projects, CATEGORIES } from "@/data/projects";
import { ProjectToggle } from "@/components/ProjectToggle";


export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work Archive — Sierra Langford" },
      {
        name: "description",
        content:
          "A searchable archive of communications, content, event, podcast, AI and cybersecurity projects across healthcare, fintech and small business.",
      },
      { property: "og:title", content: "Work Archive — Sierra Langford" },
      {
        property: "og:description",
        content: "Browse projects by category, industry, organization and skill.",
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
    for (const p of projects) {
      const primary = p.categories[0];
      if (!primary) continue;
      const list = byCategory.get(primary) ?? [];
      list.push(p);
      byCategory.set(primary, list);
    }
    return CATEGORIES.map((category) => ({
      category,
      items: byCategory.get(category) ?? [],
    })).filter((g) => g.items.length > 0);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Work</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Work, organized by what I do.</h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-foreground/80">
        Open a section, then open a project to see the story and the real examples right here.
      </p>

      <div className="mt-10 border-t border-border">
        {groups.map((g, i) => (
          <details key={g.category} open={i === 0} className="group border-b border-border py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-xl sm:text-2xl">{g.category}</span>
              <span className="text-sm text-muted-foreground">
                {g.items.length}
                <span className="ml-3 inline-block transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <div className="mt-6 space-y-3">
              {g.items.map((p) => (
                <ProjectToggle key={p.slug} project={p} />
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

