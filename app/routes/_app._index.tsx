import { getAllPostData } from "@/api/posts";
import { getAllProjectData } from "@/api/projects";
import Portrait from "@/components/home/portrait";
import PostList from "@/components/home/post-list";
import { Container } from "@/components/layout/container";
import { H2 } from "@/components/layout/headers";
import { Separator } from "@/components/layout/separator";
import { ProjectList } from "@/components/projects/project-list";
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
			<div className="gap-x-6 lg:grid lg:grid-cols-2">
				<Portrait />
				<div>
					<H2>Projects</H2>
					<p className="mb-8">
						I design and build accessible, engaging and delightful digital experiences.
					</p>
					<ProjectList projects={completedProjects} />
				</div>
			</div>
			<Separator className="my-8" />
			<H2>Recent Posts</H2>
			<PostList posts={recentPosts} />
		</Container>
	);
}
