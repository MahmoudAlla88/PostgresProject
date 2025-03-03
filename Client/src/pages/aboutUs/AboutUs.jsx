// import React, { useEffect, useState } from 'react';

// const AboutUs = () => {
//   const [isVisible, setIsVisible] = useState({
//     mission: false,
//     story: false,
//     process: false,
//     distribution: false,
//     values: false,
//     join: false,
//     contact: false
//   });

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [formStatus, setFormStatus] = useState({
//     submitted: false,
//     error: false
//   });

//   useEffect(() => {
//     // Set each section to visible with a delay
//     const timeout1 = setTimeout(() => setIsVisible(prev => ({ ...prev, mission: true })), 300);
//     const timeout2 = setTimeout(() => setIsVisible(prev => ({ ...prev, story: true })), 600);
//     const timeout3 = setTimeout(() => setIsVisible(prev => ({ ...prev, process: true })), 900);
//     const timeout4 = setTimeout(() => setIsVisible(prev => ({ ...prev, distribution: true })), 1200);
//     const timeout5 = setTimeout(() => setIsVisible(prev => ({ ...prev, values: true })), 1500);
//     const timeout6 = setTimeout(() => setIsVisible(prev => ({ ...prev, join: true })), 1800);
//     const timeout7 = setTimeout(() => setIsVisible(prev => ({ ...prev, contact: true })), 2100);

//     return () => {
//       clearTimeout(timeout1);
//       clearTimeout(timeout2);
//       clearTimeout(timeout3);
//       clearTimeout(timeout4);
//       clearTimeout(timeout5);
//       clearTimeout(timeout6);
//       clearTimeout(timeout7);
//     };
//   }, []);

//   // Animation classes
//   const getAnimationClass = (section) => {
//     return isVisible[section] 
//       ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out' 
//       : 'opacity-0 translate-y-10 transition-all duration-1000 ease-out';
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted:', formData);
    
//     // Simulate successful submission
//     setFormStatus({ submitted: true, error: false });
    
//     // Reset form after submission
//     setFormData({ name: '', email: '', message: '' });
    
//     // Reset form status after 5 seconds
//     setTimeout(() => {
//       setFormStatus({ submitted: false, error: false });
//     }, 5000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4 md:p-6 lg:p-8 text-center shadow-lg">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold animate-pulse">من نحن</h1>
//       </header>

//       <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
//         {/* Mission Section */}
//         <section className={`mb-12 ${getAnimationClass('mission')}`}>
//           <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 border-r-4 border-blue-600 pr-3">رسالتنا</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//             <p className="text-right">
//               نحن منصة خيرية مخصصة لتوصيل المتبرعين الكرام بالأشخاص المحتاجين. هدفنا توفير الاحتياجات الأساسية من ملابس وطعام وكتب لكل من هم بحاجة إليها في مجتمعنا. نحن نؤمن بأن لكل إنسان الحق في الحصول على المأكل والملبس الكريم والتعليم المناسب.
//             </p>
//           </div>
//         </section>

//         {/* Story Section */}
//         <section className={`mb-12 ${getAnimationClass('story')}`}>
//           <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 border-r-4 border-blue-600 pr-3">قصتنا</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//             <p className="text-right mb-4">
//               بدأت رحلتنا من فكرة بسيطة: إيجاد طريقة فعّالة لمساعدة الأشخاص المحتاجين وسد الفجوة بين وفرة الموارد عند البعض ونقصها عند الآخرين. لقد لاحظنا كمية الملابس والطعام والكتب التي تُهدر سنوياً، بينما يعاني الكثيرون من نقص في هذه الضروريات الأساسية.
//             </p>
//             <p className="text-right">
//               منذ تأسيسنا في عام 2020، نجحنا في مساعدة آلاف العائلات وتوزيع مئات الأطنان من المواد الغذائية والملابس والكتب على المحتاجين في مختلف المناطق.
//             </p>
//           </div>
//         </section>

//         {/* How We Work Section */}
//         <section className={`mb-12 ${getAnimationClass('process')}`}>
//           <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 border-r-4 border-blue-600 pr-3">كيف نعمل</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
//               <div className="flex justify-center mb-3">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">١</div>
//               </div>
//               <h3 className="text-lg font-semibold text-center mb-2">جمع التبرعات</h3>
//               <p className="text-center text-sm">نستقبل تبرعات الملابس والطعام والكتب من الأفراد والشركات والمؤسسات.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
//               <div className="flex justify-center mb-3">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">٢</div>
//               </div>
//               <h3 className="text-lg font-semibold text-center mb-2">الفرز والتنظيم</h3>
//               <p className="text-center text-sm">يقوم فريقنا من المتطوعين بفرز التبرعات وتنظيمها وضمان جودتها.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
//               <div className="flex justify-center mb-3">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">٣</div>
//               </div>
//               <h3 className="text-lg font-semibold text-center mb-2">التوزيع</h3>
//               <p className="text-center text-sm">نتعاون مع جمعيات محلية لضمان وصول التبرعات إلى من هم في أمس الحاجة إليها.</p>
//             </div>
//           </div>
//         </section>

//         {/* Distribution Section */}
//         <section className={`mb-12 ${getAnimationClass('distribution')}`}>
//           <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 border-r-4 border-blue-600 pr-3">ماذا نوزع</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <div className="bg-blue-500 text-white text-center py-3">
//                 <h3 className="text-lg font-bold">الملابس</h3>
//               </div>
//               <div className="p-5">
//                 <ul className="text-right space-y-2">
//                   <li className="flex items-center justify-end">
//                     <span>ملابس للأطفال بجميع الأعمار</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-blue-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>ملابس للنساء والرجال</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-blue-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>ملابس موسمية وشتوية</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-blue-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>أحذية وحقائب</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-blue-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>بطانيات ومفروشات</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-blue-400 ml-2"></span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <div className="bg-green-500 text-white text-center py-3">
//                 <h3 className="text-lg font-bold">الطعام والغذاء</h3>
//               </div>
//               <div className="p-5">
//                 <ul className="text-right space-y-2">
//                   <li className="flex items-center justify-end">
//                     <span>المواد الغذائية الأساسية</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-green-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>المعلبات والأغذية طويلة الصلاحية</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-green-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>حليب وأطعمة الأطفال</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-green-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>الخضروات والفواكه الطازجة</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-green-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>وجبات جاهزة للعائلات المحتاجة</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-green-400 ml-2"></span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* New Books Section */}
//             <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <div className="bg-purple-500 text-white text-center py-3">
//                 <h3 className="text-lg font-bold">الكتب والقرطاسية</h3>
//               </div>
//               <div className="p-5">
//                 <ul className="text-right space-y-2">
//                   <li className="flex items-center justify-end">
//                     <span>كتب تعليمية للأطفال والطلاب</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-purple-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>كتب ثقافية ومعرفية متنوعة</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-purple-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>قصص للأطفال والناشئة</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-purple-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>أدوات مدرسية وقرطاسية</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-purple-400 ml-2"></span>
//                   </li>
//                   <li className="flex items-center justify-end">
//                     <span>مستلزمات الرسم والفنون</span>
//                     <span className="inline-block w-3 h-3 rounded-full bg-purple-400 ml-2"></span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Book Distribution Impact */}
//           <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//             <h3 className="text-lg font-semibold text-purple-600 mb-3 text-right">أثر توزيع الكتب</h3>
//             <p className="text-right mb-4">
//               نؤمن بأن الكتب ليست مجرد وسيلة للتعليم، بل هي نافذة لعالم أوسع من الفرص. من خلال توزيع الكتب والقرطاسية، نساهم في:
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-purple-50 p-4 rounded-lg border-r-2 border-purple-300">
//                 <p className="text-right text-sm">تعزيز التعليم وتوفير فرص التعلم لجميع الفئات العمرية</p>
//               </div>
//               <div className="bg-purple-50 p-4 rounded-lg border-r-2 border-purple-300">
//                 <p className="text-right text-sm">مساعدة الطلاب على متابعة دراستهم بتوفير المستلزمات المدرسية</p>
//               </div>
//               <div className="bg-purple-50 p-4 rounded-lg border-r-2 border-purple-300">
//                 <p className="text-right text-sm">نشر الثقافة والمعرفة في المجتمعات المحتاجة</p>
//               </div>
//               <div className="bg-purple-50 p-4 rounded-lg border-r-2 border-purple-300">
//                 <p className="text-right text-sm">دعم الإبداع الفني والمهارات الحياتية من خلال الكتب المتخصصة</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section className={`mb-12 ${getAnimationClass('values')}`}>
//           <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 border-r-4 border-blue-600 pr-3">قيمنا</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
//               <h3 className="text-lg font-semibold text-blue-600 mb-2 text-right">الكرامة</h3>
//               <p className="text-right text-sm">نؤمن بأن كل شخص يستحق أن يُعامل بكرامة واحترام.</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
//               <h3 className="text-lg font-semibold text-blue-600 mb-2 text-right">الشفافية</h3>
//               <p className="text-right text-sm">نلتزم بالشفافية الكاملة في كل عملياتنا ومصاريفنا.</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
//               <h3 className="text-lg font-semibold text-blue-600 mb-2 text-right">التعاون</h3>
//               <p className="text-right text-sm">نؤمن بقوة العمل الجماعي والتعاون مع مختلف الجهات لتحقيق أقصى تأثير ممكن.</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
//               <h3 className="text-lg font-semibold text-blue-600 mb-2 text-right">الاستدامة</h3>
//               <p className="text-right text-sm">نسعى لإيجاد حلول مستدامة لمشكلة الفقر والحاجة في مجتمعنا.</p>
//             </div>
//           </div>
//         </section>

//         {/* Join Us Section */}
//         <section className={`mb-12 ${getAnimationClass('join')}`}>
//           <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 border-r-4 border-blue-600 pr-3">انضم إلينا</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//             <p className="text-right mb-3">هناك عدة طرق للمساهمة في مهمتنا:</p>
//             <ul className="list-disc list-inside text-right space-y-2">
//               <li className="hover:text-blue-600 transition-colors duration-200">التبرع بالملابس أو الطعام أو الكتب</li>
//               <li className="hover:text-blue-600 transition-colors duration-200">التطوع معنا في مراكز الفرز أو التوزيع</li>
//               <li className="hover:text-blue-600 transition-colors duration-200">المساهمة المالية لدعم عملياتنا اللوجستية</li>
//               <li className="hover:text-blue-600 transition-colors duration-200">نشر الوعي حول قضية الاحتياج في مجتمعنا</li>
//               <li className="hover:text-blue-600 transition-colors duration-200">تنظيم حملات جمع الكتب في المدارس والجامعات</li>
//             </ul>
//           </div>
//         </section>

//         {/* Contact Section with Form */}
//         <section className={`mb-12 ${getAnimationClass('contact')}`}>
//           <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 border-r-4 border-blue-600 pr-3">اتصل بنا</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Contact Information */}
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//               <p className="text-right mb-3">لديك أسئلة أو ترغب في المشاركة؟ يمكنك التواصل معنا من خلال:</p>
//               <div className="space-y-2 text-right">
//                 <p className="hover:text-blue-600 transition-colors duration-200">البريد الإلكتروني: info@donationsite.org</p>
//                 <p className="hover:text-blue-600 transition-colors duration-200">الهاتف: +xxx-xxxx-xxxx</p>
//                 <p className="hover:text-blue-600 transition-colors duration-200">العنوان: شارع المساعدة، المدينة، البلد</p>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-lg font-semibold text-blue-600 mb-4 text-right">راسلنا مباشرة</h3>
              
//               {formStatus.submitted && (
//                 <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-right">
//                   تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
//                 </div>
//               )}
              
//               {formStatus.error && (
//                 <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-right">
//                   حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.
//                 </div>
//               )}
              
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-right mb-1 text-gray-700">الاسم</label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     name="name" 
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full p-2 border border-gray-300 rounded-md text-right focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//                     placeholder="أدخل اسمك الكامل"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-right mb-1 text-gray-700">البريد الإلكتروني</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full p-2 border border-gray-300 rounded-md text-right focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//                     placeholder="example@email.com"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-right mb-1 text-gray-700">رسالتك</label>
//                   <textarea 
//                     id="message" 
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows="4" 
//                     className="w-full p-2 border border-gray-300 rounded-md text-right focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//                     placeholder="اكتب رسالتك هنا..."
//                   ></textarea>
//                 </div>
                
//                 <div className="flex justify-end">
//                   <button 
//                     type="submit" 
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                   >
//                     إرسال الرسالة
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </section>

//         <footer className="text-center mt-8 text-sm text-gray-600 border-t pt-4">
//           <p>نتطلع للعمل معاً من أجل مجتمع أكثر تكافلاً وتعاوناً.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React, { useEffect, useState } from 'react';
import { Heart, Users, BookOpen } from 'lucide-react';
import axios from 'axios';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    mission: false,
    story: false,
    process: false,
    distribution: false,
    values: false,
    join: false,
    contact: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  useEffect(() => {
    // Set each section to visible with a delay
    const timeout1 = setTimeout(() => setIsVisible(prev => ({ ...prev, mission: true })), 300);
    const timeout2 = setTimeout(() => setIsVisible(prev => ({ ...prev, story: true })), 600);
    const timeout3 = setTimeout(() => setIsVisible(prev => ({ ...prev, process: true })), 900);
    const timeout4 = setTimeout(() => setIsVisible(prev => ({ ...prev, distribution: true })), 1200);
    const timeout5 = setTimeout(() => setIsVisible(prev => ({ ...prev, values: true })), 1500);
    const timeout6 = setTimeout(() => setIsVisible(prev => ({ ...prev, join: true })), 1800);
    const timeout7 = setTimeout(() => setIsVisible(prev => ({ ...prev, contact: true })), 2100);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
    };
  }, []);

  // Animation classes
  const getAnimationClass = (section) => {
    return isVisible[section] 
      ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out' 
      : 'opacity-0 translate-y-10 transition-all duration-1000 ease-out';
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await axios.post('http://localhost:4000/api/contact-messages', {
        name: formData.name,
        email: formData.email,
        description: formData.message,
      });
  
      if (response.status === 200) {
        setFormStatus({ submitted: true, error: false });
        setFormData({ name: '', email: '', message: '' }); // إعادة تعيين النموذج
      }setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('حدث خطأ أثناء إرسال الرسالة:', error);
      setFormStatus({ submitted: false, error: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans overflow-x-hidden" dir="rtl">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gradient-to-b from-blue-900 to-indigo-900 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">من نحن</h1>
          <p className="text-xl md:text-2xl">تعرف على مهمتنا وقيمنا وطريقة عملنا</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-24 bg-gradient-to-b from-gray-50 to-white ${getAnimationClass('mission')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              رسالتنا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              نحن منصة خيرية مخصصة لتوصيل المتبرعين الكرام بالأشخاص المحتاجين. هدفنا توفير الاحتياجات الأساسية من ملابس وطعام وكتب لكل من هم بحاجة إليها في مجتمعنا. نحن نؤمن بأن لكل إنسان الحق في الحصول على المأكل والملبس الكريم والتعليم المناسب.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 ${getAnimationClass('story')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              قصتنا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              بدأت رحلتنا من فكرة بسيطة: إيجاد طريقة فعّالة لمساعدة الأشخاص المحتاجين وسد الفجوة بين وفرة الموارد عند البعض ونقصها عند الآخرين. لقد لاحظنا كمية الملابس والطعام والكتب التي تُهدر سنوياً، بينما يعاني الكثيرون من نقص في هذه الضروريات الأساسية.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              منذ تأسيسنا في عام 2020، نجحنا في مساعدة آلاف العائلات وتوزيع مئات الأطنان من المواد الغذائية والملابس والكتب على المحتاجين في مختلف المناطق.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className={`py-24 bg-gradient-to-b from-gray-50 to-white ${getAnimationClass('process')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              كيف نعمل
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">١</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">جمع التبرعات</h3>
              <p className="text-gray-600">نستقبل تبرعات الملابس والطعام والكتب من الأفراد والشركات والمؤسسات.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">٢</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">الفرز والتنظيم</h3>
              <p className="text-gray-600">يقوم فريقنا من المتطوعين بفرز التبرعات وتنظيمها وضمان جودتها.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">٣</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">التوزيع</h3>
              <p className="text-gray-600">نتعاون مع جمعيات محلية لضمان وصول التبرعات إلى من هم في أمس الحاجة إليها.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 ${getAnimationClass('values')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              قيمنا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-xl font-bold text-blue-600 mb-4">الكرامة</h3>
              <p className="text-gray-600">نؤمن بأن كل شخص يستحق أن يُعامل بكرامة واحترام.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-xl font-bold text-blue-600 mb-4">الشفافية</h3>
              <p className="text-gray-600">نلتزم بالشفافية الكاملة في كل عملياتنا ومصاريفنا.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-xl font-bold text-blue-600 mb-4">التعاون</h3>
              <p className="text-gray-600">نؤمن بقوة العمل الجماعي والتعاون مع مختلف الجهات لتحقيق أقصى تأثير ممكن.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-xl font-bold text-blue-600 mb-4">الاستدامة</h3>
              <p className="text-gray-600">نسعى لإيجاد حلول مستدامة لمشكلة الفقر والحاجة في مجتمعنا.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className={`py-24 bg-gradient-to-b from-gray-50 to-white ${getAnimationClass('join')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              انضم إلينا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">هناك عدة طرق للمساهمة في مهمتنا:</p>
            <ul className="list-disc list-inside text-right space-y-2">
              <li className="hover:text-blue-600 transition-colors duration-200">التبرع بالملابس أو الطعام أو الكتب</li>
              <li className="hover:text-blue-600 transition-colors duration-200">التطوع معنا في مراكز الفرز أو التوزيع</li>
              <li className="hover:text-blue-600 transition-colors duration-200">المساهمة المالية لدعم عملياتنا اللوجستية</li>
              <li className="hover:text-blue-600 transition-colors duration-200">نشر الوعي حول قضية الاحتياج في مجتمعنا</li>
              <li className="hover:text-blue-600 transition-colors duration-200">تنظيم حملات جمع الكتب في المدارس والجامعات</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 ${getAnimationClass('contact')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              اتصل بنا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-lg text-gray-700 mb-6">لديك أسئلة أو ترغب في المشاركة؟ يمكنك التواصل معنا من خلال:</p>
              <div className="space-y-4">
                <p className="text-gray-600 hover:text-blue-600 transition-colors duration-200">البريد الإلكتروني: info@donationsite.org</p>
                <p className="text-gray-600 hover:text-blue-600 transition-colors duration-200">الهاتف: +xxx-xxxx-xxxx</p>
                <p className="text-gray-600 hover:text-blue-600 transition-colors duration-200">العنوان: شارع المساعدة، المدينة، البلد</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-blue-600 mb-6">راسلنا مباشرة</h3>
              {formStatus.submitted && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-right">
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}
              {formStatus.error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-right">
                  حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-right mb-1 text-gray-700">الاسم</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-right focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-right mb-1 text-gray-700">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-right focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-right mb-1 text-gray-700">رسالتك</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4" 
                    className="w-full p-2 border border-gray-300 rounded-md text-right focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );};

  export default AboutUs;