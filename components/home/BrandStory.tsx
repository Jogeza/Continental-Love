import Image from "next/image";
import Link from "next/link";
import {useLocale} from "next-intl";
import {localizeHref} from "@/lib/i18n";

const stories = [
  { eyebrow: "Material in focus", copy: "See the fabric, graphics, metal forms, packaging, and product details shown in this preview. Material and production specifications remain unpublished until verified.", cta: "View the collections", href: "/search", image: "/images/apparel/apparel-fabric-detail.jpg" },
  { eyebrow: "Uganda at the center", copy: "Coffee landscapes, Kampala, Bwindi, the Rwenzoris, and Lake Bunyonyi place the brand in a specific country—not an abstract idea of Africa. Explore the places represented across the site.", cta: "Discover Uganda", href: "/discover-uganda", image: "/images/coffee/coffee-hero-origin.png" },
  { eyebrow: "Uganda × Italy", copy: "Continental Love begins with Ugandan products, landscapes, and identity. Italy is the brand’s European reference point for presentation and market connection. The aim is to carry Uganda into an international storefront without removing the origin from the product story.", cta: "Read our story", href: "/story", image: "/images/coffee/coffee-uganda-landscape.jpg" },
];

export default function BrandStory() {
  const locale = useLocale();
  return (
    <section className="bg-[#f6f2ea] px-4 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-2 lg:grid-cols-3">
        {stories.map((story) => <Link href={localizeHref(story.href, locale)} key={story.eyebrow} className="group relative min-h-[250px] overflow-hidden bg-[#17150f] text-white"><Image src={story.image} alt="" fill sizes="(min-width:1024px) 34vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/45 to-black/10" /><div className="relative flex min-h-[250px] max-w-sm flex-col justify-end p-6"><h2 className="text-2xl uppercase leading-[.95]">{story.eyebrow}</h2><p className="mt-4 text-xs leading-5 text-white/80">{story.copy}</p><span className="mt-5 text-[10px] font-semibold uppercase tracking-[.14em] underline decoration-[#c99a3b] underline-offset-6">{story.cta} →</span></div></Link>)}
      </div>
    </section>
  );
}
