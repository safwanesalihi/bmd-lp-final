
const FreeReturnsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Returns Process */}
          <div className="reveal-animation">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                  <i className="fas fa-undo text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary">الرجوع؟ حتى هو فابور</h3>
              </div>

              {/* Calendar Visualization */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="text-lg font-bold text-primary mb-4 text-center">جدول الإرجاع الأسبوعي</h4>

                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day, index) => (
                    <div key={day} className="font-medium text-gray-600 p-2">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className={`p-3 rounded-lg ${i === 1 || i === 4 ? 'bg-accent text-white font-bold animate-pulse' : 'bg-white'
                      }`}>
                      {i + 1}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-center space-x-2 space-x-reverse">
                  <div className="w-4 h-4 bg-accent rounded"></div>
                  <span className="text-sm text-gray-600">أيام الإرجاع (مرتين في الأسبوع)</span>
                </div>
              </div>

              {/* Return Features */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse p-4 bg-accent/5 rounded-xl">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-calendar-week"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">مرتين في الأسبوع</h5>
                    <p className="text-gray-600 text-sm">جمع منتظم للمرتجعات</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse p-4 bg-secondary/5 rounded-xl">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-infinity"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">بلا حدود</h5>
                    <p className="text-gray-600 text-sm">سواء 1 أو 100 قطعة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 reveal-animation">

            {/* Zero Cost Highlight */}
            <div className="bg-gradient-to-l from-accent to-accent/80 rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-8xl font-black mb-4 animate-pulse-scale">0</div>
              <div className="text-3xl font-bold mb-2">درهم</div>
              <p className="text-xl">تكلفة الإرجاع</p>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">طلب الإرجاع</h3>
                    <p className="text-gray-600">تخبرنا بالمنتجات المراد إرجاعها</p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-secondary">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">الجمع المجدول</h3>
                    <p className="text-gray-600">نجمع المنتجات في الموعد المحدد</p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-accent">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">معالجة سريعة</h3>
                    <p className="text-gray-600">تحديث حسابك فورا بعد الاستلام</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <img
                src="../lovable-uploads/freepik__create-an-advertisement-featuring-a-confident-cust__90820.jpeg"
                alt="Satisfied Customer"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-bold text-primary mb-2">راحة البال مضمونة</h4>
              <p className="text-gray-600">زبناؤنا راضيين 100% عن خدمة الإرجاع</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FreeReturnsSection };
