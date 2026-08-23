import React from "react";
import Image from "next/image";
import { Clock, Info } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="bg-brand-ivory min-h-screen pb-12 lg:pb-16">
      {/* Hero */}
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <Image src="/images/headers/header-join-us.png" alt="Support Our Work" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Join Us
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Support Our Work
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Your contributions help provide essential learning resources, mentoring, and support for underserved students.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-24 max-w-3xl text-center">
        
        {/* Empty State / Notice */}
        <div className="bg-white p-12 lg:p-16 rounded-xl shadow-sm border border-brand-sage/50 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-brand-clay/10 rounded-full flex items-center justify-center text-brand-clay mb-6">
            <Clock size={32} />
          </div>
          <h2 className="font-serif text-3xl text-brand-green mb-4">Payment Gateway Integration Pending</h2>
          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-8 max-w-xl">
            We are currently finalizing our bank account and payment gateway setups as a newly registered trust. Online donation collection will be activated shortly.
          </p>
          
          <div className="bg-[#fbf8f1] border border-[#e1dfda] p-6 rounded-lg text-left w-full max-w-xl">
            <h4 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2"><Info size={18} className="text-brand-clay"/> Important Tax Information</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Please note that our 80G (Tax Deduction) application is currently in progress. At this time, tax-deduction approval is not currently being claimed.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
