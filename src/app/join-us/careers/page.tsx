import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="bg-brand-ivory min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-join-us.jpg" alt="Careers" fill className="object-cover z-0 opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-green/80 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Join Us
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Careers
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Build a career with purpose. Join our team dedicated to educational equity in Kishanganj.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-24 max-w-4xl text-center">
        
        {/* Empty State */}
        <div className="bg-white p-16 rounded-xl shadow-sm border border-brand-sage/50 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-brand-sage/50 rounded-full flex items-center justify-center text-brand-green mb-6">
            <Briefcase size={32} />
          </div>
          <h2 className="font-serif text-3xl text-brand-green mb-4">No Current Openings</h2>
          <p className="text-brand-charcoal/70 text-lg leading-relaxed max-w-lg mb-8">
            There are currently no open positions. Follow our updates for future opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/news-resources" className="bg-brand-green text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#083F33] transition-colors flex items-center gap-2">
              View Latest Updates <ArrowRight size={16} />
            </Link>
            <Link href="/join-us/volunteer" className="bg-transparent border border-brand-green text-brand-green px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-sage/30 transition-colors">
              Volunteer Instead
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
