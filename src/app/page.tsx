"use client";
import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickNav } from "@/components/home/QuickNav";
import Image from "next/image";
import { IntroSection } from "@/components/home/IntroSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { AreasOfWork } from "@/components/home/AreasOfWork";
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

      {/* Featured Programme - Mocked inline for brevity */}
      <section className="py-24 bg-brand-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-sage mb-4 block">Featured Programme</span>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Islah Learning Support Programme</h2>
              <p className="text-brand-sage leading-relaxed mb-8">
                Addressing educational gaps by providing after-school academic support and essential learning resources to underserved students.
              </p>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/20 pt-8 mb-8">
                <div>
                  <dt className="text-[9px] uppercase text-[#9bb8ae] tracking-widest mb-1">Target</dt>
                  <dd className="text-sm font-semibold">Grades 5-10</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase text-[#9bb8ae] tracking-widest mb-1">Location</dt>
                  <dd className="text-sm font-semibold">Chandergaon</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase text-[#9bb8ae] tracking-widest mb-1">Status</dt>
                  <dd className="text-sm font-semibold text-brand-gold">Active</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase text-[#9bb8ae] tracking-widest mb-1">Support needed</dt>
                  <dd className="text-sm font-semibold">Teachers, Learning Kits</dd>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="/what-we-do/education" className="bg-brand-gold text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#a6822c] transition-colors">
                  View Programme
                </a>
              </div>
            </div>

            <div className="bg-[#d9c388] rounded-tl-[200px] rounded-tr-[200px] rounded-bl-lg rounded-br-lg p-8 lg:p-16 h-[500px] flex flex-col justify-center items-center text-center">
              <div className="bg-brand-ivory p-3 shadow-2xl rotate-3 w-full h-full relative overflow-hidden">
                <Image
                  src="/images/programmes/featured.png"
                  alt="Featured Programme"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactSection />

      <PathwaySection />

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
