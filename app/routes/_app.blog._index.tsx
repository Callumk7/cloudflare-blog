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
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <Title title="Latest" />
        <TagList className="pb-10 pt-3" tags={tags} />
      </div>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
}
