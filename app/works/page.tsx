"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

const WorksPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 px-8 md:px-12 flex flex-col xl:flex-row gap-10 lg:gap-20 items-center relative overflow-x-hidden">
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

      {/* Right Column Content - Category Navigation Grid */}
      <div className="flex-[1.2] relative z-10 w-full xl:pl-10 mt-10 xl:mt-0 flex flex-col justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          {[
            {
              title: "Professional",
              description: "Corporate projects and enterprise solutions.",
              href: "/works/professional",
              color: "from-blue-600/20 to-indigo-600/20",
              border: "border-blue-500/30",
              iconColor: "text-blue-400",
            },
            {
              title: "Personal",
              description: "Side projects and experimental creations.",
              href: "/works/personal",
              color: "from-purple-600/20 to-fuchsia-600/20",
              border: "border-purple-500/30",
              iconColor: "text-purple-400",
            },
            {
              title: "Freelancer",
              description: "Client-based work and contract projects.",
              href: "/works/freelancer",
              color: "from-emerald-600/20 to-teal-600/20",
              border: "border-emerald-500/30",
              iconColor: "text-emerald-400",
            },
            {
              title: "Internship",
              description: "Early career work and learning experiences.",
              href: "/works/internship",
              color: "from-orange-600/20 to-amber-600/20",
              border: "border-orange-500/30",
              iconColor: "text-orange-400",
            },
          ].map((category, idx) => (
            <a
              key={idx}
              href={category.href}
              className={`group relative p-8 rounded-2xl border ${category.border} bg-linear-to-br ${category.color} backdrop-blur-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-lg flex flex-col justify-between min-h-[180px] md:min-h-[220px] overflow-hidden`}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 blur-3xl group-hover:bg-white/10 transition-colors duration-700 rounded-full"></div>

              <div className="relative z-10 w-full">
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 ${category.iconColor}`}
                  >
                    <ExternalLink size={24} />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Progress Line */}
              <div className="relative z-10 w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-primary transition-all duration-500 ease-out"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
