const FreeStorageSection = () => {
  return (
    <section className="py-20 bg-blue-800">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="reveal-animation text-center md:text-left">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 mx-auto">
              <i className="fas fa-warehouse text-4xl text-blue-700"></i>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              خزن و حضّر طلبياتك مجانا
            </h2>

            <div className="space-y-6">
              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <i className="fas fa-warehouse text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">التخزين فـ المخزن ديالنا</h3>
                    <p className="text-blue-600">مساحات تخزين آمنة ومضمونة</p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-blue-200 rounded-xl flex items-center justify-center">
                    <i className="fas fa-box-open text-2xl text-blue-700"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">التغليف و الباكاجينگ مشمولين</h3>
                    <p className="text-blue-600">تغليف احترافي لجميع المنتجات</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-l from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 space-x-reverse mb-4">
                  <div className="text-6xl font-black">FREE</div>
                  <div className="text-2xl font-bold">مجانا تماما!</div>
                </div>
                <p className="text-xl mb-4">كلشي فابور، وهادي ماكايناش فالسوق المغربي</p>
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 mx-auto block">
                  جرب الخدمة
                </button>
              </div>
            </div>
          </div>

          {/* Warehouse Visualization */}
          <div className="reveal-animation">
            <div className="bg-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">مخزننا المتطور</h3>

              <div className="relative">
                <img
                  src="/lovable-uploads/46ec6cf4-d9f8-49ef-885a-82f7a91e2611.png"
                  alt="BMD Warehouse"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />

                {/* Floating features */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg animate-float">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <i className="fas fa-shield-alt text-blue-600"></i>
                    <span className="text-sm font-medium">آمن</span>
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg animate-float delay-300">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <i className="fas fa-thermometer-half text-blue-500"></i>
                    <span className="text-sm font-medium">مكيف</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg animate-float delay-500">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <i className="fas fa-camera text-blue-700"></i>
                    <span className="text-sm font-medium">مراقب</span>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-blue-800 mb-4 text-center">BMD مقابل المنافسين</h4>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="font-bold text-blue-600">الخدمة</div>
                  <div className="font-bold text-blue-600">BMD</div>
                  <div className="font-bold text-blue-400">الآخرين</div>

                  <div className="text-blue-600">التخزين</div>
                  <div className="text-blue-600 font-bold">مجاني</div>
                  <div className="text-blue-400">مدفوع</div>

                  <div className="text-blue-600">التغليف</div>
                  <div className="text-blue-600 font-bold">مجاني</div>
                  <div className="text-blue-400">مدفوع</div>

                  <div className="text-blue-600">الأمان</div>
                  <div className="text-blue-600 font-bold">مضمون</div>
                  <div className="text-blue-400">محدود</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FreeStorageSection };
