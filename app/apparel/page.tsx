import type { Metadata } from "next";
import CollectionLanding, { type CollectionLandingConfig } from "@/components/commerce/CollectionLanding";
import type { CollectionSearchParams } from "@/components/commerce/CollectionPage";

export const metadata: Metadata = {
  title: "Ugandan-Inspired Apparel | Continental Love",
  description: "Discover Continental Love apparel shaped by identity, thoughtful design, and everyday connection to Uganda.",
};

const apparelConfig: CollectionLandingConfig = {
  handle: "apparel",
  eyebrow: "Identity · Design · Everyday wear",
  title: "Wear the culture.",
  heroCopy: "Purposeful apparel carrying Continental Love's Ugandan identity into everyday life.",
  heroImage: "/images/apparel/apparel-hero-lifestyle.jpg",
  heroAlt: "Models wearing Continental Love apparel in the Ugandan highlands",
  heroPosition: "center 30%",
  introEyebrow: "Designed with meaning",
  introTitle: "Clothing that carries a connection.",
  introCopy: "Continental Love apparel pairs a restrained wardrobe with a visible sense of identity. Each piece is presented around design, feel and the way it fits into daily life—not passing trends.",
  storyEyebrow: "Culture, craft, everyday wear",
  storyTitle: "Meaning lives in the details.",
  storyCopy: "From graphic placement and fabric texture to the final presentation, the collection is designed as a coherent expression of Continental Love: grounded, useful and recognizably connected to Uganda.",
  storyImage: "/images/apparel/apparel-hanging-collection.jpg",
  storyAlt: "A coordinated range of Continental Love garments",
  storyPosition: "center",
  storyHref: "/story",
  storyLinkLabel: "Read our story",
  values: [
    { title: "Design", copy: "Purposeful graphics, restrained color and a clear visual identity." },
    { title: "Material", copy: "Attention to feel, finish and how each garment is presented." },
    { title: "Detail", copy: "A considered experience from garment styling to packaging." },
  ],
  relatedTitle: "Carry the story further.",
  relatedLinks: [
    { label: "Explore Jewelry", href: "/jewelry", primary: true },
    { label: "Our Story", href: "/story" },
  ],
};

export default function ApparelPage({ searchParams }: { searchParams: CollectionSearchParams }) {
  return <CollectionLanding config={apparelConfig} searchParams={searchParams} />;
}
