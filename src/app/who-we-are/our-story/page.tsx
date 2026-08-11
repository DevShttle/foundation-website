import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Users, MapPin, GraduationCap } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export default function OurStoryPage() {
  return (
    <div className="bg-brand-ivory min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 lg:py-32 relative overflow-hidden">
        <Image src="/images/headers/header-who-we-are.jpg" alt="Our Story" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-green/80 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
              Who We Are
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-tight">
              A community-led response to an educational need
            </h1>
            <p className="text-xl text-brand-sage leading-relaxed max-w-2xl">
              What began as a localized effort to support a few students has grown into a structured charitable trust serving the underserved in Kishanganj.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">

            <section>
              <h2 className="font-serif text-3xl text-brand-green mb-6">Why We Were Created</h2>
              <div className="mb-8 rounded-xl overflow-hidden h-[300px] relative shadow-sm border border-brand-sage/50">
                <ImageCarousel
                  images={[
                    "/images/stories/story-1.png",
                    "/images/stories/story-2.png",
                    "/images/stories/story-3.jpg",
                    "/images/stories/story-6.png",


                  ]}
                />
              </div>
              <div className="prose prose-lg prose-emerald text-brand-charcoal/80">
                <p>
                  In Kishanganj, one of the most historically underserved districts in Bihar, educational opportunity is often tied closely to economic circumstance. We observed that many daily wage workers lacked the financial means to send their children to residential schools or hostels. Furthermore, the absence of quality day schools in the immediate area left these children with limited options for academic advancement.
                </p>
                <p>
                  Recognizing this critical gap, the Islah Foundation was formed by local community members. Our vision is to build an educational institution that provides the same supportive, immersive environment as a premium hostel, but at low or zero cost. We aim to ensure that every student, regardless of their background, has access to quality education, mentorship, and a structured learning environment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-brand-green mb-6">Our Timeline</h2>

              <div className="relative border-l border-brand-sage/50 ml-4 space-y-12 pb-8">

                <div className="relative pl-8">
                  <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center shadow-sm">
                    <Calendar size={12} className="text-white" />
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-clay block mb-2">2024</span>
                  <h3 className="font-serif text-2xl text-brand-green mb-3">The Community Initiative Begins</h3>
                  <p className="text-brand-charcoal/80 leading-relaxed">
                    A small group of educators and professionals in Chandergaon started pooling resources to provide free after-school mentoring and basic textbooks to a handful of local students.
                  </p>
                </div>

                <div className="relative pl-8">
                  <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shadow-sm">
                    <Users size={12} className="text-white" />
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-clay block mb-2">2025</span>
                  <h3 className="font-serif text-2xl text-brand-green mb-3">Expanding the Response</h3>
                  <p className="text-brand-charcoal/80 leading-relaxed">
                    After the successful completion of our first year, we expanded to support 50 students. With the help of more dedicated educators and donors, we structured our academic support by organizing students into three distinct batches tailored to different class groups.
                  </p>
                </div>

                <div className="relative pl-8">
                  <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-brand-clay flex items-center justify-center shadow-sm">
                    <GraduationCap size={12} className="text-white" />
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-clay block mb-2">14 July 2026</span>
                  <h3 className="font-serif text-2xl text-brand-green mb-3">Formal Trust Registration</h3>
                  <p className="text-brand-charcoal/80 leading-relaxed">
                    To ensure accountability, scalability, and long-term impact, Islah Foundation was formally registered as a Public Charitable Trust in Bahadurganj, committing to strict governance and compliance.
                  </p>
                </div>

              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-brand-green mb-6">Current Work & Long-term Direction</h2>
              <div className="mb-8 rounded-xl overflow-hidden h-[300px] relative shadow-sm border border-brand-sage/50">
                <ImageCarousel
                  images={[
                    "/images/stories/story-5.jpg",
                    "/images/stories/story-4.png"

                  ]}
                />
              </div>
              <div className="prose prose-lg prose-emerald text-brand-charcoal/80">
                <p>
                  Today, we operate structured educational support programmes in Chandergaon and surrounding areas. Our immediate focus remains on securing learning resources, providing dedicated mentorship, and introducing digital literacy to students who need it most.
                </p>
                <p>
                  Long-term, Islah Foundation aims to establish permanent community learning centres across the Kishanganj district, creating a scalable model of community-led development that is entirely transparent and deeply rooted in Islamic ethical values of service (Khidmah) and excellence (Ihsan).
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-sage/50 sticky top-32">
              <h3 className="font-serif text-2xl text-brand-green mb-6">Quick Facts</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 border-b border-gray-100 pb-4">
                  <Calendar className="text-brand-clay mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Established</span>
                    <strong className="text-brand-charcoal">2024 (Initiative) / 2026 (Trust)</strong>
                  </div>
                </li>
                <li className="flex items-start gap-4 border-b border-gray-100 pb-4">
                  <MapPin className="text-brand-clay mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Headquarters</span>
                    <strong className="text-brand-charcoal">Chandergaon, Kishanganj</strong>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Users className="text-brand-clay mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Team</span>
                    <strong className="text-brand-charcoal">Community volunteers & trustees</strong>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-brand-sage/50">
                <Link href="/who-we-are/board-of-trustees" className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-brand-green hover:text-brand-clay transition-colors group">
                  Meet the Board <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
