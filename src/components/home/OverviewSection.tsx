"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin, Building2, Layers, ShieldCheck, Landmark, Ruler, Home, TreePine, Award } from "lucide-react";
import ImageAssets from "../../../public/images";

export default function OverviewSection() {
  const specs = [
    { icon: Building2, label: "Tên thương mại", value: "STAR AVENUE" },
    { icon: MapPin, label: "Vị trí", value: "782 Đường Lý Bôn, phường Trần Lãm, tỉnh Hưng Yên" },
    {
      icon: Award,
      label: "Chủ đầu tư",
      value: "LIÊN DANH CÔNG TY CỔ PHẦN HẠ TẦNG ĐÔNG HẢI SỐ 1 & CÔNG TY CỔ PHẦN ĐẦU TƯ HƯNG THÁI PROPERTY"
    },
    { icon: Landmark, label: "Đơn vị đồng hành", value: "BIDV" },
    { icon: Ruler, label: "Quy mô", value: "8,73 ha" },
    { icon: Home, label: "Sản phẩm", value: "251 căn nhà phố thương mại 5 tầng" },
    { icon: TreePine, label: "Loại hình phát triển", value: "Khu đô thị thương mại, trung tâm thương mại 5 tầng, công viên cảnh quan" },
    { icon: ShieldCheck, label: "Hình thức", value: "Sở hữu lâu dài" },
  ];

  const highlights = [
    { num: "9", unit: "m", label: "Mặt tiền nhà phố thương mại mang dấu ấn độc bản" },
    { num: "2 - 3", unit: "mặt thoáng", label: "100% sản phẩm sở hữu mặt thoáng vượt trội" },
    { num: "18,83", unit: "%", label: "Mật độ xây dựng – chuẩn sống xanh vượt trội" },
  ];

  return (
    <section id="overview" className="pt-6 md:pt-8 pb-0 bg-white relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffeabf]/10 rounded-full translate-x-1/3 -translate-y-1/4 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#a56428]/5 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ─────────────────────────── */}
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-12">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent">
              Tổng quan dự án
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>
            <p className="font-exo text-[16px] md:text-lg text-gray-700 leading-relaxed max-w-7xl font-medium text-justify">
              Giữa nhịp phát triển ngày càng rõ nét của khu vực trung tâm phường Trần Lãm,{" "}
              <strong className="text-[#894d20]">STAR AVENUE</strong> được định vị là tổ hợp
              thương mại – dịch vụ hiện đại, góp phần hình thành một điểm đến giao thương mới
              cho đô thị. Với quy hoạch đồng bộ và kiến trúc nhận diện nổi bật, <strong className="text-[#894d20]">STAR AVENUE</strong> mở ra không gian đầu tư giàu tiềm năng.
            </p>
          </div>
        </AnimatedSection>

        {/* ── 3 Highlight Stats ──────────────────────── */}
        <AnimatedSection animation="fadeUp" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="relative text-center py-6 px-4 rounded-2xl border border-[#a56428]/15 bg-gradient-to-b from-[#ffeabf]/20 to-white overflow-hidden hover:border-[#a56428]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a56428] to-transparent" />
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="font-crimson text-4xl md:text-5xl font-bold text-[#894d20] leading-none">
                    {h.num}
                  </span>
                  <span className="font-exo text-lg font-bold text-[#a56428] mb-1.5">{h.unit}</span>
                </div>
                <p className="font-exo text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider leading-snug">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Specs Grid ─────────────────────────────── */}
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 mb-14">
            {specs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 py-4 border-b border-[#a56428]/10 hover:bg-[#ffeabf]/10 px-3 -mx-3 rounded-xl transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#ffeabf] to-[#c07828]/20 flex items-center justify-center mt-0.5 group-hover:from-[#a56428] group-hover:to-[#894d20] transition-all duration-300 shadow-sm">
                    <Icon className="w-4 h-4 text-[#894d20] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-exo text-[10px] font-bold text-[#a56428]/70 uppercase tracking-[0.15em] mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-exo text-sm md:text-[15px] font-semibold text-gray-800 leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

      </div>

      {/* ── Full-width Video ───────────────────────────── */}
      <AnimatedSection animation="fadeIn" delay={0.3}>
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-lg border border-[#a56428]/20">
            <iframe
              src="https://www.youtube.com/embed/8l7KRlGwCq4?autoplay=1&mute=1&loop=1&playlist=8l7KRlGwCq4"
              title="Tổng quan dự án STAR AVENUE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
          <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-400 italic">
            Video giới thiệu dự án STAR AVENUE
          </p>
        </div>
      </AnimatedSection>

    </section>

  );
}
