import Image from "next/image";
import Link from "next/link";

const collections = [
  { name: "Coffee", copy: "Single origin. Rich in flavor. True to Uganda.", href: "/coffee", image: "/images/coffee/coffee-packshot-250g.png", position: "center" },
  { name: "Apparel", copy: "Timeless pieces. Crafted with purpose.", href: "/apparel", image: "/images/apparel/apparel-model-hoodie-olive.jpg", position: "center 25%" },
  { name: "Jewelry", copy: "Meaningful details. Made to last.", href: "/jewelry", image: "/images/apparel/apparel-studio-portrait.jpg", position: "center 24%" },
  { name: "Charcoal", copy: "Natural warmth. A better everyday choice.", href: "/charcoal", image: "/images/coffee/coffee-beans-closeup.png", position: "center" },
  { name: "Discover Uganda", copy: "The land. The people. The story.", href: "/discover-uganda", image: "/images/coffee/coffee-uganda-landscape.jpg", position: "center" },
];

export default function Collections() {
  return (
    <section className="bg-[#f6f2ea] px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex items-end justify-between gap-6"><h2 className="font-sans text-sm font-semibold uppercase tracking-[.24em] sm:text-base">Shop our collections</h2><Link href="/search" className="text-[10px] font-semibold uppercase tracking-[.14em] hover:text-[#8a641e]">View all products →</Link></div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {collections.map((item) => <Link key={item.name} href={item.href} className="group relative min-h-[360px] overflow-hidden bg-[#181611] sm:min-h-[390px] lg:min-h-[360px]"><Image src={item.image} alt={`${item.name} by Continental Love`} fill sizes="(min-width:1024px) 20vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" style={{ objectPosition: item.position }} /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/12 to-black/5" /><div className="absolute inset-x-0 bottom-0 p-5 text-white"><h3 className="text-2xl leading-none">{item.name}</h3><p className="mt-3 max-w-[15rem] text-xs leading-5 text-white/84">{item.copy}</p><span className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[.14em] underline decoration-[#c99a3b] underline-offset-6">{item.name === "Discover Uganda" ? "Explore more" : "Shop now"} →</span></div></Link>)}
        </div>
      </div>
    </section>
  );
}
