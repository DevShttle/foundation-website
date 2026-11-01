"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const slides = [
  {
    eyebrow: "Islah Foundation, Kishanganj, Bihar",
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
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  const showPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative min-h-[650px] overflow-hidden bg-brand-green text-white sm:min-h-[590px] md:min-h-[650px] lg:min-h-[700px]"
      aria-roledescription="carousel"
      aria-label="Islah Foundation highlights"
    >
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
      
      <div className="container relative z-10 mx-auto px-4 pb-28 pt-10 sm:pb-24 sm:pt-14 md:pt-20">
        <div className="relative min-h-[500px] max-w-3xl sm:min-h-[430px] md:min-h-[470px]">
          {slides.map((slide, idx) => (
            <div 
              key={idx}
              className={cn(
                "absolute inset-x-0 top-0 w-full max-w-3xl transition-all duration-700 motion-reduce:transition-none",
                idx === currentSlide ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"
              )}
              aria-hidden={idx !== currentSlide}
            >
              <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-brand-gold sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
                <span className="block h-px w-6 shrink-0 bg-brand-gold sm:w-8" />
                {slide.eyebrow}
              </div>
              <h1 className="mb-5 max-w-[18ch] font-serif text-[2.35rem] leading-[1.06] min-[390px]:text-[2.7rem] sm:mb-7 sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.headline}
              </h1>
              <p className="mb-7 max-w-2xl text-[15px] leading-7 text-brand-sage sm:mb-9 sm:text-lg md:text-xl">
                {slide.supporting}
              </p>
              <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
                <Link href={slide.primaryBtn.href} className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-gold px-5 text-center text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#a6822c] sm:px-7 sm:text-xs">
                  {slide.primaryBtn.label} <ArrowRight size={16} />
                </Link>
                <Link href={slide.secondaryBtn.href} className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-transparent px-5 text-center text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10 sm:px-7 sm:text-xs">
                  <Heart size={16} /> {slide.secondaryBtn.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicator & Controls */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/15 backdrop-blur-sm">
        <div className="container mx-auto flex min-h-[76px] items-center justify-between gap-3 px-3 sm:px-4">
          <div className="min-w-0 text-[10px] font-medium leading-relaxed tracking-wide text-brand-sage sm:text-xs">
            <span className="hidden md:inline">Community initiative since 2024 <span className="mx-3 text-brand-gold">•</span> </span>
            <span>Registered Trust since 2026</span>
          </div>

          <div className="flex shrink-0 items-center gap-1" aria-label="Carousel controls">
            <button type="button" onClick={showPrevious} className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold" aria-label="Previous highlight">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <span className="min-w-[42px] text-center text-xs font-bold tabular-nums text-white" aria-live="polite">
              {currentSlide + 1} / {slides.length}
            </span>
            <button type="button" onClick={showNext} className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold" aria-label="Next highlight">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="hidden h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold min-[390px]:flex"
              aria-label={isPaused ? "Play highlights" : "Pause highlights"}
              aria-pressed={isPaused}
            >
              {isPaused ? <Play size={17} aria-hidden="true" /> : <Pause size={17} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
