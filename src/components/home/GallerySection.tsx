import React from "react";
import Image from "next/image";

export function GallerySection() {
  const images = [
    { 
      title: "Digital Awareness Drama", 
      category: "Education", 
      size: "lg:col-span-2 lg:row-span-2",
      src: "/images/gallery/1.jpg"
    },
    { 
      title: "Student Recognition", 
      category: "Awards", 
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/2.jpg"
    },
    { 
      title: "Foundation Day Medals", 
      category: "Community", 
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/3.png"
    },
    { 
      title: "Honoring Participants", 
      category: "Celebration", 
      size: "lg:col-span-2 lg:row-span-1",
      src: "/images/gallery/4.png"
    },
    { 
      title: "Event Gathering", 
      category: "Community", 
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/5.png"
    },
    { 
      title: "Prize Distribution", 
      category: "Awards", 
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/6.jpg"
    },
    { 
      title: "Group Photo", 
      category: "Celebration", 
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/9.jpg"
    },
    { 
      title: "Ceremony", 
      category: "Community", 
      size: "lg:col-span-1 lg:row-span-1",
      src: "/images/gallery/10.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#fbf8f1] border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4 border-b border-brand-clay/30 pb-2">
              Photo Gallery
            </span>
            <h2 className="font-serif text-4xl text-brand-green mb-4">
              Glimpses of our work
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
             {["Education", "Awards", "Community", "Celebration"].map((filter, idx) => (
               <button key={idx} className="text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full border border-gray-200 text-gray-500 hover:bg-brand-sage hover:text-brand-green hover:border-brand-sage transition-colors">
                 {filter}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <div key={idx} className={`bg-brand-sage rounded-xl relative overflow-hidden group cursor-pointer ${img.size}`}>
               <Image 
                 src={img.src} 
                 alt={img.title} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
               <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                 <span className="text-[9px] uppercase tracking-widest font-bold text-white bg-brand-green/80 px-2 py-1 rounded mb-2 inline-block backdrop-blur-sm">
                   {img.category}
                 </span>
                 <h4 className="font-serif text-xl text-white">{img.title}</h4>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-transparent border border-brand-green text-brand-green px-8 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-sage/30 transition-colors inline-flex items-center gap-2">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
}
