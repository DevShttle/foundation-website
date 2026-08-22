import React from "react";
import Link from "next/link";
import { BookOpenText, Users, Laptop, HeartHandshake, ArrowRight } from "lucide-react";

export function QuickNav() {
  const cards = [
    {
      icon: BookOpenText,
      title: "Education Support",
      desc: "Academic support and learning access shaped around local needs.",
      link: "/what-we-do/education",
    },
    {
      icon: Users,
      title: "Student Mentorship",
      desc: "Patient guidance that helps young people build confidence and direction.",
      link: "/what-we-do/mentorship",
    },
    {
      icon: Laptop,
      title: "Skills & Digital Literacy",
      desc: "Practical digital and career-readiness foundations for a changing world.",
      link: "/what-we-do/skills",
    },
    {
      icon: HeartHandshake,
      title: "Community Development",
      desc: "Community-led wellbeing, awareness and responsible service.",
      link: "/what-we-do/community",
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-0 lg:-mt-16 relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-white lg:shadow-[0_15px_40px_rgba(16,58,45,0.06)] lg:rounded-xl lg:border border-brand-sage flex flex-col lg:flex-row overflow-hidden">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="flex-1 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-brand-sage last:border-0 group hover:bg-brand-sage/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-sage flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-xl mb-3 text-brand-charcoal">{card.title}</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-6 h-auto lg:h-16">
                  {card.desc}
                </p>
                <Link
                  href={card.link}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green group-hover:text-brand-clay transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
