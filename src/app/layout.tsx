import type { Metadata } from "next";
import FloatingContacts from "@/components/FloatingContacts";
import "./globals.css";

export const metadata: Metadata = {
  title: "STAR AVENUE Thái Bình - Đại Lộ Giao Thương, Tâm Điểm Đầu Tư",
  description: "STAR AVENUE - Khu thương mại & dịch vụ kiểu mẫu tại phường Trần Lãm. Quy mô 8.73 ha, sở hữu dòng shophouse mặt tiền 9m kinh doanh vượt trội, pháp lý lâu dài. Đăng ký nhận thông tin bảng giá ngay.",
  keywords: "STAR AVENUE, dự án STAR AVENUE, shophouse STAR AVENUE, bất động sản Thái Bình, shophouse mặt tiền 9m, đầu tư bất động sản Thái Bình, Hưng Thái Property",
  openGraph: {
    title: "STAR AVENUE - Đại Lộ Giao Thương, Tâm Điểm Đầu Tư",
    description: "Khu thương mại & dịch vụ hiện đại tại phường Trần Lãm quy mô 8.73 ha. 251 căn shophouse mặt tiền 9m thông thoáng, pháp lý sở hữu lâu dài.",
    url: "https://staravenue.vn",
    siteName: "STAR AVENUE",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://staravenue.vn/images/logo/Logo%20Star%20Avnenue-03.png",
        width: 1200,
        height: 630,
        alt: "STAR AVENUE Thái Bình - Đại Lộ Giao Thương, Tâm Điểm Đầu Tư",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR AVENUE - Đại Lộ Giao Thương, Tâm Điểm Đầu Tư",
    description: "Khu thương mại & dịch vụ hiện đại tại phường Trần Lãm quy mô 8.73 ha. 251 căn shophouse mặt tiền 9m, sở hữu lâu dài.",
    images: ["https://staravenue.vn/images/logo/Logo%20Star%20Avnenue-03.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://staravenue.vn",
  },
  icons: {
    icon: "/images/logo/Logo Star Avnenue-03.png",
    shortcut: "/images/logo/Logo Star Avnenue-03.png",
    apple: "/images/logo/Logo Star Avnenue-03.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "STAR AVENUE",
              description: "Khu thương mại & dịch vụ hiện đại tại phường Trần Lãm. Quy mô 8.73 ha, 251 căn shophouse mặt tiền 9m.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "phường Trần Lãm",
                addressLocality: "Thành phố Thái Bình",
                addressRegion: "Thái Bình",
                addressCountry: "VN",
              },
              url: "https://staravenue.vn",
              telephone: "+84938619339",
              email: "info@staravenue.vn",
            }),
          }}
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: {
                        DEFAULT: '#00504a',
                        dark: '#003a36',
                        light: '#006b63'
                      },
                      accent: {
                        gold: '#f0c84f',
                        'gold-light': '#fbe285',
                        'gold-dark': '#d6a325'
                      },
                      neutral: {
                        white: '#FFFFFF',
                        gray: {
                          50: '#F9FAFB',
                          100: '#F3F4F6',
                          200: '#E5E7EB',
                          300: '#D1D5DB',
                          800: '#1F2937',
                          900: '#111827'
                        }
                      }
                    },
                    fontFamily: {
                      crimson: ['var(--font-crimson)', 'serif'],
                      exo: ['var(--font-exo)', 'sans-serif']
                    },
                    borderRadius: {
                      '2xl': '1rem'
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="font-exo" suppressHydrationWarning>
        {children}
        <FloatingContacts />
      </body>
    </html>
  );
}
