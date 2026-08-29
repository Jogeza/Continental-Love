import Link from "next/link";
import Logo from "@/components/brand/Logo";
import CartModal from "components/cart/modal";
import MobileNav from "@/components/layout/MobileNav";
import DesktopNav from "@/components/layout/DesktopNav";
import SearchDialog from "@/components/layout/SearchDialog";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <header className="relative z-30 bg-[#f8f5ef]">
      <div className="hidden h-8 items-center justify-end gap-4 bg-[#0c0c0a] px-8 text-[10px] text-white/80 md:flex"><span>Ship to: International</span><span className="text-white/25">|</span><span>Language: English</span></div>
      <nav className="mx-auto flex h-[82px] max-w-[1536px] items-center justify-between px-4 sm:px-7 lg:px-12" aria-label="Main navigation">
        <Link href="/" aria-label="Continental Love home" className="shrink-0"><Logo className="h-auto w-[108px]" /></Link>
        <Suspense fallback={<div className="hidden h-10 w-[560px] md:block" />}><DesktopNav /></Suspense>
        <div className="flex items-center gap-1 sm:gap-2"><SearchDialog /><CartModal /><Suspense fallback={<div className="h-10 w-10 md:hidden" />}><MobileNav /></Suspense></div>
      </nav>
    </header>
  );
}
