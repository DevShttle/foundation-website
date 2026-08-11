"use client";
import React from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight, Building2, Users, GraduationCap, HeartHandshake } from "lucide-react";

const formSchema = z.object({
  organizationName: z.string().min(2, { message: "Organization name is required." }),
  contactPerson: z.string().min(2, { message: "Contact person is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
  partnershipType: z.string().min(2, { message: "Please specify the partnership type." }),
  proposal: z.string().min(20, { message: "Proposal must be at least 20 characters." }),
});

export default function PartnerWithUsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnershipType: "",
      proposal: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Inquiry submitted! (Mock)");
    form.reset();
  }

  return (
    <div className="bg-[#fbf8f1] min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-join-us.jpg" alt="Partner With Us" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-green/80 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Join Us
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Partner With Us
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Collaboration is key to sustainable impact. We work with institutions and organizations aligned with our mission.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-sage/50 text-center flex flex-col items-center">
            <GraduationCap className="text-brand-clay mb-4" size={32} />
            <h3 className="font-bold text-brand-green mb-2">Schools & Colleges</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Educational alignment and resource sharing.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-sage/50 text-center flex flex-col items-center">
            <Building2 className="text-brand-clay mb-4" size={32} />
            <h3 className="font-bold text-brand-green mb-2">CSR Partnerships</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Corporate social responsibility implementation.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-sage/50 text-center flex flex-col items-center">
            <Users className="text-brand-clay mb-4" size={32} />
            <h3 className="font-bold text-brand-green mb-2">Community Partners</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Local NGOs and grassroots organizations.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-sage/50 text-center flex flex-col items-center">
            <HeartHandshake className="text-brand-clay mb-4" size={32} />
            <h3 className="font-bold text-brand-green mb-2">In-Kind Contributions</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Donation of educational materials and tech.</p>
          </div>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-brand-sage/50">
          <div className="mb-10 text-center border-b border-gray-100 pb-8">
             <h2 className="font-serif text-3xl text-brand-green mb-4">Partnership Inquiry</h2>
             <p className="text-gray-600 text-sm">Please fill out this form to discuss potential collaboration. Our team will get back to you within 3-5 business days.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="organizationName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Organization Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. XYZ Corporation" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Contact Person *</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="official@email.com" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone with country code" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="partnershipType"
                  render={({ field }) => (
                    <FormItem className="col-span-1 md:col-span-2">
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Type of Partnership *</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. CSR, Academic, In-Kind" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="proposal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Brief Proposal / Idea *</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        className="flex min-h-[120px] w-full rounded-md border border-brand-sage bg-brand-ivory px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
                        placeholder="How can we work together to support education and community welfare in Kishanganj?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="bg-brand-green hover:bg-[#083F33] text-white rounded font-bold uppercase tracking-widest text-xs py-6 px-8 flex items-center gap-2">
                Submit Inquiry <ArrowRight size={16} />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
