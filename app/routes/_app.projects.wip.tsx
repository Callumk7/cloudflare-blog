import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import { ProjectTable } from "@/components/projects/project-table";
import { getAllProjectData } from "@/features/projects/get-projects";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
  const allProjects = getAllProjectData();

  const projects = allProjects.filter((project) => project.wip);

  return json({ projects });
};

export default function WipProjects() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <Container width={"mobMax"}>
      <Title title="Work In Progress" />
      <div className="prose prose-invert max-w-none">
        <p>
          This is the stuff that is not ready for presentation. Ideas, tinkering projects,
          or just need more thought. If you have some ideas, please do reach out!
          Otherwise{" "}
          <Link to={"/projects"} className="link">
            Head back to the projects page
          </Link>
          ,{" "}for the good stuff.
        </p>
      </div>
      <ProjectTable projects={projects} />
    </Container>
  );
}
