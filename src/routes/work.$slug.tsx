import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { ProjectDetails } from "@/components/ProjectDetails";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project unavailable — Sierra Langford" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    const description = p.summary.slice(0, 155);
    return {
      meta: [
        { title: `${p.title} — Sierra Langford` },
        { name: "description", content: description },
        { property: "og:title", content: `${p.title} — Sierra Langford` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
      <Link to="/work" className="link-underline text-sm">
        Work Archive
      </Link>
      <div className="mt-8">
        <ProjectDetails project={project} titleAs="h1" />
      </div>
    </article>
  );
}
