const VipOfferSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* VIP Image */}
          <div className="reveal-animation">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              
              <div className="relative bg-blue-50 rounded-3xl p-6 md:p-8 text-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 md:px-6 py-1 md:py-2 rounded-full font-bold text-base md:text-lg">
                    <i className="fas fa-crown ml-2 text-yellow-200"></i>
                    VIP OFFER
                  </div>
                </div>
                
                <img 
                  src="/lovable-uploads/848dbd66-02cf-44a0-af0c-ac5bc34c2358.png" 
                  alt="Shocked VIP Customer"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl mb-4 md:mb-6 animate-float"
                />
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  
                  <p className="text-blue-600 font-medium text-sm md:text-base">
                    "ماكنتش كنتوقع هاد المستوى من الخدمة!"
                  </p>
                  
                  <div className="text-blue-800 font-bold text-sm md:text-base">
                    أحمد التاجر - براند مغربي مشهور
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Content */}
          <div className="text-blue-800 space-y-6 md:space-y-8 reveal-animation text-center lg:text-right">
            <div>
              <div className="inline-flex items-center space-x-2 space-x-reverse mb-4 md:mb-6">
                <i className="fas fa-crown text-3xl md:text-4xl text-yellow-400"></i>
                <h2 className="text-3xl md:text-4xl font-bold">عرض حصري للبراندات القوية!</h2>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-blue-100/80 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4 space-x-reverse mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-percentage text-white"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">كتوصل بأكثر من 80% من الطلبيات ديالك؟</h3>
                </div>
                <p className="text-blue-700 text-base md:text-lg pr-12 md:pr-16 text-center lg:text-right">
                  إذا كان معدل التوصيل ديالك عالي، عندك أولوية في خدماتنا
                </p>
              </div>

              <div className="bg-blue-100/80 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4 space-x-reverse mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marked-alt text-white"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">كتخدم فـ جميع المدن و القرى المغربية؟</h3>
                </div>
                <p className="text-blue-700 text-base md:text-lg pr-12 md:pr-16 text-center lg:text-right">
                  عندك تغطية واسعة؟ استفد من أسعار خاصة وخدمات متقدمة
                </p>
              </div>

              <div className="bg-gradient-to-l from-yellow-500 to-yellow-600 p-6 md:p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-yellow-900">
                  عندك عرض VIP ها العرض لي داروه BMD خصيصا ليك
                </h3>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6 my-4 md:my-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black mb-1 md:mb-2 text-yellow-900">-50%</div>
                    <div className="text-xs md:text-sm text-yellow-800">تخفيض على الخدمات</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black mb-1 md:mb-2 text-yellow-900">24/7</div>
                    <div className="text-xs md:text-sm text-yellow-800">دعم حصري</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="bg-white text-yellow-600 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-lg md:text-xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                    <i className="fas fa-crown ml-2"></i>
                    احصل على العرض VIP
                  </button>
                </div>
              </div>
            </div>

            {/* VIP Features */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-blue-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                <i className="fas fa-shipping-fast text-2xl md:text-3xl text-blue-600 mb-2 md:mb-3"></i>
                <div className="font-bold text-sm md:text-base">أولوية في التوصيل</div>
              </div>
              
              <div className="bg-blue-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                <i className="fas fa-headset text-2xl md:text-3xl text-blue-600 mb-2 md:mb-3"></i>
                <div className="font-bold text-sm md:text-base">مدير حساب مخصص</div>
              </div>
              
              <div className="bg-blue-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                <i className="fas fa-chart-line text-2xl md:text-3xl text-blue-600 mb-2 md:mb-3"></i>
                <div className="font-bold text-sm md:text-base">تقارير متقدمة</div>
              </div>
              
              <div className="bg-blue-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                <i className="fas fa-gift text-2xl md:text-3xl text-blue-600 mb-2 md:mb-3"></i>
                <div className="font-bold text-sm md:text-base">مكافآت حصرية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { VipOfferSection };
