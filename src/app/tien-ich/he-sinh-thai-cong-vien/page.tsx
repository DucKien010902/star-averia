"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Dumbbell, Heart, Leaf, Sparkles, Sun, TrendingUp, Users, Waves, Trophy, Compass, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeSinhThaiCongVienPage() {
  const valuePillars = [
    {
      icon: Leaf,
      title: "Vi Khí Hậu",
      desc: "Hệ thống cây xanh và mặt nước rộng lớn giúp điều hòa nhiệt độ tự nhiên, lọc sạch khói bụi và kiến tạo bầu không khí tinh khiết cho toàn khu đô thị.",
    },
    {
      icon: Sun,
      title: "Sức Khỏe",
      desc: "Không gian thiền, yoga, sân cầu lông và khu thể thao ngoài trời khuyến khích lối sống lành mạnh, tràn đầy sinh khí và tái tạo năng lượng mỗi ngày.",
    },
    {
      icon: Users,
      title: "Cộng Đồng",
      desc: "Quảng trường Avenue, khu đánh cờ và các chòi nghỉ thiết lập không gian giao lưu gắn kết, chia sẻ văn minh giữa các thế hệ cư dân.",
    },
    {
      icon: TrendingUp,
      title: "Bất Động Sản",
      desc: "Hệ cảnh quan sinh thái độc bản là đòn bẩy vững chắc thúc đẩy tính thanh khoản, nâng tầm giá trị thương mại và tiềm năng tăng giá bền vững.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ===== HEADER SECTION ===== */}
      <section className="pt-32 pb-10 bg-[#FAF9F5] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-neutral-850" />
          <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-neutral-850" />
        </div>

        <div className="w-[90%] max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <AnimatedSection animation="fadeUp" delay={0.05}>
            <div className="space-y-4">
              <h1 className="font-crimson text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight uppercase">
                Hệ Sinh Thái Công Viên STAR AVENUE
              </h1>
              <p className="font-crimson text-xl md:text-2xl italic text-[#894d20] font-medium max-w-4xl mx-auto leading-normal">
                Không Gian Xanh Đa Trải Nghiệm Giữa Tâm Điểm Sống Và Giao Thương
              </p>
              <div className="flex items-center justify-center gap-3 py-2">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
                <div className="w-2 h-2 rounded-full bg-[#a56428]" />
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
              </div>
            </div>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto space-y-4 font-exo text-base md:text-lg text-neutral-gray-700 leading-relaxed font-medium text-justify md:text-left">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p>
                Tại <strong className="text-[#894d20]">STAR AVENUE</strong>, hệ sinh thái công viên không chỉ là những mảng xanh làm đẹp tổng thể dự án, mà còn là yếu tố quan trọng kiến tạo phong cách sống, nâng cao trải nghiệm cư dân và gia tăng giá trị thương mại cho toàn khu.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p>
                Với mật độ xây dựng thấp, chỉ khoảng <strong className="text-[#894d20]">18,83%</strong>, STAR AVENUE dành phần lớn diện tích cho cảnh quan, đường dạo bộ, quảng trường, khu vui chơi, khu thể thao và các không gian xanh mở. Đây là lợi thế giúp dự án tạo nên môi trường sống thoáng đãng, cân bằng và giàu trải nghiệm hơn.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== OVERALL LAYOUT IMAGES ===== */}
      <section className="pb-12 bg-white">
        <div className="w-[90%] max-w-7xl mx-auto space-y-12">
          {/* Sơ đồ 1 */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/hesinhthaicv/goc-ben-2.jpeg"
                  alt="Tổng thể phân khu hệ sinh thái công viên STAR AVENUE"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Sơ đồ phân khu chi tiết hệ sinh thái công viên nội khu <strong className="text-[#894d20]">STAR AVENUE</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TƯ DUY QUY HOẠCH ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Quy hoạch công viên như một hệ sinh thái sống toàn diện
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <div className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify space-y-4">
              <AnimatedSection animation="fadeUp" delay={0.1}>
                <p>
                  Hệ sinh thái công viên tại <strong className="text-[#894d20]">STAR AVENUE</strong> được phát triển theo hướng đa chức năng, phục vụ nhiều nhu cầu khác nhau của cư dân và khách hàng. Mỗi không gian được kết nối hài hòa, tạo thành chuỗi trải nghiệm từ thư giãn, vận động, vui chơi, giao lưu đến kết nối cộng đồng.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={0.15}>
                <p>
                  Buổi sáng, cư dân có thể đi bộ, tập yoga hoặc vận động ngoài trời. Buổi chiều, các gia đình có thể đưa trẻ nhỏ đến khu vui chơi, dừng chân tại chòi nghỉ hoặc thư giãn giữa vườn hoa. Khi đêm xuống, quảng trường, đài phun nước ánh sáng và các không gian mở trở thành điểm hẹn thư giãn, gặp gỡ và tận hưởng nhịp sống nội khu sôi động.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHI TIẾT TIỆN ÍCH CẢNH QUAN ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-12">

          {/* 1. Quảng trường Avenue */}
          <div className="grid md:grid-cols-12 gap-8 items-center border-b border-[#a56428]/10 pb-10">
            <div className="md:col-span-7 space-y-4 order-2 md:order-1">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-[#894d20]" />
                </span>
                <h3 className="font-crimson text-xl font-bold text-[#703a17]">
                  Quảng trường Avenue – tâm điểm kết nối cộng đồng
                </h3>
              </div>
              <div className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify space-y-3">
                <p>
                  Quảng trường Avenue là không gian trung tâm của hệ sinh thái công viên, đóng vai trò như điểm gặp gỡ, giao lưu và tổ chức các hoạt động cộng đồng. Với thiết kế mở, thoáng và dễ tiếp cận, quảng trường phù hợp cho các sự kiện ngoài trời, hoạt động check-in, nghỉ chân và trải nghiệm dự án.
                </p>
                <p>
                  Đối với một tổ hợp thương mại – dịch vụ như <strong className="text-[#894d20]">STAR AVENUE</strong>, quảng trường còn hỗ trợ gia tăng sức sống thương mại. Khi khách hàng có nơi dừng lại, gặp gỡ và lưu trú lâu hơn, các tuyến shophouse, trung tâm thương mại và dịch vụ xung quanh sẽ có thêm điều kiện phát triển mạnh mẽ.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10">
                <Image
                  src="/images/hesinhthaicv/quang-truong.jpeg"
                  alt="Quảng trường Avenue"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 2. Đài phun nước ánh sáng */}
          <div className="grid md:grid-cols-12 gap-8 items-center border-b border-[#a56428]/10 pb-10">
            <div className="md:col-span-5">
              <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10">
                <Image
                  src="/images/hesinhthaicv/dai-phun-nuoc.jpeg"
                  alt="Đài phun nước ánh sáng"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                  <Waves className="w-4 h-4 text-[#894d20]" />
                </span>
                <h3 className="font-crimson text-xl font-bold text-[#703a17]">
                  Đài phun nước ánh sáng – điểm nhấn cảnh quan giàu cảm xúc
                </h3>
              </div>
              <div className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify">
                <p>
                  Đài phun nước ánh sáng được quy hoạch như một điểm nhấn nổi bật trong không gian công viên. Ban ngày, mặt nước mang lại cảm giác mát lành, thư thái. Ban đêm, hiệu ứng ánh sáng kết hợp cùng chuyển động nhịp nhàng của nước tạo nên không gian lung linh, giàu cảm xúc và hứa hẹn trở thành điểm check-in đặc trưng đầy kiêu hãnh của <strong className="text-[#894d20]">STAR AVENUE</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Vườn hoa bốn mùa */}
          <div className="grid md:grid-cols-12 gap-8 items-center border-b border-[#a56428]/10 pb-10">
            <div className="md:col-span-7 space-y-4 order-2 md:order-1">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#894d20]" />
                </span>
                <h3 className="font-crimson text-xl font-bold text-[#703a17]">
                  Vườn hoa bốn mùa – sắc màu sống động quanh năm
                </h3>
              </div>
              <div className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify space-y-3">
                <p>
                  Vườn hoa bốn mùa mang đến không gian cảnh quan rực rỡ, mềm mại và gần gũi với thiên nhiên. Những thảm hoa nhiều màu sắc, kết hợp cùng đường dạo bộ xanh và điểm nghỉ chân tĩnh tại, tạo nên nơi thư giãn lý tưởng cho cư dân, các gia đình và khách tham quan.
                </p>
                <p>
                  Không gian này không chỉ làm đẹp tổng thể dự án, mà còn góp phần tạo nên hình ảnh một khu phố thương mại giàu cảm xúc, nơi con người có thể sống chậm lại để lắng nghe hơi thở thiên nhiên giữa nhịp giao thương năng động.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10">
                <Image
                  src="/images/hesinhthaicv/vuon-hoa-4-mua.jpeg"
                  alt="Vườn hoa bốn mùa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4. Công viên hoa cẩm tú cầu */}
          <div className="grid md:grid-cols-12 gap-8 items-center border-b border-[#a56428]/10 pb-10">
            <div className="md:col-span-5">
              <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10">
                <Image
                  src="/images/hesinhthaicv/vuon-hoa-cam-tu-cau.jpeg"
                  alt="Công viên cẩm tú cầu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                  <Compass className="w-4 h-4 text-[#894d20]" />
                </span>
                <h3 className="font-crimson text-xl font-bold text-[#703a17]">
                  Công viên hoa cẩm tú cầu – điểm nhấn thi vị trong lòng dự án
                </h3>
              </div>
              <div className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify space-y-3">
                <p>
                  Công viên hoa cẩm tú cầu là điểm nhấn cảnh quan giàu tính nhận diện đặc quyền của <strong className="text-[#894d20]">STAR AVENUE</strong>. Với vẻ đẹp mềm mại, thanh lịch và quý phái, khu vực này phù hợp để phát triển thành vườn dạo bộ, điểm check-in ấn tượng và không gian thư giãn mang đậm tính nghệ thuật.
                </p>
                <p>
                  Những lối đi uốn lượn giữa thảm hoa xanh mướt, kết hợp cùng ghế nghỉ gỗ và tiểu cảnh xanh mát, mang đến cảm giác nhẹ nhàng, riêng tư cho cư dân cũng như khách ghé thăm.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Chòi nghỉ thư giãn */}
          <div className="grid md:grid-cols-12 gap-8 items-center border-b border-[#a56428]/10 pb-10">
            <div className="md:col-span-7 space-y-4 order-2 md:order-1">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-[#894d20]" />
                </span>
                <h3 className="font-crimson text-xl font-bold text-[#703a17]">
                  Chòi nghỉ thư giãn – khoảng dừng bình yên giữa không gian xanh
                </h3>
              </div>
              <div className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify space-y-3">
                <p>
                  Các chòi nghỉ trong công viên <strong className="text-[#894d20]">STAR AVENUE</strong> được bố trí khéo léo như những điểm dừng chân giữa lòng thiên nhiên. Đây là nơi cư dân có thể nghỉ ngơi, đọc sách, trò chuyện hoặc tận hưởng bầu không khí mát mẻ, trong lành sau những giờ phút bận rộn.
                </p>
                <p>
                  Sự kết hợp tinh tế giữa chòi nghỉ, bóng mát cây xanh, lối đi rải sỏi và vườn hoa giúp công viên không chỉ đẹp để thưởng lãm, mà còn đóng vai trò thực sự hữu ích và tiện nghi trong đời sống hằng ngày của cư dân.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10">
                <Image
                  src="/images/hesinhthaicv/choi-nghi-2.jpeg"
                  alt="Chòi nghỉ thư giãn"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 6. Thiền & Yoga + Thể thao ngoài trời (Text row followed by Image row) */}
          <div className="flex flex-col gap-8 border-b border-[#a56428]/10 pb-10">
            {/* Text Row */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-[#894d20]" />
                  </span>
                  <h4 className="font-crimson text-lg font-bold text-[#703a17]">
                    Không gian thiền và yoga – tái tạo năng lượng mỗi ngày
                  </h4>
                </div>
                <p className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify">
                  Khu thiền và yoga ngoài trời được quy hoạch trong không gian xanh yên tĩnh, tách biệt khỏi các hoạt động ồn ào, phù hợp cho các buổi tập luyện, hít thở và tái tạo năng lượng tinh thần mỗi ngày. Đây chính là nét vẽ biểu thị triết lý sống cân bằng, chăm sóc sức khỏe tinh thần trọn vẹn tại <strong className="text-[#894d20]">STAR AVENUE</strong>.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <Dumbbell className="w-4 h-4 text-[#894d20]" />
                  </span>
                  <h4 className="font-crimson text-lg font-bold text-[#703a17]">
                    Khu thể thao ngoài trời – khuyến khích lối sống năng động
                  </h4>
                </div>
                <p className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify">
                  Hệ thống máy tập thể thao đa năng ngoài trời được phân bổ dọc lối dạo bộ, giúp cư dân mọi lứa tuổi dễ dàng rèn luyện sức khỏe, duy trì thói quen vận động năng động ngay trong khuôn viên xanh mát của khu đô thị.
                </p>
              </div>
            </div>

            {/* Image Row */}
            <div className="relative aspect-[1.6] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10 bg-white p-1">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/hesinhthaicv/khu-vuon-hoa-yoga.jpeg"
                  alt="Không gian thiền và yoga ngoài trời"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 7. Vui chơi trẻ em + Cầu lông + Đánh cờ (Text row followed by Image row) */}
          <div className="flex flex-col gap-8 border-b border-[#a56428]/10 pb-10">
            {/* Text Row */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-[#894d20]" />
                  </span>
                  <h4 className="font-crimson text-lg font-bold text-[#703a17]">
                    Khu vui chơi trẻ em ngoài trời – tương lai ngập tràn nụ cười
                  </h4>
                </div>
                <p className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify">
                  Thiết kế sinh động, rực rỡ và cực kỳ an toàn, sân chơi trẻ em mang lại không gian vận động, kết bạn và khám phá thế giới tự nhiên tuyệt vời cho các cư dân nhí. Đây là tiện ích thực tế, giúp cha mẹ gắn kết chặt chẽ hơn với con trẻ trong sinh hoạt hằng ngày.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-[#894d20]" />
                  </span>
                  <h4 className="font-crimson text-lg font-bold text-[#703a17]">
                    Sân cầu lông ngoài trời – kết nối thể thao cộng đồng
                  </h4>
                </div>
                <p className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify">
                  Không gian giao lưu thể thao sôi động, dễ tiếp cận, nâng cao tinh thần rèn luyện thể chất lành mạnh và thắt chặt tình làng nghĩa xóm văn minh trong cộng đồng <strong className="text-[#894d20]">STAR AVENUE</strong>.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#894d20]" />
                  </span>
                  <h4 className="font-crimson text-lg font-bold text-[#703a17]">
                    Khu đánh cờ – không gian giao lưu thư thái cho người lớn tuổi
                  </h4>
                </div>
                <p className="font-exo text-sm md:text-base text-gray-700 leading-relaxed font-medium text-justify">
                  Một điểm hẹn sinh hoạt nhẹ nhàng, yên tĩnh dành riêng cho những cư dân lớn tuổi để giao lưu, trò chuyện và rèn luyện trí lực thư thái giữa bầu không khí trong lành của công viên đa thế hệ.
                </p>
              </div>
            </div>

            {/* Image Row (3-column grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10 bg-white p-1">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/hesinhthaicv/cong-vien.jpeg"
                    alt="Khu vui chơi trẻ em"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10 bg-white p-1">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/hesinhthaicv/cau-long.jpeg"
                    alt="Sân thể thao cầu lông"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-md border border-[#a56428]/10 bg-white p-1">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/hesinhthaicv/danh-co.jpeg"
                    alt="Khu đánh cờ"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GIÁ TRỊ CỘNG HƯỞNG & ĐỊNH HÌNH GIÁ TRỊ BỀN VỮNG ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="font-crimson text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block uppercase">
              Giá trị cộng hưởng giữa công viên, thương mại và bất động sản
            </h2>
            <div className="w-16 h-[2px] bg-accent-gold mx-auto my-2" />
          </div>

          <div className="font-exo text-base text-gray-700 leading-[1.85] text-justify space-y-4">
            <p>
              Điểm nổi bật của hệ sinh thái công viên <strong className="text-[#894d20]">STAR AVENUE</strong> nằm ở khả năng cộng hưởng với tổng thể dự án. Không gian xanh giúp tăng thời gian lưu trú. Quảng trường tạo điểm tụ họp đông đúc. Vườn hoa và đài phun nước tạo điểm check-in hấp dẫn. Các khu vui chơi, thể thao và chòi nghỉ giúp cư dân sử dụng tiện ích thường xuyên và ổn định hơn.
            </p>
            <p>
              Tất cả tạo nên dòng chuyển động sinh khí tự nhiên trong toàn khu, giúp <strong className="text-[#894d20]">STAR AVENUE</strong> không chỉ dừng lại là một nơi để ở mà thực sự là một tổ hợp có tiềm năng khai thác kinh tế, thương mại vượt bậc và bền vững theo thời gian.
            </p>
            <p>
              Đối với nhà đầu tư, hệ sinh thái công viên là lợi thế quan trọng giúp nâng cao sức hút sản phẩm shophouse, gia tăng khả năng thanh khoản, bảo chứng giá trị tài sản và tạo tiềm năng bứt phá lợi nhuận lâu dài.
            </p>
          </div>

          {/* Pillars Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {valuePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-[#a56428]/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#a56428]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#894d20] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-crimson text-lg font-bold text-[#703a17]">{pillar.title}</h3>
                    </div>
                    <p className="font-exo text-sm text-gray-600 leading-relaxed text-justify">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== KẾT LUẬN ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="font-crimson text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight text-center uppercase">
              STAR AVENUE – Nơi không gian xanh nâng tầm giá trị sống
            </h2>
            <div className="w-16 h-[2px] bg-accent-gold mx-auto" />
          </div>

          <div className="font-exo text-base md:text-lg text-gray-700 leading-[1.85] text-justify space-y-4">
            <p>
              Hệ sinh thái công viên tại <strong className="text-[#894d20]">STAR AVENUE</strong> là sự kết hợp hài hòa giữa cảnh quan nghệ thuật, tiện ích sức khỏe, không gian giải trí và nhịp kết nối cộng đồng. Từ quảng trường Avenue rộng thoáng, đài phun nước ánh sáng lung linh, vườn hoa bốn mùa rực rỡ, công viên hoa cẩm tú cầu thi vị đến khu yoga thanh tịnh, các khu tập thể thao ngoài trời năng động, sân cầu lông, khu vui chơi trẻ em nhộn nhịp hay khu đánh cờ tĩnh lặng – mỗi một mảnh ghép đều được thiết kế tỉ mỉ để phục vụ trọn vẹn từng thế hệ cư dân.
            </p>
            <p>
              Không chỉ tạo nên diện mạo sinh thái xanh mướt cho dự án, hệ sinh thái công viên còn giúp định hình một phong cách sống cân bằng, văn minh và gắn kết sâu sắc. Tại <strong className="text-[#894d20]">STAR AVENUE</strong>, công viên không chỉ là khoảng xanh thụ động giữa những bức tường bê tông, mà là nơi cuộc sống được làm mềm lại, thương mại có thêm động lực thu hút và giá trị bất động sản được bồi đắp gia tăng vững bền theo thời gian.
            </p>
          </div>

          <blockquote className="border-l-4 border-[#a56428] pl-6 py-2 bg-[#FAF9F5] rounded-r-xl">
            <p className="font-exo text-base md:text-lg text-black leading-relaxed italic font-semibold">
              Đây chính là bảo chứng chất sống và là thỏi nam châm thu hút thịnh vượng bền lâu tại STAR AVENUE – tinh phẩm shophouse Thái Bình.
            </p>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
}
