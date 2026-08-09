"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Collections", href: "/search" },
  { label: "Coffee", href: "/search/coffee" },
  { label: "Jewelry", href: "/search/jewelry" },
  { label: "Travel", href: "/discover-uganda" },
  { label: "Story", href: "/discover-uganda" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
          className="mb-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1C1C]/15 text-[#1C1C1C] transition-colors hover:border-[#0F4C3A]"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#1C1C1C]/80 transition-colors hover:text-[#0F4C3A]"
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
