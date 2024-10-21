import { Photo } from "@/types";
import { AppLoadContext } from "@remix-run/cloudflare";

const url = "https://api.unsplash.com";

export async function getRandomPhotos(
	context: AppLoadContext,
	count: number,
	orientation: string,
	query?: string,
) {
	const endpoint = "photos/random";
	let requestUrl =
		`${url}/${endpoint}?count=${count.toString()}&orientation=${orientation}`;

	if (query) {
		requestUrl += `&query=${query}`;
	}

	const res = await fetch(requestUrl, {
		method: "GET",
		headers: {
			Authorization: `Client-ID ${context.cloudflare.env.UNSPLASH_ACCESS_KEY}`,
		},
	});

	const json = await res.json();
	return json as Photo[];
}

// NOT USED
export async function getPhotoWithId(context: AppLoadContext, id: string) {
	const endpoint = "photos";
	const requestUrl = `${url}/${endpoint}/${id}`;

	const res = await fetch(requestUrl, {
		method: "GET",
		headers: {
			Authorization: `Client-ID ${context.cloudflare.env.UNSPLASH_ACCESS_KEY}`,
		},
	});

	const json = await res.json();
	return json as Photo;
}
