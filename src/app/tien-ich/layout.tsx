import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiện Ích STAR AVERIA | Hệ Sinh Thái Thương Mại – Dịch Vụ Đẳng Cấp",
  description:
    "Khám phá hệ thống tiện ích đồng bộ tại STAR AVERIA Thái Bình – trung tâm thương mại, công viên cảnh quan, hồ điều hòa, đường dạo bộ và không gian sinh hoạt cộng đồng cao cấp.",
  keywords:
    "tiện ích STAR AVERIA, tiện ích shophouse Thái Bình, công viên STAR AVERIA, trung tâm thương mại Thái Bình, hệ sinh thái STAR AVERIA",
  openGraph: {
    title: "Tiện Ích STAR AVERIA | Hệ Sinh Thái Thương Mại – Dịch Vụ Đẳng Cấp",
    description:
      "Hệ thống tiện ích đẳng cấp: trung tâm thương mại, công viên xanh, hồ điều hòa, không gian sinh hoạt cộng đồng – tất cả trong lòng STAR AVERIA Thái Bình.",
    url: "https://star-averia.vercel.app/tien-ich",
    siteName: "STAR AVERIA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://star-averia.vercel.app/images/logo/Logo%20Star%20Avnenue-03.png",
        width: 1200,
        height: 630,
        alt: "Tiện ích STAR AVERIA Thái Bình",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiện Ích STAR AVERIA | Hệ Sinh Thái Thương Mại Đẳng Cấp",
    description:
      "Trung tâm thương mại, công viên xanh, hồ điều hòa và không gian cộng đồng cao cấp tại STAR AVERIA Thái Bình.",
    images: ["https://star-averia.vercel.app/images/logo/Logo%20Star%20Avnenue-03.png"],
  },
  alternates: {
    canonical: "https://star-averia.vercel.app/tien-ich",
  },
};

export default function TienIchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
