export function PostTitle({ title }: { title: string }) {
  return (
    <h1 className="pb-5 font-syne text-xl font-black text-primary-1 md:text-2vw md:leading-snug">
      {title}
    </h1>
  );
}
