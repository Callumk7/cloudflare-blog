import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(className, "mx-auto flex w-4/5 flex-col gap-10")}
      {...props}
    >
      {children}
    </div>
  );
}
