"use client";
import React, { useState, useEffect, useRef } from "react";
import { Globe, CaretDown, Check } from "@phosphor-icons/react";

export type LanguageCode = "en" | "hi" | "ur";

interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
}

const languages: LanguageOption[] = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "hi", label: "Hindi", nativeName: "हिन्दी" },
  { code: "ur", label: "Urdu", nativeName: "اردو" },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<LanguageCode>("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize Google Translate & load saved language preference
  useEffect(() => {
    const savedLang = (localStorage.getItem("app_lang") as LanguageCode) || "en";
    setCurrentLang(savedLang);

    // Add Google Translate script if not already present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,ur",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };
    }

    // Apply RTL for Urdu if needed
    if (savedLang === "ur") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }

    // Close dropdown on outside click
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (langCode: LanguageCode) => {
    setCurrentLang(langCode);
    localStorage.setItem("app_lang", langCode);
    setIsOpen(false);

    // Apply RTL layout for Urdu
    if (langCode === "ur") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }

    // Set Google Translate Cookie
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${langCode}; path=/`;

    // Trigger Google Translate dropdown element if available
    const selectElem = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event("change"));
    } else {
      // Refresh page to trigger Google Translate cookie application
      window.location.reload();
    }
  };

  const activeLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden Google Translate container */}
      <div id="google_translate_element" className="hidden" />

      {/* Language Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold hover:bg-white/10 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <Globe size={16} weight="bold" className="text-brand-gold" />
        <span>{activeLangObj.nativeName}</span>
        <CaretDown size={12} weight="bold" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Language Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-[#1a2421] text-brand-charcoal dark:text-white shadow-2xl border border-gray-100 dark:border-gray-800 py-1.5 z-50 animate-in fade-in-50 zoom-in-95">
          <div className="px-3 py-1 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100 dark:border-gray-800 mb-1">
            Select Language / زبان
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-brand-sage/20 dark:hover:bg-brand-green/20 transition-colors ${
                currentLang === lang.code ? "font-bold text-brand-green dark:text-brand-gold bg-brand-sage/10" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="font-semibold">{lang.nativeName}</span>
                <span className="text-[10px] text-gray-400">{lang.label}</span>
              </div>
              {currentLang === lang.code && <Check size={14} weight="bold" className="text-brand-green dark:text-brand-gold" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Global TypeScript declaration for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string
        ) => void;
      };
    };
  }
}
