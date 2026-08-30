import Image from "next/image";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {localizeHref} from "@/lib/i18n";

export default function Collections() {
  const locale = useLocale();
  const t = useTranslations("Collections");
  const mainCollections = [
    { name: t("coffee"), copy: t("coffeeCopy"), href: "/coffee", image: "/images/coffee/coffee-packshot-250g.png", position: "center" },
    { name: t("apparel"), copy: t("apparelCopy"), href: "/apparel", image: "/images/apparel/apparel-model-hoodie-olive.jpg", position: "center 25%" },
    { name: t("jewelry"), copy: t("jewelryCopy"), href: "/jewelry", image: "/images/jewelry/jewelry-hero-lifestyle.jpg", position: "62% center" },
    { name: t("uganda"), copy: t("ugandaCopy"), href: "/discover-uganda", image: "/images/discover-uganda/uganda-lake-bunyonyi.jpg", position: "center" },
  ];

  return (
    <section className="bg-[#f6f2ea] px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-end justify-between gap-6"><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#76520f]">Continental Love</p><h2 className="mt-2 font-sans text-sm font-semibold uppercase tracking-[.24em] sm:text-base">{t("heading")}</h2></div><Link href={localizeHref("/search", locale)} className="text-[10px] font-semibold uppercase tracking-[.14em] hover:text-[#8a641e]">{t("viewAll")} →</Link></div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {mainCollections.map((item, index) => <Link key={item.name} href={localizeHref(item.href, locale)} style={{ animationDelay: `${index * 70}ms` }} className="editorial-reveal group relative min-h-[390px] overflow-hidden bg-[#181611] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(31,25,15,.2)]"><Image src={item.image} alt={`${item.name} · Continental Love`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.055]" style={{ objectPosition: item.position }} /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/12 to-black/5" /><div className="absolute inset-x-3 bottom-3 border border-white/12 bg-black/18 p-4 text-white backdrop-blur-[2px]"><h3 className="text-2xl leading-none">{item.name}</h3><p className="mt-3 max-w-[17rem] text-xs leading-5 text-white/84">{item.copy}</p><span className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[.14em] underline decoration-[#c99a3b] underline-offset-6">{item.href === "/discover-uganda" ? t("explore") : t("shop")} →</span></div></Link>)}
        </div>

        <Link href={localizeHref("/charcoal", locale)} className="group mt-3 grid overflow-hidden bg-[#121310] text-white md:grid-cols-[1.2fr_.8fr]">
          <div className="relative min-h-[300px] overflow-hidden md:min-h-[360px]"><Image src="/images/charcoal/charcoal-pallet-5kg-bags.jpg" alt={locale === "it" ? "Sacchi di carbone Continental Love su pallet" : "Continental Love charcoal bags prepared on a pallet"} fill sizes="(min-width:768px) 60vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" /></div>
          <div className="flex flex-col justify-center border-l border-white/10 p-7 sm:p-10 lg:p-14"><p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">{locale === "it" ? "Materiali e fornitura" : "Materials & supply"}</p><h3 className="mt-4 text-4xl">{t("charcoal")}</h3><p className="mt-5 max-w-md text-sm leading-7 text-white/68">{t("charcoalCopy")} {locale === "it" ? "Specifiche tecniche e documentazione di origine saranno pubblicate solo dopo la verifica." : "Technical specifications and origin documents will be published only after verification."}</p><span className="mt-7 text-xs font-semibold uppercase tracking-[.16em] text-[var(--heritage-gold)]">{t("explore")} →</span></div>
        </Link>
      </div>
    </section>
  );
}
