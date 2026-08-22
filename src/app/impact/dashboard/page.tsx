import React from "react";
import Image from "next/image";
import { impactStats } from "@/lib/data";

export default function ImpactDashboardPage() {
  return (
    <div className="bg-brand-ivory min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-impact.png" alt="Impact Dashboard" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/20 rounded-l-[200px] pointer-events-none z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Our Impact
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Impact Dashboard
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Tracking our measurable progress in Kishanganj. We focus on verifiable outcomes over empty metrics.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">

        <div className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-brand-sage/50 mb-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            These statistics represent our direct, documented work since our community initiative began in 2024. All numbers are regularly updated and verified internally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactStats.map((stat, idx) => (
            stat.isVisible && (
              <div key={idx} className="bg-brand-green border border-brand-green p-10 rounded-xl text-center flex flex-col items-center justify-center min-h-[250px] shadow-lg group hover:-translate-y-1 transition-transform">
                <div className="font-serif text-6xl lg:text-7xl text-brand-gold mb-4 group-hover:scale-105 transition-transform">
                  {stat.value}{stat.unit}
                </div>
                <span className="text-sm font-bold tracking-widest text-brand-sage uppercase">{stat.description}</span>
                <span className="text-[10px] text-brand-sage/50 mt-6 block uppercase tracking-widest border-t border-brand-sage/20 pt-4 w-full">Verified Record</span>
              </div>
            )
          ))}
        </div>

        <div className="mt-16 bg-[#fbf8f1] border border-[#e1dfda] p-8 rounded-xl text-center">
          <h3 className="font-serif text-2xl text-brand-green mb-4">Detailed Reports</h3>
          <p className="text-brand-charcoal/70 text-sm mb-6 max-w-lg mx-auto">
            For an in-depth breakdown of our interventions, financial utilization, and qualitative outcomes, please refer to our Annual Activity Reports.
          </p>
          <a href="/news-resources/reports" className="inline-flex bg-brand-green text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#083F33] transition-colors">
            View Publications
          </a>
        </div>

      </div>
    </div>
  );
}
