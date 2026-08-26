import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, ArrowLeft, Calendar, FileText } from "lucide-react";
import { policiesData } from "@/lib/data/policies";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const policy = policiesData[resolvedParams.slug];
  if (!policy) return { title: "Policy Not Found | Islah Foundation" };
  return {
    title: `${policy.title} | Islah Foundation`,
    description: policy.summary,
  };
}

export default async function PolicyDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const policy = policiesData[resolvedParams.slug];

  if (!policy) {
    notFound();
  }

  return (
    <div className="bg-[#fbf8f1] min-h-screen pb-12 lg:pb-16">
      {/* Hero Header */}
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4 border-b border-brand-gold/30 pb-2">
            {policy.category}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl mb-4 max-w-4xl mx-auto">
            {policy.title}
          </h1>
          <p className="text-sm md:text-base text-brand-sage max-w-2xl mx-auto leading-relaxed">
            {policy.summary}
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-brand-gold">
            <Calendar size={14} /> Last Updated: {policy.lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Document Content */}
      <div className="container mx-auto px-4 mt-8 lg:mt-12 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/policies"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors"
          >
            <ArrowLeft size={14} /> Back to Policies
          </Link>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-8">
          <div className="flex items-center gap-3 p-4 bg-brand-ivory rounded-xl border border-brand-sage/40 text-brand-green text-xs font-semibold">
            <ShieldCheck size={20} className="shrink-0 text-brand-clay" />
            <span>This is an official governance policy of Islah Foundation (Registered Public Charitable Trust, Bihar, India).</span>
          </div>

          {policy.sections.map((section, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
              <h2 className="font-serif text-xl md:text-2xl text-brand-green mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom Help Note */}
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-ivory/60 p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <FileText size={22} className="text-brand-green shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-brand-green">Have questions regarding our policies?</p>
                <p className="text-gray-500">Contact our administrative office for clarification or documentation.</p>
              </div>
            </div>
            <a
              href="mailto:info@islahfoundation.org"
              className="bg-brand-green text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#083F33] transition-colors shrink-0"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
