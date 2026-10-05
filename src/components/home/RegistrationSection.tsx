"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { User, Phone, Mail, MessageSquare } from "lucide-react";

import { GOOGLE_SHEET_URL } from "@/config";

interface FormData {
  name: string;
  phone: string;
  email: string;
  demand: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  demand?: string;
}

export default function RegistrationSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    demand: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (data: FormData): FormErrors => {
    const validationErrors: FormErrors = {};
    if (!data.name || data.name.trim().length < 2) {
      validationErrors.name = "Vui lòng nhập họ và tên (tối thiểu 2 ký tự)";
    }
    if (!data.phone || !/^[0-9]{10,11}$/.test(data.phone.replace(/\s/g, ""))) {
      validationErrors.phone = "Vui lòng nhập số điện thoại hợp lệ (10-11 chữ số)";
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      validationErrors.email = "Vui lòng nhập email hợp lệ";
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
      // Gửi dữ liệu tới Google Sheets Apps Script
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // Tránh lỗi CORS redirect của Google Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project: "Star Avenue",
          name: formData.name,
          phone: `'${formData.phone}`,
          email: formData.email,
          demand: formData.demand || "Đăng ký nhận thông tin",
          status: "Chưa liên hệ",
          submittedAt: new Date().toLocaleString("vi-VN"),
        }),
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", email: "", demand: "" });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Fallback
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", email: "", demand: "" });
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="dang-ky" className="pt-12 md:pt-16 pb-6 md:pb-8 bg-white text-gray-800 relative overflow-hidden">
      {/* Background thin architectural lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-[30%] top-0 bottom-0 w-[1px] bg-[#a56428]/30" />
        <div className="absolute left-[70%] top-0 bottom-0 w-[1px] bg-[#a56428]/30" />
        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-[#a56428]/30" />
      </div>

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        <AnimatedSection animation="fadeUp">
          {/* Section Header */}
          <div className="text-center mb-10 flex flex-col items-center">
            <h2 className="font-crimson text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 bg-gradient-to-r from-[#703a17] via-[#b97330] to-[#703a17] bg-clip-text text-transparent">
              ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN MỚI NHẤT
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a56428]" />
              <div className="w-2 h-2 rounded-full bg-[#a56428]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a56428]" />
            </div>
            <p className="font-exo text-sm md:text-base text-gray-600 max-w-[750px] leading-relaxed">
              Đăng ký nhận báo giá, chính sách chiết khấu mới nhất từ chủ đầu tư, cùng thông tin cập nhật mặt bằng chi tiết của <strong className="text-[#894d20]">STAR AVENUE</strong>.
            </p>
          </div>

          {/* Form Side */}
          <div className="border border-gray-100 p-8 md:p-10 bg-[#FAF9F5] rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 relative">

            {submitSuccess ? (
              <div className="text-center py-12 flex flex-col items-center">
                <span className="w-16 h-16 rounded-full bg-[#a56428]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#894d20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-crimson text-2xl font-semibold mb-3 text-gray-900 uppercase tracking-wider">Đăng ký thành công!</h3>
                <p className="font-exo text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thông tin của quý khách đã được ghi nhận. Chuyên viên tư vấn của chúng tôi sẽ liên hệ trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name input */}
                  <div className="space-y-2 group">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600 group-focus-within:text-[#894d20] transition-colors duration-300">
                      HỌ VÀ TÊN <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#894d20] transition-colors duration-300">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        placeholder="Nhập họ và tên..."
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`w-full pl-11 pr-4 py-3.5 bg-white border ${errors.name ? "border-red-500" : "border-gray-200"
                          } focus:border-[#a56428] focus:outline-none text-gray-800 font-exo placeholder:text-gray-400 transition-all duration-300 font-light text-sm rounded-xl`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 font-exo">{errors.name}</p>}
                  </div>

                  {/* Phone input */}
                  <div className="space-y-2 group">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600 group-focus-within:text-[#894d20] transition-colors duration-300">
                      SỐ ĐIỆN THOẠI <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#894d20] transition-colors duration-300">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        placeholder="Nhập số điện thoại..."
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`w-full pl-11 pr-4 py-3.5 bg-white border ${errors.phone ? "border-red-500" : "border-gray-200"
                          } focus:border-[#a56428] focus:outline-none text-gray-800 font-exo placeholder:text-gray-400 transition-all duration-300 font-light text-sm rounded-xl`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-exo">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email input */}
                <div className="space-y-2 group">
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600 group-focus-within:text-[#894d20] transition-colors duration-300">
                    ĐỊA CHỈ EMAIL
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#894d20] transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      placeholder="Nhập địa chỉ email..."
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full pl-11 pr-4 py-3.5 bg-white border ${errors.email ? "border-red-500" : "border-gray-200"
                        } focus:border-[#a56428] focus:outline-none text-gray-800 font-exo placeholder:text-gray-400 transition-all duration-300 font-light text-sm rounded-xl`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-exo">{errors.email}</p>}
                </div>

                {/* Demand input */}
                <div className="space-y-2 group">
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600 group-focus-within:text-[#894d20] transition-colors duration-300">
                    NHU CẦU TƯ VẤN
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-5 text-gray-400 group-focus-within:text-[#894d20] transition-colors duration-300">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <textarea
                      placeholder="Ví dụ: Shophouse, Villa, Bảng giá..."
                      rows={3}
                      value={formData.demand}
                      onChange={(e) => handleChange("demand", e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 focus:border-[#a56428] focus:outline-none text-gray-800 font-exo placeholder:text-gray-400 transition-all duration-300 resize-none font-light text-sm rounded-xl"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#a56428] to-[#894d20] hover:from-[#894d20] hover:to-[#703a17] text-white font-exo text-xs font-bold tracking-[0.25em] transition-all duration-300 uppercase cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-[0_4px_20px_rgba(137,77,32,0.15)] hover:shadow-[0_6px_25px_rgba(137,77,32,0.35)] hover:scale-[1.01] active:scale-[0.99] border-none"
                >
                  {isSubmitting ? "ĐANG GỬI..." : "ĐĂNG KÝ NGAY"}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
