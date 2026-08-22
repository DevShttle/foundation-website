import React from "react";
import { Handshake } from "lucide-react";

export function PartnersSection() {
  // If no confirmed partners exist, this section should technically be hidden according to specs.
  // We'll render an empty state for preview purposes that can easily be toggled in CMS.
  const hasPartners = false;

  if (!hasPartners) {
    return null; // As per rules: "Hide the entire section when no confirmed partners exist."
  }

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
          Our Partners
        </span>
        <h2 className="font-serif text-4xl text-brand-green mb-12">
          Working together for Kishanganj
        </h2>
        
        {/* Placeholder for when partners are added */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale">
           <div className="flex items-center gap-2 font-serif text-xl"><Handshake /> Partner 1</div>
           <div className="flex items-center gap-2 font-serif text-xl"><Handshake /> Partner 2</div>
           <div className="flex items-center gap-2 font-serif text-xl"><Handshake /> Partner 3</div>
        </div>
      </div>
    </section>
  );
}
