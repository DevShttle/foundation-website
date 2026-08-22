import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { stories } from "@/lib/data";

export function StoriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#fbf8f1]">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
              Stories of Change
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-green mb-4">
              Real progress from the ground up
            </h2>
          </div>
          <Link href="/impact/stories" className="bg-brand-sage/50 text-brand-green px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-sage transition-colors flex items-center gap-2">
            View All Stories <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-[0_5px_20px_rgba(12,91,72,0.04)] border border-gray-100 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_15px_35px_rgba(12,91,72,0.08)] hover:-translate-y-1">
              <div className="h-56 bg-brand-sage/60 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-transparent transition-colors z-10" />
                <BookOpenText size={40} className="text-brand-green/30" />
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
    </section>
  );
}
