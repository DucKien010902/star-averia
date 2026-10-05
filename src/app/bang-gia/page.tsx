"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import {
  Award,
  TrendingUp,
  Sparkles,
  Building2,
  Trees,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function SanPhamPage() {
  const specTable = [
    { label: "Loại hình", val: "Nhà phố thương mại / shophouse" },
    { label: "Số lượng", val: "251 căn" },
    { label: "Diện tích đất", val: "60 - 145m2" },
    { label: "Số tầng", val: "5 tầng" },
    { label: "Mặt tiền", val: "Mặt tiền lớn, 7,5 - 9m" },
    { label: "Mặt thoáng", val: "100% sản phẩm có 2 - 3 mặt thoáng" },
    { label: "Công năng", val: "Ở, kinh doanh, cho thuê, văn phòng, showroom" },
    { label: "Vị trí", val: "Nằm trong lõi thương mại, gần TTTM, công viên, trục giao thông" },
    { label: "Giá trị", val: "Tài sản tích sản, khai thác dòng tiền, kinh doanh bền vững" },
    { label: "Định vị", val: "Sản phẩm thương mại thấp tầng dành cho nhà đầu tư và chủ kinh doanh" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ===== HEADER + INTRO ===== */}
      <section className="pt-28 pb-10 bg-[#FAF9F5] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-neutral-800" />
          <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-neutral-800" />
        </div>

        <div className="w-[90%] max-w-7xl mx-auto relative z-10 space-y-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center space-y-4 mt-4">
              <h1 className="font-crimson text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight uppercase">
                SẢN PHẨM STAR AVENUE
              </h1>
              <p className="font-crimson text-xl md:text-2xl italic text-[#894d20] font-medium leading-normal">
                Bảo Chứng Tài Sản – Khởi Nguồn Thịnh Vượng
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="font-exo text-base md:text-[17px] text-gray-700 leading-relaxed text-justify font-medium">
                Với bộ sưu tập <strong className="text-[#894d20]">251 căn nhà phố thương mại 5 tầng</strong> được quy hoạch bài bản, <strong className="text-[#894d20]">STAR AVENUE</strong> mở ra một không gian sống và kinh doanh đẳng cấp, nơi giá trị thịnh vượng được kiến tạo từ vị trí, phong cách và tầm nhìn đầu tư bền vững. Lấy cảm hứng từ triết lý &ldquo;Nơi khởi nguồn cuộc sống thịnh vượng&rdquo;, các sản phẩm bất động sản tại đây không chỉ là không gian sống, mà còn là khối tài sản truyền đời mang đậm dấu ấn cá nhân.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="font-exo text-base md:text-[17px] text-gray-700 leading-relaxed text-justify font-medium">
                Với định vị là một khu phố thương mại tinh phẩm, <strong className="text-[#894d20]">STAR AVENUE</strong> tự hào mang đến dòng sản phẩm shophouse đẳng cấp, đáp ứng trọn vẹn nhu cầu an cư, kinh doanh và đầu tư dài hạn của giới tinh hoa. Mỗi căn nhà phố thương mại tại đây được phát triển như một tài sản linh hoạt, vừa phục vụ đời sống, vừa mở ra tiềm năng khai thác thương mại và tích sản bền vững theo thời gian.
              </p>
            </AnimatedSection>
          </div>

          {/* ===== SPECIFICATION TABLE ===== */}
          <AnimatedSection animation="fadeUp" delay={0.25}>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-[#a56428]/20 shadow-md bg-white">
              <div className="bg-gradient-to-r from-[#894d20] to-[#703a17] px-6 py-4">
                <h3 className="font-crimson text-lg md:text-xl font-bold text-white text-center uppercase tracking-wider">
                  Thông tin tổng quan sản phẩm STAR AVENUE
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF9F5] border-b border-[#a56428]/10 text-[#703a17] font-exo text-xs md:text-sm font-bold uppercase tracking-wider">
                      <th className="px-6 py-3.5 w-1/3">Hạng mục</th>
                      <th className="px-6 py-3.5 w-2/3">Thông tin chi tiết</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#a56428]/10 font-exo text-sm text-gray-700 font-medium">
                    {specTable.map((row, i) => (
                      <tr key={i} className="hover:bg-[#ffeabf]/5 transition-colors duration-200">
                        <td className="px-6 py-3.5 font-bold text-[#703a17] bg-[#FAF9F5]/30">{row.label}</td>
                        <td className="px-6 py-3.5 text-justify">{row.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 1: DẤU ẤN KIẾN TRÚC ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          {/* Ảnh 1 */}
          <AnimatedSection animation="fadeUp">
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/sanpham/1.jpg"
                  alt="Dấu ấn kiến trúc hiện đại vượt thời gian tại STAR AVENUE"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Kiến trúc hiện đại vượt thời gian tạo nên diện mạo đô thị thương mại STAR AVENUE.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Dấu ấn kiến trúc hiện đại vượt thời gian
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed text-justify font-medium">
                Mỗi căn shophouse tại <strong className="text-[#894d20]">STAR AVENUE</strong> là một tác phẩm nghệ thuật mang đậm phong cách kiến trúc hiện đại, toát lên sự quyền uy và đĩnh đạc. Đặc biệt, ngôn ngữ thiết kế vượt thời gian được thể hiện rõ nét qua bảng màu chủ đạo của dự án:
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vàng Cát */}
              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex-shrink-0 shadow-inner border border-[#c9a96e]/30 relative overflow-hidden"
                  style={{ backgroundColor: "#D4A85A" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                </div>
                <div className="text-center sm:text-left space-y-1.5">
                  <h4 className="font-crimson text-lg md:text-xl font-bold text-[#703a17]">
                    Màu vàng cát (Sand Yellow)
                  </h4>
                  <p className="font-exo text-[15px] text-gray-700 leading-relaxed text-justify font-medium">
                    Mang lại cảm giác vương giả, thanh lịch, ấm áp và không phô trương, cộng hưởng hoàn hảo với định vị hạng sang của khu thương mại.
                  </p>
                </div>
              </div>

              {/* Nâu Đất */}
              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex-shrink-0 shadow-inner border border-[#7a5c3a]/25 relative overflow-hidden"
                  style={{ backgroundColor: "#7A5C3A" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                </div>
                <div className="text-center sm:text-left space-y-1.5">
                  <h4 className="font-crimson text-lg md:text-xl font-bold text-[#703a17]">
                    Màu nâu đất (Earth Brown)
                  </h4>
                  <p className="font-exo text-[15px] text-gray-700 leading-relaxed text-justify font-medium">
                    Đại diện cho sự vững chãi, nền tảng tài sản thực và tính di sản bền vững, đánh đúng vào khát vọng sở hữu tài sản an toàn của giới đầu tư sừng sỏ.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 2: LỢI THẾ ĐỘC BẢN ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          {/* Ảnh 2 */}
          <AnimatedSection animation="fadeUp">
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/sanpham/2.jpg"
                  alt="Lợi thế độc bản của nhà phố thương mại STAR AVENUE"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Vị thế thương mại độc tôn với hệ thống giao thông và không gian kinh doanh đồng bộ.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Lợi thế độc bản của nhà phố thương mại STAR AVENUE
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Sức hút lớn nhất của dòng sản phẩm nhà phố thương mại tại dự án đến từ những thông số kiến trúc &ldquo;biết nói&rdquo;, tạo ra lợi thế cạnh tranh khổng lồ cho chủ sở hữu:
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Mặt tiền 9m cực hiếm",
                  desc: "Các căn shophouse tại đây sở hữu mặt tiền rộng lên tới 9m – một thông số cực kỳ khan hiếm trên thị trường bất động sản hiện nay.",
                },
                {
                  icon: <Building2 className="w-6 h-6" />,
                  title: "100% sở hữu 2-3 mặt thoáng",
                  desc: "Toàn bộ thiết kế các căn đều sở hữu từ 2 đến 3 mặt thoáng, giúp tối ưu hóa tầm nhìn không giới hạn.",
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Giá trị \"3 trong 1\" hoàn hảo",
                  desc: "Thiết kế công năng thông minh cho phép chủ nhân có thể vừa ở, vừa tự kinh doanh hoặc cho thuê sinh lời bền vững.",
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Tương thích mọi mô hình kinh doanh cao cấp",
                  desc: "Mặt bằng shophouse được tối ưu để phù hợp cho đa dạng loại hình kinh doanh như thời trang cao cấp, spa, nhà hàng, phòng khám, ẩm thực, phục vụ trực tiếp cho phân khúc khách hàng trung và cao cấp.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                    <span className="text-[#894d20] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <div className="space-y-2 text-justify">
                    <h3 className="font-crimson text-lg font-bold text-[#703a17]">{item.title}</h3>
                    <p className="font-exo text-sm text-gray-700 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 3: BÀI TOÁN ĐẦU TƯ ===== */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          {/* Ảnh 3 */}
          <AnimatedSection animation="fadeUp">
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto">
              <div className="relative aspect-[16/10]  w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/sanpham/3.png"
                  alt="Bài toán đầu tư vững chắc tại STAR AVENUE"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Không gian sống xanh đồng hành cùng bài toán đầu tư vững vàng theo thời gian.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Bài toán đầu tư vững chắc & Cộng đồng tinh hoa
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-2" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Bên cạnh giá trị thẩm mỹ và công năng, sản phẩm của <strong className="text-[#894d20]">STAR AVENUE</strong> còn là một kênh trú ẩn dòng tiền an toàn và hiệu quả:
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Khả năng tạo dòng tiền ổn định",
                  desc: "STAR AVENUE mang lại hiệu quả khai thác thực tế vượt trội, với khả năng tạo dòng tiền ổn định cao.",
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Thanh khoản cao và dư địa tăng giá mạnh",
                  desc: "Đây là lựa chọn lý tưởng cho các nhà đầu tư ưa chuộng tài sản có tính thanh khoản cao, sẵn sàng đón đầu đà tăng giá mạnh mẽ khi toàn khu đô thị đi vào vận hành đồng bộ.",
                },
                {
                  icon: <Trees className="w-6 h-6" />,
                  title: "Chuẩn sống xanh đẳng cấp",
                  desc: "Là dự án cao cấp tiên phong mang chuẩn sống xanh quốc tế đến với Thái Bình với mật độ xây dựng chỉ 18,83%, sự kết hợp giữa không gian sinh thái và hạ tầng tiện ích cao cấp giúp nâng tầm trải nghiệm sống thượng lưu.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Cộng đồng khách hàng chất lượng",
                  desc: "Sản phẩm được định vị hướng tới nhóm khách hàng thành đạt, trí thức và có thu nhập cao. Đây không chỉ là nền tảng để xây dựng một cộng đồng văn minh, mà còn tạo ra một tệp khách hàng có sức mua lớn tiêu dùng ngay tại các dịch vụ của dự án.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                    <span className="text-[#894d20] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <div className="space-y-2 text-justify">
                    <h3 className="font-crimson text-lg font-bold text-[#703a17]">{item.title}</h3>
                    <p className="font-exo text-sm text-gray-700 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== KẾT LUẬN ===== */}
      <section className="py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8 text-left">
          {/* Ảnh 4 */}
          <AnimatedSection animation="fadeUp">
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/sanpham/4.jpg"
                  alt="Viên kim cương STAR AVENUE"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Vẻ đẹp sang trọng, đẳng cấp của dãy shophouse STAR AVENUE.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.15}>
            <p className="font-exo text-base md:text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mx-auto font-medium">
              Với số lượng giới hạn chỉ <strong className="text-[#894d20]">251 căn shophouse</strong> sở hữu mặt tiền hiếm có lên tới <strong className="text-[#894d20]">9m</strong>, bộ sưu tập sản phẩm tại <strong className="text-[#894d20]">STAR AVENUE</strong> chính là viên kim cương trên thị trường bất động sản Thái Bình. Thiết kế hiện đại tinh tế cùng sự bảo chứng về quyền sở hữu lâu dài biến mỗi sản phẩm tại đây trở thành một biểu tượng của sự thành đạt và là khối tài sản truyền đời vô giá.
            </p>
          </AnimatedSection>

          {/* Ảnh 5 */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/sanpham/5.jpg"
                  alt="STAR AVENUE - Bảo chứng tài sản lâu dài"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>
            <p className="mt-4 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              <strong className="text-[#894d20]">STAR AVENUE</strong> – Nơi giá trị tài sản được bảo chứng lâu dài.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
