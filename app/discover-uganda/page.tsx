import Image from "next/image";

export default function DiscoverUgandaPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-display text-5xl">
          Discover Uganda
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          From the rich volcanic soils that produce exceptional
          coffee to the craftsmanship behind our natural charcoal,
          Continental Love connects Uganda's heritage with the
          elegance of Italy.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Image
            src="/images/experience/uganda.jpg"
            alt="Uganda landscape"
            width={800}
            height={600}
            className="rounded-lg object-cover"
          />

          <Image
            src="/images/experience/italy.jpg"
            alt="Italy experience"
            width={800}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}