"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, X, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  size: string;
  src: string;
}


export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      title: "Digital Awareness Drama",
      category: "Education",
      size: "lg:col-span-2 lg:row-span-2",
      src: "/images/gallery/1.jpg"
    },
    {
      id: 2,
      title: "Student Recognition",
      category: "Awards",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/2.jpg"
    },
    {
      id: 3,
      title: "Foundation Day Medals",
      category: "Community",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/3.png"
    },
    {
      id: 4,
      title: "Honoring Participants",
      category: "Celebration",
      size: "lg:col-span-2 lg:row-span-1",
      src: "/images/gallery/4.png"
    },
    {
      id: 5,
      title: "Event Gathering",
      category: "Community",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/5.png"
    },
    {
      id: 6,
      title: "Prize Distribution",
      category: "Awards",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/6.jpg"
    },
    {
      id: 7,
      title: "Community Workshop",
      category: "Education",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/7.png"
    },
    {
      id: 8,
      title: "Field Work & Outreach",
      category: "Community",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/8.jpeg"
    },
    {
      id: 9,
      title: "Group Photo",
      category: "Celebration",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/9.jpg"
    },
    {
      id: 10,
      title: "Ceremony & Speeches",
      category: "Community",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/10.jpg"
    },
    {
      id: 11,
      title: "Interactive Learning Activity",
      category: "Education",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/11.png"
    },
    {
      id: 12,
      title: "Certificate Presentation",
      category: "Awards",
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/12.jpg"
    }
  ];

  const categories = ["All", "Education", "Awards", "Community", "Celebration"];

  const filteredImages = activeFilter === "All"
    ? images
    : images.filter(img => img.category === activeFilter);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev! === 0 ? filteredImages.length - 1 : prev! - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev! === filteredImages.length - 1 ? 0 : prev! + 1
      );
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  return (
    <section className="py-24 bg-[#fbf8f1] border-t border-gray-100">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
              Photo Gallery
            </span>
            <h2 className="font-serif text-4xl text-brand-green mb-4">
              Glimpses of our work
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveFilter(filter);
                  if (filter !== "All") {
                    setShowAll(true);
                  }
                }}
                className={`text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full border transition-all ${activeFilter === filter
                  ? "bg-brand-green text-white border-brand-green shadow-sm"
                  : "border-gray-200 text-gray-600 hover:bg-brand-sage hover:text-brand-green hover:border-brand-sage"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop View: 2-Pic 3D Coverflow Carousel */}
        <div className="hidden md:block relative px-10 py-4">
          
          <button
            aria-label="Previous Photo"
            className="gallery-desk-prev absolute -left-3 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/90 shadow-xl border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-md"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            aria-label="Next Photo"
            className="gallery-desk-next absolute -right-3 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/90 shadow-xl border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-md"
          >
            <ChevronRight size={24} />
          </button>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            initialSlide={0}
            loop={true}
            slidesPerView={2.2}
            spaceBetween={24}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true, el: ".gallery-desk-pagination" }}
            navigation={{ prevEl: ".gallery-desk-prev", nextEl: ".gallery-desk-next" }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-6 !overflow-visible"
          >
            {visibleImages.map((img, idx) => (
              <SwiperSlide key={img.id} className="transition-all duration-500 py-2">
                {({ isActive, isNext }) => (
                  <div
                    onClick={() => setSelectedImageIndex(idx)}
                    className={cn(
                      "rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-500 w-full h-[380px] select-none flex flex-col justify-end p-8 border group",
                      isActive || isNext
                        ? "scale-100 opacity-100 shadow-2xl border-brand-green/40 ring-4 ring-brand-green/10 z-30 filter-none"
                        : "scale-90 opacity-40 blur-[2px] shadow-sm border-gray-200 z-10 grayscale-[20%]"
                    )}
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent opacity-75 group-hover:opacity-85 transition-opacity z-10" />
                    <div className="absolute top-5 right-5 z-20 bg-black/40 backdrop-blur-md p-2.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={18} />
                    </div>
                    <div className="relative z-20 transition-all duration-300">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-brand-green/90 px-3 py-1 rounded mb-3 inline-block backdrop-blur-sm shadow-md">
                        {img.category}
                      </span>
                      <h4 className="font-serif text-2xl text-white font-bold">{img.title}</h4>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="gallery-desk-pagination flex justify-center gap-2 mt-6" />
        </div>

        {/* Mobile View: 3D Coverflow Circular Swappable Carousel */}
        <div className="block md:hidden relative px-2 py-4">
          <button
            aria-label="Previous Photo"
            className="gallery-prev absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 shadow-md border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            aria-label="Next Photo"
            className="gallery-next absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 shadow-md border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all backdrop-blur-sm"
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
            pagination={{ clickable: true, el: ".gallery-pagination" }}
            navigation={{ prevEl: ".gallery-prev", nextEl: ".gallery-next" }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-6 !overflow-visible"
          >
            {visibleImages.map((img, idx) => (
              <SwiperSlide key={img.id} className="transition-all duration-500 py-2">
                {({ isActive }) => (
                  <div 
                    className={cn(
                      "rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-500 mx-auto max-w-xs h-[300px] select-none flex flex-col justify-end p-6 border",
                      isActive
                        ? "scale-100 opacity-100 shadow-2xl border-brand-green/40 ring-4 ring-brand-green/10 z-30 filter-none"
                        : "scale-85 opacity-40 blur-[2px] shadow-sm border-gray-200 z-10 grayscale-[25%]"
                    )}
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent opacity-80 z-10" />
                    <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full text-white">
                      <Maximize2 size={16} />
                    </div>
                    <div className="relative z-20">
                      <span className="text-[9px] uppercase tracking-widest font-bold text-white bg-brand-green/80 px-2.5 py-1 rounded mb-2 inline-block backdrop-blur-sm">
                        {img.category}
                      </span>
                      <h4 className="font-serif text-xl text-white font-bold">{img.title}</h4>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="gallery-pagination flex justify-center gap-2 mt-4" />
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery" className="bg-transparent border border-brand-green text-brand-green px-8 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-sage/30 transition-colors inline-flex items-center gap-2">
            View All Photos
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setSelectedImageIndex(null)} className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors">
            <X size={32} />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute left-2 md:left-10 z-50 text-white/50 hover:text-white transition-colors">
            <ArrowLeft size={40} />
          </button>

          <div className="relative w-full max-w-5xl h-[60vh] md:h-[80vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-6 text-center text-white">
              <h3 className="text-xl md:text-3xl font-serif">{filteredImages[selectedImageIndex].title}</h3>
              <p className="text-xs md:text-sm text-brand-gold uppercase tracking-[0.2em] mt-2 font-bold">{filteredImages[selectedImageIndex].category}</p>
            </div>
          </div>

          <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-2 md:right-10 z-50 text-white/50 hover:text-white transition-colors">
            <ArrowRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
