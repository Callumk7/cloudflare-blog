import { Post, Project } from "@/types";
import { AppLoadContext } from "@remix-run/cloudflare";

/// POST DATA ACCESS FOR DEVELOPMENT MODE

async function getPostsFromFile(): Promise<Post[]> {
	const { promises: fs } = await import("node:fs");
	const path = await import("node:path");

	const filePath = path.join(process.cwd(), "app", "data", "posts", "posts.json");
	const jsonData = await fs.readFile(filePath, "utf-8");
	return jsonData ? JSON.parse(jsonData) : [];
}

async function getPostsFromCloudflare(context: AppLoadContext): Promise<Post[]> {
	const jsonData = await context.cloudflare.env.POSTS.get("postData");
	return jsonData ? JSON.parse(jsonData) : [];
}

interface PostDataAccess {
	getAllPosts(): Promise<Post[]>;
}

class FilePostDataAccess implements PostDataAccess {
	async getAllPosts(): Promise<Post[]> {
		return getPostsFromFile();
	}
}

class CloudflarePostDataAccess implements PostDataAccess {
	constructor(private context: AppLoadContext) {}

	async getAllPosts(): Promise<Post[]> {
		return getPostsFromCloudflare(this.context);
	}
}

export function createPostDataAccess(context: AppLoadContext): PostDataAccess {
	const isDevelopment = process.env.NODE_ENV === "development";
	return isDevelopment
		? new FilePostDataAccess()
		: new CloudflarePostDataAccess(context);
}

/// PROJECT DATA ACCESS FOR DEVELOPMENT MODE
//
async function getProjectsFromFile(): Promise<Project[]> {
	const { promises: fs } = await import("node:fs");
	const path = await import("node:path");

	const filePath = path.join(process.cwd(), "app", "data", "projects", "projects.json");
	const jsonData = await fs.readFile(filePath, "utf-8");
	return jsonData ? JSON.parse(jsonData) : [];
}

async function getProjectsFromCloudflare(context: AppLoadContext): Promise<Project[]> {
	const jsonData = await context.cloudflare.env.POSTS.get("projectData");
	return jsonData ? JSON.parse(jsonData) : [];
}

interface ProjectDataAccess {
	getAllProjects(): Promise<Project[]>;
}

class FileProjectDataAccess implements ProjectDataAccess {
	async getAllProjects(): Promise<Project[]> {
		return getProjectsFromFile();
	}
}

class CloudflareProjectDataAccess implements ProjectDataAccess {
	constructor(private context: AppLoadContext) {}

	async getAllProjects(): Promise<Project[]> {
		return getProjectsFromCloudflare(this.context);
	}
}

export function createProjectDataAccess(context: AppLoadContext): ProjectDataAccess {
	const isDevelopment = process.env.NODE_ENV === "development";
	return isDevelopment
		? new FileProjectDataAccess()
		: new CloudflareProjectDataAccess(context);
}
