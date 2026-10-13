"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function ValuesSection() {
  return (
    <section id="values" className="py-6 md:py-8 bg-[#FCFCFB] border-b border-neutral-100 relative overflow-hidden">
      {/* Background decoration glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffeabf]/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a56428]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Single Infographic Image in 16:9 Aspect Ratio */}
        <AnimatedSection animation="fadeUp">
          <div className="relative w-full aspect-[28/18] max-w-7xl mx-auto">
            <Image
              src="/images/web 6 giá trị.png"
              alt="6 giá trị cốt lõi STAR AVENUE"
              fill
              priority
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
