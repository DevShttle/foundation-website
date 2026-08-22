import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { programs } from "@/lib/data";

export default function WhatWeDoPage() {
  return (
    <div className="bg-brand-ivory min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-what-we-do.png" alt="What We Do" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-green/ z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            What We Do
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl mb-6 max-w-4xl mx-auto leading-tight">
            Education with knowledge, character and purpose
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Our programmes are designed to reduce barriers to learning and create equitable opportunities for students in Kishanganj.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div key={prog.id} className="bg-white rounded-xl shadow-sm border border-brand-sage/50 overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 bg-brand-sage relative flex items-center justify-center overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors z-10" />

                <span className={`absolute top-4 left-4 z-20 text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded border backdrop-blur-sm ${prog.status === "Active" ? "bg-white/90 text-brand-green border-white" :
                  prog.status === "Planned" ? "bg-gray-100/90 text-gray-500 border-gray-200" :
                    "bg-brand-gold/90 text-white border-brand-gold"
                  }`}>
                  {prog.status}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-brand-green mb-3 group-hover:text-brand-clay transition-colors">{prog.title}</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-8 flex-1">{prog.summary}</p>

                <Link href={`/what-we-do/${prog.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors mt-auto w-fit">
                  View Details <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
