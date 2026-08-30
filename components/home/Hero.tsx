import Image from "next/image";
import Link from "next/link";
import { GlobeAltIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline";
import {useLocale, useTranslations} from "next-intl";
import {localizeHref} from "@/lib/i18n";

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("Hero");
  const promises = [
    { icon: SparklesIcon, title: t("collections"), text: t("collectionsDetail") },
    { icon: GlobeAltIcon, title: t("storefront"), text: t("storefrontDetail") },
    { icon: ShieldCheckIcon, title: t("pages"), text: t("pagesDetail") },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-[#11100d] text-white">
      <Image src="/images/apparel/apparel-hero-lifestyle.jpg" alt="Model wearing Continental Love apparel outdoors" fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover object-[58%_center] lg:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,4,.94)_0%,rgba(5,6,4,.72)_36%,rgba(5,6,4,.18)_68%,rgba(5,6,4,.36)_100%)]" />
      <div className="relative mx-auto flex min-h-[660px] max-w-[1536px] flex-col justify-between px-5 py-14 sm:px-10 lg:min-h-[620px] lg:px-14 lg:py-12 xl:px-20">
        <div className="editorial-reveal max-w-2xl pt-8 lg:pt-5">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.28em] text-[#d4aa54]">{t("eyebrow")}</p>
          <h1 className="text-5xl leading-[.98] tracking-[-.025em] sm:text-6xl lg:text-[72px]"><span className="text-[#c99a3b]">{t("line1")}</span><br /><span>{t("line2")}</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/86 sm:text-lg">{t("copy")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={localizeHref("/search", locale)} className="bg-[#b4862b] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.14em] text-[#11100d] transition-colors hover:bg-[#c99a3b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{t("shop")}</Link>
            <Link href={localizeHref("/story", locale)} className="border border-white/70 bg-black/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-[.14em] transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{t("story")}</Link>
          </div>
        </div>
        <div className="glass-dark mt-16 grid max-w-3xl gap-5 border border-white/15 p-5 sm:grid-cols-3 lg:mt-10">
          {promises.map(({ icon: Icon, title, text }) => <div key={title} className="flex items-start gap-3"><Icon className="h-7 w-7 shrink-0 text-[#d4aa54]" aria-hidden="true" /><div><p className="text-[11px] font-semibold uppercase tracking-[.12em]">{title}</p><p className="mt-1 text-xs text-white/72">{text}</p></div></div>)}
        </div>
        <Link href={localizeHref("/story", locale)} className="glass-dark absolute bottom-10 right-10 hidden w-52 border border-white/20 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#b4862b] xl:block"><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#d4aa54]">{t("story")}</span><p className="mt-3 font-serif text-xl leading-snug">{t("copy")}</p></Link>
      </div>
    </section>
  );
}
