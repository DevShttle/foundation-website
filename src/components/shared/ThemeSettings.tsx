"use client";

import React, { useEffect, useState } from "react";
import { Check, Monitor, Moon, Settings, Sun } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type ThemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "islah-theme";
const THEME_EVENT = "islah-theme-change";

const options: Array<{
  value: ThemePreference;
  label: string;
  description: string;
  icon: typeof Sun;
}> = [
  {
    value: "light",
    label: "Light",
    description: "A clean white interface. This is the default.",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    description: "A softer, low-light reading experience.",
    icon: Moon,
  },
  {
    value: "system",
    label: "Use device setting",
    description: "Follow your phone or computer appearance.",
    icon: Monitor,
  },
];

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export function applyTheme(preference: ThemePreference) {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = preference === "dark" || (preference === "system" && systemDark);

  document.documentElement.classList.toggle("dark", useDark);
  document.documentElement.dataset.theme = preference;
  document.documentElement.style.colorScheme = useDark ? "dark" : "light";
}

interface ThemeSettingsProps {
  className?: string;
  showLabel?: boolean;
  defaultOpen?: boolean;
}

export function ThemeSettings({ className, showLabel = false, defaultOpen = false }: ThemeSettingsProps) {
  const [theme, setTheme] = useState<ThemePreference>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const initialTheme = isThemePreference(savedTheme) ? savedTheme : "light";

    // Retire the old system-driven preference so every visitor starts in light mode
    // unless they deliberately choose a different option in Settings.
    localStorage.removeItem("theme");
    setTheme(initialTheme);
    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if ((localStorage.getItem(STORAGE_KEY) ?? "light") === "system") {
        applyTheme("system");
      }
    };
    const handleThemeEvent = (event: Event) => {
      const nextTheme = (event as CustomEvent<ThemePreference>).detail;
      if (isThemePreference(nextTheme)) {
        setTheme(nextTheme);
        applyTheme(nextTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    window.addEventListener(THEME_EVENT, handleThemeEvent);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
      window.removeEventListener(THEME_EVENT, handleThemeEvent);
    };
  }, []);

  const selectTheme = (preference: ThemePreference) => {
    localStorage.setItem(STORAGE_KEY, preference);
    setTheme(preference);
    applyTheme(preference);
    window.dispatchEvent(new CustomEvent<ThemePreference>(THEME_EVENT, { detail: preference }));
  };

  return (
    <Dialog defaultOpen={defaultOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-brand-green/15 bg-white px-3 text-brand-green shadow-sm transition-colors hover:border-brand-green/40 hover:bg-brand-sage/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 dark:bg-[#1a2522]",
            showLabel && "w-full justify-start rounded-xl px-4",
            className
          )}
          aria-label="Open appearance settings"
        >
          <Settings size={19} aria-hidden="true" />
          {showLabel && <span className="text-sm font-bold">Appearance settings</span>}
        </button>
      </DialogTrigger>

      <DialogContent className="bottom-0 left-0 top-auto w-full max-w-none translate-x-0 translate-y-0 gap-0 rounded-t-3xl border-brand-green/10 bg-white p-0 dark:bg-[#17211e] sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl">
        <DialogHeader className="border-b border-brand-green/10 px-5 pb-5 pt-6 text-left sm:px-6">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-sage/60 text-brand-green dark:bg-brand-green/30 dark:text-brand-sage">
            <Settings size={21} aria-hidden="true" />
          </div>
          <DialogTitle className="font-serif text-2xl text-brand-charcoal dark:text-white">
            Appearance
          </DialogTitle>
          <DialogDescription className="leading-relaxed text-brand-charcoal/65 dark:text-white/65">
            Choose how the Islah Foundation website looks on this device.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 px-5 py-5 sm:px-6">
          {options.map((option) => {
            const Icon = option.icon;
            const selected = theme === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => selectTheme(option.value)}
                className={cn(
                  "flex min-h-[74px] w-full items-center gap-4 rounded-2xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                  selected
                    ? "border-brand-green bg-brand-sage/35 dark:border-brand-gold dark:bg-brand-green/20"
                    : "border-brand-green/10 bg-white hover:bg-brand-sage/20 dark:bg-white/5 dark:hover:bg-white/10"
                )}
                aria-pressed={selected}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sage/60 text-brand-green dark:bg-brand-green/30 dark:text-brand-sage">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-brand-charcoal dark:text-white">
                    {option.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-brand-charcoal/60 dark:text-white/60">
                    {option.description}
                  </span>
                </span>
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
                    selected
                      ? "border-brand-green bg-brand-green text-white dark:border-brand-gold dark:bg-brand-gold"
                      : "border-brand-green/20"
                  )}
                >
                  {selected && <Check size={14} strokeWidth={3} aria-hidden="true" />}
                </span>
              </button>
            );
          })}
        </div>

        <p className="px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] text-center text-[11px] text-brand-charcoal/50 dark:text-white/50 sm:px-6 sm:pb-6">
          Your preference is saved only on this device.
        </p>
      </DialogContent>
    </Dialog>
  );
}
