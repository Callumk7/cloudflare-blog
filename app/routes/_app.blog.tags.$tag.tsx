import { getPostsByTag } from "@/api/posts";
import { getTags } from "@/api/tags";
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
  const tags = await getTags(context);

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
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 font-syne text-3xl font-extrabold leading-9 tracking-tight  text-foreground sm:text-4xl sm:leading-10 md:text-6xl">
            {tag}
          </h1>
          <TagList className="pb-10 pt-3" tags={tags} />
        </div>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
