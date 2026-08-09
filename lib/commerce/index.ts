/**
 * Provider-Agnostic Commerce Abstraction Layer
 * Continental Love Luxury Editorial Commerce System
 * 
 * Delegates calls to active underlying commerce provider (Shopify)
 */

import * as shopifyProvider from "@/lib/shopify";
import type { Cart, Collection, Menu, Page, Product } from "./types";

export * from "./types";

/**
 * Cart Operations
 */
export async function getCart(): Promise<Cart | undefined> {
  return shopifyProvider.getCart() as Promise<Cart | undefined>;
}

export async function createCart(): Promise<Cart> {
  return shopifyProvider.createCart() as Promise<Cart>;
}

export async function addToCart(
  lines: Array<{ merchandiseId: string; quantity: number }>
): Promise<Cart> {
  return shopifyProvider.addToCart(lines) as Promise<Cart>;
}

export async function removeFromCart(
  lineIds: string[]
): Promise<Cart> {
  return shopifyProvider.removeFromCart(lineIds) as Promise<Cart>;
}

export async function updateCart(
  lines: Array<{ id: string; merchandiseId: string; quantity: number }>
): Promise<Cart> {
  return shopifyProvider.updateCart(lines) as Promise<Cart>;
}

/**
 * Product Operations
 */
export async function getProduct(handle: string): Promise<Product | undefined> {
  return shopifyProvider.getProduct(handle) as Promise<Product | undefined>;
}

export async function getProducts(query?: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  return shopifyProvider.getProducts(query || {}) as Promise<Product[]>;
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  return shopifyProvider.getProductRecommendations(productId) as Promise<Product[]>;
}

/**
 * Collection Operations
 */
export async function getCollection(handle: string): Promise<Collection | undefined> {
  return shopifyProvider.getCollection(handle) as Promise<Collection | undefined>;
}

export async function getCollections(): Promise<Collection[]> {
  return shopifyProvider.getCollections() as Promise<Collection[]>;
}

export async function getCollectionProducts(query: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  return shopifyProvider.getCollectionProducts(query) as Promise<Product[]>;
}

/**
 * Content Operations
 */
export async function getMenu(handle: string): Promise<Menu[]> {
  return shopifyProvider.getMenu(handle);
}

export async function getPage(handle: string): Promise<Page | undefined> {
  return shopifyProvider.getPage(handle) as Promise<Page | undefined>;
}

export async function getPages(): Promise<Page[]> {
  return shopifyProvider.getPages() as Promise<Page[]>;
}
