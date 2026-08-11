import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function StructurePage() {
  return (
    <div className="bg-brand-ivory min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-who-we-are.jpg" alt="Organizational Structure" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-green/80 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Who We Are
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Organizational Structure
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            A transparent and accountable governance framework ensuring effective programme delivery.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-4xl text-center">
        
        <div className="bg-white p-12 rounded-xl shadow-sm border border-brand-sage/50 flex flex-col items-center">
          
          <div className="w-64 bg-brand-green text-white py-4 px-6 rounded-lg shadow-md font-serif text-xl">
            Board of Trustees
          </div>
          <ArrowDown className="text-brand-clay my-4" />
          
          <div className="w-64 bg-brand-green text-white py-4 px-6 rounded-lg shadow-md font-serif text-xl">
            Managing Trustee
          </div>
          <ArrowDown className="text-brand-clay my-4" />

          <div className="flex gap-4 w-full justify-center flex-wrap">
            <div className="w-48 bg-brand-sage/50 text-brand-green py-3 px-4 rounded border border-brand-sage font-bold text-sm">
              President
            </div>
            <div className="w-48 bg-brand-sage/50 text-brand-green py-3 px-4 rounded border border-brand-sage font-bold text-sm">
              Secretary
            </div>
            <div className="w-48 bg-brand-sage/50 text-brand-green py-3 px-4 rounded border border-brand-sage font-bold text-sm">
              Treasurer
            </div>
          </div>
          <ArrowDown className="text-brand-clay my-4" />

          <div className="w-72 bg-gray-100 text-brand-charcoal py-4 px-6 rounded-lg shadow-sm font-bold border border-gray-200">
            Programme Coordinators
          </div>
          <ArrowDown className="text-brand-clay my-4" />

          <div className="w-80 bg-[#fbf8f1] text-brand-clay py-4 px-6 rounded-lg shadow-sm font-bold border border-[#e1dfda] uppercase tracking-widest text-xs">
            Volunteers and Community Teams
          </div>

        </div>

        <div className="mt-12 bg-white/50 border border-brand-clay/20 p-6 rounded text-left max-w-2xl mx-auto">
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            <strong>Note:</strong> This diagram represents the operational flow of the Islah Foundation. Final legal and fiduciary authority rests with the Board of Trustees as stipulated in the registered Trust Deed (No. 29, Book No. 4, 14 July 2026).
          </p>
        </div>

      </div>
    </div>
  );
}
