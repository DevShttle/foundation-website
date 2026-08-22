import React from "react";
import Link from "next/link";
import { HandHeart, ArrowRight } from "lucide-react";

export function VolunteerCTA() {
  return (
    <section className="bg-brand-clay text-white py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="w-48 h-48 lg:w-64 lg:h-64 border border-white/20 rounded-tl-[100px] rounded-tr-[100px] rounded-bl-lg rounded-br-lg flex items-center justify-center bg-white/5">
              <HandHeart size={80} className="text-white opacity-90" />
            </div>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="font-serif text-4xl lg:text-6xl mb-6">
              Your time can change a student's direction
            </h2>
            <p className="text-[#f1dcd3] text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
              Volunteer as a teacher, mentor, designer, fundraiser, photographer, programme assistant or professional adviser.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/join-us/volunteer" className="bg-white text-brand-clay px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-ivory transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                Become a Volunteer <ArrowRight size={16} />
              </Link>
              <Link href="/join-us/internship" className="bg-transparent border border-white/40 text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                Explore Internships
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
