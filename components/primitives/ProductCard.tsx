import React from "react";
import Link from "next/link";
import clsx from "clsx";
import type { Product, CartProduct } from "@/lib/commerce/types";
import { MediaImage } from "./MediaImage";
import { Price } from "./Price";

export interface ProductCardProps {
  product: Product | CartProduct;
  originBadge?: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  showQuickView?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  originBadge = "UGANDA → ITALY ATELIER",
  className,
  aspectRatio = "portrait",
}) => {
  const isFullProduct = "priceRange" in product;
  const price = isFullProduct ? (product as Product).priceRange.minVariantPrice : null;
  const href = `/product/${product.handle}`;
  const image = product.featuredImage;

  return (
    <div className={clsx("group flex flex-col transition-all duration-300", className)}>
      <Link href={href} className="block relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--forest-green)]">
        <MediaImage
          image={image}
          aspectRatio={aspectRatio}
          zoomOnHover
          className="rounded-sm"
        />
        {originBadge && (
          <span className="absolute top-3 left-3 bg-[var(--charcoal)]/90 backdrop-blur-md text-[var(--warm-ivory)] text-[10px] font-sans font-semibold tracking-[0.2em] px-2.5 py-1 uppercase rounded-xs">
            {originBadge}
          </span>
        )}
      </Link>

      <div className="pt-4 flex flex-col flex-grow">
        <Link href={href} className="group-hover:text-[var(--forest-green)] transition-colors duration-200">
          <h3 className="font-serif text-lg md:text-xl text-[var(--charcoal)] leading-snug line-clamp-1">
            {product.title}
          </h3>
        </Link>
        {isFullProduct && (product as Product).description && (
          <p className="mt-1 text-xs text-neutral-500 font-sans line-clamp-2 leading-relaxed">
            {(product as Product).description}
          </p>
        )}
        <div className="mt-3 pt-2 border-t border-neutral-200/60 flex items-center justify-between">
          {price ? (
            <Price price={price} />
          ) : (
            <span className="text-xs font-sans text-neutral-400">View Atelier Piece</span>
          )}
          <span className="text-xs font-sans text-[var(--heritage-gold)] font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-200">
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
};
