"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WaveDivider from "@/components/ui/WaveDivider";
import { ArrowRight, Award, Building2, CheckCircle, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GioiThieuPage() {
  const milestones = [
    {
      year: "2020",
      title: "Khởi công dự án",
      description: "Khởi đầu hành trình kiến tạo không gian sống đẳng cấp",
    },
    {
      year: "2021",
      title: "Hoàn thiện hạ tầng",
      description: "Hoàn thành 100% hạ tầng kỹ thuật và giao thông nội khu",
    },
    {
      year: "2022",
      title: "Bàn giao block đầu tiên",
      description: "Phát triển 5 dự án lớn trên toàn quốc",
    },
    {
      year: "2024",
      title: "The Star City",
      description: "Ra mắt dự án biểu tượng mới tại Thái Bình",
    },
  ];

  const achievements = [
    { icon: Building2, value: "251", label: "Căn shophouse" },
    { icon: MapPin, value: "8.73", label: "Hecta" },
    { icon: Award, value: "15+", label: "Giải thưởng" },
    { icon: Users, value: "1000+", label: "Khách hàng" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/anh1.jpg"
          alt="Giới thiệu The Star City"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-crimson text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Giới Thiệu Dự Án
          </h1>
          <p className="font-exo text-xl md:text-2xl max-w-3xl mx-auto">
            THE STAR CITY - Biểu tượng sống đẳng cấp tại Thái Bình
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-6">
                Về The Star City
              </h2>
              <div className="space-y-4 font-exo text-base leading-relaxed text-neutral-gray-700">
                <p>
                  <span className="text-primary">THE STAR CITY</span> là dự án khu đô thị thương mại cao cấp
                  đầu tiên tại Thái Bình, được phát triển bởi CÔNG TY CỔ PHẦN HẠ TẦNG ĐÔNG HẢI SỐ 1 với tổng diện tích 8,73 ha.
                </p>
                <p>
                  Dự án không chỉ đơn thuần là một sản phẩm bất động sản, mà còn là lời cam kết dài hạn về một chất
                  lượng sống bền vững, nơi những giá trị tương lai được vun đắp trong từng khoảnh khắc.
                </p>
                <p>
                  Với vị trí đắc địa trên đường Lý Bôn - trục giao thông huyết mạch của thành phố, The Star City hứa
                  hẹn sẽ trở thành điểm đến lý tưởng cho cả sinh sống và kinh doanh.
                </p>
                <p>
                  Dự án bao gồm 251 căn shophouse liền kề VIP, được thiết kế theo phong cách hiện đại, kết hợp hài hòa
                  giữa không gian thương mại và không gian sống, đáp ứng mọi nhu cầu của cư dân và nhà đầu tư.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/anh1.jpg" alt="The Star City" fill className="object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-4">Thông Số Dự Án</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} animation="fadeUp">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-accent-gold" />
                    </div>
                    <div className="font-crimson text-4xl font-bold text-primary mb-2">{item.value}</div>
                    <div className="font-exo text-neutral-gray-600">{item.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-4">
                Hành Trình Phát Triển
              </h2>
              <p className="font-exo text-base text-neutral-gray-600">
                Những cột mốc quan trọng trong lịch sử công ty
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-gold/30"></div>

            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} animation="fadeUp">
                <div
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-gray-100">
                      <div className="font-crimson text-3xl font-bold text-accent-gold mb-2">{milestone.year}</div>
                      <h3 className="font-exo text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                      <p className="font-exo text-sm text-neutral-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent-gold border-4 border-white shadow-lg"></div>

                  <div className="w-5/12"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-neutral-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fadeUp">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white h-full">
                <h3 className="font-crimson text-3xl md:text-4xl font-bold text-accent-gold mb-6">Tầm Nhìn</h3>
                <p className="font-exo text-base leading-relaxed mb-4">
                  Trở thành nhà phát triển bất động sản hàng đầu tại khu vực miền Bắc, mang đến những sản phẩm chất
                  lượng cao, đáp ứng nhu cầu ngày càng cao của khách hàng.
                </p>
                <p className="font-exo text-base leading-relaxed">
                  Xây dựng những cộng đồng sống văn minh, hiện đại, góp phần nâng cao chất lượng cuộc sống và phát
                  triển bền vững.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
              <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-accent-gold h-full">
                <h3 className="font-crimson text-3xl md:text-4xl font-bold text-primary mb-6">Sứ Mệnh</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <span className="font-exo text-base text-neutral-gray-700">
                      Cung cấp sản phẩm bất động sản chất lượng cao với giá trị bền vững
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <span className="font-exo text-base text-neutral-gray-700">
                      Đảm bảo quyền lợi và sự hài lòng tối đa của khách hàng
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <span className="font-exo text-base text-neutral-gray-700">
                      Phát triển bền vững, hài hòa với môi trường và cộng đồng
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <span className="font-exo text-base text-neutral-gray-700">
                      Tạo dựng niềm tin và uy tín thương hiệu trên thị trường
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Project Overview Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              Tổng Quan Chi Tiết Dự Án
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fadeUp">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
                <h3 className="font-crimson text-2xl font-bold text-accent-gold mb-6">Thông Tin Pháp Lý</h3>
                <div className="space-y-4 font-exo">
                  <div className="flex justify-between border-b border-white/20 pb-3">
                    <span className="text-white/70">Chủ đầu tư:</span>
                    <span className="font-semibold text-right">CÔNG TY CỔ PHẦN HẠ TẦNG ĐÔNG HẢI SỐ 1</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-3">
                    <span className="text-white/70">Hình thức sở hữu:</span>
                    <span className="font-semibold">Sở hữu lâu dài</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-3">
                    <span className="text-white/70">Giấy phép:</span>
                    <span className="font-semibold">Đầy đủ</span>
                  </div>
                  <div className="flex justify-between pb-3">
                    <span className="text-white/70">Pháp lý:</span>
                    <span className="font-semibold">Sổ đỏ từng căn</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
              <div className="bg-neutral-gray-50 rounded-2xl p-8 border-2 border-primary">
                <h3 className="font-crimson text-2xl font-bold text-primary mb-6">Quy Mô Dự Án</h3>
                <div className="space-y-4 font-exo">
                  <div className="flex justify-between border-b border-neutral-gray-200 pb-3">
                    <span className="text-neutral-gray-600">Tổng diện tích:</span>
                    <span className="font-semibold text-primary">8,73 ha</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-gray-200 pb-3">
                    <span className="text-neutral-gray-600">Số lượng sản phẩm:</span>
                    <span className="font-semibold text-primary">251 căn</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-gray-200 pb-3">
                    <span className="text-neutral-gray-600">Loại hình:</span>
                    <span className="font-semibold text-primary">Shophouse liền kề</span>
                  </div>
                  <div className="flex justify-between pb-3">
                    <span className="text-neutral-gray-600">Mật độ xây dựng:</span>
                    <span className="font-semibold text-primary">45%</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-neutral-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary text-center mb-4">
              Tại Sao Chọn The Star City?
            </h2>
            <p className="font-exo text-base text-neutral-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Những lý do khiến The Star City trở thành lựa chọn hàng đầu cho nhà đầu tư và cư dân
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeUp">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-crimson text-2xl font-bold text-primary mb-4">Vị Trí Đắc Địa</h3>
                <p className="font-exo text-base text-neutral-gray-700 leading-relaxed">
                  Nằm trên đường Lý Bôn - trục giao thông huyết mạch của TP. Thái Bình, kết nối thuận tiện với trung
                  tâm thành phố và các khu vực lân cận. Gần các tiện ích công cộng, trường học, bệnh viện.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-crimson text-2xl font-bold text-primary mb-4">Thiết Kế Hiện Đại</h3>
                <p className="font-exo text-base text-neutral-gray-700 leading-relaxed">
                  Kiến trúc đương đại, sang trọng với không gian mở thoáng đãng. Mỗi căn shophouse được thiết kế tối ưu
                  công năng, phù hợp cho cả kinh doanh và sinh sống. Hệ thống hạ tầng kỹ thuật hiện đại.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-crimson text-2xl font-bold text-primary mb-4">Tiềm Năng Sinh Lời</h3>
                <p className="font-exo text-base text-neutral-gray-700 leading-relaxed">
                  Thị trường bất động sản Thái Bình đang phát triển mạnh mẽ với tốc độ đô thị hóa cao. Dự án có tiềm
                  năng tăng giá lớn nhờ vị trí đắc địa và hạ tầng hoàn thiện. Cơ hội đầu tư sinh lời hấp dẫn.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Developer Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeUp">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/anh1.jpg" alt="Chủ đầu tư" fill className="object-cover" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-6">
                Về Chủ Đầu Tư
              </h2>
              <div className="space-y-4 font-exo text-base leading-relaxed text-neutral-gray-700">
                <p>
                  <span className="font-bold text-primary">CÔNG TY CỔ PHẦN HẠ TẦNG ĐÔNG HẢI SỐ 1</span> là một trong những đơn vị
                  phát triển bất động sản uy tín tại khu vực miền Bắc với nhiều năm kinh nghiệm trong lĩnh vực đầu tư
                  và phát triển các dự án bất động sản cao cấp.
                </p>
                <p>
                  Với đội ngũ chuyên gia giàu kinh nghiệm và tầm nhìn chiến lược, Star Avenue cam kết mang đến những sản
                  phẩm chất lượng cao, đáp ứng nhu cầu ngày càng cao của khách hàng về không gian sống và kinh doanh.
                </p>
                <p>
                  Công ty luôn đặt uy tín và chất lượng lên hàng đầu, tuân thủ nghiêm ngặt các quy định pháp luật, đảm
                  bảo quyền lợi tối đa cho khách hàng và nhà đầu tư.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-accent-gold/10 rounded-xl p-4 text-center">
                    <div className="font-crimson text-3xl font-bold text-accent-gold mb-1">10+</div>
                    <div className="font-exo text-sm text-neutral-gray-600">Năm kinh nghiệm</div>
                  </div>
                  <div className="bg-accent-gold/10 rounded-xl p-4 text-center">
                    <div className="font-crimson text-3xl font-bold text-accent-gold mb-1">15+</div>
                    <div className="font-exo text-sm text-neutral-gray-600">Dự án hoàn thành</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-neutral-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              Hình Ảnh Dự Án
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <AnimatedSection key={index} animation="fadeUp">
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                  <Image
                    src="/images/anh1.jpg"
                    alt={`Hình ảnh dự án ${index}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-primary-dark">
        <WaveDivider position="top" color="#f5f5f5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center text-white">
              <h2
                className="font-crimson text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-accent-gold italic"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Khám phá thêm về dự án
              </h2>
              <p className="font-exo text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Liên hệ với chúng tôi để được tư vấn chi tiết
              </p>
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-gold text-white font-exo font-bold rounded-xl hover:bg-accent-gold-light transition-all"
              >
                Liên hệ ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
