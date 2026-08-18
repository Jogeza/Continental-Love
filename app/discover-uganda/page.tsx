import Image from "next/image";

export const metadata = {
  title: "Discover Uganda — Continental Love",
  description:
    "From volcanic soils that produce exceptional coffee to the craftsmanship behind natural charcoal — Continental Love connects Uganda's heritage with Italy's elegance.",
};

export default function DiscoverUgandaPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-[1600px] px-6 py-16 sm:px-12 lg:py-24">
        <span className="font-sans text-xs tracking-[0.25em] text-[#1C1C1C]/65 uppercase">
          Travel
        </span>
        <h1 className="mt-3 font-serif text-4xl text-[#1C1C1C] sm:text-5xl">
          Discover Uganda
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1C1C1C]/70 sm:text-lg">
          From the rich volcanic soils that produce exceptional coffee to
          the craftsmanship behind our natural charcoal, Continental Love
          connects Uganda&rsquo;s heritage with the elegance of Italy.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFEAE0]">
            <Image
              src="/images/experience/uganda.jpg"
              alt="Uganda landscape"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFEAE0]">
            <Image
              src="/images/experience/italy.jpg"
              alt="Italy experience"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}