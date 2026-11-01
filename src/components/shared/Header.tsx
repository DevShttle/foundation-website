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
  WhatsappLogo,
  List,
  X,
  CaretDown
} from "@phosphor-icons/react";
import { LanguageSelector } from "./LanguageSelector";
import { LazyThemeSettings } from "./LazyThemeSettings";

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

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
      {/* Top Utility Bar */}
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
            <a href="tel:+918757619741" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone weight="bold" /> +91 87576 19741
            </a>
            <div className="flex items-center gap-3 ml-2 border-l border-white/20 pl-4">
              <a href="https://www.instagram.com/islah_foundation/" target="_blank" rel="noopener noreferrer" className="hover:text-white" title="Instagram: @islah_foundation"><InstagramLogo size={16} weight="bold" /></a>
              <a href="https://wa.me/918757619741" target="_blank" rel="noopener noreferrer" className="hover:text-white" title="WhatsApp: +91 87576 19741"><WhatsappLogo size={16} weight="bold" /></a>
              <a href="https://www.facebook.com/profile.php?id=61573471513465" target="_blank" rel="noopener noreferrer" className="hover:text-white" title="Facebook: Islah Foundation"><FacebookLogo size={16} weight="bold" /></a>
              <a href="https://www.youtube.com/@islahfoundation" target="_blank" rel="noopener noreferrer" className="hover:text-white" title="YouTube: @islahfoundation"><YoutubeLogo size={16} weight="bold" /></a>
            </div>
            <div className="ml-2 border-l border-white/20 pl-3">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-brand-green/10",
          isScrolled
            ? "bg-white/95 py-2 shadow-sm backdrop-blur-md dark:bg-[#17211e]/95"
            : "bg-white py-3 dark:bg-[#17211e]"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-4">

          {/* Logo */}
          <Link href="/" className="brand-logo-lockup group relative z-20 flex min-w-0 items-center transition-opacity hover:opacity-90">
            <span className="brand-logo-mark relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-brand-green/10 sm:h-14 sm:w-14">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                sizes="128px"
                quality={100}
                className="scale-[2.02] object-contain"
                priority
              />
            </span>
            <span className="brand-logo-name ml-2 truncate font-serif text-[17px] font-bold tracking-tight text-[#0C5B48] min-[390px]:text-xl sm:ml-3 sm:text-2xl xl:text-[1.7rem]">
              Islah Foundation
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold hover:text-brand-green transition-colors flex items-center gap-1",
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"))
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

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 xl:flex">
            <LazyThemeSettings />
            <Link
              href="/join-us/donate"
              className="inline-flex min-h-11 items-center rounded-lg bg-brand-green px-5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#083F33]"
            >
              Support us
            </Link>
          </div>

          {/* Mobile CTAs & Menu Toggle */}
          <div className="relative z-30 ml-auto flex shrink-0 items-center gap-1.5 xl:hidden sm:gap-2">
            <Link
              href="/join-us/donate"
              className="hidden min-h-10 items-center whitespace-nowrap rounded-lg bg-brand-green px-3 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm min-[360px]:inline-flex sm:min-h-11 sm:px-4 sm:text-xs"
            >
              Donate
            </Link>
            
            <button
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-brand-green transition-colors hover:bg-brand-sage/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 top-full flex h-[calc(100dvh-4.25rem)] w-full flex-col overflow-y-auto border-t border-brand-green/10 bg-white p-4 pb-[calc(7rem+env(safe-area-inset-bottom))] shadow-xl dark:bg-[#17211e] xl:hidden"
          >
            <nav className="mt-1 flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col rounded-xl border border-brand-green/10 bg-brand-sage/10 px-4 dark:bg-white/5">
                  <Link
                    href={link.href}
                    className="flex min-h-12 items-center font-serif text-lg font-bold text-brand-green dark:text-brand-sage"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="grid grid-cols-1 gap-1 border-t border-brand-green/10 pb-3 pt-2 min-[420px]:grid-cols-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex min-h-10 items-center rounded-lg px-2 text-sm font-semibold text-brand-charcoal/75 hover:bg-brand-sage/30 hover:text-brand-green dark:text-white/75"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-3 grid gap-2 border-t border-brand-green/10 pt-4 min-[420px]:grid-cols-2">
                <LazyThemeSettings showLabel />
                <div className="flex min-h-11 items-center justify-between rounded-xl border border-brand-green/15 bg-white px-3 shadow-sm dark:bg-[#1a2522]">
                  <span className="text-sm font-bold text-brand-charcoal dark:text-white">Language</span>
                  <LanguageSelector />
                </div>
              </div>

              <Link
                href="/join-us/donate"
                className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-brand-green text-center text-sm font-bold uppercase tracking-wider text-white shadow-sm"
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
