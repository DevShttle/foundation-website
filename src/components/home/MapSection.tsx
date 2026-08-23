import React from "react";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/3">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
              Where We Work
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-green mb-6">
              Rooted in Kishanganj. Growing responsibly.
            </h2>
            <p className="text-lg text-brand-charcoal/70 leading-relaxed mb-8">
              We operate exclusively in Kishanganj, Bihar, focusing our resources on the communities we know best. Our headquarters is located in Chandergaon, Bahadurganj.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-clay mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-charcoal">Bahadurganj Hub</h4>
                  <p className="text-sm text-gray-500">Chandergaon & Surrounding Wards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-clay mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-charcoal">Kishanganj District</h4>
                  <p className="text-sm text-gray-500">Expanding to underserved blocks</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            {/* Minimalist Map UI */}
            <div className="bg-[#f7f5f0] border border-[#e1dfda] rounded-2xl p-8 lg:p-12 h-[400px] lg:h-[500px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                 <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center shadow-[0_0_0_15px_rgba(12,91,72,0.1),0_0_0_30px_rgba(12,91,72,0.05)] animate-pulse">
                   <MapPin size={40} className="text-white" />
                 </div>
                 <h3 className="font-serif text-2xl text-brand-green mt-12 mb-2">Kishanganj, Bihar</h3>
                 <p className="text-sm text-brand-charcoal/60 uppercase tracking-widest font-bold">Primary Operations Area</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
