const trustItems = [
  {
    title: "Authentic origin",
    copy: "Collections and stories rooted in Uganda.",
  },
  {
    title: "Clear information",
    copy: "Straightforward product details and honest availability.",
  },
  {
    title: "Quality first",
    copy: "Thoughtful selection, imagery and presentation.",
  },
  {
    title: "International outlook",
    copy: "Built to carry Ugandan products and stories beyond borders.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-black/10 bg-[#fbf8f2]" aria-labelledby="commerce-trust-heading">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
        <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[var(--heritage-gold)]">
          Why shop Continental Love
        </p>
        <h2 id="commerce-trust-heading" className="mt-3 text-3xl sm:text-4xl">
          Trusted from origin to presentation.
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <article
              key={item.title}
              className={`border-t border-black/15 py-6 sm:px-6 lg:border-t-0 lg:py-2 ${index ? "lg:border-l" : "lg:pl-0"}`}
            >
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[.16em]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/62">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
