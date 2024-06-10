import { Photo } from "@/types";
import { Link } from "@remix-run/react";

interface PhotoPreviewProps {
  photo: Photo;
  size: "sm" | "lg" | "raw";
}

export function PhotoPreview({ photo, size }: PhotoPreviewProps) {
  return (
    <Link
      to={`/photography/${photo.id}`}
      className="block overflow-hidden relative w-full h-full duration-200 ease-in delay-100 group animate-in fade-in"
    >
      <img
        src={
          size === "sm"
            ? photo.urls.small
            : size === "lg"
            ? photo.urls.regular
            : photo.urls.raw
        }
        alt={photo.alt_description}
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute bottom-0 left-0 py-1 px-4 w-full opacity-0 transition-opacity duration-200 delay-200 group-hover:opacity-80 bg-background text-foreground">
        Information about the photo
      </div>
    </Link>
  );
}
