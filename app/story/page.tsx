import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Story — Continental Love",
  description: "The story of Continental Love: a Ugandan lifestyle house connecting origin, culture, and considered international presentation.",
  path: "/story", image: "/images/apparel/apparel-sustainability.jpg"
});

const chapters = [
  { eyebrow: "Origin", title: "Uganda", copy: "The landscapes, materials, rituals, and creative energy at the center of every Continental Love collection." },
  { eyebrow: "Passage", title: "Italy", copy: "A meeting point for Ugandan identity and European refinement—in presentation, pace, and attention to detail." },
  { eyebrow: "Continuity", title: brand.name, copy: "A lifestyle house carrying products and stories forward without losing the place that gave them meaning." },
];

export default function StoryPage() {
  return (
    <main className="bg-[var(--warm-ivory)]">
      <section className="relative isolate min-h-[600px] overflow-hidden bg-[#11100d] text-white lg:min-h-[680px]">
        <Image src="/images/apparel/apparel-sustainability.jpg" alt="Continental Love makers and materials rooted in Uganda" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,6,.94)_0%,rgba(7,8,6,.7)_48%,rgba(7,8,6,.24)_100%)]" />
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-end px-5 py-16 sm:px-8 lg:min-h-[680px] lg:px-12 lg:py-20">
          <div className="max-w-3xl"><p className="text-[11px] font-semibold uppercase tracking-[.28em] text-[var(--heritage-gold)]">Our philosophy · Our origin</p><h1 className="mt-5 text-5xl leading-[.98] tracking-[-.03em] sm:text-6xl lg:text-7xl">Every product carries a place.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">Continental Love brings Uganda and Italy into one considered conversation—connecting products, places, and everyday rituals through cultural identity and thoughtful design.</p><a href="#our-journey" className="mt-8 inline-flex min-h-11 items-center bg-[var(--heritage-gold)] px-7 text-xs font-semibold uppercase tracking-[.14em] text-[#11100d]">Discover our journey</a></div>
        </div>
      </section>

      <section id="our-journey" className="mx-auto grid max-w-7xl scroll-mt-8 gap-10 px-5 py-16 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-end lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[var(--forest-green)]">Uganda → Italy → World</p>
        <div><h2 className="text-3xl leading-tight sm:text-4xl">A story of connection, told with intention.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-black/68 sm:text-base">We see commerce as a way to create closeness. Coffee can carry the character of a highland. Clothing can carry identity. Jewelry can hold personal meaning. Even an everyday essential can make its origin visible. Continental Love brings these expressions together as one coherent house.</p></div>
      </section>

      <section className="bg-[#171611] text-white"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="relative min-h-[440px] lg:min-h-[640px]"><Image src="/images/discover-uganda/uganda-cultural-heritage.jpg" alt="Ugandan cultural heritage and craftsmanship" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div><div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16"><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">Culture, not decoration</p><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Origin remains part of the object.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">Our ambition is not to make Uganda feel distant or abstract. It is to let place remain present—in the visual language, the story, and the care given to how each collection meets the world.</p><Link href="/discover-uganda" className="mt-7 inline-flex min-h-11 w-fit items-center text-xs font-semibold uppercase tracking-[.16em] underline decoration-[var(--heritage-gold)] underline-offset-8">Discover Uganda →</Link></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-12 lg:py-24">{chapters.map((chapter) => <article key={chapter.title} className="border-t border-black/20 py-6 md:px-5 md:first:pl-0"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[var(--heritage-gold)]">{chapter.eyebrow}</p><h2 className="mt-3 text-3xl">{chapter.title}</h2><p className="mt-4 text-sm leading-6 text-black/62">{chapter.copy}</p></article>)}</section>

      <section className="relative isolate overflow-hidden px-5 py-20 text-center text-white sm:px-8 lg:py-28"><Image src="/images/discover-uganda/uganda-lake-bunyonyi-view.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" /><div className="absolute inset-0 -z-10 bg-[#10281f]/82" /><p className="text-[11px] font-semibold uppercase tracking-[.26em] text-[var(--heritage-gold)]">Continue the story</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">Explore the collections shaped by this connection.</h2><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/search" className="inline-flex min-h-11 items-center bg-[var(--heritage-gold)] px-7 text-xs font-semibold uppercase tracking-[.14em] text-[#11100d]">Shop collections</Link><Link href="/discover-uganda" className="inline-flex min-h-11 items-center border border-white/65 px-7 text-xs font-semibold uppercase tracking-[.14em]">Discover Uganda</Link></div></section>
    </main>
  );
}
