"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, ChevronUp } from "lucide-react";

const PHONE = "0938619339";
const ZALO = "0938619339";
const EMAIL = "info@staravenue.vn";

export default function FloatingContacts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredBackToTop, setHoveredBackToTop] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
        setScrollProgress(progress);
        setShowScroll(window.scrollY > 300);
      } else {
        setScrollProgress(0);
        setShowScroll(false);
      }
    };

    // Run once on load to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttons = [
    {
      id: "zalo",
      label: "Zalo",
      href: `https://zalo.me/${ZALO}`,
      bgColor: "bg-[#0068FF]",
      ringColor: "ring-[#0068FF]/30",
      shadowColor: "shadow-[#0068FF]/40",
      pingColor: "bg-[#0068FF]",
      pingDelay: "animation-delay-0",
      icon: (
        <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
          <rect width="48" height="48" rx="12" fill="#0068FF" />
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            Zalo
          </text>
        </svg>
      ),
    },
    {
      id: "phone",
      label: "Gọi ngay",
      href: `tel:${PHONE}`,
      bgColor: "bg-red-600",
      ringColor: "ring-red-600/30",
      shadowColor: "shadow-red-600/40",
      pingColor: "bg-red-600",
      pingDelay: "[animation-delay:0.4s]",
      icon: <Phone className="w-6 h-6 text-white" strokeWidth={2.2} />,
    },
    {
      id: "email",
      label: "Email",
      href: `mailto:${EMAIL}`,
      bgColor: "bg-[#E2B85C]",
      ringColor: "ring-[#E2B85C]/30",
      shadowColor: "shadow-[#E2B85C]/40",
      pingColor: "bg-[#E2B85C]",
      pingDelay: "[animation-delay:0.8s]",
      icon: <Mail className="w-6 h-6 text-white" strokeWidth={2.2} />,
    },
  ];

  return (
    <div className="fixed bottom-6 right-5 z-[9999] flex flex-col-reverse items-end gap-5">
      {/* Back to Top Button (renders at the bottom of list due to flex-col-reverse) */}
      {showScroll && (
        <div className="relative flex items-center justify-end">
          {/* Tooltip label */}
          <div
            className={`absolute right-[60px] whitespace-nowrap bg-gray-900/90 text-white text-xs font-exo font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none transition-all duration-200 ${
              hoveredBackToTop ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            Lên đầu trang
            {/* Arrow */}
            <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-gray-900/90" />
          </div>

          {/* Bubble Button with dynamic border progress */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setHoveredBackToTop(true)}
            onMouseLeave={() => setHoveredBackToTop(false)}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-lg shadow-neutral-400/20 ring-1 ring-neutral-200/50 text-[#894d20] transition-all duration-300 hover:scale-110 active:scale-95 relative"
            aria-label="Lên đầu trang"
          >
            {/* Scroll Progress SVG Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
              {/* Background circle track */}
              <circle
                cx="24"
                cy="24"
                r="21"
                stroke="#ffeabf"
                strokeWidth="2"
                fill="none"
                className="opacity-45"
              />
              {/* Foreground progress circle */}
              <circle
                cx="24"
                cy="24"
                r="21"
                stroke="#894d20"
                strokeWidth="3.2"
                fill="none"
                strokeDasharray="131.9"
                strokeDashoffset={131.9 - (scrollProgress * 131.9)}
                strokeLinecap="round"
                className="transition-all duration-75 ease-out"
              />
            </svg>
            <ChevronUp className="w-5 h-5 text-[#894d20]" strokeWidth={3} />
          </button>
        </div>
      )}

      {/* Mapped Communication Buttons */}
      {buttons.map((btn, idx) => (
        <div key={btn.id} className="relative flex items-center justify-end">
          {/* Tooltip label */}
          <div
            className={`absolute right-[60px] whitespace-nowrap bg-gray-900/90 text-white text-xs font-exo font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none transition-all duration-200 ${
              hoveredIndex === idx
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2"
            }`}
          >
            {btn.label}
            {/* Arrow */}
            <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-gray-900/90" />
          </div>

          {/* Bubble Button */}
          <a
            href={btn.href}
            target={btn.id === "phone" || btn.id === "email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center ${btn.bgColor} shadow-lg ${btn.shadowColor} ring-4 ${btn.ringColor} transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95`}
            aria-label={btn.label}
          >
            {/* Ping animation ring */}
            <span
              className={`absolute inset-0 rounded-full animate-ping opacity-25 ${btn.pingColor} ${btn.pingDelay}`}
              style={{
                animationDelay:
                  btn.id === "phone" ? "0.4s" : btn.id === "email" ? "0.8s" : "0s",
              }}
            />
            {btn.icon}
          </a>
        </div>
      ))}
    </div>
  );
}
