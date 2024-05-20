import { PhotoPreview } from "@/components/photography/photo-preview";
import { Admonition } from "@/components/ui/admonition";
import { getRandomPhotos } from "@/lib/unsplash/get-photos";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const photos = await getRandomPhotos(25, "portrait");

  return json({ photos });
};

export default function PhotographyPage() {
  const { photos } = useLoaderData<typeof loader>();
  return (
    <div className="mx-2 mt-2">
      <Admonition variant="warn">
        This page is currently under construction, and all photos are pulled randomly from
        Unsplash!
      </Admonition>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
        {photos.map((photo) => (
          <PhotoPreview photo={photo} size="sm" key={photo.id} />
        ))}
      </div>
    </div>
  );
}
