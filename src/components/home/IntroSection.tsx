import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-ivory overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left: Collage */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
            {/* Main Photo */}
            <div className="absolute top-0 left-0 w-3/4 h-[85%] bg-brand-sage rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-[180px] overflow-hidden">
              <Image
                src="/images/about/intro-1.png"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary Photo */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[60%] bg-brand-gold border-8 border-brand-ivory rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-[120px] overflow-hidden">
              <Image
                src="/images/about/intro-2.png"
                alt="Mentoring session"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Tag */}
            <div className="absolute bottom-12 left-6 bg-white px-6 py-4 shadow-[0_15px_35px_rgba(12,91,72,0.12)] rounded-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-sage flex items-center justify-center text-brand-green">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-brand-charcoal/60 font-bold mb-1">Serving Since</span>
                <b className="block text-brand-charcoal font-serif text-lg leading-none">2024</b>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-6 border-b border-brand-clay/30 pb-2">
              Welcome to Islah Foundation
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.1] text-brand-green mb-8">
              Building opportunity from within the <em className="text-brand-clay not-italic">community</em>
            </h2>
            <p className="text-lg text-brand-charcoal/80 leading-relaxed mb-10 max-w-lg">
              Islah Foundation began as a local educational initiative in 2024 and became a registered public charitable trust in 2026. We work with underserved students and communities in Kishanganj to improve access to education, learning resources, mentoring, skills and values-based development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Community-rooted programmes",
                "Inclusive public service",
                "Transparent governance"
              ].map((trust, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                  <span className="text-sm font-semibold text-brand-charcoal">{trust}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/who-we-are/our-story" className="bg-brand-green text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#083F33] transition-colors text-center">
                Read Our Story
              </Link>
              <Link href="/who-we-are/legal-status" className="bg-transparent border border-brand-green text-brand-green px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-sage/30 transition-colors text-center">
                View Legal Status
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
