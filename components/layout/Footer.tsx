import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import CurrentYear from "@/components/layout/CurrentYear";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import {useLocale, useTranslations} from "next-intl";
import {localizeHref} from "@/lib/i18n";

const footerLinkClass =
  "w-fit text-sm text-[#d9d1c2] transition-colors hover:text-[#d2a84d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2a84d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11100d]";

function FooterLinkGroup({
  title,
  links,
  locale,
}: {
  title: string;
  links: { label: string; href: string }[];
  locale: string;
}) {
  return (
    <nav aria-label={`${title} links`}>
      <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[.22em] text-[#d2a84d]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3.5">
        {links.map((item) => (
          <li key={`${title}-${item.label}`}>
            <Link href={localizeHref(item.href, locale)} className={footerLinkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const localizedShopLinks = [
    {label: nav("coffee"), href: "/coffee"},
    {label: nav("apparel"), href: "/apparel"},
    {label: nav("jewelry"), href: "/jewelry"},
    {label: locale === "it" ? "Carbone" : "Charcoal", href: "/charcoal"}
  ];
  const localizedDiscoverLinks = [
    {label: nav("discover"), href: "/discover-uganda"},
    {label: nav("story"), href: "/story"}
  ];
  const socialLinks = [
    {label: "Instagram", href: "https://www.instagram.com/continental_love_/"},
    {label: "Facebook", href: "https://www.facebook.com/ContinentalLoveGirls/"}
  ];
  return (
    <footer className="border-t border-[#b4862b]/25 bg-[#11100d] text-[#f6f2ea]">
      <section className="relative isolate overflow-hidden border-b border-white/12" aria-labelledby="footer-journey-heading">
        <Image src="/images/discover-uganda/uganda-sunset-safari.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover object-center opacity-45" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,16,13,.98)_0%,rgba(17,16,13,.88)_50%,rgba(17,16,13,.62)_100%)]" />
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.26em] text-[#d2a84d]">
              Continental Love
            </p>
            <h2 id="footer-journey-heading" className="mt-5 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              {t("heading")}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#c9c0b1] sm:text-base">
              {t("copy")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3"><Link href={localizeHref("/search", locale)} className="inline-flex min-h-11 items-center bg-[#b4862b] px-6 text-xs font-semibold uppercase tracking-[.14em] text-[#11100d]">{t("shop")}</Link><Link href={localizeHref("/story", locale)} className="inline-flex min-h-11 items-center border border-white/45 px-6 text-xs font-semibold uppercase tracking-[.14em] text-white">{t("read")}</Link></div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-2 lg:max-w-sm">
          <Link href={localizeHref("/", locale)} aria-label="Continental Love home" className="inline-block">
            <Logo variant="light" className="h-auto w-[144px]" />
          </Link>
          <p className="mt-6 text-sm leading-6 text-[#c9c0b1]">
            {t("brandCopy")}
          </p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[.22em] text-[#d2a84d]">
            {t("route")}
          </p>
        </div>

        <FooterLinkGroup title={locale === "it" ? "Acquista" : "Shop"} links={localizedShopLinks} locale={locale} />
        <FooterLinkGroup title={locale === "it" ? "Scopri" : "Discover"} links={localizedDiscoverLinks} locale={locale} />
        <nav aria-label={t("follow")}>
          <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[.22em] text-[#d2a84d]">
            {t("follow")}
          </h2>
          <ul className="mt-5 space-y-3.5">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${footerLinkClass} inline-flex min-h-11 items-center gap-2`}
                >
                  <span>{item.label}</span>
                  <ArrowTopRightOnSquareIcon aria-hidden="true" className="size-4 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <div className="border-t border-white/12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-xs text-[#958c7f] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>&copy; <CurrentYear /> Continental Love</p>
          <p>{t("rooted")}</p>
        </div>
      </div>
    </footer>
  );
}
