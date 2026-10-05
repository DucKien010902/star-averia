"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  MapPin,
  ArrowRight,
  Navigation as NavigationIcon,
  TrendingUp,
  Store,
  Users,
  Building2,
  Compass,
  Activity,
  Building
} from "lucide-react";
import Image from "next/image";

export default function ViTriPage() {
  const boundaries = [
    {
      direction: "Phía Bắc",
      info: "Giáp khu dân cư và quy hoạch khu đại đô thị mới Starlake Kiến Giang",
      meaning: "Tạo nguồn khách hàng khu vực, bổ sung nhu cầu tiêu dùng, dịch vụ và sinh hoạt hằng ngày"
    },
    {
      direction: "Phía Nam",
      info: "Giáp khu vực đào tạo nghề trọng điểm Thái Bình",
      meaning: "Mở rộng tệp khách trẻ, người lao động, chuyên gia đào tạo và các dịch vụ phụ trợ"
    },
    {
      direction: "Phía Đông",
      info: "Nằm mặt đường Lý Bôn",
      meaning: "Gia tăng khả năng nhận diện, tiếp cận, quảng bá thương hiệu và khai thác mặt tiền thương mại"
    },
    {
      direction: "Phía Tây",
      info: "Nằm trong quần thể đại đô thị Starlake Kiến Giang",
      meaning: "Hưởng lợi từ không gian đô thị mới, cộng đồng cư dân tương lai và xu hướng mở rộng đô thị"
    }
  ];

  const connectivityTable = [
    { destination: "Trường Đại học Y Thái Bình – Bệnh viện Đa khoa tỉnh", distance: "Khoảng 500 m", time: "2 - 3 phút" },
    { destination: "Vincom / Công viên Kỳ Bá / Trường cấp 1–2–3", distance: "Khoảng 1 km", time: "5 phút" },
    { destination: "Trung tâm thương mại GO! / Trung tâm hành chính tỉnh", distance: "Khoảng 2 km", time: "7 phút" },
    { destination: "Công viên nước thành phố", distance: "Khoảng 2,5 km", time: "8 phút" },
    { destination: "Chợ đầu mối", distance: "Khoảng 3 km", time: "10 phút" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ===== HERO / INTRODUCTION ===== */}
      <section className="pt-28 pb-10 bg-[#FAF9F5] relative overflow-hidden">
        {/* Subtle geometric lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-neutral-800" />
          <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-neutral-800" />
        </div>

        <div className="w-[90%] max-w-7xl mx-auto relative z-10 space-y-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center space-y-4 mt-4">
              <h1 className="font-crimson text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight uppercase">
                VỊ TRÍ STAR AVENUE
              </h1>
              <p className="font-crimson text-xl md:text-2xl italic text-[#894d20] font-medium leading-normal">
                Tâm điểm giao thương trên trục lõi Lý Bôn – Thái Bình
              </p>
            </div>
          </AnimatedSection>

          {/* Intro text */}
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="font-exo text-base md:text-[17px] text-gray-700 leading-relaxed text-justify font-medium">
                <strong className="text-[#894d20]">STAR AVENUE</strong> tọa lạc tại 782 Đường Lý Bôn, phường Trần Lãm, tỉnh Hưng Yên – một trong những tuyến giao thông quan trọng của phường Trần Lãm, nơi hội tụ dòng di chuyển nội đô, hệ tiện ích hiện hữu và tiềm năng phát triển thương mại dài hạn. Với lợi thế nằm mặt đường Lý Bôn, tiếp giáp khu dân cư hiện hữu, khu đào tạo nghề trọng điểm và quần thể đại đô thị Starlake Kiến Giang, dự án được định vị như một điểm đến giao thương mới, kết nối mua sắm, dịch vụ, giải trí và đầu tư.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="font-exo text-base md:text-[17px] text-gray-700 leading-relaxed text-justify font-medium">
                Không chỉ là một địa chỉ thuận tiện, vị trí <strong className="text-[#894d20]">STAR AVENUE</strong> còn tạo ra nền tảng khai thác thực tế cho các mô hình kinh doanh hiện đại: từ F&B, bán lẻ, dịch vụ tài chính, chăm sóc sức khỏe đến không gian thương mại cao cấp. Đây là nơi vị trí – kết nối – dòng khách – tiện ích cùng cộng hưởng để mở ra giá trị sống và giá trị tài sản bền vững.
              </p>
            </AnimatedSection>
          </div>

          {/* Intro image */}
          <AnimatedSection animation="fadeUp" delay={0.25}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto">
              <div className="relative aspect-[16/9] md:aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/vitri/1.png"
                  alt="STAR AVENUE - Tâm điểm kết nối thương mại mới"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              <strong className="text-[#894d20]">STAR AVENUE</strong> – Tâm điểm kết nối thương mại mới trên trục lõi Lý Bôn.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 3: 4 ADJACENT SIDES ===== */}
      <section className="py-10 md:py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-6">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent inline-block">
                4 mặt tiếp giáp giàu tiềm năng
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-3" />
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Lợi thế của <strong className="text-[#894d20]">STAR AVENUE</strong> không chỉ đến từ mặt tiền Lý Bôn, mà còn đến từ cấu trúc tiếp giáp đa hướng. Mỗi phía của dự án đều tạo ra một lớp giá trị riêng, góp phần hình thành hệ sinh thái thương mại có khả năng kết nối với cư dân hiện hữu, khu đô thị tương lai, hệ giáo dục – đào tạo và trục giao thông chính.
              </p>
            </AnimatedSection>
          </div>

          {/* Table Container */}
          <AnimatedSection animation="fadeUp" delay={0.15}>
            <div className="w-full overflow-x-auto rounded-2xl border border-[#a56428]/15 shadow-sm bg-white">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#894d20] to-[#703a17] text-white font-exo text-sm font-bold uppercase tracking-wider">
                    <th className="px-5 py-4 border-b border-[#a56428]/20 w-1/4">Hướng tiếp giáp</th>
                    <th className="px-5 py-4 border-b border-[#a56428]/20 w-3/8">Thông tin chi tiết</th>
                    <th className="px-5 py-4 border-b border-[#a56428]/20 w-3/8">Ý nghĩa đối với giá trị dự án</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#a56428]/10 font-exo text-sm text-gray-700 font-medium">
                  {boundaries.map((boundary, i) => (
                    <tr key={i} className="hover:bg-[#ffeabf]/5 transition-colors duration-250">
                      <td className="px-5 py-4 font-bold text-[#703a17]">{boundary.direction}</td>
                      <td className="px-5 py-4 text-justify">{boundary.info}</td>
                      <td className="px-5 py-4 text-justify text-[#894d20]">{boundary.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="font-exo text-base text-gray-700 leading-relaxed text-justify font-medium">
              Nhờ bốn mặt tiếp giáp này, <strong className="text-[#894d20]">STAR AVENUE</strong> không bị giới hạn trong vai trò của một công trình thương mại đơn lẻ, mà có khả năng trở thành điểm giao giữa khu dân cư hiện hữu, đô thị mới và hệ tiện ích trung tâm.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 4: TRAFFIC CONNECTIVITY ===== */}
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-6">
          <div className="space-y-3">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block">
                Kết nối giao thông nội đô và liên vùng
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-3" />
            </AnimatedSection>
          </div>

          {/* Text Content */}
          <div className="space-y-4 font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p>
                Từ <strong className="text-[#894d20]">STAR AVENUE</strong>, khả năng kết nối được mở rộng theo cả hai lớp: kết nối nội đô và kết nối liên vùng. Ở cấp độ nội đô, dự án nằm trên đường Lý Bôn, thuận tiện tiếp cận các trục chính, trung tâm hành chính, khu mua sắm, bệnh viện, trường học và các không gian công cộng quan trọng của thành phố.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p>
                Ở cấp độ liên vùng, TP. Thái Bình cách Hà Nội khoảng 110 km, đồng thời kết nối thuận lợi đến Hải Phòng, Nam Định thông qua các quốc lộ lớn như QL10 và QL39. Các tuyến QL39B, đường ven biển và hệ thống vành đai như Vành đai I gồm Trần Thái Tông – Long Hưng – Quang Trung – Hai Bà Trưng tiếp tục góp phần nâng cao năng lực liên kết nội thành và khu vực.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p>
                Với bất động sản thương mại, giao thông không chỉ phục vụ di chuyển, mà còn trực tiếp ảnh hưởng đến dòng khách, tần suất ghé thăm và khả năng vận hành kinh doanh. Một vị trí dễ đến, dễ nhận diện, dễ kết nối sẽ giúp các thương hiệu, chủ kinh doanh và nhà đầu tư gia tăng lợi thế khai thác trong dài hạn.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={0.25}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300 max-w-7xl mx-auto">
              <div className="relative aspect-[16/9] md:aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/vitri/2.png"
                  alt="Cấu trúc tiếp giáp đa hướng"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              Cấu trúc tiếp giáp đa hướng mở rộng biên độ kết nối và khai thác thương mại.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SECTION 5: EXTERNAL AMENITIES ===== */}
      <section className="py-10 md:py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent inline-block">
                Tiện ích ngoại khu hoàn chỉnh
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-3" />
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Một trong những giá trị quan trọng của <strong className="text-[#894d20]">STAR AVENUE</strong> là khả năng thừa hưởng hệ tiện ích ngoại khu đã hiện hữu. Dự án nằm trong khu vực sầm uất của TP. Thái Bình, nơi tập trung các trung tâm thương mại, cơ sở y tế, trường học, khu hành chính, công viên, ngân hàng và các dịch vụ đô thị thiết yếu.
              </p>
            </AnimatedSection>
          </div>

          {/* Cards Stack */}
          <div className="grid grid-cols-1 gap-5">
            {/* Card 1 */}
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <div className="bg-white p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                  <Store className="w-6 h-6 text-[#894d20] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-crimson text-xl font-bold text-[#703a17]">
                    Thương mại – dịch vụ
                  </h3>
                  <p className="font-exo text-sm text-gray-700 leading-relaxed text-justify font-medium">
                    <strong className="text-[#894d20]">STAR AVENUE</strong> gần các điểm mua sắm lớn như Vincom Plaza Lý Bôn, Victory Plaza và GO! Thái Bình. Sự hiện diện của các trung tâm thương mại này cho thấy khu vực đã có thói quen tiêu dùng, dòng khách mua sắm và nhu cầu dịch vụ rõ ràng. Đây là nền tảng quan trọng để <strong className="text-[#894d20]">STAR AVENUE</strong> phát triển thêm các mô hình kinh doanh hiện đại, có tính bổ trợ và nâng cấp trải nghiệm thương mại khu vực.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="bg-white p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                  <Activity className="w-6 h-6 text-[#894d20] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-crimson text-xl font-bold text-[#703a17]">
                    Y tế – giáo dục
                  </h3>
                  <p className="font-exo text-sm text-gray-700 leading-relaxed text-justify font-medium">
                    Khu vực xung quanh dự án quy tụ Bệnh viện Đa khoa tỉnh, Bệnh viện Đại học Y Thái Bình, nhiều bệnh viện chuyên khoa, Đại học Y Thái Bình, các trường đại học, cao đẳng và hệ thống trường phổ thông. Đây là nhóm tiện ích tạo ra nhu cầu sử dụng thực tế, ổn định và thường xuyên, đồng thời mở ra tiềm năng cho các ngành dịch vụ liên quan đến chăm sóc sức khỏe, giáo dục, lưu trú, ăn uống và tiện ích phụ trợ.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection animation="fadeUp" delay={0.25}>
              <div className="bg-white p-6 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428] transition-colors duration-300">
                  <Building2 className="w-6 h-6 text-[#894d20] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-crimson text-xl font-bold text-[#703a17]">
                    Đô thị – hành chính – công viên
                  </h3>
                  <p className="font-exo text-sm text-gray-700 leading-relaxed text-justify font-medium">
                    Trong bán kính 1–2 km, cư dân và khách hàng có thể tiếp cận quảng trường trung tâm, công viên, trung tâm hành chính, chợ đầu mối, ngân hàng và mảng xanh đô thị. Điều này giúp <strong className="text-[#894d20]">STAR AVENUE</strong> không chỉ có lợi thế kinh doanh, mà còn phù hợp với nhu cầu trải nghiệm sống, làm việc, mua sắm và giải trí trong cùng một khu vực.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* ===== SECTION 6: CONNECTIVITY TIMELINE ===== */}
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-6">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent inline-block">
                Khoảng cách kết nối nổi bật
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-3" />
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Từ vị trí trung tâm trên trục Lý Bôn, <strong className="text-[#894d20]">STAR AVENUE</strong> giúp cư dân, khách hàng và chủ kinh doanh dễ dàng tiếp cận nhiều tiện ích trọng điểm trong thời gian ngắn. Các khoảng cách kết nối rõ ràng giúp khách hàng hình dung trực quan hơn về giá trị thực tế của vị trí.
              </p>
            </AnimatedSection>
          </div>

          {/* Table */}
          <AnimatedSection animation="fadeUp" delay={0.15}>
            <div className="w-full overflow-hidden rounded-2xl border border-[#a56428]/15 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#894d20] to-[#703a17] text-white font-exo text-sm font-bold uppercase tracking-wider">
                    <th className="px-6 py-4 border-b border-[#a56428]/20">Điểm đến tiện ích</th>
                    <th className="px-6 py-4 border-b border-[#a56428]/20">Khoảng cách</th>
                    <th className="px-6 py-4 border-b border-[#a56428]/20">Thời gian (Ước tính)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#a56428]/10 font-exo text-sm text-gray-700 font-medium">
                  {connectivityTable.map((item, i) => (
                    <tr key={i} className="hover:bg-[#ffeabf]/5 transition-colors duration-200">
                      <td className="px-6 py-4 font-bold text-[#703a17]">{item.destination}</td>
                      <td className="px-6 py-4 text-[#894d20]">{item.distance}</td>
                      <td className="px-6 py-4 text-gray-500">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="font-exo text-sm md:text-[16px] text-gray-700 leading-relaxed text-justify font-medium">
              Những kết nối này tạo nên lợi thế kép: vừa phục vụ nhu cầu sống và sinh hoạt thường ngày, vừa hỗ trợ hoạt động thương mại nhờ dòng khách đa dạng từ cư dân, học sinh – sinh viên, cán bộ, người lao động, chuyên gia, khách mua sắm và người sử dụng dịch vụ trong khu vực.
            </p>
          </AnimatedSection>

          <div className="w-full pt-4">
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="group relative p-2 transition-all duration-300 max-w-7xl mx-auto">
                <div className="relative aspect-[1.5] md:aspect-[1.5] w-full rounded-xl overflow-hidden bg-gray-150">
                  <Image
                    src="/images/lien-ket-vung.png"
                    alt="Tiện ích ngoại khu"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
              </div>
              <p className="mt-4 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
                Hệ tiện ích hiện hữu tạo dòng nhu cầu tự nhiên cho không gian thương mại <strong className="text-[#894d20]">STAR AVENUE</strong>.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: INVESTMENT VALUE ===== */}
      <section className="py-10 md:py-12 bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-6">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-xl md:text-2xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent inline-block">
                Giá trị vị trí đối với kinh doanh và đầu tư
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-3" />
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <p className="font-exo text-base text-gray-700 leading-relaxed font-medium text-justify">
                Vị trí của <strong className="text-[#894d20]">STAR AVENUE</strong> tạo ra giá trị khác nhau cho từng nhóm khách hàng, nhưng cùng gặp nhau ở một điểm: khả năng khai thác dài hạn dựa trên kết nối, dòng khách và tính thương mại của mặt tiền Lý Bôn.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1 */}
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-[#894d20]" />
                  </div>
                  <h3 className="font-crimson text-lg md:text-xl font-bold text-[#703a17]">
                    Đối với nhà đầu tư
                  </h3>
                </div>
                <p className="font-exo text-sm text-gray-700 leading-relaxed text-justify font-medium">
                  <strong className="text-[#894d20]">STAR AVENUE</strong> nằm tại khu vực có lợi thế mặt tiền, tiếp giáp đại đô thị và được bao quanh bởi hệ tiện ích hiện hữu. Đây là nền tảng quan trọng để hình thành giá trị tài sản dài hạn. Với nhà đầu tư, vị trí lõi không chỉ tạo ra khả năng khai thác cho thuê, mà còn nâng cao tính khan hiếm của tài sản trong bối cảnh quỹ đất trung tâm ngày càng có giới hạn.
                </p>
              </div>
            </AnimatedSection>

            {/* Box 2 */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <Store className="w-4 h-4 text-[#894d20]" />
                  </div>
                  <h3 className="font-crimson text-lg md:text-xl font-bold text-[#703a17]">
                    Đối với chủ kinh doanh
                  </h3>
                </div>
                <p className="font-exo text-sm text-gray-700 leading-relaxed text-justify font-medium">
                  Một mặt bằng thương mại hiệu quả cần ba yếu tố: dễ thấy, dễ đến và có dòng khách. <strong className="text-[#894d20]">STAR AVENUE</strong> đáp ứng đồng thời cả ba lớp giá trị này nhờ vị trí trên đường Lý Bôn, khả năng kết nối đa hướng và hệ tiện ích xung quanh đã hình thành nhu cầu sử dụng thực tế. Đây là điều kiện phù hợp cho các ngành kinh doanh cần nhận diện thương hiệu và tệp khách ổn định.
                </p>
              </div>
            </AnimatedSection>

            {/* Box 3 */}
            <AnimatedSection animation="fadeUp" delay={0.25}>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <Building className="w-4 h-4 text-[#894d20]" />
                  </div>
                  <h3 className="font-crimson text-lg md:text-xl font-bold text-[#703a17]">
                    Đối với thương hiệu bán lẻ, F&B và dịch vụ
                  </h3>
                </div>
                <p className="font-exo text-sm text-gray-700 leading-relaxed text-justify font-medium">
                  Vị trí gần khu dân cư, khu đào tạo, bệnh viện, trường học, trung tâm mua sắm và không gian hành chính tạo ra nhiều tệp khách khác nhau trong cùng một khu vực. Điều này giúp <strong className="text-[#894d20]">STAR AVENUE</strong> có tiềm năng trở thành điểm đặt thương hiệu cho các mô hình F&B, showroom, bán lẻ, ngân hàng, chăm sóc sức khỏe, giáo dục và dịch vụ cao cấp.
                </p>
              </div>
            </AnimatedSection>

            {/* Box 4 */}
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#a56428]/10 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#a56428]/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#894d20]" />
                  </div>
                  <h3 className="font-crimson text-lg md:text-xl font-bold text-[#703a17]">
                    Đối với khách hàng và cư dân khu vực
                  </h3>
                </div>
                <p className="font-exo text-sm text-gray-700 leading-relaxed text-justify font-medium">
                  Với cư dân và khách hàng, <strong className="text-[#894d20]">STAR AVENUE</strong> mang đến một điểm đến mới để mua sắm, gặp gỡ, sử dụng dịch vụ và trải nghiệm không gian đô thị hiện đại. Khi thương mại, cảnh quan và tiện ích được tổ chức đồng bộ, dự án có thể đóng vai trò như một điểm hẹn mới, góp phần nâng cấp chất lượng sống và nhịp tiêu dùng của khu vực.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Section Image */}
          <div className="w-full pt-4">
            <AnimatedSection animation="fadeUp" delay={0.35}>
              <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto">
                <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src="/images/vitri/4.jpg"
                    alt="Lifestyle commercial street at STAR AVENUE"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
              </div>
              <p className="mt-4 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
                Vị trí thương mại tốt tạo tiền đề cho dòng khách, trải nghiệm và giá trị khai thác dài hạn.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: CONCLUSION ===== */}
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto space-y-8 text-left">
          <div className="space-y-4">
            <AnimatedSection animation="fadeUp">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent uppercase tracking-wide leading-tight">
                STAR AVENUE – Vị trí mở ra giá trị giao thương mới
              </h2>
              <div className="w-16 h-[2px] bg-accent-gold my-3" />
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={0.15}>
            <p className="font-exo text-base md:text-lg text-gray-700 leading-relaxed text-justify max-w-7xl mx-auto font-medium">
              <strong className="text-[#894d20]">STAR AVENUE</strong> không chỉ sở hữu một vị trí thuận tiện trên trục Lý Bôn, mà còn nắm giữ nền tảng kết nối quan trọng giữa khu dân cư, đại đô thị mới, hệ tiện ích hiện hữu và mạng lưới giao thông nội đô – liên vùng. Chính sự cộng hưởng giữa vị trí lõi, mặt tiền thương mại, khả năng tiếp cận và dòng nhu cầu khu vực đã tạo nên tiềm năng phát triển lâu dài cho dự án. Với định hướng trở thành điểm đến giao thương mới, <strong className="text-[#894d20]">STAR AVENUE</strong> là nơi khởi nguồn cho những giá trị sống, kinh doanh và đầu tư thịnh vượng.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden border border-[#a56428]/15 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 max-w-7xl mx-auto">
              <div className="relative aspect-[16/9] md:aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/vitri/5.jpg"
                  alt="STAR AVENUE destination showcase"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>
            <p className="mt-4 text-center font-exo text-xs md:text-sm text-gray-500 italic font-medium">
              <strong className="text-[#894d20]">STAR AVENUE</strong> – Nơi vị trí chiến lược trở thành nền tảng của cuộc sống thịnh vượng.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
