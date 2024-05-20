import { Card } from "@/components/layout/card";
import { Separator } from "@/components/layout/separator";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectSidebarCard } from "@/components/projects/project-sidebar-card";
import { Pill } from "@/components/tags/pill";
import { getProjectPosts } from "@/features/projects/get-project-posts";
import { getAllProjectData } from "@/features/projects/get-projects";
import { Post, Project } from "@/types";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

///
/// LOADER
///
export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  let projects = getAllProjectData();

  // We redirect to project page if no slug, so we can assert
  // that project !== undefined
  const project = projects.find((proj) => proj.slug === slug)!;
  projects = projects.filter((project) => project.slug !== slug);

  // get related post information
  const relatedPosts = getProjectPosts(project.shortName);

  return json({ projects, project, relatedPosts });
};

// force revalidation (refetch sidebar)
export const shouldRevalidate = () => true;

///
/// RENDER FUNCTION
///
export default function ProjectLayout() {
  const { projects, project, relatedPosts } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="xl:grid xl:grid-cols-8 xl:gap-14">
        <div className="w-full xl:col-span-5">
          <div className="mb-10 xl:hidden">
            <ProjectDetailsCard project={project} relatedPosts={relatedPosts} />
          </div>
          <Outlet />
        </div>
        <div className="space-y-5 xl:hidden">
          <Separator />
          <h3 className="font-syne text-lg font-bold">Other Projects</h3>
        </div>
        <div className="relative w-full xl:col-span-3">
          <div className="xl:fixed">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:max-w-sm">
              <div className="mb-7 hidden xl:inline">
                <ProjectDetailsCard project={project} relatedPosts={relatedPosts} />
              </div>
              <h3 className="hidden pb-4 pt-10 font-syne text-lg font-bold xl:inline">
                Other Projects
              </h3>
              <Card flex>
                {projects.map((project) => (
                  <Link
                    className="link"
                    to={`/projects/${project.slug}`}
                    key={project.slug}
                  >
                    {project.name}
                  </Link>
                ))}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectDetailsCard({
  project,
  relatedPosts,
}: {
  project: Project;
  relatedPosts: Post[];
}) {
  return (
    <Card flex>
      <a href={project.projectUrl} className="link">
        {project.projectUrl}
      </a>
      <Link className="link" to={project.caseStudyUrl}>
        Introduction Post
      </Link>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.tech.map((t) => (
          <Pill key={t} tag={t} />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {relatedPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="link">
            {post.title}
          </Link>
        ))}
      </div>
    </Card>
  );
}
