import React from "react";
import Link from "next/link";
import { getCollections } from "@/lib/commerce";

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // When Shopify is not configured, getCollections() throws. Return an empty
  // list so the search UI renders gracefully without credentials.
  let collections: Awaited<ReturnType<typeof getCollections>> = [];
  if (process.env.SHOPIFY_STORE_DOMAIN) {
    try {
      collections = await getCollections();
    } catch {
      // Shopify not reachable — degrade silently in local dev
    }
  }

  return (
    <div className="min-h-screen bg-[var(--warm-ivory)] py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Category Navigation Bar — only shown when collections exist */}
      {collections.length > 0 && (
        <div className="mb-10 pb-6 border-b border-neutral-200/80 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 text-xs font-sans tracking-widest uppercase font-medium">
            {collections.map((item) => (
              <Link
                key={item.handle || "all"}
                href={item.path}
                className="text-neutral-700 hover:text-[var(--forest-green)] transition-colors whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
