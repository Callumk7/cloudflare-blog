import { Post } from "@/types";
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
