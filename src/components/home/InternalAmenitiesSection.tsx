"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, ChevronLeft, ChevronRight, Coffee, Compass, Heart, Landmark, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function InternalAmenitiesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const firstChild = sliderRef.current.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : 280;
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
        if (scrollLeft <= 10) {
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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.scrollBehavior = "auto";
    sliderRef.current.style.scrollSnapType = "none";
  };

  const handleMouseLeave = () => {
    if (!isMouseDownRef.current || !sliderRef.current) return;
    isMouseDownRef.current = false;
    sliderRef.current.style.scrollBehavior = "smooth";
    sliderRef.current.style.scrollSnapType = "x mandatory";
  };

  const handleMouseUp = () => {
    if (!isMouseDownRef.current || !sliderRef.current) return;
    isMouseDownRef.current = false;
    sliderRef.current.style.scrollBehavior = "smooth";
    sliderRef.current.style.scrollSnapType = "x mandatory";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startXRef.current;
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const floors = [
    {
      id: 1,
      icon: Landmark,
      floor: "Tầng 1",
      title: "TẦNG 1 — SẢNH CHÍNH & THƯƠNG HIỆU CAO CẤP",
      image: "/images/tienichnoikhu/TẦNG 1.jpg"
    },
    {
      id: 2,
      icon: Compass,
      floor: "Tầng 2",
      title: "TẦNG 2 — THỜI TRANG & PHỤ KIỆN",
      image: "/images/tienichnoikhu/TẦNG 2.jpg"
    },
    {
      id: 3,
      icon: Heart,
      floor: "Tầng 3",
      title: "TẦNG 3 — THỂ THAO, CÔNG NGHỆ & GIA ĐÌNH",
      image: "/images/tienichnoikhu/TẦNG 3.jpg"
    },
    {
      id: 4,
      icon: Trophy,
      floor: "Tầng 4",
      title: "TẦNG 4 — VUI CHƠI & GIÁO DỤC TRẺ EM",
      image: "/images/tienichnoikhu/TẦNG 4.jpg"
    },
    {
      id: 5,
      icon: Coffee,
      floor: "TẦNG 5",
      title: "TẦNG 5 — ẨM THỰC CAO CẤP",
      image: "/images/tienichnoikhu/TẦNG 5.jpg"
    },
    {
      id: 6,
      icon: Coffee,
      floor: "TẦNG 6",
      title: "TẦNG 6 — GIẢI TRÍ & THỂ CHẤT",
      image: "/images/tienichnoikhu/TẦNG 6.jpg"
    },
    {
      id: 7,
      icon: Coffee,
      floor: "TẦNG 7",
      title: "TẦNG 7-8 — RẠP CHIẾU PHIM",
      image: "/images/tienichnoikhu/TẦNG 7 8.jpg"
    },
    {
      id: 8,
      icon: Coffee,
      floor: "TẦNG 9",
      title: "TẦNG 9 — ROOFTOP POOL CLUB",
      image: "/images/tienichnoikhu/TẦNG 9.jpg"
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
                src="/images/tienichnoikhu/TTTM.jpg"
                alt="Sơ đồ phân khu hệ sinh thái tiện ích"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-exo text-xs md:text-sm text-gray-500 italic font-medium">
                Hệ sinh thái tiện ích tại dự án STAR AVERIA
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Showcase Header */}
        <AnimatedSection animation="fadeUp" delay={0.15}>
          <div className="text-center md:text-left mb-8 border-b border-neutral-200/60 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="font-crimson text-3xl md:text-4xl font-bold text-[#703a17]">
              Cơ cấu chức năng 9 tầng TTTM
            </h3>

            <Link
              href=""
              className="font-exo text-sm font-bold text-[#894d20] hover:text-[#703a17] transition-colors flex items-center justify-center gap-1.5 group"
            >
              Xem chi tiết tất cả tiện ích
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Horizontal Slider Layout with Left/Right Buttons */}
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="relative px-2 sm:px-4 md:px-0 mt-6">
            {/* Left Button */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#b97330] hover:bg-[#703a17] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer z-20 opacity-70 hover:opacity-100"
              aria-label="Cuộn sang trái"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Drag / Scroll Container */}
            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex overflow-x-auto gap-4 pb-4 pt-1 snap-x snap-mandatory scroll-smooth select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {floors.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[calc((100%-4*1rem)/5)] lg:min-w-[210px] snap-start bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Image Header */}
                  <div className="relative aspect-[1.3] w-full bg-white overflow-hidden p-2 shrink-0 pointer-events-none">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 260px, 250px"
                      className="object-contain p-2 rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Bottom Text Info */}
                  <div className="p-4 flex items-center gap-3 bg-white border-t border-neutral-100 flex-grow pointer-events-none">
                    <span className="font-crimson text-base md:text-lg font-bold text-[#b97330] shrink-0 leading-none uppercase whitespace-nowrap">
                      {item.floor}
                    </span>
                    <h4 className="font-exo text-xs md:text-sm font-bold text-[#00504a] uppercase tracking-wider leading-snug text-left border-l border-neutral-200 pl-3">
                      {item.title.replace(`TẦNG ${item.id} — `, "")}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#b97330] hover:bg-[#703a17] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer z-20 opacity-70 hover:opacity-100"
              aria-label="Cuộn sang phải"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
