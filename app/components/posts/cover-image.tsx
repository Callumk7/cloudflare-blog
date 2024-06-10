interface CoverImageProps {
  imageUrl: string;
  altText: string;
}

export function CoverImage({ imageUrl, altText }: CoverImageProps) {
  return (
    <div className="overflow-hidden relative mx-auto rounded-md border border-white md:w-1/2 aspect-auto">
      <img
        src={imageUrl}
        alt={altText}
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
}
