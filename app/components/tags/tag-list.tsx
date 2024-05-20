import { Tags } from "@/types";
import { Link } from "@remix-run/react";
import clsx from "clsx";

interface TagListProps {
  tags: Tags;
  className?: string;
}

// TODO: Why is there no Tag component?

export function TagList({ tags, className }: TagListProps) {
  return (
    <div className={clsx([className, "flex flex-wrap gap-x-7 gap-y-2"])}>
      {Object.entries(tags).map(([tag, count]) => (
        <div key={tag} className="flex flex-row gap-2">
          <Link to={`/blog/tags/${tag}`} className="font-mono text-primary-1 underline">
            {tag}
          </Link>
          <p className="">({count})</p>
        </div>
      ))}
    </div>
  );
}
