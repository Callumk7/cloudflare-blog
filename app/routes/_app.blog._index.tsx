import { getAllPostData, getPostTags } from "@/api/posts";
import { Title } from "@/components/layout/title";
import { PostPreview } from "@/components/posts/post-preview";
import { TagList } from "@/components/tags/tag-list";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const posts = await getAllPostData(context);
  const tags = await getPostTags(context);

  return json({ posts, tags });
};

export default function BlogPage() {
  const { posts, tags } = useLoaderData<typeof loader>();
  return (
    <div className="divide-y divide-foreground/20">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <Title title="Latest" />
        <TagList className="pt-3 pb-10" tags={tags} />
      </div>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
}
