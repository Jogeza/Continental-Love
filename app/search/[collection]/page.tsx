import {
  CollectionPageStream,
  getCollectionPageMetadata,
  type CollectionSearchParams,
} from "@/components/commerce/CollectionPage";

interface LegacyCollectionPageProps {
  params: Promise<{ collection: string }>;
  searchParams: CollectionSearchParams;
}

export async function generateMetadata({ params }: LegacyCollectionPageProps) {
  const { collection } = await params;
  return getCollectionPageMetadata(collection);
}

export default async function LegacyCollectionPage({
  params,
  searchParams,
}: LegacyCollectionPageProps) {
  const { collection } = await params;
  return <CollectionPageStream handle={collection} searchParams={searchParams} />;
}
