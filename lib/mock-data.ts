/**
 * Mock Commerce Data — Design Verification Only
 *
 * Continental Love isn't connected to a live Shopify store yet. This module
 * provides realistic, correctly-typed Product/Collection data so the
 * frontend can be reviewed and polished as a complete experience in the
 * meantime, rather than "Shop coming soon" empty states everywhere.
 *
 * Every shape here matches lib/commerce/types.ts exactly. When real Shopify
 * credentials exist, pages should switch back to lib/commerce's functions —
 * this file is not, and must never become, a second commerce backend.
 */
import type { Collection, Product } from "@/lib/commerce/types";

const image = (url: string, altText: string, width = 1200, height = 1500) => ({
  url,
  altText,
  width,
  height,
});

const money = (amount: string, currencyCode = "USD") => ({ amount, currencyCode });

export const mockCollections: Collection[] = [
  {
    handle: "coffee",
    title: "Coffee",
    description:
      "Highland Arabica, hand-harvested in Uganda and roasted for the way Italy takes its coffee.",
    seo: {
      title: "Coffee | Continental Love",
      description: "Ugandan highland coffee, roasted and presented for a European table.",
    },
    updatedAt: new Date().toISOString(),
    path: "/search/coffee",
  },
  {
    handle: "jewelry",
    title: "Jewelry",
    description:
      "Crafted stories in every piece — jewelry that carries Ugandan material and technique into everyday wear.",
    seo: {
      title: "Jewelry | Continental Love",
      description: "Handcrafted jewelry rooted in Ugandan material and craftsmanship.",
    },
    updatedAt: new Date().toISOString(),
    path: "/search/jewelry",
  },
  {
    handle: "apparel",
    title: "Apparel",
    description: "Modern Ugandan fashion, quietly worn — natural fiber, restrained silhouette.",
    seo: {
      title: "Apparel | Continental Love",
      description: "Ugandan-made apparel in natural fiber and restrained silhouette.",
    },
    updatedAt: new Date().toISOString(),
    path: "/search/apparel",
  },
];

export const mockProducts: Product[] = [
  {
    id: "mock-coffee-01",
    handle: "highland-reserve-coffee",
    availableForSale: true,
    title: "Highland Reserve",
    description:
      "Single-origin Arabica from Uganda's Rwenzori highlands, hand-sorted and roasted in small batches.",
    descriptionHtml:
      "<p>Single-origin Arabica from Uganda's Rwenzori highlands, hand-sorted and roasted in small batches.</p>",
    options: [
      { id: "opt-roast", name: "Roast", values: ["Light", "Medium", "Dark"] },
      { id: "opt-size", name: "Size", values: ["250g", "500g"] },
    ],
    priceRange: {
      minVariantPrice: money("18.00"),
      maxVariantPrice: money("32.00"),
    },
    variants: [
      { id: "var-1", title: "Light / 250g", availableForSale: true, selectedOptions: [{ name: "Roast", value: "Light" }, { name: "Size", value: "250g" }], price: money("18.00") },
      { id: "var-2", title: "Medium / 250g", availableForSale: true, selectedOptions: [{ name: "Roast", value: "Medium" }, { name: "Size", value: "250g" }], price: money("18.00") },
      { id: "var-3", title: "Dark / 250g", availableForSale: true, selectedOptions: [{ name: "Roast", value: "Dark" }, { name: "Size", value: "250g" }], price: money("18.00") },
      { id: "var-4", title: "Light / 500g", availableForSale: true, selectedOptions: [{ name: "Roast", value: "Light" }, { name: "Size", value: "500g" }], price: money("32.00") },
      { id: "var-5", title: "Medium / 500g", availableForSale: false, selectedOptions: [{ name: "Roast", value: "Medium" }, { name: "Size", value: "500g" }], price: money("32.00") },
      { id: "var-6", title: "Dark / 500g", availableForSale: true, selectedOptions: [{ name: "Roast", value: "Dark" }, { name: "Size", value: "500g" }], price: money("32.00") },
    ],
    featuredImage: image("/images/collections/coffee.jpg", "Highland Reserve coffee, whole beans in a woven basket"),
    images: [
      image("/images/collections/coffee.jpg", "Highland Reserve coffee, whole beans"),
      image("/images/hero/continental-love-hero.jpg", "Coffee cherries being sorted by hand"),
    ],
    seo: { title: "Highland Reserve Coffee | Continental Love", description: "Single-origin Ugandan Arabica, small-batch roasted." },
    tags: ["coffee", "origin"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-coffee-02",
    handle: "rwenzori-morning-blend",
    availableForSale: true,
    title: "Rwenzori Morning Blend",
    description: "A brighter, everyday blend from the same highland farms — built for a daily table.",
    descriptionHtml: "<p>A brighter, everyday blend from the same highland farms — built for a daily table.</p>",
    options: [{ id: "opt-size", name: "Size", values: ["250g", "500g"] }],
    priceRange: { minVariantPrice: money("14.00"), maxVariantPrice: money("24.00") },
    variants: [
      { id: "var-7", title: "250g", availableForSale: true, selectedOptions: [{ name: "Size", value: "250g" }], price: money("14.00") },
      { id: "var-8", title: "500g", availableForSale: true, selectedOptions: [{ name: "Size", value: "500g" }], price: money("24.00") },
    ],
    featuredImage: image("/images/collections/coffee.jpg", "Rwenzori Morning Blend coffee beans"),
    images: [image("/images/collections/coffee.jpg", "Rwenzori Morning Blend coffee beans")],
    seo: { title: "Rwenzori Morning Blend | Continental Love", description: "An everyday highland blend from Uganda." },
    tags: ["coffee"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-jewelry-01",
    handle: "kampala-brass-cuff",
    availableForSale: true,
    title: "Kampala Brass Cuff",
    description: "Hand-forged brass cuff, finished by artisans working in Kampala's metalwork district.",
    descriptionHtml: "<p>Hand-forged brass cuff, finished by artisans working in Kampala's metalwork district.</p>",
    options: [{ id: "opt-size", name: "Size", values: ["S", "M", "L"] }],
    priceRange: { minVariantPrice: money("86.00"), maxVariantPrice: money("86.00") },
    variants: [
      { id: "var-9", title: "S", availableForSale: true, selectedOptions: [{ name: "Size", value: "S" }], price: money("86.00") },
      { id: "var-10", title: "M", availableForSale: true, selectedOptions: [{ name: "Size", value: "M" }], price: money("86.00") },
      { id: "var-11", title: "L", availableForSale: false, selectedOptions: [{ name: "Size", value: "L" }], price: money("86.00") },
    ],
    featuredImage: image("/images/collections/jewelry.jpg", "Kampala Brass Cuff"),
    images: [image("/images/collections/jewelry.jpg", "Kampala Brass Cuff")],
    seo: { title: "Kampala Brass Cuff | Continental Love", description: "Hand-forged brass cuff from Kampala artisans." },
    tags: ["jewelry"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-jewelry-02",
    handle: "origin-drop-earrings",
    availableForSale: true,
    title: "Origin Drop Earrings",
    description: "Fine brass drop earrings, minimal form, weighted for everyday wear.",
    descriptionHtml: "<p>Fine brass drop earrings, minimal form, weighted for everyday wear.</p>",
    options: [{ id: "opt-none", name: "Title", values: ["Default"] }],
    priceRange: { minVariantPrice: money("54.00"), maxVariantPrice: money("54.00") },
    variants: [
      { id: "var-12", title: "Default", availableForSale: true, selectedOptions: [{ name: "Title", value: "Default" }], price: money("54.00") },
    ],
    featuredImage: image("/images/collections/jewelry.jpg", "Origin Drop Earrings"),
    images: [image("/images/collections/jewelry.jpg", "Origin Drop Earrings")],
    seo: { title: "Origin Drop Earrings | Continental Love", description: "Fine brass drop earrings, minimal form." },
    tags: ["jewelry"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-apparel-01",
    handle: "highland-linen-shirt",
    availableForSale: true,
    title: "Highland Linen Shirt",
    description: "Natural linen shirt, cut for warm-weather wear on either side of the Mediterranean.",
    descriptionHtml: "<p>Natural linen shirt, cut for warm-weather wear on either side of the Mediterranean.</p>",
    options: [{ id: "opt-size", name: "Size", values: ["S", "M", "L", "XL"] }],
    priceRange: { minVariantPrice: money("120.00"), maxVariantPrice: money("120.00") },
    variants: [
      { id: "var-13", title: "S", availableForSale: true, selectedOptions: [{ name: "Size", value: "S" }], price: money("120.00") },
      { id: "var-14", title: "M", availableForSale: true, selectedOptions: [{ name: "Size", value: "M" }], price: money("120.00") },
      { id: "var-15", title: "L", availableForSale: true, selectedOptions: [{ name: "Size", value: "L" }], price: money("120.00") },
      { id: "var-16", title: "XL", availableForSale: false, selectedOptions: [{ name: "Size", value: "XL" }], price: money("120.00") },
    ],
    featuredImage: image("/images/collections/apparel.jpg", "Highland Linen Shirt"),
    images: [image("/images/collections/apparel.jpg", "Highland Linen Shirt")],
    seo: { title: "Highland Linen Shirt | Continental Love", description: "Natural linen shirt for warm-weather wear." },
    tags: ["apparel"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-apparel-02",
    handle: "coastal-wrap-dress",
    availableForSale: false,
    title: "Coastal Wrap Dress",
    description: "Lightweight cotton wrap dress, currently between production runs.",
    descriptionHtml: "<p>Lightweight cotton wrap dress, currently between production runs.</p>",
    options: [{ id: "opt-none", name: "Title", values: ["Default"] }],
    priceRange: { minVariantPrice: money("140.00"), maxVariantPrice: money("140.00") },
    variants: [
      { id: "var-17", title: "Default", availableForSale: false, selectedOptions: [{ name: "Title", value: "Default" }], price: money("140.00") },
    ],
    featuredImage: image("/images/collections/apparel.jpg", "Coastal Wrap Dress"),
    images: [image("/images/collections/apparel.jpg", "Coastal Wrap Dress")],
    seo: { title: "Coastal Wrap Dress | Continental Love", description: "Lightweight cotton wrap dress." },
    tags: ["apparel"],
    updatedAt: new Date().toISOString(),
  },
];

export function getMockProducts(query?: { query?: string }): Product[] {
  if (!query?.query) return mockProducts;
  const q = query.query.toLowerCase();
  return mockProducts.filter(
    (p) => p.title.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q)),
  );
}

export function getMockProductByHandle(handle: string): Product | undefined {
  return mockProducts.find((p) => p.handle === handle);
}

export function getMockCollection(handle: string): Collection | undefined {
  return mockCollections.find((c) => c.handle === handle);
}

export function getMockCollectionProducts(handle: string): Product[] {
  return mockProducts.filter((p) => p.tags.includes(handle));
}

export function getMockProductRecommendations(productId: string): Product[] {
  return mockProducts.filter((p) => p.id !== productId).slice(0, 3);
}
