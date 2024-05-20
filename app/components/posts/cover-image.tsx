interface CoverImageProps {
  imageUrl: string;
  altText: string;
}

export function CoverImage({ imageUrl, altText }: CoverImageProps) {
  return (
    <div className="relative mx-auto aspect-auto overflow-hidden rounded-md border border-white md:w-1/2">
      <img
        src={imageUrl}
        alt={altText}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
