"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { Building2, LayoutGrid, Car, Trees, TrendingUp, Maximize2, ZoomIn, X } from "lucide-react";

export default function MatBangPage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImg(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

    // Dynamically size the zoomed container to match container * scale
    zoomedContainer.style.width = `${rect.width * zoomScale}px`;
    zoomedContainer.style.height = `${rect.height * zoomScale}px`;

    // Calculate translation to keep the zoomed view centered on the cursor position
    const translateX = -(x * zoomScale - lensWidth / 2);
    const translateY = -(y * zoomScale - lensHeight / 2);

    zoomedContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !lensRef.current) return;

    const container = containerRef.current;
    const lens = lensRef.current;
    const zoomedContainer = lens.firstElementChild as HTMLDivElement;
    if (!zoomedContainer) return;

    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Hide lens if touch goes out of bounds
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      lens.style.display = "none";
      return;
    }

    // Prevent default behavior to stop page scrolling while zooming
    if (e.cancelable) {
      e.preventDefault();
    }

    lens.style.display = "block";

    const lensWidth = lens.offsetWidth;
    const lensHeight = lens.offsetHeight;

    // Position lens centered over touch
    lens.style.left = `${x - lensWidth / 2}px`;
    lens.style.top = `${y - lensHeight / 2}px`;

    // Scale level
    const zoomScale = 5.5;

    zoomedContainer.style.width = `${rect.width * zoomScale}px`;
    zoomedContainer.style.height = `${rect.height * zoomScale}px`;

    const translateX = -(x * zoomScale - lensWidth / 2);
    const translateY = -(y * zoomScale - lensHeight / 2);

    zoomedContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };

  const handleMouseLeave = () => {
    if (lensRef.current) {
      lensRef.current.style.display = "none";
    }
  };

  const specTable = [
    { label: "Loại hình", val: "Nhà phố thương mại / shophouse" },
    { label: "Số lượng", val: "251 căn" },
    { label: "Diện tích đất", val: "60 - 145m2" },
    { label: "Mật độ xây dựng", val: "100%" },
    { label: "Số tầng", val: "5 tầng" },
    { label: "Mặt tiền", val: "Mặt tiền lớn, ví dụ 9m" },
    { label: "Mặt thoáng", val: "100% sản phẩm có 2 - 3 mặt thoáng" },
    { label: "Công năng", val: "Ở, kinh doanh, cho thuê, văn phòng, showroom" },
    { label: "Vị trí", val: "Nằm trong lõi thương mại, gần TTTM, công viên, trục giao thông" },
    { label: "Giá trị", val: "Tài sản tích sản, khai thác dòng tiền, kinh doanh bền vững" },
    { label: "Định vị", val: "Sản phẩm thương mại thấp tầng dành cho nhà đầu tư và chủ kinh doanh" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ===== HEADER / INTRO ===== */}
      <section className="pt-28 pb-10 bg-[#FAF9F5] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-neutral-800" />
          <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-neutral-800" />
        </div>

        <div className="w-[90%] max-w-7xl mx-auto relative z-10 space-y-5 md:space-y-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center space-y-4 mt-4">
              <h1 className="font-crimson text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight uppercase">
                Mặt Bằng STAR AVENUE
              </h1>
              <p className="font-crimson text-xl md:text-2xl italic text-[#894d20] font-medium leading-normal">
                Quy Hoạch Thương Mại Cho Giá Trị Khai Thác Dài Hạn
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="font-exo text-base md:text-[17px] text-gray-700 leading-relaxed text-justify font-medium">
                <strong className="text-[#894d20]">STAR AVENUE</strong> được phát triển theo định vị tổ hợp thương mại – dịch vụ, nơi hội tụ mua sắm, dịch vụ, giải trí, kinh doanh và đầu tư trên trục trung tâm lõi Lý Bôn – phường Trần Lãm. Trong tổng thể đó, mặt bằng dự án đóng vai trò như nền tảng tổ chức toàn bộ hoạt động thương mại: từ cách phân bổ nhà phố thương mại, trung tâm thương mại – dịch vụ, không gian cảnh quan đến hệ thống giao thông nội khu và các điểm kết nối cộng đồng.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="font-exo text-base md:text-[17px] text-gray-700 leading-relaxed text-justify font-medium">
                Giá trị của mặt bằng <strong className="text-[#894d20]">STAR AVENUE</strong> không chỉ nằm ở số lượng sản phẩm, mà nằm ở cách các không gian được liên kết để hỗ trợ vận hành. Khi sản phẩm, lối tiếp cận, cảnh quan và tiện ích được bố trí hợp lý, dự án có thêm điều kiện để hình thành dòng khách, tăng trải nghiệm điểm đến và nâng cao hiệu quả khai thác thương mại.
              </p>
            </AnimatedSection>
          </div>

          {/* Ảnh 1 với Magnifier Lens Zoom */}
          <AnimatedSection animation="fadeUp" delay={0.25}>
            <div
              className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-1 md:p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto cursor-crosshair animate-fadeIn"
              onClick={() => setLightboxImg("/images/MBLYBON.png")}
            >
              <div className="relative aspect-[754/479] w-full rounded-xl overflow-hidden bg-white">
                <div
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleMouseLeave}
                  onTouchCancel={handleMouseLeave}
                  className="relative w-full h-full overflow-hidden"
                >
                  <Image
                    src="/images/MBLYBON.png"
                    alt="Tổng quan mặt bằng STAR AVENUE"
                    fill
                    priority
                    quality={100}
                    className="object-contain select-none pointer-events-none"
                  />

                  {/* Hover Magnifier Lens */}
                  <div
                    ref={lensRef}
                    className="absolute w-60 h-60 border-2 border-accent-gold shadow-2xl bg-white pointer-events-none overflow-hidden hidden z-30 rounded-lg"
                    style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
                  >
                    <div className="absolute left-0 top-0 pointer-events-none origin-top-left">
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
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              <strong className="text-[#894d20]">STAR AVENUE</strong> – Tổng quan mặt bằng quy hoạch thương mại dài hạn. (Click để phóng to toàn màn hình)
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TƯ DUY QUY HOẠCH ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Tư Duy Quy Hoạch Thương Mại Hiện Đại
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Một mặt bằng thương mại hiệu quả cần phục vụ đồng thời ba mục tiêu: dễ tiếp cận, dễ nhận diện và dễ vận hành. <strong className="text-[#894d20]">STAR AVENUE</strong> được định hướng theo logic này khi chú trọng tính mở của không gian, khả năng kết nối giữa các khu chức năng và sự thuận tiện trong luồng di chuyển của khách hàng.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Với các mô hình kinh doanh như bán lẻ, F&amp;B, café, showroom, dịch vụ tiện ích hay văn phòng thương mại, vị trí sản phẩm trong tổng thể mặt bằng ảnh hưởng trực tiếp đến khả năng tiếp cận dòng khách. Vì vậy, quy hoạch của <strong className="text-[#894d20]">STAR AVENUE</strong> không chỉ hướng đến hình thức hiện đại, mà còn tạo điều kiện cho hoạt động kinh doanh diễn ra linh hoạt, có tính nhận diện và phù hợp với nhu cầu vận hành dài hạn.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== HỆ SẢN PHẨM 251 CĂN ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Hệ sản phẩm nhà phố thương mại 251 căn
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Hệ sản phẩm tại <strong className="text-[#894d20]">STAR AVENUE</strong> gồm <strong className="text-[#894d20]">251 căn nhà phố thương mại 5 tầng</strong>, được phát triển như những không gian kinh doanh có khả năng khai thác thực tế. Điểm nổi bật của sản phẩm là mặt tiền rộng <strong className="text-[#894d20]">9m</strong>, tạo lợi thế lớn cho nhận diện thương hiệu, trưng bày sản phẩm, bố trí mặt bằng kinh doanh và nâng cao trải nghiệm tiếp cận của khách hàng.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Đặc biệt, <strong className="text-[#894d20]">100% sản phẩm sở hữu từ 2–3 mặt thoáng</strong>, giúp tăng khả năng đón sáng, thông gió, mở rộng tầm nhìn và gia tăng điểm tiếp xúc thương mại. Đây là lợi thế phù hợp với nhiều mô hình như bán lẻ, F&amp;B, café, showroom, spa, văn phòng thương mại, dịch vụ tiện ích, cửa hàng thương hiệu hoặc cho thuê dài hạn. Với công năng mở, mỗi sản phẩm không chỉ là mặt bằng kinh doanh, mà còn là tài sản thương mại có khả năng vận hành linh hoạt theo nhu cầu thị trường.
              </p>
            </AnimatedSection>
          </div>

          {/* Key highlights grid */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Maximize2 className="w-6 h-6" />,
                  num: "9m",
                  label: "Mặt tiền rộng",
                  desc: "Lợi thế nhận diện thương hiệu và trưng bày sản phẩm vượt trội",
                },
                {
                  icon: <Building2 className="w-6 h-6" />,
                  num: "251",
                  label: "Căn shophouse",
                  desc: "Số lượng giới hạn, định vị cao cấp cho giới tinh hoa",
                },
                {
                  icon: <LayoutGrid className="w-6 h-6" />,
                  num: "2-3",
                  label: "Mặt thoáng",
                  desc: "100% sản phẩm đón sáng, thông gió, tăng điểm tiếp xúc thương mại",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                      <span className="text-[#894d20] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-crimson text-3xl font-bold text-[#894d20] leading-none">{item.num}</p>
                      <p className="font-exo text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">{item.label}</p>
                    </div>
                  </div>
                  <p className="font-exo text-sm text-gray-600 leading-relaxed text-justify">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Ảnh 3 */}
          <AnimatedSection animation="fadeUp" delay={0.25}>
            <div
              className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md max-w-7xl mx-auto "
            >
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/sanpham/3.png"
                  alt="Hệ sản phẩm nhà phố thương mại 251 căn"
                  fill
                  className="object-cover select-none pointer-events-none"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              251 căn nhà phố thương mại 5 tầng, mặt tiền 9m – sở hữu từ 2–3 mặt thoáng.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GIAO THÔNG NỘI KHU ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block uppercase">
                Giao thông nội khu và luồng di chuyển
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Trong bất động sản thương mại, giao thông nội khu không chỉ phục vụ việc di chuyển, mà còn góp phần tạo dòng khách và giá trị khai thác. Hệ thống đường nội khu tại <strong className="text-[#894d20]">STAR AVENUE</strong> được định hướng để kết nối các khu chức năng, tăng khả năng tiếp cận từng sản phẩm và hỗ trợ hoạt động vận hành của chủ kinh doanh.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Luồng di chuyển thuận tiện giúp khách hàng dễ dàng tiếp cận trung tâm thương mại, nhà phố thương mại, khu cảnh quan và các không gian tiện ích. Với cư dân, khách tham quan, nhà đầu tư và thương hiệu bán lẻ, sự rõ ràng trong tổ chức giao thông giúp nâng cao trải nghiệm, giảm rào cản tiếp cận và tạo nền tảng tốt hơn cho các hoạt động mua sắm, dịch vụ, giải trí và kinh doanh.
              </p>
            </AnimatedSection>
          </div>

          {/* Ảnh 4 */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div
              className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white shadow-md max-w-7xl mx-auto"

            >
              <div className="relative aspect-[1.6] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/anh4.jpg"
                  alt="Giao thông nội khu STAR AVENUE"
                  fill
                  className="object-cover select-none pointer-events-none"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Hệ thống giao thông nội khu kết nối đồng bộ các khu chức năng.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CẢNH QUAN VÀ KHÔNG GIAN MỞ ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block uppercase">
                Cảnh quan và không gian mở
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Cảnh quan trong tổng thể mặt bằng <strong className="text-[#894d20]">STAR AVENUE</strong> không chỉ tạo điểm nhấn thẩm mỹ, mà còn góp phần nâng tầm trải nghiệm sống và hỗ trợ trực tiếp cho hoạt động thương mại. Với mật độ xây dựng chỉ <strong className="text-[#894d20]">18,83%</strong>, dự án sở hữu lợi thế lớn về không gian mở, tạo điều kiện phát triển hệ thống cây xanh, quảng trường, đường dạo bộ, điểm dừng chân và khu sinh hoạt cộng đồng.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Tỷ lệ xây dựng thấp giúp <strong className="text-[#894d20]">STAR AVENUE</strong> hình thành một tổng thể thông thoáng, có nhiều khoảng thở, hạn chế cảm giác dày đặc công trình. Các mảng xanh và không gian cảnh quan được bố trí xen kẽ giữa các khu chức năng, giúp dòng di chuyển của cư dân, khách hàng và du khách trở nên mềm mại, tự nhiên hơn.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Đối với một tổ hợp thương mại – dịch vụ, thời gian lưu trú của khách hàng là yếu tố quan trọng. Khi khách hàng có nơi dừng lại, gặp gỡ, thư giãn và trải nghiệm, các hoạt động kinh doanh xung quanh sẽ có thêm điều kiện phát triển. Sự kết hợp giữa mật độ xây dựng thấp, không gian xanh, cảnh quan mở và tiện ích cộng đồng góp phần tạo nên sức sống riêng cho <strong className="text-[#894d20]">STAR AVENUE</strong>, đồng thời gia tăng giá trị khai thác bền vững cho toàn khu.
              </p>
            </AnimatedSection>
          </div>

          {/* Ảnh 5 */}
          <AnimatedSection animation="fadeUp" delay={0.25}>
            <div
              className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md max-w-7xl mx-auto"
            >
              <div className="relative aspect-[1.6] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/anh5.jpeg"
                  alt="Cảnh quan không gian mở STAR AVENUE"
                  fill
                  className="object-cover select-none pointer-events-none"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Cảnh quan xanh – không gian mở – trải nghiệm thương mại hoàn chỉnh.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GIÁ TRỊ MẶT BẰNG ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Giá trị mặt bằng đối với đầu tư và khai thác thương mại
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Giá trị mặt bằng <strong className="text-[#894d20]">STAR AVENUE</strong> được tạo nên từ sự kết hợp của nhiều yếu tố: vị trí trong tổng thể dự án, khả năng tiếp cận dòng khách, mặt tiền thương mại rộng, sản phẩm 2–3 mặt thoáng, công năng linh hoạt và hệ sinh thái thương mại – dịch vụ – cảnh quan.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Với mặt tiền 9m, sản phẩm có lợi thế về khả năng nhận diện và trưng bày. Với 2–3 mặt thoáng, không gian vận hành có thêm sự linh hoạt về ánh sáng, thông gió, lối tiếp cận và điểm nhìn thương mại. Khi đặt trong tổng thể dự án có trung tâm thương mại – dịch vụ, cảnh quan và giao thông nội khu, hệ sản phẩm <strong className="text-[#894d20]">STAR AVENUE</strong> có nền tảng để phục vụ nhiều mô hình kinh doanh khác nhau, đồng thời mở ra tiềm năng khai thác cho thuê và tích lũy giá trị dài hạn.
              </p>
            </AnimatedSection>
          </div>

          {/* Value cards stack */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Car className="w-6 h-6" />,
                  title: "Giao thông thuận tiện",
                  desc: "Hệ thống đường nội khu kết nối đồng bộ, tăng khả năng tiếp cận dòng khách tự nhiên.",
                },
                {
                  icon: <Trees className="w-6 h-6" />,
                  title: "Hệ sinh thái cảnh quan",
                  desc: "Cây xanh, quảng trường, đường dạo bộ gia tăng thời gian lưu trú và trải nghiệm khách hàng.",
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Tiềm năng tích lũy giá trị",
                  desc: "Nền tảng cho thuê bền vững và gia tăng giá trị tài sản theo thời gian vận hành đồng bộ.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                      <span className="text-[#894d20] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="font-crimson text-lg font-bold text-[#703a17]">{item.title}</h3>
                  </div>
                  <p className="font-exo text-sm text-gray-700 leading-relaxed font-medium text-justify">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== KẾT LUẬN ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8 text-left">
          <AnimatedSection animation="fadeUp">
            <p className="font-exo text-base md:text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mx-auto font-medium">
              Mặt bằng <strong className="text-[#894d20]">STAR AVENUE</strong> được quy hoạch không chỉ để tạo nên một không gian thương mại hiện đại, mà còn để hỗ trợ hoạt động kinh doanh, gia tăng trải nghiệm khách hàng và mở rộng giá trị khai thác dài hạn. Sự kết hợp giữa <strong className="text-[#894d20]">251 căn nhà phố thương mại</strong>, mặt tiền <strong className="text-[#894d20]">9m</strong>, <strong className="text-[#894d20]">2–3 mặt thoáng</strong>, giao thông nội khu, cảnh quan và tiện ích đồng bộ giúp dự án hình thành nền tảng vận hành phù hợp với nhà đầu tư, chủ kinh doanh và các thương hiệu đang tìm kiếm không gian hiện diện bền vững.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

      {/* ===== LIGHTBOX MODAL ===== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90 flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all text-sm font-semibold flex items-center gap-1.5 hover:scale-105 active:scale-95 shadow-lg border border-white/10"
          >
            <X className="w-4 h-4" />
            <span>Đóng (ESC)</span>
          </button>

          {/* Image wrapper */}
          <div className="relative max-w-full max-h-full overflow-auto flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxImg}
              alt="STAR AVENUE - Phóng to mặt bằng"
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 hover:scale-[1.02] border border-white/5 bg-neutral-900"
            />
          </div>
        </div>
      )}
    </div>
  );
}
