interface PillProps {
  tag: string;
}

export function Pill({ tag }: PillProps) {
  return (
    <div className="rounded-full bg-white px-2 py-1 font-mono text-sm text-background">
      {tag}
    </div>
  );
}
