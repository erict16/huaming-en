type Size = "row" | "plate" | "hero";

export function Stamp({
  src,
  alt,
  size = "row",
}: {
  src: string;
  alt: string;
  size?: Size;
}) {
  const kind = /\.jpe?g$/i.test(src) ? "jpg" : "png";
  return (
    <figure className={`stamp stamp--${size}`}>
      <img src={src} alt={alt} className={`figure-photo is-${kind}`} />
    </figure>
  );
}
