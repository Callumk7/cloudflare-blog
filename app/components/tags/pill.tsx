interface PillProps {
  tag: string;
}

export function Pill({ tag }: PillProps) {
  return (
    <div className="py-1 px-2 font-mono text-sm bg-white rounded-full text-background">
      {tag}
    </div>
  );
}
