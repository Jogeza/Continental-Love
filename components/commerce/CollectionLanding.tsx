import Image from "next/image";
import Link from "next/link";
import { CollectionPageStream, type CollectionSearchParams } from "@/components/commerce/CollectionPage";
import TrustSection from "@/components/commerce/TrustSection";
import {useLocale, useTranslations} from "next-intl";
import {localizeHref} from "@/lib/i18n";

export type CollectionLandingConfig = {
  handle: string;
  eyebrow: string;
  title: string;
  heroCopy: string;
  heroImage: string;
  heroAlt: string;
  heroPosition?: string;
  introEyebrow: string;
  introTitle: string;
  introCopy: string;
  storyEyebrow: string;
  storyTitle: string;
  storyCopy: string;
  storyImage: string;
  storyAlt: string;
  storyPosition?: string;
  storyHref: string;
  storyLinkLabel: string;
  values: { title: string; copy: string }[];
  relatedTitle: string;
  relatedLinks: { label: string; href: string; primary?: boolean }[];
};

export default function CollectionLanding({ config, searchParams }: { config: CollectionLandingConfig; searchParams: CollectionSearchParams }) {
  const locale = useLocale();
  const t = useTranslations("CollectionCommon");
  return (
    <main className="bg-[var(--warm-ivory)]">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#11100d] text-white lg:min-h-[640px]">
        <Image src={config.heroImage} alt={config.heroAlt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: config.heroPosition ?? "center" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,5,.92)_0%,rgba(7,7,5,.68)_45%,rgba(7,7,5,.18)_100%)]" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-5 py-14 sm:px-8 lg:min-h-[640px] lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[.28em] text-[var(--heritage-gold)]">{config.eyebrow}</p>
            <h1 className="mt-5 text-5xl leading-none tracking-[-.03em] sm:text-6xl lg:text-7xl">{config.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">{config.heroCopy}</p>
            <a href="#collection" className="mt-8 inline-flex min-h-11 items-center bg-[var(--heritage-gold)] px-7 text-xs font-semibold uppercase tracking-[.14em] text-[#11100d] transition-colors hover:bg-[#c99a3b]">{t("explore")}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-end lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[var(--forest-green)]">{config.introEyebrow}</p>
        <div><h2 className="text-3xl leading-tight sm:text-4xl">{config.introTitle}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-black/68 sm:text-base">{config.introCopy}</p></div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-9 border-b border-black/12 pb-5"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[var(--heritage-gold)]">{t("shop")} {config.handle}</p><h2 className="mt-2 text-3xl">{t("collection")}</h2></div>
        <CollectionPageStream handle={config.handle} searchParams={searchParams} showHeading={false} />
      </section>

      <section className="bg-[#171611] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[430px] lg:min-h-[620px]"><Image src={config.storyImage} alt={config.storyAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" style={{ objectPosition: config.storyPosition ?? "center" }} /></div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16"><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">{config.storyEyebrow}</p><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">{config.storyTitle}</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">{config.storyCopy}</p><Link href={localizeHref(config.storyHref, locale)} className="mt-6 inline-flex min-h-11 w-fit items-center text-xs font-semibold uppercase tracking-[.16em] underline decoration-[var(--heritage-gold)] underline-offset-8">{config.storyLinkLabel} →</Link></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-12 lg:py-24">
        {config.values.map((item) => <article key={item.title} className="border-t border-black/20 py-6 md:px-5 md:first:pl-0"><h2 className="text-2xl">{item.title}</h2><p className="mt-4 text-sm leading-6 text-black/62">{item.copy}</p></article>)}
      </section>

      <TrustSection />

      <section className="px-5 py-14 text-center sm:px-8"><h2 className="text-3xl sm:text-4xl">{config.relatedTitle}</h2><div className="mt-7 flex flex-wrap justify-center gap-3">{config.relatedLinks.map((item) => <Link key={item.href} href={localizeHref(item.href, locale)} className={`inline-flex min-h-11 items-center px-7 text-xs font-semibold uppercase tracking-[.14em] ${item.primary ? "bg-[#11100d] text-white" : "border border-black/40"}`}>{item.label}</Link>)}</div></section>
    </main>
  );
}
