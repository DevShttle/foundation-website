"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  className?: string;
  interval?: number;
}

export function ImageCarousel({ images, className, interval = 4000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={cn("relative overflow-hidden w-full h-full", className)}>
      {images.map((src, index) => {
        // Calculate the relative position (-1, 0, 1, etc.)
        let position = index - currentIndex;
        
        // Handle wrapping for smooth infinite-like behavior on the edges
        if (position < -1) position += images.length;
        if (position > 1) position -= images.length;
        
        // We only want to animate elements that are visible or just off-screen
        const isVisible = Math.abs(position) <= 1;

        return (
          <div
            key={src}
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(${position * 100}%)`,
              opacity: isVisible ? 1 : 0, // Hide completely if far off-screen
              zIndex: position === 0 ? 10 : 0
            }}
          >
            <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover" />
          </div>
        );
      })}
    </div>
  );
}
