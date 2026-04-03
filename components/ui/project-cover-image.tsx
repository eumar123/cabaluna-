import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

type Props = {
  src?: string;
  alt: string;
  /** Tailwind aspect utility, e.g. aspect-square, aspect-[4/3] */
  aspectClassName?: string;
  className?: string;
  sizes?: string;
};

export function ProjectCoverImage({
  src,
  alt,
  aspectClassName = "aspect-square",
  className = "",
  sizes = "(max-width: 640px) 100vw, 280px",
}: Props) {
  if (!src) {
    return <ImagePlaceholder className={className} />;
  }

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-[var(--border)] bg-[var(--muted)] ${aspectClassName} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}
