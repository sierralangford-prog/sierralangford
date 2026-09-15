import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, featuredProjects, CATEGORIES, type Project } from "@/data/projects";
import { ProjectToggle } from "@/components/ProjectToggle";

const DRIVE_CTA_URL = "https://drive.google.com/drive/folders/1ENSKEChZdrzlr1R9JRAswM1xTK0n14rZ";
const VISIBLE_COUNT = 3;

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Sierra Langford" },
      {
        name: "description",
        content:
          "A portfolio of communications, content, event, podcast, healthcare and client marketing work.",
      },
      { property: "og:title", content: "Work — Sierra Langford" },
      { property: "og:description", content: "Browse work by category, with real examples for each project." },
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

/** A category's project list, split into subsection groups when projects declare one. */
function groupBySubsection(items: Project[]) {
  const groups: { subsection: string | null; items: Project[] }[] = [];
  for (const p of items) {
    const key = p.subsection ?? null;
    let group = groups.find((g) => g.subsection === key);
    if (!group) {
      group = { subsection: key, items: [] };
      groups.push(group);
    }
    group.items.push(p);
  }
  return groups;
}

function CategorySection({ category, items }: { category: string; items: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, VISIBLE_COUNT);
  const remaining = items.length - visible.length;
  const groups = groupBySubsection(visible);

  return (
    <details open className="group border-b border-border py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="text-xl sm:text-2xl">{category}</span>
        <span className="text-sm text-muted-foreground">
          {items.length}
          <span className="ml-3 inline-block transition-transform group-open:rotate-45">+</span>
        </span>
      </summary>
      <div className="mt-6 space-y-8">
        {groups.map((g) => (
          <div key={g.subsection ?? "default"}>
            {g.subsection ? <p className="eyebrow mb-3">{g.subsection}</p> : null}
            <div className="space-y-3">
              {g.items.map((p) => (
                <ProjectToggle key={p.slug} project={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {!showAll && remaining > 0 ? (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-4 text-sm underline underline-offset-4 text-foreground/70 hover:text-teal"
        >
          + {remaining} more
        </button>
      ) : null}
    </details>
  );
}

function WorkIndex() {
  const groups = useMemo(() => {
    const byCategory = new Map<string, Project[]>();
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
        Open a project to see the real examples right here.
      </p>

      <section className="mt-12">
        <p className="eyebrow">Featured Work</p>
        <div className="mt-4 space-y-3">
          {featuredProjects.map((p) => (
            <ProjectToggle key={p.slug} project={p} featured />
          ))}
        </div>
      </section>

      <div className="mt-12 border-t border-border">
        {groups.map((g) => (
          <CategorySection key={g.category} category={g.category} items={g.items} />
        ))}
      </div>

      <div className="mt-14 flex justify-center border-t border-border pt-10">
        <a
          href={DRIVE_CTA_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="border border-foreground px-6 py-3 text-sm underline underline-offset-4 transition-colors hover:bg-foreground hover:text-primary-foreground"
        >
          See all work in Google Drive <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}
