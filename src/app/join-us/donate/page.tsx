"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Copy, 
  Check, 
  Building2, 
  QrCode, 
  ShieldCheck, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Award,
  ArrowRight,
  Info,
  CheckCircle2
} from "lucide-react";

interface ImpactTier {
  amount: number;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const impactTiers: ImpactTier[] = [
  {
    amount: 500,
    label: "Learning Kit",
    description: "Provides essential textbooks, notebooks, and learning kits for 1 student.",
    icon: <BookOpen className="text-brand-gold" size={24} />,
  },
  {
    amount: 1200,
    label: "Monthly Tutoring",
    description: "Sponsors 1 month of after-school academic support and mentoring.",
    icon: <GraduationCap className="text-brand-clay" size={24} />,
  },
  {
    amount: 3500,
    label: "Term Sponsorship",
    description: "Covers a full academic term of tutoring, mentoring, and supplies.",
    icon: <Award className="text-emerald-600" size={24} />,
  },
  {
    amount: 10000,
    label: "Centre Sponsor",
    description: "Supports digital devices, teaching aids, and learning centre operations.",
    icon: <Sparkles className="text-brand-gold" size={24} />,
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(1200);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form State
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorPan, setDonorPan] = useState("");
  const [paymentMode, setPaymentMode] = useState("upi");
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const bankDetails = {
    accountName: "ISLAH FOUNDATION",
    bankName: "State Bank of India",
    accountNumber: "42589012345",
    ifscCode: "SBIN0001234",
    branch: "Bahadurganj, Kishanganj",
    accountType: "Current / Trust Account",
    upiId: "islahfoundation@upi",
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = "DON-" + Math.floor(100000 + Math.random() * 900000);
    setSubmittedId(refNum);
  };

  const currentEffectiveAmount =
    selectedAmount === "custom"
      ? parseFloat(customAmount) || 0
      : selectedAmount;

  return (
    <div className="bg-[#fbf8f1] min-h-screen pb-12 lg:pb-16">
      {/* Hero Section */}
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <Image 
          src="/images/headers/header-join-us.png" 
          alt="Support Our Work" 
          fill 
          className="object-cover z-0 opacity-25 mix-blend-luminosity" 
          priority 
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4 border-b border-brand-gold/30 pb-2">
            Support Educational Equity
          </span>
          <h1 className="font-serif text-3xl md:text-5xl mb-4 max-w-3xl mx-auto">
            Invest in a Child’s Future in Kishanganj
          </h1>
          <p className="text-sm md:text-base text-brand-sage max-w-2xl mx-auto leading-relaxed">
            Your contributions directly fund after-school academic support, learning materials, mentorship, and foundational skills for underserved children.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8 lg:mt-12 max-w-6xl">
        
        {/* Step 1: Select Contribution Tier */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-clay block mb-2">Step 1</span>
            <h2 className="font-serif text-2xl md:text-3xl text-brand-green">Choose Your Impact Level</h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Select a contribution amount or enter a custom sum to see how your support changes lives.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactTiers.map((tier) => (
              <button
                key={tier.amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(tier.amount);
                  setCustomAmount("");
                }}
                className={`p-6 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                  selectedAmount === tier.amount
                    ? "bg-white border-brand-green shadow-lg ring-2 ring-brand-green/20"
                    : "bg-white/80 border-gray-200 hover:border-brand-sage hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-brand-ivory rounded-xl">{tier.icon}</div>
                    {selectedAmount === tier.amount && (
                      <CheckCircle2 size={20} className="text-brand-green" />
                    )}
                  </div>
                  <span className="text-2xl font-bold text-brand-green block">₹{tier.amount.toLocaleString("en-IN")}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-clay block mb-2">{tier.label}</span>
                  <p className="text-xs text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Custom Amount Selector */}
          <div className="mt-4 bg-white p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal shrink-0">Or Enter Custom Amount:</span>
            <div className="relative w-full sm:w-64">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-brand-green">₹</span>
              <input
                type="number"
                placeholder="e.g. 5000"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount("custom");
                }}
                className="w-full pl-8 pr-4 py-2 text-sm font-bold border border-brand-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green bg-brand-ivory/50"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Payment Details (Bank & UPI) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Bank Transfer Details */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-xl">
                  <Building2 size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-green">Direct Bank Transfer (NEFT / RTGS / IMPS)</h3>
                  <p className="text-xs text-gray-500">Transfer directly to Islah Foundation’s official trust account</p>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-brand-ivory rounded-xl border border-gray-100 text-xs">
                  <span className="font-bold text-gray-500 uppercase tracking-wider">Account Name</span>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0 font-bold text-brand-green text-sm">
                    <span>{bankDetails.accountName}</span>
                    <button 
                      type="button"
                      onClick={() => copyToClipboard(bankDetails.accountName, "accName")}
                      className="p-1 text-gray-400 hover:text-brand-green"
                      title="Copy Account Name"
                    >
                      {copiedField === "accName" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-brand-ivory rounded-xl border border-gray-100 text-xs">
                  <span className="font-bold text-gray-500 uppercase tracking-wider">Bank Name</span>
                  <span className="font-bold text-brand-charcoal text-sm mt-1 sm:mt-0">{bankDetails.bankName}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-brand-ivory rounded-xl border border-gray-100 text-xs">
                  <span className="font-bold text-gray-500 uppercase tracking-wider">Account Number</span>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0 font-mono font-bold text-brand-green text-sm">
                    <span>{bankDetails.accountNumber}</span>
                    <button 
                      type="button"
                      onClick={() => copyToClipboard(bankDetails.accountNumber, "accNum")}
                      className="p-1 text-gray-400 hover:text-brand-green"
                      title="Copy Account Number"
                    >
                      {copiedField === "accNum" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-brand-ivory rounded-xl border border-gray-100 text-xs">
                  <span className="font-bold text-gray-500 uppercase tracking-wider">IFSC Code</span>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0 font-mono font-bold text-brand-green text-sm">
                    <span>{bankDetails.ifscCode}</span>
                    <button 
                      type="button"
                      onClick={() => copyToClipboard(bankDetails.ifscCode, "ifsc")}
                      className="p-1 text-gray-400 hover:text-brand-green"
                      title="Copy IFSC Code"
                    >
                      {copiedField === "ifsc" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-brand-ivory rounded-xl border border-gray-100 text-xs">
                  <span className="font-bold text-gray-500 uppercase tracking-wider">Branch & Type</span>
                  <span className="font-bold text-brand-charcoal text-xs mt-1 sm:mt-0">{bankDetails.branch} ({bankDetails.accountType})</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-lg">
              <ShieldCheck size={18} className="shrink-0 text-emerald-600" />
              <span>Official Registered Public Charitable Trust Account. All funds protected by statutory governance.</span>
            </div>
          </div>

          {/* UPI & QR Code */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between text-center">
            <div>
              <div className="p-3 bg-brand-clay/10 text-brand-clay rounded-xl w-fit mx-auto mb-3">
                <QrCode size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-green mb-1">Instant UPI Transfer</h3>
              <p className="text-xs text-gray-500 mb-6">Scan with PhonePe, Google Pay, Paytm, or BHIM</p>

              {/* QR Code Container */}
              <div className="w-44 h-44 bg-brand-ivory rounded-2xl border-2 border-dashed border-brand-sage mx-auto flex flex-col items-center justify-center p-3 mb-6 shadow-inner relative group">
                <Image
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=upi://pay?pa=${bankDetails.upiId}&pn=Islah%20Foundation&am=${currentEffectiveAmount}&cu=INR`}
                  alt="UPI QR Code"
                  width={150}
                  height={150}
                  className="rounded-lg object-contain"
                />
              </div>

              {/* Copy UPI ID */}
              <div className="bg-brand-ivory p-3 rounded-xl border border-gray-200 flex items-center justify-between max-w-xs mx-auto text-xs">
                <span className="font-mono font-bold text-brand-green">{bankDetails.upiId}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(bankDetails.upiId, "upi")}
                  className="px-2.5 py-1 bg-brand-green text-white rounded font-bold text-[10px] uppercase hover:bg-[#083F33] transition-colors flex items-center gap-1"
                >
                  {copiedField === "upi" ? (
                    <>
                      <Check size={12} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-6">
              Enter amount <strong className="text-brand-green">₹{currentEffectiveAmount.toLocaleString("en-IN")}</strong> in your UPI app when scanning.
            </p>
          </div>
        </div>

        {/* Step 3: Donor Receipt Form */}
        <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
          {submittedId ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif text-3xl text-brand-green mb-2">Thank You for Your Contribution!</h3>
              <p className="text-sm text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed">
                Your support notice has been recorded under Reference ID: <strong className="text-brand-green font-mono">{submittedId}</strong>. A digital receipt acknowledgment will be dispatched to your email shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmittedId(null)}
                className="bg-brand-green text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#083F33]"
              >
                Submit Another Contribution
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-clay block mb-1">Step 3</span>
                <h3 className="font-serif text-2xl text-brand-green">Request Digital Donation Receipt</h3>
                <p className="text-xs text-gray-500">Fill in your details below so we can issue your official receipt acknowledgment after verification.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold text-brand-green block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohammad Rahil"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-brand-sage rounded-lg bg-brand-ivory/50 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-bold text-brand-green block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahil@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-brand-sage rounded-lg bg-brand-ivory/50 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-bold text-brand-green block mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 87576 19741"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-brand-sage rounded-lg bg-brand-ivory/50 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-bold text-brand-green block mb-1">PAN Number (Optional for Tax Reporting)</label>
                  <input
                    type="text"
                    placeholder="e.g. ABCDE1234F"
                    value={donorPan}
                    onChange={(e) => setDonorPan(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-brand-sage rounded-lg bg-brand-ivory/50 focus:outline-none focus:ring-2 focus:ring-brand-green uppercase"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold text-brand-green block mb-1">Payment Method Used</label>
                  <select
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-brand-sage rounded-lg bg-brand-ivory/50 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    <option value="upi">UPI / QR Code Scan</option>
                    <option value="neft">Bank NEFT / RTGS / IMPS</option>
                    <option value="cheque">Cheque / Demand Draft</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase font-bold text-brand-green block mb-1">Selected Amount (₹)</label>
                  <input
                    type="text"
                    disabled
                    value={`₹${currentEffectiveAmount.toLocaleString("en-IN")}`}
                    className="w-full px-3.5 py-2.5 text-sm border border-brand-sage rounded-lg bg-gray-100 font-bold text-brand-green cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-green text-white py-3.5 rounded-lg font-bold uppercase tracking-wider hover:bg-[#083F33] transition-colors shadow-md flex items-center justify-center gap-2"
              >
                Submit Donation Acknowledgment Request <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Tax Exemption & Governance Notice */}
        <div className="mt-8 bg-white p-6 rounded-xl border border-brand-sage/40 flex flex-col md:flex-row items-start gap-4 max-w-4xl mx-auto text-xs">
          <Info size={22} className="text-brand-clay shrink-0 mt-0.5" />
          <div className="space-y-1 text-gray-600 leading-relaxed">
            <p className="font-bold text-brand-charcoal">Tax & Governance Information:</p>
            <p>
              Islah Foundation is a registered public charitable trust in Bihar, India. Our statutory 80G Tax Exemption registration is currently under official processing. For any financial compliance queries or specific grant agreements, please write to our finance team at <a href="mailto:info@islahfoundation.org" className="text-brand-green font-bold hover:underline">info@islahfoundation.org</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
