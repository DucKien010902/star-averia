import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mặt Bằng STAR AVERIA | Quy Hoạch Thương Mại Dài Hạn",
  description:
    "Khám phá mặt bằng tổng thể STAR AVERIA – 251 căn shophouse 5 tầng, mặt tiền 9m, 100% sản phẩm 2–3 mặt thoáng. Quy hoạch thương mại hiện đại tại phường Trần Lãm, TP. Thái Bình.",
  keywords:
    "mặt bằng STAR AVERIA, quy hoạch STAR AVERIA, mặt bằng shophouse Thái Bình, nhà phố thương mại 251 căn, shophouse mặt tiền 9m, bất động sản Thái Bình",
  openGraph: {
    title: "Mặt Bằng STAR AVERIA | Quy Hoạch Thương Mại Dài Hạn",
    description:
      "251 căn shophouse 5 tầng, mặt tiền 9m, 100% sản phẩm 2–3 mặt thoáng. Hệ thống giao thông nội khu, cảnh quan xanh, tiện ích đồng bộ tại STAR AVERIA Thái Bình.",
    url: "https://star-averia.vercel.app/mat-bang",
    siteName: "STAR AVERIA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://star-averia.vercel.app/images/tong-mat-bang.png",
        width: 1200,
        height: 630,
        alt: "Tổng quan mặt bằng quy hoạch STAR AVERIA Thái Bình",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mặt Bằng STAR AVERIA | Quy Hoạch Thương Mại Dài Hạn",
    description:
      "251 căn shophouse 5 tầng, mặt tiền 9m, 100% sản phẩm 2–3 mặt thoáng tại STAR AVERIA Thái Bình.",
    images: ["https://star-averia.vercel.app/images/tong-mat-bang.png"],
  },
  alternates: {
    canonical: "https://star-averia.vercel.app/mat-bang",
  },
};

export default function MatBangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
