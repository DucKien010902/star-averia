import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản Phẩm STAR AVERIA | Shophouse Mặt Tiền 9m – Bảo Chứng Tài Sản",
  description:
    "251 căn nhà phố thương mại 5 tầng tại STAR AVERIA Thái Bình – mặt tiền 9m, 2–3 mặt thoáng, pháp lý sở hữu lâu dài. Tài sản tích sản, kinh doanh vượt trội, sinh lời bền vững.",
  keywords:
    "sản phẩm STAR AVERIA, shophouse STAR AVERIA, nhà phố thương mại Thái Bình, shophouse mặt tiền 9m, bảng giá STAR AVERIA, đầu tư shophouse Thái Bình",
  openGraph: {
    title: "Sản Phẩm STAR AVERIA | Shophouse Mặt Tiền 9m – Bảo Chứng Tài Sản",
    description:
      "251 căn shophouse 5 tầng, mặt tiền 9m, 100% có 2–3 mặt thoáng. Pháp lý sở hữu lâu dài, kiến trúc hiện đại, tiện ích đẳng cấp tại STAR AVERIA Thái Bình.",
    url: "https://star-averia.vercel.app/bang-gia",
    siteName: "STAR AVERIA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://star-averia.vercel.app/images/sanpham/1.jpg",
        width: 1200,
        height: 630,
        alt: "Shophouse STAR AVERIA – Kiến trúc hiện đại vượt thời gian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sản Phẩm STAR AVERIA | Shophouse Mặt Tiền 9m",
    description:
      "251 căn shophouse 5 tầng, mặt tiền 9m, 2–3 mặt thoáng tại STAR AVERIA Thái Bình. Tài sản tích sản – kinh doanh vượt trội.",
    images: ["https://star-averia.vercel.app/images/sanpham/1.jpg"],
  },
  alternates: {
    canonical: "https://star-averia.vercel.app/bang-gia",
  },
};

export default function BangGiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
