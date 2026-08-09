import React from "react";
import Link from "next/link";
import clsx from "clsx";
import type { Collection } from "@/lib/commerce/types";

export interface CollectionCardProps {
  collection: Collection;
  imageUrl?: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  collection,
  imageUrl,
  className,
  aspectRatio = "portrait",
}) => {
  const aspectStyles = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
  };

  const bgImage = imageUrl || "/images/collections/coffee.jpg";
  const href = collection.path || `/search/${collection.handle}`;

  return (
    <Link
      href={href}
      className={clsx(
        "group relative flex flex-col justify-end overflow-hidden p-6 md:p-8 rounded-sm bg-neutral-900 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--heritage-gold)]",
        aspectStyles[aspectRatio],
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-90"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative z-10 text-[var(--warm-ivory)]">
        <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[var(--heritage-gold)] font-semibold mb-2 block">
          COLLECTION
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-tight">
          {collection.title}
        </h3>
        {collection.description && (
          <p className="text-xs md:text-sm font-sans text-neutral-300 line-clamp-2 mb-4 max-w-md font-light">
            {collection.description}
          </p>
        )}
        <span className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase font-semibold text-[var(--warm-ivory)] group-hover:text-[var(--heritage-gold)] transition-colors duration-200">
          Discover Collection
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </span>
      </div>
    </Link>
  );
};
