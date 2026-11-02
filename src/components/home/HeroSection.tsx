"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero/hero-bg.jpeg",
    imageAlt: "Students learning at Islah Academy",
    eyebrow: "Islah Foundation • Kishanganj, Bihar",
    headline: "Quality Education, Guidance and Tarbiyah for Students in Villages",
    supporting:
      "Through Islah Academy, we provide students from nearby village communities with a structured learning environment for academics, supervised study, mentoring and character development.",
    primaryBtn: {
      label: "Explore Our Work",
      href: "/what-we-do",
    },
    secondaryBtn: {
      label: "Support Our Work",
      href: "/join-us/donate",
    },
  },

  {
    image: "/images/hero/hero-bg-02.png",
    imageAlt: "Students studying together at Islah Academy",
    eyebrow: "Islah Academy — A Unit of Islah Foundation",
    headline: "A Better Learning Environment Without Leaving Home",
    supporting:
      "Students spend the day at Islah Academy for classes, self-study, academic monitoring and guidance, while continuing to live and eat with their families.",
    primaryBtn: {
      label: "Discover Islah Academy",
      href: "/what-we-do/education",
    },
    secondaryBtn: {
      label: "Get Involved",
      href: "/join-us",
    },
  },

  {
    image: "/images/hero/hero-bg-03.png",
    imageAlt: "Students attending learning and mentoring activities at Islah Academy",
    eyebrow: "Education • Tarbiyah • Opportunity",
    headline: "Learning Beyond the Classroom",
    supporting:
      "Along with academics, students receive Tarbiyah, mentoring, online learning, career exposure and guidance to help them prepare for future educational opportunities.",
    primaryBtn: {
      label: "Our Approach",
      href: "/who-we-are/vision-mission-values",
    },
    secondaryBtn: {
      label: "Become a Volunteer",
      href: "/join-us/volunteer",
    },
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () =>
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  const showPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
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
      {/* Slide Background Images */}
      {slides.map((slide, idx) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.imageAlt}
          fill
          sizes="100vw"
          priority={idx === 0}
          aria-hidden={idx !== currentSlide}
          className={cn(
            "z-0 object-cover object-center mix-blend-luminosity transition-opacity duration-1000 motion-reduce:transition-none",
            idx === currentSlide
              ? "opacity-30"
              : "opacity-0"
          )}
        />
      ))}

      {/* Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 pb-28 pt-10 sm:pb-24 sm:pt-14 md:pt-20">
        <div className="relative min-h-[500px] max-w-3xl sm:min-h-[430px] md:min-h-[470px]">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={cn(
                "absolute inset-x-0 top-0 w-full max-w-3xl transition-all duration-700 motion-reduce:transition-none",
                idx === currentSlide
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-6 opacity-0"
              )}
              aria-hidden={idx !== currentSlide}
            >
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-brand-gold sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
                <span className="block h-px w-6 shrink-0 bg-brand-gold sm:w-8" />
                {slide.eyebrow}
              </div>

              {/* Headline */}
              <h1 className="mb-5 max-w-[18ch] font-serif text-[2.35rem] leading-[1.06] min-[390px]:text-[2.7rem] sm:mb-7 sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.headline}
              </h1>

              {/* Supporting Text */}
              <p className="mb-7 max-w-2xl text-[15px] leading-7 text-brand-sage sm:mb-9 sm:text-lg md:text-xl">
                {slide.supporting}
              </p>

              {/* Buttons */}
              <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href={slide.primaryBtn.href}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-gold px-5 text-center text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#a6822c] sm:px-7 sm:text-xs"
                >
                  {slide.primaryBtn.label}
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href={slide.secondaryBtn.href}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-transparent px-5 text-center text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10 sm:px-7 sm:text-xs"
                >
                  <Heart size={16} />
                  {slide.secondaryBtn.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicator & Controls */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/15 backdrop-blur-sm">
        <div className="container mx-auto flex min-h-[76px] items-center justify-between gap-3 px-3 sm:px-4">

          {/* Trust Line */}
          <div className="min-w-0 text-[10px] font-medium leading-relaxed tracking-wide text-brand-sage sm:text-xs">
            <span className="hidden md:inline">
              Educational work since 2024
              <span className="mx-3 text-brand-gold">
                •
              </span>
            </span>

            <span>
              Registered Public Charitable Trust since 2026
            </span>
          </div>

          {/* Carousel Controls */}
          <div
            className="flex shrink-0 items-center gap-1"
            aria-label="Carousel controls"
          >
            <button
              type="button"
              onClick={showPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label="Previous highlight"
            >
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />
            </button>

            <span
              className="min-w-[42px] text-center text-xs font-bold tabular-nums text-white"
              aria-live="polite"
            >
              {currentSlide + 1} / {slides.length}
            </span>

            <button
              type="button"
              onClick={showNext}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label="Next highlight"
            >
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                setIsPaused((paused) => !paused)
              }
              className="hidden h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold min-[390px]:flex"
              aria-label={
                isPaused
                  ? "Play highlights"
                  : "Pause highlights"
              }
              aria-pressed={isPaused}
            >
              {isPaused ? (
                <Play
                  size={17}
                  aria-hidden="true"
                />
              ) : (
                <Pause
                  size={17}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}