import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, BookOpenText } from "lucide-react";

export default function ImpactIndexPage() {
  const sections = [
    {
      title: "Impact Dashboard",
      desc: "View our measurable progress and verifiable outcome statistics across Kishanganj.",
      icon: BarChart3,
      href: "/impact/dashboard"
    },
    {
      title: "Stories of Change",
      desc: "Read long-form narratives and case studies about the individuals and communities we serve.",
      icon: BookOpenText,
      href: "/impact/stories"
    }
  ];

  return (
    <div className="bg-[#f2eee4] min-h-screen pb-12 lg:pb-16">
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <Image src="/images/headers/header-impact.png" alt="Impact" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Our Impact
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Measuring Our Progress
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            We are committed to absolute transparency. Explore our quantitative data and qualitative stories of change.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <Link key={idx} href={sec.href} className="bg-white p-8 rounded-xl shadow-sm border border-brand-sage/50 flex flex-col group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-brand-sage/50 rounded-xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h2 className="font-serif text-2xl text-brand-green mb-3">{sec.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-8">
                  {sec.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-clay group-hover:text-brand-green transition-colors mt-auto">
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
