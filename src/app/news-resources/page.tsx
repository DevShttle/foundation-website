import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Bell } from "lucide-react";
import { updates } from "@/lib/data";

export default function UpdatesIndexPage() {
  return (
    <div className="bg-[#f2eee4] min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/gallery/9.jpg" alt="News and Resources" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-green/ z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            News & Resources
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Latest Updates
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Notices, event announcements, and general news regarding Islah Foundation programmes.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {updates.map((update) => (
            <div key={update.id} className="bg-white rounded-xl shadow-sm border border-brand-sage/50 flex flex-col group hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="h-48 relative bg-brand-sage overflow-hidden">
                <Image src={update.image} alt={update.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-green/ group-hover:bg-transparent transition-colors z-10" />
                <span className="absolute top-4 left-4 z-20 text-brand-clay bg-white/90 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded">{update.category}</span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest mb-4">
                  <span className="text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> {update.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-brand-green mb-3 leading-snug group-hover:text-brand-clay transition-colors">
                  <Link href={`/news-resources/${update.slug}`}>{update.title}</Link>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">
                  {update.summary}
                </p>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Location: {update.location}</span>
                  <Link href={`/news-resources/${update.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#e5d4a9]/30 p-8 rounded-xl border border-[#e5d4a9] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-clay shadow-sm shrink-0">
              <Bell size={24} />
            </div>
            <div>
              <h4 className="font-bold text-brand-charcoal">Looking for official documents?</h4>
              <p className="text-sm text-gray-600 mt-1">Annual reports and policies are available in the Reports section.</p>
            </div>
          </div>
          <Link href="/news-resources/reports" className="bg-white text-brand-charcoal border border-gray-200 px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:border-brand-clay transition-colors whitespace-nowrap">
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
}
