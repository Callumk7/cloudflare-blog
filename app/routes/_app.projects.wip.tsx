import { getAllProjectData } from "@/api/projects";
import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import { ProjectTable } from "@/components/projects/project-table";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const allProjects = await getAllProjectData(context);

  const projects = allProjects.filter((project) => project.wip);

  return json({ projects });
};

export default function WipProjects() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <Container width={"mobMax"}>
      <Title title="Work In Progress" />
      <div className="max-w-none prose prose-invert">
        <p>
          This is the stuff that is not ready for presentation. Ideas, tinkering projects,
          or just need more thought. If you have some ideas, please do reach out!
          Otherwise{" "}
          <Link to={"/projects"} className="link">
            Head back to the projects page
          </Link>
          , for the good stuff.
        </p>
      </div>
      <ProjectTable projects={projects} />
    </Container>
  );
}
