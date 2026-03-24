"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

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

      {/* Left Column Content - Info */}
      <div className="flex-1 relative z-10 flex flex-col justify-center w-full">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Let&apos;s <span className="text-primary">collaborate.</span>
          </h2>
          <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed mb-8">
            Whether you have a question, a project proposal, or just want to
            connect, feel free to drop a message. I&apos;m always open to
            discussing new opportunities and challenges in DevOps and cloud
            engineering.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <Mail className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  Email
                </p>
                <p className="text-gray-200 break-all">
                  praveenkumarreddy9866@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <Phone className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  Phone
                </p>
                <p className="text-gray-200">+91 98664 66266</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <MapPin className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  Location
                </p>
                <p className="text-gray-200">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column Content - Contact Form */}
      <div className="flex-[1.2] relative z-10 flex flex-col justify-center w-full xl:pl-10 mt-10 xl:mt-0">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5 bg-[#0a0a0c]/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/5"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 outline-none focus:border-primary/50 transition-colors hover:border-white/20 text-white placeholder:text-gray-500 text-sm"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 outline-none focus:border-primary/50 transition-colors hover:border-white/20 text-white placeholder:text-gray-500 text-sm"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 outline-none focus:border-primary/50 transition-colors hover:border-white/20 text-white placeholder:text-gray-500 text-sm"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 outline-none focus:border-primary/50 transition-colors hover:border-white/20 text-white placeholder:text-gray-500 text-sm resize-none"
            required
          ></textarea>

          {status === "success" && (
            <p className="text-green-400 text-sm">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">{errorMsg}</p>
          )}

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 rounded-lg bg-primary text-white font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 w-full md:w-auto shadow-[0_0_20px_rgba(241,48,36,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
