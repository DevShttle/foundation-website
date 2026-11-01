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
    <section className="relative z-20 bg-white py-8 dark:bg-[#1a2522] lg:-mt-16 lg:bg-transparent lg:py-0">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="mb-4 flex items-end justify-between px-4 lg:hidden">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">Explore</p>
            <h2 className="font-serif text-2xl text-brand-charcoal dark:text-white">How we help</h2>
          </div>
          <span className="text-[11px] font-semibold text-brand-charcoal/50 dark:text-white/50">Swipe →</span>
        </div>
        <div className="mobile-card-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 lg:gap-0 lg:overflow-hidden lg:rounded-xl lg:border lg:border-brand-sage lg:bg-white lg:p-0 lg:shadow-[0_15px_40px_rgba(16,58,45,0.06)] dark:lg:bg-[#1a2522]">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group min-w-[82vw] snap-center rounded-2xl border border-brand-sage bg-white p-6 shadow-[0_8px_24px_rgba(16,58,45,0.06)] transition-colors hover:bg-brand-sage/20 dark:bg-[#1a2522] dark:hover:bg-[#24332f] min-[480px]:min-w-[62vw] sm:min-w-[46vw] lg:min-w-0 lg:flex-1 lg:snap-none lg:rounded-none lg:border-0 lg:border-r lg:p-9 lg:shadow-none lg:last:border-0 xl:p-10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-sage text-brand-green transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 font-serif text-xl text-brand-charcoal dark:text-white">{card.title}</h3>
                <p className="mb-6 min-h-[66px] text-sm leading-relaxed text-brand-charcoal/70 dark:text-white/70 lg:h-16 lg:min-h-0">
                  {card.desc}
                </p>
                <Link
                  href={card.link}
                  className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green transition-colors group-hover:text-brand-clay dark:text-brand-sage"
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
