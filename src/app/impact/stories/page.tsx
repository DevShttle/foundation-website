import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenText } from "lucide-react";
import { stories } from "@/lib/data";

export default function StoriesIndexPage() {
  return (
    <div className="bg-[#fbf8f1] min-h-screen pb-12 lg:pb-16">
      {/* Hero */}
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <Image src="/images/headers/header-impact.png" alt="Stories of Change" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Our Impact
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Stories of Change
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Read about the real progress being made by students, families, and volunteers on the ground in Kishanganj.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-[0_5px_20px_rgba(12,91,72,0.04)] border border-gray-100 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_15px_35px_rgba(12,91,72,0.08)] hover:-translate-y-1">
              <div className="h-56 bg-brand-sage/60 relative flex items-center justify-center overflow-hidden">
                <Image 
                  src={story.image || `/images/stories/story-1.png`} 
                  alt={story.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors z-10" />
                <span className="absolute bottom-4 left-4 z-20 bg-white/90 text-brand-green text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm">
                  {story.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-[11px] text-gray-500 font-semibold mb-3">{story.date}</span>
                <h3 className="font-serif text-2xl text-brand-green mb-4 leading-snug group-hover:text-brand-clay transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">
                  {story.summary}
                </p>
                <Link href={`/impact/stories/${story.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors mt-auto">
                  Read Story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
