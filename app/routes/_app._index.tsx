import { getAllPostData } from "@/api/posts";
import Portrait from "@/components/home/portrait";
import PostList from "@/components/home/post-list";
import { Container } from "@/components/layout/container";
import { H2 } from "@/components/layout/headers";
import { Separator } from "@/components/layout/separator";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const posts = await getAllPostData(context);
  const recentPosts = posts.slice(0, 3);
  return json({ recentPosts });
};

export default function AppIndex() {
  const { recentPosts } = useLoaderData<typeof loader>();
  return (
    <Container className="my-10" width={"mobMax"}>
      <div className="gap-x-4 lg:grid lg:grid-cols-2">
        <Portrait />
        <PostList posts={recentPosts} />
      </div>
      <Separator className="my-8" />
      <H2>Featured Projects</H2>
    </Container>
  );
}
