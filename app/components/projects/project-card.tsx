import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-5 rounded-md border border-foreground/20 p-6">
      <h1 className="font-syne text-xl font-bold text-primary-1">{project.name}</h1>
      <p className="font-mono">{project.description}</p>
    </div>
  );
}
