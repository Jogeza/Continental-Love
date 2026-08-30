import Image from "next/image";
import Link from "next/link";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Discover Uganda — Continental Love",
  description: "Meet Uganda through its landscapes, wildlife, people, culture, food, coffee, and adventures.",
  path: "/discover-uganda", image: "/images/discover-uganda/uganda-hero-pearl-of-africa.jpg"
});

const journeys = [
  { title: "Wild encounters", copy: "Walk beneath Bwindi's ancient canopy, then cross open savannah in search of lions and other remarkable wildlife.", image: "/images/discover-uganda/uganda-bwindi-gorilla.jpg", alt: "Mountain gorilla in Bwindi Impenetrable Forest" },
  { title: "Water and wonder", copy: "Follow the Nile toward Murchison Falls and slow down among the terraced islands of Lake Bunyonyi.", image: "/images/discover-uganda/uganda-murchison-falls.jpg", alt: "Murchison Falls on the River Nile" },
  { title: "Highland horizons", copy: "From the Rwenzori Mountains to cool coffee-growing country, Uganda's elevation shapes both landscape and flavor.", image: "/images/discover-uganda/uganda-rwenzori-mountains.jpg", alt: "The Rwenzori Mountains rising over green foothills" },
];

export default function DiscoverUgandaPage() {
  return (
    <main className="bg-[var(--warm-ivory)]">
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#142318] text-white">
        <Image src="/images/discover-uganda/uganda-hero-pearl-of-africa.jpg" alt="Sunset over the green islands of Lake Bunyonyi" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl"><p className="text-[11px] font-semibold uppercase tracking-[.28em] text-[var(--heritage-gold)]">The Pearl of Africa</p><h1 className="mt-5 text-5xl leading-none tracking-[-.03em] sm:text-6xl lg:text-7xl">Discover Uganda.</h1><p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">A country of forest encounters, open savannah, mountain horizons, generous tables, and a welcome that stays with you.</p><a href="#journey" className="mt-8 inline-flex min-h-11 items-center bg-[var(--heritage-gold)] px-7 text-xs font-semibold uppercase tracking-[.14em] text-[#11100d]">Begin the journey</a></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-end lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[var(--forest-green)]">One country, many rhythms</p>
        <div><h2 className="text-3xl leading-tight sm:text-4xl">Come for the landscapes. Remember the people.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-black/68 sm:text-base">Uganda moves easily between energy and stillness: Kampala&apos;s streets, quiet crater lakes, misty forests, generous markets, and tables filled with local flavor. This is the place at the heart of Continental Love.</p></div>
      </section>

      <section id="journey" className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-3">{journeys.map((journey) => <article key={journey.title} className="group overflow-hidden bg-[#171611] text-white"><div className="relative aspect-[4/5] overflow-hidden"><Image src={journey.image} alt={journey.alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div className="p-6"><h2 className="text-2xl">{journey.title}</h2><p className="mt-3 text-sm leading-6 text-white/68">{journey.copy}</p></div></article>)}</div>
      </section>

      <section className="bg-[#173c2f] text-white"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="relative min-h-[460px] lg:min-h-[640px]"><Image src="/images/discover-uganda/uganda-people-welcome.jpg" alt="A warm Ugandan welcome" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div><div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16"><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">The spirit of welcome</p><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Connection is the real destination.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/72 sm:text-base">Uganda is experienced through conversation, hospitality, craft, food, music, and the stories shared along the way. Those human connections are what give every landscape its meaning.</p></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:px-12 lg:py-24">
        <article className="relative min-h-[430px] overflow-hidden text-white"><Image src="/images/discover-uganda/uganda-coffee-experience.png" alt="Ugandan coffee served as part of a local experience" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[var(--heritage-gold)]">Taste Uganda</p><h2 className="mt-3 text-3xl">Coffee at its origin.</h2><p className="mt-3 max-w-md text-sm leading-6 text-white/78">Meet the landscapes and rituals behind one of Uganda&apos;s most distinctive exports.</p><Link href="/coffee" className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[.14em] underline decoration-[var(--heritage-gold)] underline-offset-8">Explore coffee →</Link></div></article>
        <article className="relative min-h-[430px] overflow-hidden text-white"><Image src="/images/discover-uganda/uganda-local-cuisine.jpg" alt="A table of Ugandan dishes" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[var(--heritage-gold)]">Gather at the table</p><h2 className="mt-3 text-3xl">Local flavor, generously shared.</h2><p className="mt-3 max-w-md text-sm leading-6 text-white/78">Discover food as an expression of place, season, and Ugandan hospitality.</p></div></article>
      </section>

      <section className="px-5 pb-16 text-center sm:px-8 lg:pb-24"><h2 className="text-3xl sm:text-4xl">Carry a piece of Uganda with you.</h2><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/search" className="inline-flex min-h-11 items-center bg-[#11100d] px-7 text-xs font-semibold uppercase tracking-[.14em] text-white">Shop the collections</Link><Link href="/story" className="inline-flex min-h-11 items-center border border-black/40 px-7 text-xs font-semibold uppercase tracking-[.14em]">Our story</Link></div></section>
    </main>
  );
}
