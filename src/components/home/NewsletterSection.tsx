"use client";
import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#e7e0d1]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-5/12">
            <h2 className="font-serif text-3xl lg:text-4xl text-brand-green mb-4">
              Stay connected with our work
            </h2>
            <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-6">
              Receive programme updates, volunteer opportunities and community stories. No spam.
            </p>
          </div>

          <div className="w-full lg:w-7/12">
            {submitted ? (
              <div className="bg-white/50 border border-brand-green/20 p-8 rounded-lg flex items-center gap-4">
                <CheckCircle2 size={32} className="text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green">Thank you for subscribing!</h4>
                  <p className="text-sm text-brand-charcoal/70">You will receive our next update soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required 
                    className="w-full bg-transparent border-b border-brand-charcoal/20 px-0 py-3 text-brand-charcoal placeholder:text-brand-charcoal/50 focus:outline-none focus:border-brand-green transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className="w-full bg-transparent border-b border-brand-charcoal/20 px-0 py-3 text-brand-charcoal placeholder:text-brand-charcoal/50 focus:outline-none focus:border-brand-green transition-colors"
                  />
                  <div className="flex items-center gap-2 mt-4">
                    <input type="checkbox" id="consent" required className="accent-brand-green" />
                    <label htmlFor="consent" className="text-xs text-brand-charcoal/60 cursor-pointer">
                      I agree to receive updates and accept the privacy policy
                    </label>
                  </div>
                </div>
                <button type="submit" className="h-12 px-8 bg-brand-green text-white rounded font-bold uppercase tracking-widest text-xs hover:bg-[#083F33] transition-colors flex items-center justify-center gap-2 sm:self-start mt-2">
                  Subscribe <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
