import Link from "next/link";
import Logo from "@/components/brand/Logo";
import CurrentYear from "@/components/layout/CurrentYear";

const shopLinks = [
  { label: "Coffee", href: "/coffee" },
  { label: "Apparel", href: "/apparel" },
  { label: "Jewelry", href: "/jewelry" },
  { label: "Charcoal", href: "/charcoal" },
];

const discoverLinks = [
  { label: "Discover Uganda", href: "/discover-uganda" },
  { label: "Our Story", href: "/story" },
];

const exploreLinks = [
  { label: "Search", href: "/search" },
  { label: "All Collections", href: "/search" },
  { label: "Story", href: "/story" },
];

const footerLinkClass =
  "w-fit text-sm text-[#d9d1c2] transition-colors hover:text-[#d2a84d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2a84d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11100d]";

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={`${title} links`}>
      <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[.22em] text-[#d2a84d]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3.5">
        {links.map((item) => (
          <li key={`${title}-${item.label}`}>
            <Link href={item.href} className={footerLinkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#b4862b]/25 bg-[#11100d] text-[#f6f2ea]">
      <section className="border-b border-white/12" aria-labelledby="footer-newsletter-heading">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.15fr_.85fr] md:items-end lg:px-12 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.26em] text-[#d2a84d]">
              Continental Love
            </p>
            <h2 id="footer-newsletter-heading" className="mt-5 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              From Uganda,<br />with love.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#c9c0b1] sm:text-base">
              Stories, new collections and meaningful products connecting Uganda with the world.
            </p>
          </div>

          <form aria-describedby="newsletter-status" className="w-full">
            <label htmlFor="footer-email" className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#e7dfd1]">
              Email address
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="footer-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                disabled
                className="min-h-12 min-w-0 flex-1 border border-white/25 bg-transparent px-4 text-sm text-white placeholder:text-white/36 disabled:cursor-not-allowed disabled:opacity-75"
              />
              <button
                type="button"
                disabled
                className="min-h-12 border border-[#b4862b] bg-[#b4862b] px-6 text-xs font-semibold uppercase tracking-[.16em] text-[#11100d] disabled:cursor-not-allowed disabled:opacity-75"
              >
                Join the journey
              </button>
            </div>
            <p id="newsletter-status" className="mt-3 text-xs leading-5 text-[#9f9688]">
              Newsletter sign-up is coming soon. No email will be submitted yet.
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-2 lg:max-w-sm">
          <Link href="/" aria-label="Continental Love home" className="inline-block">
            <Logo variant="light" className="h-auto w-[144px]" />
          </Link>
          <p className="mt-6 text-sm leading-6 text-[#c9c0b1]">
            Premium Ugandan coffee, apparel, jewelry and meaningful goods rooted in culture, craftsmanship and connection.
          </p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[.22em] text-[#d2a84d]">
            Uganda → Italy → World
          </p>
        </div>

        <FooterLinkGroup title="Shop" links={shopLinks} />
        <FooterLinkGroup title="Discover" links={discoverLinks} />
        <FooterLinkGroup title="Explore" links={exploreLinks} />
      </section>

      <div className="border-t border-white/12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-xs text-[#958c7f] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>&copy; <CurrentYear /> Continental Love</p>
          <p>Rooted in Uganda. Made for the world.</p>
        </div>
      </div>
    </footer>
  );
}
