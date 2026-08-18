import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollection, getCollectionProducts } from "@/lib/commerce";
import { getMockCollection, getMockCollectionProducts } from "@/lib/mock-data";
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
    const mock = getMockCollection(handle);
    return mock
      ? { title: `${mock.seo.title}`, description: mock.seo.description }
      : { title: `${handle} | Continental Love` };
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

  // When Shopify is not configured, use local mock data (lib/mock-data.ts)
  // so the collection is fully browsable for design review. Swap this
  // branch out once real credentials exist — the render below is identical
  // either way, since both paths produce the same Collection/Product types.
  if (!process.env.SHOPIFY_STORE_DOMAIN) {
    const mockCollection = getMockCollection(handle);
    if (!mockCollection) {
      notFound();
    }
    const mockProducts = getMockCollectionProducts(handle);

    return (
      <div>
        <SectionHeading
          kicker="UGANDA → ITALY ATELIER COLLECTION"
          title={mockCollection.title}
          subtitle={mockCollection.description}
        />

        {mockProducts.length === 0 ? (
          <div className="py-20 text-center text-neutral-600 font-sans text-sm">
            No creations currently available in this collection.
          </div>
        ) : (
          <EditorialGrid columns={3}>
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </EditorialGrid>
        )}
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
