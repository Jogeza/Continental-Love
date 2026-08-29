import type { Metadata } from "next";
import CollectionLanding, { type CollectionLandingConfig } from "@/components/commerce/CollectionLanding";
import type { CollectionSearchParams } from "@/components/commerce/CollectionPage";

export const metadata: Metadata = {
  title: "Meaningful Jewelry | Continental Love",
  description: "Explore Continental Love jewelry inspired by place, identity, warm detail, and meaningful connection.",
};

const jewelryConfig: CollectionLandingConfig = {
  handle: "jewelry",
  eyebrow: "Identity · Detail · Connection",
  title: "Meaning, made wearable.",
  heroCopy: "Jewelry inspired by place, identity and the quiet power of meaningful connection.",
  heroImage: "/images/apparel/apparel-studio-portrait.jpg",
  heroAlt: "Portrait highlighting warm gold jewelry and Continental Love styling",
  heroPosition: "center 22%",
  introEyebrow: "Carry the story",
  introTitle: "Personal pieces with a sense of place.",
  introCopy: "The jewelry collection brings warmth and meaning into a refined, everyday form. Its visual language is grounded in identity and connection, designed to complement rather than overwhelm.",
  storyEyebrow: "Heritage in the details",
  storyTitle: "Small details can hold deep meaning.",
  storyCopy: "Continental Love approaches jewelry as part of a wider story—one where form, symbolism and personal wear create a lasting connection to culture and place.",
  storyImage: "/images/apparel/apparel-model-tshirt-white.jpg",
  storyAlt: "Continental Love styling with warm jewelry details",
  storyPosition: "center 25%",
  storyHref: "/discover-uganda",
  storyLinkLabel: "Discover Uganda",
  values: [
    { title: "Meaning", copy: "Design expressed through identity, symbolism and connection." },
    { title: "Craft", copy: "Attention to form, proportion and the details people notice up close." },
    { title: "Timelessness", copy: "Pieces presented to feel personal and lasting rather than seasonal." },
  ],
  relatedTitle: "Explore the wider collection.",
  relatedLinks: [
    { label: "Explore Apparel", href: "/apparel", primary: true },
    { label: "Discover Uganda", href: "/discover-uganda" },
  ],
};

export default function JewelryPage({ searchParams }: { searchParams: CollectionSearchParams }) {
  return <CollectionLanding config={jewelryConfig} searchParams={searchParams} />;
}
