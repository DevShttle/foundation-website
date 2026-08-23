"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PathwayStep {
  num: string;
  title: string;
  desc: string;
}

const steps: PathwayStep[] = [
  {
    num: "01",
    title: "Identify educational barriers",
    desc: "We consult with local families to understand their specific needs.",
  },
  {
    num: "02",
    title: "Collaborate",
    desc: "We work with students, families and teachers to build a support plan.",
  },
  {
    num: "03",
    title: "Deliver support",
    desc: "Providing learning support, mentoring, and essential resources.",
  },
  {
    num: "04",
    title: "Measure outcomes",
    desc: "Tracking participation, progress and outcomes for sustained impact.",
  }
];

export function PathwaySection() {
  return (
    <section className="py-24 sm:py-32 bg-[#121c19] text-white relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-28">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-4 border-b border-amber-400/40 pb-2">
            How The Model Works
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold">
            A simple, effective pathway
          </h2>
        </div>

        {/* Snake Flow Roadmap */}
        <div className="relative max-w-4xl mx-auto">

          {/* Desktop/Tablet Snake Curved Connecting Line */}
          <div className="hidden sm:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full text-amber-500"
              viewBox="0 0 800 850"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Snake Zig-Zag Pipe with rounded 90-degree corners */}
              <path
                d="M 90 60
                   L 90 140
                   Q 90 180 130 180
                   L 670 180
                   Q 710 180 710 220
                   L 710 290

                   M 710 330
                   L 710 410
                   Q 710 450 670 450
                   L 130 450
                   Q 90 450 90 490
                   L 90 560

                   M 90 600
                   L 90 680
                   Q 90 720 130 720
                   L 670 720
                   Q 710 720 710 760
                   L 710 810"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]"
              />
            </svg>
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="block sm:hidden absolute top-8 bottom-8 left-8 w-1 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)] z-0" />

          {/* Step Items */}
          <div className="space-y-20 sm:space-y-36 relative z-10">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 1; // 01 (left), 02 (right), 03 (left), 04 (right)

              return (
                <div
                  key={idx}
                  className={cn(
                    "flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12",
                    isEven ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row sm:text-left"
                  )}
                >
                  {/* Glowing Number Circle Badge */}
                  <div className={cn("relative shrink-0", isEven ? "sm:mr-0" : "sm:ml-0")}>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1a2925] border-2 border-amber-400 flex items-center justify-center font-serif text-xl sm:text-2xl font-bold text-white shadow-[0_0_22px_rgba(245,158,11,0.5)] ring-4 ring-amber-400/20 transition-all duration-300 hover:scale-110">
                      {item.num}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="max-w-md">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
