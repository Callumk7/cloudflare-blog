import { Tags } from "@/types";
import { AppLoadContext } from "@remix-run/cloudflare";

export const getTags = async (context: AppLoadContext): Promise<Tags> => {
	const tagData = await context.cloudflare.env.POSTS.get("tagData");

	if (!tagData) {
		return {};
	}

	const tags: Tags = JSON.parse(tagData);
	return tags;
};
