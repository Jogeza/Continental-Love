"use client";

import { clsx } from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";
import type { ProductOption, ProductVariant } from "@/lib/commerce/types";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

/**
 * Renders one row of real, clickable buttons per product option (e.g. Size,
 * Color) and writes the selection to the URL's search params.
 * components/cart/add-to-cart.tsx already reads the selected variant from
 * those same params (searchParams.get(option.name.toLowerCase())), so this
 * needed no changes there to work — it only needed a UI that could actually
 * be clicked, which didn't exist before.
 */
export function VariantSelector({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (acc, option) => ({ ...acc, [option.name.toLowerCase()]: option.value }),
      {},
    ),
  }));

  return (
    <>
      {options.map((option) => {
        const optionNameLowerCase = option.name.toLowerCase();

        return (
          <div key={option.id} className="mb-6">
            <label className="block text-xs font-sans font-semibold tracking-widest text-[var(--charcoal)] uppercase mb-3">
              {option.name}:
            </label>
            <div className="flex flex-wrap gap-2">
              {option.values.map((value) => {
                const optionSearchParams = new URLSearchParams(
                  searchParams.toString(),
                );
                optionSearchParams.set(optionNameLowerCase, value);
                const optionUrl = createUrl(pathname, optionSearchParams);

                const filtered = Array.from(
                  optionSearchParams.entries(),
                ).filter(
                  ([key, val]) =>
                    options.find((opt) => opt.name.toLowerCase() === key)
                      ?.values.includes(val),
                );

                const isAvailableForSale = combinations.find((combination) =>
                  filtered.every(
                    ([key, val]) =>
                      combination[key] === val &&
                      combination.availableForSale,
                  ),
                );

                const isActive =
                  searchParams.get(optionNameLowerCase) === value ||
                  (!searchParams.get(optionNameLowerCase) &&
                    option.values.length === 1);

                return (
                  <button
                    key={value}
                    type="button"
                    aria-label={`${option.name}: ${value}`}
                    aria-disabled={!isAvailableForSale}
                    disabled={!isAvailableForSale}
                    onClick={() => {
                      router.replace(optionUrl, { scroll: false });
                    }}
                    className={clsx(
                      "px-4 py-2 text-xs font-sans tracking-wider border rounded-xs transition-colors cursor-pointer",
                      isActive
                        ? "border-[var(--charcoal)] bg-[var(--charcoal)] text-[var(--warm-ivory)] font-medium"
                        : "border-neutral-300 text-neutral-700 hover:border-[var(--charcoal)]",
                      !isAvailableForSale &&
                        "cursor-not-allowed border-dashed opacity-40 hover:border-neutral-300",
                    )}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
