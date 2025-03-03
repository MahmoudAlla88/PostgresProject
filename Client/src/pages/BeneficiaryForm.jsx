import { useState } from "react";
import { Link } from "react-router-dom";

export default function BeneficiaryForm() {
  const [formData, setFormData] = useState({
    statusPerson: "",  // Ensure this matches the input field
    address: "",
    type: "",
    needs: {
      food: false,
      books: false,
      clothes: false,
    },
    document: null,
    status: "قيد الانتظار",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        needs: { ...prev.needs, [name]: checked },
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, document: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.statusPerson) newErrors.statusPerson = "الحالة مطلوبة";
    if (!formData.address) newErrors.address = "العنوان مطلوب";
    if (!formData.type) newErrors.type = "نوع المستفيد مطلوب";
    if (!formData.description) newErrors.description = "الوصف مطلوب";
    if (!formData.document) {
      newErrors.document = "يجب تحميل ملف PDF";
    } else if (formData.document.type !== "application/pdf") {
      newErrors.document = "يجب تحميل ملف بصيغة PDF فقط";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">نموذج المستفيد</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Status */}
        <div>
          <label className="block font-medium">الحالة</label>
          <select name="statusPerson" value={formData.statusPerson} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">اختر الحالة</option>
            <option value="needy">محتاج</option>
            <option value="orphan">يتيم</option>
            <option value="disabled">ذو احتياجات خاصة</option>
          </select>
          {errors.statusPerson && <p className="text-red-500 text-sm">{errors.statusPerson}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium">العنوان</label>
          <input name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">وصف</label>
          <input name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Type */}
        <div>
          <label className="block font-medium">نوع المستفيد</label>
          <select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">اختر النوع</option>
            <option value="individual">فرد</option>
            <option value="family">عائلة</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>

        {/* Needs */}
        <div>
          <label className="block font-medium">الاحتياجات</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="checkbox" name="food" checked={formData.needs.food} onChange={handleChange} className="mr-2" /> طعام
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="books" checked={formData.needs.books} onChange={handleChange} className="mr-2" /> كتب
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="clothes" checked={formData.needs.clothes} onChange={handleChange} className="mr-2" /> ملابس
            </label>
          </div>
        </div>

        {/* Document Upload */}
        <div>
          <label className="block font-medium">تحميل المستندات (PDF فقط)</label>
          <input type="file" name="document" onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.document && <p className="text-red-500 text-sm">{errors.document}</p>}
        </div>

        {/* Submit Button */}
        <Link to="/"><button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">إرسال</button></Link>
      </form>
    </div>
  );
}