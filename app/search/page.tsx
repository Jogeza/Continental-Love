import type { Metadata } from "next";
import { getProducts } from "@/lib/commerce";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { EditorialGrid } from "@/components/primitives/EditorialGrid";
import { ProductCard } from "@/components/primitives/ProductCard";

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

  // When Shopify is not configured, degrade gracefully instead of throwing.
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  if (process.env.SHOPIFY_STORE_DOMAIN) {
    try {
      products = await getProducts({ query: q });
    } catch {
      // Shopify not reachable — render empty state
    }
  }

  const shopifyConfigured = !!process.env.SHOPIFY_STORE_DOMAIN;

  return (
    <div>
      <SectionHeading
        kicker="UGANDA → ITALY ATELIER"
        title={q ? `Search Results for "${q}"` : "All Atelier Creations"}
        subtitle="Crafted from Ugandan origin and European luxury standards. Discover handcrafted coffee, fine leather, silk apparel, and artisanal jewelry."
      />

      {!shopifyConfigured ? (
        <div className="py-20 text-center text-neutral-500 font-sans text-sm">
          <p className="text-base font-medium text-[var(--charcoal)] mb-2">Shop coming soon.</p>
          <p>Collections and products will appear here once the store is connected.</p>
        </div>
      ) : products.length === 0 ? (
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
