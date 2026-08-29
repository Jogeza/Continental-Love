import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, getProductRecommendations } from "@/lib/commerce";
import { getMockProductByHandle, getMockProductRecommendations } from "@/lib/mock-data";
import { Price } from "@/components/primitives/Price";
import { ProductCard } from "@/components/primitives/ProductCard";
import { EditorialGrid } from "@/components/primitives/EditorialGrid";
import { VariantSelector } from "@/components/primitives/VariantSelector";
import { AddToCart } from "@/components/cart/add-to-cart";
import type { Product as ShopifyProduct } from "@/lib/shopify/types";
import type { Product } from "@/lib/commerce/types";
import { isShopifyConfigured } from "@/lib/commerce/config";
import ProductGallery from "@/components/product/ProductGallery";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;

  // Mock-data branch never calls into lib/commerce/lib/shopify at all —
  // deliberately isolated from the live Shopify code path.
  if (!isShopifyConfigured()) {
    const product = getMockProductByHandle(handle);
    if (!product) {
      return { title: "Product Not Found | Continental Love" };
    }
    return {
      title: `${product.seo.title} | Continental Love Atelier`,
      description: product.seo.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [{ url: product.featuredImage.url, alt: product.featuredImage.altText }],
      },
    };
  }

  const product = await getProduct(handle);

  if (!product) {
    return {
      title: "Product Not Found | Continental Love",
    };
  }

  const { url, altText } = product.featuredImage || {};

  return {
    title: `${product.seo?.title || product.title} | Continental Love Atelier`,
    description: product.seo?.description || product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: url ? [{ url, alt: altText }] : [],
    },
  };
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { handle } = await params;
  const sParams = await searchParams;

  let product: Product | undefined;
  let relatedProducts: Product[] = [];

  const shopifyConfigured = isShopifyConfigured();

  if (!shopifyConfigured) {
    // Mock-data branch — no call into lib/commerce/lib/shopify at all.
    product = getMockProductByHandle(handle);
    if (!product) {
      notFound();
    }
    relatedProducts = getMockProductRecommendations(product.id);
  } else {
    product = await getProduct(handle);
    if (!product) {
      notFound();
    }
    relatedProducts = await getProductRecommendations(product.id);
  }

  // Find matching variant based on selected search parameters
  const selectedVariant = product.variants.find((variant) =>
    variant.selectedOptions.every(
      (option) => sParams[option.name.toLowerCase()] === option.value
    )
  ) || product.variants[0];

  return (
    <div className="min-h-screen bg-[var(--warm-ivory)] py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Product Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Gallery Section */}
        <div className="lg:col-span-7">
          <ProductGallery
            featuredImage={product.featuredImage}
            images={product.images}
          />
        </div>

        {/* Product Details & Purchase Form */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[var(--heritage-gold)] font-semibold mb-3">
            UGANDA → ITALY ATELIER
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--charcoal)] leading-tight mb-4">
            {product.title}
          </h1>

          <div className="mb-6 pb-6 border-b border-neutral-200">
            <Price
              price={selectedVariant?.price || product.priceRange.minVariantPrice}
              priceClassName="text-xl md:text-2xl font-serif"
            />
          </div>

          {/* Description */}
          {product.descriptionHtml ? (
            <div
              className="prose prose-neutral text-sm text-neutral-700 font-sans leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          ) : (
            <p className="text-sm text-neutral-700 font-sans leading-relaxed mb-8">
              {product.description}
            </p>
          )}

          {/* Options / Variants */}
          <VariantSelector options={product.options} variants={product.variants} />

          {/* Add to Cart Form */}
          <div className="mt-4 pt-6 border-t border-neutral-200">
            <AddToCart
              product={product as unknown as ShopifyProduct}
              commerceEnabled={shopifyConfigured}
            />
          </div>

          {/* Brand Guarantee & Craftsmanship Note */}
          <div className="mt-8 pt-6 border-t border-neutral-200/80 space-y-3 text-xs font-sans text-neutral-600">
            <div className="flex items-center gap-2">
              <span className="text-[var(--heritage-gold)]">✦</span>
              <span>Authentic Pan-African artisanal craftsmanship & Ugandan origin</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--heritage-gold)]">✦</span>
              <span>Complimentary luxury packaging & insured international dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-24 pt-16 border-t border-neutral-200">
          <h2 className="text-2xl md:text-3xl font-serif text-[var(--charcoal)] mb-8">
            Complements & Atelier Curations
          </h2>
          <EditorialGrid columns={3}>
            {relatedProducts.slice(0, 3).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </EditorialGrid>
        </div>
      )}
    </div>
  );
}
