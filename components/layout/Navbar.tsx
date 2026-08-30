import Link from "next/link";
import Logo from "@/components/brand/Logo";
import CartModal from "components/cart/modal";
import MobileNav from "@/components/layout/MobileNav";
import DesktopNav from "@/components/layout/DesktopNav";
import SearchDialog from "@/components/layout/SearchDialog";
import { Suspense } from "react";
import LanguageSelector from "@/components/layout/LanguageSelector";
import {useLocale, useTranslations} from "next-intl";
import {localizeHref} from "@/lib/i18n";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Utility");
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[#f8f5ef]/96 shadow-[0_8px_30px_rgba(24,20,12,.06)] backdrop-blur-md">
      <div className="relative h-9 bg-[#0c0c0a] text-[10px] text-white/80">
        <div className="absolute inset-y-0 left-0 right-32 overflow-hidden md:right-52">
          <div className="utility-marquee flex h-full w-max items-center gap-10 whitespace-nowrap pr-10 font-semibold uppercase tracking-[.16em]">
            {[0, 1].map((group) => <div key={group} className="flex items-center gap-10" aria-hidden={group === 1}><span>{t("delivery")}</span><span className="text-[#d2a84d]">◆</span><span>{t("shipping")}</span><span className="text-[#d2a84d]">◆</span><span>{t("orders")}</span><span className="text-[#d2a84d]">◆</span></div>)}
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 z-10 flex w-32 items-center justify-end bg-[#0c0c0a] px-3 shadow-[-24px_0_24px_#0c0c0a] md:w-52 md:px-6"><LanguageSelector /></div>
      </div>
      <nav className="mx-auto flex h-[82px] max-w-[1536px] items-center justify-between px-4 sm:px-7 lg:px-12" aria-label="Main navigation">
        <Link href={localizeHref("/", locale)} aria-label="Continental Love home" className="shrink-0"><Logo className="h-auto w-[108px]" /></Link>
        <Suspense fallback={<div className="hidden h-10 w-[560px] md:block" />}><DesktopNav /></Suspense>
        <div className="flex items-center gap-1 sm:gap-2"><SearchDialog /><CartModal /><Suspense fallback={<div className="h-10 w-10 md:hidden" />}><MobileNav /></Suspense></div>
      </nav>
    </header>
  );
}
