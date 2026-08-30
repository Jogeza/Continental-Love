import {
  ClipboardDocumentCheckIcon,
  CurrencyEuroIcon,
  InformationCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const trustItems = [
  {
    icon: MapPinIcon,
    title: "Origin stated",
    copy: "Uganda is identified throughout collection, story, and destination pages.",
  },
  {
    icon: InformationCircleIcon,
    title: "Catalog transparency",
    copy: "Product pages show images, variants, prices, and current availability.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Claims require evidence",
    copy: "Material, certification, and performance claims remain unpublished until documented.",
  },
  {
    icon: CurrencyEuroIcon,
    title: "Checkout disclosure",
    copy: "Currency, duties, delivery estimates, and payment providers must be confirmed at checkout.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-black/10 bg-[#fbf8f2]" aria-labelledby="commerce-trust-heading">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
        <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">
          Storefront disclosures
        </p>
        <h2 id="commerce-trust-heading" className="mt-3 text-3xl sm:text-4xl">
          What is confirmed—and what still needs confirmation.
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
            <article
              key={item.title}
              className={`border-t border-black/15 py-6 sm:px-6 lg:border-t-0 lg:py-2 ${index ? "lg:border-l" : "lg:pl-0"}`}
            >
              <Icon aria-hidden="true" className="mb-5 size-6 text-[var(--forest-green)]" />
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[.16em]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/62">{item.copy}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
