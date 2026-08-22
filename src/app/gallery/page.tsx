"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function GalleryPage() {
  const allImages = [
    { title: "Digital Awareness Drama", category: "Education", src: "/images/gallery/1.jpg" },
    { title: "Student Recognition", category: "Awards", src: "/images/gallery/2.jpg" },
    { title: "Foundation Day Medals", category: "Community", src: "/images/gallery/3.png" },
    { title: "Honoring Participants", category: "Celebration", src: "/images/gallery/4.png" },
    { title: "Event Gathering", category: "Community", src: "/images/gallery/5.png" },
    { title: "Prize Distribution", category: "Awards", src: "/images/gallery/6.jpg" },
    { title: "Group Photo", category: "Celebration", src: "/images/gallery/9.jpg" },
    { title: "Ceremony", category: "Community", src: "/images/gallery/10.jpg" }
  ];

  return (
    <div className="bg-[#fbf8f1] min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-news.png" alt="Gallery" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Photo Gallery
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Glimpses of our work
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Visual stories from our events, programmes, and community interactions across Kishanganj.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-green transition-colors">
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allImages.map((img, idx) => (
            <div key={idx} className="bg-white rounded-xl relative overflow-hidden group shadow-sm border border-brand-sage/50 h-64">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[9px] uppercase tracking-widest font-bold text-white bg-brand-green/80 px-2 py-1 rounded mb-2 inline-block backdrop-blur-sm">
                  {img.category}
                </span>
                <h4 className="font-serif text-lg text-white">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="block sm:hidden -mx-4 pb-8">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="w-full h-[350px] !pb-12"
          >
            {allImages.map((img, idx) => (
              <SwiperSlide 
                key={idx} 
                className="!w-[85%] !h-[280px] bg-brand-sage rounded-xl relative overflow-hidden cursor-pointer" 
              >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-70 z-10" />
                  <div className="absolute bottom-6 left-6 z-20 transition-all duration-300">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-white bg-brand-green/80 px-2 py-1 rounded mb-2 inline-block backdrop-blur-sm">
                      {img.category}
                    </span>
                    <h4 className="font-serif text-xl text-white">{img.title}</h4>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
