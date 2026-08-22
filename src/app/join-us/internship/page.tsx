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
import { ArrowRight, Upload } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required." }),
  institution: z.string().min(2, { message: "Institution is required." }),
  course: z.string().min(2, { message: "Course details are required." }),
  year: z.string().min(1, { message: "Year or semester is required." }),
  internshipArea: z.string().min(2, { message: "Please specify the internship area." }),
  duration: z.string().min(1, { message: "Preferred duration is required." }),
  startDate: z.string().min(1, { message: "Start date is required." }),
  statement: z.string().min(10, { message: "Statement of interest must be at least 10 characters." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the privacy policy.",
  }),
});

export default function InternshipPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      institution: "",
      course: "",
      year: "",
      internshipArea: "",
      duration: "",
      startDate: "",
      statement: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Application submitted! (Mock)");
    form.reset();
  }

  return (
    <div className="bg-[#f2eee4] min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-join-us.png" alt="Internship" fill className="object-cover z-0 opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-charcoal/80 z-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/20 rounded-l-[200px] pointer-events-none z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Join Us
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Internship Application
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Gain real-world experience while contributing to meaningful community development in Kishanganj.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-brand-sage/50">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Institution *</FormLabel>
                      <FormControl>
                        <Input placeholder="College or University" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Course / Degree *</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. B.A. Sociology" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Year or Semester *</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. 3rd Year" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="internshipArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Internship Area *</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. Education, Data Entry, Media" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Duration *</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. 3 Months" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Start Date *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* File Uploads (Mocked UI) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="border-2 border-dashed border-brand-sage rounded-xl p-6 flex flex-col items-center justify-center text-center bg-brand-ivory/50">
                  <Upload size={24} className="text-brand-clay mb-2" />
                  <span className="text-xs font-bold text-brand-green block mb-1">Resume / CV *</span>
                  <span className="text-[10px] text-gray-500">PDF, max 5MB</span>
                  <input type="file" className="hidden" />
                </div>
                <div className="border-2 border-dashed border-brand-sage rounded-xl p-6 flex flex-col items-center justify-center text-center bg-brand-ivory/50">
                  <Upload size={24} className="text-brand-clay mb-2" />
                  <span className="text-xs font-bold text-brand-green block mb-1">Authorization Letter *</span>
                  <span className="text-[10px] text-gray-500">From Institution</span>
                  <input type="file" className="hidden" />
                </div>
                <div className="border-2 border-dashed border-brand-sage rounded-xl p-6 flex flex-col items-center justify-center text-center bg-brand-ivory/50">
                  <Upload size={24} className="text-brand-clay mb-2" />
                  <span className="text-xs font-bold text-brand-green block mb-1">Portfolio (Optional)</span>
                  <span className="text-[10px] text-gray-500">PDF or Link</span>
                  <input type="file" className="hidden" />
                </div>
              </div>

              <FormField
                control={form.control}
                name="statement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Statement of Interest *</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        className="flex min-h-[120px] w-full rounded-md border border-brand-sage bg-brand-ivory px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
                        placeholder="Why do you want to intern with Islah Foundation and what do you hope to achieve?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-brand-sage p-4 bg-brand-ivory/50">
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
                        Consent & Privacy Policy
                      </FormLabel>
                      <FormDescription className="text-xs text-gray-500">
                        I agree that the information provided is accurate and consent to Islah Foundation processing my data for the purpose of this application.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" className="bg-brand-green hover:bg-[#083F33] text-white rounded font-bold uppercase tracking-widest text-xs py-6 px-8 flex items-center gap-2">
                Submit Application <ArrowRight size={16} />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
