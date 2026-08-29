import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CollectionPageStream, type CollectionSearchParams } from "@/components/commerce/CollectionPage";
import TrustSection from "@/components/commerce/TrustSection";

export const metadata: Metadata = {
  title: "Ugandan Charcoal | Continental Love",
  description: "Explore Continental Love charcoal from Uganda, selected for dependable quality, considered sourcing, and clean international presentation.",
};

export default function CharcoalPage({ searchParams }: { searchParams: CollectionSearchParams }) {
  return (
    <main className="bg-[var(--warm-ivory)]">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#0f0e0b] text-white lg:min-h-[640px]">
        {/* TODO: Replace with /images/charcoal/charcoal-glow.jpg when the approved asset is added. */}
        <Image src="/images/coffee/coffee-beans-closeup.png" alt="Dark natural material shown as a temporary charcoal collection visual" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,6,.94)_0%,rgba(8,8,6,.72)_46%,rgba(8,8,6,.25)_100%)]" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-5 py-14 sm:px-8 lg:min-h-[640px] lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[.28em] text-[var(--heritage-gold)]">Selected in Uganda · Presented for the world</p>
            <h1 className="mt-5 text-5xl leading-none tracking-[-.03em] sm:text-6xl lg:text-7xl">Charcoal, with its origin intact.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg">A considered charcoal collection focused on dependable quality, careful selection, and clean presentation for international use.</p>
            <a href="#collection" className="mt-8 inline-flex bg-[var(--heritage-gold)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.14em] text-[#11100d] transition-colors hover:bg-[#c99a3b]">Explore the collection</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-end lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[var(--forest-green)]">A practical Ugandan essential</p>
        <div><h2 className="text-3xl leading-tight sm:text-4xl">Selected for consistency. Prepared with care.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-black/68 sm:text-base">Continental Love brings a more considered approach to an everyday product: clear provenance, attentive selection, and packaging made for secure handling across markets.</p></div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-9 border-b border-black/12 pb-5"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[var(--heritage-gold)]">Shop charcoal</p><h2 className="mt-2 text-3xl">The collection</h2></div>
        <CollectionPageStream handle="charcoal" searchParams={searchParams} showHeading={false} />
      </section>

      <section className="bg-[#171611] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[430px] lg:min-h-[620px]">
            {/* TODO: Replace with /images/charcoal/charcoal-bag-front.jpg when the approved asset is added. */}
            <Image src="/images/apparel/apparel-packaging.jpg" alt="Continental Love packaging used as a temporary charcoal packaging visual" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16"><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">Responsible commerce</p><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Sourcing deserves attention.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">We believe charcoal should be approached with the same care as every Continental Love collection: know where it comes from, work closely with suppliers, and communicate what we can verify.</p><Link href="/story" className="mt-6 inline-flex min-h-11 w-fit items-center text-xs font-semibold uppercase tracking-[.16em] underline decoration-[var(--heritage-gold)] underline-offset-8">Read our story →</Link></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-12 lg:py-24">
        {[["Consistent selection", "A focused standard for dependable size and handling."], ["Clean presentation", "Thoughtful packaging for storage, transport, and retail."], ["Origin made visible", "Uganda remains central to the product and its story."]].map(([title, copy]) => <article key={title} className="border-t border-black/20 py-6 md:px-5 md:first:pl-0"><h2 className="text-2xl">{title}</h2><p className="mt-4 text-sm leading-6 text-black/62">{copy}</p></article>)}
      </section>

      <TrustSection />

      <section className="px-5 py-14 text-center sm:px-8"><h2 className="text-3xl sm:text-4xl">Continue exploring Continental Love.</h2><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/coffee" className="inline-flex min-h-11 items-center bg-[#11100d] px-7 text-xs font-semibold uppercase tracking-[.14em] text-white">Explore Coffee</Link><Link href="/story" className="inline-flex min-h-11 items-center border border-black/40 px-7 text-xs font-semibold uppercase tracking-[.14em]">Our Story</Link><Link href="/discover-uganda" className="inline-flex min-h-11 items-center border border-black/40 px-7 text-xs font-semibold uppercase tracking-[.14em]">Discover Uganda</Link></div></section>
    </main>
  );
}
