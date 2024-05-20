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
      className="content-stretch pb-14 transition-colors ease-in-out hover:bg-background-hover"
      flex
      asLink
      to={`/projects/${project.slug}`}
    >
      <h1 className="pb-3 font-syne text-2xl font-bold text-primary-1">{project.name}</h1>
      <p className="pb-2 font-mono">{project.description}</p>
      <div className="absolute bottom-4 right-4">
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
