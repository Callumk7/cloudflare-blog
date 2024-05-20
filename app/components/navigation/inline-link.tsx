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
      className="mx-1 rounded-2xl bg-slate-200 px-2 py-1 text-sm text-background transition-colors ease-in-out hover:bg-primary-2 hover:text-background"
    >
      {children}
    </Link>
  );
}
