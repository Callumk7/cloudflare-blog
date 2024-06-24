import { getAllProjectData } from "@/api/projects";
import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import { ProjectTable } from "@/components/projects/project-table";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const allProjects = await getAllProjectData(context);

	const projects = allProjects.filter((project) => !project.wip);

	return json({ projects });
};

export default function ProjectsIndex() {
	const { projects } = useLoaderData<typeof loader>();
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<Container width={"mobMax"}>
			<Title title="Projects" />
			<div className="max-w-none prose prose-invert">
				<p>
					Take a look at some of the projects that I have been working on recently. Do let
					me know if you see anything that you like. In addition, feel free to checkout my{" "}
					<Link to={"/projects/wip"} className="link">
						Work In Progress
					</Link>{" "}
					page, for some ideas about what I am tinkering with in my free time.
				</p>
			</div>
			<ProjectSearchAndFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<ProjectTable projects={projects} />
		</Container>
	);
}

interface ProjectSearchAndFilterProps {
	searchTerm: string;
	setSearchTerm: (searchTerm: string) => void;
}
function ProjectSearchAndFilter({
	searchTerm,
	setSearchTerm,
}: ProjectSearchAndFilterProps) {
	return (
		<input
			className="border p-3 rounded-md border-foreground/20 bg-background"
			value={searchTerm}
			onInput={(e) => setSearchTerm(e.currentTarget.value)}
		/>
	);
}
