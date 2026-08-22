import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-ivory">
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
          Community Voices
        </span>
        <h2 className="font-serif text-4xl lg:text-5xl text-brand-green mb-4">
          Trusted by the people we serve
        </h2>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-xl shadow-sm border border-brand-sage/50 relative group">
              <Quote size={48} className="text-brand-sage/40 absolute top-8 left-8 -z-0 transition-transform group-hover:scale-110" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-brand-charcoal/80 text-lg leading-relaxed italic mb-8 flex-1 pt-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-sage rounded-full flex items-center justify-center font-serif text-brand-green text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
