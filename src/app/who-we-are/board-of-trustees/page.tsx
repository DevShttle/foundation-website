"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Trustee {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  image: string;
}

// Ordered specifically: Treasurer (Left), Founder (Center - Main), Secretary (Right), followed by Trustees
const trustees: Trustee[] = [
  {
    id: "b3",
    name: "Mrs. Chameli Begum",
    role: "Treasurer",
    badge: "Treasurer",
    bio: "Ensuring transparent financial governance and responsible allocation of resources across all initiatives.",
    image: "/images/team/trustee-3.png"
  },
  {
    id: "b1",
    name: "Md. Niyaz Asghar",
    role: "Founder, Settlor, Managing Trustee & President",
    badge: "Founder & President",
    bio: "Driving the vision and strategic direction of Islah Foundation with a focus on educational equity and community empowerment.",
    image: "/images/team/trustee-1.png"
  },
  {
    id: "b2",
    name: "Md. Mashkoor Zaidi",
    role: "Secretary",
    badge: "Secretary",
    bio: "Managing organizational operations, community outreach, and the daily administration of educational programs.",
    image: "/images/team/trustee-2.png"
  },
  {
    id: "b4",
    name: "Md. Asadulla Wakil",
    role: "Trustee",
    badge: "Trustee",
    bio: "Providing guidance on educational standards and community relations.",
    image: "/images/team/trustee-4.png"
  },
  {
    id: "b5",
    name: "Karim Iqbal Saquib",
    role: "Trustee",
    badge: "Trustee",
    bio: "Supporting youth mentorship and skills development programs.",
    image: "/images/team/trustee-5.png"
  }
];

export default function BoardOfTrusteesPage() {
  return (
    <div className="py-20 lg:py-24 bg-brand-ivory min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
            Who We Are
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-green mb-6">
            Board of Trustees
          </h1>
          <p className="text-base sm:text-lg text-brand-charcoal/70 max-w-2xl mx-auto px-2">
            Our Board of Trustees brings together diverse expertise in education, community service, and governance to guide the Islah Foundation's mission.
          </p>
        </div>

        {/* 3D Circular Coverflow Slider */}
        <div className="relative px-2 sm:px-8 overflow-hidden max-w-full">

          {/* Custom Navigation Arrows */}
          <button
            aria-label="Previous Trustee"
            className="trustee-prev absolute left-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            aria-label="Next Trustee"
            className="trustee-next absolute right-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg border border-brand-sage/60 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={1} // Starts on Founder (Md. Niyaz Asghar)
            loop={true}
            slidesPerView={1.2}
            breakpoints={{
              500: { slidesPerView: 1.4 },
              640: { slidesPerView: 1.8 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 2.7 }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 160,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: ".trustee-pagination"
            }}
            navigation={{
              prevEl: ".trustee-prev",
              nextEl: ".trustee-next"
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            className="w-full py-10 overflow-hidden"
          >
            {trustees.map((member) => (
              <SwiperSlide key={member.id} className="transition-all duration-500 py-4">
                {({ isActive }) => (
                  <div
                    className={cn(
                      "bg-white rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col mx-auto max-w-sm sm:max-w-md select-none",
                      isActive
                        ? "scale-100 opacity-100 shadow-2xl border-brand-green/50 ring-4 ring-brand-green/10 z-30 filter-none"
                        : "scale-85 opacity-40 blur-[2px] shadow-sm border-brand-sage/40 z-10 grayscale-[25%]"
                    )}
                  >
                    {/* Image Container focused on face */}
                    <div className="h-72 sm:h-84 bg-gradient-to-b from-brand-sage/30 to-brand-sage/70 relative overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 85vw, 400px"
                        className={cn(
                          "object-cover object-top transition-transform duration-700 ease-out",
                          isActive ? "scale-105" : "scale-100"
                        )}
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 via-transparent to-transparent opacity-75" />

                      {/* Badge */}
                      <div className="absolute top-4 left-4 bg-brand-green/90 text-white backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                        {member.badge}
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col bg-white">
                      <div className={cn(
                        "w-10 h-0.5 mb-3 transition-all duration-500",
                        isActive ? "w-full bg-brand-green" : "bg-brand-clay/40"
                      )} />
                      <h3 className="font-serif text-2xl text-brand-green mb-1 font-bold">
                        {member.name}
                      </h3>
                      <span className="text-[11px] font-bold text-brand-clay uppercase tracking-widest mb-3 block">
                        {member.role}
                      </span>
                      <p className="text-sm text-brand-charcoal/75 leading-relaxed flex-1">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="trustee-pagination flex justify-center gap-2 mt-6" />

        </div>
      </div>
    </div>
  );
}
