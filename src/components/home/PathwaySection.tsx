"use client";

import React from "react";
import { Target, Users, Sparkles, CheckCircle2 } from "lucide-react";

interface PathwayStep {
  step: string;
  num: string;
  title: string;
  desc: string;
}

const steps: PathwayStep[] = [
  {
    step: "01",
    num: "1",
    title: "Identify educational barriers",
    desc: "We consult with local families to understand their specific needs.",
  },
  {
    step: "02",
    num: "2",
    title: "Collaborate",
    desc: "We work with students, families and teachers to build a support plan.",
  },
  {
    step: "03",
    num: "3",
    title: "Deliver support",
    desc: "Providing learning support, mentoring, and essential resources.",
  },
  {
    step: "04",
    num: "4",
    title: "Measure outcomes",
    desc: "Tracking participation, progress and outcomes for sustained impact.",
  }
];

export function PathwaySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f2eee4] relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        
        {/* Header */}
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
          How The Model Works
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-16 sm:mb-20 text-brand-green font-bold">
          A simple, effective pathway
        </h2>

        {/* Steps Container */}
        <div className="relative">

          {/* Desktop Sketched Winding Roadway Path */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-24 pointer-events-none z-0">
            <svg
              className="w-full h-full text-brand-clay/70"
              viewBox="0 0 1000 100"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Sketched / Winding Curved Path */}
              <path
                d="M 125,50 C 250,5 375,95 500,50 C 625,5 750,95 875,50"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeDasharray="9 9"
                strokeLinecap="round"
              />
              {/* Waypoint Direction Dots */}
              <circle cx="312" cy="30" r="4.5" fill="#0C5B48" />
              <circle cx="687" cy="70" r="4.5" fill="#0C5B48" />
            </svg>
          </div>

          {/* Mobile / Tablet Vertical Sketched Roadway Path */}
          <div className="block lg:hidden absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-brand-clay/60 pointer-events-none z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f2eee4] px-3 flex flex-col items-center group transition-all duration-300"
              >
                {/* Step Circle Node */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-brand-sage/80 group-hover:border-brand-green group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <span className="font-serif text-3xl font-bold text-brand-green">
                      {item.num}
                    </span>
                  </div>
                  
                  {/* Step Label Badge */}
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-brand-clay text-white text-[9px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                    Step {item.num}
                  </span>
                </div>

                {/* Text Content */}
                <h3 className="font-serif text-xl mb-3 text-brand-charcoal font-bold group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-charcoal/75 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
