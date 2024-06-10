export function PostTitle({ title }: { title: string }) {
  return (
    <h1 className="pb-5 text-xl font-black md:leading-snug font-syne text-primary-1 md:text-2vw">
      {title}
    </h1>
  );
}
