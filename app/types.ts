interface Post {
	title: string;
	description: string;
	projectShortName?: string;
	content: string;
	coverImageUrl: string;
	date: string;
	author: Author;
	tags: string[];
	slug: string;
}

interface Author {
	name: string;
	imageUrl: string;
}

interface Project {
	name: string;
	shortName: string;
	description: string;
	projectUrl?: string; // external link to deployed project
	githubUrl: string; // github project link
	coverImageUrl: string;
	tags: string[];
	caseStudyUrl: string;
	slug: string;
	content: string;
	tech: string[];
	wip: boolean;
	cvDescription?: string;
}

interface Photo {
	id: string;
	slug: string;
	width: number;
	height: number;
	alt_description: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
	};
}

type Tags = Record<string, number>;

export type { Post, Project, Author, Tags, Photo };
