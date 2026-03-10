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
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const columns = 5; // Number of staggered columns

  // Animation variants for the Primary Color Layer
  const layerOneVariants = {
    initial: { scaleY: 1 },
    animate: (i: number) => ({
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // Cinematic easing
        delay: 0.05 * i,
      },
    }),
  };

  // Animation variants for the Black Color Layer
  const layerTwoVariants = {
    initial: { scaleY: 1 },
    animate: (i: number) => ({
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.05 * i + 0.15, // Slightly trails behind layer one
      },
    }),
  };

  return (
    <>
      {/* Staggered Columns Transition Overlay */}
      <div className="fixed inset-0 z-[100] flex pointer-events-none w-full h-[100dvh]">
        {[...Array(columns)].map((_, i) => (
          <div key={`col-wrapper-${i}`} className="relative h-full flex-1">
            {/* Red / Primary Layer */}
            <motion.div
              className="absolute inset-0 w-full h-full bg-primary origin-bottom"
              custom={i}
              variants={layerOneVariants}
              initial="initial"
              animate="animate"
            />
            {/* Black Layer */}
            <motion.div
              className="absolute inset-0 w-full h-full bg-[#0d0d0f] origin-bottom"
              custom={i}
              variants={layerTwoVariants}
              initial="initial"
              animate="animate"
              onAnimationComplete={() => {
                // Unlock scroll when the very last column finishes animating
                if (i === columns - 1) setIsAnimating(false);
              }}
            />
          </div>
        ))}
      </div>

      {/* Modern Content Reveal Wrapper */}
      <motion.main
        initial={{ opacity: 0, scale: 0.96, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full min-h-screen lg:h-screen"
      >
        {children}
      </motion.main>
    </>
  );
}
