import { getAllProjectData } from "@/api/projects";
import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import { ProjectTable } from "@/components/projects/project-table";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const allProjects = await getAllProjectData(context);

  const projects = allProjects.filter((project) => !project.wip);

  return json({ projects });
};

export default function ProjectsIndex() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <Container width={"mobMax"}>
      <Title title="Projects" />
      <div className="prose prose-invert max-w-none">
        <p>
          Take a look at some of the projects that I have been working on
          recently. Do let me know if you see anything that you like. In
          addition, feel free to checkout my{" "}
          <Link to={"/projects/wip"} className="link">
            Work In Progress
          </Link>{" "}
          page, for some ideas about what I am tinkering with in my free time.
        </p>
      </div>
      <ProjectTable projects={projects} />
    </Container>
  );
}
