import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Target, CheckCircle2, HeartHandshake, AlertCircle, Phone } from "lucide-react";
import { programs } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProgrammePage({ params }: Props) {
  const resolvedParams = await params;
  const program = programs.find((p) => p.slug === resolvedParams.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* 1. Programme Hero */}
      <section className="bg-brand-green text-white py-24 lg:py-32 relative overflow-hidden">
        <Image src="/images/headers/header-what-we-do.png" alt={program.title} fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/10 rounded-l-[200px] pointer-events-none z-0" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
              {program.category}
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl mb-6 leading-tight">
              {program.title}
            </h1>
            <p className="text-lg text-brand-sage leading-relaxed mb-8">
              {program.summary}
            </p>
            <div className="flex gap-4">
              <Link href="/join-us/donate" className="bg-brand-gold text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#a6822c] transition-colors">
                Support Programme
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-80 lg:h-[400px] bg-brand-sage rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
            />
            <span className={`absolute top-6 right-6 z-20 text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded border backdrop-blur-sm shadow-sm ${program.status === "Active" ? "bg-white/90 text-brand-green border-white" :
              program.status === "Planned" ? "bg-gray-100/90 text-gray-500 border-gray-300" :
                "bg-brand-gold/90 text-white border-brand-gold"
              }`}>
              {program.status}
            </span>
          </div>
        </div>
      </section>

      {/* Warning for Planned Programmes */}
      {program.status === "Planned" && (
        <div className="bg-brand-clay/10 border-b border-brand-clay/20 py-4">
          <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-brand-clay text-sm font-bold">
            <AlertCircle size={16} />
            This programme is currently in the planning phase and requires funding to launch.
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Detail Content */}
          <div className="lg:col-span-8 space-y-16">

            {/* 2. Problem or Need */}
            <section>
              <h2 className="font-serif text-3xl text-brand-green mb-6">The Challenge</h2>
              <div className="prose prose-lg prose-emerald text-brand-charcoal/80">
                <p>
                  In the underserved regions of Kishanganj, systemic barriers prevent many from accessing the specific support required to thrive. This programme was conceived directly in response to these pressing, localized needs, identified through deep community consultation.
                </p>
              </div>
            </section>

            {/* 3. Objective */}
            <section>
              <h2 className="font-serif text-3xl text-brand-green mb-6">Objective</h2>
              <p className="text-xl text-brand-green font-medium leading-relaxed border-l-4 border-brand-sage pl-6">
                "{program.objective}"
              </p>
            </section>

            {/* 5. Activities & 7. Delivery Model */}
            <section>
              <h2 className="font-serif text-3xl text-brand-green mb-6">Activities & Delivery Model</h2>
              <div className="bg-[#fbf8f1] p-8 rounded-xl border border-brand-sage/50 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-brand-charcoal mb-1">Needs Assessment</h3>
                    <p className="text-sm text-gray-600">Identifying localized requirements through direct community consultation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-brand-charcoal mb-1">Resource Mobilization</h3>
                    <p className="text-sm text-gray-600">Gathering necessary learning materials, educators, or infrastructure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-brand-charcoal mb-1">Consistent Engagement</h3>
                    <p className="text-sm text-gray-600">Delivering weekly sessions and maintaining accountability via volunteers and teachers.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Verified Outputs */}
            {program.outputs.length > 0 && (
              <section>
                <h2 className="font-serif text-3xl text-brand-green mb-6">Verified Outputs</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {program.outputs.map((out, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-brand-sage/50 text-center flex flex-col justify-center">
                      <span className="font-serif text-4xl text-brand-gold block mb-2">{out.value}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{out.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 9. Outcomes */}
            {program.status !== "Planned" && (
              <section>
                <h2 className="font-serif text-3xl text-brand-green mb-6">Expected Outcomes</h2>
                <p className="text-brand-charcoal/80 text-lg leading-relaxed">
                  Beyond direct numerical outputs, this programme focuses on qualitative shifts: increased student confidence, higher retention rates in formal schooling, and stronger community cohesion around educational values.
                </p>
              </section>
            )}

            {/* 11. Gallery */}
            <section>
              <h2 className="font-serif text-3xl text-brand-green mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {program.gallery.map((imgSrc, idx) => (
                  <div key={idx} className="aspect-square bg-brand-sage/40 rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden relative group">
                    <Image
                      src={imgSrc}
                      alt={`${program.title} gallery image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-sage/50 sticky top-32 space-y-10">

              {/* 4. Who it serves */}
              <div>
                <h3 className="text-[10px] uppercase font-bold tracking-widest text-brand-clay mb-3 flex items-center gap-2"><Target size={14} /> Primary Beneficiaries</h3>
                <p className="text-brand-charcoal font-medium text-sm leading-relaxed">{program.whoItServes}</p>
              </div>

              {/* 6. Geographic Coverage */}
              <div>
                <h3 className="text-[10px] uppercase font-bold tracking-widest text-brand-clay mb-3 flex items-center gap-2"><MapPin size={14} /> Geographic Focus</h3>
                <ul className="text-brand-charcoal font-medium text-sm space-y-2">
                  {program.locations.map((loc, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-sage" /> {loc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 14. Donation or Resource Needs */}
              <div className="bg-[#fcfbf9] p-4 rounded-lg border border-brand-sage/50">
                <h3 className="text-[10px] uppercase font-bold tracking-widest text-brand-clay mb-2">Resource Needs</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  This programme currently requires educational kits, volunteer time, and operational funding to scale across Kishanganj.
                </p>
                <Link href="/join-us/donate" className="text-xs font-bold text-brand-green hover:underline">
                  View Donation Details →
                </Link>
              </div>

              {/* 13. Volunteer Opportunities & 15. Contact Person */}
              <div className="border-t border-gray-100 pt-8 space-y-4">
                <Link href="/join-us/volunteer" className="w-full bg-brand-green text-white px-6 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#083F33] transition-colors flex items-center justify-center gap-2">
                  Volunteer For This <HeartHandshake size={16} />
                </Link>

                <div className="flex items-center justify-center gap-2 pt-2">
                  <Phone size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-500">Coordinator: Md. Mashkoor Zaidi</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 10. Stories & 12. Updates & 16. Related Programmes */}
        <div className="mt-24 pt-16 border-t border-brand-sage/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl text-brand-green">Related Impact & Updates</h2>
            <Link href="/impact/stories" className="text-xs font-bold uppercase tracking-widest text-brand-clay hover:text-brand-green transition-colors flex items-center gap-2 hidden sm:flex">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#fbf8f1] p-6 rounded-xl border border-gray-100 group hover:border-brand-sage transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">Story of Change</span>
              <h3 className="font-serif text-xl text-brand-green mb-2 group-hover:text-brand-clay">Building confidence through consistent mentoring</h3>
              <Link href="/impact/stories/building-confidence-mentoring" className="text-xs font-bold text-brand-green">Read Story →</Link>
            </div>
            <div className="bg-[#fbf8f1] p-6 rounded-xl border border-gray-100 group hover:border-brand-sage transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">Latest Update</span>
              <h3 className="font-serif text-xl text-brand-green mb-2 group-hover:text-brand-clay">Community education camp successfully completed</h3>
              <Link href="/news-resources/community-camp-nov-2025" className="text-xs font-bold text-brand-green">Read Update →</Link>
            </div>
            <div className="bg-brand-green text-white p-6 rounded-xl border border-transparent flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sage mb-2 block">Explore More</span>
                <h3 className="font-serif text-xl mb-2">View other Islah Foundation programmes</h3>
              </div>
              <Link href="/what-we-do" className="text-xs font-bold text-brand-gold mt-4 inline-flex items-center gap-1 hover:text-white transition-colors">
                See All Programmes <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
