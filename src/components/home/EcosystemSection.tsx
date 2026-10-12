"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function EcosystemSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const parkAmenities = [
    { id: 1, title: "Đài phun nước nghệ thuật", image: "/images/hesinhthaicv/ĐÀI PHUN NƯỚC.jpg" },
    { id: 2, title: "Quảng trường Tượng Sen", image: "/images/hesinhthaicv/TƯỢNG SEN.jpg" },
    { id: 3, title: "Vườn hoa cảnh quan", image: "/images/hesinhthaicv/VƯỜN HOA.jpg" },
    { id: 4, title: "Chòi nghỉ thư giãn", image: "/images/hesinhthaicv/TRÒI.jpg" },
    { id: 5, title: "Khu vui chơi trẻ em ngoài trời", image: "/images/hesinhthaicv/KHU VUI CHƠI TRẺ EM.jpg" },
    { id: 6, title: "Tổ hợp Cà phê & Vui chơi", image: "/images/hesinhthaicv/CÀ PHÊ + TRẺ EM.jpg" },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 340; // width of card (320px) + gap (20px)
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (direction === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          sliderRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          sliderRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollLeft <= 5) {
          sliderRef.current.scrollTo({
            left: scrollWidth,
            behavior: "smooth",
          });
        } else {
          sliderRef.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="ecosystem"
      className="pt-10 md:pt-16 pb-8 md:pb-10 bg-[#FCFCFB] relative overflow-hidden border-b border-accent-gold/10"
    >
      {/* Subtle luxury background glows */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] bg-accent-gold/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.005] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-8 mx-auto">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block mb-3">
              HỆ SINH THÁI CÔNG VIÊN
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>
            <div className="font-exo text-base text-justify md:text-lg text-neutral-gray-700 leading-relaxed font-medium space-y-4">
              <p>
                Gần 8 ha cây xanh, chiếm gần 28% diện tích dự án, <strong className="text-[#894d20]">STAR AVERIA</strong> hướng tới kiến tạo không gian sống hài hòa giữa thiên nhiên và nhịp sống đô thị hiện đại. Hệ thống công viên, quảng trường, mặt nước và không gian cảnh quan mở ra những điểm hẹn thư giãn, vui chơi và kết nối cộng đồng.
              </p>
              <p>
                Dọc dòng Trà Lý, tuyến phố đi bộ dài khoảng 1 km kết nối với công viên ven sông rộng khoảng 12.000 m², mang đến trải nghiệm dạo bộ giữa không gian thoáng đãng và cảnh quan sông nước. Cùng với các công viên và vườn hoa được bố trí đan xen giữa những dãy phố, mạng lưới không gian xanh tạo điều kiện để cư dân tận hưởng những phút giây thư thái ngay gần nhà.
              </p>
              <p>
                Tại <strong className="text-[#894d20]">STAR AVERIA</strong>, cây xanh không chỉ góp phần tạo nên diện mạo đô thị giàu sức sống mà còn nâng cao chất lượng môi trường sống, thúc đẩy sự gắn kết cộng đồng và kiến tạo phong cách sống xanh bền vững.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Overall Park Layout Image Showcase */}
        <AnimatedSection animation="fadeUp" delay={0.1}>
          <div className="mb-12">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#fafbfc] overflow-hidden rounded-2xl border border-neutral-100 shadow-luxury">
              <Image
                src="/images/hesinhthaicv/tongthe.jpg"
                alt="Sơ đồ phân khu hệ sinh thái công viên"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-exo text-xs md:text-sm text-gray-500 italic font-medium">
                Tổng thể phân khu hệ sinh thái công viên
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Unified Slider Layout (Horizontal Carousel with Next/Prev Buttons on the sides) */}
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="relative px-2 sm:px-4 md:px-0">
            {/* Left Button */}
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#b97330] hover:bg-[#703a17] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer z-20 opacity-60 hover:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Swipe/Scroll Container */}
            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-neutral-100/50 [&::-webkit-scrollbar-thumb]:bg-accent-gold/40 [&::-webkit-scrollbar-thumb]:rounded-full px-1"
              style={{ scrollbarWidth: "none" }} // Hide default Firefox scrollbar
            >
              {parkAmenities.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[290px] sm:w-[320px] snap-start bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col group transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,80,74,0.08)] hover:-translate-y-1"
                >
                  {/* Image Container with rounded top and aspect ratio */}
                  <div className="relative w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-t-3xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 290px, 320px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Floating index tag */}
                    <span className="absolute top-4 left-4 bg-[#1e293b]/90 backdrop-blur-sm text-accent-gold text-xs font-bold font-crimson border border-white/10 px-3 py-1 rounded-lg">
                      {item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                  </div>

                  {/* Footer text: Centered, uppercase green title */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-center items-center text-center bg-white rounded-b-3xl border-t border-neutral-50 min-h-[90px]">
                    <h3 className="font-exo text-sm md:text-base font-bold text-[#894d20] uppercase tracking-wide leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#b97330] hover:bg-[#703a17] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer z-20 opacity-60 hover:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
