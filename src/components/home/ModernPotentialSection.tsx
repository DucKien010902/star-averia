"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductSlide {
  src: string;
  alt: string;
  label?: string;
}

interface ProductGroup {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  images: ProductSlide[];
}

function ProductCoverflowSlider({ group }: { group: ProductGroup }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const isMouseDown = useRef(false);

  const total = group.images.length;

  const prev = () => {
    setCurrentIndex((p) => (p - 1 + total) % total);
  };

  const next = () => {
    setCurrentIndex((p) => (p + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) prev();
    if (deltaX < -40) next();
    touchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isMouseDown.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null) return;
    const deltaX = e.clientX - mouseStartX.current;
    if (deltaX > 40) prev();
    if (deltaX < -40) next();
    isMouseDown.current = false;
    mouseStartX.current = null;
  };

  return (
    <div className="mb-8 md:mb-12 last:mb-0">
      {/* ── Product Header Block ────────────────── */}
      <div className="mb-2 border-b border-[#a56428]/20 pb-2">
        <h3 className="font-crimson text-lg md:text-xl font-bold uppercase tracking-wide text-[#703a17]">
          {group.title}
        </h3>
      </div>

      {/* ── 3D Overlapping Coverflow Area ──────── */}
      <div
        className="relative w-full h-[420px] sm:h-[520px] md:h-[600px] lg:h-[660px] flex items-center justify-center overflow-hidden py-1 select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* Left Arrow Button (Floating overlay) */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 md:left-6 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#a56428]/30 text-[#894d20] flex items-center justify-center shadow-xl hover:bg-[#894d20] hover:text-white transition-all duration-300 cursor-pointer active:scale-90"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button (Floating overlay) */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 md:right-6 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#a56428]/30 text-[#894d20] flex items-center justify-center shadow-xl hover:bg-[#894d20] hover:text-white transition-all duration-300 cursor-pointer active:scale-90"
          aria-label="Ảnh sau"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Images Layer */}
        <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
          {group.images.map((img, i) => {
            let diff = i - currentIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isVisible = isCenter || isLeft || isRight;

            let transform = "";
            let zIndex = 0;
            let opacity = 0;
            let filter = "none";

            if (isCenter) {
              transform = "translate(-50%, -50%) scale(1.05)";
              zIndex = 30;
              opacity = 1;
              filter = "brightness(100%)";
            } else if (isLeft) {
              transform = "translate(-90%, -50%) scale(0.82)";
              zIndex = 10;
              opacity = 0.65;
              filter = "brightness(80%)";
            } else if (isRight) {
              transform = "translate(-10%, -50%) scale(0.82)";
              zIndex = 10;
              opacity = 0.65;
              filter = "brightness(80%)";
            } else {
              transform =
                diff < 0
                  ? "translate(-120%, -50%) scale(0.7)"
                  : "translate(20%, -50%) scale(0.7)";
              zIndex = 0;
              opacity = 0;
            }

            return (
              <div
                key={i}
                onClick={() => {
                  if (isLeft) prev();
                  if (isRight) next();
                }}
                className={`absolute top-1/2 left-1/2 w-[90%] sm:w-[82%] md:w-[75%] lg:w-[70%] aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out border ${
                  isCenter
                    ? "border-[#a56428]/40 shadow-[0_25px_60px_rgba(137,77,32,0.3)] cursor-grab active:cursor-grabbing"
                    : "border-neutral-200 cursor-pointer hover:opacity-90"
                }`}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  filter,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 850px"
                  className="object-cover pointer-events-none select-none"
                  priority={isCenter}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Dots Navigation ────────────────────── */}
      <div className="flex items-center justify-center gap-2 mt-2.5">
        {group.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentIndex
                ? "w-8 bg-[#894d20]"
                : "w-2 bg-[#a56428]/25 hover:bg-[#a56428]/50"
            }`}
            aria-label={`Chuyển đến ảnh ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ModernPotentialSection() {
  const productGroups: ProductGroup[] = [
    {
      id: "lien-ke",
      title: "Liền Kề",
      badge: "182 CĂN • XÂY 5 TẦNG",
      subtitle: "Mặt tiền 9m – Đa năng an cư & kinh doanh sinh lời vượt trội",
      images: [
        {
          src: "/images/sptrangchu/lienke/lienke1.jpg",
          alt: "Phối cảnh nhà liền kề STAR AVERIA góc nhìn 1",
          label: "Thiết kế mặt tiền hiện đại mang dấu ấn độc bản",
        },
        {
          src: "/images/sptrangchu/lienke/lienke2.jpg",
          alt: "Phối cảnh nhà liền kề STAR AVERIA góc nhìn 2",
          label: "Kiến trúc liền kề đồng bộ, tối ưu công năng",
        },
        {
          src: "/images/sptrangchu/lienke/lienke3.jpg",
          alt: "Phối cảnh nhà liền kề STAR AVERIA góc nhìn 3",
          label: "Không gian sống và kinh doanh sang trọng",
        },
        {
          src: "/images/sptrangchu/lienke/lienke4.jpg",
          alt: "Phối cảnh nhà liền kề STAR AVERIA góc nhìn 4",
          label: "Hòa quyện cùng cảnh quan cây xanh nội khu",
        },
        {
          src: "/images/sptrangchu/lienke/lienke5.jpg",
          alt: "Phối cảnh nhà liền kề STAR AVERIA góc nhìn 5",
          label: "Đại lộ giao thương sầm uất, tiềm năng kinh doanh vượt trội",
        },
      ],
    },
    {
      id: "biet-thu",
      title: "Biệt Thự",
      badge: "34 CĂN • XÂY 3,5 TẦNG",
      subtitle: "Kiệt tác riêng tư ven sông Trà Lý – Khẳng định vị thế chủ nhân",
      images: [
        {
          src: "/images/sptrangchu/bietthu/bietthu1.jpg",
          alt: "Phối cảnh biệt thự STAR AVERIA góc nhìn 1",
          label: "Kiến trúc sang trọng bề thế, hòa quyện cảnh quan",
        },
        {
          src: "/images/sptrangchu/bietthu/bietthu2.jpg",
          alt: "Phối cảnh biệt thự STAR AVERIA góc nhìn 2",
          label: "Đường nét kiến trúc thanh lịch, chuẩn mực sống thượng lưu",
        },
        {
          src: "/images/sptrangchu/bietthu/bietthu3.jpg",
          alt: "Phối cảnh biệt thự STAR AVERIA góc nhìn 3",
          label: "Khuôn viên sân vườn xanh mát, mang thiên nhiên vào từng nhịp sống",
        },
        {
          src: "/images/sptrangchu/bietthu/bietthu4.jpg",
          alt: "Phối cảnh biệt thự STAR AVERIA góc nhìn 4",
          label: "Thiết kế đón trọn ánh sáng tự nhiên và gió mát lành",
        },
        {
          src: "/images/sptrangchu/bietthu/bietthu5.jpg",
          alt: "Phối cảnh biệt thự STAR AVERIA góc nhìn 5",
          label: "Kiệt tác dinh thự khẳng định vị thế chủ nhân",
        },
      ],
    },
    {
      id: "chung-cu",
      title: "Chung Cư",
      badge: "631 CĂN • XÂY 32 TẦNG",
      subtitle: "Biểu tượng sống tầng cao – Tầm nhìn panorama ôm trọn sông Trà Lý",
      images: [
        {
          src: "/images/sptrangchu/chungcu/chungcu1.jpg",
          alt: "Phối cảnh tòa tháp chung cư STAR AVERIA góc nhìn 1",
          label: "Tòa tháp biểu tượng kiến tạo chuẩn mực sống thời thượng",
        },
        {
          src: "/images/sptrangchu/chungcu/chungcu2.jpg",
          alt: "Phối cảnh tòa tháp chung cư STAR AVERIA góc nhìn 2",
          label: "Kiến trúc hiện đại kết hợp tiện ích thương mại khối đế",
        },
        {
          src: "/images/sptrangchu/chungcu/chungcu3.jpg",
          alt: "Phối cảnh tòa tháp chung cư STAR AVERIA góc nhìn 3",
          label: "Tầm nhìn panorama tuyệt mỹ bao trọn toàn cảnh thành phố",
        },
        {
          src: "/images/sptrangchu/chungcu/chungcu4.jpg",
          alt: "Phối cảnh tòa tháp chung cư STAR AVERIA góc nhìn 4",
          label: "Cảnh quan quảng trường và khối tháp hiện đại giao hòa",
        },
        {
          src: "/images/sptrangchu/chungcu/chungcu5.jpg",
          alt: "Phối cảnh tòa tháp chung cư STAR AVERIA góc nhìn 5",
          label: "Không gian sống sinh thái trên tầm cao đẳng cấp",
        },
      ],
    },
  ];

  return (
    <section
      id="potential"
      className="py-10 md:py-14 bg-[#FCFCFB] overflow-hidden relative border-b border-accent-gold/10"
    >
      {/* Decorative luxury background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ffeabf]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#a56428]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-6 md:mb-8 max-w-7xl mx-auto">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent">
              SẢN PHẨM
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>

            <p className="font-crimson text-xl md:text-2xl italic text-[#894d20] font-semibold leading-normal mb-4 text-center">
              Sản phẩm STAR AVERIA – Đa dạng lựa chọn, kiến tạo giá trị bền vững
            </p>

            <div className="font-exo text-[16px] md:text-lg leading-relaxed text-gray-700 font-medium text-left max-w-7xl mx-auto mt-2">
              <p>
                <strong className="text-[#894d20]">STAR AVERIA</strong> kiến tạo danh mục sản phẩm đa dạng, đáp ứng nhu cầu an cư, kinh doanh và đầu tư trong không gian đô thị hiện đại ven sông Trà Lý. Dự án phát triển 182 căn liền kề cao 5 tầng, phù hợp với nhu cầu an cư kết hợp khai thác kinh doanh; 34 căn biệt thự cao 3,5 tầng, hướng đến không gian sống riêng tư và tiện nghi; cùng 631 căn hộ chung cư cao 32 tầng, mở rộng lựa chọn nhà ở giữa khu vực trung tâm đô thị. Sự kết hợp giữa các dòng sản phẩm thấp tầng và cao tầng tạo nên tổng thể kiến trúc đa dạng, đáp ứng nhiều nhu cầu và phong cách sống khác nhau. Cùng lợi thế vị trí trung tâm, cảnh quan ven sông Trà Lý và định hướng phát triển đồng bộ, <strong className="text-[#894d20]">STAR AVERIA</strong> hướng tới hình thành cộng đồng cư dân hiện đại, đồng thời mở ra tiềm năng khai thác và gia tăng giá trị bất động sản theo sự phát triển của khu vực.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ── 3 Product Groups with Overlapping Coverflow Slider ── */}
        <AnimatedSection animation="fadeUp" delay={0.15}>
          <div className="space-y-8 md:space-y-12 mt-4">
            {productGroups.map((group) => (
              <ProductCoverflowSlider key={group.id} group={group} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
