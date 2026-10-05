"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WaveDivider from "@/components/ui/WaveDivider";
import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { newsArticles } from "./newsData";

export default function TinTucPage() {

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" delay={0.05}>
            <div className="text-center">
              <h1 className="font-crimson text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block mb-3 uppercase">
                TIN TỨC DỰ ÁN
              </h1>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
                <div className="w-2 h-2 rounded-full bg-[#a56428]" />
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
              </div>
              <p className="font-exo text-lg text-neutral-gray-600 max-w-2xl mx-auto font-medium">
                Cập nhật thông tin mới nhất về dự án STAR AVENUE và thị trường bất động sản
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <AnimatedSection key={article.id} animation="fadeUp">
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-neutral-100">
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-1 bg-[#894d20] text-white font-exo text-sm font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-3 text-sm text-neutral-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-[#a56428]" />
                        <span className="font-exo font-medium">{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4 text-[#a56428]" />
                        <span className="font-exo font-medium">{article.author}</span>
                      </div>
                    </div>
                    <h3 className="font-crimson text-xl font-bold text-[#703a17] mb-3 line-clamp-2 min-h-[3.5rem] hover:text-[#a56428] transition-colors">
                      <Link href={`/tin-tuc/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="font-exo text-base text-neutral-gray-700 mb-4 line-clamp-3 flex-1 font-medium leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/tin-tuc/${article.id}`}
                      className="inline-flex items-center gap-2 text-[#894d20] font-exo font-semibold hover:text-[#a56428] hover:gap-3 transition-all mt-auto"
                    >
                      Đọc thêm
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
