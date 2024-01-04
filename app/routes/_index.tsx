import { PostPreview } from "@/components/posts/post-preview";
import { getAllPostData } from "@/features/posts/get-posts";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = (_args: LoaderFunctionArgs) => {
  const posts = getAllPostData();
  return json({ posts });
};

export default function AppIndex() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main>
      <div className="mx-auto w-4/5">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-5">
            <h1 className="font-syne mt-6 text-5xl font-black">Callum Kloos</h1>
            <div className="relative aspect-square w-9/12 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
                alt="portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
              {posts.map((post) => (
                <PostPreview key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
