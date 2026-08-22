import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, ShieldCheck, Users, Scale } from "lucide-react";

export default function WhoWeAreIndexPage() {
  const sections = [
    {
      title: "Our Story",
      desc: "Learn how a small community initiative grew into a registered public charitable trust.",
      icon: BookOpen,
      href: "/who-we-are/our-story"
    },
    {
      title: "Vision, Mission & Values",
      desc: "The ethical principles that guide our work and our long-term goals for Kishanganj.",
      icon: ShieldCheck,
      href: "/who-we-are/vision-mission-values"
    },
    {
      title: "Board of Trustees",
      desc: "Meet the individuals responsible for governance and strategic direction.",
      icon: Users,
      href: "/who-we-are/board-of-trustees"
    },
    {
      title: "Legal Status & Compliance",
      desc: "View our registration details and transparent compliance tracking.",
      icon: Scale,
      href: "/who-we-are/legal-status"
    }
  ];

  return (
    <div className="bg-brand-ivory min-h-screen pb-24">
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-who-we-are.png" alt="Who We Are" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-green/ z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Who We Are
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            About Islah Foundation
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            A community-led public charitable trust dedicated to educational equity and social welfare in Kishanganj, Bihar.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <Link key={idx} href={sec.href} className="bg-white p-8 rounded-xl shadow-sm border border-brand-sage/50 flex flex-col group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-brand-sage/50 rounded-xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h2 className="font-serif text-2xl text-brand-green mb-3">{sec.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-8">
                  {sec.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-clay group-hover:text-brand-green transition-colors mt-auto">
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
