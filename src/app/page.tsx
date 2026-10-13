"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/home/AboutSection";
import OverviewSection from "@/components/home/OverviewSection";
import MasterPlanSection from "@/components/home/MasterPlanSection";
import LocationSection from "@/components/home/LocationSection";
import ValuesSection from "@/components/home/ValuesSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import InternalAmenitiesSection from "@/components/home/InternalAmenitiesSection";
import ModernPotentialSection from "@/components/home/ModernPotentialSection";
import CTASection from "@/components/home/CTASection";
import { HeroProps } from "@/types";

export default function Home() {
  const heroProps: HeroProps = {
    title: "STAR AVERIA",
    subtitle: "Khu Đô Thị Ven Sông Trà Lý - Đại Lộ Giao Thương, Tâm Điểm Đầu Tư",
    backgroundImage: "/images/banner-star-averia.png",
    ctaButtons: [
      {
        label: "Đăng ký ngay",
        href: "/lien-he",
        variant: "primary",
      },
      {
        label: "Tìm hiểu thêm",
        href: "/gioi-thieu",
        variant: "secondary",
      },
    ],
  };

  return (
    <div className="min-h-screen pt-24 bg-white">
      <Navigation />

      <Hero {...heroProps} />

      {/* About Section - SỐNG SANG */}
      <AboutSection />

      {/* Project Overview Section - TỔNG QUAN DỰ ÁN */}
      <OverviewSection />
      {/* Location Section - VỊ TRÍ */}
      <LocationSection />

      {/* Master Plan Section - TỔNG MẶT BẰNG DỰ ÁN */}
      <MasterPlanSection />



      {/* 12 Investment Values Section - 12 GIÁ TRỊ ĐẦU TƯ */}
      <ValuesSection />

      {/* Park Ecosystem Section - HỆ SINH THÁI CÔNG VIÊN */}
      <EcosystemSection />

      {/* Internal Amenities Section - TIỆN ÍCH NỘI KHU */}
      <InternalAmenitiesSection />

      {/* CTA Section - SẴN SÀNG SỞ HỮU CĂN HỘ MƠ ƯỚC */}
      <CTASection />

      {/* Sản phẩm */}
      <ModernPotentialSection />

      <Footer />
    </div>
  );
}
