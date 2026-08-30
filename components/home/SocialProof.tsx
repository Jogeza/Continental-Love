type Testimonial = {
  quote: string;
  customerName: string;
  customerLocation?: string;
  product?: string;
  sourceUrl?: string;
};

// TODO(CONTENT): Add only reviews that can be traced to a real customer and
// published with permission. Keep sourceUrl when the review comes from a
// third-party platform. The section remains hidden until verified entries exist.
const verifiedTestimonials: Testimonial[] = [];

export default function SocialProof() {
  if (verifiedTestimonials.length === 0) return null;

  return (
    <section className="border-y border-black/10 bg-[#fbf8f2] px-5 py-16 sm:px-8 lg:py-24" aria-labelledby="customer-notes-heading">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">Verified customer notes</p>
        <h2 id="customer-notes-heading" className="mt-3 text-3xl sm:text-4xl">From the Continental Love community.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{verifiedTestimonials.map((item) => <figure key={`${item.customerName}-${item.quote}`} className="border-t border-black/20 pt-6"><blockquote className="text-lg leading-8 text-black/75">“{item.quote}”</blockquote><figcaption className="mt-5 text-xs leading-5 text-black/55"><span className="font-semibold text-black/75">{item.customerName}</span>{item.customerLocation ? ` · ${item.customerLocation}` : ""}{item.product ? <span className="block">Purchased: {item.product}</span> : null}</figcaption></figure>)}</div>
      </div>
    </section>
  );
}
