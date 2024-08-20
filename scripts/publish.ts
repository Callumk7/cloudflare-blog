import path from "node:path";
import fs, { PathLike } from "node:fs";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown-to-html";
import { Post, Project, Tags } from "@/types";
import Cloudflare from "cloudflare";
import { ACCOUNT_ID, API_KEY, NAMESPACE_ID } from "const";

function checkRequiredFields(fields: Record<string, unknown>) {
	const fieldNames = [
		"name",
		"shortName",
		"description",
		"githubUrl",
		"coverImageUrl",
		"tags",
		"tech",
		"wip",
	];

	fieldNames.forEach((field) => {
		if (fields[field] === undefined || fields[field] === null) {
			throw new Error(`The '${field}' field is missing`);
		}
	});
}

const createSlug = (title: string) => {
	let slug = "";
	const words = title.split(" ");
	for (let index = 0; index < words.length; index++) {
		slug += words[index].toLowerCase().replace(/[^0-9a-z]/g, "");
		if (index !== words.length - 1) {
			slug += "-";
		}
	}
	return slug;
};

const getPostDataFromFile = async (filePath: PathLike): Promise<Post> => {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(fileContent);
	if (!content || !data) {
		throw new Error("File missing required content");
	}

	// perform the content transformation here, to improve request time
	const htmlContent = await markdownToHtml(content);

	const { title, description, projectShortName, coverImageUrl, date, tags } =
		data;
	if (!title || !description || !coverImageUrl || !date || !tags) {
		throw new Error("A required field is missing");
	}

	const slug = createSlug(title as string);

	console.log(`data retrieved for ${title}`);
	return {
		title,
		description,
		projectShortName,
		content: htmlContent,
		coverImageUrl,
		date,
		tags,
		slug,
	};
};

const getProjectDataFromFile = async (filePath: PathLike): Promise<Project> => {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(fileContent);
	if (!content || !data) {
		throw new Error("File missing required content");
	}

	checkRequiredFields(data);

	// perform the content transformation here, to improve request time
	const htmlContent = await markdownToHtml(content);

	const {
		name,
		shortName,
		description,
		projectUrl,
		githubUrl,
		coverImageUrl,
		tags,
		caseStudyUrl,
		tech,
		wip,
		cvDescription,
		screenshotCount,
	} = data;

	const slug = createSlug(name as string);

	console.log(`data retrieved for ${name}`);
	return {
		name,
		shortName,
		description,
		projectUrl,
		githubUrl,
		coverImageUrl,
		tags,
		caseStudyUrl,
		content: htmlContent,
		slug,
		tech,
		wip,
		cvDescription,
		screenshotCount,
	};
};

const getFilenamesFromFolder = (folder: string): string[] => {
	const fullPath = path.join(process.cwd(), folder);
	const files = fs.readdirSync(fullPath, "utf8");
	return files;
};

const writeToFile = (data: object, fileName: string) => {
	const jsonData = JSON.stringify(data, null, 2);
	const dir = path.dirname(fileName);
	// Ensure that the directory exists
	fs.mkdirSync(dir, { recursive: true });

	fs.writeFileSync(fileName, jsonData, "utf8");
};

const writeTagsToFile = (tags: string[], fileName: string) => {
	const tagsObj: Tags = {};
	tags.forEach((tag) => {
		if (tagsObj[tag]) {
			tagsObj[tag]++;
		} else {
			tagsObj[tag] = 1;
		}
	});
	writeToFile(tagsObj, fileName);
	return tagsObj;
};

const buildJson = async (postFolder: string, projectsFolder: string) => {
	const postFileNames = getFilenamesFromFolder(postFolder);
	let postData: Post[] = [];
	const postPromises = [];
	for (const fileName of postFileNames) {
		console.log(`Getting data from ${fileName}`);
		postPromises.push(
			getPostDataFromFile(path.join(process.cwd(), postFolder, fileName)),
		);
	}

	postData = await Promise.all(postPromises);
	console.log("all data retrieved");

	const postTags: string[] = [];
	for (const post of postData) {
		post.tags.forEach((tag) => postTags.push(tag));
	}

	// Don't really need this anymore
	const postTagData = writeTagsToFile(postTags, "app/data/posts/tags.json");
	writeToFile(postData, "app/data/posts/posts.json");

	const projectFileNames = getFilenamesFromFolder(projectsFolder);
	let projectsData: Project[] = [];
	const projectPromises = [];
	for (const fileName of projectFileNames) {
		console.log(`Getting data from ${fileName}`);
		projectPromises.push(
			getProjectDataFromFile(path.join(process.cwd(), projectsFolder, fileName)),
		);
	}

	projectsData = await Promise.all(projectPromises);
	console.log("all data retrieved");

	const projectTags: string[] = [];
	for (const project of projectsData) {
		project.tags.forEach((tag) => projectTags.push(tag));
	}

	const projectTagData = writeTagsToFile(projectTags, "app/data/projects/tags.json");
	writeToFile(projectsData, "app/data/projects/projects.json");
	return { postData, postTagData, projectsData, projectTagData };
};

async function main() {
	const cf = new Cloudflare({
		apiToken: API_KEY,
	});

	const { postData, postTagData, projectsData, projectTagData } = await buildJson(
		"content/posts",
		"content/projects",
	);
	const params: Cloudflare.KV.Namespaces.BulkUpdateParams = {
		account_id: ACCOUNT_ID,
		body: [
			{
				base64: false,
				key: "postData",
				value: JSON.stringify(postData),
			},
			{
				base64: false,
				key: "postTagData",
				value: JSON.stringify(postTagData),
			},
			{
				base64: false,
				key: "projectData",
				value: JSON.stringify(projectsData),
			},
			{
				base64: false,
				key: "projectTagData",
				value: JSON.stringify(projectTagData),
			},
		],
	};
	const result = await cf.kv.namespaces.bulk.update(NAMESPACE_ID, params);
	console.log(result);
}

await main();
