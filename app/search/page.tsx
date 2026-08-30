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
import {createPageMetadata} from "@/lib/seo";
import {getLocale, getTranslations} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({title: "All Collections & Creations | Continental Love Atelier", description: "Explore the Continental Love catalog preview.", path: "/search", image: "/images/apparel/apparel-flatlay-outfit.jpg", locale});
}

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
  const t = await getTranslations("Search");

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
        kicker={t("kicker")}
        title={q ? t("results", {query: q}) : t("all")}
        subtitle={t("subtitle")}
      />

      <div className="mb-8 flex items-center justify-between border-y border-black/10 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/48">{products.length} {products.length === 1 ? t("piece") : t("pieces")}</p>
        <SortSelect />
      </div>

      {products.length === 0 ? (
        <div className="py-20 text-center font-sans text-sm text-neutral-600">
          {q
            ? t("noResults", {query: q})
            : shopifyConfigured ? t("emptyLive") : t("emptyPreview")}
        </div>
      ) : (
        <EditorialGrid columns={3}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} commerceEnabled={shopifyConfigured} />
          ))}
        </EditorialGrid>
      )}
    </div>
  );
}
