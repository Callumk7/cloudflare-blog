import { Link } from "@remix-run/react";
import { ReactNode } from "react";

interface InlineLinkProps {
  to: string;
  children: ReactNode;
}

export function InlineLink({ to, children }: InlineLinkProps) {
  return (
    <Link
      to={to}
      className="py-1 px-2 mx-1 text-sm rounded-2xl transition-colors ease-in-out bg-slate-200 text-background hover:bg-primary-2 hover:text-background"
    >
      {children}
    </Link>
  );
}
