import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mặt Bằng STAR AVENUE | Quy Hoạch Thương Mại Dài Hạn",
  description:
    "Khám phá mặt bằng tổng thể STAR AVENUE – 251 căn shophouse 5 tầng, mặt tiền 9m, 100% sản phẩm 2–3 mặt thoáng. Quy hoạch thương mại hiện đại tại phường Trần Lãm, TP. Thái Bình.",
  keywords:
    "mặt bằng STAR AVENUE, quy hoạch STAR AVENUE, mặt bằng shophouse Thái Bình, nhà phố thương mại 251 căn, shophouse mặt tiền 9m, bất động sản Thái Bình",
  openGraph: {
    title: "Mặt Bằng STAR AVENUE | Quy Hoạch Thương Mại Dài Hạn",
    description:
      "251 căn shophouse 5 tầng, mặt tiền 9m, 100% sản phẩm 2–3 mặt thoáng. Hệ thống giao thông nội khu, cảnh quan xanh, tiện ích đồng bộ tại STAR AVENUE Thái Bình.",
    url: "https://staravenue.vn/mat-bang",
    siteName: "STAR AVENUE",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://staravenue.vn/images/tong-mat-bang.png",
        width: 1200,
        height: 630,
        alt: "Tổng quan mặt bằng quy hoạch STAR AVENUE Thái Bình",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mặt Bằng STAR AVENUE | Quy Hoạch Thương Mại Dài Hạn",
    description:
      "251 căn shophouse 5 tầng, mặt tiền 9m, 100% sản phẩm 2–3 mặt thoáng tại STAR AVENUE Thái Bình.",
    images: ["https://staravenue.vn/images/tong-mat-bang.png"],
  },
  alternates: {
    canonical: "https://staravenue.vn/mat-bang",
  },
};

export default function MatBangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
