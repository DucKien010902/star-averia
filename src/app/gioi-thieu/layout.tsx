import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu STAR AVENUE | Đại Lộ Giao Thương – Tâm Điểm Đầu Tư",
  description:
    "STAR AVENUE – tổ hợp thương mại & dịch vụ kiểu mẫu quy mô 8.73 ha tại phường Trần Lãm, TP. Thái Bình. Được phát triển bởi Hưng Thái Property, là điểm hội tụ của mua sắm, giải trí, kinh doanh và đầu tư bền vững.",
  keywords:
    "giới thiệu STAR AVENUE, STAR AVENUE là gì, tổng quan STAR AVENUE, Hưng Thái Property, khu thương mại Thái Bình, dự án STAR AVENUE Thái Bình",
  openGraph: {
    title: "Giới Thiệu STAR AVENUE | Đại Lộ Giao Thương – Tâm Điểm Đầu Tư",
    description:
      "Tổ hợp thương mại & dịch vụ kiểu mẫu 8.73 ha tại phường Trần Lãm – hội tụ mua sắm, giải trí, kinh doanh và đầu tư. 251 căn shophouse mặt tiền 9m, pháp lý lâu dài.",
    url: "https://staravenue.vn/gioi-thieu",
    siteName: "STAR AVENUE",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://staravenue.vn/images/logo/Logo%20Star%20Avnenue-03.png",
        width: 1200,
        height: 630,
        alt: "Giới thiệu dự án STAR AVENUE Thái Bình",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giới Thiệu STAR AVENUE | Đại Lộ Giao Thương",
    description:
      "Tổ hợp thương mại & dịch vụ 8.73 ha tại Thái Bình. 251 căn shophouse mặt tiền 9m, pháp lý sở hữu lâu dài.",
    images: ["https://staravenue.vn/images/logo/Logo%20Star%20Avnenue-03.png"],
  },
  alternates: {
    canonical: "https://staravenue.vn/gioi-thieu",
  },
};

export default function GioiThieuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
