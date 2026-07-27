import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, CheckCircle2, Clock } from "lucide-react";

export function TransparencySection() {
  return (
    <section className="py-24 bg-brand-green text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <ShieldCheck size={48} className="mx-auto text-brand-gold mb-6" />
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">
            Your trust matters
          </h2>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto leading-relaxed">
            We are committed to operating with complete transparency. Our governance policies and compliance records are accessible to the public.
          </p>
        </div>

        <div className="bg-white text-brand-charcoal rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-10 lg:p-12 border-b md:border-b-0 md:border-r border-gray-100">
             <h3 className="font-serif text-2xl text-brand-green mb-8">Registration Details</h3>
             <ul className="space-y-6">
               <li className="flex justify-between border-b border-gray-100 pb-3">
                 <span className="text-sm text-gray-500">Legal Entity</span>
                 <span className="text-sm font-bold text-right">Registered Public Charitable Trust</span>
               </li>
               <li className="flex justify-between border-b border-gray-100 pb-3">
                 <span className="text-sm text-gray-500">Registration Date</span>
                 <span className="text-sm font-bold text-right">14 July 2026</span>
               </li>
               <li className="flex justify-between border-b border-gray-100 pb-3">
                 <span className="text-sm text-gray-500">Deed No.</span>
                 <span className="text-sm font-bold text-right">29 (Book No. 4)</span>
               </li>
               <li className="flex justify-between pb-3">
                 <span className="text-sm text-gray-500">Registered Office</span>
                 <span className="text-sm font-bold text-right max-w-[200px]">Chandergaon, PO Laucha, Bahadurganj, Kishanganj</span>
               </li>
             </ul>
          </div>

          <div className="p-10 lg:p-12 bg-brand-ivory">
             <h3 className="font-serif text-2xl text-brand-green mb-8">Compliance Status</h3>
             <ul className="space-y-6">
               <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                 <span className="text-sm text-gray-600 font-medium flex items-center gap-2"><FileText size={16}/> PAN</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-sage/50 px-3 py-1 rounded flex items-center gap-1"><CheckCircle2 size={12}/> Approved</span>
               </li>
               <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                 <span className="text-sm text-gray-600 font-medium flex items-center gap-2"><FileText size={16}/> 12AB</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-brand-clay bg-brand-clay/10 px-3 py-1 rounded flex items-center gap-1"><Clock size={12}/> Application in progress</span>
               </li>
               <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                 <span className="text-sm text-gray-600 font-medium flex items-center gap-2"><FileText size={16}/> 80G</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-brand-clay bg-brand-clay/10 px-3 py-1 rounded flex items-center gap-1"><Clock size={12}/> Application in progress</span>
               </li>
               <li className="flex justify-between items-center pb-3">
                 <span className="text-sm text-gray-600 font-medium flex items-center gap-2"><FileText size={16}/> NGO Darpan</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-brand-clay bg-brand-clay/10 px-3 py-1 rounded flex items-center gap-1"><Clock size={12}/> Application in progress</span>
               </li>
             </ul>
             <div className="mt-8 pt-6 border-t border-gray-200 text-center">
               <Link href="/who-we-are/legal-status" className="text-sm font-bold text-brand-green hover:text-brand-clay transition-colors underline underline-offset-4">
                 View complete governance policies
               </Link>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
