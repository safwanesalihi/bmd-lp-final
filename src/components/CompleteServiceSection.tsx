const CompleteServiceSection = () => {
  return (
    <section className="py-16 md:py-20 bg-blue-700">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            BMD: خدمة كاملة باش تولي التجارة ديالك طايرة
          </h2>
          <p className="text-xl md:text-2xl text-white font-medium mb-6 md:mb-8">
            5 سنين ديال الخبرة + خدمة متكاملة = راحة بالك كاملة!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative reveal-animation">
            <div className="relative">
              <img
                src="../lovable-uploads/freepik__anwar-depict-a-heroic-delivery-man-dressed-in-vibr__25531.jpeg"
                alt="BMD Customer Support"
                className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 md:p-6 rounded-2xl shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">5+</div>
                  <div className="text-xs md:text-sm">سنوات</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-4 md:p-6 rounded-2xl shadow-xl animate-float delay-500">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">900+</div>
                  <div className="text-xs md:text-sm">براند</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-4 md:space-y-6 reveal-animation">
            <div className="service-card group hover:bg-white">
              <div className="flex items-center space-x-3 md:space-x-4 space-x-reverse">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-clock text-xl md:text-2xl text-blue-600 group-hover:text-white"></i>
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-1 md:mb-2">توصيل سريع</h3>
                  <p className="text-sm md:text-base text-blue-600">أسرع خدمة توصيل في المغرب</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-white">
              <div className="flex items-center space-x-3 md:space-x-4 space-x-reverse">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-shopping-bag text-xl md:text-2xl text-blue-600 group-hover:text-white"></i>
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-1 md:mb-2">جمع الطلبات</h3>
                  <p className="text-sm md:text-base text-blue-600">نجمع طلباتك من أي مكان</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-white">
              <div className="flex items-center space-x-3 md:space-x-4 space-x-reverse">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-box text-xl md:text-2xl text-blue-600 group-hover:text-white"></i>
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-1 md:mb-2">تخزين</h3>
                  <p className="text-sm md:text-base text-blue-600">تخزين آمن ومجاني</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-white">
              <div className="flex items-center space-x-3 md:space-x-4 space-x-reverse">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-exchange-alt text-xl md:text-2xl text-blue-600 group-hover:text-white"></i>
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-1 md:mb-2">رجوع بدون مصاريف</h3>
                  <p className="text-sm md:text-base text-blue-600">إرجاع مجاني ومضمون</p>
                </div>
              </div>
            </div>

            {/* Benefits Summary */}
            <div className="bg-gradient-to-l from-blue-700 to-blue-600 p-6 md:p-8 rounded-2xl text-white text-center mt-6 md:mt-8">
              <p className="text-xl md:text-2xl font-bold mb-2">معانا، كتربح الوقت، الكليان، والتقة!</p>
              <div className="flex justify-center">
                <button className="btn-secondary mt-3 md:mt-4">
                  اكتشف المزيد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CompleteServiceSection };
