"use client";

import {
  Home,
  LayoutGrid,
  Mail,
  MessageSquareText,
  User,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: LayoutGrid, label: "Services", href: "/services" },
  { icon: Workflow, label: "Projects", href: "/works" },
  { icon: MessageSquareText, label: "Testimonials", href: "/testimonials" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-4 md:right-8 lg:top-1/2 lg:-translate-y-1/2 z-50 w-[90%] max-w-sm lg:w-auto lg:max-w-none">
      <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center bg-[#0d0d0f]/80 backdrop-blur-md rounded-full px-6 py-4 lg:px-3 lg:py-6 gap-x-2 lg:gap-x-0 lg:gap-y-8 border border-white/5 shadow-2xl">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href)); // Fix active routing

          return (
            <Link
              key={index}
              href={item.href}
              className={`relative group flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
                isActive ? "text-primary" : "text-gray-500 hover:text-white"
              }`}
            >
              <Icon
                size={20}
                className={`transition-all duration-300 ${isActive ? "scale-110 drop-shadow-[0_0_8px_rgba(241,48,36,0.6)]" : ""}`}
              />

              {/* Active Dot indicator */}
              {isActive && (
                <div className="absolute -bottom-1 lg:bottom-auto lg:-left-1 w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(241,48,36,0.8)]" />
              )}

              {/* Tooltip (Hidden on mobile where there is no hover) */}
              <div className="hidden lg:block absolute right-14 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 origin-right pointer-events-none">
                <div className="bg-[#1a1a1e] text-gray-200 border border-white/10 text-xs font-semibold px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap tracking-wide">
                  {item.label}
                  {/* Arrow */}
                  <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#1a1a1e] border-t border-r border-white/10 rotate-45"></div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
