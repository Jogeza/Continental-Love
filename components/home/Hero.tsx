// components/home/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:min-h-[92vh] lg:grid-cols-2">
        {/* Text column */}
        <div className="flex flex-col justify-center px-6 py-24 sm:px-12 lg:px-20 lg:py-0">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--forest-green)]">
            Uganda &mdash; Italy
          </p>

          <h1 className="max-w-xl text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            From Uganda&rsquo;s Heart.
            <br />
            To Italy&rsquo;s Lifestyle.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--charcoal)]/70 sm:text-lg">
            Discover authentic Ugandan craftsmanship, premium coffee, fashion,
            jewelry, and experiences &mdash; carried from their origin to your
            everyday life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/search"
              className="inline-flex items-center border border-[var(--charcoal)] px-8 py-3 text-sm uppercase tracking-wide transition-colors duration-300 hover:bg-[var(--charcoal)] hover:text-[var(--warm-ivory)]"
            >
              Explore Collections
            </Link>

            <Link
              href="/discover-uganda"
              className="inline-flex items-center text-sm uppercase tracking-wide text-[var(--charcoal)] underline decoration-[var(--heritage-gold)] decoration-1 underline-offset-4 transition-opacity duration-300 hover:opacity-60"
            >
              Discover Uganda
            </Link>
          </div>
        </div>

        {/* Image column */}
        <div className="relative min-h-[60vh] lg:min-h-full">
          <Image
            src="/images/hero/continental-love-hero.jpg"
            alt="Ugandan landscape and craftsmanship"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
