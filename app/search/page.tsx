import type { Metadata } from "next";
import { getProducts } from "@/lib/commerce";
import { getMockProducts } from "@/lib/mock-data";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { EditorialGrid } from "@/components/primitives/EditorialGrid";
import { ProductCard } from "@/components/primitives/ProductCard";
import { isShopifyConfigured } from "@/lib/commerce/config";

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

  const shopifyConfigured = isShopifyConfigured();

  // When Shopify is not configured, use local mock data so the page is
  // fully browsable for design review rather than an empty state. See
  // lib/mock-data.ts — swap this for the real call once credentials exist.
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  if (shopifyConfigured) {
    try {
      products = await getProducts({ query: q });
    } catch {
      // Shopify not reachable — render empty state
    }
  } else {
    products = getMockProducts({ query: q });
  }

  return (
    <div>
      <SectionHeading
        kicker="UGANDA → ITALY ATELIER"
        title={q ? `Search Results for "${q}"` : "All Atelier Creations"}
        subtitle="Crafted from Ugandan origin and European luxury standards. Discover handcrafted coffee, fine leather, silk apparel, and artisanal jewelry."
      />

      {products.length === 0 ? (
        <div className="py-20 text-center text-neutral-600 font-sans text-sm">
          No creations found matching your query. Please explore our featured collections.
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
