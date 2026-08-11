import React from "react";
import Image from "next/image";
import { BookOpen, ShieldCheck, Star, Scale, Heart, HandHelping } from "lucide-react";

export default function VisionMissionValuesPage() {
  const values = [
    { title: "Ilm", desc: "Knowledge and continuous learning", icon: BookOpen },
    { title: "Amanah", desc: "Trust, honesty and accountability", icon: ShieldCheck },
    { title: "Ihsan", desc: "Excellence in service", icon: Star },
    { title: "Adl", desc: "Justice and fairness", icon: Scale },
    { title: "Rahmah", desc: "Compassion and human dignity", icon: Heart },
    { title: "Khidmah", desc: "Service to humanity", icon: HandHelping }
  ];

  return (
    <div className="bg-[#f2eee4] min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-24 lg:py-32 relative overflow-hidden">
        <Image src="/images/headers/header-who-we-are.jpg" alt="Vision Mission Values" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/20 rounded-l-[200px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-brand-charcoal/60 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Who We Are
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-tight">
            Vision, Mission & Values
          </h1>
          <p className="text-xl text-brand-sage leading-relaxed max-w-2xl mx-auto">
            Inspired by Islamic ethics. Serving people of every background.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-20 max-w-5xl">
        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-brand-green text-white p-10 lg:p-16 rounded-xl shadow-xl flex flex-col justify-center min-h-[400px]">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-sage mb-6 block text-center">Our Vision</span>
            <h2 className="font-serif text-3xl lg:text-4xl leading-snug text-center">
              An inclusive, equitable and responsible society in which every person has access to opportunity, dignity, education, health and a healthy environment.
            </h2>
          </div>
          <div className="bg-[#e5d4a9] text-[#083F33] p-10 lg:p-16 rounded-xl shadow-xl flex flex-col justify-center min-h-[400px]">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#083F33]/60 mb-6 block text-center">Our Mission</span>
            <h2 className="font-serif text-3xl lg:text-4xl leading-snug text-center">
              To work with underserved and marginalized communities through education, health awareness, skills, social welfare, environmental responsibility and sustainable development.
            </h2>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-green mb-4">Our Core Values</h2>
          <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
            These six principles guide every decision, programme, and interaction at the Islah Foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white p-10 rounded-xl shadow-sm border border-brand-sage/50 flex flex-col items-center text-center group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-brand-sage/50 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 group-hover:bg-brand-sage transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="font-serif text-3xl text-brand-green mb-3">{val.title}</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed font-medium uppercase tracking-widest">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
