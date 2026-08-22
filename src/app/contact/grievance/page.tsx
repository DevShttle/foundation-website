"use client";
import React, { useState } from "react";
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
import { ArrowRight, ShieldAlert, Lock, Upload, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().optional(),
  contactDetails: z.string().optional(),
  relationship: z.string().min(2, { message: "Required" }),
  category: z.string().min(2, { message: "Required" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  incidentDate: z.string().optional(),
  responseMethod: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the privacy policy.",
  }),
});

export default function GrievancePage() {
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactDetails: "",
      relationship: "",
      category: "",
      description: "",
      incidentDate: "",
      responseMethod: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Generate private case reference
    const refNum = "GRIEV-" + Math.floor(100000 + Math.random() * 900000);
    setSubmittedId(refNum);
  }

  return (
    <div className="bg-[#f2eee4] min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-contact.png" alt="Grievance Redressal" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-charcoal/80 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Contact Us
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">Grievance Redressal</h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            A secure and confidential channel to report ethical concerns, feedback, or grievances related to Islah Foundation's operations.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">

        {submittedId ? (
          <div className="bg-white p-12 lg:p-16 rounded-xl shadow-sm border border-brand-sage/50 text-center flex flex-col items-center justify-center">
            <CheckCircle2 size={64} className="text-brand-green mb-6" />
            <h2 className="font-serif text-3xl text-brand-green mb-4">Grievance Submitted Successfully</h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Your report has been received and stored securely. It will be reviewed confidentially by our compliance team.
            </p>
            <div className="bg-[#f2eee4] p-6 rounded-lg w-full max-w-md border border-[#e1dfda]">
              <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-clay mb-2">Case Reference Number</span>
              <strong className="text-3xl font-serif text-brand-charcoal tracking-widest">{submittedId}</strong>
            </div>
            <p className="text-sm text-gray-500 mt-6">Please save this reference number for any future correspondence regarding this matter.</p>
          </div>
        ) : (
          <div className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-brand-sage/50">
            <div className="mb-10 border-b border-gray-100 pb-8 flex gap-6 items-start">
              <div className="w-16 h-16 bg-brand-clay/10 rounded-full flex items-center justify-center text-brand-clay shrink-0">
                <Lock size={32} />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-brand-green mb-2">Strict Confidentiality Notice</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your grievance will be treated confidentially and reviewed through the organization's formal governance process. This submission is securely processed and will <strong>not</strong> be exposed in any public CMS or general administrative panels. You may submit this form anonymously if preferred.
                </p>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <div className="bg-[#fcfbf9] border border-gray-100 p-6 rounded-lg space-y-6">
                  <h3 className="text-sm font-bold text-brand-charcoal uppercase tracking-widest border-b border-gray-200 pb-2">Reporter Information (Optional)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider font-bold text-gray-500">Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Leave blank to remain anonymous" {...field} className="bg-white border-gray-200" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider font-bold text-gray-500">Contact Details (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Email or Phone for follow-up" {...field} className="bg-white border-gray-200" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="relationship"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Relationship to Organization *</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. Volunteer, Parent, Partner" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Complaint Category *</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. Code of Conduct, Financial, Harassment" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Detailed Description *</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          className="flex min-h-[150px] w-full rounded-md border border-brand-sage bg-brand-ivory px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
                          placeholder="Please provide as much detail as possible regarding the incident or concern..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="incidentDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Incident Date (If applicable)</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="responseMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Preferred Response Method</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. Email only, Phone call" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-gray-50 w-full md:w-1/2">
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <span className="text-xs font-bold text-brand-charcoal block mb-1">Upload Supporting File (Optional)</span>
                  <span className="text-[10px] text-gray-500">PDF, JPG, PNG (Max 10MB)</span>
                  <input type="file" className="hidden" />
                </div>

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-brand-sage rounded-md bg-brand-ivory/50">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="accent-brand-green w-4 h-4 mt-0.5"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium text-brand-charcoal">
                          Submission Consent
                        </FormLabel>
                        <FormDescription className="text-xs text-gray-500">
                          I declare that the information provided is true to the best of my knowledge. I understand this will be processed confidentially by authorized personnel only.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest bg-gray-100 px-3 py-1.5 rounded flex items-center gap-1">
                    <ShieldAlert size={12} /> Secure Endpoint
                  </span>
                  <Button type="submit" className="w-full sm:w-auto bg-brand-clay hover:bg-[#96553a] text-white rounded font-bold uppercase tracking-widest text-xs py-6 px-8 flex items-center justify-center gap-2">
                    Submit Securely <ArrowRight size={16} />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}
