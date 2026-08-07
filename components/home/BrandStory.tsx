// components/home/BrandStory.tsx

export default function BrandStory() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-28 text-center sm:px-12 lg:py-40">
      <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[var(--forest-green)]">
        The Philosophy
      </p>

      <h2 className="text-3xl leading-[1.25] sm:text-4xl lg:text-5xl">
        Every product carries a place. Every place carries a story.
        Continental Love exists to carry both, intact, from Uganda&rsquo;s
        hands to Italy&rsquo;s table.
      </h2>

      <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-[var(--charcoal)]/70 sm:text-lg">
        We work directly with growers, artisans, and makers across Uganda
        &mdash; not to source products, but to carry forward what they
        represent: patience, craft, and a relationship with the land that
        cannot be manufactured. Nothing we offer is mass-produced. Nothing
        arrives without its origin attached.
      </p>
    </section>
  );
}
