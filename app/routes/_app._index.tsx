import Portrait from "@/components/home/portrait";
import PostList from "@/components/home/post-list";
import { Container } from "@/components/layout/container";
import { H2 } from "@/components/layout/headers";
import { Separator } from "@/components/layout/separator";
import { ProjectCard } from "@/components/projects/project-card";
import { useLoaderData } from "@remix-run/react";

// export const loader = (_args: LoaderFunctionArgs) => {
//   const posts = getAllPostData();
//   const allProjects = getAllProjectData();
//   const completedProjects = allProjects.filter(project => !project.wip)
//   const recentPosts = posts.slice(0, 3);
//   return json({ recentPosts, completedProjects });
// };

export default function AppIndex() {
  return (
    <Container className="my-10" width={"mobMax"}>
      <div className="gap-x-4 lg:grid lg:grid-cols-2">
        <Portrait />
      </div>
      <Separator className="my-8" />
      <H2>Featured Projects</H2>
    </Container>
  );
}
