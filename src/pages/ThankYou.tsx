
import { useEffect } from 'react';

const ThankYou = () => {
  useEffect(() => {
    // Reveal animation on scroll
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Check on initial load

    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="py-20 bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 min-h-screen flex items-center">
        <div className="section-container">
          <div className="text-center reveal-animation">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/d40f8913-3952-42ca-bbe9-3c708bc7ad99.png" 
                alt="BMD Logo"
                className="h-24 mx-auto mb-4"
              />
            </div>

            {/* Thank You Message */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse-scale">
                <i className="fas fa-check text-3xl text-white"></i>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                شكراً لك!
              </h1>
              
              <p className="text-2xl md:text-3xl text-blue-100 mb-6">
                تم استلام طلبك بنجاح
              </p>
              
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                سيتواصل معك فريقنا خلال أقل من 24 ساعة لمناقشة احتياجاتك وبدء رحلة نجاح تجارتك معنا
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="fas fa-phone text-2xl text-blue-100"></i>
                  </div>
                  <p className="text-blue-100">سنتصل بك قريباً</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="fas fa-handshake text-2xl text-blue-100"></i>
                  </div>
                  <p className="text-blue-100">نبدأ الشراكة</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="fas fa-rocket text-2xl text-blue-100"></i>
                  </div>
                  <p className="text-blue-100">تجارتك تطير</p>
                </div>
              </div>

              <button 
                onClick={() => window.location.href = '/'}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-home ml-4"></i>
                العودة للصفحة الرئيسية
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
