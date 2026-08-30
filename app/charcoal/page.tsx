import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CollectionPageStream, type CollectionSearchParams } from "@/components/commerce/CollectionPage";
import TrustSection from "@/components/commerce/TrustSection";
import {getLocale} from "next-intl/server";
import {createPageMetadata} from "@/lib/seo";
import {localizeHref} from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> { const locale = await getLocale(); return createPageMetadata({title:"Charcoal Formats | Continental Love",description:"Explore charcoal packaging and handling formats in the Continental Love catalog preview.",path:"/charcoal",image:"/images/charcoal/charcoal-glow.jpg",locale}); }

export default async function CharcoalPage({ searchParams }: { searchParams: CollectionSearchParams }) {
  const locale = await getLocale();
  const it = locale === "it";
  return (
    <main className="bg-[var(--warm-ivory)]">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#0f0e0b] text-white lg:min-h-[640px]">
        <Image src="/images/charcoal/charcoal-glow.jpg" alt="Glowing charcoal" fill preload sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,6,.94)_0%,rgba(8,8,6,.72)_46%,rgba(8,8,6,.25)_100%)]" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-5 py-14 sm:px-8 lg:min-h-[640px] lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[.28em] text-[var(--heritage-gold)]">{it ? "Anteprima dei formati · Specifiche da verificare" : "Format preview · Specifications pending"}</p>
            <h1 className="mt-5 text-5xl leading-none tracking-[-.03em] sm:text-6xl lg:text-7xl">{it ? "Formati di carbone, presentati con chiarezza." : "Charcoal formats, clearly presented."}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg">{it ? "Sacchi, scatole e quantità pallettizzate sono mostrati come anteprima; origine e specifiche attendono verifica." : "Consumer bags, boxed formats, and pallet quantities are shown as a preview; origin and specifications await verification."}</p>
            <a href="#collection" className="mt-8 inline-flex bg-[var(--heritage-gold)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.14em] text-[#11100d] transition-colors hover:bg-[#c99a3b]">{it ? "Scopri la collezione" : "Explore the collection"}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-end lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[var(--forest-green)]">{it ? "Formati per vendita e movimentazione" : "Retail and handling formats"}</p>
        <div><h2 className="text-3xl leading-tight sm:text-4xl">{it ? "Confezioni per il consumatore e formati sfusi." : "Consumer packs and bulk-handling formats."}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-black/68 sm:text-base">{it ? "Le immagini mostrano sacchi, scatole e unità pallettizzate. Specie legnosa, distretto di produzione, carbonio, umidità, durata e certificazioni devono essere confermati prima della pubblicazione." : "The imagery shows branded bags, boxes, sacks, and palletized units for storage and transport. Wood species, production district, carbon content, moisture, burn time, and certifications must be confirmed before technical claims are published."}</p></div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-9 border-b border-black/12 pb-5"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[var(--heritage-gold)]">{it ? "Scopri i formati" : "Explore charcoal"}</p><h2 className="mt-2 text-3xl">{it ? "La collezione" : "The collection"}</h2></div>
        <CollectionPageStream handle="charcoal" searchParams={searchParams} showHeading={false} />
      </section>

      <section className="bg-[#171611] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[430px] lg:min-h-[620px]">
            <Image src="/images/charcoal/charcoal-bag-front.jpg" alt="Continental Love charcoal bag" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16"><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">{it ? "Documentazione necessaria" : "Documentation required"}</p><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">{it ? "L’origine deve essere verificabile." : "Origin must be verifiable."}</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">{it ? "Regione di produzione, materia prima o specie legnosa, produttore, documentazione sulla raccolta legale e test indipendenti saranno pubblicati solo dopo verifica." : "Production region, feedstock or wood species, producer information, legal-harvest documentation, and independent test results will be published only after verification."}</p><Link href={localizeHref("/story", locale)} className="mt-6 inline-flex min-h-11 w-fit items-center text-xs font-semibold uppercase tracking-[.16em] underline decoration-[var(--heritage-gold)] underline-offset-8">{it ? "Leggi la nostra storia" : "Read our story"} →</Link></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-12 lg:py-24">
        {(it ? [["Formati mostrati", "Nelle immagini compaiono sacchi, scatole e unità pallettizzate."], ["Movimentazione", "Le confezioni sono presentate per stoccaggio, trasporto ed esposizione."], ["Specifiche", "Pesi, dimensioni, umidità, ceneri, carbonio fisso e durata saranno pubblicati dopo verifica."]] : [["Formats shown", "Consumer bags, boxes, sacks, and palletized units appear in the product imagery."], ["Handling", "Packaging is presented for storage, transport, and retail display."], ["Specifications", "Bag weights, piece-size range, moisture, ash, fixed carbon, and burn-time data will be published after verification."]]).map(([title, copy]) => <article key={title} className="border-t border-black/20 py-6 md:px-5 md:first:pl-0"><h2 className="text-2xl">{title}</h2><p className="mt-4 text-sm leading-6 text-black/62">{copy}</p></article>)}
      </section>

      <TrustSection />

      <section className="px-5 py-14 text-center sm:px-8"><h2 className="text-3xl sm:text-4xl">Continue exploring Continental Love.</h2><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href={localizeHref("/coffee", locale)} className="inline-flex min-h-11 items-center bg-[#11100d] px-7 text-xs font-semibold uppercase tracking-[.14em] text-white">Explore Coffee</Link><Link href={localizeHref("/story", locale)} className="inline-flex min-h-11 items-center border border-black/40 px-7 text-xs font-semibold uppercase tracking-[.14em]">Our Story</Link><Link href={localizeHref("/discover-uganda", locale)} className="inline-flex min-h-11 items-center border border-black/40 px-7 text-xs font-semibold uppercase tracking-[.14em]">Discover Uganda</Link></div></section>
    </main>
  );
}
