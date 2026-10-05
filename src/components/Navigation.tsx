"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "VỊ TRÍ", href: "/vi-tri" },
    {
      label: "MẶT BẰNG",
      href: "/mat-bang",
    },
    {
      label: "TIỆN ÍCH",
      href: "/tien-ich",
      dropdown: [
        { label: "Hệ sinh thái công viên", href: "/tien-ich/he-sinh-thai-cong-vien" },
        { label: "Tiện ích nội khu", href: "/tien-ich" },
      ],
    },
    { label: "SẢN PHẨM", href: "/bang-gia" },
    { label: "TIN TỨC", href: "/tin-tuc" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b bg-white ${scrolled ? "border-[#a56428]/20 shadow-[0_8px_24px_rgba(137,77,32,0.10)] py-2" : "border-[#a56428]/15 py-4"
        }`}
    >
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center group transition-transform duration-300 hover:scale-102"
          >
            <img
              src="/images/logo/Logo Star Avnenue-03.png"
              alt="The Star City Logo"
              className="h-24 lg:h-28 w-auto transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 px-3 xl:px-4 py-[10px] font-exo text-[16px] font-bold tracking-normal transition-all duration-300 uppercase ${pathname.startsWith(item.href) ? "text-[#a56428]" : "text-[#894d20]/80 hover:text-[#a56428]"
                      }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-[#a56428]/20 shadow-[0_10px_30px_rgba(137,77,32,0.15)] py-2 transition-all duration-300 rounded-none opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-6 py-3 text-[16px] font-exo font-bold tracking-normal uppercase transition-all duration-300 ${pathname === subItem.href
                          ? "text-white bg-gradient-to-r from-[#a56428] to-[#894d20] font-bold"
                          : "text-[#894d20]/80 hover:bg-[#ffeabf]/30 hover:text-[#a56428] hover:translate-x-1"
                          }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative px-3 xl:px-4 py-[10px] font-exo text-[16px] font-bold tracking-normal transition-all duration-300 uppercase ${pathname === item.href ? "text-[#a56428]" : "text-[#894d20]/80 hover:text-[#a56428]"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 xl:left-4 xl:right-4 h-[1.5px] bg-[#a56428] transition-transform duration-300 origin-center ${pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </Link>
              ),
            )}

            {/* Premium Rectangular slide-fill CTA Button */}
            <Link
              href="/lien-he"
              className="ml-4 group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-transparent border border-[#a56428]/50 text-[#894d20] font-exo text-[16px] font-bold uppercase tracking-normal hover:text-white transition-colors duration-300 overflow-hidden shadow-sm rounded-xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#a56428] to-[#894d20] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
              <Phone className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Liên hệ</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#894d20] hover:text-[#a56428] transition-colors rounded-none hover:bg-[#ffeabf]/30"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-6 border-t border-[#a56428]/15 space-y-2 bg-white rounded-none px-4 my-2 shadow-2xl border border-[#a56428]/15">
            {navItems.map((item) => (
              <div key={item.label} className="py-1">
                {item.dropdown ? (
                  <>
                    <div
                      className={`flex items-center justify-between px-4 py-[10px] font-exo text-[16px] font-bold tracking-normal uppercase ${pathname === item.href ? "text-[#a56428]" : "text-[#894d20]"
                        }`}
                    >
                      <span>{item.label}</span>
                    </div>
                    <div className="pl-4 space-y-1.5 my-2 border-l border-[#a56428]/25 ml-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-[10px] text-[16px] font-exo font-bold tracking-normal uppercase rounded-none transition-all ${pathname === subItem.href
                            ? "text-[#a56428] bg-[#ffeabf]/30"
                            : "text-[#894d20]/80 hover:text-[#a56428] hover:bg-[#ffeabf]/30"
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-[10px] font-exo text-[16px] font-bold tracking-normal uppercase rounded-none transition-all ${pathname === item.href
                      ? "text-[#a56428] bg-[#ffeabf]/30"
                      : "text-[#894d20]/80 hover:text-[#a56428] hover:bg-[#ffeabf]/30"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/lien-he"
              className="mx-4 mt-6 flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#a56428]/50 text-[#894d20] text-center font-exo text-[16px] font-bold uppercase tracking-normal rounded-xl hover:bg-gradient-to-r hover:from-[#a56428] hover:to-[#894d20] hover:text-white hover:border-transparent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span>Liên hệ</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
