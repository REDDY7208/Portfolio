"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(true);

  // Advanced Scroll Lock: Prevents layout shift when scrollbar disappears
  useEffect(() => {
    if (isAnimating) {
      // Calculate scrollbar width to prevent the page from jumping
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.touchAction = "none"; // Disables mobile pull-to-refresh / bouncing
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.touchAction = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.touchAction = "";
    };
  }, [isAnimating]);

  // Safety fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const columns = 7; // Number of interlocking diagonal stripes

  return (
    <>
      {/* Modern Diagonal Interlocking Overlay */}
      <div className="fixed inset-0 z-[100] flex justify-center items-center pointer-events-none overflow-hidden w-screen h-[100dvh]">
        {/* Rotated container large enough to cover the screen entirely */}
        <div className="absolute w-[150vmax] h-[150vmax] flex rotate-45">
          {[...Array(columns)].map((_, i) => {
            // Alternate slide direction for interlocking effect
            const isEven = i % 2 === 0;
            const slideDirection = isEven ? "-100%" : "100%";
            // Stagger animation organically from edges to center
            const delay = i * 0.08;

            return (
              <div
                key={`diag-col-${i}`}
                className="relative h-full flex-1 overflow-hidden"
              >
                {/* Middle Layer (Primary) - Sweeps out closely trailing the black layer */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-primary"
                  initial={{ y: "0%" }}
                  animate={{ y: slideDirection }}
                  transition={{
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                    delay: delay + 0.15, 
                  }}
                  onAnimationComplete={() => {
                    // Unlock scroll exactly when the last primary visual layer fully disappears
                    if (i === columns - 1) setIsAnimating(false);
                  }}
                />
                {/* Top Layer (Black) - Sweeps out first to reveal Primary trail, then reveals Page */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-[#030712] shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
                  initial={{ y: "0%" }}
                  animate={{ y: slideDirection }}
                  transition={{
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                    delay: delay,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Content Reveal Wrapper */}
      <motion.main
        initial={{ opacity: 0, scale: 0.92, y: 30, filter: "blur(10px)", rotateX: 5 }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformPerspective: 1200, transformOrigin: "bottom" }}
        className="w-full min-h-screen lg:h-screen"
      >
        {children}
      </motion.main>
    </>
  );
}
