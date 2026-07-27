import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, MapPin } from "lucide-react";
import { updates } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function UpdatePage({ params }: Props) {
  const resolvedParams = await params;
  const update = updates.find((u) => u.slug === resolvedParams.slug);

  if (!update) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="container mx-auto px-4 pt-32 max-w-4xl">
        
        <Link href="/news-resources" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-green transition-colors mb-12">
          <ArrowLeft size={14} /> Back to Updates
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="text-brand-clay bg-brand-clay/10 px-3 py-1.5 rounded">{update.category}</span>
            <span className="text-gray-500 flex items-center gap-1.5"><Calendar size={14}/> {update.date}</span>
            <span className="text-gray-500 flex items-center gap-1.5"><MapPin size={14}/> {update.location}</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-green mb-6 leading-tight">
            {update.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {update.summary}
          </p>
        </header>

        {/* 1. Hero */}
        <section className="bg-brand-sage h-[300px] lg:h-[400px] relative flex items-center justify-center overflow-hidden mb-12 rounded-2xl">
          <Image src={update.image} alt={update.title} fill className="object-cover z-0" />
          <div className="absolute inset-0 bg-brand-charcoal/20 z-0 pointer-events-none" />
        </section>

        <article className="prose prose-lg prose-emerald text-brand-charcoal/80 max-w-none">
          <p>
            Detailed information regarding this update goes here. This section will contain the full text of the notice, announcement, or event summary.
          </p>
          <p>
            It can include multiple paragraphs, embedded documents, lists, and links to external resources if necessary.
          </p>
          
          <h3 className="font-serif text-2xl text-brand-green mt-10 mb-4">Key Details</h3>
          <ul>
            <li><strong>Date:</strong> {update.date}</li>
            <li><strong>Location:</strong> {update.location}</li>
            <li><strong>Category:</strong> {update.category}</li>
          </ul>
        </article>

        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors">
            Share Update <Share2 size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}
