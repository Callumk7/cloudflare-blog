interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className="max-w-none prose prose-lg prose-invert prose-h2:font-syne prose-h2:font-bold prose-h2:text-primary-1 prose-h3:font-syne prose-h3:font-bold prose-h3:text-primary-1 prose-strong:text-primary-1 prose-code:font-mono prose-code:text-base"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
