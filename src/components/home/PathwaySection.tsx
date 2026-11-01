import React from "react";
import { cn } from "@/lib/utils";

interface PathwayStep {
  num: string;
  title: string;
  desc: React.ReactNode;
}

const steps: PathwayStep[] = [
  {
    num: "01",
    title: "Students Stay Connected to Home",
    desc: (
      <>
        Students from nearby village communities attend Islah Academy during the day while continuing to{" "}
        <strong>live and eat at home</strong>. This reduces dependence on costly hostel or residential arrangements.
      </>
    ),
  },
  {
    num: "02",
    title: "Learn in a Structured Full-Day Environment",
    desc: (
      <>
        Students spend the day in a disciplined learning environment with{" "}
        <strong>academic classes, supervised self-study, board preparation, doubt solving and regular study routines</strong>.
        They bring their own lunch and return home before Maghrib.
      </>
    ),
  },
  {
    num: "03",
    title: "Teaching, Monitoring & Guidance",
    desc: (
      <>
        Students receive support through <strong>offline and online/hybrid teaching</strong>, regular academic monitoring
        and mentoring. Teachers work to identify learning gaps, improve consistency and guide students in their studies
        and examinations.
      </>
    ),
  },
  {
    num: "04",
    title: "Tarbiyah, Mentorship & Opportunity",
    desc: (
      <>
        Alongside academics, students receive{" "}
        <strong>Tarbiyah, character guidance, mentorship and exposure to educational opportunities</strong>. Professionals,
        educators and mentors can also interact with students to broaden their awareness and aspirations.
      </>
    ),
  }
];

export function PathwaySection() {
  return (
    <section className="py-6 md:py-12 lg:py-16 bg-[#f2eee4] relative overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-2 border-b border-brand-clay/30 pb-1.5">
            How The Model Works
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-brand-green sm:text-4xl lg:text-5xl">
            How Islah Academy Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-brand-charcoal/75 sm:text-base sm:leading-8">
            A structured educational environment close to home — combining academics, monitoring, Tarbiyah, mentorship
            and opportunity.
          </p>
        </div>

        {/* Snake Flow Roadmap Container */}
        <div className="relative mx-auto max-w-5xl">

          {/* Desktop/Tablet Snake Curved Connecting Line SVG */}
          <div className="hidden sm:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full text-brand-green"
              viewBox="0 0 800 500"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Rounded 90-degree S-curve Snake Path */}
              <path
                d="M 60 30
                   L 60 85
                   Q 60 110 85 110
                   L 715 110
                   Q 740 110 740 135
                   L 740 180

                   M 740 180
                   L 740 235
                   Q 740 260 715 260
                   L 85 260
                   Q 60 260 60 285
                   L 60 330

                   M 60 330
                   L 60 385
                   Q 60 410 85 410
                   L 715 410
                   Q 740 410 740 435
                   L 740 480"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-75"
              />
            </svg>
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="block sm:hidden absolute top-7 bottom-7 left-6 w-0.5 border-l-2 border-dashed border-brand-green/60 pointer-events-none z-0" />

          {/* Step Items */}
          <div className="relative z-10 space-y-10 sm:space-y-16">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 1; // 01 (left), 02 (right), 03 (left), 04 (right)

              return (
                <div
                  key={item.num}
                  className={cn(
                    "flex flex-row items-start gap-4 sm:items-center sm:gap-10",
                    isEven ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row sm:text-left"
                  )}
                >
                  {/* Circle Badge */}
                  <div className="relative shrink-0 z-10">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-brand-green flex items-center justify-center font-serif text-base sm:text-2xl font-bold text-brand-green shadow-md ring-4 ring-brand-green/10 transition-all duration-300 hover:scale-110 hover:border-brand-clay hover:text-brand-clay">
                      {item.num}
                    </div>
                  </div>

                  {/* Text Card */}
                  <div className="max-w-2xl flex-1 rounded-2xl bg-[#f2eee4] p-1 sm:bg-transparent sm:p-0">
                    <h3 className="mb-2 font-serif text-xl font-bold leading-tight text-brand-green sm:text-2xl lg:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-brand-charcoal/80 sm:text-base sm:leading-7 [&_strong]:font-bold [&_strong]:text-brand-charcoal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>


      </div>
    </section>
  );
}
