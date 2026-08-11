import React from "react";
import Image from "next/image";
import { CheckCircle2, Clock, XCircle, MinusCircle } from "lucide-react";

export default function LegalStatusPage() {
  const registrations = [
    { label: "Legal Organization Name", value: "Islah Foundation" },
    { label: "Organization Type", value: "Registered Public Charitable Trust" },
    { label: "Registration Date", value: "14 July 2026" },
    { label: "Deed Number", value: "29" },
    { label: "Book Number", value: "4" },
    { label: "Registration Office", value: "Sub-Registry Office, Bahadurganj, Bihar" },
  ];

  const compliance = [
    { name: "PAN (Permanent Account Number)", status: "Approved", type: "approved" },
    { name: "12AB (Tax Exemption)", status: "Application in progress", type: "pending" },
    { name: "80G (Donor Tax Deduction)", status: "Application in progress", type: "pending" },
    { name: "NGO Darpan (NITI Aayog)", status: "Application in progress", type: "pending" },
    { name: "CSR-1 (Corporate Social Responsibility)", status: "Not yet applied", type: "unapplied" },
    { name: "FCRA (Foreign Contribution)", status: "Not applicable currently", type: "na" },
  ];

  const getStatusIcon = (type: string) => {
    switch (type) {
      case "approved": return <CheckCircle2 size={16} className="text-brand-green" />;
      case "pending": return <Clock size={16} className="text-brand-clay" />;
      case "unapplied": return <MinusCircle size={16} className="text-gray-400" />;
      case "na": return <XCircle size={16} className="text-gray-400" />;
      default: return null;
    }
  };

  const getStatusClass = (type: string) => {
    switch (type) {
      case "approved": return "bg-brand-sage/50 text-brand-green";
      case "pending": return "bg-brand-clay/10 text-brand-clay";
      case "unapplied": return "bg-gray-100 text-gray-500";
      case "na": return "bg-gray-100 text-gray-500";
      default: return "";
    }
  };

  return (
    <div className="bg-[#f2eee4] min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-who-we-are.jpg" alt="Legal Status" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-charcoal/80 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Who We Are
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Legal Status & Compliance
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            We are committed to operating with complete transparency and adhering to all statutory requirements of the Government of India.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Registration Details */}
          <div>
            <h2 className="font-serif text-3xl text-brand-green mb-6">Registration Details</h2>
            <div className="bg-white rounded-xl shadow-sm border border-brand-sage/50 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {registrations.map((item, idx) => (
                  <li key={idx} className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="font-bold text-brand-charcoal text-right">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compliance Status */}
          <div>
            <h2 className="font-serif text-3xl text-brand-green mb-6">Compliance Status</h2>
            <div className="bg-white rounded-xl shadow-sm border border-brand-sage/50 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {compliance.map((item, idx) => (
                  <li key={idx} className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <span className="font-bold text-brand-charcoal">{item.name}</span>
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded flex items-center gap-2 w-fit sm:w-auto ${getStatusClass(item.type)}`}>
                      {getStatusIcon(item.type)} {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg border border-brand-clay/20 shadow-sm">
              <h3 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2"><Clock size={18} className="text-brand-clay" /> Note for Donors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                As our 80G application is currently in progress, donations made to Islah Foundation do not yet qualify for tax deductions under Section 80G of the Income Tax Act. We will update this page immediately upon approval.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
