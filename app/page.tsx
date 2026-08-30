import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import Collections from "@/components/home/Collections";
import Experience from "@/components/home/Experience";
import SocialProof from "@/components/home/SocialProof";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <BrandStory />
      <SocialProof />
      <Experience />
    </main>
  );
}
