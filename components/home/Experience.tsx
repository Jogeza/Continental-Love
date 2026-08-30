import { ArchiveBoxIcon, ClipboardDocumentCheckIcon, LifebuoyIcon, TagIcon } from "@heroicons/react/24/outline";

const benefits = [
  { icon: ClipboardDocumentCheckIcon, title: "Clear product pages", copy: "Images, variants, prices, and availability are shown together." },
  { icon: TagIcon, title: "Visible stock status", copy: "Unavailable variants and sold-out products are marked before checkout." },
  { icon: ArchiveBoxIcon, title: "Packaging information", copy: "Product imagery shows current retail and presentation formats." },
  { icon: LifebuoyIcon, title: "Customer contact", copy: "Verified support details will be published before live commerce opens." },
];

export default function Experience() {
  return (
    <>
      <section aria-label="Brand values" className="border-y border-black/10 bg-[#fbf8f2] px-4 py-7 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-[10px] font-semibold uppercase tracking-[.2em] text-black/65 sm:justify-between"><span>Ugandan identity</span><span className="text-[#b4862b]">◆</span><span>European market focus</span><span className="text-[#b4862b]">◆</span><span>Four product categories</span><span className="text-[#b4862b]">◆</span><span>Catalog preview</span></div>
      </section>
      <section aria-label="Customer benefits" className="bg-[#f6f2ea] px-5 py-9 sm:px-8">
        <div className="mx-auto grid max-w-[1340px] grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, copy }, index) => <div key={title} className={`flex items-center gap-4 lg:px-8 ${index ? "lg:border-l lg:border-black/15" : ""}`}><Icon className="h-9 w-9 shrink-0 stroke-[1.25]" aria-hidden="true" /><div><h2 className="font-sans text-[11px] font-semibold uppercase tracking-[.12em]">{title}</h2><p className="mt-1 text-xs text-black/65">{copy}</p></div></div>)}
        </div>
      </section>
    </>
  );
}
