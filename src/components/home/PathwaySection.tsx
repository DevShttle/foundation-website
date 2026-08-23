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
    <section className="py-6 md:py-12 lg:py-16 bg-[#f2eee4] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-2 border-b border-brand-clay/30 pb-1.5">
            How The Model Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green font-bold">
            A simple, effective pathway
          </h2>
        </div>

        {/* Snake Flow Roadmap Container */}
        <div className="relative max-w-4xl mx-auto">

          {/* Desktop/Tablet Snake Curved Connecting Line SVG */}
          <div className="hidden sm:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full text-brand-green"
              viewBox="0 0 800 500"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Rounded 90-degree S-curve Snake Path */}
              <path
                d="M 60 30
                   L 60 85
                   Q 60 110 85 110
                   L 715 110
                   Q 740 110 740 135
                   L 740 180

                   M 740 180
                   L 740 235
                   Q 740 260 715 260
                   L 85 260
                   Q 60 260 60 285
                   L 60 330

                   M 60 330
                   L 60 385
                   Q 60 410 85 410
                   L 715 410
                   Q 740 410 740 435
                   L 740 480"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-75"
              />
            </svg>
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="block sm:hidden absolute top-7 bottom-7 left-6 w-0.5 border-l-2 border-dashed border-brand-green/60 pointer-events-none z-0" />

          {/* Step Items */}
          <div className="space-y-8 sm:space-y-16 relative z-10">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 1; // 01 (left), 02 (right), 03 (left), 04 (right)

              return (
                <div
                  key={idx}
                  className={cn(
                    "flex flex-row items-center gap-4 sm:gap-10",
                    isEven ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row sm:text-left"
                  )}
                >
                  {/* Circle Badge */}
                  <div className="relative shrink-0 z-10">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-brand-green flex items-center justify-center font-serif text-base sm:text-2xl font-bold text-brand-green shadow-md ring-4 ring-brand-green/10 transition-all duration-300 hover:scale-110 hover:border-brand-clay hover:text-brand-clay">
                      {item.num}
                    </div>
                  </div>

                  {/* Text Card */}
                  <div className="max-w-md bg-[#f2eee4] sm:bg-transparent rounded-2xl p-1 sm:p-0 flex-1">
                    <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl text-brand-green font-bold mb-1 sm:mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-base text-brand-charcoal/80 leading-relaxed">
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
