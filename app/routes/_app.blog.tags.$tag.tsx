import { getPostTags, getPostsByTag } from "@/api/posts";
import { PostPreview } from "@/components/posts/post-preview";
import { TagList } from "@/components/tags/tag-list";
import { LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData, useParams } from "@remix-run/react";

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const tag = params.tag; // review type checking for working with params

  if (!tag) {
    return redirect("/blog");
  }

  const posts = await getPostsByTag(context, tag);
  const tags = await getPostTags(context);

  return json({ posts, tags });
};

export default function BlogPage() {
  const { posts, tags } = useLoaderData<typeof loader>();
  const params = useParams();
  const tag = params.tag;
  if (!tag) {
    return <div>No tag, what is going on?</div>;
  }
  return (
    <>
      <div className="divide-y divide-foreground/20">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10 md:text-6xl font-syne text-foreground md:leading-14">
            {tag}
          </h1>
          <TagList className="pt-3 pb-10" tags={tags} />
        </div>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
