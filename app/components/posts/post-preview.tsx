import { Post } from "@/types";
import { Link } from "@remix-run/react";

interface PostPreviewProps {
  post: Post;
}

export function PostPreview({ post }: PostPreviewProps) {
  const date = new Date(post.date);
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="hover:bg-background-hover rounded-md flex flex-col gap-2 p-3"
      prefetch="intent"
    >
      <p className="text-foreground/60 font-mono text-sm">{date.toDateString()}</p>
      <h1 className="font-syne text-primary-1 text-lg font-bold">{post.title}</h1>
      <p className="font-mono">{post.description}</p>
    </Link>
  );
}
