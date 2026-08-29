"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { discoverySorting } from "@/lib/constants";

export default function SortSelect() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSort = searchParams.get("sort") ?? "";

  const updateSort = (slug: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());
    if (slug) nextParams.set("sort", slug);
    else nextParams.delete("sort");

    const query = nextParams.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="product-sort" className="text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/60">
        Sort
      </label>
      <select
        id="product-sort"
        value={selectedSort}
        onChange={(event) => updateSort(event.target.value)}
        className="border-b border-[#1C1C1C]/30 bg-transparent py-2 pr-7 text-sm text-[#1C1C1C] outline-none focus:border-[#0F4C3A]"
      >
        {discoverySorting.map((item) => (
          <option key={item.title} value={item.slug ?? ""}>
            {item.title === "Relevance" ? "Featured" : item.title}
          </option>
        ))}
      </select>
    </div>
  );
}
