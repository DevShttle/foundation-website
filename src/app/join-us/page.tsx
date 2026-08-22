import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, Briefcase, HandHeart, Users } from "lucide-react";

export default function JoinUsIndexPage() {
  const sections = [
    {
      title: "Volunteer",
      desc: "Give your time to mentor students and support local learning initiatives.",
      icon: HeartHandshake,
      href: "/join-us/volunteer"
    },
    {
      title: "Internship",
      desc: "Gain real-world experience in community development and NGO management.",
      icon: Users,
      href: "/join-us/internship"
    },
    {
      title: "Careers",
      desc: "Join our dedicated team working full-time for educational equity.",
      icon: Briefcase,
      href: "/join-us/careers"
    },
    {
      title: "Partner With Us",
      desc: "Collaborate on CSR initiatives, resource sharing, or community welfare.",
      icon: HandHeart,
      href: "/join-us/partner-with-us"
    }
  ];

  return (
    <div className="bg-[#fbf8f1] min-h-screen pb-24">
<<<<<<< HEAD
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-join-us.png" alt="Join Us" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
=======
      <section className="bg-brand-charcoal text-white py-24 relative overflow-hidden">
        <Image src="/images/headers/header-join-us.jpg" alt="Join Us" fill className="object-cover z-0 opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-brand-charcoal/80 z-0 pointer-events-none" />
>>>>>>> 40097da30d34d31e1fcec2eeab93e1305e953c4d
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 border-b border-brand-gold/30 pb-2">
            Get Involved
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl mb-6">
            Join Us
          </h1>
          <p className="text-lg text-brand-sage max-w-2xl mx-auto">
            Real change happens when the community comes together. Find out how you can contribute to our mission in Kishanganj.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <Link key={idx} href={sec.href} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-brand-clay/10 rounded-xl flex items-center justify-center text-brand-clay mb-6 group-hover:bg-brand-clay group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h2 className="font-serif text-2xl text-brand-green mb-3">{sec.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-8">
                  {sec.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-clay group-hover:text-brand-green transition-colors mt-auto">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-brand-green text-white p-10 rounded-xl text-center flex flex-col items-center">
          <h2 className="font-serif text-3xl mb-4">Support Financially</h2>
          <p className="text-brand-sage mb-8 max-w-lg">
            Your contributions help provide essential learning resources and support for underserved students.
          </p>
          <Link href="/join-us/donate" className="bg-brand-gold text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#a6822c] transition-colors">
            Make a Donation
          </Link>
        </div>
      </div>
    </div>
  );
}
