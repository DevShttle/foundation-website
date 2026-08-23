import React from "react";
import Image from "next/image";
import { FileText, Download, ShieldCheck, FileCheck2 } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    {
      category: "Annual Reports",
      icon: FileText,
      items: [
        { title: "Annual Activity Report 2024-2025", date: "April 2025", size: "2.4 MB", url: "/reports/annual-report-2024-2025.pdf" },
        { title: "Community Initiative Summary 2024", date: "December 2024", size: "1.1 MB", url: "/reports/community-summary-2024.pdf" }
      ]
    },
    {
      category: "Governance & Legal",
      icon: FileCheck2,
      items: [
        { title: "Registered Trust Deed (Redacted)", date: "July 2026", size: "4.5 MB", url: "/reports/trust-deed.pdf" },
        { title: "Trustee Board Resolution (Extract)", date: "July 2026", size: "0.8 MB", url: "/reports/board-resolution.pdf" }
      ]
    },
    {
      category: "Policies",
      icon: ShieldCheck,
      items: [
        { title: "Child Safeguarding Policy", date: "August 2026", size: "1.2 MB", url: "/reports/safeguarding-policy.pdf" },
        { title: "Anti-Discrimination & Inclusion Policy", date: "August 2026", size: "0.9 MB", url: "/reports/anti-discrimination-policy.pdf" },
        { title: "Financial Transparency Framework", date: "August 2026", size: "1.5 MB", url: "/reports/financial-framework.pdf" }
      ]
    }
  ];

  return (
    <div className="bg-brand-ivory min-h-screen pb-12 lg:pb-16">
      {/* Hero */}
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <Image src="/images/headers/header-news.png" alt="Reports" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            News & Resources
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Reports & Publications
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Access our official documentation, financial summaries, and governance policies. We believe in absolute transparency.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl space-y-16">
        
        {reports.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-6 border-b border-brand-sage/50 pb-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-sage flex items-center justify-center text-brand-green">
                  <Icon size={24} />
                </div>
                <h2 className="font-serif text-3xl text-brand-green">{section.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-brand-sage/50 flex items-start justify-between group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div>
                      <h3 className="font-bold text-brand-charcoal mb-2 group-hover:text-brand-green transition-colors">{item.title}</h3>
                      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>PDF ({item.size})</span>
                      </div>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f2eee4] flex items-center justify-center text-brand-clay group-hover:bg-brand-clay group-hover:text-white transition-colors shrink-0">
                      <Download size={18} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 bg-[#fbf8f1] border border-[#e1dfda] p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
           <div>
             <h4 className="font-bold text-brand-charcoal mb-1">Looking for a specific document?</h4>
             <p className="text-sm text-gray-600">If you are a partner or regulatory body requiring additional information, please contact our administrative office.</p>
           </div>
           <a href="/contact" className="bg-white text-brand-charcoal border border-gray-200 px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:border-brand-clay transition-colors whitespace-nowrap shrink-0">
             Contact Office
           </a>
        </div>

      </div>
    </div>
  );
}
