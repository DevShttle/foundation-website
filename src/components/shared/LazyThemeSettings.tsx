"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeSettings = dynamic(
  () => import("./ThemeSettings").then((module) => module.ThemeSettings),
  { ssr: false }
);

interface LazyThemeSettingsProps {
  className?: string;
  showLabel?: boolean;
}

export function LazyThemeSettings({ className, showLabel = false }: LazyThemeSettingsProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return <ThemeSettings className={className} showLabel={showLabel} defaultOpen />;
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
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
  );
}
