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
    <section className="py-20 sm:py-28 bg-[#f2eee4] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
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
              viewBox="0 0 800 760"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Rounded 90-degree S-curve Snake Path */}
              <path
                d="M 60 40
                   L 60 115
                   Q 60 145 90 145
                   L 710 145
                   Q 740 145 740 175
                   L 740 250

                   M 740 250
                   L 740 325
                   Q 740 355 710 355
                   L 90 355
                   Q 60 355 60 385
                   L 60 460

                   M 60 460
                   L 60 535
                   Q 60 565 90 565
                   L 710 565
                   Q 740 565 740 595
                   L 740 670"
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
          <div className="block sm:hidden absolute top-8 bottom-8 left-8 w-0.5 border-l-2 border-dashed border-brand-green/60 pointer-events-none z-0" />

          {/* Step Items */}
          <div className="space-y-16 sm:space-y-32 relative z-10">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 1; // 01 (left), 02 (right), 03 (left), 04 (right)

              return (
                <div
                  key={idx}
                  className={cn(
                    "flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10",
                    isEven ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row sm:text-left"
                  )}
                >
                  {/* Circle Badge */}
                  <div className="relative shrink-0 z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-brand-green flex items-center justify-center font-serif text-xl sm:text-2xl font-bold text-brand-green shadow-lg ring-4 ring-brand-green/10 transition-all duration-300 hover:scale-110 hover:border-brand-clay hover:text-brand-clay">
                      {item.num}
                    </div>
                  </div>

                  {/* Text Card */}
                  <div className="max-w-md bg-[#f2eee4] sm:bg-transparent rounded-2xl p-2 sm:p-0">
                    <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-bold mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
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
