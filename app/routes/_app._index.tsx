import { getAllProjectData } from "@/api/projects";
import Portrait from "@/components/home/portrait";
import { Container } from "@/components/layout/container";
import { H2 } from "@/components/layout/headers";
import { ProjectList } from "@/components/projects/project-list";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const allProjects = await getAllProjectData(context);
  const completedProjects = allProjects.filter((project) => !project.wip);
  return json({ completedProjects });
};

export default function AppIndex() {
  const { completedProjects } = useLoaderData<typeof loader>();
  return (
    <Container className="my-10" width={"mobMax"}>
      <div className="relative min-h-screen gap-x-6 lg:grid lg:grid-cols-2">
        <div className="lg:sticky lg:top-[64px] lg:max-h-[calc(100vh-64px)] lg:h-fit">
          <Portrait />
          <H2>Projects</H2>
          <p className="mb-8">
            I design and build accessible, engaging and delightful digital experiences.
          </p>
        </div>
        <div>
          <ProjectList projects={completedProjects} />
        </div>
      </div>
    </Container>
  );
}
