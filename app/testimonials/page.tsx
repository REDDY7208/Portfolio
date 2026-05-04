"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thilaga",
    role: "SENIOR DEVOPS ENGINEER",
    image: "/praveen.png", // Using main image for the avatar for now per reference
    quote:
      "Praveen's expertise in CI/CD pipelines and infrastructure automation is outstanding. His ability to optimize deployment workflows and implement robust monitoring solutions has greatly enhanced our team's productivity.",
  },
  {
    name: "Arun Kumar",
    role: "SOFTWARE ARCHITECT",
    image: "/praveen.png",
    quote:
      "Exceptional problem-solving skills and a deep understanding of cloud-native architectures. Praveen consistently delivers highly scalable and secure infrastructure for our most critical AI/ML microservices applications.",
  },
  {
    name: "Sarah Jenkins",
    role: "MLOPS LEAD",
    image: "/praveen.png",
    quote:
      "Working with Praveen has transformed how we deploy models. His automated pipelines reduced our deployment time from days to minutes while drastically improving reliability and reducing infrastructure costs.",
  },
];

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered, handleNext]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <main className="min-h-screen lg:h-screen pt-32 pb-10 px-8 md:px-12 flex flex-col xl:flex-row gap-10 lg:gap-20 items-center overflow-x-hidden relative w-full">
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

      {/* Title (Mobile only - Desktop is handled below) */}
      <div className="w-full text-center xl:hidden relative z-10 pt-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          What colleagues <span className="text-primary">say.</span>
        </h2>
      </div>

      {/* Left Column Content - Author Details & Controls */}
      <div className="flex-1 relative z-10 flex flex-col justify-end xl:justify-center w-full h-[300px] xl:h-auto mt-auto xl:mt-0 xl:border-r border-white/10 xl:pr-10">
        <div className="flex items-center justify-between xl:justify-end xl:gap-8 w-full max-w-sm mx-auto xl:ml-auto xl:mr-0 group">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="p-2 text-gray-500 hover:text-primary transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft
              size={40}
              strokeWidth={1.5}
              className="opacity-0 xl:opacity-50 group-hover:opacity-100 transition-opacity"
            />
          </button>

          {/* Author Card */}
          <div className="flex flex-col items-center text-center transition-all duration-500 transform w-48">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/50 mb-4 bg-background">
              <Image
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              {activeTestimonial.name}
            </h3>
            <p className="text-[10px] md:text-xs text-gray-400 tracking-widest uppercase mt-1">
              {activeTestimonial.role}
            </p>
          </div>

          {/* Right Arrow (Mobile only - Desktop arrow on edge) */}
          <button
            onClick={handleNext}
            className="p-2 text-gray-500 hover:text-primary transition-colors z-20 xl:hidden"
            aria-label="Next testimonial"
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Right Column Content - Title & Quote */}
      <div
        className="flex-[1.5] relative z-10 w-full flex flex-col justify-center xl:pl-10 h-full pb-20 xl:pb-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Desktop Title */}
        <div className="hidden xl:block absolute top-[15%] left-10 w-full">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
            What colleagues <span className="text-primary">say.</span>
          </h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed mt-4">
            Feedback from engineers, architects, and team leads I have worked with across DevOps, MLOps, and cloud infrastructure projects. These are real experiences from real collaborations.
          </p>
        </div>

        {/* Quote Content */}
        <div
          className={`mt-8 xl:mt-0 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"} w-full max-w-3xl relative`}
        >
          <Quote className="text-white/10 w-16 h-16 md:w-24 md:h-24 absolute -top-10 md:-top-16 -left-4 md:-left-8 rotate-180" />

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed md:leading-loose relative z-10 font-medium">
            {activeTestimonial.quote}
          </p>

          {/* Pagination Dots */}
          <div className="flex gap-3 mt-12 mb-4 justify-center xl:justify-start">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAnimating(true);
                  setActiveIndex(idx);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-primary w-2"
                    : "bg-white/10 w-2 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;
