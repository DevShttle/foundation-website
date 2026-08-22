import React from "react";
import Image from "next/image";
import { boardMembers } from "@/lib/data";

export default function BoardOfTrusteesPage() {
  return (
    <div className="py-24 bg-brand-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
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
            <div key={member.id} className="bg-white rounded-xl shadow-sm border border-brand-sage/50 overflow-hidden flex flex-col group">
              <div className="h-48 bg-brand-sage flex items-center justify-center relative overflow-hidden">
                <Image
                  src={`/images/team/trustee-${idx + 1}.png`}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-green/10 transition-colors group-hover:bg-transparent" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-brand-green mb-2">{member.name}</h3>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-clay mb-4 block">
                  {member.role}
                </span>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-6 flex-1">
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
