import React from "react";
import { BookOpen, ShieldCheck, Star, Scale, Heart, HandHelping } from "lucide-react";

export function ValuesSection() {
  const values = [
    { title: "Ilm", desc: "Knowledge and continuous learning", icon: BookOpen },
    { title: "Amanah", desc: "Trust, honesty and accountability", icon: ShieldCheck },
    { title: "Ihsan", desc: "Excellence in service", icon: Star },
    { title: "Adl", desc: "Justice and fairness", icon: Scale },
    { title: "Rahmah", desc: "Compassion and human dignity", icon: Heart },
    { title: "Khidmah", desc: "Service to humanity", icon: HandHelping }
  ];

  return (
    <section className="py-24 bg-[#f2eee4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
              Vision, Mission & Values
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-green mb-6">
              Guided by a clear purpose
            </h2>
            <p className="text-lg text-brand-charcoal/70 leading-relaxed">
              Inspired by Islamic ethics. Serving people of every background.
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-brand-green text-white p-10 lg:p-12 rounded-lg flex flex-col justify-center min-h-[300px]">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-sage mb-6">Our Vision</span>
            <h3 className="font-serif text-2xl lg:text-3xl leading-snug">
              An inclusive, equitable and responsible society in which every person has access to opportunity, dignity, education, health and a healthy environment.
            </h3>
          </div>
          <div className="bg-[#e5d4a9] text-[#083F33] p-10 lg:p-12 rounded-lg flex flex-col justify-center min-h-[300px]">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#083F33]/60 mb-6">Our Mission</span>
            <h3 className="font-serif text-2xl lg:text-3xl leading-snug">
              To work with underserved and marginalized communities through education, health awareness, skills, social welfare, environmental responsibility and sustainable development.
            </h3>
          </div>
        </div>

        {/* Values Grid */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-8 lg:p-10 flex flex-col items-center text-center group hover:bg-brand-sage/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-brand-sage/50 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-serif text-2xl text-brand-green mb-2">{val.title}</h4>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
