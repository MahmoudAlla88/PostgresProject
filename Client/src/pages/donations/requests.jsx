

// import React, { useState } from 'react';

// const DonationCard = ({ image, title, description, goal, raised }) => {
//   const progress = (raised / goal) * 100;
//   const [amount, setAmount] = useState('');

//   return (
//     <div className="font-sans" dir="rtl">
//         <h1></h1>
//       <div className="mx-auto max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//         {/* صورة البطاقة */}
//         <div className="w-full h-64 overflow-hidden">
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full h-full object-cover"
//           />
//         </div>
        
//         {/* محتوى البطاقة */}
//         <div className="p-6">
//           <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          
//           <p className="text-gray-600 mb-4">{description}</p>
          
//           {/* معلومات إضافية */}
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-sm text-gray-500">الهدف: {goal} دولار</div>
//             <div className="text-sm font-medium text-green-600">تم جمع: {raised} دولار</div>
//           </div>
          
//           {/* شريط التقدم */}
//           <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
//             <div className="bg-green-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
//           </div>
          
//           {/* إدخال مبلغ التبرع */}
//           <input 
//             type="number" 
//             value={amount} 
//             onChange={(e) => setAmount(e.target.value)} 
//             placeholder="أدخل المبلغ بالدينار الأردني" 
//             className="w-full border border-gray-300 rounded-md p-2 text-right mb-4"
//           />
          
//           {/* زر التبرع */}
//           <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300">
//             تبرع الآن
//           </button>
          
//           {/* خط فاصل وكلمة تفاصيل */}
//           <hr className="my-2 border-gray-300" />
//           <p className="text-center text-gray-500 text-sm">تفاصيل</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DonationSection = () => {
//   const donations = [
//     {
//       image: "/api/placeholder/400/300", 
//       title: "مبادرة الغذاء الصحي", 
//       description: "ساهم في تقديم وجبات للمحتاجين حول العالم.", 
//       goal: 15000, 
//       raised: 7500
//     },
//     {
//       image: "/api/placeholder/400/300", 
//       title: "دعم التعليم", 
//       description: "ساعد في نشر المعرفة من خلال التبرع .", 
//       goal: 8000, 
//       raised: 4500
//     },
//     {
//       image: "/api/placeholder/400/300", 
//       title: "بنك الملابس", 
//       description: "امنح الدفء لمن يحتاج من خلال التبرع .", 
//       goal: 12000, 
//       raised: 6000
//     }
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-center mb-6">المشاريع</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//       {donations.map((donation, index) => (
//         <DonationCard key={index} {...donation} />
//       ))}
//     </div>    </div>
//   );
// };

// export default DonationSection;


import React, { useState } from 'react';

const DonationCard = ({ image, title, description, goal, raised }) => {
  const progress = (raised / goal) * 100;
  const [amount, setAmount] = useState('');

  return (
    <div className="font-sans" dir="rtl">
      <div className="mx-auto max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* صورة البطاقة */}
        <div className="w-full h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* محتوى البطاقة */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {/* معلومات إضافية */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500">الهدف: {goal} دولار</div>
            <div className="text-sm font-medium text-green-600">تم جمع: {raised} دولار</div>
          </div>
          
          {/* شريط التقدم */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          
          {/* إدخال مبلغ التبرع */}
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="أدخل المبلغ بالدينار الأردني" 
            className="w-full border border-gray-300 rounded-md p-2 text-right mb-4"
          />
          
          {/* زر التبرع */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300">
            تبرع الآن
          </button>
          
          {/* خط فاصل وكلمة تفاصيل */}
          <hr className="my-2 border-gray-300" />
          <p className="text-center text-gray-500 text-sm">تفاصيل</p>
        </div>
      </div>
    </div>
  );
};

const Requestcard = () => {
  const donations = [
    { image: "/api/placeholder/400/300", title: "مبادرة الغذاء الصحي", description: "ساهم في تقديم وجبات للمحتاجين حول العالم.", goal: 15000, raised: 7500, category: "طعام" },
    { image: "/api/placeholder/400/300", title: "دعم التعليم", description: "ساعد في نشر المعرفة من خلال التبرع .", goal: 8000, raised: 4500, category: "تعليم" },
    { image: "/api/placeholder/400/300", title: "بنك الملابس", description: "امنح الدفء لمن يحتاج من خلال التبرع .", goal: 12000, raised: 6000, category: "ملابس" }
  ];

  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredDonations = selectedCategory === 'الكل' 
    ? donations 
    : donations.filter(donation => donation.category === selectedCategory);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">المشاريع</h2>
      
      {/* فلتر التصنيف */}
      <div className="flex justify-center mb-6">
        <select 
          className="border border-gray-300 rounded-md p-2 text-gray-700" 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="الكل">الكل</option>
          <option value="طعام">طعام</option>
          <option value="تعليم">تعليم</option>
          <option value="ملابس">ملابس</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filteredDonations.map((donation, index) => (
          <DonationCard key={index} {...donation} />
        ))}
      </div>
    </div>
  );
};

export default Requestcard;
