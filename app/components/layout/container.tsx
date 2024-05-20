import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

const containerVariants = cva("space-y-10", {
  variants: {
    width: {
      normal: "mx-auto w-10/12 lg:w-4/5",
      wide: "mx-auto w-11/12 lg:w-10/12",
      max: "w-full",
      mobMax: "w-full md:w-10/12 mx-auto",
    },
  },
  defaultVariants: {
    width: "normal",
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, width, ...props }: ContainerProps) {
  return (
    <div className={clsx(containerVariants({ className, width }))} {...props}>
      {children}
    </div>
  );
}
