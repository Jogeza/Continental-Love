import React from "react";
import Link from "next/link";
import clsx from "clsx";
import type { Product, CartProduct } from "@/lib/commerce/types";
import { MediaImage } from "./MediaImage";
import { Price } from "./Price";
import {useLocale, useTranslations} from "next-intl";
import {localizeHref} from "@/lib/i18n";

export interface ProductCardProps {
  product: Product | CartProduct;
  originBadge?: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  showQuickView?: boolean;
  commerceEnabled?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  originBadge = "UGANDA → ITALY ATELIER",
  className,
  aspectRatio = "portrait",
  commerceEnabled = true,
}) => {
  const locale = useLocale();
  const t = useTranslations("Product");
  const isFullProduct = "priceRange" in product;
  const price = isFullProduct ? (product as Product).priceRange.minVariantPrice : null;
  const isAvailable = isFullProduct ? (product as Product).availableForSale : true;
  const href = localizeHref(`/product/${product.handle}`, locale);
  const image = product.featuredImage;

  return (
    <article className={clsx("group flex flex-col transition-all duration-300", className)}>
      <Link href={href} className="block relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--forest-green)]">
        <MediaImage
          image={image}
          aspectRatio={aspectRatio}
          zoomOnHover
          className={clsx("border border-black/8 bg-[#ede8de]", !isAvailable && "opacity-60")}
        />
        {originBadge && (
          <span className="absolute top-3 left-3 bg-[var(--charcoal)]/90 backdrop-blur-md text-[var(--warm-ivory)] text-[10px] font-sans font-semibold tracking-[0.2em] px-2.5 py-1 uppercase rounded-xs">
            {originBadge}
          </span>
        )}
        {!isAvailable && (
          <span className="absolute top-3 right-3 bg-[var(--warm-ivory)]/95 backdrop-blur-md text-[var(--charcoal)] text-[10px] font-sans font-semibold tracking-[0.2em] px-2.5 py-1 uppercase rounded-xs">
            {t("soldOut")}
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
        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3">
          {commerceEnabled && price ? (
            <Price price={price} />
          ) : (
            <span className="text-xs font-sans text-neutral-500">{commerceEnabled ? t("viewPiece") : t("previewCatalog")}</span>
          )}
          <span className="text-xs font-sans text-[var(--heritage-gold)] font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-200">
            {t("explore")} →
          </span>
        </div>
      </div>
    </article>
  );
};
