import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollection, getCollectionProducts } from "@/lib/commerce";
import type { Collection, Product } from "@/lib/commerce/types";
import { isShopifyConfigured } from "@/lib/commerce/config";
import { getMockCollection, getMockCollectionProducts } from "@/lib/mock-data";
import { getSortOption } from "@/lib/constants";
import { sortLocalProducts } from "@/lib/sort-products";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { EditorialGrid } from "@/components/primitives/EditorialGrid";
import { ProductCard } from "@/components/primitives/ProductCard";
import SortSelect from "@/components/commerce/SortSelect";
import { Suspense } from "react";

export type CollectionSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export function CollectionPageFallback() {
  return (
    <div className="py-24 text-center text-sm text-[#1C1C1C]/50">
      Loading collection…
    </div>
  );
}

export function CollectionPageStream({
  handle,
  searchParams,
  showHeading = true,
}: {
  handle: string;
  searchParams: CollectionSearchParams;
  showHeading?: boolean;
}) {
  return (
    <Suspense fallback={<CollectionPageFallback />}>
      <CollectionPage handle={handle} searchParams={searchParams} showHeading={showHeading} />
    </Suspense>
  );
}

export async function getCollectionPageMetadata(handle: string): Promise<Metadata> {
  if (!isShopifyConfigured()) {
    const collection = getMockCollection(handle);
    return collection
      ? { title: collection.seo.title, description: collection.seo.description }
      : { title: `${handle} | Continental Love` };
  }

  try {
    const collection = await getCollection(handle);
    if (!collection) return { title: "Collection Not Found | Continental Love" };

    return {
      title: `${collection.seo?.title || collection.title} | Continental Love Atelier`,
      description: collection.seo?.description || collection.description,
    };
  } catch {
    return { title: `${handle} | Continental Love` };
  }
}

export default async function CollectionPage({
  handle,
  searchParams,
  showHeading = true,
}: {
  handle: string;
  searchParams: CollectionSearchParams;
  showHeading?: boolean;
}) {
  const params = await searchParams;
  const sortSlug = typeof params.sort === "string" ? params.sort : undefined;
  const sort = getSortOption(sortSlug);
  const shopifyConfigured = isShopifyConfigured();

  let collection: Collection | undefined;
  let products: Product[] = [];

  if (shopifyConfigured) {
    try {
      collection = await getCollection(handle);
      products = await getCollectionProducts({
        collection: handle,
        ...(sort.slug && { sortKey: sort.sortKey, reverse: sort.reverse }),
      });
    } catch {
      collection = undefined;
      products = [];
    }
  } else {
    collection = getMockCollection(handle);
    products = sortLocalProducts(getMockCollectionProducts(handle), sort);
  }

  if (!collection) notFound();

  return (
    <div>
      {showHeading && (
        <SectionHeading
          kicker="UGANDA → ITALY ATELIER COLLECTION"
          title={collection.title}
          subtitle={collection.description || "Curated luxury creations celebrating Ugandan origin and artisanal distinction."}
        />
      )}

      <div className="mb-8 flex items-center justify-end border-y border-black/10 py-3">
        <SortSelect />
      </div>

      {products.length === 0 ? (
        <div className="py-20 text-center font-sans text-sm text-neutral-600">
          No creations are currently available in this collection.
        </div>
      ) : (
        <EditorialGrid columns={3}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </EditorialGrid>
      )}
    </div>
  );
}
