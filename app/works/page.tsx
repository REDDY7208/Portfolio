"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Developer Portfolio",
    category: "Web Development",
    color: "bg-gradient-to-br from-indigo-900/40 to-purple-900/40",
    border: "border-indigo-500/20",
  },
  {
    title: "Virtual Reality Web",
    category: "3D Experience",
    color: "bg-gradient-to-br from-fuchsia-900/40 to-pink-900/40",
    border: "border-fuchsia-500/20",
  },
  {
    title: "Crypto Dashboard",
    category: "Fintech Platform",
    color: "bg-gradient-to-br from-blue-900/40 to-cyan-900/40",
    border: "border-blue-500/20",
  },
  {
    title: "E-Commerce UI",
    category: "Design System",
    color: "bg-gradient-to-br from-orange-900/40 to-red-900/40",
    border: "border-orange-500/20",
  },
  {
    title: "Kubernetes Monitor",
    category: "DevOps Tooling",
    color: "bg-gradient-to-br from-emerald-900/40 to-teal-900/40",
    border: "border-emerald-500/20",
  },
  {
    title: "MLOps Pipeline",
    category: "Data Engineering",
    color: "bg-gradient-to-br from-slate-800/40 to-gray-900/40",
    border: "border-gray-500/20",
  },
];

const WorksPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Break projects into chunks of 4 (2x2 grid per slide)
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 4) {
    chunkedProjects.push(projects.slice(i, i + 4));
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const clientWidth = scrollContainerRef.current.clientWidth;

      const index = Math.round(scrollLeft / clientWidth);
      if (index >= 0 && index < chunkedProjects.length) {
        setActiveIndex(index);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const clientWidth = scrollContainerRef.current.clientWidth;

      scrollContainerRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= chunkedProjects.length) {
        nextIndex = 0;
      }
      scrollTo(nextIndex);
    }, 6000); // 6 seconds per grid frame

    return () => clearInterval(interval);
  }, [activeIndex, isHovered, chunkedProjects.length]);

  return (
    <main className="min-h-screen lg:h-screen pt-32 pb-10 px-8 md:px-12 flex flex-col xl:flex-row gap-10 lg:gap-20 items-center lg:overflow-hidden relative">
      {/* Background Image / Glow overlay for the left side */}
      <div className="absolute inset-y-0 -left-[10%] w-[120%] xl:w-2/3 z-0 pointer-events-none opacity-60 xl:opacity-90">
        <Image
          src="/praveen.png"
          alt="Background"
          fill
          className="object-cover object-[20%_top] md:object-[0%_top]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/10 via-background/60 to-background xl:to-background pointer-events-none"></div>
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Left Column Content - Title & Summary */}
      <div className="flex-[0.8] relative z-10 flex flex-col justify-center w-full">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            My projects<span className="text-primary">.</span>
          </h2>
          <p className="text-gray-300 max-w-sm text-sm md:text-base leading-relaxed">
            Showcasing successful DevOps implementations, MLOps pipelines, and
            AI/ML platform deployments across various industries and use cases.
          </p>
        </div>
      </div>

      {/* Right Column Content - Projects Slider */}
      <div className="flex-[1.2] relative z-10 w-full xl:pl-10 mt-10 xl:mt-0 flex flex-col justify-center overflow-hidden">
        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex overflow-x-auto snap-x snap-mandatory pt-4 pb-8 scrollbar-none w-full xl:min-h-[75vh]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {chunkedProjects.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="min-w-full w-full snap-center shrink-0 flex items-center justify-center p-2 lg:p-4"
            >
              {/* 2x2 Grid per slide */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full max-w-4xl">
                {group.map((project, idx) => (
                  <div
                    key={idx}
                    className={`group relative aspect-video md:aspect-4/3 rounded-2xl overflow-hidden border ${project.border} ${project.color} backdrop-blur-md flex flex-col justify-end p-5 md:p-6 hover:border-primary/50 transition-all duration-500 cursor-pointer shadow-xl`}
                  >
                    {/* Mock Image Content / Placeholder Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-colors duration-500 z-0"></div>

                    {/* Abstract placeholder shapes */}
                    <div className="absolute top-4 right-4 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/5 blur-xl group-hover:bg-primary/20 transition-colors duration-700"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5 blur-2xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>

                    {/* Content inside card */}
                    <div className="relative z-10 translate-y-2 md:translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-[10px] md:text-xs font-bold text-primary mb-1 md:mb-2 uppercase tracking-widest">
                        {project.category}
                      </p>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight">
                        {project.title}
                      </h3>
                      {/* Simulated image wireframe/box */}
                      <div className="w-full h-1 bg-white/20 rounded-full mt-2 md:mt-4 group-hover:w-1/2 transition-all duration-500"></div>
                    </div>

                    {/* Hover Overlay with Icons */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 md:gap-6">
                      <a
                        href="#"
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:border-primary transition-colors hover:scale-110 transform"
                      >
                        <ExternalLink className="text-white w-4 h-4 md:w-6 md:h-6" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white text-white hover:text-black transition-all hover:scale-110 transform"
                      >
                        <Github className="w-4 h-4 md:w-6 md:h-6" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center xl:justify-start gap-2 mt-2 ml-4 md:ml-0">
          {chunkedProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-primary w-4"
                  : "bg-white/20 w-2 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
