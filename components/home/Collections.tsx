// components/home/Collections.tsx

import Image from "next/image";
import Link from "next/link";

type Collection = {
  name: string;
  tagline: string;
  href: string;
  image: string;
  span: "wide" | "narrow";
};

const collections: Collection[] = [
  {
    name: "Coffee",
    tagline: "Uganda's finest origins, roasted for Italy's table.",
    href: "/coffee",
    image: "/images/collections/coffee.jpg",
    span: "wide",
  },
  {
    name: "Apparel",
    tagline: "Modern Ugandan fashion, quietly worn.",
    href: "/apparel",
    image: "/images/collections/apparel.jpg",
    span: "narrow",
  },
  {
    name: "Jewelry",
    tagline: "Crafted stories in every piece.",
    href: "/jewelry",
    image: "/images/collections/jewelry.jpg",
    span: "narrow",
  },
  {
    name: "Discover Uganda",
    tagline: "The landscapes, people, and journeys behind every collection.",
    href: "/discover-uganda",
    image: "/images/collections/travel.jpg",
    span: "wide",
  },
];

export default function Collections() {
  return (
    <section className="px-6 py-28 sm:px-12 lg:py-40">
      <div className="mx-auto mb-16 max-w-[1600px] text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--forest-green)]">
          The Collections
        </p>
        <h2 className="text-3xl sm:text-4xl">Four crafts. One origin.</h2>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 sm:grid-cols-2">
        {collections.map((c) => (
          <Link
            key={c.name}
            href={c.href}
            className={`group relative block overflow-hidden ${
              c.span === "wide" ? "sm:col-span-2" : "sm:col-span-1"
            }`}
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[var(--charcoal)]/20 transition-opacity duration-500 group-hover:bg-[var(--charcoal)]/10" />
            </div>

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <h3 className="text-2xl text-[var(--warm-ivory)] sm:text-3xl">
                {c.name}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-[var(--warm-ivory)]/85">
                {c.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
