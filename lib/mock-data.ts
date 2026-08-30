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
import { getCollectionPath } from "@/lib/navigation";

const image = (url: string, altText: string, width = 1200, height = 1500) => ({
  url,
  altText,
  width,
  height,
});

// TODO(BUSINESS): These design-review prices are UI fixtures, not offers for sale.
// Live prices and currency must come from a configured Shopify Market.
const money = (amount: string, currencyCode = "EUR") => ({ amount, currencyCode });

export const mockCollections: Collection[] = [
  {
    handle: "charcoal",
    title: "Charcoal",
    description: "Packaged Ugandan charcoal shown in consumer bags, boxes, sacks, and pallet-ready formats.",
    seo: {
      title: "Ugandan Charcoal | Continental Love",
      description: "Explore packaged Ugandan charcoal in Continental Love retail and bulk-handling formats.",
    },
    updatedAt: new Date().toISOString(),
    path: getCollectionPath("charcoal"),
  },
  {
    handle: "coffee",
    title: "Coffee",
    description:
      "Coffee shown in 250 g, 500 g, 1 kg, and gift-box packaging. Origin region, species, process, roast location, and tasting notes await verification.",
    seo: {
      title: "Coffee | Continental Love",
      description: "Preview the current Continental Love coffee packaging and formats.",
    },
    updatedAt: new Date().toISOString(),
    path: getCollectionPath("coffee"),
  },
  {
    handle: "jewelry",
    title: "Jewelry",
    description:
      "Sculptural cuffs and drop earrings shown in the Continental Love jewelry catalog preview; material specifications await verification.",
    seo: {
      title: "Jewelry | Continental Love",
      description: "Explore Continental Love cuff and drop-earring design previews.",
    },
    updatedAt: new Date().toISOString(),
    path: getCollectionPath("jewelry"),
  },
  {
    handle: "apparel",
    title: "Apparel",
    description: "Continental Love graphic T-shirts and an olive hoodie in the current apparel catalog.",
    seo: {
      title: "Apparel | Continental Love",
      description: "Shop Continental Love graphic T-shirts and an olive layering hoodie.",
    },
    updatedAt: new Date().toISOString(),
    path: getCollectionPath("apparel"),
  },
];

export const mockProducts: Product[] = [
  {
    id: "mock-coffee-01",
    handle: "highland-reserve-coffee",
    availableForSale: false,
    title: "Continental Love Coffee — 250 g",
    description:
      "Design preview of the Continental Love 250 g coffee package. Coffee name, origin region, species, process, roast profile, and tasting notes await verification.",
    descriptionHtml:
      "<p>Design preview of the Continental Love 250 g coffee package.</p><p>Coffee name, origin region, species, process, roast profile, and tasting notes await verification.</p>",
    options: [
      { id: "opt-roast", name: "Roast", values: ["Light", "Medium", "Dark"] },
      { id: "opt-size", name: "Size", values: ["250g", "500g"] },
    ],
    priceRange: {
      minVariantPrice: money("18.00"),
      maxVariantPrice: money("32.00"),
    },
    variants: [
      { id: "var-1", title: "Light / 250g", availableForSale: false, selectedOptions: [{ name: "Roast", value: "Light" }, { name: "Size", value: "250g" }], price: money("18.00") },
      { id: "var-2", title: "Medium / 250g", availableForSale: false, selectedOptions: [{ name: "Roast", value: "Medium" }, { name: "Size", value: "250g" }], price: money("18.00") },
      { id: "var-3", title: "Dark / 250g", availableForSale: false, selectedOptions: [{ name: "Roast", value: "Dark" }, { name: "Size", value: "250g" }], price: money("18.00") },
      { id: "var-4", title: "Light / 500g", availableForSale: false, selectedOptions: [{ name: "Roast", value: "Light" }, { name: "Size", value: "500g" }], price: money("32.00") },
      { id: "var-5", title: "Medium / 500g", availableForSale: false, selectedOptions: [{ name: "Roast", value: "Medium" }, { name: "Size", value: "500g" }], price: money("32.00") },
      { id: "var-6", title: "Dark / 500g", availableForSale: false, selectedOptions: [{ name: "Roast", value: "Dark" }, { name: "Size", value: "500g" }], price: money("32.00") },
    ],
    featuredImage: image("/images/coffee/coffee-packshot-250g.png", "Highland Reserve coffee package with a cup"),
    images: [
      image("/images/coffee/coffee-packshot-250g.png", "Highland Reserve coffee package with a cup"),
      image("/images/coffee/coffee-hero-origin.png", "Coffee grower tending cherries in the highlands"),
    ],
    seo: { title: "Continental Love Coffee — 250 g", description: "Design preview of the Continental Love 250 g coffee package." },
    tags: ["coffee", "origin"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-coffee-02",
    handle: "rwenzori-morning-blend",
    availableForSale: false,
    title: "Continental Love Coffee — 500 g",
    description: "Design preview of the Continental Love 500 g coffee package. Coffee name and product specifications await verification.",
    descriptionHtml: "<p>Design preview of the Continental Love 500 g coffee package.</p><p>Coffee name and product specifications await verification.</p>",
    options: [{ id: "opt-size", name: "Size", values: ["250g", "500g"] }],
    priceRange: { minVariantPrice: money("14.00"), maxVariantPrice: money("24.00") },
    variants: [
      { id: "var-7", title: "250g", availableForSale: false, selectedOptions: [{ name: "Size", value: "250g" }], price: money("14.00") },
      { id: "var-8", title: "500g", availableForSale: false, selectedOptions: [{ name: "Size", value: "500g" }], price: money("24.00") },
    ],
    featuredImage: image("/images/coffee/coffee-packshot-500g.png", "Rwenzori Morning Blend coffee package"),
    images: [image("/images/coffee/coffee-packshot-500g.png", "Rwenzori Morning Blend coffee package")],
    seo: { title: "Continental Love Coffee — 500 g", description: "Design preview of the Continental Love 500 g coffee package." },
    tags: ["coffee"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-jewelry-01",
    handle: "kampala-brass-cuff",
    availableForSale: false,
    title: "Kampala Brass Cuff",
    description: "A sculptural cuff design preview. Material composition and dimensions await verification.",
    descriptionHtml: "<p>A sculptural cuff design preview. Material composition and dimensions await verification.</p>",
    options: [{ id: "opt-size", name: "Size", values: ["S", "M", "L"] }],
    priceRange: { minVariantPrice: money("86.00"), maxVariantPrice: money("86.00") },
    variants: [
      { id: "var-9", title: "S", availableForSale: false, selectedOptions: [{ name: "Size", value: "S" }], price: money("86.00") },
      { id: "var-10", title: "M", availableForSale: false, selectedOptions: [{ name: "Size", value: "M" }], price: money("86.00") },
      { id: "var-11", title: "L", availableForSale: false, selectedOptions: [{ name: "Size", value: "L" }], price: money("86.00") },
    ],
    featuredImage: image("/images/jewelry/jewelry-bracelet-product.png", "Kampala Brass Cuff"),
    images: [image("/images/jewelry/jewelry-bracelet-product.png", "Kampala Brass Cuff")],
    seo: { title: "Kampala Brass Cuff | Continental Love", description: "A sculptural brass cuff with a restrained profile." },
    tags: ["jewelry"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-jewelry-02",
    handle: "origin-drop-earrings",
    availableForSale: false,
    title: "Origin Drop Earrings",
    description: "Drop-earring design preview. Material composition, dimensions, and weight await verification.",
    descriptionHtml: "<p>Drop-earring design preview. Material composition, dimensions, and weight await verification.</p>",
    options: [{ id: "opt-none", name: "Title", values: ["Default"] }],
    priceRange: { minVariantPrice: money("54.00"), maxVariantPrice: money("54.00") },
    variants: [
      { id: "var-12", title: "Default", availableForSale: false, selectedOptions: [{ name: "Title", value: "Default" }], price: money("54.00") },
    ],
    featuredImage: image("/images/jewelry/jewelry-earrings-product.jpg", "Origin Drop Earrings"),
    images: [image("/images/jewelry/jewelry-earrings-product.jpg", "Origin Drop Earrings")],
    seo: { title: "Origin Drop Earrings | Continental Love", description: "Fine brass drop earrings, minimal form." },
    tags: ["jewelry"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-apparel-01",
    handle: "highland-linen-shirt",
    availableForSale: false,
    title: "Continental Love Signature Tee",
    description: "A black everyday T-shirt with a clean Continental Love graphic and an easy, modern fit.",
    descriptionHtml: "<p>A black everyday T-shirt with a clean Continental Love graphic and an easy, modern fit.</p>",
    options: [{ id: "opt-size", name: "Size", values: ["S", "M", "L", "XL"] }],
    priceRange: { minVariantPrice: money("120.00"), maxVariantPrice: money("120.00") },
    variants: [
      { id: "var-13", title: "S", availableForSale: false, selectedOptions: [{ name: "Size", value: "S" }], price: money("120.00") },
      { id: "var-14", title: "M", availableForSale: false, selectedOptions: [{ name: "Size", value: "M" }], price: money("120.00") },
      { id: "var-15", title: "L", availableForSale: false, selectedOptions: [{ name: "Size", value: "L" }], price: money("120.00") },
      { id: "var-16", title: "XL", availableForSale: false, selectedOptions: [{ name: "Size", value: "XL" }], price: money("120.00") },
    ],
    featuredImage: image("/images/apparel/apparel-model-tshirt-black.jpg", "Continental Love black shirt"),
    images: [image("/images/apparel/apparel-model-tshirt-black.jpg", "Continental Love black shirt")],
    seo: { title: "Continental Love Signature Tee", description: "A black everyday T-shirt with Continental Love identity." },
    tags: ["apparel"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-apparel-02",
    handle: "coastal-wrap-dress",
    availableForSale: false,
    title: "Continental Love Olive Hoodie",
    description: "A relaxed olive hoodie designed for comfortable layering and everyday wear.",
    descriptionHtml: "<p>A relaxed olive hoodie designed for comfortable layering and everyday wear.</p>",
    options: [{ id: "opt-none", name: "Title", values: ["Default"] }],
    priceRange: { minVariantPrice: money("140.00"), maxVariantPrice: money("140.00") },
    variants: [
      { id: "var-17", title: "Default", availableForSale: false, selectedOptions: [{ name: "Title", value: "Default" }], price: money("140.00") },
    ],
    featuredImage: image("/images/apparel/apparel-model-hoodie-olive.jpg", "Continental Love olive hoodie"),
    images: [image("/images/apparel/apparel-model-hoodie-olive.jpg", "Continental Love olive hoodie")],
    seo: { title: "Continental Love Olive Hoodie", description: "A relaxed olive hoodie for everyday layering." },
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
