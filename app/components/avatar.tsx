export function Avatar() {
  return (
    <div className="relative aspect-square w-9/12 overflow-hidden rounded-full">
      <img
        src="./avatar-scaled.jpg"
        alt="portrait"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
