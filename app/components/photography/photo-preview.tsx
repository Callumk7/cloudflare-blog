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
      className="group relative block h-full w-full overflow-hidden animate-in fade-in ease-in duration-200 delay-100"
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
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 w-full bg-background px-4 py-1 text-foreground opacity-0 transition-opacity duration-200 delay-200 group-hover:opacity-80">
        Information about the photo
      </div>
    </Link>
  );
}
