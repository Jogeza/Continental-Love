import type { Metadata } from "next";
import CollectionLanding, { type CollectionLandingConfig } from "@/components/commerce/CollectionLanding";
import type { CollectionSearchParams } from "@/components/commerce/CollectionPage";
import {getLocale} from "next-intl/server";
import {localizeCollectionConfig} from "@/lib/collection-locales";
import {createPageMetadata} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> { const locale = await getLocale(); return createPageMetadata({title:"Jewelry | Continental Love",description:"Explore Continental Love cuff, drop-earring, and necklace forms shown in the jewelry catalog preview.",path:"/jewelry",image:"/images/jewelry/jewelry-hero-lifestyle.jpg",locale}); }

const jewelryConfig: CollectionLandingConfig = {
  handle: "jewelry",
  eyebrow: "Brass forms · Cuffs · Drop earrings",
  title: "Sculptural forms, worn close.",
  heroCopy: "Hammered gold-tone cuffs, drop earrings, rings, and pendant forms presented in studio and lifestyle portraits.",
  heroImage: "/images/jewelry/jewelry-hero-lifestyle.jpg",
  heroAlt: "Portrait highlighting warm gold jewelry and Continental Love styling",
  heroPosition: "center 35%",
  introEyebrow: "Carry the story",
  introTitle: "A small collection of strong, simple forms.",
  introCopy: "The current catalog includes a sculptural cuff and drop earrings, supported by imagery of coordinating rings, pendants, and necklaces. Dimensions, metal composition, plating, and maker details require confirmation.",
  storyEyebrow: "Heritage in the details",
  storyTitle: "Small details can hold deep meaning.",
  storyCopy: "Hammered surfaces, oversized curves, and warm metal tones define the visible collection. The product pages avoid claiming a specific artisan process until supplier documentation is available.",
  storyImage: "/images/jewelry/jewelry-studio-portrait.jpg",
  storyAlt: "Portrait styled with Continental Love jewelry",
  storyPosition: "center 30%",
  storyHref: "/discover-uganda",
  storyLinkLabel: "Discover Uganda",
  values: [
    { title: "Forms", copy: "Cuffs, drops, rings, and pendant silhouettes with broad curves and hammered surfaces." },
    { title: "Catalog preview", copy: "A cuff and drop earrings shown as design fixtures without live price or availability." },
    { title: "Specifications", copy: "Alloy, plating, dimensions, weight, maker, and care guidance will be published after verification." },
  ],
  relatedTitle: "Explore the wider collection.",
  relatedLinks: [
    { label: "Explore Apparel", href: "/apparel", primary: true },
    { label: "Discover Uganda", href: "/discover-uganda" },
  ],
};

export default async function JewelryPage({ searchParams }: { searchParams: CollectionSearchParams }) {
  const locale = await getLocale();
  return <CollectionLanding config={localizeCollectionConfig(jewelryConfig, locale)} searchParams={searchParams} />;
}
