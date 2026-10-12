import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vị Trí STAR AVERIA | Tâm Điểm Giao Thương Lý Bôn – Thái Bình",
  description:
    "STAR AVERIA tọa lạc trên trục Lý Bôn – phường Trần Lãm, TP. Thái Bình. Vị trí đắc địa kết nối trực tiếp trung tâm hành chính, bệnh viện, trường học và các tuyến giao thông huyết mạch.",
  keywords:
    "vị trí STAR AVERIA, STAR AVERIA Lý Bôn, vị trí shophouse Thái Bình, bất động sản phường Trần Lãm, STAR AVERIA ở đâu, địa chỉ STAR AVERIA",
  openGraph: {
    title: "Vị Trí STAR AVERIA | Tâm Điểm Giao Thương Lý Bôn – Thái Bình",
    description:
      "Tọa lạc trên trục Lý Bôn – phường Trần Lãm, kết nối đa chiều với trung tâm hành chính, bệnh viện, trường học và giao thông huyết mạch. Vị trí vàng của STAR AVERIA.",
    url: "https://star-averia.vercel.app/vi-tri",
    siteName: "STAR AVERIA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://star-averia.vercel.app/images/logo/Logo%20Star%20Avnenue-03.png",
        width: 1200,
        height: 630,
        alt: "Vị trí STAR AVERIA trên trục Lý Bôn – Thái Bình",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vị Trí STAR AVERIA | Tâm Điểm Giao Thương Lý Bôn",
    description:
      "STAR AVERIA tọa lạc trên trục Lý Bôn – phường Trần Lãm, kết nối trực tiếp trung tâm hành chính và các tuyến giao thông huyết mạch.",
    images: ["https://star-averia.vercel.app/images/logo/Logo%20Star%20Avnenue-03.png"],
  },
  alternates: {
    canonical: "https://star-averia.vercel.app/vi-tri",
  },
};

export default function ViTriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
