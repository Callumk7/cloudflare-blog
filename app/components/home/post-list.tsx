import { Post } from "@/types";
import { PostPreview } from "../posts/post-preview";
import { Link } from "@remix-run/react";

interface PostListProps {
  posts: Post[];
}
export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid space-y-16 divide-y divide-foreground/20 md:space-y-5">
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
      <Link
        to={"/blog"}
        className="w-full py-5 text-center font-syne text-lg font-bold text-primary-1 hover:bg-background-hover"
      >
        More Posts..
      </Link>
    </div>
  );
}
