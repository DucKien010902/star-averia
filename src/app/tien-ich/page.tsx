"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Building2, Coffee, Heart, Sparkles, Star, TrendingUp, Users, Landmark, Compass, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TienIchPage() {
  const valuePillars = [
    {
      icon: Building2,
      title: "All-In-One",
      desc: "Mọi nhu cầu sống được đáp ứng trọn vẹn ngay trong nội khu – từ ẩm thực, mua sắm đến vui chơi giải trí.",
    },
    {
      icon: Users,
      title: "Cộng Đồng",
      desc: "Tiện ích thương mại kéo cư dân ra ngoài giao lưu, hình thành đời sống cộng đồng gắn kết và văn minh.",
    },
    {
      icon: Star,
      title: "Chất Lượng Sống",
      desc: "Hệ tiện ích đồng bộ nâng tầm trải nghiệm sống, định vị cộng đồng cư dân tinh hoa và phong lưu.",
    },
    {
      icon: Sparkles,
      title: "Thanh Khoản",
      desc: "Bất động sản sở hữu hệ tiện ích nội khu đồng bộ luôn sở hữu tính thanh khoản vượt trội và giữ giá bền vững.",
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
                Tiện ích nội khu STAR AVENUE
              </h1>
              <p className="font-crimson text-xl md:text-2xl italic text-[#894d20] font-medium max-w-4xl mx-auto leading-normal">
                Định Chuẩn Sống – Kinh Doanh – Trải Nghiệm Trong Cùng Một Điểm Đến
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
                <strong className="text-[#894d20]">STAR AVENUE</strong> được phát triển theo mô hình tiện ích All-in-One, nơi mọi nhu cầu về mua sắm, ẩm thực, giải trí, giáo dục, chăm sóc sức khỏe, làm đẹp, làm việc và kết nối cộng đồng được tích hợp trong cùng một tổng thể hiện đại.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p>
                Trọng tâm của hệ tiện ích là trung tâm thương mại 5 tầng, đóng vai trò hạt nhân trải nghiệm, kết nối trực tiếp với nhà phố thương mại, cảnh quan nội khu và không gian mở. Không chỉ phục vụ nhu cầu sinh hoạt hằng ngày, hệ tiện ích STAR AVENUE còn góp phần hình thành dòng khách thường xuyên, kéo dài thời gian lưu trú và gia tăng sức sống thương mại cho toàn khu. Từ đó, dự án không đơn thuần là nơi để mua sắm, mà trở thành một điểm đến đa trải nghiệm, nơi khởi nguồn cuộc sống thịnh vượng.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== IMAGES BLOCK 1 ===== */}
      <section className="pb-12 bg-white">
        <div className="w-[90%] max-w-7xl mx-auto">
          {/* Ảnh 1 */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/tienichnoikhu/anh-1.jpg"
                  alt="Tổng thể tiện ích nội khu thương mại dịch vụ STAR AVENUE"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-101"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Không gian sống và thương mại All-in-One đẳng cấp tại <strong className="text-[#894d20]">STAR AVENUE</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TIỆN ÍCH ALL-IN-ONE ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Tiện ích All-in-One trong lòng STAR AVENUE
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <div className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify space-y-4">
              <AnimatedSection animation="fadeUp" delay={0.1}>
                <p>
                  Mô hình All-in-One tại <strong className="text-[#894d20]">STAR AVENUE</strong> được định hình trên logic: tiện ích đa dạng – trải nghiệm liền mạch – dòng khách ổn định – thương mại bền vững. Thay vì phát triển các tiện ích rời rạc, dự án tích hợp nhiều nhóm chức năng trong cùng một điểm đến, giúp cư dân, khách hàng và du khách dễ dàng tiếp cận các nhu cầu thiết yếu lẫn trải nghiệm cao cấp.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={0.15}>
                <p>
                  Hệ tiện ích không chỉ tạo sự thuận tiện trong sinh hoạt, mà còn đóng vai trò kích hoạt nhịp vận hành thương mại. Khi khách hàng có nhiều lý do để đến, ở lại, chi tiêu và quay lại, các hoạt động kinh doanh trong trung tâm thương mại và nhà phố thương mại xung quanh sẽ có thêm điều kiện phát triển bền vững theo thời gian.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Ảnh 2 */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/tienichnoikhu/anh-2.png"
                  alt="Bể bơi ngoài trời phong cách resort"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-101"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Hệ tiện ích nghỉ dưỡng mở ra đặc quyền trải nghiệm phong cách resort thời thượng ngay thềm nhà.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TRUNG TÂM THƯƠNG MẠI 5 TẦNG ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Trung tâm thương mại 5 tầng – hạt nhân tiện ích của dự án
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <div className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify space-y-4">
              <AnimatedSection animation="fadeUp" delay={0.1}>
                <p>
                  Trung tâm thương mại 5 tầng tại <strong className="text-[#894d20]">STAR AVENUE</strong> được quy hoạch như lõi tiện ích trung tâm, nơi mỗi tầng đảm nhận một nhóm trải nghiệm riêng biệt. Tầng 1 tập trung vào đón khách và tiện ích thiết yếu; tầng 2 dành cho mua sắm và lifestyle; tầng 3 phục vụ gia đình, trẻ em và ẩm thực; tầng 4 phát triển giải trí, chăm sóc sức khỏe và làm đẹp; tầng 5 mở ra không gian rooftop cao cấp.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={0.15}>
                <p>
                  Cách tổ chức khoa học này giúp hành trình trải nghiệm của khách hàng diễn ra tự nhiên, từ nhu cầu hằng ngày đến các hoạt động giải trí, thư giãn và gặp gỡ. Đồng thời, trung tâm thương mại cũng tạo lực hút cộng hưởng cho các sản phẩm nhà phố thương mại, hỗ trợ thu hút dòng khách, tăng cường nhận diện thương hiệu và mở rộng khả năng khai thác tối đa cho các mô hình kinh doanh xung quanh.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Ảnh 3 */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/tienichnoikhu/anh-3.jpeg"
                  alt="Trung tâm thương mại Star Avenue"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-101"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Phối cảnh trung tâm thương mại 5 tầng - Biểu tượng thương mại phồn hoa của khu vực.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PHÂN TÍCH TIỆN ÍCH 5 TẦNG ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block uppercase">
              Cơ cấu chức năng & Trải nghiệm 5 tầng TTTM
            </h2>
            <div className="w-16 h-[2px] bg-accent-gold mx-auto my-2" />
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Landmark,
                floor: "Tầng 1",
                title: "Đón khách & tiện ích thiết yếu",
                desc: "Tầng 1 là lớp tiếp xúc đầu tiên của khách hàng với STAR AVENUE, tạo ấn tượng mạnh mẽ về quy mô, hình ảnh và nhịp vận hành của toàn khu. Grand Lobby mang đến không gian đón tiếp trang trọng, trong khi Atrium sự kiện có thể tổ chức các hoạt động giới thiệu sản phẩm, trưng bày nghệ thuật, giao lưu và sự kiện cộng đồng quy mô lớn. Bên cạnh đó, hệ tiện ích như siêu thị tổng hợp, cửa hàng tiện ích 24/7, café thương hiệu, ATM, kiosk thanh toán tự động và dịch vụ tài chính sẵn sàng đáp ứng các nhu cầu thiết yếu hằng ngày với tần suất sử dụng cao, từ đó hình thành dòng khách thường xuyên ổn định.",
                image: "/images/tienichnoikhu/tang-1.png",
                amenities: [
                  "Sảnh đón tiếp Grand Lobby",
                  "Quảng trường trong nhà / Atrium sự kiện",
                  "Siêu thị tổng hợp",
                  "Cửa hàng tiện ích 24/7",
                  "Khu café thương hiệu",
                  "ATM / Kiosk thanh toán / Dịch vụ tài chính"
                ]
              },
              {
                icon: Compass,
                floor: "Tầng 2",
                title: "Mua sắm & lifestyle",
                desc: "Tầng 2 được định hướng là không gian mua sắm hiện đại, nơi hội tụ của các thương hiệu thời trang, mỹ phẩm, phụ kiện, trang sức cao cấp, điện máy, công nghệ, nhà sách, văn phòng phẩm và khu mua sắm mẹ & bé chuyên biệt. Nhóm tiện ích này đáp ứng trọn vẹn nhu cầu tiêu dùng, định hình phong cách sống của nhiều nhóm đối tượng. Không gian lifestyle giúp STAR AVENUE mở rộng sức hút mạnh mẽ với khách hàng trẻ, các hộ gia đình, dân văn phòng và cư dân lân cận, thúc đẩy tần suất ghé thăm thường xuyên.",
                image: "/images/tienichnoikhu/tang-2.png",
                amenities: [
                  "Khu shopping thời trang",
                  "Khu mỹ phẩm – phụ kiện – trang sức",
                  "Khu điện máy – công nghệ",
                  "Nhà sách – văn phòng phẩm",
                  "Khu mẹ và bé"
                ]
              },
              {
                icon: Heart,
                floor: "Tầng 3",
                title: "Gia đình & giải trí trẻ em",
                desc: "Không gian dành riêng cho gia đình và thế hệ tương lai với khu vui chơi trẻ em trong nhà quy mô, thế giới game arcade / VR hiện đại, trung tâm giáo dục kỹ năng / học ngoại ngữ đạt chuẩn, kết hợp cùng chuỗi nhà hàng ẩm thực gia đình ấm cúng và Food Court phong phú đa sắc màu Á - Âu. Sự kết hợp giữa vui chơi, giáo dục sớm và ăn uống giúp kéo dài thời gian lưu trú của các gia đình vào dịp cuối tuần hay sau giờ học/làm việc, tạo dòng khách ổn định thúc đẩy các điểm chạm thương mại.",
                image: "/images/tienichnoikhu/tang-3.png",
                amenities: [
                  "Khu vui chơi trẻ em trong nhà",
                  "Khu game arcade / VR",
                  "Trung tâm giáo dục kỹ năng / ngoại ngữ",
                  "Nhà hàng gia đình",
                  "Food Court đa ẩm thực Á – Âu"
                ]
              },
              {
                icon: Trophy,
                floor: "Tầng 4",
                title: "Giải trí & chăm sóc sức khỏe",
                desc: "STAR AVENUE vượt ra khỏi vai trò mua sắm thuần túy, hướng đến việc nâng tầm và chăm sóc phong cách sống khỏe mạnh, cân bằng toàn diện. Tầng 4 quy tụ các tiện ích đỉnh cao như cụm rạp chiếu phim hiện đại bậc nhất, phòng Gym - Yoga cao cấp, khu Spa Wellness - Sauna - Jacuzzi thư giãn sâu, cùng Hair Salon và thẩm mỹ viện chuyên nghiệp. Đây là nhóm tiện ích tạo thói quen sử dụng định kỳ hàng tuần, giúp gắn kết khách hàng bền vững với dự án.",
                image: "/images/tienichnoikhu/tang-4.png",
                amenities: [
                  "Rạp chiếu phim",
                  "Phòng Gym – Yoga cao cấp",
                  "Spa Wellness – Sauna – Jacuzzi",
                  "Hair Salon / Thẩm mỹ viện"
                ]
              },
              {
                icon: Coffee,
                floor: "Tầng 5",
                title: "Rooftop & trải nghiệm cao cấp",
                desc: "Điểm nhấn trải nghiệm đầy nghệ thuật và kiêu hãnh của STAR AVENUE với Café vườn treo xanh mát, VIP Lounge sang trọng, các khu Sky Bar / Rooftop Bar tầm nhìn panorama đắt giá, kết hợp cùng bể bơi vô cực trên tầng thượng lộng gió. Không gian mở ra phong cách sống thời thượng đỉnh cao, lý tưởng cho những buổi gặp gỡ, tiếp đón đối tác hay thư giãn ngắm hoàng hôn, gia tăng tối đa giá trị cảm xúc và khẳng định đẳng cấp của dự án.",
                image: "/images/tienichnoikhu/tang-5.jpg",
                amenities: [
                  "Café vườn treo – VIP Lounge",
                  "Sky Bar / Rooftop Bar – Bể bơi vô cực tầng thượng – Sân khấu nhạc acoustic"
                ]
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md hover:border-[#a56428]/35 transition-all duration-300 grid md:grid-cols-12 gap-8 items-center group">
                  {/* Left Column: Image */}
                  <div className="md:col-span-5 relative aspect-[1.5] w-full rounded-xl overflow-hidden shadow-sm border border-neutral-100 bg-neutral-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>

                  {/* Right Column: Text & List */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[#894d20] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="font-exo text-xs font-bold uppercase tracking-wider text-[#894d20] block mb-0.5">{item.floor}</span>
                        <h3 className="font-crimson text-xl md:text-2xl font-bold text-[#703a17] leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-exo text-sm md:text-base text-gray-700 leading-relaxed text-justify font-medium">
                      {item.desc}
                    </p>

                    <div className="pt-4 border-t border-neutral-100 mt-4">
                      <h4 className="font-exo text-xs font-bold text-[#894d20] uppercase tracking-wider mb-3">
                        Các tiện ích chi tiết:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.amenities.map((amenity, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-sm text-neutral-gray-700 font-exo font-medium leading-tight">
                            <span className="w-5 h-5 rounded-full bg-[#a56428]/10 flex items-center justify-center text-[10px] text-[#894d20] font-bold shrink-0 mt-0.5 border border-[#a56428]/20">
                              {aIdx + 1}
                            </span>
                            <span className="pt-0.5">{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GIÁ TRỊ TIỆN ÍCH CƯ DÂN ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Giá trị tiện ích đối với cư dân và khách hàng khu vực
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <div className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify space-y-4">
              <AnimatedSection animation="fadeUp" delay={0.1}>
                <p>
                  Với cư dân và khách hàng khu vực, hệ tiện ích <strong className="text-[#894d20]">STAR AVENUE</strong> mang lại sự thuận tiện vượt trội trong đời sống hằng ngày. Từ mua sắm, ẩm thực, vui chơi, học tập, làm đẹp, chăm sóc sức khỏe đến giải trí và gặp gỡ, mọi nhu cầu đều được tích hợp đầy đủ ngay trong nội khu đô thị.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={0.15}>
                <p>
                  Điều này giúp cư dân tiết kiệm tối đa thời gian di chuyển, nâng cao chất lượng trải nghiệm sống và hình thành một nhịp sống năng động, văn minh. Khách hàng có thể tìm đến STAR AVENUE không chỉ đơn thuần để mua một sản phẩm cụ thể, mà để tận hưởng một chuỗi trải nghiệm trọn vẹn, cảm xúc trong cùng một hành trình.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Ảnh 4 */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/tienichnoikhu/anh-4.png"
                  alt="Không gian thư giãn tại Star Avenue"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-101"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GIÁ TRỊ TIỆN ÍCH ĐẦU TƯ ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Giá trị tiện ích đối với kinh doanh và đầu tư
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <div className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify space-y-4">
              <AnimatedSection animation="fadeUp" delay={0.1}>
                <p>
                  Đối với các nhà đầu tư, chủ kinh doanh và thương hiệu bán lẻ, F&B, dịch vụ giải trí, hệ tiện ích All-in-One của <strong className="text-[#894d20]">STAR AVENUE</strong> là yếu tố trợ lực cực kỳ đắc lực cho khả năng khai thác thương mại. Khi nhiều nhóm tiện ích cộng hưởng cùng vận hành, dự án sẽ tạo ra dòng khách tự nhiên tuần hoàn liên tục, gia tăng thời gian lưu trú và nhân lên tần suất quay lại của khách hàng.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={0.15}>
                <p>
                  Hệ tiện ích thiết yếu tạo nhu cầu sinh hoạt hằng ngày; nhóm mua sắm & lifestyle thúc đẩy sức mua; nhóm gia đình – ẩm thực kéo dài trải nghiệm thời gian thực; nhóm wellness, giải trí và rooftop nâng cấp tối đa hình ảnh điểm tụ sang trọng. Sự cộng hưởng vượt trội này góp phần thúc đẩy hiệu quả kinh doanh của các shophouse, đồng thời gia cố vững chắc giá trị bất động sản của STAR AVENUE trong dài hạn.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Ảnh 5 */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/tienichnoikhu/anh-5.png"
                  alt="Nhà phố thương mại Star Avenue"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-101"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
