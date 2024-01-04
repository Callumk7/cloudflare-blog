import { PhotoPreview } from "@/components/photography/photo-preview";
import { getRandomPhotos } from "@/lib/unsplash/get-photos";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

interface ENV {
  BLOG_POSTS: KVNamespace;
  UNSPLASH_ACCESS_KEY: string;
}

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const env = context.env as ENV;
  const photos = await getRandomPhotos(env.UNSPLASH_ACCESS_KEY, 25, "portrait");
  console.log(photos);

  return json({ photos });
};

export default function PhotographyPage() {
  const { photos } = useLoaderData<typeof loader>();
  return (
    <div className="mx-2 mt-2">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
        {photos.map((photo) => (
          <PhotoPreview photo={photo} size="sm" key={photo.id} />
        ))}
      </div>
    </div>
  );
}
