"use client";
import React, { useState, useEffect, useRef } from "react";
import { impactStats } from "@/lib/data";

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <div ref={ref}>{count}</div>;
}

export function ImpactSection() {
  return (
    <section className="py-12 lg:py-16 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/20 rounded-l-[200px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-5/12">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4 border-b border-brand-gold/30 pb-2">
              Verified Impact
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Small steps leading to lasting change
            </h2>
            <p className="text-brand-sage text-lg leading-relaxed mb-8">
              We focus on genuine, verifiable impact over empty metrics. These numbers represent real students supported, mentoring hours delivered, and resources distributed.
            </p>
            <div className="bg-white/5 border border-white/10 rounded p-6">
              <p className="text-xs text-white/60">
                All statistics are internally documented. If reliable figures are temporarily unavailable, they are marked as 'documentation in progress'.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {impactStats.map((stat, idx) => (
                stat.isVisible && (
                  <div key={idx} className="bg-[#1a2321] border border-white/10 p-8 rounded-xl text-center flex flex-col items-center justify-center min-h-[200px]">
                    <div className="font-serif text-5xl lg:text-6xl text-brand-gold mb-4 flex items-center">
                      <AnimatedCounter end={stat.value} />
                      <span>{stat.unit}</span>
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-brand-sage uppercase">{stat.description}</span>
                  </div>
                )
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
