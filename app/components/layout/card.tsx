import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
}

export function Card({
  children,
  className,
  flex = false,
  ...props
}: CardProps) {
  const cn = clsx(
    className,
    { "flex flex-col gap-4": flex },
    "relative rounded-md border border-foreground/20 p-6",
  );

  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
}
