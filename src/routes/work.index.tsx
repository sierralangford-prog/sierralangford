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
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [industry, setIndustry] = useState<string>("All");
  const [organization, setOrganization] = useState<string>("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [showArchive, setShowArchive] = useState(true);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== "All" && !p.categories.includes(category)) return false;
      if (industry !== "All" && !p.industries.includes(industry)) return false;
      if (organization !== "All" && p.organization !== organization) return false;
      if (featuredOnly && !p.featured) return false;
      if (!showArchive && p.archive) return false;
      if (!q) return true;
      const haystack = [
        p.title,
        p.organization,
        p.summary,
        p.role,
        p.headlineResult,
        ...p.tags,
        ...p.categories,
        ...p.industries,
        ...p.tools,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category, industry, organization, featuredOnly, showArchive]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof results>();
    const key = (p: (typeof results)[number]) =>
      category !== "All" ? category : (p.categories[0] ?? "Other");
    for (const p of results) {
      const k = key(p);
      map.set(k, [...(map.get(k) ?? []), p]);
    }
    return [...map.entries()].sort(
      (a, b) => CATEGORIES.indexOf(a[0] as never) - CATEGORIES.indexOf(b[0] as never),
    );
  }, [results, category]);

  const selectClass =
    "w-full border border-border bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Work</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Work, organized by what I do.</h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-foreground/80">
        Start with a real example, then open the details when you want the story behind it.
      </p>

      <details className="mt-10 border-y border-border bg-paper px-5 py-4">
        <summary className="cursor-pointer text-sm font-medium">Search and filter projects</summary>
        <div className="pt-5">
        <label className="block">
          <span className="eyebrow">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, tools, organizations"
            className="mt-2 w-full border border-border bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </label>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="eyebrow">Category</span>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={`mt-2 ${selectClass}`}>
              <option>All</option>
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="eyebrow">Industry</span>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className={`mt-2 ${selectClass}`}>
              <option>All</option>
              {allIndustries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="eyebrow">Organization</span>
            <select
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className={`mt-2 ${selectClass}`}
            >
              <option>All</option>
              {allOrganizations.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={featuredOnly} onChange={(e) => setFeaturedOnly(e.target.checked)} />
            Featured only
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={showArchive} onChange={(e) => setShowArchive(e.target.checked)} />
            Include earlier career archive
          </label>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setIndustry("All");
              setOrganization("All");
              setFeaturedOnly(false);
              setShowArchive(true);
            }}
            className="link-underline ml-auto"
          >
            Reset filters
          </button>
        </div>
        </div>
      </details>

      <p className="mt-6 text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "project" : "projects"}
      </p>

      {results.length === 0 ? (
        <p className="mt-10 font-display text-2xl">No projects match those filters yet.</p>
      ) : (
        <div className="mt-6 space-y-16">
          {grouped.map(([groupName, items]) => (
            <section key={groupName}>
              <h2 className="rule-top pt-5 text-3xl">{groupName}</h2>
              <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
