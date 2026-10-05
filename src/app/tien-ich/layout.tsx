import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiện Ích STAR AVENUE | Hệ Sinh Thái Thương Mại – Dịch Vụ Đẳng Cấp",
  description:
    "Khám phá hệ thống tiện ích đồng bộ tại STAR AVENUE Thái Bình – trung tâm thương mại, công viên cảnh quan, hồ điều hòa, đường dạo bộ và không gian sinh hoạt cộng đồng cao cấp.",
  keywords:
    "tiện ích STAR AVENUE, tiện ích shophouse Thái Bình, công viên STAR AVENUE, trung tâm thương mại Thái Bình, hệ sinh thái STAR AVENUE",
  openGraph: {
    title: "Tiện Ích STAR AVENUE | Hệ Sinh Thái Thương Mại – Dịch Vụ Đẳng Cấp",
    description:
      "Hệ thống tiện ích đẳng cấp: trung tâm thương mại, công viên xanh, hồ điều hòa, không gian sinh hoạt cộng đồng – tất cả trong lòng STAR AVENUE Thái Bình.",
    url: "https://staravenue.vn/tien-ich",
    siteName: "STAR AVENUE",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://staravenue.vn/images/logo/Logo%20Star%20Avnenue-03.png",
        width: 1200,
        height: 630,
        alt: "Tiện ích STAR AVENUE Thái Bình",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiện Ích STAR AVENUE | Hệ Sinh Thái Thương Mại Đẳng Cấp",
    description:
      "Trung tâm thương mại, công viên xanh, hồ điều hòa và không gian cộng đồng cao cấp tại STAR AVENUE Thái Bình.",
    images: ["https://staravenue.vn/images/logo/Logo%20Star%20Avnenue-03.png"],
  },
  alternates: {
    canonical: "https://staravenue.vn/tien-ich",
  },
};

export default function TienIchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
