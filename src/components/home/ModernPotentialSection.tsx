"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function ModernPotentialSection() {
  const productImages = [
    {
      src: "/images/sptrangchu/1.jpg",
      alt: "Phối cảnh mặt tiền nhà phố thương mại STAR AVENUE rộng 9m",
      label: "Thiết kế mặt tiền rộng 9m mang dấu ấn độc bản"
    },
    {
      src: "/images/sptrangchu/2.jpg",
      alt: "Không gian kinh doanh thương mại hiện đại",
      label: "Không gian thương mại cao cấp, tối ưu công năng vận hành"
    },
    {
      src: "/images/sptrangchu/3.jpg",
      alt: "Thiết kế 2-3 mặt thoáng của sản phẩm STAR AVENUE",
      label: "100% sản phẩm sở hữu 2-3 mặt thoáng đón sáng tự nhiên"
    },
    {
      src: "/images/sptrangchu/4.jpg",
      alt: "Mặt bằng tối ưu hóa công năng shophouse",
      label: "Mặt bằng tối ưu hóa công năng sống và kinh doanh"
    },
    {
      src: "/images/sptrangchu/5.jpg",
      alt: "Không gian thương mại sầm uất tại STAR AVENUE",
      label: "Điểm đến giao thương sầm uất, hội tụ nhịp sống mua sắm"
    },
    {
      src: "/images/sptrangchu/6.jpg",
      alt: "Kiến trúc sang trọng của nhà phố thương mại",
      label: "Kiến trúc hiện đại nâng tầm nhận diện thương hiệu kinh doanh"
    },
  ];

  return (
    <section
      id="potential"
      className="py-16 md:py-20 bg-[#FCFCFB] overflow-hidden relative border-b border-accent-gold/10"
    >
      {/* Decorative luxury background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ffeabf]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#a56428]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-10 md:mb-14 max-w-7xl mx-auto">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent">
              SẢN PHẨM
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>

            <p className="font-crimson text-xl md:text-2xl italic text-[#894d20] font-semibold leading-normal mb-6 text-center">
              251 căn nhà phố thương mại – tài sản khai thác trong tâm điểm giao thương
            </p>

            <div className="font-exo text-[16px] md:text-lg leading-relaxed text-gray-700 font-medium text-left max-w-7xl mx-auto mt-4">
              <p>
                <strong className="text-[#894d20]">STAR AVENUE</strong> quy tụ 251 căn nhà phố thương mại 5 tầng, được quy hoạch đồng bộ trong tổng thể thương mại – dịch vụ hiện đại. Sở hữu lợi thế độc bản với sản phẩm có mặt tiền rộng 9m, từ 2–3 mặt thoáng cùng thiết kế linh hoạt, phù hợp đa dạng mô hình kinh doanh, khai thác cho thuê và vận hành thương mại. Đây là tài sản giàu giá trị sử dụng, tạo lợi thế nhận diện nổi bật và mở ra tiềm năng gia tăng giá trị bền vững theo thời gian.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Product Images 2-Column Grid */}
        <AnimatedSection animation="fadeUp" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-12">
            {productImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-md group-hover:shadow-lg transition-all duration-500">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
