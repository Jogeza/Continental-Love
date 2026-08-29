"use client";

import { useMemo, useState } from "react";
import type { Image as CommerceImage } from "@/lib/commerce/types";
import { MediaImage } from "@/components/primitives/MediaImage";

export default function ProductGallery({
  featuredImage,
  images,
}: {
  featuredImage: CommerceImage;
  images: CommerceImage[];
}) {
  const galleryImages = useMemo(
    () => [featuredImage, ...images.filter((image) => image.url !== featuredImage.url)],
    [featuredImage, images],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = galleryImages[selectedIndex] ?? featuredImage;

  return (
    <div className="space-y-4 sm:space-y-6">
      <MediaImage
        image={selectedImage}
        aspectRatio="portrait"
        priority
        zoomOnHover={false}
        className="w-full rounded-sm border border-neutral-200/60 shadow-sm"
      />

      {galleryImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:gap-4" aria-label="Product images">
          {galleryImages.slice(0, 4).map((image, index) => {
            const selected = index === selectedIndex;

            return (
              <button
                key={image.url}
                type="button"
                aria-label={`View image ${index + 1}: ${image.altText}`}
                aria-pressed={selected}
                onClick={() => setSelectedIndex(index)}
                className={`overflow-hidden rounded-xs border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--forest-green)] focus-visible:ring-offset-2 ${
                  selected
                    ? "border-[var(--heritage-gold)]"
                    : "border-neutral-200/60 hover:border-[var(--charcoal)]/50"
                }`}
              >
                <MediaImage
                  image={image}
                  aspectRatio="square"
                  zoomOnHover={false}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
