import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { brand } from "@/lib/brand";

const collections = [
  { name: "Coffee", href: "/search/coffee" },
  { name: "Apparel", href: "/search/apparel" },
  { name: "Jewelry", href: "/search/jewelry" },
  { name: "Discover Uganda", href: "/discover-uganda" },
];

export default function Footer() {
  const CURRENT_YEAR = 2026;
  return (
    <footer className="border-t border-black/10 bg-[#F8F5EF]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo className="h-6 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-[#1C1C1C]/70">
              {brand.tagline}
            </p>
          </div>

          <nav aria-label="Collections">
            <p className="text-xs uppercase tracking-[0.25em] text-[#1C1C1C]/50">
              Collections
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {collections.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[#1C1C1C]/80 transition-colors hover:text-[#0F4C3A]"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 text-xs text-[#1C1C1C]/50 md:flex-row">
          <p>
           &copy; {CURRENT_YEAR} {brand.name}. All rights reserved.
          </p>
          <p className="tracking-[0.15em] uppercase">Kampala — Milano</p>
        </div>
      </div>
    </footer>
  );
}
