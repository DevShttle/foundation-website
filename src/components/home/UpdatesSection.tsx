import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { updates } from "@/lib/data";

export function UpdatesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
              Latest Updates
            </span>
            <h2 className="font-serif text-4xl text-brand-green mb-4">
              News and active notices
            </h2>
          </div>
          <Link href="/news-resources" className="bg-brand-sage/50 text-brand-green px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-sage transition-colors flex items-center gap-2">
            View All Updates <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update) => (
            <div key={update.id} className="flex flex-col border-b border-gray-200 pb-8 last:border-0 group">
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest mb-4">
                <span className="text-brand-clay">{update.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-gray-500 flex items-center gap-1.5"><Calendar size={12}/> {update.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-brand-green mb-3 leading-snug group-hover:text-brand-clay transition-colors">
                <Link href={`/news-resources/${update.slug}`}>{update.title}</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                {update.summary}
              </p>
              <Link href={`/news-resources/${update.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors mt-auto w-fit">
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
