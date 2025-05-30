import { scrollToContact } from '@/utils/scrollUtils';

const FastDeliverySection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 reveal-animation">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-8">
            توصيل سريع : أقل من 12 ساعة ف المدن الكبيرة!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-12">
            <div className="text-center md:text-center space-y-4 md:space-y-6">
              <div className="text-xl md:text-2xl text-secondary font-medium">
                <i className="fas fa-shipping-fast text-3xl text-blue-600 mb-3 block"></i>
                أقل من 12 ساعة ف: كازا، الرباط، مراكش، فاس…
              </div>
              
              <div className="text-lg text-gray-600">
                أقل من 24 ساعة ف جميع المناطق الأخرى
              </div>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                كنتواجدو فـ كازا و عندنا فروع ف جميع المدن المغربية لتغطية شاملة و فعالة.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={scrollToContact}
                  className="btn-secondary text-lg md:text-xl"
                >
                  <i className="fas fa-rocket ml-2"></i>
                  اطلب الخدمة الآن
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/66b37649-524c-4c0f-bd1d-da52abb2673e.png" 
                alt="BMD Fast Delivery"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl animate-float"
              />
              
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold shadow-lg animate-pulse">
                12 ساعة
              </div>
            </div>
          </div>
          
          {/* Delivery Timeline */}
          <div className="bg-blue-50 rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8">مواقيت التوصيل</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="text-center p-4 md:p-6 bg-white rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-base md:text-lg font-medium text-primary">ساعة للمدن الكبيرة</div>
                <div className="text-xs md:text-sm text-gray-600 mt-2">كازا، الرباط، مراكش، فاس</div>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-white rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24</div>
                <div className="text-base md:text-lg font-medium text-primary">ساعة للمناطق الأخرى</div>
                <div className="text-xs md:text-sm text-gray-600 mt-2">جميع أنحاء المملكة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FastDeliverySection };
