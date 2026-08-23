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
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
  areasOfInterest: z.string().min(2, { message: "Please specify your areas of interest." }),
  message: z.string().optional(),
});

export default function VolunteerPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      areasOfInterest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Thank you for your interest! (Mock submission)");
    form.reset();
  }

  return (
    <div className="bg-[#f2eee4] min-h-screen pb-12 lg:pb-16">
      {/* Hero */}
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <Image src="/images/headers/header-join-us.png" alt="Volunteer" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Join Us
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">Become a Volunteer</h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Your time can change a student's direction. Join our community of dedicated volunteers working to improve access to education in Kishanganj.
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" type="email" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
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
                        <Input placeholder="Enter your phone number" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="areasOfInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Areas of Interest *</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. Teaching, Mentoring, Design" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                      </FormControl>
                      <FormDescription className="text-[10px]">
                        Let us know how you would like to contribute.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Message (Optional)</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        className="flex min-h-[120px] w-full rounded-md border border-brand-sage bg-brand-ivory px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us a little bit about why you want to volunteer..."
                      />
                    </FormControl>
                    <FormMessage />
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
