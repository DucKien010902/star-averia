"use client";

import { HeroProps } from "@/types";
import { motion } from "framer-motion";

export default function Hero({ backgroundImage }: HeroProps) {
  const heroImage = "/images/banner-star-averia.png";

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F5]">
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="STAR AVERIA Banner"
          className="w-full h-auto block object-contain select-none pointer-events-none"
        />
      </motion.div>
    </section>
  );
}
