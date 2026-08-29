import type { Metadata } from "next";
import CollectionLanding, { type CollectionLandingConfig } from "@/components/commerce/CollectionLanding";
import type { CollectionSearchParams } from "@/components/commerce/CollectionPage";

export const metadata: Metadata = {
  title: "Ugandan Coffee | Continental Love",
  description: "Explore Continental Love coffee rooted in Ugandan origin, careful presentation, and a connection from source to cup.",
};

const coffeeConfig: CollectionLandingConfig = {
  handle: "coffee",
  eyebrow: "Ugandan coffee · Rooted in origin",
  title: "From Uganda. To your cup.",
  heroCopy: "Coffee shaped by place, farming and craft—presented to carry Uganda's character beyond its borders.",
  heroImage: "/images/coffee/coffee-hero-origin.png",
  heroAlt: "Coffee grower tending ripe coffee cherries in the Ugandan highlands",
  heroPosition: "center",
  introEyebrow: "A journey from source",
  introTitle: "Origin is where flavor begins.",
  introCopy: "Our coffee collection puts Uganda first: its landscapes, its growing culture, and the patient work behind every cup. We present that origin clearly, without separating the product from the place that shaped it.",
  storyEyebrow: "From the farm to the cup",
  storyTitle: "A story carried in every pour.",
  storyCopy: "Coffee connects land, time and everyday ritual. Continental Love brings those connections together through Ugandan origin, considered presentation, and a product made to be shared internationally.",
  storyImage: "/images/coffee/coffee-pouring.png",
  storyAlt: "Continental Love coffee being enjoyed as part of an everyday ritual",
  storyPosition: "center 35%",
  storyHref: "/discover-uganda",
  storyLinkLabel: "Discover the origin",
  values: [
    { title: "Origin", copy: "Ugandan character and provenance remain central to the collection." },
    { title: "Craft", copy: "Careful preparation, product detail and presentation from bag to cup." },
    { title: "Connection", copy: "A daily ritual carrying Uganda into homes beyond its borders." },
  ],
  relatedTitle: "Continue the journey.",
  relatedLinks: [
    { label: "Explore Apparel", href: "/apparel", primary: true },
    { label: "Discover Uganda", href: "/discover-uganda" },
  ],
};

export default function CoffeePage({ searchParams }: { searchParams: CollectionSearchParams }) {
  return <CollectionLanding config={coffeeConfig} searchParams={searchParams} />;
}
