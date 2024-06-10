import { Post } from "@/types";
import { PostPreview } from "../posts/post-preview";
import { Link } from "@remix-run/react";

interface PostListProps {
	posts: Post[];
}
export default function PostList({ posts }: PostListProps) {
	return (
		<div className="grid space-y-16 divide-y md:space-y-5 divide-foreground/20">
			{posts.map((post) => (
				<PostPreview key={post.slug} post={post} />
			))}
			<Link
				to={"/blog"}
				className="py-5 w-full text-lg font-bold text-center transition-colors duration-100 ease-in-out hover:text-violet-400 font-syne text-primary-1 hover:bg-background-hover"
			>
				More Posts..
			</Link>
		</div>
	);
}
