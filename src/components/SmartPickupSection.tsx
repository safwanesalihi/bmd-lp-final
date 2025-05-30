
const SmartPickupSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <i className="fas fa-truck-loading text-4xl text-blue-700"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Ramassage ذكي منين ما كنتي
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 reveal-animation">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                كنخدو الطلبات من دارك
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse p-6 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse-scale">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-800">طلبية واحدة فقط</h4>
                    <p className="text-blue-600">في المدن الكبيرة</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse p-6 bg-blue-100 rounded-xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold animate-pulse-scale delay-300">
                    10
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-800">10 طلبيات</h4>
                    <p className="text-blue-600">في الجهات الأخرى</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                خدمات إضافية
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="fas fa-box-open text-3xl text-blue-600 mb-2"></i>
                  <p className="font-medium text-blue-800">تغليف</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="fas fa-tags text-3xl text-blue-500 mb-2"></i>
                  <p className="font-medium text-blue-800">تيتيماج</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="fas fa-clipboard-check text-3xl text-blue-700 mb-2"></i>
                  <p className="font-medium text-blue-800">تحضير</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="fas fa-warehouse text-3xl text-blue-600 mb-2"></i>
                  <p className="font-medium text-blue-800">جمع المخزون</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-l from-blue-100 to-blue-200 rounded-xl text-center">
                <p className="text-lg font-bold text-blue-800">كامل علينا!</p>
              </div>
            </div>
          </div>

          {/* Process Visualization */}
          <div className="reveal-animation">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">عملية الجمع الذكي</h3>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-center space-x-6 space-x-reverse">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold animate-bounce">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">طلب الجمع</h4>
                    <p className="text-blue-600">تتصل بينا أو تدير الطلب عبر الموقع</p>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-2xl text-blue-600"></i>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <i className="fas fa-arrow-down text-2xl text-blue-300 animate-bounce"></i>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-6 space-x-reverse">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold animate-bounce delay-300">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">الجمع من دارك</h4>
                    <p className="text-blue-600">فريقنا كيجي يجمع الطلبات من عندك</p>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-truck-loading text-2xl text-blue-500"></i>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <i className="fas fa-arrow-down text-2xl text-blue-300 animate-bounce"></i>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-6 space-x-reverse">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold animate-bounce delay-500">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">تحضير وتوصيل</h4>
                    <p className="text-blue-600">كنحضرو ونوصلو للزبناء ديالك</p>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-shipping-fast text-2xl text-blue-700"></i>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <img 
                  src="/lovable-uploads/71918f0e-027b-48bf-a58c-a37f5d8a5708.png" 
                  alt="BMD Smart Pickup"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SmartPickupSection };
