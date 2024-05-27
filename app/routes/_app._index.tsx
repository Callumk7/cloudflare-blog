import { getAllPostData } from "@/api/posts";
import { getAllProjectData } from "@/api/projects";
import Portrait from "@/components/home/portrait";
import PostList from "@/components/home/post-list";
import { Container } from "@/components/layout/container";
import { H2 } from "@/components/layout/headers";
import { Separator } from "@/components/layout/separator";
import { ProjectCard } from "@/components/projects/project-card";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const posts = await getAllPostData(context);
	const allProjects = await getAllProjectData(context);
	const completedProjects = allProjects.filter((project) => !project.wip);
	const recentPosts = posts.slice(0, 3);
	return json({ recentPosts, completedProjects });
};

export default function AppIndex() {
	const { recentPosts, completedProjects } = useLoaderData<typeof loader>();
	return (
		<Container className="my-10" width={"mobMax"}>
			<div className="gap-x-4 lg:grid lg:grid-cols-2">
				<Portrait />
				<PostList posts={recentPosts} />
			</div>
			<Separator className="my-8" />
			<H2>Featured Projects</H2>
			<div className="grid lg:grid-cols-3 gap-4">
				{completedProjects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</Container>
	);
}
