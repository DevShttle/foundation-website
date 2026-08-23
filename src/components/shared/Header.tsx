"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Phone,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  Globe,
  List,
  X,
  CaretDown
} from "@phosphor-icons/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Who We Are",
      href: "/who-we-are",
      children: [
        { label: "Our Story", href: "/who-we-are/our-story" },
        { label: "Vision & Values", href: "/who-we-are/vision-mission-values" },
        { label: "Structure", href: "/who-we-are/structure" },
        { label: "Board of Trustees", href: "/who-we-are/board-of-trustees" },
        { label: "Legal Status", href: "/who-we-are/legal-status" },
      ]
    },
    {
      label: "What We Do",
      href: "/what-we-do",
      children: [
        { label: "Education Support", href: "/what-we-do/education" },
        { label: "Mentorship", href: "/what-we-do/mentorship" },
        { label: "Skills & Digital", href: "/what-we-do/skills" }
      ]
    },
    { label: "Impact", href: "/impact" },
    {
      label: "Join Us",
      href: "/join-us",
      children: [
        { label: "Volunteer", href: "/join-us/volunteer" },
        { label: "Internship", href: "/join-us/internship" },
        { label: "Partner", href: "/join-us/partner-with-us" },
        { label: "Careers", href: "/join-us/careers" },
      ]
    },
    { label: "News", href: "/news-resources" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-[#083F33] text-[#DCEBE6] text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="font-semibold tracking-wider uppercase text-[10px]">Registered Public Charitable Trust</span>
            <span className="opacity-80">Kishanganj, Bihar</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@islahfoundation.org" className="flex items-center gap-2 hover:text-white transition-colors">
              <EnvelopeSimple weight="bold" /> info@islahfoundation.org
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone weight="bold" /> +91 000 000 0000
            </a>
            <div className="flex items-center gap-3 ml-2 border-l border-white/20 pl-4">
              <a href="#" className="hover:text-white"><InstagramLogo size={16} weight="bold" /></a>
              <a href="#" className="hover:text-white"><FacebookLogo size={16} weight="bold" /></a>
              <a href="#" className="hover:text-white"><YoutubeLogo size={16} weight="bold" /></a>
            </div>
            <div className="flex items-center gap-2 ml-2 border-l border-white/20 pl-4 cursor-pointer hover:text-white">
              <Globe weight="bold" /> En
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-brand-green/10",
          isScrolled
            ? "bg-brand-ivory/95 backdrop-blur-md shadow-sm py-3"
            : "bg-brand-ivory py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-6 text-brand-green group hover:opacity-80 transition-opacity relative z-20 shrink-0">
            <Image src="/images/logo.png" alt="Islah Foundation" width={150} height={150} className="w-auto h-12 sm:h-18 md:h-24 scale-[1.6] sm:scale-[1.8] origin-left object-contain" />
            <span className="font-serif text-base sm:text-xl md:text-2xl font-bold ml-2 sm:ml-4 lg:ml-10 tracking-wide text-brand-green shrink min-w-0">Islah Foundation</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold hover:text-brand-green transition-colors flex items-center gap-1",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-brand-green"
                      : "text-brand-charcoal"
                  )}
                >
                  {link.label}
                  {link.children && <CaretDown size={12} weight="bold" className="opacity-60 group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-gray-100 shadow-xl rounded-md py-2 w-56 flex flex-col">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="px-5 py-2.5 text-sm hover:bg-brand-sage/30 hover:text-brand-green transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/join-us/donate"
              className="bg-brand-green text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#083F33] transition-colors"
            >
              Support Our Work
            </Link>
          </div>

          {/* Mobile CTAs & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4 relative z-30 shrink-0">
            <Link
              href="/join-us/donate"
              className="bg-brand-green text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap"
            >
              Donate
            </Link>
            <button
              className="text-brand-green"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-brand-ivory border-t border-brand-green/10 shadow-lg p-4 flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    className="text-lg font-serif font-bold text-brand-green border-b border-brand-green/10 pb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="flex flex-col gap-3 pl-4 pt-2 pb-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="text-sm font-semibold opacity-80"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/join-us/donate"
                className="mt-6 bg-brand-green text-white text-center py-4 rounded font-bold uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Support Our Work
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
