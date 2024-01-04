import type { Photo } from "@/types";

const url = "https://api.unsplash.com";

export async function getRandomPhotos(
	UNSPLASH_ACCESS_KEY: string,
	count: number,
	orientation: string,
	query?: string,
) {
	const endpoint = "photos/random";
	let requestUrl =
		url +
		"/" +
		endpoint +
		"?count=" +
		count.toString() +
		"&orientation=" +
		orientation;

	if (query) {
		requestUrl += "&query=" + query;
	}

	const res = await fetch(requestUrl, {
		method: "GET",
		headers: {
			Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
		},
	});

	const json = await res.json();
	return json as Photo[];
}

export async function getPhotoWithId(UNSPLASH_ACCESS_KEY: string, id: string) {
	const endpoint = "photos";
	const requestUrl = url + "/" + endpoint + "/" + id;

	const res = await fetch(requestUrl, {
		method: "GET",
		headers: {
			Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
		},
	});

	const json = await res.json();
	return json as Photo;
}
