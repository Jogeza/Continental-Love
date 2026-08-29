"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();
    setOpen(false);
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : "/search");
  };

  return (
    <>
      <button
        type="button"
        aria-label="Search Continental Love"
        onClick={() => setOpen(true)}
        className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#1C1C1C]/15 text-[#1C1C1C] transition-colors hover:border-[#0F4C3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A] md:flex"
      >
        <MagnifyingGlassIcon className="h-4 w-4" />
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-[60]">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-start justify-center px-4 pt-24 sm:pt-32">
          <DialogPanel className="w-full max-w-2xl border border-black/10 bg-[#F8F5EF] p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <DialogTitle className="font-serif text-xl text-[#1C1C1C]">
                Search the atelier
              </DialogTitle>
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1C1C]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A]"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submitSearch} className="mt-6 flex border-b border-[#1C1C1C]">
              <label htmlFor="site-search" className="sr-only">
                Search products
              </label>
              <input
                id="site-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Coffee, apparel, jewelry…"
                autoFocus
                className="min-w-0 flex-1 bg-transparent px-1 py-3 text-base outline-none placeholder:text-[#1C1C1C]/40"
              />
              <button
                type="submit"
                className="px-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#0F4C3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A]"
              >
                Search
              </button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
