import Image from "next/image";
import Link from "next/link";
import { GlobeAltIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline";

const promises = [
  { icon: SparklesIcon, title: "Ethically sourced", text: "From our land to you" },
  { icon: GlobeAltIcon, title: "Worldwide shipping", text: "Reliable international delivery" },
  { icon: ShieldCheckIcon, title: "Quality guaranteed", text: "Crafted with care" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#11100d] text-white">
      <Image src="/images/apparel/apparel-hero-lifestyle.jpg" alt="Continental Love apparel worn in the Ugandan highlands" fill priority sizes="100vw" className="object-cover object-[58%_center] lg:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,4,.94)_0%,rgba(5,6,4,.72)_36%,rgba(5,6,4,.18)_68%,rgba(5,6,4,.36)_100%)]" />
      <div className="relative mx-auto flex min-h-[660px] max-w-[1536px] flex-col justify-between px-5 py-14 sm:px-10 lg:min-h-[620px] lg:px-14 lg:py-12 xl:px-20">
        <div className="max-w-2xl pt-8 lg:pt-5">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.28em] text-[#d4aa54]">Uganda, shared with the world</p>
          <h1 className="text-5xl leading-[.98] tracking-[-.025em] sm:text-6xl lg:text-[72px]">Wear the <span className="text-[#c99a3b]">Culture.</span><br />Taste the <span className="text-[#c99a3b]">Origin.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/86 sm:text-lg">Premium coffee, timeless apparel, and meaningful pieces inspired by Uganda and made for life everywhere.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/search" className="bg-[#b4862b] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.14em] transition-colors hover:bg-[#c99a3b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Shop collections</Link>
            <Link href="/story" className="border border-white/70 bg-black/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-[.14em] transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Our story</Link>
          </div>
        </div>
        <div className="mt-16 grid max-w-3xl gap-5 border-t border-white/25 pt-6 sm:grid-cols-3 lg:mt-10">
          {promises.map(({ icon: Icon, title, text }) => <div key={title} className="flex items-start gap-3"><Icon className="h-7 w-7 shrink-0 text-[#d4aa54]" aria-hidden="true" /><div><p className="text-[11px] font-semibold uppercase tracking-[.12em]">{title}</p><p className="mt-1 text-xs text-white/72">{text}</p></div></div>)}
        </div>
        <Link href="/story" className="absolute bottom-10 right-10 hidden w-52 border border-white/15 bg-black/75 p-6 backdrop-blur-sm transition-colors hover:border-[#b4862b] xl:block"><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#d4aa54]">Our origin</span><p className="mt-3 font-serif text-xl leading-snug">The story of Uganda in every product.</p><span className="mt-6 block text-[10px] font-semibold uppercase tracking-[.16em] underline decoration-[#b4862b] underline-offset-8">Discover our story →</span></Link>
      </div>
    </section>
  );
}
