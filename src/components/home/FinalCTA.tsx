import React from "react";
import Link from "next/link";
import { ArrowRight, HandHeart } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 text-center text-white bg-brand-green relative overflow-hidden">
      {/* Education & Geometry Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute -top-40 -right-40 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-20 h-20 border border-white/20 rounded-full mx-auto flex items-center justify-center mb-8 bg-white/5 shadow-xl">
          <span className="font-serif text-3xl">I</span>
        </div>
        
        <h2 className="font-serif text-5xl lg:text-6xl mb-6 leading-tight max-w-3xl mx-auto">
          Help create a fairer path to education
        </h2>
        
        <p className="text-[#bed2cb] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Join us in empowering underserved students and communities in Kishanganj. Your support helps provide learning resources, mentorship, and opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/join-us/donate" className="bg-brand-gold text-white px-10 py-5 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#a6822c] transition-colors shadow-xl w-full sm:w-auto flex justify-center items-center gap-2">
            Support Our Work <ArrowRight size={16} />
          </Link>
          <Link href="/join-us/volunteer" className="bg-transparent border border-white/30 text-white px-10 py-5 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto flex justify-center items-center gap-2">
            Volunteer With Us <HandHeart size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
