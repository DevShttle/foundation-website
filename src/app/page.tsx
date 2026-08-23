"use client";
import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickNav } from "@/components/home/QuickNav";
import Image from "next/image";
import { IntroSection } from "@/components/home/IntroSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { AreasOfWork } from "@/components/home/AreasOfWork";
import { FeaturedProgramme } from "@/components/home/FeaturedProgramme";
import { ImpactSection } from "@/components/home/ImpactSection";
import { PathwaySection } from "@/components/home/PathwaySection";
import { VolunteerCTA } from "@/components/home/VolunteerCTA";
import { StoriesSection } from "@/components/home/StoriesSection";
import { MapSection } from "@/components/home/MapSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { GallerySection } from "@/components/home/GallerySection";
import { UpdatesSection } from "@/components/home/UpdatesSection";
import { TransparencySection } from "@/components/home/TransparencySection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FinalCTA } from "@/components/home/FinalCTA";

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

      <ImpactSection />

      <VolunteerCTA />

      <StoriesSection />
      <MapSection />
      <TestimonialsSection />
      <PartnersSection />
      <GallerySection />
      <UpdatesSection />
      <TransparencySection />
      <NewsletterSection />
      <FinalCTA />
    </>
  );
}
