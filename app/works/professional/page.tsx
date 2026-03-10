"use client";

import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const professionalProjects = [
  {
    title: "AI Enterprise Solution",
    category: "Corporate",
    color: "bg-blue-900/40",
    border: "border-blue-500/20",
    description:
      "Enterprise-grade AI platform for data analysis and reporting.",
  },
  {
    title: "Global Supply Chain ML",
    category: "Logistics",
    color: "bg-indigo-900/40",
    border: "border-indigo-500/20",
    description: "Machine learning pipeline for optimizing global logistics.",
  },
];

const ProfessionalWorks = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 px-8 md:px-12 relative overflow-x-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <a
          href="/works"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Categories</span>
        </a>

        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Professional <span className="text-primary italic">Projects</span>.
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            A collection of corporate and enterprise-level projects focused on
            scalability, efficiency, and robust software architecture.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionalProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-3xl border ${project.border} ${project.color} backdrop-blur-xl hover:border-primary/50 transition-all duration-500 shadow-2xl`}
            >
              <div className="relative z-10">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Decorative side line */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-primary/20 group-hover:bg-primary transition-colors rounded-l-full"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProfessionalWorks;
