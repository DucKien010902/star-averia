"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { newsArticles } from "../newsData";

export default function TinTucDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="font-crimson text-3xl font-bold text-[#703a17] mb-4">Không tìm thấy bài viết</h1>
          <Link href="/tin-tuc" className="text-[#894d20] font-exo font-semibold hover:text-[#a56428]">
            Quay lại trang tin tức
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = newsArticles.findIndex(a => a.id === id);
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <section className="py-16 bg-neutral-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <Link
              href="/tin-tuc"
              className="inline-flex items-center gap-2 text-[#894d20] font-exo font-semibold mb-6 hover:text-[#a56428] hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại tin tức
            </Link>

            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-[#894d20] text-white font-exo text-sm font-semibold rounded-full">
                {article.category}
              </span>
            </div>

            <h1 className="font-crimson text-3xl md:text-4xl lg:text-5xl font-bold text-[#703a17] mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 mb-8 text-neutral-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#a56428]" />
                <span className="font-exo font-medium">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#a56428]" />
                <span className="font-exo font-medium">{article.author}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div
              className="prose prose-lg max-w-none font-exo text-justify text-neutral-gray-800"
              style={{
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-neutral-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {prevArticle && (
              <AnimatedSection animation="fadeUp">
                <Link
                  href={`/tin-tuc/${prevArticle.id}`}
                  className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-neutral-100 transition-all group"
                >
                  <div className="flex items-center gap-2 text-[#894d20] font-exo text-sm font-semibold mb-3">
                    <ArrowLeft className="w-4 h-4" />
                    Bài trước
                  </div>
                  <h3 className="font-crimson text-lg font-bold text-[#703a17] line-clamp-2 group-hover:text-[#a56428] transition-colors">
                    {prevArticle.title}
                  </h3>
                </Link>
              </AnimatedSection>
            )}

            {nextArticle && (
              <AnimatedSection animation="fadeUp">
                <Link
                  href={`/tin-tuc/${nextArticle.id}`}
                  className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-neutral-100 transition-all group text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-[#894d20] font-exo text-sm font-semibold mb-3">
                    Bài tiếp
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="font-crimson text-lg font-bold text-[#703a17] line-clamp-2 group-hover:text-[#a56428] transition-colors">
                    {nextArticle.title}
                  </h3>
                </Link>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
