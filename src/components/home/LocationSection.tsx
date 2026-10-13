"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { MapPin, Navigation, Users, TrendingUp } from "lucide-react";

export default function LocationSection() {
  const advantages = [
    {
      icon: Navigation,
      title: "Mặt tiền trục Lý Bôn",
      desc: "Tuyến lưu thông và giao thương sôi động tại trung tâm phường Trần Lãm.",
    },
    {
      icon: MapPin,
      title: "Kết nối toàn diện",
      desc: "Tiếp cận nhanh khu dân cư, trường học, bệnh viện, trung tâm hành chính và mua sắm.",
    },
    {
      icon: Users,
      title: "Lưu lượng khách cao",
      desc: "Vị trí nhận diện tốt, phù hợp mô hình bán lẻ, F&B, dịch vụ và văn phòng thương mại.",
    },
    {
      icon: TrendingUp,
      title: "Tiềm năng khai thác",
      desc: "Nền tảng vững cho nhà đầu tư, chủ kinh doanh và thương hiệu bán lẻ mở rộng.",
    },
  ];

  return (
    <section id="vitri" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* CSS keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes mapZoomOut {
          0% { transform: scale(1.8); }
          100% { transform: scale(1.0); }
        }
        .map-zoom-animate {
          will-change: transform;
          transform: scale(1.8);
        }
        .map-zoom-animate.is-visible {
          animation: mapZoomOut 2.5s linear forwards;
        }
      ` }} />

      {/* ── Ambient blur glows ─────────────────────── */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#ffeabf]/20 rounded-full -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#a56428]/10 rounded-full translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 w-[300px] h-[300px] bg-[#c07828]/8 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ─────────────────────── */}
        <AnimatedSection animation="fadeUp">
          <div className="mb-12 text-center max-w-7xl mx-auto space-y-4">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold uppercase tracking-wide bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent">
              Vị trí
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>
            <p className="font-crimson text-lg md:text-xl italic text-[#894d20]/80 font-medium">
              Tọa lạc tại khu vực trung tâm Thái Bình.
            </p>
            <p className="font-exo text-[16px] md:text-lg text-gray-700 leading-relaxed font-medium text-left pt-2">
              <strong className="text-[#894d20]">STAR AVERIA</strong> sở hữu vị trí ven sông Trà Lý, kết nối thuận tiện với các tuyến giao thông và khu vực trọng điểm của đô thị. Lợi thế vị trí tạo nên nền tảng cho một không gian sống hiện đại, giàu giá trị và tiềm năng phát triển dài hạn.
              <strong className="text-[#894d20]">STAR AVERIA</strong> – khu đô thị ven sông Trà Lý tại trung tâm Thái Bình, kiến tạo không gian sống hiện đại, kết nối thuận tiện và giá trị bền vững, nơi nhịp sống đô thị hòa cùng dòng chảy kiến tạo tương lai.

            </p>
          </div>
        </AnimatedSection>

        {/* ── 12-col: Cards 3 left, Map/Video 9 right ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: Advantage Cards (3 cols - 25% width) */}
          {/* <div className="lg:col-span-3 order-2 lg:order-1">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {advantages.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="group relative p-4 rounded-2xl border border-[#a56428]/15 bg-gradient-to-br from-[#ffeabf]/15 to-white hover:border-[#a56428]/40 hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#a56428]/30 rounded-tl-2xl pointer-events-none" />

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#ffeabf] to-[#c07828]/20 flex items-center justify-center group-hover:from-[#a56428] group-hover:to-[#894d20] transition-all duration-300 shadow-sm">
                          <Icon className="w-4 h-4 text-[#894d20] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-exo text-xs font-bold text-[#894d20] uppercase tracking-wider mb-1">
                            {item.title}
                          </p>
                          <p className="font-exo text-sm text-gray-600 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div> */}

          {/* RIGHT: Map/Video (9 cols - 75% width) */}
          <div className="lg:col-span-12 order-1 lg:order-2">
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#a56428]/10 shadow-sm bg-[#fafbfc]">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src="/images/ban-do-star-averia.png"
                      alt="Sơ đồ vị trí kết nối giao thông và liên kết vùng của dự án STAR AVERIA"
                      fill
                      priority
                      quality={95}
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </div>
                </div>

                <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-400 italic">
                  Sơ đồ vị trí kết nối giao thông và liên kết vùng của dự án <strong className="text-[#894d20]">STAR AVERIA</strong>
                </p>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
