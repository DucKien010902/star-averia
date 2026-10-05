"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/app/tin-tuc/newsData";

export default function NewsSection() {
  const newsItems = newsArticles.slice(0, 3).map((article) => ({
    id: article.id,
    image: article.image,
    date: article.date.replaceAll("/", "."),
    category: article.category.toUpperCase(),
    title: article.title,
    summary: article.excerpt,
    link: `/tin-tuc/${article.id}`,
  }));

  return (
    <section id="news" className="py-8 md:py-10 bg-[#FCFCFB] border-t border-b border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto select-none">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent leading-tight inline-block mb-3 uppercase tracking-wide">
              Tin Tức Dự Án
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>
          </div>
        </AnimatedSection>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {newsItems.map((item) => (
            <AnimatedSection key={item.id} animation="fadeUp">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-xl border border-neutral-200/50 hover:border-accent-gold/20 transition-all duration-500 h-full flex flex-col hover:-translate-y-1.5">

                {/* Image panel */}
                <div className="relative h-56 overflow-hidden flex-shrink-0 bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Block */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Meta Row */}
                    <div className="flex items-center gap-3 mb-4 text-[10px] md:text-xs font-bold font-exo text-[#894d20] tracking-wider select-none">
                      <span>{item.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[#a56428]/50" />
                      <span>{item.category}</span>
                    </div>

                    <h3 className="font-crimson text-lg md:text-xl font-bold text-[#703a17] mb-4 leading-snug tracking-wide group-hover:text-[#a56428] transition-colors duration-300">
                      <Link href={item.link}>
                        {item.title}
                      </Link>
                    </h3>

                    <p className="font-exo text-neutral-600 text-sm md:text-[15px] mb-6 font-medium leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-[#894d20] font-exo text-xs font-bold tracking-[0.2em] hover:text-[#a56428] transition-all group/btn uppercase mt-auto select-none"
                  >
                    ĐỌC THÊM
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </Link>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link
            href="/tin-tuc"
            className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-[#a56428]/60 text-[#894d20] hover:bg-[#894d20] hover:border-[#894d20] hover:text-white font-exo text-xs font-bold rounded-full transition-all duration-300 uppercase tracking-widest shadow-sm select-none"
          >
            <span>Xem tất cả tin tức</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
