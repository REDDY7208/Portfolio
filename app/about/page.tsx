"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGooglecloud,
  SiGitlab,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiApacheairflow,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { DiNginx } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  const tabs = ["Skills", "Experience", "Education", "Certifications"];

  return (
    <main className="min-h-screen lg:h-screen pt-32 pb-10 px-8 md:px-12 flex flex-col xl:flex-row gap-10 lg:gap-20 items-center overflow-x-hidden lg:overflow-hidden relative">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Automating <span className="text-primary">AI/ML</span> deployments
            with <br className="hidden md:block" />
            DevOps excellence.
          </h2>
          <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed">
            DevOps Engineer with 2+ years of hands-on experience in AI/ML deployment, MLOps automation, and cloud-native infrastructure. I specialize in building reliable CI/CD pipelines, managing Kubernetes microservices at scale, and deploying machine learning models to production environments across AWS, GCP, and Azure.
          </p>

          <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
            My background spans the full DevOps lifecycle — from infrastructure provisioning with Terraform and Ansible, to container orchestration with Docker and Kubernetes, to monitoring and observability. I have worked as a DevOps Team Lead at DSAIS (Data Spark AI Solutions), where I led cloud architecture decisions and automated deployment workflows for AI-powered education platforms serving thousands of users.
          </p>

          <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-6 max-w-lg">
            <StatCard number="2" title="YEARS OF EXPERIENCE" />
            <StatCard number="8" title="TOTAL PROJECTS" />
            <StatCard number="300" title="CI/CD PIPELINES" />
            <StatCard number="4" title="CLOUD PLATFORMS" />
          </div>
        </div>
      </div>

      {/* Right Column Content - Tabs & Lists */}
      <div className="flex-1 relative z-10 flex flex-col justify-center w-full xl:pl-10 mt-10 xl:mt-0">
        {/* Tabs Headers */}
        <div className="flex gap-6 mb-6 overflow-x-auto pb-2 scrollbar-none border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base md:text-lg font-medium transition-colors whitespace-nowrap pb-3 ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Cards container */}
        <div className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-xl p-6 min-h-[450px]">
          {activeTab === "Skills" && <SkillsContent />}

          {activeTab === "Experience" && (
            <div className="space-y-4">
              {experience.map((item, idx) => (
                <ListCard
                  key={idx}
                  title={item.title}
                  subtitle={item.duration}
                />
              ))}
            </div>
          )}

          {activeTab === "Education" && (
            <div className="space-y-4">
              {education.map((item, idx) => (
                <ListCard
                  key={idx}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
          )}

          {activeTab === "Certifications" && (
            <div className="space-y-4">
              {certifications.map((item, idx) => (
                <ListCard key={idx} title={item.title} subtitle={item.issuer} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

// Data Constants
const experience = [
  {
    title: "DevOps Team Lead - DSAIS (Data Spark AI Solutions)",
    duration: "December 2024 - Present",
  },
  {
    title: "DevOps & Backend Developer - DSAIS (Data Spark AI Solutions)",
    duration: "September 2024 - December 2024",
  },
  {
    title: "AI & Data Engineering Intern - DSAIS (Data Spark AI Solutions)",
    duration: "June 2024 - August 2024",
  },
  {
    title: "Data Scientist Intern - Rubixe (Bangalore)",
    duration: "June 2023 - January 2024",
  },
];

const education = [
  {
    title: "B.Tech - Electronics & Communication Engineering",
    subtitle: "Hindustan Institute of Technology (2019-2023) | 8.4 CGPA",
  },
  {
    title: "Intermediate - Sri Chaitanya Junior College",
    subtitle: "2017-2019 | 9.5 CGPA",
  },
  {
    title: "SSC - Cauvery Eden High School",
    subtitle: "2017 | 9.0 CGPA",
  },
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
  },
  {
    title: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
  },
  {
    title: "MLOps Specialization",
    issuer: "Coursera - DeepLearning.AI",
  },
];

// Reusable List Component for Tabs
const ListCard = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="bg-white/5 border border-white/5 rounded-lg p-5 hover:bg-white/10 transition-colors">
    <h3 className="text-[15px] md:text-base font-bold text-white mb-1">
      {title}
    </h3>
    <p className="text-gray-400 text-xs md:text-sm">{subtitle}</p>
  </div>
);

const StatCard = ({ number, title }: { number: string; title: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors backdrop-blur-sm group">
    <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
      <span className="text-primary">{number}</span>{" "}
      <span className="text-primary">+</span>
    </div>
    <div className="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase">
      {title}
    </div>
  </div>
);

const SkillsContent = () => {
  return (
    <div className="space-y-4">
      <SkillCategory
        title="DevOps & Cloud"
        icons={[
          { icon: <SiDocker />, name: "Docker" },
          { icon: <SiGitlab />, name: "GitLab" },
          { icon: <SiKubernetes />, name: "Kubernetes" },
          { icon: <SiTerraform />, name: "Terraform" },
          { icon: <SiAnsible />, name: "Ansible" },
          { icon: <SiJenkins />, name: "Jenkins" },
          { icon: <DiNginx className="text-[1.3em]" />, name: "Nginx" },
          { icon: <FaAws />, name: "AWS" },
          { icon: <VscAzure />, name: "Azure" },
          { icon: <SiGooglecloud />, name: "GCP" },
        ]}
      />

      <SkillCategory
        title="MLOps & AI/ML"
        icons={[
          { icon: <SiApacheairflow />, name: "Airflow" },
          { icon: <SiTensorflow />, name: "TensorFlow" },
          { icon: <SiPytorch />, name: "PyTorch" },
          { icon: <SiPython />, name: "Python" },
        ]}
      />

      <SkillCategory
        title="Backend & Databases"
        icons={[
          { icon: <SiFlask />, name: "Flask" },
          { icon: <SiMysql />, name: "MySQL" },
          { icon: <SiPostgresql />, name: "PostgreSQL" },
          { icon: <SiMongodb />, name: "MongoDB" },
          { icon: <SiRedis />, name: "Redis" },
        ]}
      />

      <SkillCategory
        title="Version Control & OS"
        icons={[
          { icon: <SiGit />, name: "Git" },
          { icon: <SiGithub />, name: "GitHub" },
          { icon: <SiGitlab />, name: "GitLab" },
          { icon: <SiLinux />, name: "Linux" },
        ]}
      />
    </div>
  );
};

const SkillCategory = ({
  title,
  icons,
}: {
  title: string;
  icons: { icon: React.ReactNode; name: string }[];
}) => (
  <div className="bg-white/5 rounded-lg p-5 border border-white/5 flex flex-col">
    <h3 className="text-[15px] font-bold text-white mb-3">{title}</h3>
    <div className="flex flex-wrap gap-4 text-xl text-gray-300">
      {icons.map((item, idx) => (
        <div
          key={idx}
          title={item.name}
          className="hover:text-primary transition-colors cursor-pointer group relative"
        >
          {item.icon}
          {/* Tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default AboutPage;
