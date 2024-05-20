import { Link } from "@remix-run/react";
import clsx from "clsx";

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
}

type LinkCardProps = BaseCardProps & {
  asLink: true;
  to: string;
};

type NormalCardProps = BaseCardProps & {
  asLink?: false;
  to?: never;
};

type CardProps = LinkCardProps | NormalCardProps;

export function Card({
  children,
  className,
  flex = false,
  asLink = false,
  to,
  ...props
}: CardProps) {
  const cn = clsx(
    className,
    { "flex flex-col gap-4": flex },
    "relative rounded-md border border-foreground/20 p-6",
  );

  if (asLink === true) {
    return (
      <Link to={to!} className={cn}>
        {children}
      </Link>
    );
  } else {
    return (
      <div className={cn} {...props}>
        {children}
      </div>
    );
  }
}
