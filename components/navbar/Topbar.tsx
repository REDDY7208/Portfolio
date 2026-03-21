"use client";

import { Github, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl shadow-black/20" 
          : "bg-transparent py-8 md:py-10"
      }`}
    >
      <section className="flex justify-between items-center transition-all duration-500 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-40 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={"/"} className="group">
            <h1 className="text-lg md:text-xl lg:text-[22px] xl:text-2xl font-bold tracking-tight flex items-baseline gap-1.5 text-nowrap">
              <span className="text-white group-hover:text-primary transition-colors duration-300">Praveen Kumar</span>
              <span className="text-primary italic">Reddy</span>
            </h1>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center"
        >
          <Link
            href={"http://www.linkedin.com/in/praveen-reddy-115158239"}
            target="_blank"
            aria-label="LinkedIn Profile"
            className="text-sm md:text-[15px] font-black hover:text-primary transition-all duration-300 hover:scale-125 flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/5 active:scale-95"
          >
            in
          </Link>
          <Link
            href={"https://github.com/praveenkumarreddy9866"}
            target="_blank"
            aria-label="GitHub Profile"
            className="group/icon p-1"
          >
            <Github
              size={18}
              className="text-white/80 group-hover/icon:text-primary transition-all duration-300 group-hover/icon:scale-125 group-active/icon:scale-95"
            />
          </Link>
          <Link 
            href={"mailto:praveenkumarreddy9866@gmail.com"} 
            aria-label="Send Email"
            className="group/icon p-1"
          >
            <Mail
              size={18}
              className="text-white/80 group-hover/icon:text-primary transition-all duration-300 group-hover/icon:scale-125 group-active/icon:scale-95"
            />
          </Link>
          <Link 
            href={"tel:+919866466266"} 
            aria-label="Call Phone"
            className="group/icon p-1"
          >
            <Phone
              size={18}
              className="text-white/80 group-hover/icon:text-primary transition-all duration-300 group-hover/icon:scale-125 group-active/icon:scale-95"
            />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
export default Topbar;
