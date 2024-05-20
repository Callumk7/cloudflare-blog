import { Photo } from "@/types";

const url = "https://api.unsplash.com";
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY!;

export async function getRandomPhotos(
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

export async function getPhotoWithId(id: string) {
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
