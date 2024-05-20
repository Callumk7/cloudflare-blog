import { HTMLAttributes, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

interface FadeInViewProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function FadeInView({ children, ...props }: FadeInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      {...props}
      className={`${
        isInView ? "scale-100 opacity-100" : "scale-95 opacity-60"
      } transition-all duration-100 ease-in`}
    >
      {children}
    </div>
  );
}
