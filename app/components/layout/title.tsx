interface TitleProps {
  title: string;
  centered?: boolean;
}

export function Title({ title, centered }: TitleProps) {
  return (
    <h1
      className={`${
        centered && "mx-auto w-4/5"
      } font-syne text-5xl font-extrabold tracking-tight md:text-5vw`}
    >
      {title}
    </h1>
  );
}
