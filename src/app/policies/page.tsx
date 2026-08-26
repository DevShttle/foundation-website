import React from "react";
import Link from "next/link";
import { Shield, ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { policiesData } from "@/lib/data/policies";

export const metadata = {
  title: "Policies & Organizational Governance | Islah Foundation",
  description: "Explore Islah Foundation's official policies on donation transparency, privacy protection, child safeguarding, and terms of service.",
};

export default function PoliciesIndexPage() {
  const policiesList = Object.values(policiesData);

  return (
    <div className="bg-[#fbf8f1] min-h-screen pb-12 lg:pb-16">
      {/* Hero */}
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4 border-b border-brand-gold/30 pb-2">
            Governance & Transparency
          </span>
          <h1 className="font-serif text-3xl md:text-5xl mb-4">
            Policies & Standards
          </h1>
          <p className="text-sm md:text-base text-brand-sage max-w-2xl mx-auto">
            Our work is guided by strict ethical principles, financial transparency, child protection, and community trust.
          </p>
        </div>
      </section>

      {/* Grid of Policies */}
      <div className="container mx-auto px-4 mt-8 lg:mt-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policiesList.map((policy) => (
            <div
              key={policy.slug}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-brand-sage/40 text-brand-green rounded-full">
                    {policy.category}
                  </span>
                  <Shield size={18} className="text-brand-clay" />
                </div>
                <h2 className="font-serif text-2xl text-brand-green mb-3 group-hover:text-brand-clay transition-colors">
                  {policy.title}
                </h2>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-6">
                  {policy.summary}
                </p>
              </div>

              <Link
                href={`/policies/${policy.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green group-hover:text-brand-clay transition-colors"
              >
                Read Full Policy <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
