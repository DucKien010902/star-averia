"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const metrics = [
    { title: "Vận hành", value: "24/7", desc: "Linh hoạt tối ưu công năng" },
    { title: "Quy hoạch", value: "8.73 ha", desc: "Đồng bộ thương mại & cảnh quan" },
    { title: "Pháp lý", value: "Lâu dài", desc: "Sở hữu bền vững truyền đời" }
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-white relative overflow-hidden border-b border-accent-gold/10">

      {/* Delicate background geometry/lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-neutral-800" />
        <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-neutral-800" />
      </div>

      {/* Subtle luxury glow blur */}
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#ffeabf]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#a56428]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        <div className="space-y-8 mx-auto">

          {/* NARRATIVE TEXT (Centered/Justified) */}
          <AnimatedSection animation="fadeUp" delay={0.15}>
            <p className="font-exo text-[16px] md:text-lg leading-relaxed text-gray-700 text-justify md:text-center font-medium max-w-7xl mx-auto">
              <strong className="text-[#894d20]">STAR AVENUE</strong> được kiến tạo như một biểu tượng thương mại – dịch vụ hiện đại tại khu vực phát triển năng động của phường Trần Lãm. Dự án hướng tới không gian nơi mua sắm, giải trí, dịch vụ, kinh doanh và đầu tư được kết nối trong cùng một điểm đến có bản sắc. Với ngôn ngữ kiến trúc nổi bật, hệ tiện ích thương mại đồng bộ và định hướng vận hành linh hoạt, <strong className="text-[#894d20]">STAR AVENUE</strong> không chỉ góp phần làm mới diện mạo giao thương đô thị, mà còn tạo nền tảng cho những giá trị khai thác lâu dài của nhà đầu tư, chủ kinh doanh và cộng đồng cư dân khu vực.
            </p>
          </AnimatedSection>

          {/* METRICS (3 Columns, centered) */}
          <AnimatedSection animation="fadeUp" delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100 max-w-3xl mx-auto text-center">
              {metrics.map((item, index) => (
                <div key={index} className="space-y-2 group">
                  <p className="font-exo text-[10px] font-bold text-[#a56428] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[#894d20]">
                    {item.title}
                  </p>
                  <p className="font-crimson text-3xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
                    {item.value}
                  </p>
                  <p className="font-exo text-xs text-gray-500 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
