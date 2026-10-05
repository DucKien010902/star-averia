"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-b from-[#894d20] to-[#703a17] pt-10 pb-12 md:pt-12 md:pb-16 overflow-visible text-white mt-12 md:mt-18">
      {/* Wave shape on top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-18 text-[#894d20] fill-current"
        >
          <path d="M0,100 C240,180 480,20 720,100 C960,180 1200,20 1440,100 L1440,200 L0,200 Z"></path>
        </svg>
      </div>

      {/* Faint Architectural Skyline Background */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-44 pointer-events-none opacity-[0.12] z-0 select-none overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full stroke-white"
          strokeWidth="1.5"
        >
          {/* Stylized houses and roofs outline */}
          <path d="M0,180 L60,180 L60,130 L110,80 L160,130 L160,180 L220,180 L220,100 L270,50 L320,100 L320,180 L380,180 L380,140 L430,140 L430,180 L480,180 L480,90 L530,90 L530,180 L590,180 M590,180 L590,50 L640,50 L640,180 M640,180 L690,180 L690,120 L740,70 L790,120 L790,180 L850,180 M880,180 L880,40 L930,40 L930,180 M930,180 L980,180 L980,130 L1030,80 L1080,130 L1080,180 L1140,180 L1140,100 L1190,50 L1240,100 L1240,180 L1300,180 L1300,140 L1350,140 L1350,180 L1440,180" />
          
          {/* Subtle blueprint details (Windows and doors) */}
          <rect x="75" y="145" width="8" height="12" />
          <rect x="125" y="145" width="8" height="12" />
          <rect x="235" y="120" width="10" height="10" />
          <rect x="255" y="120" width="10" height="10" />
          <circle cx="295" cy="75" r="8" />
          <rect x="705" y="140" width="8" height="12" />
          <rect x="755" y="140" width="8" height="12" />
          <rect x="995" y="145" width="8" height="12" />
          <rect x="1045" y="145" width="8" height="12" />
          <rect x="1155" y="120" width="10" height="10" />
          <circle cx="1190" cy="75" r="8" />

          {/* High-rise outline window rows */}
          <rect x="600" y="60" width="6" height="8" />
          <rect x="612" y="60" width="6" height="8" />
          <rect x="624" y="60" width="6" height="8" />
          <rect x="600" y="75" width="6" height="8" />
          <rect x="612" y="75" width="6" height="8" />
          <rect x="624" y="75" width="6" height="8" />
          <rect x="600" y="90" width="6" height="8" />
          <rect x="612" y="90" width="6" height="8" />
          <rect x="624" y="90" width="6" height="8" />
          <rect x="600" y="105" width="6" height="8" />
          <rect x="612" y="105" width="6" height="8" />
          <rect x="624" y="105" width="6" height="8" />

          <rect x="890" y="50" width="6" height="8" />
          <rect x="902" y="50" width="6" height="8" />
          <rect x="914" y="50" width="6" height="8" />
          <rect x="890" y="65" width="6" height="8" />
          <rect x="902" y="65" width="6" height="8" />
          <rect x="914" y="65" width="6" height="8" />
          <rect x="890" y="80" width="6" height="8" />
          <rect x="902" y="80" width="6" height="8" />
          <rect x="914" y="80" width="6" height="8" />
          <rect x="890" y="95" width="6" height="8" />
          <rect x="902" y="95" width="6" height="8" />
          <rect x="914" y="95" width="6" height="8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <AnimatedSection animation="fadeUp">
          <h2 className="font-crimson text-2xl md:text-4xl lg:text-[44px] italic font-normal text-accent-gold-light mb-4 tracking-wide leading-tight">
            Sẵn sàng sở hữu căn hộ mơ ước?
          </h2>
          <p className="font-exo text-sm md:text-base text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            Đăng ký ngay để nhận tư vấn chi tiết và ưu đãi đặc biệt từ chúng tôi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#dang-ky"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-gold hover:bg-accent-gold-light text-[#703a17] font-exo text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#703a17] group-hover:scale-110 transition-transform duration-300" />
              <span>Đăng ký tư vấn</span>
            </Link>

            <Link
              href="/bang-gia"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-50 text-[#894d20] font-exo text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-neutral-100"
            >
              <span>Xem bảng giá</span>
              <ArrowRight className="w-4 h-4 text-[#894d20] group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
