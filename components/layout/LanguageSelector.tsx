"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
  { code: "it", label: "Italiano", shortLabel: "IT", flag: "🇮🇹" },
] as const;

export default function LanguageSelector() {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstOptionRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations("Language");
  const current = languages.find((language) => language.code === locale) ?? languages[0];

  useEffect(() => {
    const dismiss = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  useEffect(() => {
    if (open) firstOptionRef.current?.focus();
  }, [open]);

  const changeLanguage = (code: "en" | "it") => {
    const unprefixedPath = pathname.replace(/^\/it(?=\/|$)/, "") || "/";
    const nextPath = code === "it"
      ? `/it${unprefixedPath === "/" ? "" : unprefixedPath}`
      : unprefixedPath;
    const query = searchParams.toString();
    setOpen(false);
    router.push(query ? `${nextPath}?${query}` : nextPath);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="language-options"
        aria-label={t("current", {language: current.label})}
        className="flex min-h-8 items-center gap-1.5 rounded-full border border-white/25 bg-white/8 px-2.5 text-[10px] font-semibold uppercase tracking-[.1em] text-white backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:gap-2 md:px-3"
      >
        <span className="text-base leading-none" aria-hidden="true">{current.flag}</span>
        <span>{current.shortLabel}</span>
        <ChevronDownIcon aria-hidden="true" className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div id="language-options" aria-label={t("choose")} className="absolute right-0 top-[calc(100%+10px)] z-[80] w-44 overflow-hidden rounded-xl border border-white/55 bg-white p-2 text-[#1c1c1c] shadow-[0_20px_60px_rgba(0,0,0,.25)]">
          {languages.map((language) => (
            <button
              key={language.code}
              ref={language.code === "en" ? firstOptionRef : undefined}
              type="button"
              aria-pressed={locale === language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm transition-colors hover:bg-[#f3eee4] focus-visible:outline-2 focus-visible:outline-[var(--forest-green)] ${locale === language.code ? "bg-[#f3eee4] text-[var(--forest-green)]" : ""}`}
            >
              <span className="text-lg" aria-hidden="true">{language.flag}</span>
              <span>{language.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
