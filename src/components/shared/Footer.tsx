import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple, MapPin, Phone, InstagramLogo, FacebookLogo, YoutubeLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062d25] text-[#a9c0b9] pt-8 sm:pt-16 lg:pt-20 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Top Footer Grid: 2 columns on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16">

          {/* Column 1: Brand */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3.5 text-white group w-fit hover:opacity-80 transition-opacity">
              <div className="bg-white p-2 rounded-xl inline-flex items-center justify-center shadow-md overflow-hidden w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <Image 
                  src="/images/logo.png" 
                  alt="Islah Foundation" 
                  width={200} 
                  height={200} 
                  className="w-auto h-full scale-[1.7] object-contain origin-center" 
                />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">Islah Foundation</span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed">
              Empowering underserved students and communities through education, mentoring, and values-based development.
            </p>
            <div className="space-y-1 text-xs opacity-80">
              <p>Registered Public Charitable Trust</p>
              <p>Community initiative since 2024</p>
            </div>
          </div>

          {/* Column 2: Who We Are */}
          <div className="col-span-1 flex flex-col gap-3 sm:gap-4">
            <h4 className="text-white text-[11px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2">Who We Are</h4>
            <Link href="/who-we-are/our-story" className="text-xs sm:text-sm hover:text-white transition-colors">Our Story</Link>
            <Link href="/who-we-are/board-of-trustees" className="text-xs sm:text-sm hover:text-white transition-colors">Board of Trustees</Link>
            <Link href="/who-we-are/legal-status" className="text-xs sm:text-sm hover:text-white transition-colors">Legal Status</Link>
            <Link href="/news-resources/reports" className="text-xs sm:text-sm hover:text-white transition-colors">Policies</Link>
          </div>

          {/* Column 3: What We Do */}
          <div className="col-span-1 flex flex-col gap-3 sm:gap-4">
            <h4 className="text-white text-[11px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2">What We Do</h4>
            <Link href="/what-we-do/education" className="text-xs sm:text-sm hover:text-white transition-colors">Education Support</Link>
            <Link href="/what-we-do/mentorship" className="text-xs sm:text-sm hover:text-white transition-colors">Mentorship</Link>
            <Link href="/what-we-do/skills" className="text-xs sm:text-sm hover:text-white transition-colors">Skills & Digital</Link>
            <Link href="/impact/stories" className="text-xs sm:text-sm hover:text-white transition-colors">Impact Stories</Link>
          </div>

          {/* Column 4: Get Involved */}
          <div className="col-span-1 flex flex-col gap-3 sm:gap-4">
            <h4 className="text-white text-[11px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2">Get Involved</h4>
            <Link href="/join-us/volunteer" className="text-xs sm:text-sm hover:text-white transition-colors">Volunteer</Link>
            <Link href="/join-us/internship" className="text-xs sm:text-sm hover:text-white transition-colors">Internship</Link>
            <Link href="/join-us/partner-with-us" className="text-xs sm:text-sm hover:text-white transition-colors">Partnership</Link>
            <Link href="/join-us/donate" className="text-xs sm:text-sm hover:text-white transition-colors">Donate</Link>
            <Link href="/contact" className="text-xs sm:text-sm hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col gap-3 sm:gap-4">
            <h4 className="text-white text-[11px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2">Contact</h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <MapPin size={16} className="shrink-0 mt-0.5 text-brand-gold" />
              <p>MASOOM COMPLEX, Chandergaon<br />PO Laucha, PS Bahadurganj<br />Dist Kishanganj<br />Bihar 855101, India</p>
            </div>
            <a href="mailto:info@islahfoundation.org" className="flex items-center gap-2.5 text-xs sm:text-sm hover:text-white transition-colors">
              <EnvelopeSimple size={16} className="text-brand-gold shrink-0" />
              <span className="truncate">info@islahfoundation.org</span>
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-2.5 text-xs sm:text-sm hover:text-white transition-colors">
              <Phone size={16} className="text-brand-gold shrink-0" />
              <span>+91 000 000 0000</span>
            </a>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-2 flex-wrap">
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
