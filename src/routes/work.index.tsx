import { createFileRoute } from "@tanstack/react-router";
import { projects, CATEGORIES, type Project } from "@/data/projects";

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
      { property: "og:description", content: "Browse work by category, with direct links to the real work for each project." },
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function CategorySection({ category, items }: { category: string; items: Project[] }) {
  return (
    <section className="border-t border-border py-8">
      <h2 className="text-2xl">{category}</h2>
      <div className="mt-5 divide-y divide-border">
        {items.map((project) => (
          <article key={project.slug} className="grid gap-4 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
            {project.cover ? (
              <img src={project.cover.src} alt={project.cover.alt} loading="lazy" className="h-28 w-full max-w-44 object-cover sm:h-24 sm:w-28" />
            ) : null}
            <div>
              <h3 className="text-xl">{project.title}</h3>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
                {project.links?.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noreferrer noopener" className="text-sm text-teal underline underline-offset-4 hover:text-foreground">
                      {link.label} <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkIndex() {
  const groups = CATEGORIES.map((category) => ({
    category,
    items: projects.filter((project) => project.categories[0] === category),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Work</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Work, organized by what I do.</h1>
      <div className="mt-10">
        {groups.map((g) => (
          <CategorySection key={g.category} category={g.category} items={g.items} />
        ))}
      </div>
    </div>
  );
}
