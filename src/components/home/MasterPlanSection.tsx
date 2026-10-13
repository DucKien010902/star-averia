"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function MasterPlanSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const zoomedContainerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{ pageX: number; pageY: number; width: number; height: number } | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const zoomScale = 8;
  const lensSize = 240;
  const lensRadius = lensSize / 2;

  const updateDimensions = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    rectRef.current = {
      pageX: rect.left + window.pageXOffset,
      pageY: rect.top + window.pageYOffset,
      width: rect.width,
      height: rect.height,
    };
    if (zoomedContainerRef.current) {
      zoomedContainerRef.current.style.width = `${rect.width * zoomScale}px`;
      zoomedContainerRef.current.style.height = `${rect.height * zoomScale}px`;
    }
  };

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (containerRef.current && rectRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        rectRef.current.pageX = rect.left + window.pageXOffset;
        rectRef.current.pageY = rect.top + window.pageYOffset;
        rectRef.current.width = rect.width;
        rectRef.current.height = rect.height;
      }
    };

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  const handleMouseEnter = () => {
    updateDimensions();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current) {
      updateDimensions();
    }
    const rect = rectRef.current;
    if (!rect || !lensRef.current || !zoomedContainerRef.current) return;

    const x = e.pageX - rect.pageX;
    const y = e.pageY - rect.pageY;

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      lensRef.current.style.display = "none";
      return;
    }

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      if (!lensRef.current || !zoomedContainerRef.current) return;

      lensRef.current.style.display = "block";
      lensRef.current.style.transform = `translate3d(${x - lensRadius}px, ${y - lensRadius}px, 0)`;

      const translateX = -(x * zoomScale - lensRadius);
      const translateY = -(y * zoomScale - lensRadius);
      zoomedContainerRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    });
  };

  const handleMouseLeave = () => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    if (lensRef.current) {
      lensRef.current.style.display = "none";
    }
    rectRef.current = null;
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
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full h-full overflow-hidden cursor-crosshair rounded-xl"
            >
              {/* Main map image */}
              <Image
                src="/images/MẶT BẰNG.webp"
                alt="Tổng mặt bằng dự án STAR AVERIA"
                fill
                priority
                quality={100}
                sizes="(max-width: 1280px) 90vw, 1280px"
                className="object-contain select-none pointer-events-none"
              />

              {/* Floating magnifier lens (Square Shape) */}
              <div
                ref={lensRef}
                className="absolute top-0 left-0 w-[240px] h-[240px] border-2 border-accent-gold shadow-2xl bg-[#fafbfc] pointer-events-none overflow-hidden hidden z-30 rounded-lg will-change-transform"
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
              >
                {/* Zoomed inner container */}
                <div
                  ref={zoomedContainerRef}
                  className="absolute pointer-events-none origin-top-left will-change-transform"
                >
                  <Image
                    src="/images/MẶT BẰNG.webp"
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
              Bản đồ quy hoạch tổng mặt bằng chi tiết các phân khu tại dự án <strong className="text-[#894d20]">STAR AVERIA</strong>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
