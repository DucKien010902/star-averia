"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const hasSeen = sessionStorage.getItem("hasSeenIntro");
    if (hasSeen === "true") {
      setIsVisible(false);
      setIsAnimating(false);
      return;
    }

    // Lock scrolling on mount while animating
    document.body.style.overflow = "hidden";

    // 1. Fade out the central logo and text content after 2.2 seconds
    const contentTimeout = setTimeout(() => {
      setShowContent(false);
    }, 2200);

    // 2. Complete all animations and restore scrolling after 3.4 seconds
    const completeTimeout = setTimeout(() => {
      setIsAnimating(false);
      setIsVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 3400);

    return () => {
      clearTimeout(contentTimeout);
      clearTimeout(completeTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isAnimating && (
        <div className="intro-loader-overlay fixed inset-0 z-[9999] overflow-hidden flex flex-col select-none pointer-events-auto">
          {/* Top Door */}
          <motion.div
            className="w-full h-1/2 bg-[#FAF9F5]"
            initial={{ y: 0 }}
            animate={{ y: showContent ? 0 : "-100%" }}
            transition={{
              duration: 0.9,
              ease: [0.77, 0, 0.175, 1], // premium custom cubic-bezier door slide
              delay: 0.2, // slight delay after logo fades out
            }}
          />

          {/* Bottom Door */}
          <motion.div
            className="w-full h-1/2 bg-[#FAF9F5]"
            initial={{ y: 0 }}
            animate={{ y: showContent ? 0 : "100%" }}
            transition={{
              duration: 0.9,
              ease: [0.77, 0, 0.175, 1],
              delay: 0.2,
            }}
          />

          {/* Centered Logo & Text Content */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  filter: "blur(4px)",
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
              >
                {/* Logo bounce animation */}
                <motion.div
                  initial={{ opacity: 0, y: 80, scale: 0.6 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    duration: 1.2,
                  }}
                  className="relative w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-[0_10px_30px_rgba(137,77,32,0.06)]"
                >
                  <Image
                    src="/images/logo/Star Averia.png"
                    alt="STAR AVERIA Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </motion.div>

                {/* Text reveal animation from bottom up */}
                <div className="overflow-hidden py-2">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.215, 0.61, 0.355, 1],
                      delay: 0.5,
                    }}
                    className="font-crimson text-3xl md:text-5xl font-bold tracking-[0.2em] bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent text-center"
                  >
                    STAR AVERIA
                  </motion.h1>
                </div>

                {/* Subtitle fade in */}
                <div className="overflow-hidden py-1">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.9,
                    }}
                    className="font-exo text-xs md:text-sm tracking-[0.4em] uppercase text-[#a56428]/80 text-center mt-2"
                  >
                    Đại Lộ Giao Thương - Tâm Điểm Đầu Tư
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
