"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {localizeHref} from "@/lib/i18n";

const quickLinks = [
  { label: "Coffee", href: "/coffee" },
  { label: "Apparel", href: "/apparel" },
  { label: "Jewelry", href: "/jewelry" },
  { label: "Discover Uganda", href: "/discover-uganda" },
];

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Search");
  const nav = useTranslations("Nav");

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();
    setOpen(false);
    const target = localizeHref("/search", locale);
    router.push(value ? `${target}?q=${encodeURIComponent(value)}` : target);
  };

  return (
    <>
      <button
        type="button"
        aria-label={t("buttonLabel")}
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
                {t("dialogTitle")}
              </DialogTitle>
              <button
                type="button"
                aria-label={t("close")}
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1C1C]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A]"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submitSearch} className="mt-6 flex border-b border-[#1C1C1C]">
              <label htmlFor="site-search" className="sr-only">
                {t("inputLabel")}
              </label>
              <input
                id="site-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("placeholder")}
                autoFocus
                className="min-w-0 flex-1 bg-transparent px-1 py-3 text-base outline-none placeholder:text-[#1C1C1C]/40"
              />
              <button
                type="submit"
                className="px-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#0F4C3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A]"
              >
                {t("submit")}
              </button>
            </form>
            <div className="mt-7 border-t border-black/10 pt-5"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/45">{t("popular")}</p><div className="mt-3 flex flex-wrap gap-2">{quickLinks.map((item) => <Link key={item.href} href={localizeHref(item.href, locale)} onClick={() => setOpen(false)} className="border border-black/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.12em] transition-colors hover:border-[var(--heritage-gold)] hover:text-[var(--forest-green)]">{nav(item.label === "Discover Uganda" ? "discover" : item.label.toLowerCase())}</Link>)}</div></div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
