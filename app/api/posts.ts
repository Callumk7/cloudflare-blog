import { Post, Tags } from "@/types";
import { AppLoadContext } from "@remix-run/cloudflare";

export const getAllPostData = async (
	context: AppLoadContext,
): Promise<Post[]> => {
	const jsonData = await context.cloudflare.env.POSTS.get("postData");

	if (!jsonData) {
		return [];
	}

	const posts: Post[] = JSON.parse(jsonData);
	posts.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);

		// newest to oldest
		return dateB.getTime() - dateA.getTime();
	});

	return posts;
};

export const getPostTags = async (context: AppLoadContext): Promise<Tags> => {
	const tagData = await context.cloudflare.env.POSTS.get("tagData");

	if (!tagData) {
		return {};
	}

	const tags: Tags = JSON.parse(tagData);
	return tags;
};

export const getPostsByTag = async (
	context: AppLoadContext,
	tag: string,
): Promise<Post[]> => {
	const allPosts = await getAllPostData(context);
	const filteredPosts = allPosts.filter((post) => post.tags.includes(tag));

	return filteredPosts;
};

export const getPostBySlug = async (context: AppLoadContext, slug: string) => {
	const posts = await getAllPostData(context);

	const post = posts.find((post) => post.slug === slug);

	return post;
};
