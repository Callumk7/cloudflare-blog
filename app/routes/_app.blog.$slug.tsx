import { PostBody } from "@/components/posts/post-body";
import { PostTitle } from "@/components/posts/post-title";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

// import "@/styles/prism.css";
import { CoverImage } from "@/components/posts/cover-image";
import { Pill } from "@/components/tags/pill";
import { getPostBySlug } from "@/api/posts";

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const post = await getPostBySlug(context, slug!);

  if (!post) {
    return json({ post: null });
  }

  return json({ post });
};

export default function BlogPostPage() {
  const { post } = useLoaderData<typeof loader>();

  if (!post) {
    return <div>Post does not exist</div>;
  }

  const date = new Date(post.date).toDateString();

  return (
    <>
      <CoverImage imageUrl={post.coverImageUrl} altText={post.title} />
      <div className="mx-auto mt-5 flex w-fit flex-wrap gap-3">
        {post.tags.map((tag) => (
          <Pill key={tag} tag={tag} />
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <p className="w-full text-sm text-foreground/80">{date}</p>
        <PostTitle title={post.title} />
      </div>
      <PostBody content={post.content} />
    </>
  );
}
