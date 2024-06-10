import { Project } from "@/types";
import { Card } from "../layout/card";
import { Github } from "../icons/github";
import { Button } from "../ui/button";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Card
			className="pb-14 transition-colors ease-in-out group content-stretch hover:bg-background-hover"
			flex
			asLink
			to={`/projects/${project.slug}`}
		>
			<h1 className="pb-3 text-2xl font-bold transition-colors duration-100 ease-in-out group-hover:text-violet-400 font-syne text-primary-1">
				{project.name}
			</h1>
			<p className="pb-2 font-mono">{project.description}</p>
			<div className="absolute right-4 bottom-4">
				<Button variant={"ghost"} size={"icon"} asChild>
					<a
						href="https://github.com/Callumk7/frontline-v2-remix"
						onClick={(e) => e.stopPropagation()}
					>
						<Github />
					</a>
				</Button>
			</div>
		</Card>
	);
}
