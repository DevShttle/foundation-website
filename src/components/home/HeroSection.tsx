"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const slides = [
  {
    eyebrow: "Islah Foundation | Kishanganj, Bihar",
    headline: "Education with knowledge, character and purpose",
    supporting: "We help underserved students access quality education, mentoring, essential learning resources and values-based development.",
    primaryBtn: { label: "Explore Our Work", href: "/what-we-do" },
    secondaryBtn: { label: "Support a Student", href: "/join-us/donate" },
  },
  {
    eyebrow: "Our Belief",
    headline: "Opportunity should not depend on a child's circumstances",
    supporting: "We work with students, families, teachers and volunteers to reduce educational barriers and build lasting confidence.",
    primaryBtn: { label: "Our Education Programmes", href: "/what-we-do/education" },
    secondaryBtn: { label: "Become a Volunteer", href: "/join-us/volunteer" },
  },
  {
    eyebrow: "Our Inspiration",
    headline: "Guided by faith. Committed to everyone.",
    supporting: "Our service is inspired by knowledge, compassion, justice, dignity and amanah, and is delivered without discrimination.",
    primaryBtn: { label: "Our Values", href: "/who-we-are/vision-mission-values" },
    secondaryBtn: { label: "Partner With Us", href: "/join-us/partner-with-us" },
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-brand-green text-white min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/images/hero/hero-bg.jpeg" 
        alt="Islah Foundation Work" 
        fill 
        className="object-cover z-0 opacity-30 mix-blend-luminosity" 
        priority
      />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          {slides.map((slide, idx) => (
            <div 
              key={idx}
              className={cn(
                "transition-all duration-1000 absolute top-1/2 -translate-y-1/2 w-full max-w-3xl",
                idx === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
              )}
            >
              <div className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold block" />
                {slide.eyebrow}
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
                {slide.headline}
              </h1>
              <p className="text-lg md:text-xl text-brand-sage leading-relaxed max-w-2xl mb-10">
                {slide.supporting}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Link href={slide.primaryBtn.href} className="bg-brand-gold text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-[#a6822c] transition-colors flex items-center gap-2">
                  {slide.primaryBtn.label} <ArrowRight size={16} />
                </Link>
                <Link href={slide.secondaryBtn.href} className="bg-transparent border border-white/30 text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Heart size={16} /> {slide.secondaryBtn.label}
                </Link>
              </div>
            </div>
          ))}
          
          {/* Invisible placeholder to maintain height */}
          <div className="opacity-0 pointer-events-none">
             <div className="text-xs mb-6">Placeholder</div>
             <h1 className="text-7xl mb-8">Education with knowledge, character and purpose</h1>
             <p className="text-xl mb-10">We help underserved students access quality education, mentoring, essential learning resources and values-based development.</p>
             <div className="h-12"></div>
          </div>
        </div>
      </div>

      {/* Trust Indicator & Controls */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs text-brand-sage font-medium tracking-wide">
            <span className="hidden md:block">Community initiative since 2024</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-brand-gold" />
            <span>Registered Public Charitable Trust since 2026</span>
          </div>
          
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={cn(
                  "w-12 h-1 rounded-full transition-all",
                  idx === currentSlide ? "bg-brand-gold" : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
