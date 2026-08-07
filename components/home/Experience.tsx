// components/home/Experience.tsx

import Image from "next/image";

export default function Experience() {
  return (
    <section className="px-6 py-28 sm:px-12 lg:py-40">
      <div className="mx-auto mb-16 max-w-[1600px] text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--forest-green)]">
          The Connection
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">
          Two countries. One continental love.
        </h2>
      </div>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 sm:grid-cols-2">
        {/* Uganda */}
        <div className="relative">
          <div className="relative aspect-[4/5] sm:aspect-auto sm:h-[640px]">
            <Image
              src="/images/experience/uganda.jpg"
              alt="Uganda"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="px-2 py-8 text-center sm:px-10">
            <h3 className="text-xl sm:text-2xl">Uganda</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[var(--charcoal)]/70">
              Origin. The soil, the farms, the hands that begin every piece
              we carry.
            </p>
          </div>
        </div>

        {/* Divider — hidden on mobile, visible from sm up */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--heritage-gold)]/40 sm:block" />

        {/* Italy */}
        <div className="relative">
          <div className="relative aspect-[4/5] sm:aspect-auto sm:h-[640px]">
            <Image
              src="/images/experience/italy.jpg"
              alt="Italy"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="px-2 py-8 text-center sm:px-10">
            <h3 className="text-xl sm:text-2xl">Italy</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[var(--charcoal)]/70">
              Destination. Where the story continues &mdash; on the table,
              in the wardrobe, in daily life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
