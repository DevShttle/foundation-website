"use client";

import React from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-brand-ivory overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12 sm:mb-16">
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
          Community Voices
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green mb-4">
          Trusted by the people we serve
        </h2>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-xl shadow-sm border border-brand-sage/50 relative group">
              <Quote size={48} className="text-brand-sage/40 absolute top-8 left-8 -z-0 transition-transform group-hover:scale-110" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-brand-charcoal/80 text-lg leading-relaxed italic mb-8 flex-1 pt-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-sage rounded-full flex items-center justify-center font-serif text-brand-green text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: 3D Coverflow Swappable Carousel */}
        <div className="block md:hidden relative px-2 overflow-hidden max-w-full">
          
          {/* Controls */}
          <button
            aria-label="Previous Testimonial"
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 shadow-md border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            aria-label="Next Testimonial"
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 shadow-md border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={0}
            loop={true}
            slidesPerView={1.2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            navigation={{ prevEl: ".testimonial-prev", nextEl: ".testimonial-next" }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-8 overflow-hidden"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="transition-all duration-500 py-2">
                {({ isActive }) => (
                  <div
                    className={cn(
                      "bg-white p-7 rounded-2xl border transition-all duration-500 relative flex flex-col mx-auto max-w-xs select-none",
                      isActive
                        ? "scale-100 opacity-100 shadow-2xl border-brand-green/40 ring-4 ring-brand-green/10 z-30 filter-none"
                        : "scale-85 opacity-40 blur-[2px] shadow-sm border-brand-sage/40 z-10"
                    )}
                  >
                    <Quote size={36} className="text-brand-sage/50 absolute top-5 left-5 z-0" />
                    <div className="relative z-10 flex flex-col h-full">
                      <p className="text-brand-charcoal/85 text-sm sm:text-base leading-relaxed italic mb-6 flex-1 pt-5">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3 border-t border-brand-sage/30 pt-4 mt-auto">
                        <div className="w-10 h-10 bg-brand-sage rounded-full flex items-center justify-center font-serif text-brand-green text-lg font-bold shrink-0">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-brand-charcoal text-xs sm:text-sm">{testimonial.name}</h4>
                          <p className="text-[10px] text-brand-clay font-semibold uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination flex justify-center gap-2 mt-4" />
        </div>

      </div>
    </section>
  );
}
