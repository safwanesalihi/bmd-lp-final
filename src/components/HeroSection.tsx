const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="section-container relative z-10 min-h-screen flex items-center">
        {/* Desktop: logo/title/desc/stats/cta left, image right */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left column: logo, title, desc, stats, cta */}
          <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-5 md:space-y-6 animate-fade-in order-1 lg:order-1 lg:rtl">
            {/* Logo/Brand */}
            <div className="inline-block mt-6 md:mt-4 lg:self-end">
              <img
                src="/lovable-uploads/8c72fa9f-b89f-4f24-b01b-26af98158e11.png"
                alt="BMD Logo"
                className="h-16 md:h-20 lg:h-24 mx-auto lg:mx-0 mb-3"
              />
              <div className="h-2 w-28 bg-blue-400 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight lg:self-end">
              شريكك في التوصيل
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-blue-100 font-medium lg:self-end">
              خدمة مجربة، ونتائج ملموسة كتشهد لينا
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:self-end">
              منذ أكثر من 5 سنين، BMD قلبات موازين التوصيل فالمغرب. السرعة، الدقة، والراحة هما شعارنا.
              كنخدمو أكثر من 900 براند مغربية من كازا حتى لأقصى نقطة فالمملكة بخدمة احترافية كتخلي الزبناء ديالك فرحانين وراجعين.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 w-full max-w-md lg:self-end">
              <div className="text-center">
                <div className="animated-counter text-white">900+</div>
                <p className="text-blue-200 font-medium text-sm md:text-base">براند مغربي</p>
              </div>
              <div className="text-center">
                <div className="animated-counter text-white">5+</div>
                <p className="text-blue-200 font-medium text-sm md:text-base">سنوات خبرة</p>
              </div>
              <div className="text-center">
                <div className="animated-counter text-white">12</div>
                <p className="text-blue-200 font-medium text-sm md:text-base">ساعة توصيل</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 md:pt-6 flex justify-center lg:justify-end w-full lg:self-end">
              <button
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl md:text-2xl px-10 py-4 rounded-lg shadow-2xl transition-all duration-300 lg:ml-auto"
                dir="rtl"
              >
                <i className="fas fa-rocket ml-3 text-blue-500"></i>
                ابدأ الآن
              </button>
            </div>
          </div>

          {/* Right column: Hero Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right order-2 lg:order-2">
            <div className="relative animate-float">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                {/* Floating background circle */}
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-scale"></div>

                {/* Main image */}
                <img
                  src="/lovable-uploads/92432ce1-6d9d-4ffb-b7b4-f14dca98a788.png"
                  alt="BMD Delivery Team"
                  className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
