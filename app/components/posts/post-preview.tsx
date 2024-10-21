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
      className="flex flex-col gap-2 p-3 rounded-md group hover:bg-background-hover"
      prefetch="intent"
    >
      <p className="font-mono text-sm text-foreground/60">{date.toDateString()}</p>
      <h1 className="text-lg font-bold transition-colors duration-100 ease-in-out group-hover:text-violet-400 font-syne text-primary-1">
        {post.title}
      </h1>
      <p className="font-mono">{post.description}</p>
    </Link>
  );
}
