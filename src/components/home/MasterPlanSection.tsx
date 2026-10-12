"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { useRef } from "react";

export default function MasterPlanSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !lensRef.current) return;

    const container = containerRef.current;
    const lens = lensRef.current;
    const zoomedContainer = lens.firstElementChild as HTMLDivElement;
    if (!zoomedContainer) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Hide lens if cursor goes out of bounds
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      lens.style.display = "none";
      return;
    }

    lens.style.display = "block";

    const lensWidth = lens.offsetWidth;
    const lensHeight = lens.offsetHeight;

    // Position lens centered over cursor
    lens.style.left = `${x - lensWidth / 2}px`;
    lens.style.top = `${y - lensHeight / 2}px`;

    // Scale level
    const zoomScale = 10;

    // Dynamically size the zoomed container container to be zoomScale times the size of the container,
    // so the zoomed image renders at the correct magnification
    zoomedContainer.style.width = `${rect.width * zoomScale}px`;
    zoomedContainer.style.height = `${rect.height * zoomScale}px`;

    // Calculate translation to keep the zoomed view centered on the cursor position
    const translateX = -(x * zoomScale - lensWidth / 2);
    const translateY = -(y * zoomScale - lensHeight / 2);

    zoomedContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };

  const handleMouseLeave = () => {
    if (lensRef.current) {
      lensRef.current.style.display = "none";
    }
  };

  return (
    <section
      id="masterplan"
      className="pt-8 pb-12 md:pt-12 md:pb-14 bg-[#fafbfc] border-t border-b border-neutral-100 relative overflow-hidden"
    >
      {/* Editorial backdrop lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-primary" />
        <div className="absolute left-[80%] top-0 bottom-0 w-[1px] bg-primary" />
        <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-primary" />
        <div className="absolute top-[70%] left-0 right-0 h-[1px] bg-primary" />
      </div>

      {/* 1. Header block (inside container) */}
      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-6 max-w-7xl mx-auto">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent">
              TỔNG MẶT BẰNG
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>
            <div className="font-exo text-[16px] md:text-lg text-gray-700 leading-relaxed font-medium text-justify md:text-left max-w-7xl mx-auto space-y-4">
              <p>
                Mặt bằng <strong className="text-[#894d20]">STAR AVERIA</strong> được quy hoạch đồng bộ, chú trọng sự hài hòa giữa không gian sống, cảnh quan và hệ thống tiện ích. Từng phân khu được tổ chức khoa học, tối ưu khả năng kết nối và khai thác, tạo nên một tổng thể đô thị hiện đại, thuận tiện và giàu giá trị cho cư dân cũng như nhà đầu tư.

              </p>

            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* 2. Map Image (Full-width inside container) */}
      <div className="w-[90%] max-w-[1300px] mx-auto relative z-10 mt-2 mb-6 md:my-8">
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="relative w-full aspect-[1.6] bg-[#fafbfc] overflow-hidden rounded-2xl border border-[#a56428]/10 shadow-sm p-1">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full h-full overflow-hidden cursor-crosshair rounded-xl"
            >
              {/* Main map image */}
              <Image
                src="/images/MẶT BẰNG UPSCALE.png"
                alt="Tổng mặt bằng dự án Star Avenue"
                fill
                priority
                quality={100}
                sizes="(max-width: 1280px) 90vw, 1280px"
                className="object-contain select-none pointer-events-none"
              />

              {/* Floating magnifier lens (Square Shape) */}
              <div
                ref={lensRef}
                className="absolute w-[360px] h-[360px] border-2 border-accent-gold shadow-2xl bg-[#fafbfc] pointer-events-none overflow-hidden hidden z-30 rounded-lg"
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
              >
                {/* Zoomed inner container */}
                <div className="absolute pointer-events-none origin-top-left">
                  <Image
                    src="/images/MẶT BẰNG UPSCALE.png"
                    alt="Zoomed Map"
                    fill
                    unoptimized
                    className="object-contain select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Bản đồ quy hoạch tổng mặt bằng chi tiết các phân khu tại dự án <strong className="text-[#894d20]">STAR AVENUE</strong>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
