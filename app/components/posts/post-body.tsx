interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="max-w-none prose prose-lg lg:prose-base prose-invert prose-h1:font-syne prose-h1:border-b prose-h1:border-foreground/20 prose-h1:text-3xl prose-h1:pt-6 prose-h1:pb-4 prose-h1:text-primary-1 prose-h2:font-syne prose-h2:font-bold prose-h2:text-primary-1 prose-h2:text-xl prose-h3:font-syne prose-h3:font-semibold prose-h3:text-xl prose-strong:text-primary-1 prose-code:font-mono prose-code:text-base"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
