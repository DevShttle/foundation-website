"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, MapPin, Activity, HeartHandshake, Sparkles } from "lucide-react";

export function FeaturedProgramme() {
  return (
    <section className="py-6 md:py-12 lg:py-16 bg-[#0C5B48] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Info & Specs */}
          <div className="lg:col-span-7">
            
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-brand-sage text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/15">
              <Sparkles size={13} className="text-brand-gold" />
              <span>Featured Programme</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Islah Learning Support Programme
            </h2>

            {/* Description */}
            <p className="text-brand-sage/90 text-base sm:text-lg leading-relaxed mb-8 font-light max-w-2xl">
              Addressing educational gaps by providing after-school academic support, foundation building, and essential learning resources to underserved students.
            </p>

            {/* Modern Spec Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 transition-all hover:bg-white/15">
                <div className="flex items-center gap-2 text-brand-gold text-[10px] uppercase font-bold tracking-widest mb-1.5">
                  <Target size={14} />
                  <span>Target</span>
                </div>
                <dd className="text-sm sm:text-base font-semibold text-white">Grades 5 – 10</dd>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 transition-all hover:bg-white/15">
                <div className="flex items-center gap-2 text-brand-gold text-[10px] uppercase font-bold tracking-widest mb-1.5">
                  <MapPin size={14} />
                  <span>Location</span>
                </div>
                <dd className="text-sm sm:text-base font-semibold text-white">Chandergaon</dd>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 transition-all hover:bg-white/15">
                <div className="flex items-center gap-2 text-brand-gold text-[10px] uppercase font-bold tracking-widest mb-1.5">
                  <Activity size={14} />
                  <span>Status</span>
                </div>
                <dd className="text-sm sm:text-base font-semibold text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </dd>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 transition-all hover:bg-white/15">
                <div className="flex items-center gap-2 text-brand-gold text-[10px] uppercase font-bold tracking-widest mb-1.5">
                  <HeartHandshake size={14} />
                  <span>Support Needed</span>
                </div>
                <dd className="text-sm sm:text-base font-semibold text-white">Teachers, Kits</dd>
              </div>

            </div>

            {/* Action Button */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/what-we-do/education"
                className="bg-brand-gold text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 group"
              >
                <span>View Programme Details</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group h-[360px] sm:h-[440px] lg:h-[480px] bg-brand-sage/20">
              <Image
                src="/images/programmes/featured.png"
                alt="Islah Learning Support Programme"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-emerald-600/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Active Initiative
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mb-1 block">
                  Education & Empowerment
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                  Transforming lives through structured learning
                </h4>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
