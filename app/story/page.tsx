import Image from "next/image";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Our Story — Continental Love",
  description:
    "The philosophy behind Continental Love: carrying Uganda's craft, intact, to Italy and the world.",
};

export default function StoryPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-16 sm:px-12 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-24">
        <div>
          <span className="font-sans text-xs tracking-[0.3em] text-[#0F4C3A] uppercase">
            The Philosophy
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-[1.15] text-[#1C1C1C] sm:text-5xl">
            Every product carries a place. Every place carries a story.
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-[#1C1C1C]/70 sm:text-lg">
            Continental Love exists to carry both, intact, from Uganda&rsquo;s
            hands to Italy&rsquo;s table. We work directly with growers,
            artisans, and makers across Uganda — not to source products, but
            to carry forward what they represent: patience, craft, and a
            relationship with the land that cannot be manufactured. Nothing
            we offer is mass-produced. Nothing arrives without its origin
            attached.
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFEAE0]">
          <Image
            src="/images/hero/continental-love-hero.jpg"
            alt="Ugandan coffee origin, hand-harvested"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="border-t border-[#1C1C1C]/10 bg-[#F8F5EF]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-3 lg:gap-16">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#1C1C1C]/65 uppercase">
              Origin
            </span>
            <h2 className="mt-3 font-serif text-2xl text-[#1C1C1C]">
              Uganda
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#1C1C1C]/70">
              Highland coffee, natural charcoal, and craft rooted in
              generations of practice — not staged for a photograph, but
              genuinely how it&rsquo;s done.
            </p>
          </div>

          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#1C1C1C]/65 uppercase">
              Passage
            </span>
            <h2 className="mt-3 font-serif text-2xl text-[#1C1C1C]">
              Italy
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#1C1C1C]/70">
              Where Ugandan origin meets European refinement — in
              presentation, in pace, in the attention given to something
              made well.
            </p>
          </div>

          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-[#1C1C1C]/65 uppercase">
              Continuity
            </span>
            <h2 className="mt-3 font-serif text-2xl text-[#1C1C1C]">
              {brand.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#1C1C1C]/70">
              {brand.tagline} Not a marketplace that happens to sell African
              goods — a house built to carry them forward whole.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
