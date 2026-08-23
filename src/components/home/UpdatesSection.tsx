"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { updates } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function UpdatesSection() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
              Latest Updates
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green mb-3">
              News and active notices
            </h2>
          </div>
          <Link
            href="/news-resources"
            className="bg-brand-sage/50 text-brand-green px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-sage transition-colors inline-flex items-center gap-2"
          >
            View All Updates <ArrowRight size={16} />
          </Link>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {updates.slice(0, 3).map((update) => (
            <div key={update.id} className="bg-brand-ivory/50 rounded-2xl border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all p-6">
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest mb-3">
                <span className="text-brand-clay">{update.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-gray-500 flex items-center gap-1.5"><Calendar size={12}/> {update.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-brand-green mb-3 leading-snug group-hover:text-brand-clay transition-colors">
                <Link href={`/news-resources/${update.slug}`}>{update.title}</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                {update.summary}
              </p>
              <Link href={`/news-resources/${update.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors mt-auto w-fit">
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile View: 3D Coverflow Swappable Carousel */}
        <div className="block md:hidden relative px-2">
          
          {/* Controls */}
          <button
            aria-label="Previous Update"
            className="updates-prev absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 shadow-md border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            aria-label="Next Update"
            className="updates-next absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 shadow-md border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-sm"
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
            pagination={{ clickable: true, el: ".updates-pagination" }}
            navigation={{ prevEl: ".updates-prev", nextEl: ".updates-next" }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-8 !overflow-visible"
          >
            {updates.slice(0, 5).map((update) => (
              <SwiperSlide key={update.id} className="transition-all duration-500 py-2">
                {({ isActive }) => (
                  <div
                    className={cn(
                      "bg-brand-ivory/80 rounded-2xl border transition-all duration-500 overflow-hidden flex flex-col p-6 mx-auto max-w-xs select-none",
                      isActive
                        ? "scale-100 opacity-100 shadow-2xl border-brand-green/40 ring-4 ring-brand-green/10 z-30 filter-none"
                        : "scale-85 opacity-40 blur-[2px] shadow-sm border-gray-200 z-10 grayscale-[20%]"
                    )}
                  >
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest mb-3">
                      <span className="text-brand-clay bg-brand-sage/50 px-2 py-0.5 rounded">{update.category}</span>
                      <span className="text-gray-500 flex items-center gap-1"><Calendar size={11}/> {update.date}</span>
                    </div>
                    <h3 className="font-serif text-xl text-brand-green mb-3 leading-snug font-bold">
                      <Link href={`/news-resources/${update.slug}`}>{update.title}</Link>
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                      {update.summary}
                    </p>
                    <Link
                      href={`/news-resources/${update.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors mt-auto"
                    >
                      Read More <ArrowRight size={13} />
                    </Link>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="updates-pagination flex justify-center gap-2 mt-4" />
        </div>

      </div>
    </section>
  );
}
