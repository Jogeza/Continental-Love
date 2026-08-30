"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavigationItemActive, primaryNavigation } from "@/lib/navigation";
import {useLocale, useTranslations} from "next-intl";
import {localizeHref} from "@/lib/i18n";

export default function DesktopNav() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Nav");

  return (
    <div className="hidden items-center gap-4 text-xs tracking-wide md:flex lg:gap-7 lg:text-sm">
      {primaryNavigation.map((item) => {
        const active = isNavigationItemActive(pathname, item);

        return (
          <Link
            key={item.label}
            href={localizeHref(item.href, locale)}
            aria-current={active ? "page" : undefined}
            className={`border-b py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C3A] focus-visible:ring-offset-2 ${
              active
                ? "border-[#C8A45D] text-[#0F4C3A]"
                : "border-transparent text-[#1C1C1C]/80 hover:text-[#0F4C3A]"
            }`}
          >
            {t(item.translationKey)}
          </Link>
        );
      })}
    </div>
  );
}
