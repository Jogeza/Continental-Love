"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { isNavigationItemActive, primaryNavigation } from "@/lib/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.setTimeout(() => menuButtonRef.current?.focus(), 0);
    }
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();
    setIsOpen(false);
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : "/search");
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        window.setTimeout(() => menuButtonRef.current?.focus(), 0);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={menuButtonRef}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1C1C]/15 text-[#1C1C1C] transition-colors hover:border-[#0F4C3A]"
      >
        {isOpen ? (
          <XMarkIcon className="h-5 w-5" />
        ) : (
          <Bars3Icon className="h-5 w-5" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          aria-hidden="true"
          onClick={() => closeMenu()}
        />
      )}

      {/* Slide-in drawer */}
      <nav
        id="mobile-nav-menu"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-[#F8F5EF] px-8 py-10 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          aria-label="Close navigation menu"
          onClick={() => closeMenu(true)}
          className="mb-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1C1C]/15 text-[#1C1C1C] transition-colors hover:border-[#0F4C3A]"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <form onSubmit={submitSearch} className="mb-10 border-b border-[#1C1C1C]/30">
          <label htmlFor="mobile-site-search" className="sr-only">
            Search products
          </label>
          <div className="flex items-center">
            <MagnifyingGlassIcon className="h-4 w-4 shrink-0 text-[#1C1C1C]/60" />
            <input
              id="mobile-site-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the atelier"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-[#1C1C1C]/40"
            />
            <button
              type="submit"
              className="py-3 text-xs font-semibold uppercase tracking-wider text-[#0F4C3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A]"
            >
              Go
            </button>
          </div>
        </form>

        <ul className="flex flex-col gap-6">
          {primaryNavigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => closeMenu()}
                aria-current={
                  isNavigationItemActive(pathname, item) ? "page" : undefined
                }
                className={`border-l-2 pl-3 text-sm uppercase tracking-[0.2em] transition-colors hover:text-[#0F4C3A] ${
                  isNavigationItemActive(pathname, item)
                    ? "border-[#C8A45D] text-[#0F4C3A]"
                    : "border-transparent text-[#1C1C1C]/80"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-auto text-xs uppercase tracking-[0.2em] text-[#1C1C1C]/40">
          Kampala — Milano
        </p>
      </nav>
    </div>
  );
}
