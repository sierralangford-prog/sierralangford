import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, CATEGORIES } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";


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
  const [category, setCategory] = useState<string>("All");

  const results = useMemo(() => {
    if (category === "All") return projects.filter((p) => !p.archive);
    return projects.filter((p) => p.categories.includes(category));
  }, [category]);

  const tabs = ["All", ...CATEGORIES];

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Work</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Work, organized by what I do.</h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-foreground/80">
        Pick a type of work, then open a project to see the story and the real examples.
      </p>

      <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setCategory(t)}
            className={`border px-3 py-2 text-sm transition-colors ${
              category === t
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-border hover:border-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

