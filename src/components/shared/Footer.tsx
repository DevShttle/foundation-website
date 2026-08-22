import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple, MapPin, Phone, InstagramLogo, FacebookLogo, YoutubeLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062d25] text-[#a9c0b9] pt-20 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 text-white group w-fit hover:opacity-80 transition-opacity">
              <div className="bg-white p-2 rounded-lg inline-flex">
                <Image src="/images/logo.png" alt="Islah Foundation" width={150} height={150} className="w-auto h-24 scale-[2] object-contain" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mt-2">
              Empowering underserved students and communities through education, mentoring, and values-based development.
            </p>
            <div className="mt-2 space-y-1 text-xs opacity-80">
              <p>Registered Public Charitable Trust</p>
              <p>Community initiative since 2024</p>
            </div>
          </div>

          {/* Column 2: Who We Are */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-2">Who We Are</h4>
            <Link href="/who-we-are/our-story" className="text-sm hover:text-white transition-colors">Our Story</Link>
            <Link href="/who-we-are/board-of-trustees" className="text-sm hover:text-white transition-colors">Board of Trustees</Link>
            <Link href="/who-we-are/legal-status" className="text-sm hover:text-white transition-colors">Legal Status</Link>
            <Link href="/news-resources/reports" className="text-sm hover:text-white transition-colors">Policies</Link>
          </div>

          {/* Column 3: What We Do */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-2">What We Do</h4>
            <Link href="/what-we-do/education" className="text-sm hover:text-white transition-colors">Education Support</Link>
            <Link href="/what-we-do/mentorship" className="text-sm hover:text-white transition-colors">Mentorship</Link>
            <Link href="/what-we-do/skills" className="text-sm hover:text-white transition-colors">Skills & Digital</Link>
            <Link href="/impact/stories" className="text-sm hover:text-white transition-colors">Impact Stories</Link>
          </div>

          {/* Column 4: Get Involved */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-2">Get Involved</h4>
            <Link href="/join-us/volunteer" className="text-sm hover:text-white transition-colors">Volunteer</Link>
            <Link href="/join-us/internship" className="text-sm hover:text-white transition-colors">Internship</Link>
            <Link href="/join-us/partner-with-us" className="text-sm hover:text-white transition-colors">Partnership</Link>
            <Link href="/join-us/donate" className="text-sm hover:text-white transition-colors">Donate</Link>
            <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Column 5: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-2">Contact</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="shrink-0 mt-0.5 text-brand-gold" />
              <p>MASOOM COMPLEX, Chandergaon<br />PO Laucha, PS Bahadurganj<br />Dist Kishanganj<br />Bihar 855101, India</p>
            </div>
            <a href="mailto:info@islahfoundation.org" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
              <EnvelopeSimple size={18} className="text-brand-gold" />
              info@islahfoundation.org
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
              <Phone size={18} className="text-brand-gold" />
              +91 000 000 0000
            </a>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors">
                <InstagramLogo size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors">
                <FacebookLogo size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors">
                <WhatsappLogo size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors">
                <YoutubeLogo size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs opacity-70">
          <p>&copy; {currentYear} Islah Foundation. All rights reserved.</p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
            <Link href="/policies/privacy" className="hover:text-white hover:underline underline-offset-4">Privacy Policy</Link>
            <Link href="/policies/child-safeguarding" className="hover:text-white hover:underline underline-offset-4">Child Safeguarding</Link>
            <Link href="/policies/donation" className="hover:text-white hover:underline underline-offset-4">Donation Policy</Link>
            <Link href="/policies/terms" className="hover:text-white hover:underline underline-offset-4">Terms of Use</Link>
            <Link href="/grievance" className="hover:text-white hover:underline underline-offset-4">Grievance</Link>
            <Link href="/accessibility" className="hover:text-white hover:underline underline-offset-4">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-white hover:underline underline-offset-4">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
