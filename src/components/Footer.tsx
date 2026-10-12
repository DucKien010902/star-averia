'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { GOOGLE_SHEET_URL } from '@/config';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: 'name' | 'phone', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Vui lòng nhập họ và tên');
      return;
    }
    if (!formData.phone.trim() || !/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      setError('Vui lòng nhập số điện thoại hợp lệ (10-11 số)');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project: "Star eria",
          name: formData.name,
          phone: `'${formData.phone}`,
          email: '',
          demand: 'Đăng ký nhận tin từ Footer',
          status: "Chưa liên hệ",
          submittedAt: new Date().toLocaleString('vi-VN'),
        }),
      });

      setFormData({ name: '', phone: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (err) {
      console.error('Error submitting footer form:', err);
      // Fallback
      setFormData({ name: '', phone: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = {
    phone: '0386 828 888',
    email: 'info@staraveria.vn',
    address: 'Tầng 2, Tòa nhà CT3, Khu ĐTM Nghĩa Đô, Phường Nghĩa Đô, Thành phố Hà Nội, Việt Nam'
  };

  const quickLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Vị trí', href: '/vi-tri' },
    { label: 'Tiện ích', href: '/tien-ich' },
    { label: 'Mặt bằng', href: '/mat-bang' },
    { label: 'Sản phẩm', href: '/bang-gia' },
    { label: 'Tin tức', href: '/tin-tuc' },
  ];

  const socialLinks = [
    { label: 'f', url: 'https://www.facebook.com/thestarcity.vn', name: 'Facebook' },
  ];

  return (
    <footer className="bg-[#FFF4DB] text-gray-800 border-t border-[#a56428]/20 relative">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#a56428] to-transparent opacity-80"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">

          {/* Logo & Office Info (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-block mb-4">
              <div className="select-none">
                <span className="block text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent">
                  STAR AVERIA
                </span>
              </div>
            </Link>

            <div className="space-y-4 font-exo text-base font-medium leading-relaxed">
              <div>
                <h4 className="font-bold text-[#703a17] uppercase tracking-wider mb-2 text-sm">Trụ sở công ty</h4>
                <p>CÔNG TY CỔ PHẦN HẠ TẦNG ĐÔNG HẢI SỐ 1 </p>
                <p className="text-gray-600 mt-1">Tầng 2, Tòa nhà CT3, Khu ĐTM Nghĩa Đô, Phường Nghĩa Đô, Thành phố Hà Nội, Việt Nam.</p>
              </div>


            </div>
          </div>

          {/* Contact & Links (Spans 8 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 lg:pl-12">

            {/* Contact Info */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="font-crimson text-2xl font-bold mb-4 text-[#703a17] tracking-wide">
                Thông tin liên hệ
              </h3>
              <ul className="space-y-3 font-exo text-base font-medium">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#a56428]/10 flex items-center justify-center shrink-0 group-hover:bg-[#a56428]/20 transition-colors">
                    <MapPin className="w-4 h-4 text-[#894d20]" />
                  </div>
                  <span className="leading-relaxed pt-2 text-gray-700">
                    {contactInfo.address}
                  </span>
                </li>

              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-crimson text-2xl font-bold mb-4 text-[#703a17] tracking-wide">
                Liên kết nhanh
              </h3>
              <ul className="space-y-2 font-exo text-base font-medium">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-700 hover:text-[#894d20] transition-all"
                    >
                      <span className="w-0 h-[1px] bg-[#894d20] group-hover:w-4 transition-all duration-300"></span>
                      <span className="transition-colors">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-crimson text-2xl font-bold mb-4 text-[#703a17] tracking-wide">
                Đăng ký nhận tin
              </h3>
              <p className="font-exo text-gray-600 mb-4 text-base font-medium leading-relaxed">
                Để lại thông tin để nhận cập nhật mới nhất về tiến độ dự án và các ưu đãi hấp dẫn.
              </p>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Họ và tên..."
                    disabled={isSubmitting}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#a56428]/50 focus:bg-white transition-all font-exo"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Số điện thoại..."
                    disabled={isSubmitting}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#a56428]/50 focus:bg-white transition-all font-exo"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-600 font-exo">
                    ⚠ {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#a56428] to-[#894d20] hover:from-[#894d20] hover:to-[#703a17] text-white disabled:opacity-50 rounded-lg px-4 py-3 text-sm font-bold font-exo uppercase tracking-wider transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang gửi...</span>
                    </>
                  ) : (
                    <>
                      <span>Đăng ký ngay</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-3 bg-green-50 border border-green-500/20 rounded-lg flex items-center gap-2 mt-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-xs font-exo text-green-800 font-medium">Đăng ký nhận tin thành công!</span>
                  </div>
                )}
              </form>

              <div className="mt-8 pt-8 border-t border-[#a56428]/25">

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 rounded-full border border-[#a56428]/30 flex items-center justify-center text-[#894d20] hover:border-[#894d20] hover:text-[#894d20] transition-all font-exo font-bold text-base font-medium uppercase"
                        aria-label={social.name}
                        title={social.name}
                      >
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#a56428]/10 bg-[#a56428]/5">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-exo text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Star Averia. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#894d20] transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="#" className="hover:text-[#894d20] transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
