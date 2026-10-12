"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Landmark, Compass, Heart, Trophy, Coffee, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InternalAmenitiesSection() {
  const floors = [
    {
      id: 1,
      icon: Landmark,
      floor: "Tầng 1",
      title: "TẦNG 1 — ĐÓN KHÁCH & TIỆN ÍCH THIẾT YẾU",
      image: "/images/tienichnoikhu/tang-1.png"
    },
    {
      id: 2,
      icon: Compass,
      floor: "Tầng 2",
      title: "TẦNG 2 — MUA SẮM & LIFESTYLE",
      image: "/images/tienichnoikhu/tang-2.png"
    },
    {
      id: 3,
      icon: Heart,
      floor: "Tầng 3",
      title: "TẦNG 3 — GIA ĐÌNH & GIẢI TRÍ TRẺ EM",
      image: "/images/tienichnoikhu/tang-3.png"
    },
    {
      id: 4,
      icon: Trophy,
      floor: "Tầng 4",
      title: "TẦNG 4 — GIẢI TRÍ & CHĂM SÓC SỨC KHỎE",
      image: "/images/tienichnoikhu/tang-4.png"
    },
    {
      id: 5,
      icon: Coffee,
      floor: "Tầng 5",
      title: "TẦNG 5 — ROOFTOP & TRẢI NGHIỆM CAO CẤP",
      image: "/images/tienichnoikhu/tang-5.jpg"
    }
  ];

  return (
    <section id="amenities" className="py-12 md:py-16 bg-[#FAF9F5] border-b border-neutral-100 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[500px] h-[500px] bg-accent-gold/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.005] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-10 md:mb-14 max-w-7xl mx-auto">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block mb-3">
              TIỆN ÍCH NỘI KHU
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>
            <strong className="text-[#894d20]">STAR AVERIA</strong>
            <div className="font-exo text-base text-justify md:text-lg text-neutral-gray-700 leading-relaxed font-medium space-y-4">
              <p>
                <strong className="text-[#894d20]">STAR AVERIA</strong> hướng tới kiến tạo hệ tiện ích đồng bộ, nơi mọi nhu cầu sống, nghỉ ngơi, vui chơi và kết nối cộng đồng được đáp ứng trong một không gian đô thị hiện đại. Lợi thế cảnh quan ven sông Trà Lý kết hợp cùng hệ thống công viên, không gian cây xanh, mặt nước và tuyến phố đi bộ mở ra những trải nghiệm thư thái giữa nhịp sống năng động. Không gian công cộng được định hướng trở thành điểm hẹn giao lưu, vui chơi và tổ chức các hoạt động cộng đồng, góp phần hình thành môi trường sống văn minh, giàu sức sống.
              </p>
              <p>
                Cùng với lợi thế kết nối khu vực trung tâm, <strong className="text-[#894d20]">STAR AVERIA</strong> hướng đến sự thuận tiện trong sinh hoạt hằng ngày, đồng thời tạo điều kiện phát triển các hoạt động thương mại, dịch vụ phục vụ cư dân. Không chỉ dừng lại ở tiện nghi, hệ sinh thái tiện ích còn góp phần nâng tầm chất lượng sống, kiến tạo cộng đồng gắn kết và bồi đắp những giá trị bền vững theo thời gian.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Ecosystem/Amenities Map Showcase */}
        <AnimatedSection animation="fadeUp" delay={0.1}>
          <div className="mb-12 md:mb-16">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#fafbfc] overflow-hidden rounded-2xl border border-neutral-100 shadow-luxury">
              <Image
                src="/images/tienichnoikhu/TTTM.png"
                alt="Sơ đồ phân khu hệ sinh thái tiện ích"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-exo text-xs md:text-sm text-gray-500 italic font-medium">
                Hệ sinh thái tiện ích tại dự án STAR AVENUE
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Showcase Header */}
        <AnimatedSection animation="fadeUp" delay={0.15}>
          <div className="text-center md:text-left mb-8 border-b border-neutral-200/60 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="font-crimson text-3xl md:text-4xl font-bold text-[#703a17]">
              Cơ cấu chức năng 5 tầng TTTM
            </h3>

            <Link
              href="/tien-ich"
              className="font-exo text-sm font-bold text-[#894d20] hover:text-[#703a17] transition-colors flex items-center justify-center gap-1.5 group"
            >
              Xem chi tiết tất cả tiện ích
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 5-Card Grid exactly like the reference image */}
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {floors.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image Header */}
                  <div className="relative aspect-[1.3] w-full bg-white overflow-hidden p-2 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 250px"
                      className="object-contain p-2 rounded-t-2xl"
                    />
                  </div>

                  {/* Card Bottom Text Info */}
                  <div className="p-4 flex items-center gap-3 bg-white border-t border-neutral-100 flex-grow">
                    <span className="font-crimson text-base md:text-lg font-bold text-[#b97330] shrink-0 leading-none uppercase whitespace-nowrap">
                      {item.floor}
                    </span>
                    <h4 className="font-exo text-xs md:text-sm font-bold text-[#00504a] uppercase tracking-wider leading-snug text-left border-l border-neutral-200 pl-3">
                      {item.title.replace(`TẦNG ${item.id} — `, "")}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
