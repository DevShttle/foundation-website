import React from "react";
import Image from "next/image";
import { boardMembers } from "@/lib/data";

export default function BoardOfTrusteesPage() {
  return (
    <div className="py-24 bg-brand-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
            Who We Are
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-green mb-6">Board of Trustees</h1>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            Our Board of Trustees brings together diverse expertise in education, community service, and governance to guide the Islah Foundation's mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, idx) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-sm border border-brand-sage/50 overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container with Face-focused Object Positioning */}
              <div className="h-80 bg-gradient-to-b from-brand-sage/40 to-brand-sage/80 relative overflow-hidden">
                <Image
                  src={member.image || `/images/team/trustee-${idx + 1}.png`}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={idx < 3}
                />
                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Info */}
              <div className="p-8 flex-1 flex flex-col relative">
                {/* Accent indicator line */}
                <div className="w-10 h-0.5 bg-brand-clay/50 group-hover:w-full group-hover:bg-brand-green transition-all duration-500 mb-4" />

                <h3 className="font-serif text-2xl text-brand-green mb-2 group-hover:text-brand-green/90 transition-colors">
                  {member.name}
                </h3>
                <span className="text-[11px] uppercase tracking-widest font-bold text-brand-clay mb-4 block leading-snug">
                  {member.role}
                </span>
                <p className="text-sm text-brand-charcoal/75 leading-relaxed flex-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
