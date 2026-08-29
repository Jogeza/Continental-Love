import type { Product } from "@/lib/commerce/types";
import type { SortFilterItem } from "@/lib/constants";

export function sortLocalProducts(
  products: Product[],
  sort: SortFilterItem,
): Product[] {
  if (!sort.slug) return products;

  return [...products].sort((left, right) => {
    let comparison = 0;

    if (sort.sortKey === "PRICE") {
      comparison =
        Number(left.priceRange.minVariantPrice.amount) -
        Number(right.priceRange.minVariantPrice.amount);
    } else if (sort.sortKey === "CREATED_AT") {
      comparison =
        new Date(left.updatedAt).getTime() - new Date(right.updatedAt).getTime();
    }

    return sort.reverse ? -comparison : comparison;
  });
}
