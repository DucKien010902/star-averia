"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { useState, useRef } from "react";
import { MapPin, Building2, Layers, ShieldCheck, Landmark, Ruler, Home, TreePine, Award, ChevronLeft, ChevronRight } from "lucide-react";

export default function OverviewSection() {
  const specs = [
    { icon: Building2, label: "Tên thương mại", value: "STAR AVERIA" },
    { icon: MapPin, label: "Vị trí", value: "Khu vực trung tâm phường Thái Bình, tỉnh Hưng Yên" },
    {
      icon: Award,
      label: "Chủ đầu tư",
      value: "CÔNG TY CỔ PHẦN ĐẦU TƯ HƯNG THÁI PROPERTY"
    },
    { icon: Landmark, label: "Đơn vị đồng hành", value: "BIDV" },
    { icon: Ruler, label: "Quy mô", value: "28,54 ha" },
    { icon: Home, label: "Sản phẩm", value: "Liền kề - Biệt thự - Chung cư" },
    { icon: TreePine, label: "Loại hình phát triển", value: "Khu đô thị, trung tâm thương mại 9 tầng, công viên cảnh quan." },
    { icon: ShieldCheck, label: "Hình thức", value: "Sở hữu lâu dài" },
  ];

  const highlights = [
    { num: "LIỀN KỀ", unit: "", label: "182 căn" },
    { num: "BIỆT THỰ", unit: "", label: "34 căn" },
    { num: "CHUNG CƯ", unit: "", label: "631 căn" },
  ];

  const overviewImages = [
    {
      src: "/images/tongquan.png",
      alt: "Phối cảnh tổng quan dự án STAR AVERIA ven sông Trà Lý",
      caption: "Phối cảnh tổng thể dự án STAR AVERIA ven dòng sông Trà Lý",
    },
    {
      src: "/images/tongquan1.jpg",
      alt: "Toàn cảnh hệ sinh thái công viên và khu đô thị STAR AVERIA",
      caption: "Hệ sinh thái xanh và cảnh quan sinh thái ven sông Trà Lý",
    },
    {
      src: "/images/tongquan4.jpg",
      alt: "Toàn cảnh hệ sinh thái công viên và khu đô thị STAR AVERIA",
      caption: "Không gian đô thị về đêm",
    },
    {
      src: "/images/tongquan2.jpg",
      alt: "Góc nhìn toàn cảnh đại lộ giao thương STAR AVERIA",
      caption: "Không gian đô thị thương mại hiện đại và sầm uất",
    },
    {
      src: "/images/tongquan3.jpg",
      alt: "Cận cảnh quảng trường và tiện ích trung tâm STAR AVERIA",
      caption: "Quảng trường và tiện ích trung tâm đô thị",
    },
  ];

  const [currentOverviewIndex, setCurrentOverviewIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const isMouseDown = useRef(false);

  const prevOverview = () => {
    setCurrentOverviewIndex((prev) =>
      prev === 0 ? overviewImages.length - 1 : prev - 1
    );
  };

  const nextOverview = () => {
    setCurrentOverviewIndex((prev) =>
      prev === overviewImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) prevOverview();
    if (deltaX < -40) nextOverview();
    touchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isMouseDown.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null) return;
    const deltaX = e.clientX - mouseStartX.current;
    if (deltaX > 40) prevOverview();
    if (deltaX < -40) nextOverview();
    isMouseDown.current = false;
    mouseStartX.current = null;
  };

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
              Không đơn thuần là một khu đô thị, <strong className="text-[#894d20]">STAR AVERIA</strong> hướng tới kiến tạo một không gian sống có bản sắc – nơi con người tận hưởng giá trị của vị trí, kết nối với những tiện ích thiết yếu và từng ngày cảm nhận sự chuyển mình của đô thị. Với quy hoạch chỉn chu, không gian hài hòa cùng cảnh quan ven sông và tiềm năng gia tăng giá trị theo sự phát triển của khu vực, <strong className="text-[#894d20]">STAR AVERIA</strong> mở ra nền tảng cho một cuộc sống đáng sống hôm nay và những giá trị bền vững cho tương lai.
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
                <div className="flex items-end justify-center gap-1.5 mb-2">
                  <span className="font-crimson text-2xl md:text-3xl font-bold text-[#894d20] leading-none">
                    {h.num}
                  </span>
                  <span className="font-exo text-lg md:text-xl font-bold text-[#a56428] mb-1.5">{h.unit}</span>
                </div>
                <p className="font-exo text-xs md:text-xl font-bold text-gray-700 uppercase tracking-wider leading-snug">
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

      {/* ── Overview Multi-Image Slider ─────────────── */}
      <AnimatedSection animation="fadeIn" delay={0.3}>
        <div className="w-[90%] max-w-7xl mx-auto">
          <div
            className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl border border-[#a56428]/20 select-none group cursor-grab active:cursor-grabbing bg-[#fafbfc]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* Sliding Strip */}
            <div
              className="flex w-full h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentOverviewIndex * 100}%)` }}
            >
              {overviewImages.map((img, i) => (
                <div key={i} className="relative w-full h-full flex-shrink-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    quality={95}
                    className="object-cover pointer-events-none select-none"
                    sizes="(max-width: 1280px) 90vw, 1280px"
                  />
                </div>
              ))}
            </div>

            {/* Left Button (Overlay on image) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevOverview();
              }}
              className="absolute left-3 sm:left-5 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md border border-[#a56428]/30 text-[#894d20] flex items-center justify-center shadow-xl hover:bg-[#894d20] hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Ảnh trước"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            {/* Right Button (Overlay on image) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextOverview();
              }}
              className="absolute right-3 sm:right-5 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md border border-[#a56428]/30 text-[#894d20] flex items-center justify-center shadow-xl hover:bg-[#894d20] hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Ảnh tiếp theo"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            {/* Bottom Dots on the image */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
              {overviewImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentOverviewIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentOverviewIndex
                    ? "w-7 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  aria-label={`Chuyển đến ảnh ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
            {overviewImages[currentOverviewIndex].caption}
          </p>
        </div>
      </AnimatedSection>

    </section>

  );
}
