"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Rocket, Settings, Code, ArrowUpRight, Cloud } from "lucide-react";

const services = [
  {
    icon: <Rocket className="text-primary w-8 h-8" strokeWidth={1.5} />,
    title: "CI/CD Pipeline Design",
    description:
      "Automated build, test, and deployment pipelines using Jenkins, GitLab CI/CD, and GitHub Actions for seamless software delivery.",
  },
  {
    icon: <Settings className="text-primary w-8 h-8" strokeWidth={1.5} />,
    title: "Infrastructure Automation",
    description:
      "Infrastructure as Code (IaC) using Terraform and Ansible for scalable, reproducible cloud infrastructure deployment.",
  },
  {
    icon: <Code className="text-primary w-8 h-8" strokeWidth={1.5} />,
    title: "Container Orchestration",
    description:
      "Docker containerization and Kubernetes orchestration for microservices architecture and scalable application deployment.",
  },
  {
    icon: <Cloud className="text-primary w-8 h-8" strokeWidth={1.5} />,
    title: "Cloud Architecture",
    description:
      "Designing, deploying, and maintaining robust cloud architectures on AWS, GCP, and Azure with cost-optimization and high availability.",
  },
];

const ServicesPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      // Approximate the active index based on scroll position
      // Using an estimated card width + gap depending on screen size
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? window.innerWidth * 0.85 : 350;
      const gap = 24; // 1.5rem gap-6

      const index = Math.round(scrollLeft / (cardWidth + gap));
      if (index >= 0 && index < services.length) {
        setActiveIndex(index);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? window.innerWidth * 0.85 : 350;
      const gap = 24;

      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= services.length) {
        nextIndex = 0;
      }
      scrollTo(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, isHovered]);

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

      {/* Left Column Content */}
      <div className="flex-1 relative z-10 flex flex-col justify-center w-full">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            My expertise <span className="text-primary">.</span>
          </h2>
          <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
            Specialized DevOps and MLOps services to accelerate your AI/ML
            projects from development to production with enterprise-grade
            reliability and scalability.
          </p>
        </div>
      </div>

      {/* Right Column Content - Services Slider */}
      <div className="flex-[1.5] relative z-10 w-full xl:pl-10 mt-10 xl:mt-0 flex flex-col justify-center overflow-hidden">
        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 scrollbar-none w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for Firefox/IE
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[85vw] md:min-w-[350px] w-[85vw] md:w-[350px] snap-center bg-[#0d0d0f] border border-white/5 hover:border-white/10 rounded-xl p-8 flex flex-col gap-6 group transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="text-primary">{service.icon}</div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto pt-6 flex justify-start">
                <ArrowUpRight className="text-gray-500 group-hover:text-primary transition-colors cursor-pointer w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center xl:justify-start gap-2 mt-2 ml-4 md:ml-0">
          {services.map((_, idx) => (
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

export default ServicesPage;
