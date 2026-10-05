"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Save, Plus, Trash2, Eye, EyeOff } from "lucide-react";

interface PriceItem {
  id: number;
  type: string;
  area: string;
  floors: string;
  publicPrice: string;
  salePrice: string;
  discount: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSalePrices, setShowSalePrices] = useState(false);

  const [priceList, setPriceList] = useState<PriceItem[]>([
    {
      id: 1,
      type: "Shophouse 5x20m",
      area: "100m²",
      floors: "1 trệt + 3 lầu",
      publicPrice: "3.500.000.000",
      salePrice: "3.200.000.000",
      discount: "300 triệu"
    },
    {
      id: 2,
      type: "Shophouse 6x20m",
      area: "120m²",
      floors: "1 trệt + 4 lầu",
      publicPrice: "4.200.000.000",
      salePrice: "3.800.000.000",
      discount: "400 triệu"
    },
    {
      id: 3,
      type: "Nhà liền kề 5x18m",
      area: "90m²",
      floors: "1 trệt + 2 lầu",
      publicPrice: "2.800.000.000",
      salePrice: "2.500.000.000",
      discount: "300 triệu"
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Mật khẩu không đúng!");
    }
  };

  const handleUpdatePrice = (id: number, field: keyof PriceItem, value: string) => {
    setPriceList(priceList.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleAddItem = () => {
    const newId = Math.max(...priceList.map(item => item.id)) + 1;
    setPriceList([...priceList, {
      id: newId,
      type: "Loại mới",
      area: "0m²",
      floors: "1 trệt",
      publicPrice: "0",
      salePrice: "0",
      discount: "0"
    }]);
  };

  const handleDeleteItem = (id: number) => {
    if (confirm("Bạn có chắc muốn xóa mục này?")) {
      setPriceList(priceList.filter(item => item.id !== id));
    }
  };

  const handleSave = () => {
    localStorage.setItem("priceList", JSON.stringify(priceList));
    alert("Đã lưu bảng giá thành công!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="font-crimson text-3xl font-bold text-primary text-center mb-6">
            ĐĂNG NHẬP ADMIN
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-exo text-sm font-semibold text-neutral-gray-700 mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-neutral-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent font-exo"
                placeholder="Nhập mật khẩu admin"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent-gold text-white font-exo font-bold rounded-lg hover:bg-accent-gold-light transition-all"
            >
              Đăng nhập
            </button>
          </form>
          <p className="text-center text-sm text-neutral-gray-600 mt-4 font-exo">
            Mật khẩu mặc định: admin123
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-crimson text-3xl md:text-4xl font-bold text-primary">
                  QUẢN LÝ BẢNG GIÁ
                </h1>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowSalePrices(!showSalePrices)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-light text-white font-exo font-semibold rounded-lg hover:bg-primary-dark transition-all"
                  >
                    {showSalePrices ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    {showSalePrices ? "Ẩn giá sale" : "Hiện giá sale"}
                  </button>
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold text-white font-exo font-bold rounded-lg hover:bg-accent-gold-light transition-all"
                  >
                    <Save className="w-5 h-5" />
                    Lưu thay đổi
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-neutral-gray-200">
                      <th className="text-left py-4 px-4 font-exo font-bold text-primary">Loại</th>
                      <th className="text-left py-4 px-4 font-exo font-bold text-primary">Diện tích</th>
                      <th className="text-left py-4 px-4 font-exo font-bold text-primary">Tầng</th>
                      <th className="text-left py-4 px-4 font-exo font-bold text-primary">Giá công khai</th>
                      {showSalePrices && (
                        <>
                          <th className="text-left py-4 px-4 font-exo font-bold text-accent-gold">Giá sale</th>
                          <th className="text-left py-4 px-4 font-exo font-bold text-accent-gold">Chiết khấu</th>
                        </>
                      )}
                      <th className="text-center py-4 px-4 font-exo font-bold text-primary">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceList.map((item) => (
                      <tr key={item.id} className="border-b border-neutral-gray-100 hover:bg-neutral-gray-50">
                        <td className="py-4 px-4">
                          <input
                            type="text"
                            value={item.type}
                            onChange={(e) => handleUpdatePrice(item.id, 'type', e.target.value)}
                            className="w-full px-3 py-2 border border-neutral-gray-300 rounded-lg font-exo focus:outline-none focus:ring-2 focus:ring-accent-gold"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="text"
                            value={item.area}
                            onChange={(e) => handleUpdatePrice(item.id, 'area', e.target.value)}
                            className="w-full px-3 py-2 border border-neutral-gray-300 rounded-lg font-exo focus:outline-none focus:ring-2 focus:ring-accent-gold"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="text"
                            value={item.floors}
                            onChange={(e) => handleUpdatePrice(item.id, 'floors', e.target.value)}
                            className="w-full px-3 py-2 border border-neutral-gray-300 rounded-lg font-exo focus:outline-none focus:ring-2 focus:ring-accent-gold"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="text"
                            value={item.publicPrice}
                            onChange={(e) => handleUpdatePrice(item.id, 'publicPrice', e.target.value)}
                            className="w-full px-3 py-2 border border-neutral-gray-300 rounded-lg font-exo focus:outline-none focus:ring-2 focus:ring-accent-gold"
                          />
                        </td>
                        {showSalePrices && (
                          <>
                            <td className="py-4 px-4">
                              <input
                                type="text"
                                value={item.salePrice}
                                onChange={(e) => handleUpdatePrice(item.id, 'salePrice', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-accent-gold rounded-lg font-exo font-bold text-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold"
                              />
                            </td>
                            <td className="py-4 px-4">
                              <input
                                type="text"
                                value={item.discount}
                                onChange={(e) => handleUpdatePrice(item.id, 'discount', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-accent-gold rounded-lg font-exo font-bold text-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold"
                              />
                            </td>
                          </>
                        )}
                        <td className="py-4 px-4 text-center">
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-exo font-semibold rounded-lg hover:bg-red-600 transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                onClick={handleAddItem}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-light text-white font-exo font-bold rounded-lg hover:bg-primary-dark transition-all"
              >
                <Plus className="w-5 h-5" />
                Thêm mục mới
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <div className="bg-gradient-to-br from-accent-gold to-accent-gold-light rounded-2xl shadow-xl p-8 text-white">
              <h2 className="font-crimson text-2xl font-bold mb-4">Hướng dẫn sử dụng</h2>
              <ul className="space-y-2 font-exo">
                <li>• <strong>Giá công khai:</strong> Hiển thị trên website cho khách hàng</li>
                <li>• <strong>Giá sale:</strong> Giá ưu đãi dành riêng cho đội sale (chỉ admin thấy)</li>
                <li>• <strong>Chiết khấu:</strong> Mức giảm giá so với giá công khai</li>
                <li>• Nhấn "Lưu thay đổi" để cập nhật bảng giá</li>
                <li>• Dữ liệu được lưu trong trình duyệt (localStorage)</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
