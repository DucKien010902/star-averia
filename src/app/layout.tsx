import type { Metadata } from "next";
import FloatingContacts from "@/components/FloatingContacts";
import "./globals.css";

export const metadata: Metadata = {
  title: "STAR AVERIA Thái Bình - Đô Thị Ven Sông Trà Lý, Tâm Điểm Đầu Tư",
  description: "STAR AVERIA - Khu đô thị đẳng cấp ven sông Trà Lý tại Thái Bình. Quy mô 28,54 ha gồm 182 căn liền kề, 34 căn biệt thự, 631 căn chung cư cao cấp, trung tâm thương mại 9 tầng và hệ sinh thái công viên cảnh quan. Pháp lý sở hữu lâu dài.",
  keywords: "STAR AVERIA, dự án STAR AVERIA, liền kề STAR AVERIA, biệt thự STAR AVERIA, chung cư STAR AVERIA, bất động sản Thái Bình, Hưng Thái Property, đô thị sông Trà Lý",
  openGraph: {
    title: "STAR AVERIA - Khu Đô Thị Ven Sông Trà Lý | Tâm Điểm Đầu Tư",
    description: "Khu đô thị hiện đại ven sông Trà Lý quy mô 28,54 ha. Gồm 182 căn liền kề, 34 căn biệt thự, 631 căn chung cư cao cấp, trung tâm thương mại 9 tầng, công viên sinh thái, pháp lý sở hữu lâu dài.",
    url: "https://star-averia.vercel.app/",
    siteName: "STAR AVERIA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://star-averia.vercel.app/images/banner-star-averia.png",
        width: 1200,
        height: 630,
        alt: "STAR AVERIA Thái Bình - Đô Thị Ven Sông Trà Lý",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR AVERIA - Khu Đô Thị Ven Sông Trà Lý | Tâm Điểm Đầu Tư",
    description: "Khu đô thị hiện đại ven sông Trà Lý quy mô 28,54 ha. Gồm 182 căn liền kề, 34 căn biệt thự, 631 căn chung cư cao cấp, pháp lý sở hữu lâu dài.",
    images: ["https://star-averia.vercel.app/images/banner-star-averia.png"],
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
    canonical: "https://star-averia.vercel.app/",
  },
  icons: {
    icon: "/images/logo/Star Averia.png",
    shortcut: "/images/logo/Star Averia.png",
    apple: "/images/logo/Star Averia.png",
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
        <link rel="icon" href="/images/logo/Star Averia.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo/Star Averia.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo/Star Averia.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "STAR AVERIA",
              description: "Khu đô thị đẳng cấp ven sông Trà Lý tại Thái Bình. Quy mô 28,54 ha gồm 182 căn liền kề, 34 căn biệt thự, 631 căn chung cư cao cấp, trung tâm thương mại 9 tầng và công viên cảnh quan.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Khu vực ven sông Trà Lý",
                addressLocality: "Thành phố Thái Bình",
                addressRegion: "Thái Bình",
                addressCountry: "VN",
              },
              url: "https://star-averia.vercel.app/",
              telephone: "+84938619339",
              email: "info@staraveria.vn",
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
                        DEFAULT: '#894d20',
                        dark: '#703a17',
                        light: '#a56428'
                      },
                      accent: {
                        gold: '#a56428',
                        'gold-light': '#ffeabf',
                        'gold-dark': '#703a17'
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
