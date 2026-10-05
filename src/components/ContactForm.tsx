'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from './ui/AnimatedSection';
import Button from './ui/Button';
import { FormData, FormErrors } from '@/types';
import { User, Phone, Mail, CheckCircle, MessageSquare, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { GOOGLE_SHEET_URL } from '@/config';

interface FormDataExtended {
  name: string;
  phone: string;
  email: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataExtended>({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (data: FormDataExtended): FormErrors => {
    const validationErrors: FormErrors = {};

    if (!data.name || data.name.trim().length < 2) {
      validationErrors.name = 'Vui lòng nhập tên (tối thiểu 2 ký tự)';
    }

    if (!data.phone || !/^[0-9]{10,11}$/.test(data.phone.replace(/\s/g, ''))) {
      validationErrors.phone = 'Vui lòng nhập số điện thoại hợp lệ (10-11 số)';
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      validationErrors.email = 'Vui lòng nhập email hợp lệ';
    }

    return validationErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project: "Star Avenue",
          name: formData.name,
          phone: `'${formData.phone}`,
          email: formData.email,
          demand: 'Liên hệ tư vấn chi tiết',
          status: "Chưa liên hệ",
          submittedAt: new Date().toLocaleString('vi-VN'),
        }),
      });

      setFormData({ name: '', phone: '', email: '' });
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormData({ name: '', phone: '', email: '' });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F5] via-white to-[#FFF6E3] pt-32 md:pt-40 relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#ffeabf]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-[#a56428]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <AnimatedSection animation="fadeUp" delay={0.05}>
          <div className="text-center mb-6 max-w-7xl mx-auto">
            <h1 className="font-crimson text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent mb-4 uppercase tracking-wide">
              Đăng ký nhận thông tin
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>
            <p className="font-exo text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Nhận ngay bảng giá mới nhất, chính sách bán hàng ưu đãi đặc quyền và tư vấn chuyên sâu 1-1 từ chủ đầu tư.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-6">
          {/* Left Column: Contact Cards & Google Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimatedSection animation="fadeUp">
              {/* Phone & Email side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Card */}
                <a
                  href="tel:0938619339"
                  className="group flex flex-col items-center text-center gap-3 bg-white text-black border border-[#a56428]/15 rounded-2xl p-5 hover:border-[#a56428]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#a56428]/10 flex items-center justify-center shrink-0 text-[#894d20] group-hover:bg-gradient-to-br group-hover:from-[#a56428] group-hover:to-[#894d20] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="block font-exo text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Hotline 24/7</span>
                    <span className="block font-exo text-sm sm:text-base font-bold text-[#703a17] transition-colors">
                      0386 828 888
                    </span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:info@staravenue.vn"
                  className="group flex flex-col items-center text-center gap-3 bg-white text-black border border-[#a56428]/15 rounded-2xl p-5 hover:border-[#a56428]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#a56428]/10 flex items-center justify-center shrink-0 text-[#894d20] group-hover:bg-gradient-to-br group-hover:from-[#a56428] group-hover:to-[#894d20] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="w-full overflow-hidden">
                    <span className="block font-exo text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Email liên hệ</span>
                    <span className="block font-exo text-xs sm:text-sm font-bold text-[#703a17] transition-colors truncate px-1" title="info@staravenue.vn">
                      info@staravenue.vn
                    </span>
                  </div>
                </a>
              </div>
            </AnimatedSection>

            {/* Google Map Card */}
            <AnimatedSection animation="fadeUp" className="flex-1 flex flex-col h-full min-h-[350px]">
              <div className="bg-white rounded-3xl p-4 shadow-md border border-[#a56428]/10 flex flex-col justify-between h-full flex-1">
                <div className="relative w-full flex-1 min-h-[220px] rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.954427097036!2d105.78913442020814!3d21.050290065982683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7ab07df9fd%3A0xa4894ce03534c510!2zQ2h1bmcgY8awIENUMyBOZ2jEqWEgxJDDtA!5e0!3m2!1svi!2s!4v1783054750104!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Vị trí văn phòng dự án STAR AVENUE"
                  />
                </div>
                <div className="mt-3 flex items-start gap-2.5 px-1">
                  <MapPin className="w-5 h-5 text-[#894d20] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-exo text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Địa chỉ VP dự án</span>
                    <span className="block font-exo text-xs text-gray-700 font-medium leading-relaxed mt-0.5">
                      Tầng 2, Tòa nhà CT3, Khu ĐTM Nghĩa Đô, Phường Nghĩa Đô, Thành phố Hà Nội, Việt Nam
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <AnimatedSection animation="fadeUp">
              <div className="bg-white rounded-3xl shadow-md border border-[#a56428]/10 p-8 md:p-10 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#a56428]/10 flex items-center justify-center text-[#894d20] shadow-sm">
                    <MessageSquare className="w-6 h-6 text-[#894d20]" />
                  </div>
                  <div>
                    <h3 className="font-crimson text-2xl font-bold text-[#703a17]">
                      Gửi yêu cầu tư vấn
                    </h3>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block font-exo font-semibold text-[#703a17] text-sm mb-1.5">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a56428]/60" />
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl border font-exo text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#a56428]/35 ${errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-200 focus:border-[#a56428]'
                          }`}
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500 font-exo flex items-center gap-1">
                        <span>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block font-exo font-semibold text-[#703a17] text-sm mb-1.5">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a56428]/60" />
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl border font-exo text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#a56428]/35 ${errors.phone
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-200 focus:border-[#a56428]'
                          }`}
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500 font-exo flex items-center gap-1">
                        <span>⚠</span> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block font-exo font-semibold text-[#703a17] text-sm mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a56428]/60" />
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl border font-exo text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#a56428]/35 ${errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-200 focus:border-[#a56428]'
                          }`}
                        placeholder="Nhập địa chỉ email"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 font-exo flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    className="w-full mt-4 justify-center"
                    icon
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
                  </Button>

                  {/* Success Message */}
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <div>
                          <p className="font-exo text-emerald-800 font-semibold text-sm">
                            Đăng ký thành công!
                          </p>
                          <p className="font-exo text-xs text-emerald-600 mt-0.5">
                            Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Privacy Note */}
                  <p className="text-[11px] text-gray-400 font-exo text-center leading-relaxed">
                    Thông tin của bạn được bảo mật theo chính sách bảo mật của chúng tôi
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
