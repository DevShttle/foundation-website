import { HeroSection } from "@/components/home/HeroSection";
import { QuickNav } from "@/components/home/QuickNav";
import { IntroSection } from "@/components/home/IntroSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { AreasOfWork } from "@/components/home/AreasOfWork";
import { FeaturedProgramme } from "@/components/home/FeaturedProgramme";
import { PathwaySection } from "@/components/home/PathwaySection";
import { VolunteerCTA } from "@/components/home/VolunteerCTA";
import { MapSection } from "@/components/home/MapSection";
import { TransparencySection } from "@/components/home/TransparencySection";
import { FinalCTA } from "@/components/home/FinalCTA";
import {
  DeferredGallerySection,
  DeferredImpactSection,
  DeferredNewsletterSection,
  DeferredStoriesSection,
  DeferredTestimonialsSection,
  DeferredUpdatesSection,
} from "@/components/home/DeferredHomeSections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickNav />
      <IntroSection />
      <ValuesSection />
      <AreasOfWork />

      <FeaturedProgramme />

      <PathwaySection />

      <DeferredImpactSection />

      <VolunteerCTA />

      <DeferredStoriesSection />
      <MapSection />
      <DeferredTestimonialsSection />
      <DeferredGallerySection />
      <DeferredUpdatesSection />
      <TransparencySection />
      <DeferredNewsletterSection />
      <FinalCTA />
    </>
  );
}
