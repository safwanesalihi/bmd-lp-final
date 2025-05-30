const FastPaymentSection = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 reveal-animation text-center md:text-left">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8 mx-auto">
                <i className="fas fa-money-bill-wave text-4xl text-accent"></i>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                فلوسك كتوصلك بسرعة و بشفافية
              </h2>
            </div>

            <div className="space-y-6">
              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-accent">3x</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">التحويلات 3 مرات فالسيمانة</h3>
                    <p className="text-blue-600">نظام دفع منتظم ومضمون</p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-chart-line text-2xl text-secondary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">كل عملية مفصلة و واضحة</h3>
                    <p className="text-blue-600">تقارير شفافة لجميع المعاملات</p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-bolt text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">بلا تأخير</h3>
                    <p className="text-blue-600">جميع الطلبيات المخلصة كتوصلك فلوسها فورا</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Schedule */}
            <div className="bg-gradient-to-l from-accent to-secondary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">جدول الدفعات الأسبوعي</h3>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">الاثنين</div>
                  <div className="text-sm">الدفعة الأولى</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">الأربعاء</div>
                  <div className="text-sm">الدفعة الثانية</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">الجمعة</div>
                  <div className="text-sm">الدفعة الثالثة</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="reveal-animation">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">لوحة التحكم الشفافة</h3>

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-primary text-white rounded-xl">
                  <h4 className="font-bold">التقرير المالي</h4>
                  <span className="text-sm">اليوم</span>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-accent">12,450</div>
                    <div className="text-sm text-gray-600">درهم اليوم</div>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-secondary">45</div>
                    <div className="text-sm text-gray-600">طلبية مخلصة</div>
                  </div>
                </div>

                {/* Transaction List */}
                <div className="space-y-3">
                  <h5 className="font-bold text-primary">آخر العمليات</h5>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <div className="font-medium text-primary">طلبية #1234</div>
                        <div className="text-sm text-gray-600">الآن</div>
                      </div>
                    </div>
                    <div className="text-accent font-bold">+250 درهم</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-xs">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <div className="font-medium text-primary">طلبية #1233</div>
                        <div className="text-sm text-gray-600">منذ 5 دقائق</div>
                      </div>
                    </div>
                    <div className="text-secondary font-bold">+180 درهم</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <div className="font-medium text-primary">طلبية #1232</div>
                        <div className="text-sm text-gray-600">منذ 10 دقائق</div>
                      </div>
                    </div>
                    <div className="text-primary font-bold">+320 درهم</div>
                  </div>
                </div>

                {/* Payment Animation */}
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 space-x-reverse p-4 bg-gradient-to-l from-accent/10 to-secondary/10 rounded-xl">
                    <div className="w-8 h-8 bg-accent rounded-full animate-pulse"></div>
                    <div className="text-sm text-primary font-medium">تحويل قيد المعالجة...</div>
                    <div className="w-8 h-8 bg-secondary rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FastPaymentSection };
