import type {MetadataRoute} from "next";
import {getProducts} from "@/lib/commerce";
import {isShopifyConfigured} from "@/lib/commerce/config";
import {baseUrl} from "@/lib/seo";

const pages = ["", "/coffee", "/apparel", "/jewelry", "/charcoal", "/discover-uganda", "/story", "/search"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageEntries = pages.map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/search" ? 0.6 : 0.8,
    alternates: {languages: {en: `${baseUrl}${path || "/"}`, it: `${baseUrl}/it${path}`}},
  }));

  let liveProducts: Awaited<ReturnType<typeof getProducts>> = [];
  if (isShopifyConfigured()) {
    try { liveProducts = await getProducts({}); } catch { liveProducts = []; }
  }
  const productEntries = liveProducts.map((product) => ({
    url: `${baseUrl}/product/${product.handle}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: {languages: {en: `${baseUrl}/product/${product.handle}`, it: `${baseUrl}/it/product/${product.handle}`}},
  }));

  return [...pageEntries, ...productEntries];
}
