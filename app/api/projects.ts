import { Post, Project, Tags } from "@/types";
import { AppLoadContext } from "@remix-run/cloudflare";

export const getAllProjectData = async (
	context: AppLoadContext,
): Promise<Project[]> => {
	const projectsData = await context.cloudflare.env.POSTS.get("projectsData");
	if (!projectsData) {
		return [];
	}

	const projects: Project[] = JSON.parse(projectsData);
	// posts.sort((a, b) => {
	// 	const dateA = new Date(a.date);
	// 	const dateB = new Date(b.date);
	//
	// 	// newest to oldest
	// 	return dateB.getTime() - dateA.getTime();
	// });

	return projects;
};

export const getProjectBySlug = async (
	context: AppLoadContext,
	slug: string,
) => {
	const projects = await getAllProjectData(context);

	const project = projects.find((post) => post.slug === slug);

	return project;
};

export const getProjectTags = async (
	context: AppLoadContext,
): Promise<Tags> => {
	const projectTagsData =
		await context.cloudflare.env.POSTS.get("projectTagData");

	if (!projectTagsData) {
		return {};
	}

	const tags: Tags = JSON.parse(projectTagsData);
	return tags;
};

export const getProjectPosts = async (
	context: AppLoadContext,
	shortName: string,
): Promise<Post[]> => {
	const postsData = await context.cloudflare.env.POSTS.get("postData");
	if (!postsData) {
		return [];
	}
	const posts: Post[] = JSON.parse(postsData);
	const related = posts.filter((post) => post.projectShortName === shortName);

	return related;
};
