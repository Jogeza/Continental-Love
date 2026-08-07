// components/layout/Footer.tsx

import Link from "next/link";

const shopLinks = [
  { label: "Coffee", href: "/coffee" },
  { label: "Apparel", href: "/apparel" },
  { label: "Jewelry", href: "/jewelry" },
  { label: "Charcoal", href: "/charcoal" },
];

const houseLinks = [
  { label: "About", href: "/about" },
  { label: "Stories", href: "/stories" },
  { label: "Discover Uganda", href: "/discover-uganda" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--charcoal)]/10 px-6 py-16 sm:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-2">
          <p className="text-lg tracking-tight">Continental Love</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--charcoal)]/60">
            A luxury lifestyle house connecting Uganda and Italy.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/50">
            Shop
          </p>
          <ul className="space-y-2">
            {shopLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[var(--charcoal)]/80 transition-opacity hover:opacity-60"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/50">
            The House
          </p>
          <ul className="space-y-2">
            {houseLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[var(--charcoal)]/80 transition-opacity hover:opacity-60"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1600px] flex-col items-center justify-between gap-4 border-t border-[var(--charcoal)]/10 pt-8 text-xs text-[var(--charcoal)]/50 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Continental Love. All rights reserved.</p>
        <p>Uganda &mdash; Italy</p>
      </div>
    </footer>
  );
}
