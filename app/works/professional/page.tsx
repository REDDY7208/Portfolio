"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ArrowLeft,
  Server,
  Cloud,
  Shield,
  Cpu,
  Globe,
  CheckCircle2,
  X,
  Maximize2,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Subdomain {
  name: string;
  features: string[];
}

interface ProjectPlatform {
  type: "subdomains" | "features";
  items: (Subdomain | string)[];
}

interface ProjectArchitecture {
  type: string;
  hybridCloud: string[];
}

interface Project {
  title: string;
  subtitle: string;
  category: string;
  color: string;
  border: string;
  glow: string;
  description: string;
  platforms: ProjectPlatform;
  architecture: ProjectArchitecture;
  devops: string[];
  stack: string[];
  role: string;
}

const professionalProjects: Project[] = [
  {
    title: "Sasthra E",
    subtitle: "AI Powered Education Platform",
    category: "DevOps / Cloud Architecture",
    color: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/20",
    description:
      "An AI-driven education ecosystem supporting modern learning systems for language proficiency and international exam preparation. Built with microservices architecture and subdomain-based infrastructure for scalable deployment.",
    platforms: {
      type: "subdomains",
      items: [
        {
          name: "IELTS & PTE Preparation",
          features: [
            "AI Speaking/Writing Evaluation",
            "Performance Tracking",
            "Practice Modules",
          ],
        },
        {
          name: "ESL (English for Beginners)",
          features: [
            "Interactive Learning",
            "AI Language Tools",
            "Professional Programs",
          ],
        },
      ],
    },
    architecture: {
      type: "Microservices",
      hybridCloud: [
        "Google Cloud Platform (API, Backend)",
        "Amazon Web Services (Cloud Storage, Infrastructure)",
      ],
    },
    devops: [
      "Automated CI/CD with GitLab",
      "Containerization (Docker)",
      "Orchestration (Kubernetes)",
      "Security (SonarQube, Trivy)",
      "Nginx Reverse Proxy & Load Balancer",
      "SSL & Secure API Architecture",
    ],
    stack: [
      "GitLab CI/CD",
      "Docker",
      "Kubernetes",
      "Nginx",
      "SonarQube",
      "Trivy",
      "AWS",
      "GCP",
    ],
    role: "DevOps Engineer / Cloud Engineer",
  },
  {
    title: "School of Sasthra (SOS)",
    subtitle: "Smart Digital School Platform",
    category: "DevOps / Infrastructure",
    color: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
    description:
      "A modern digital education platform providing school students access to structured courses, progress monitoring, and intelligent learning tools. Designed for reliability and scalability.",
    platforms: {
      type: "features",
      items: [
        "Online course management for school students",
        "Student performance tracking and analytics",
        "Secure web-based learning environment",
        "Scalable microservices infrastructure",
        "Automated DevOps deployment pipelines",
      ],
    },
    architecture: {
      type: "Microservices",
      hybridCloud: [
        "Google Cloud Platform (API, Backend)",
        "Amazon Web Services (Cloud Storage, Infrastructure)",
      ],
    },
    devops: [
      "Automated CI/CD with GitLab",
      "Containerization (Docker)",
      "Orchestration (Kubernetes)",
      "Security (SonarQube, Trivy)",
      "Nginx Reverse Proxy & Load Balancer",
      "SSL & Secure Web Communication",
    ],
    stack: [
      "GitLab CI/CD",
      "Docker",
      "Kubernetes",
      "Nginx",
      "SonarQube",
      "Trivy",
      "AWS",
      "GCP",
    ],
    role: "DevOps Engineer / Cloud Engineer",
  },
  {
    title: "Sasthra Sai",
    subtitle: "Advanced Competitive Exam Learning Platform",
    category: "DevOps / Infrastructure",
    color: "from-purple-600/20 to-fuchsia-600/20",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20",
    description:
      "A high-performance digital learning platform for competitive exam preparation (JEE, NEET, TNPSC). Features include structured study materials, mock tests, and performance analytics to support student success.",
    platforms: {
      type: "features",
      items: [
        "Online learning platform for JEE, NEET, and TNPSC aspirants",
        "Practice tests and mock examinations",
        "Student performance tracking and analytics",
        "Scalable cloud-based infrastructure",
        "Secure and automated deployment pipelines",
      ],
    },
    architecture: {
      type: "Microservices",
      hybridCloud: [
        "Google Cloud Platform (API Services)",
        "Amazon Web Services (Storage Services)",
      ],
    },
    devops: [
      "Automated CI/CD with GitLab",
      "Containerization (Docker)",
      "Orchestration (Kubernetes)",
      "Security Scanning (SonarQube, Trivy)",
      "Nginx Reverse Proxy & Load Balancer",
      "SSL & Secure HTTPS Communication",
    ],
    stack: [
      "GitLab CI/CD",
      "Docker",
      "Kubernetes",
      "Nginx",
      "SonarQube",
      "Trivy",
      "AWS",
      "GCP",
    ],
    role: "DevOps Engineer / Cloud Engineer",
  },
  {
    title: "Sasthra-G",
    subtitle: "Smart Career Guidance & Interview Preparation Platform",
    category: "DevOps / Infrastructure",
    color: "from-orange-600/20 to-amber-600/20",
    border: "border-orange-500/30",
    glow: "shadow-orange-500/20",
    description:
      "A comprehensive career development and interview preparation platform providing structured learning resources, mock interviews, and AI-based guidance for technical job placements.",
    platforms: {
      type: "features",
      items: [
        "Interview preparation modules",
        "Technical skill development courses",
        "Mock interview simulations",
        "Career guidance and mentorship programs",
        "Performance tracking and feedback system",
      ],
    },
    architecture: {
      type: "Microservices",
      hybridCloud: [
        "Google Cloud Platform (API Services)",
        "Amazon Web Services (Storage Services)",
      ],
    },
    devops: [
      "Automated CI/CD with GitLab",
      "Containerization (Docker)",
      "Orchestration (Kubernetes)",
      "Security Scanning (SonarQube, Trivy)",
      "Nginx Reverse Proxy & Load Balancer",
      "SSL & Secure HTTPS Communication",
    ],
    stack: [
      "GitLab CI/CD",
      "Docker",
      "Kubernetes",
      "Nginx",
      "SonarQube",
      "Trivy",
      "AWS",
      "GCP",
    ],
    role: "DevOps Engineer / Cloud Engineer",
  },
];

const ProfessionalWorks = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

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
        <div className="mb-8">
          <a
            href="/works"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Works</span>
          </a>
        </div>
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Professional<br />
            <span className="text-primary italic">Work.</span>
          </h2>
          <p className="text-gray-300 max-w-sm text-sm md:text-base leading-relaxed">
            Case studies of enterprise-grade solutions focusing on high
            availability, security, and cloud-native architecture.
          </p>
        </div>
      </div>

      {/* Right Column Content - Category Navigation Grid */}
      <div className="flex-[1.2] relative z-10 w-full xl:pl-10 mt-10 xl:mt-0 flex flex-col justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          {professionalProjects.map((project, idx) => (
            <motion.div
              layoutId={`project-${project.title}`}
              key={idx}
              onClick={() => setSelectedProject(project)}
              className={`group relative p-8 rounded-2xl border ${project.border} bg-linear-to-br ${project.color} backdrop-blur-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-lg flex flex-col justify-between min-h-[180px] md:min-h-[220px] overflow-hidden`}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 blur-3xl group-hover:bg-white/10 transition-colors duration-700 rounded-full"></div>

              <div className="relative z-10 w-full">
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-widest`}
                  >
                    {project.category}
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-primary transition-colors">
                    <Maximize2 size={18} />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2">
                  {project.subtitle}
                </p>
              </div>

              {/* Progress Line */}
              <div className="relative z-10 w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-primary transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`project-${selectedProject.title}`}
              className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border ${selectedProject.border} bg-background/95 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 md:p-12 no-scrollbar`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Left Column: Basic Info */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xl text-primary/80 font-medium mb-6">
                      {selectedProject.subtitle}
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group/item">
                      <Server
                        className="text-primary mb-3 group-hover/item:scale-110 transition-transform"
                        size={24}
                      />
                      <h4 className="text-white font-bold mb-1">
                        Architecture
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {selectedProject.architecture.type}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group/item">
                      <Shield
                        className="text-primary mb-3 group-hover/item:scale-110 transition-transform"
                        size={24}
                      />
                      <h4 className="text-white font-bold mb-1">Security</h4>
                      <p className="text-gray-400 text-sm">SonarQube & Trivy</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-4">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:text-primary hover:border-primary/30 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                      <ExternalLink size={20} />
                      View Live Case Study
                    </button>
                  </div>
                </div>

                {/* Right Column: Detailed Info */}
                <div className="lg:col-span-7 space-y-10">
                  {/* Platforms Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <Globe className="text-primary" size={24} />
                      {selectedProject.platforms.type === "subdomains"
                        ? "Platform Subdomains"
                        : "Key Features"}
                    </h3>

                    {selectedProject.platforms.type === "subdomains" ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(selectedProject.platforms.items as Subdomain[]).map(
                          (sub, i) => (
                            <div
                              key={i}
                              className="p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-primary/20 transition-all"
                            >
                              <h4 className="text-primary font-bold mb-4">
                                {sub.name}
                              </h4>
                              <ul className="space-y-2">
                                {sub.features.map((feature, fi) => (
                                  <li
                                    key={fi}
                                    className="text-gray-400 text-sm flex items-center gap-2"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ),
                        )}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-4">
                        {(selectedProject.platforms.items as string[]).map(
                          (feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <p className="text-gray-300 text-sm">{feature}</p>
                            </div>
                          ),
                        )}
                      </div>
                    )}
                  </div>

                  {/* DevOps Implementation */}
                  <div className="p-8 rounded-4xl bg-primary/5 border border-primary/10">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <Cpu className="text-primary" size={24} /> DevOps
                      Implementation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {selectedProject.devops.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-primary mt-1 shrink-0"
                            size={18}
                          />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cloud Infrastructure */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Cloud className="text-primary" size={24} /> Hybrid
                      Cloud Infrastructure
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.architecture.hybridCloud.map(
                        (cloud, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <p className="text-gray-300 text-sm font-medium">
                              {cloud}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Role Footer */}
                  <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">
                        Contributed as
                      </p>
                      <p className="text-primary font-bold text-lg">
                        {selectedProject.role}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                      <Shield size={24} className="text-primary" />
                    </div>
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

export default ProfessionalWorks;
