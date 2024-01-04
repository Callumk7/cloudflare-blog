interface PostBodyProps  {
  content: string;
};

export function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-invert prose-h3:font-syne prose-h3:text-primary-1 prose-h3:font-bold prose-code:font-mono prose-code:text-lg prose-h2:font-syne prose-h2:text-primary-1 prose-h2:font-bold prose-strong:text-primary-1" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
