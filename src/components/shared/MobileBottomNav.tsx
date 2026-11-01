"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, HandHeart, Heart, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Our work", href: "/what-we-do", icon: BookOpen },
  { label: "Volunteer", href: "/join-us/volunteer", icon: HandHeart },
  { label: "Donate", href: "/join-us/donate", icon: Heart, emphasised: true },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile quick navigation"
      className="mobile-bottom-nav fixed inset-x-0 bottom-0 z-40 border-t border-brand-green/10 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_rgba(16,58,45,0.10)] backdrop-blur-xl dark:bg-[#17211e]/95 lg:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative flex min-h-[62px] flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-gold",
                active
                  ? "text-brand-green dark:text-brand-gold"
                  : "text-brand-charcoal/55 hover:text-brand-green dark:text-white/55 dark:hover:text-brand-gold"
              )}
            >
              {active && (
                <span className="absolute left-1/2 top-0 h-0.5 w-8 -translate-x-1/2 rounded-full bg-brand-gold" />
              )}
              <span
                className={cn(
                  "flex h-7 w-10 items-center justify-center rounded-full",
                  item.emphasised && !active && "bg-brand-green text-white"
                )}
              >
                <Icon size={19} fill={item.emphasised ? "currentColor" : "none"} aria-hidden="true" />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
