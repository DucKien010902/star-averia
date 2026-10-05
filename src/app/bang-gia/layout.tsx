import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản Phẩm STAR AVENUE | Shophouse Mặt Tiền 9m – Bảo Chứng Tài Sản",
  description:
    "251 căn nhà phố thương mại 5 tầng tại STAR AVENUE Thái Bình – mặt tiền 9m, 2–3 mặt thoáng, pháp lý sở hữu lâu dài. Tài sản tích sản, kinh doanh vượt trội, sinh lời bền vững.",
  keywords:
    "sản phẩm STAR AVENUE, shophouse STAR AVENUE, nhà phố thương mại Thái Bình, shophouse mặt tiền 9m, bảng giá STAR AVENUE, đầu tư shophouse Thái Bình",
  openGraph: {
    title: "Sản Phẩm STAR AVENUE | Shophouse Mặt Tiền 9m – Bảo Chứng Tài Sản",
    description:
      "251 căn shophouse 5 tầng, mặt tiền 9m, 100% có 2–3 mặt thoáng. Pháp lý sở hữu lâu dài, kiến trúc hiện đại, tiện ích đẳng cấp tại STAR AVENUE Thái Bình.",
    url: "https://staravenue.vn/bang-gia",
    siteName: "STAR AVENUE",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://staravenue.vn/images/sanpham/1.jpg",
        width: 1200,
        height: 630,
        alt: "Shophouse STAR AVENUE – Kiến trúc hiện đại vượt thời gian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sản Phẩm STAR AVENUE | Shophouse Mặt Tiền 9m",
    description:
      "251 căn shophouse 5 tầng, mặt tiền 9m, 2–3 mặt thoáng tại STAR AVENUE Thái Bình. Tài sản tích sản – kinh doanh vượt trội.",
    images: ["https://staravenue.vn/images/sanpham/1.jpg"],
  },
  alternates: {
    canonical: "https://staravenue.vn/bang-gia",
  },
};

export default function BangGiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
