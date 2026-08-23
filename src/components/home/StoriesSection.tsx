"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpenText, ChevronLeft, ChevronRight } from "lucide-react";
import { stories } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function StoriesSection() {
  return (
    <section className="py-12 lg:py-16 bg-[#fbf8f1] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
              Stories of Change
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green mb-3">
              Real progress from the ground up
            </h2>
          </div>
          <Link
            href="/impact/stories"
            className="bg-brand-sage/50 text-brand-green px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-sage transition-colors inline-flex items-center gap-2"
          >
            View All Stories <ArrowRight size={16} />
          </Link>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-[0_5px_20px_rgba(12,91,72,0.04)] border border-gray-100 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_15px_35px_rgba(12,91,72,0.08)] hover:-translate-y-1"
            >
              <div className="h-56 bg-brand-sage/60 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-transparent transition-colors z-10" />
                <BookOpenText size={40} className="text-brand-green/30" />
                <span className="absolute bottom-4 left-4 z-20 bg-white/90 text-brand-green text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm">
                  {story.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-[11px] text-gray-500 font-semibold mb-3">{story.date}</span>
                <h3 className="font-serif text-2xl text-brand-green mb-4 leading-snug group-hover:text-brand-clay transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">
                  {story.summary}
                </p>
                <Link
                  href={`/impact/stories/${story.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors mt-auto"
                >
                  Read Story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: 3D Coverflow Swappable Carousel */}
        <div className="block md:hidden relative px-2 overflow-hidden max-w-full">
          
          {/* Controls */}
          <button
            aria-label="Previous Story"
            className="stories-prev absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 shadow-md border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            aria-label="Next Story"
            className="stories-next absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 shadow-md border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={0}
            loop={true}
            slidesPerView={1.25}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true, el: ".stories-pagination" }}
            navigation={{ prevEl: ".stories-prev", nextEl: ".stories-next" }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-8 overflow-hidden"
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id} className="transition-all duration-500 py-2">
                {({ isActive }) => (
                  <div
                    className={cn(
                      "bg-white rounded-2xl border transition-all duration-500 overflow-hidden flex flex-col mx-auto max-w-xs select-none",
                      isActive
                        ? "scale-100 opacity-100 shadow-2xl border-brand-green/40 ring-4 ring-brand-green/10 z-30 filter-none"
                        : "scale-85 opacity-40 blur-[2px] shadow-sm border-gray-200 z-10 grayscale-[20%]"
                    )}
                  >
                    <div className="h-44 bg-brand-sage/60 relative flex items-center justify-center overflow-hidden">
                      <BookOpenText size={36} className="text-brand-green/30" />
                      <span className="absolute bottom-3 left-3 bg-white/90 text-brand-green text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                        {story.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[10px] text-gray-400 font-semibold mb-2">{story.date}</span>
                      <h3 className="font-serif text-xl text-brand-green mb-3 leading-snug font-bold">
                        {story.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                        {story.summary}
                      </p>
                      <Link
                        href={`/impact/stories/${story.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors mt-auto"
                      >
                        Read Story <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="stories-pagination flex justify-center gap-2 mt-4" />
        </div>

      </div>
    </section>
  );
}
