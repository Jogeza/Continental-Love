import Link from "next/link";
import Logo from "@/components/brand/Logo";
import CartModal from "components/cart/modal";
import MobileNav from "@/components/layout/MobileNav";

const navItems = [
  { label: "Collections", href: "/search" },
  { label: "Coffee", href: "/search/coffee" },
  { label: "Jewelry", href: "/search/jewelry" },
  { label: "Travel", href: "/discover-uganda" },
  { label: "Story", href: "/story" },
];

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-[#F8F5EF]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Continental Love home">
          <Logo className="h-5 w-auto md:h-12" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm tracking-wide md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#1C1C1C]/80 transition-colors hover:text-[#0F4C3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A] focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side: cart + mobile trigger */}
        <div className="flex items-center gap-3">
          <CartModal />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}