"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  X,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const businesses = [
  {
    icon: <Globe className="text-primary w-8 h-8" strokeWidth={1.5} />,
    tag: "Website Development",
    title: "End-to-End Website Development & Hosting",
    short:
      "We build professional, fast, and modern websites for your business. From idea to live website, everything is handled in one place.",
    color: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/30",
    offers: [
      "Custom website design (modern UI/UX)",
      "Full development using latest technologies",
      "Domain setup and configuration",
      "Hosting setup (Vercel / AWS)",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Maintenance & support",
    ],
    process: [
      "Requirement discussion",
      "Design & layout creation",
      "Website development",
      "Testing & optimization",
      "Deployment (live website)",
      "Support & maintenance",
    ],
    pricing: [
      {
        name: "Complete Package",
        price: "₹10,000",
        desc: "Full website development — design, development, hosting, domain setup, SEO & support. Everything included.",
      },
    ],
    why: [
      "Fast delivery (within 1 week)",
      "Affordable pricing",
      "End-to-end service",
      "Direct support",
    ],
    cta: [
      { label: "Get Your Website Now", href: "/contact" },
      { label: "Contact Us on WhatsApp", href: "https://wa.me/919866466266" },
    ],
  },
  {
    icon: <TrendingUp className="text-primary w-8 h-8" strokeWidth={1.5} />,
    tag: "Social Media & SEO",
    title: "Social Media Marketing & SEO Optimization",
    short:
      "Grow your business online with powerful social media strategies and SEO optimization to reach more customers.",
    color: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/30",
    offers: [
      "Social media account setup",
      "Content creation (posts, designs, captions)",
      "Page management",
      "Ad campaign setup",
      "SEO optimization for website",
      "Keyword research",
      "Performance tracking",
      "Platforms: Instagram & Facebook",
    ],
    process: [
      "Business analysis",
      "Strategy planning",
      "Content creation",
      "Posting & promotion",
      "SEO optimization",
      "Monthly performance report",
    ],
    pricing: [
      {
        name: "Starter",
        price: "₹1,500/mo",
        desc: "Basic posting + account setup",
      },
      {
        name: "Growth",
        price: "₹3,000/mo",
        desc: "Content + engagement + SEO basics",
      },
      {
        name: "Pro",
        price: "₹6,000/mo",
        desc: "Full marketing + ads + advanced SEO",
      },
    ],
    why: [
      "Complete digital growth solution",
      "Affordable monthly plans",
      "Customized strategy",
      "Real results focus",
    ],
    cta: [
      { label: "Start Growing Your Business", href: "/contact" },
      { label: "Book Free Consultation", href: "https://wa.me/919866466266" },
    ],
  },
];

const BusinessPage = () => {
  const [selected, setSelected] = useState<(typeof businesses)[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <main className="min-h-screen lg:h-screen pt-32 pb-10 px-8 md:px-12 flex flex-col xl:flex-row gap-10 lg:gap-20 items-center overflow-x-hidden relative w-full">
      {/* Background overlay */}
      <div className="absolute inset-y-0 -left-[10%] w-[120%] xl:w-2/3 z-0 pointer-events-none opacity-60 xl:opacity-90">
        <Image src="/praveen.png" alt="Background" fill className="object-cover object-[20%_top] md:object-[0%_top]" priority />
        <div className="absolute inset-0 bg-linear-to-r from-background/10 via-background/60 to-background xl:to-background pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent pointer-events-none" />
      </div>

      {/* Left Column */}
      <div className="flex-1 relative z-10 flex flex-col justify-center w-full">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Our business <span className="text-primary">.</span>
          </h2>
          <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
            Digital services to help your business grow online — from building
            your website to marketing it to the right audience.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            {businesses.map((b, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                <ChevronRight size={16} className="text-primary" />
                {b.tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column — Service Cards */}
      <div className="flex-[1.5] relative z-10 w-full xl:pl-10 mt-10 xl:mt-0 flex flex-col justify-center gap-6">
        {businesses.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className={`group relative p-8 rounded-2xl border ${item.border} bg-linear-to-br ${item.color} backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg overflow-hidden`}
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 blur-3xl group-hover:bg-white/10 transition-colors duration-700 rounded-full" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                {item.icon}
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.short}</p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-2">
                View Details <ArrowRight size={16} />
              </div>
            </div>
            {/* Progress line */}
            <div className="relative z-10 w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
              <div className="w-0 group-hover:w-full h-full bg-primary transition-all duration-500 ease-out" />
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal — rendered via portal to avoid overflow clipping */}
      {mounted && createPortal(
        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-8" onClick={() => setSelected(null)}>
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border ${selected.border} bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 md:p-12 no-scrollbar`}
              >
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-20"
                >
                  <X size={20} />
                </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left */}
                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {selected.tag}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
                      {selected.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">{selected.short}</p>
                  </div>

                  {/* What We Offer */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">What We Offer</h4>
                    <div className="space-y-2">
                      {selected.offers.map((o, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-gray-300 text-sm">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Why Choose Us</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selected.why.map((w, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg px-3 py-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-gray-300 text-xs">{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="space-y-8">
                  {/* Process */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Our Process</h4>
                    <div className="space-y-3">
                      {selected.process.map((step, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-primary font-bold text-sm w-6 shrink-0">0{i + 1}</span>
                          <span className="text-gray-300 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Pricing</h4>
                    <div className="space-y-3">
                      {selected.pricing.map((plan, i) => (
                        <div key={i} className="flex items-center justify-between p-5 rounded-xl border border-primary/40 bg-primary/5">
                          <div>
                            <p className="text-white font-bold text-base">{plan.name}</p>
                            <p className="text-gray-400 text-xs mt-1">{plan.desc}</p>
                          </div>
                          <span className="font-bold text-2xl text-primary">{plan.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 pt-2">
                    {selected.cta.map((c, i) => (
                      <a
                        key={i}
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className={`w-full py-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-300 ${
                          i === 0
                            ? "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(241,48,36,0.2)]"
                            : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                        }`}
                      >
                        {c.label} <ArrowRight size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
};

export default BusinessPage;
