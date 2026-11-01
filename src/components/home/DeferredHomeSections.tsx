"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ImpactSection = dynamic(
  () => import("./ImpactSection").then((module) => module.ImpactSection),
  { ssr: false }
);
const StoriesSection = dynamic(
  () => import("./StoriesSection").then((module) => module.StoriesSection),
  { ssr: false }
);
const TestimonialsSection = dynamic(
  () => import("./TestimonialsSection").then((module) => module.TestimonialsSection),
  { ssr: false }
);
const GallerySection = dynamic(
  () => import("./GallerySection").then((module) => module.GallerySection),
  { ssr: false }
);
const UpdatesSection = dynamic(
  () => import("./UpdatesSection").then((module) => module.UpdatesSection),
  { ssr: false }
);
const NewsletterSection = dynamic(
  () => import("./NewsletterSection").then((module) => module.NewsletterSection),
  { ssr: false }
);

interface DeferredSectionProps {
  children: React.ReactNode;
  minHeight: number;
  tone?: "light" | "dark" | "warm";
  label: string;
}

function DeferredSection({ children, minHeight, tone = "light", label }: DeferredSectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const boundaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boundary = boundaryRef.current;
    if (!boundary || shouldRender) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        // Fetch interactive code before the section becomes visible, without
        // competing with the hero and navigation during the initial load.
        rootMargin: "900px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(boundary);
    return () => observer.disconnect();
  }, [shouldRender]);

  const background =
    tone === "dark" ? "bg-brand-charcoal" : tone === "warm" ? "bg-brand-ivory" : "bg-white";

  return (
    <div ref={boundaryRef} className={background}>
      {shouldRender ? (
        children
      ) : (
        <div
          aria-label={`${label} loads as it approaches the viewport`}
          aria-busy="true"
          className="container mx-auto flex items-center justify-center px-4"
          style={{ minHeight }}
        >
          <span className="sr-only">Loading {label}</span>
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-brand-sage/50">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-brand-green/35 motion-reduce:animate-none" />
          </div>
        </div>
      )}
    </div>
  );
}

export function DeferredImpactSection() {
  return (
    <DeferredSection minHeight={620} tone="dark" label="impact statistics">
      <ImpactSection />
    </DeferredSection>
  );
}

export function DeferredStoriesSection() {
  return (
    <DeferredSection minHeight={560} tone="warm" label="stories of change">
      <StoriesSection />
    </DeferredSection>
  );
}

export function DeferredTestimonialsSection() {
  return (
    <DeferredSection minHeight={520} tone="warm" label="community testimonials">
      <TestimonialsSection />
    </DeferredSection>
  );
}

export function DeferredGallerySection() {
  return (
    <DeferredSection minHeight={620} tone="warm" label="photo gallery">
      <GallerySection />
    </DeferredSection>
  );
}

export function DeferredUpdatesSection() {
  return (
    <DeferredSection minHeight={520} label="latest updates">
      <UpdatesSection />
    </DeferredSection>
  );
}

export function DeferredNewsletterSection() {
  return (
    <DeferredSection minHeight={360} tone="warm" label="newsletter form">
      <NewsletterSection />
    </DeferredSection>
  );
}
