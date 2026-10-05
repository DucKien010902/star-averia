"use client";

import { HeroProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ backgroundImage }: HeroProps) {
  const heroImage = "/images/banner-star-averia.png";

  return (
    <section className="relative w-full aspect-[1980/1113] sm:aspect-auto sm:h-[65vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F5]">
      {/* Background Image with soft scale and pan animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image
            src={heroImage}
            alt="Star Avenue Banner"
            fill
            priority
            quality={95}
            className="object-cover md:object-fill object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
