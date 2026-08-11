import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Target } from "lucide-react";
import { stories } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function StoryPage({ params }: Props) {
  const resolvedParams = await params;
  const story = stories.find((s) => s.slug === resolvedParams.slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* 1. Hero */}
      <section className="bg-brand-sage h-[400px] lg:h-[500px] relative flex items-center justify-center overflow-hidden">
        <Image src={`/images/stories/story-${((parseInt(story.id.replace(/\D/g, "") || "1", 10)) % 3) + 1}.jpg`} alt={story.title} fill className="object-cover z-0" />
        <div className="absolute inset-0 bg-brand-charcoal/20 z-0 pointer-events-none" />
      </section>

      <div className="container mx-auto px-4 -mt-32 relative z-20 max-w-4xl">
        <div className="bg-white p-8 lg:p-16 rounded-xl shadow-xl border border-gray-100">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-8 mb-8">
            <Link href="/impact/stories" className="text-xs font-bold uppercase tracking-widest text-brand-clay hover:text-brand-green transition-colors flex items-center gap-2">
              <ArrowLeft size={14} /> Back to Stories
            </Link>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              <span className="flex items-center gap-1.5"><Calendar size={14}/> {story.date}</span>
            </div>
          </div>

          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            {story.category}
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-green mb-8 leading-tight">
            {story.title}
          </h1>

          <div className="prose prose-lg prose-emerald text-brand-charcoal/80 max-w-none">
            <p className="text-xl leading-relaxed text-brand-charcoal mb-10 border-l-4 border-brand-sage pl-6">
              {story.summary}
            </p>

            <h3 className="font-serif text-2xl text-brand-green mt-12 mb-4">Context</h3>
            <p>
              In many underserved areas, access to continuous guidance is limited. This section outlines the specific background of the individual or community featured in this story, detailing the challenges they faced before connecting with Islah Foundation.
            </p>

            <h3 className="font-serif text-2xl text-brand-green mt-12 mb-4">The Intervention</h3>
            <p>
              Through our localized approach, we provided targeted support. This might include weekly mentoring, learning kits, or digital skills workshops, delivered collaboratively with community volunteers.
            </p>

            <div className="my-12 bg-[#f2eee4] p-8 rounded-lg border border-brand-sage/50">
               <h4 className="font-bold text-brand-charcoal flex items-center gap-2 mb-2"><Target size={18} className="text-brand-clay"/> Outcome</h4>
               <p className="text-sm">
                 Measurable progress was observed over several months. Confidence increased, participation in school improved, and the foundational steps toward long-term educational resilience were established.
               </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">Consent for publication on file.</span>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors">
              Share Story <Share2 size={14} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
