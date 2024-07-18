import { Post, Project, Tags } from "@/types";
import { AppLoadContext } from "@remix-run/cloudflare";
import { createProjectDataAccess } from "./data-access";

export const getAllProjectData = async (context: AppLoadContext): Promise<Project[]> => {
	const dataAccess = createProjectDataAccess(context);
	const projects = await dataAccess.getAllProjects();

	// posts.sort((a, b) => {
	// 	const dateA = new Date(a.date);
	// 	const dateB = new Date(b.date);
	//
	// 	// newest to oldest
	// 	return dateB.getTime() - dateA.getTime();
	// });

	return projects;
};

export const getProjectBySlug = async (context: AppLoadContext, slug: string) => {
	const projects = await getAllProjectData(context);

	const project = projects.find((post) => post.slug === slug);

	return project;
};

export const getProjectTags = async (context: AppLoadContext): Promise<Tags> => {
	const projectTagsData = await context.cloudflare.env.POSTS.get("projectTagData");

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

export const getProjectImageSrcs = (
	context: AppLoadContext,
	project: Project,
): string[] => {
	if (!project.screenshotCount) {
		return [];
	}

	const { shortName, screenshotCount } = project;
	const images = [];

	for (let i = 1; i <= screenshotCount; i++) {
		images.push(
			`${context.cloudflare.env.S3_URL}/images/projects/${shortName}/${i}.png`,
		);
	}

	return images;
};
