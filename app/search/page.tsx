import type { Metadata } from "next";
import { getProducts } from "@/lib/commerce";
import { getMockProducts } from "@/lib/mock-data";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { EditorialGrid } from "@/components/primitives/EditorialGrid";
import { ProductCard } from "@/components/primitives/ProductCard";
import { isShopifyConfigured } from "@/lib/commerce/config";
import { getSortOption } from "@/lib/constants";
import { sortLocalProducts } from "@/lib/sort-products";
import SortSelect from "@/components/commerce/SortSelect";

export const metadata: Metadata = {
  title: "All Collections & Creations | Continental Love Atelier",
  description: "Explore the complete Continental Love luxury collection bridging Ugandan origin and Italian luxury.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sParams = await searchParams;
  const q = typeof sParams.q === "string" ? sParams.q : undefined;
  const sortSlug = typeof sParams.sort === "string" ? sParams.sort : undefined;
  const sort = getSortOption(sortSlug);

  const shopifyConfigured = isShopifyConfigured();

  // When Shopify is not configured, use local mock data so the page is
  // fully browsable for design review rather than an empty state. See
  // lib/mock-data.ts — swap this for the real call once credentials exist.
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  if (shopifyConfigured) {
    try {
      products = await getProducts({
        query: q,
        ...(sort.slug && { sortKey: sort.sortKey, reverse: sort.reverse }),
      });
    } catch {
      // Shopify not reachable — render empty state
    }
  } else {
    products = sortLocalProducts(getMockProducts({ query: q }), sort);
  }

  return (
    <div>
      <SectionHeading
        kicker="UGANDA → ITALY ATELIER"
        title={q ? `Search Results for "${q}"` : "All Atelier Creations"}
        subtitle="Crafted from Ugandan origin and European luxury standards. Discover handcrafted coffee, fine leather, silk apparel, and artisanal jewelry."
      />

      <div className="mb-8 flex items-center justify-end border-y border-black/10 py-3">
        <SortSelect />
      </div>

      {products.length === 0 ? (
        <div className="py-20 text-center font-sans text-sm text-neutral-600">
          {q
            ? `No creations found for “${q}”. Try another search or explore the collections.`
            : "No creations are currently available. Please return soon."}
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
