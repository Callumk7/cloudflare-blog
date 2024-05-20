import { Pill } from "../tags/pill";

interface SkillsListProps {
  skills: string[];
}

export function SkillsList({ skills }: SkillsListProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <Pill tag={skill} key={skill} />
      ))}
    </div>
  );
}
