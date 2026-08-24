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
import { ArrowRight, MapPin, Mail, Phone, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the privacy policy.",
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Message sent! (Mock)");
    form.reset();
  }

  return (
    <div className="bg-[#f2eee4] min-h-screen pb-12 lg:pb-16">
      {/* Hero */}
      <section className="bg-brand-green text-white py-12 lg:py-16 relative overflow-hidden">
        <Image src="/images/headers/header-contact.png" alt="Contact Us" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-green/40 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            We'd love to hear from you. Whether you want to volunteer, partner, or request assistance.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8 lg:mt-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-sage/50">
              <h2 className="font-serif text-2xl text-brand-green mb-8">Contact Details</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="text-brand-clay shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-charcoal text-sm">Registered Office</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      MASOOM COMPLEX, Chandergaon,<br />
                      Post Office Laucha, Police Station Bahadurganj,<br />
                      District Kishanganj, Bihar 855101, India
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="text-brand-clay shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-charcoal text-sm">Email Address</h3>
                    <a href="mailto:info@islahfoundation.org" className="text-brand-green text-sm hover:underline mt-1 block">info@islahfoundation.org</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="text-brand-clay shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-charcoal text-sm">Phone</h3>
                    <a href="tel:+918757619741" className="text-brand-green text-sm hover:underline mt-1 block">+91 87576 19741</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MessageSquare className="text-brand-clay shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-charcoal text-sm">WhatsApp</h3>
                    <a href="https://wa.me/918757619741" target="_blank" rel="noopener noreferrer" className="text-brand-green text-sm hover:underline mt-1 block">+91 87576 19741 (Chat on WhatsApp)</a>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-brand-charcoal text-sm mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">Saturday to Thursday: 9:00 AM – 5:00 PM<br />Friday: Closed</p>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="h-64 rounded-xl flex items-center justify-center border border-brand-sage/50 relative overflow-hidden bg-brand-sage">
              <iframe
                src="https://maps.google.com/maps?q=MASOOM%20COMPLEX,%20Laucha,%20Bihar%20855101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Islah Foundation Map Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-brand-sage/50">
              <h2 className="font-serif text-3xl text-brand-green mb-8">Send a Message</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
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
                            <Input type="email" placeholder="Enter your email" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Subject *</FormLabel>
                          <FormControl>
                            {/* In a real app this could be a Select for: General, Assistance Request, Partnership, Media */}
                            <Input placeholder="E.g. Assistance Request" {...field} className="bg-brand-ivory border-brand-sage focus-visible:ring-brand-green" />
                          </FormControl>
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
                        <FormLabel className="text-xs uppercase tracking-wider font-bold text-brand-green">Message *</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            className="flex min-h-[150px] w-full rounded-md border border-brand-sage bg-brand-ivory px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
                            placeholder="How can we help you?"
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
                            Privacy Consent
                          </FormLabel>
                          <FormDescription className="text-xs text-gray-500">
                            I agree that the information provided is accurate and consent to Islah Foundation processing my data to respond to my inquiry.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest bg-gray-100 px-3 py-1.5 rounded">CAPTCHA Protected</span>
                    <Button type="submit" className="w-full sm:w-auto bg-brand-green hover:bg-[#083F33] text-white rounded font-bold uppercase tracking-widest text-xs py-6 px-8 flex items-center justify-center gap-2">
                      Send Message <ArrowRight size={16} />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
