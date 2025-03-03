import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Heart,
  Users,
  BookOpen,
} from "lucide-react";

// Mock data for slides/campaigns
const slides = [
  {
    id: 1,
    title: "معاً لدعم الأسر المحتاجة",
    subtitle: "ساهم في تغيير حياة العائلات الفقيرة من خلال تبرعك",
    image:
      "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/donation-box-dubai-ar-Cover-AR-27-02-2025.jpg",
  },
  {
    id: 2,
    title: "حملة التعليم للجميع",
    subtitle: "ساعدنا في توفير الكتب واللوازم المدرسية للطلاب المحتاجين",
    image:
      "https://chafaf.ma/wp-content/uploads/2024/09/fourniture-scolaire-3.webp",
  },
  {
    id: 3,
    title: "مبادرة الغذاء الصحي",
    subtitle: "نهدف إلى توفير وجبات صحية للأسر ذات الدخل المحدود",
    image:
      "https://www.mobtada.com/resize?src=uploads/images/2017/10/473269.jpg&w=750&h=450&zc=0&q=70",
  },
];

// FAQs data
const faqs = [
  {
     id: 1,
     question: "كيف يمكنني التبرع لمشاريعكم؟",
     answer:
       "يمكنك التبرع من خلال موقعنا الإلكتروني باستخدام بطاقة الائتمان أو المحفظة الإلكترونية، أو من خلال التحويل البنكي المباشر. للتفاصيل كاملة يرجى الاتصال بفريق خدمة المتبرعين.",
   },
   {
     id: 2,
     question: "كيف يتم توزيع التبرعات؟",
     answer:
       "يتم توزيع التبرعات وفقًا للحملة التي اخترتها. نلتزم بالشفافية التامة ونقدم تقارير دورية عن كيفية استخدام التبرعات ووصولها للمستفيدين.",
   },
   {
     id: 3,
     question: "هل يمكنني التطوع معكم؟",
     answer:
       "نعم، نرحب بالمتطوعين دائمًا! يمكنك الانضمام إلى فريقنا من خلال ملء نموذج التطوع في صفحة 'انضم إلينا' واختيار المجال الذي ترغب في التطوع فيه.",
   },
   {
     id: 4,
     question: "هل يمكنني التبرع بالملابس؟",
     answer:
       "نعم، نقبل التبرعات بالملابس الجديدة أو المستعملة في حالة جيدة. يمكنك زيارة مراكز جمع التبرعات الخاصة بنا أو ترتيب شحن الملابس إلى عنواننا.",
   },
   {
     id: 5,
     question: "هل تقدمون خدمات للمحتاجين في مناطق معينة؟",
     answer:
       "نعم، نقدم خدماتنا في عدة مناطق. يمكنك العثور على تفاصيل الحملة الحالية والوجهات التي نغطيها من خلال صفحة 'مشاريعنا'.",
   },
   {
     id: 6,
     question: "هل يمكنني التبرع بالطعام؟",
     answer:
       "نعم، نرحب بتبرعات الطعام غير القابل للتلف. يرجى التأكد من أن الطعام لا يتطلب تبريدًا أو معالجة خاصة. يمكنك التبرع من خلال أقرب نقطة جمع أو الاتصال بنا لترتيب عملية التبرع.",
   },
   {
     id: 7,
     question: "هل توجد طرق أخرى للتبرع بخلاف المال؟",
     answer:
       "نعم، يمكن التبرع بالوقت، المهارات، والموارد الأخرى. إذا كنت ترغب في التبرع بخدمة معينة أو مهارة، يمكنك الاتصال بنا لمعرفة كيف يمكن أن تساهم.",
   },
   {
     id: 8,
     question: "كيف يمكنني متابعة تأثير تبرعاتي؟",
     answer:
       "نحن نقدم تقارير دورية عبر البريد الإلكتروني أو على موقعنا الإلكتروني حول كيفية توزيع التبرعات ومشاريعنا الحالية. يمكنك أيضًا الاشتراك في نشراتنا الإخبارية لمتابعة آخر المستجدات.",
   },
   {
     id: 9,
     question: "هل يمكنني تخصيص تبرعاتي لمشروع معين؟",
     answer:
       "نعم، يمكنك تخصيص تبرعاتك لأي من مشاريعنا المحددة. عند التبرع، اختر المشروع الذي ترغب في دعمه وسنقوم بتوجيه التبرع إلى ذلك المشروع مباشرة.",
   },
   {
     id: 10,
     question: "هل يمكنني التبرع للمشاريع على أساس شهري؟",
     answer:
       "نعم، نقدم خيار التبرع الشهري للمشاريع المستمرة. يمكنك تحديد المبلغ الذي ترغب في التبرع به بشكل دوري من خلال موقعنا الإلكتروني.",
   },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  // const [isVisible, setIsVisible] = useState(false);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle FAQ accordion
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // Navigate slider
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="font-sans overflow-x-hidden" dir="rtl">
      {/* Hero Section with improved slider */}
      <section className="relative w-full h-150 bg-gradient-to-b from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Dynamic Slider */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg transform transition-all duration-700 ease-out animate-fade">
            {slides[activeSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
            {slides[activeSlide].subtitle}
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-full shadow-xl transition transform hover:scale-105 hover:shadow-indigo-500/50">
            إقرأ المزيد
          </button>
        </div>
      </section>

      {/* Current Campaigns Section with Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              الحملات الحالية
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {slides.map((campaign) => (
              <div
                key={campaign.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {campaign.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{campaign.subtitle}</p>

                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex items-center">
                      <Heart size={16} className="text-red-500 mr-1" />
                      <span className="text-sm text-gray-500">١٢٨ متبرع</span>
                    </div>
                    <button className="px-4 py-2 bg-indigo-100 text-indigo-600 font-medium rounded-lg hover:bg-indigo-200 transition-colors duration-300">
                      ساهم الآن
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Video */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              عن الموقع
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-500/20 z-10"></div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fcjFmcGvazg?si=NWKwAgoM_RvbQRcU"
                  title="YouTube video player"
                  className="w-full aspect-video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="lg:w-1/2">
              <p className="text-gray-700 leading-relaxed text-xl text-right">
                مشروعنا الخيري يهدف إلى تقديم يد العون والمساعدة للأسر الفقيرة
                والمحتاجة، وذلك من خلال تنظيم حملات ومبادرات متنوعة تشمل التبرع
                بالملابس، الطعام، والكتب الدراسية. نعمل جاهدين على تحسين حياة
                الأفراد والعائلات في المجتمعات المحلية من خلال توفير احتياجاتهم
                الأساسية التي تعينهم على العيش بكرامة.
              </p>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800">١٥٠٠+</h3>
                  <p className="text-sm text-gray-500">عائلة مستفيدة</p>
                </div>

                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-3">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800">٢٠٠+</h3>
                  <p className="text-sm text-gray-500">متطوع نشط</p>
                </div>

                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800">٥٠+</h3>
                  <p className="text-sm text-gray-500">مشروع منجز</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 relative">
            <span className="inline-block relative">
              قصص النجاح
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center mb-16">
            بفضل تبرعاتكم الكريمة، تمكنا من مساعدة العديد من الأشخاص. إليكم بعض
            قصصهم:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-600 to-blue-500 transform rotate-12 translate-x-8 -translate-y-8"></div>
              <div className="relative">
                <p className="text-lg text-gray-700 font-medium">
                  "تلقيت ملابس وطعاماً كنت في حاجة ماسة إليه خلال وقت صعب. شكراً
                  لدعمكم!"
                </p>
                <div className="mt-6 flex items-center">
                  <img
                    src="https://cdn.arabsstock.com/uploads/images/146404/image-146404-collecting-distributing-donations-poor-needy-charities-thumbnail.webp"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Avatar"
                  />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-800">أحمد محمد</p>
                    <p className="text-sm text-gray-500">من عمان</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-600 to-indigo-500 transform rotate-12 translate-x-8 -translate-y-8"></div>
              <div className="relative">
                <p className="text-lg text-gray-700 font-medium">
                  "الكتب التي تلقيتها ساعدت أولادي على مواصلة تعليمهم. أنا ممتن
                  جداً!"
                </p>
                <div className="mt-6 flex items-center">
                  <img
                    src="https://media.arabicradio.net/425x245/2022/09/07/637981526553812510.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Avatar"
                  />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-800">سارة أحمد</p>
                    <p className="text-sm text-gray-500">من إربد</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-600 to-indigo-500 transform rotate-12 translate-x-8 -translate-y-8"></div>
              <div className="relative">
                <p className="text-lg text-gray-700 font-medium">
                  "التبرع بالطعام كان له تأثير كبير على حياتنا. لا يمكنني شكركم
                  بما فيه الكفاية!"
                </p>
                <div className="mt-6 flex items-center">
                  <img
                    src="https://media.arabicradio.net/425x245/2022/09/07/637981526553812510.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Avatar"
                  />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-800">محمد خالد</p>
                    <p className="text-sm text-gray-500">من الزرقاء</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
            <span className="inline-block relative">
              الأسئلة الشائعة
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="mb-6 last:mb-0 bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="flex justify-between items-center w-full p-6 text-right focus:outline-none"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeAccordion === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronLeft size={20} className="text-indigo-600" />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeAccordion === faq.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-6 pt-0 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            الشركات المساهمة
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            نشكر جميع الشركات التي تساهم في دعم مشاريعنا الخيرية. من خلال
            تعاونكم، نستطيع الوصول إلى المزيد من الأشخاص وتحقيق تأثير أكبر في
            المجتمع.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjk4Vuvd4-kUCnNovRbuQgwU5NhpN8pcu_Q&s" // ضع هنا صورة شعار الشركة
                alt="Company 1"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyYSSCyafegjAtmC3ZFmRisEjgQ_QEZv9xg&s" // ضع هنا صورة شعار الشركة
                alt="Company 2"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://www.hala.jo/wp-content/uploads/2024/08/%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF-%D8%A7%D9%84%D8%B9%D8%A7%D9%85-%D9%84%D9%84%D8%AC%D9%85%D8%B9%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9-1200x900.jpeg" // ضع هنا صورة شعار الشركة
                alt="Company 3"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K7mhu_g-k3ymlySngCLAjDDU47seONDPJsWFtYGW9UNd1ErxC79WKciRaoKnWQF8ffc&usqp=CAU" // ضع هنا صورة شعار الشركة
                alt="Company 4"
                className="w-32 h-32 object-contain"
              />
            </div>
            {/* يمكنك إضافة المزيد من الشركات هنا */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-16 bg-white/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              كن جزءاً من التغيير
            </h2>
            <p className="text-xl text-white/90 mb-10">
              تبرعك الصغير يمكن أن يحدث فرقاً كبيراً في حياة الآخرين. ساعدنا في
              تحقيق أهدافنا ونشر الخير.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full shadow-xl hover:bg-gray-100 transition transform hover:scale-105">
                تبرع الآن
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-xl hover:bg-white/20 transition transform hover:scale-105">
                كن متطوعاً
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ); 
  
};

export default Home;