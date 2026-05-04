"use client";

import Image from "next/image";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen lg:h-screen flex flex-col xl:flex-row items-stretch justify-between px-8 md:px-12 pt-24 pb-0 gap-10">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10 pb-20">
        <div className="space-y-6 text-center xl:text-left">
          <h2 className="text-4xl xl:text-6xl font-bold leading-tight">
            Praveen Kumar Reddy
            <br />
            <span className="text-primary">DevOps Engineer</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto xl:mx-0">
            AI/ML Specialization • 2+ Years Experience in MLOps automation,
            cloud-native infrastructure, and CI/CD pipelines. Expert in
            Kubernetes, Docker, Terraform, and AI model deployment.
          </p>
        </div>

        <Link href="/works">
          <div className="flex justify-center xl:justify-start pt-10 xl:pt-0 xl:absolute xl:bottom-12 xl:left-0">
            <div className="relative w-32 h-32 xl:w-40 xl:h-40 group cursor-pointer">
              {/* Spinning Text Badge */}
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10px] uppercase tracking-[0.2em] font-medium">
                    <textPath href="#circlePath">
                      My Projects • My Projects • My Projects •
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Center Arrow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-transparent border border-white/20 rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                  <MoveRight size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Right Content - Profile Image */}
      <div className="hidden xl:flex flex-1 relative w-full justify-center items-end mt-10 xl:mt-0">
        <div className="relative w-full max-w-[400px] md:max-w-xl xl:max-w-[700px] h-[500px] xl:h-[85vh] min-h-[500px]">
          <Image
            src="/praveen.png"
            alt="Praveen Kumar Reddy"
            fill
            className="object-contain object-bottom scale-110 xl:scale-105 origin-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
