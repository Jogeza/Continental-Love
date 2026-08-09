import React from "react";
import clsx from "clsx";
import type { Money } from "@/lib/commerce/types";

export interface PriceProps extends React.HTMLAttributes<HTMLParagraphElement> {
  price?: Money;
  amount?: string;
  currencyCode?: string;
  compareAtPrice?: Money;
  className?: string;
  priceClassName?: string;
  currencyClassName?: string;
}

export const Price: React.FC<PriceProps> = ({
  price,
  amount,
  currencyCode = "USD",
  compareAtPrice,
  className,
  priceClassName,
  currencyClassName,
  ...props
}) => {
  const val = price?.amount || amount || "0";
  const currency = price?.currencyCode || currencyCode;

  const formattedPrice = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
  }).format(parseFloat(val));

  const formattedComparePrice = compareAtPrice
    ? new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: compareAtPrice.currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(parseFloat(compareAtPrice.amount))
    : null;

  return (
    <div className={clsx("inline-flex items-baseline gap-2 font-sans", className)}>
      <p suppressHydrationWarning className={clsx("font-semibold text-sm md:text-base text-[var(--charcoal)]", priceClassName)} {...props}>
        {formattedPrice}
        <span className={clsx("ml-1 text-xs text-neutral-500 font-normal uppercase", currencyClassName)}>
          {currency}
        </span>
      </p>
      {formattedComparePrice && (
        <span className="text-xs text-neutral-400 line-through">
          {formattedComparePrice}
        </span>
      )}
    </div>
  );
};
