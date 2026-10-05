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
    const zoomScale = 5;

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
                Tổng mặt bằng <strong className="text-[#894d20]">STAR AVENUE</strong> được phát triển với tư duy quy hoạch lấy thương mại làm trung tâm, đồng thời chú trọng trải nghiệm cảnh quan và sự kết nối trong toàn khu.
              </p>
              <p>
                Các phân khu chức năng như trung tâm thương mại, nhà phố thương mại, quảng trường, đài phun nước, đường dạo bộ, mảng xanh và tiện ích ngoài trời được bố trí nhằm tạo nên một không gian vận hành liền mạch, thuận tiện cho khách tham quan, cư dân, nhà đầu tư và chủ kinh doanh.
              </p>
              <p>
                Không chỉ dừng ở vai trò một công trình thương mại, <strong className="text-[#894d20]">STAR AVENUE</strong> hướng đến mô hình không gian có khả năng thu hút dòng khách, gia tăng thời gian lưu trú và hỗ trợ hiệu quả cho các hoạt động mua sắm, dịch vụ, giải trí và kinh doanh hiện đại.
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
                src="/images/MBLYBON.png"
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
                className="absolute w-60 h-60 border-2 border-accent-gold shadow-2xl bg-[#fafbfc] pointer-events-none overflow-hidden hidden z-30 rounded-lg"
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
              >
                {/* Zoomed inner container */}
                <div className="absolute pointer-events-none origin-top-left">
                  <Image
                    src="/images/MBLYBON.png"
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
