import type { Metadata } from "next";
import CollectionLanding, { type CollectionLandingConfig } from "@/components/commerce/CollectionLanding";
import type { CollectionSearchParams } from "@/components/commerce/CollectionPage";
import {getLocale} from "next-intl/server";
import {localizeCollectionConfig} from "@/lib/collection-locales";
import {createPageMetadata} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> { const locale = await getLocale(); return createPageMetadata({title:"Apparel | Continental Love",description:"Explore Continental Love graphic T-shirts and an olive layering hoodie in the catalog preview.",path:"/apparel",image:"/images/apparel/apparel-hero-lifestyle.jpg",locale}); }

const apparelConfig: CollectionLandingConfig = {
  handle: "apparel",
  eyebrow: "Graphic tees · Hoodies · Everyday wear",
  title: "Wear the culture.",
  heroCopy: "Graphic T-shirts and an olive hoodie carrying the Continental Love wordmark and monogram into everyday wear.",
  heroImage: "/images/apparel/apparel-hero-lifestyle.jpg",
  heroAlt: "Models wearing Continental Love apparel in the Ugandan highlands",
  heroPosition: "center 30%",
  introEyebrow: "Designed with meaning",
  introTitle: "A focused wardrobe built around the brand mark.",
  introCopy: "The current edit centers on black and white graphic T-shirts, an olive hoodie, and coordinated caps. Product pages show the available colors, sizes, and stock status.",
  storyEyebrow: "Culture, craft, everyday wear",
  storyTitle: "Meaning lives in the details.",
  storyCopy: "The collection repeats a restrained palette and Continental Love graphics across T-shirts, hoodies, caps, and packaging. Material composition and factory-of-origin details still require confirmation before publication.",
  storyImage: "/images/apparel/apparel-hanging-collection.jpg",
  storyAlt: "A coordinated range of Continental Love garments",
  storyPosition: "center",
  storyHref: "/story",
  storyLinkLabel: "Read our story",
  values: [
    { title: "Graphic system", copy: "Wordmark and monogram placements across black, white, cream, brown, and olive garments." },
    { title: "Current range", copy: "T-shirts, hoodies, polos, jackets, and caps shown in studio and lifestyle imagery." },
    { title: "Material details", copy: "Fiber composition, garment weight, production country, and care instructions will be published after supplier documentation is verified." },
  ],
  relatedTitle: "Carry the story further.",
  relatedLinks: [
    { label: "Explore Jewelry", href: "/jewelry", primary: true },
    { label: "Our Story", href: "/story" },
  ],
};

export default async function ApparelPage({ searchParams }: { searchParams: CollectionSearchParams }) {
  const locale = await getLocale();
  return <CollectionLanding config={localizeCollectionConfig(apparelConfig, locale)} searchParams={searchParams} />;
}
