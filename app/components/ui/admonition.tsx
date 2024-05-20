import { ReactNode } from "react";

interface AdmonitionProps {
  children: ReactNode;
  variant: "warn" | "note" | "danger";
}

export function Admonition({ children, variant }: AdmonitionProps) {
  const Warn = (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <path
        fill="currentColor"
        d="M235.07 189.09L147.61 37.22a22.75 22.75 0 0 0-39.22 0L20.93 189.09a21.53 21.53 0 0 0 0 21.72A22.35 22.35 0 0 0 40.55 222h174.9a22.35 22.35 0 0 0 19.6-11.19a21.53 21.53 0 0 0 .02-21.72m-10.41 15.71a10.46 10.46 0 0 1-9.21 5.2H40.55a10.46 10.46 0 0 1-9.21-5.2a9.51 9.51 0 0 1 0-9.72l87.45-151.87a10.75 10.75 0 0 1 18.42 0l87.46 151.87a9.51 9.51 0 0 1-.01 9.72M122 144v-40a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"
      />
    </svg>
  );
  const Note = (
    <svg
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <path
        fill="currentColor"
        d="M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8"
      />
    </svg>
  );
  const Danger = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <path
        fill="currentColor"
        d="M12 14a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 14m0-1.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8"
      />
    </svg>
  );
  return (
    <div
      className={`my-10 flex items-center gap-4 rounded-md border p-5 ${
        variant === "warn"
          ? "border-orange-800 bg-orange-950 text-orange-200"
          : variant === "note"
            ? "border-sky-800 bg-sky-950 text-sky-200"
            : "border-red-800 bg-red-950 text-red-200"
      }`}
    >
      {variant === "warn" ? Warn : variant === "note" ? Note : Danger}
      <p>{children}</p>
    </div>
  );
}
