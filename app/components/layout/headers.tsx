import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="pb-3 font-syne text-2xl font-black text-primary-1">{children}</h1>
  );
}
export function H2({ children, primary }: { children: ReactNode; primary?: boolean }) {
  return (
    <h1 className={`pb-3 font-syne text-xl font-bold ${primary ? "text-primary-1" : ""}`}>
      {children}
    </h1>
  );
}
export function H3({ children, primary }: { children: ReactNode; primary?: boolean }) {
  return (
    <h1 className={`pb-3 font-syne text-lg font-bold ${primary ? "text-primary-1" : ""}`}>
      {children}
    </h1>
  );
}
