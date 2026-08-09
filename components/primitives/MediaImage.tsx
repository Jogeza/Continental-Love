import React from "react";
import Image from "next/image";
import clsx from "clsx";
import type { Image as CommerceImage } from "@/lib/commerce/types";

export interface MediaImageProps {
  image?: Partial<CommerceImage> | null;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide" | "auto";
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  zoomOnHover?: boolean;
}

export const MediaImage: React.FC<MediaImageProps> = ({
  image,
  src,
  alt,
  width = 800,
  height = 1000,
  aspectRatio = "portrait",
  fill = false,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  className,
  imageClassName,
  zoomOnHover = true,
}) => {
  const imageUrl = image?.url || src || "/images/collections/apparel.jpg";
  const imageAlt = image?.altText || alt || "Continental Love Luxury Asset";
  const imgWidth = image?.width || width;
  const imgHeight = image?.height || height;

  const aspectStyles = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
    auto: "",
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-neutral-100",
        aspectRatio !== "auto" && aspectStyles[aspectRatio],
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={fill ? undefined : imgWidth}
        height={fill ? undefined : imgHeight}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={clsx(
          "object-cover w-full h-full transition-transform duration-700 ease-out",
          zoomOnHover && "group-hover:scale-105",
          imageClassName
        )}
      />
    </div>
  );
};
