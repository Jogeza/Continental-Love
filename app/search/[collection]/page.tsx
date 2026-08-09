import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollection, getCollectionProducts } from "@/lib/commerce";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { EditorialGrid } from "@/components/primitives/EditorialGrid";
import { ProductCard } from "@/components/primitives/ProductCard";

interface CollectionPageProps {
  params: Promise<{ collection: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { collection: handle } = await params;

  if (!process.env.SHOPIFY_STORE_DOMAIN) {
    return { title: `${handle} | Continental Love` };
  }

  try {
    const collection = await getCollection(handle);
    if (!collection) {
      return { title: "Collection Not Found | Continental Love" };
    }
    return {
      title: `${collection.seo?.title || collection.title} | Continental Love Atelier`,
      description: collection.seo?.description || collection.description,
    };
  } catch {
    return { title: `${handle} | Continental Love` };
  }
}

export default async function CollectionPage({ params, searchParams }: CollectionPageProps) {
  const { collection: handle } = await params;
  const sParams = await searchParams;
  const sort = typeof sParams.sort === "string" ? sParams.sort : undefined;

  // When Shopify is not configured, show a graceful placeholder.
  if (!process.env.SHOPIFY_STORE_DOMAIN) {
    return (
      <div>
        <SectionHeading
          kicker="UGANDA → ITALY ATELIER COLLECTION"
          title={handle.charAt(0).toUpperCase() + handle.slice(1)}
          subtitle="This collection will be available once the store is connected."
        />
        <div className="py-20 text-center text-neutral-500 font-sans text-sm">
          <p className="text-base font-medium text-[var(--charcoal)] mb-2">Shop coming soon.</p>
          <p>Products will appear here once the store is connected.</p>
        </div>
      </div>
    );
  }

  let collection: Awaited<ReturnType<typeof getCollection>> = undefined;
  let products: Awaited<ReturnType<typeof getCollectionProducts>> = [];

  try {
    collection = await getCollection(handle);
    products = await getCollectionProducts({ collection: handle, sortKey: sort });
  } catch {
    // Shopify not reachable — fall through to notFound
  }

  if (!collection) {
    notFound();
  }

  return (
    <div>
      <SectionHeading
        kicker="UGANDA → ITALY ATELIER COLLECTION"
        title={collection.title}
        subtitle={collection.description || "Curated luxury creations celebrating Ugandan origin and artisanal distinction."}
      />

      {products.length === 0 ? (
        <div className="py-20 text-center text-neutral-600 font-sans text-sm">
          No creations currently available in this collection.
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
