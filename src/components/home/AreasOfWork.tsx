import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Compass, Sparkles, Laptop, Users, HeartPulse, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const areas = [
  { title: "Education & Learning Support", desc: "Local learning sessions and academic support.", icon: GraduationCap, status: "Active", link: "/what-we-do/education", featured: true },
  { title: "Scholarships & Resources", desc: "Helping reduce barriers to essential learning materials.", icon: BookOpen, status: "Community Initiative", link: "/what-we-do/scholarships" },
  { title: "Mentoring & Guidance", desc: "Support for study habits, choices and personal growth.", icon: Compass, status: "Active", link: "/what-we-do/mentorship" },
  { title: "Digital & Career Readiness", desc: "Foundational digital confidence and career awareness.", icon: Laptop, status: "Planned", link: "/what-we-do/skills" }
];

export function AreasOfWork() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="mb-16">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
            Areas of Work
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-green mb-6">
            Focused on sustainable impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            const isFeatured = area.featured;
            return (
              <div 
                key={idx}
                className={cn(
                  "p-8 lg:p-10 rounded-xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl",
                  isFeatured 
                    ? "bg-brand-green text-white border-brand-green lg:col-span-2 lg:row-span-2"
                    : "bg-white border-gray-100 text-brand-charcoal"
                )}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                    isFeatured ? "bg-white/10 text-white" : "bg-brand-sage text-brand-green"
                  )}>
                    <Icon size={24} />
                  </div>
                  <span className={cn(
                    "text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border",
                    area.status === "Active" 
                      ? isFeatured ? "bg-white/20 border-transparent text-white" : "bg-brand-sage border-transparent text-brand-green"
                      : isFeatured ? "border-white/30 text-white/80" : "border-gray-200 text-gray-500"
                  )}>
                    {area.status}
                  </span>
                </div>
                
                <h3 className={cn("font-serif text-2xl lg:text-3xl mb-4", isFeatured && "lg:text-4xl")}>
                  {area.title}
                </h3>
                <p className={cn("text-sm leading-relaxed mb-8", isFeatured ? "text-brand-sage max-w-md text-base" : "text-gray-500")}>
                  {area.desc}
                </p>
                
                <div className="mt-auto pt-4">
                  <Link 
                    href={area.link}
                    className={cn(
                      "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors",
                      isFeatured ? "text-brand-gold hover:text-white" : "text-brand-green hover:text-brand-clay"
                    )}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
