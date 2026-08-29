import Image from "next/image";
import Link from "next/link";

const stories = [
  { eyebrow: "Heritage. Craftsmanship. Connection.", copy: "Every piece carries a story of skill, patience, and place.", cta: "Our craft", href: "/story", image: "/images/apparel/apparel-fabric-detail.jpg" },
  { eyebrow: "From our land to yours", copy: "We work close to the source to bring you quality with its origin intact.", cta: "Learn more", href: "/discover-uganda", image: "/images/coffee/coffee-hero-origin.png" },
  { eyebrow: "Uganda × Italy", copy: "Bridging continents. Sharing culture. Building a better future.", cta: "Our journey", href: "/story", image: "/images/coffee/coffee-uganda-landscape.jpg" },
];

export default function BrandStory() {
  return (
    <section className="bg-[#f6f2ea] px-4 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-2 lg:grid-cols-3">
        {stories.map((story) => <Link href={story.href} key={story.eyebrow} className="group relative min-h-[250px] overflow-hidden bg-[#17150f] text-white"><Image src={story.image} alt="" fill sizes="(min-width:1024px) 34vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/45 to-black/10" /><div className="relative flex min-h-[250px] max-w-sm flex-col justify-end p-6"><h2 className="text-2xl uppercase leading-[.95]">{story.eyebrow}</h2><p className="mt-4 text-xs leading-5 text-white/80">{story.copy}</p><span className="mt-5 text-[10px] font-semibold uppercase tracking-[.14em] underline decoration-[#c99a3b] underline-offset-6">{story.cta} →</span></div></Link>)}
      </div>
    </section>
  );
}
