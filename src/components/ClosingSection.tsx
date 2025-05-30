import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ClosingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    storeName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Préparation des données au format URL encoded (compatible avec Google Apps Script)
      const formDataParams = new URLSearchParams();
      formDataParams.append('name', formData.name);
      formDataParams.append('phone', formData.phone);
      formDataParams.append('storeName', formData.storeName);
      formDataParams.append('timestamp', new Date().toISOString());

      // URL réelle du script Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-7MR8ljR00SKoQQI_B76-pCBB1UPbu85J9KOp3kBmN1tbjN9FzUygDPSx6FQKkBS1ug/exec';

      // Utilisation de mode: 'no-cors' car Google Apps Script ne renvoie pas les bons headers CORS
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataParams.toString()
      });

      // Comme on ne peut pas vérifier la réponse en mode no-cors,
      // on suppose que la requête a réussi si aucune exception n'est levée
      window.location.href = '/thank-you';
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-blue-50">
      <div className="section-container">
        {/* Main Closing Content */}
        <div className="text-center mb-12 md:mb-16 reveal-animation">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-8">
            خلي التجارة ديالك تكبر معانا
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 md:mb-8">
            مئاتديال الستورز كيخدمو مع BMD
          </p>
          <p className="text-lg md:text-xl text-secondary font-medium">
            جرب الخدمة، غادي تشوف الفرق، و ما غاديش تبدلنا!
          </p>
        </div>

        {/* Growth Chart */}
        <div className="mb-12 md:mb-16 reveal-animation">
          <div className="bg-white rounded-3xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8 text-center">نمو أعمالك مع BMD</h3>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-blue-50 rounded-2xl p-4 md:p-6 shadow-lg">
                <div className="flex items-end justify-center space-x-2 space-x-reverse h-48 md:h-64">
                  <div className="bg-gray-300 w-8 md:w-12 h-12 md:h-16 rounded-t flex items-end justify-center pb-2">
                    <span className="text-xs font-bold">قبل</span>
                  </div>
                  <div className="bg-gradient-to-t from-accent to-accent/70 w-8 md:w-12 h-36 md:h-48 rounded-t flex items-end justify-center pb-2 animate-pulse-scale">
                    <span className="text-xs font-bold text-white">بعد</span>
                  </div>
                  <div className="bg-gradient-to-t from-secondary to-secondary/70 w-8 md:w-12 h-42 md:h-56 rounded-t flex items-end justify-center pb-2 animate-pulse-scale delay-300">
                    <span className="text-xs font-bold text-white">مع VIP</span>
                  </div>
                </div>

                <div className="text-center mt-3 md:mt-4">
                  <div className="text-base md:text-lg font-bold text-primary">نمو المبيعات</div>
                  <div className="text-xs md:text-sm text-gray-600">خلال 3 أشهر</div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="service-card text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1 md:mb-2 animate-pulse-scale">+300%</div>
                  <div className="text-base md:text-lg font-medium text-primary">زيادة في المبيعات</div>
                </div>

                <div className="service-card text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-1 md:mb-2 animate-pulse-scale delay-300">95%</div>
                  <div className="text-base md:text-lg font-medium text-primary">رضا العملاء</div>
                </div>

                <div className="service-card text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2 animate-pulse-scale delay-500">24/7</div>
                  <div className="text-base md:text-lg font-medium text-primary">خدمة مستمرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Final CTA with Contact Form */}
        <div className="text-center reveal-animation" id="contact-form">
          <div className="bg-gradient-to-l from-primary via-secondary to-accent p-8 md:p-12 rounded-3xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              سيفط لينا دابا – الفريق ديالنا كيسناك!
            </h3>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">تواصل معنا</h4>
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="الاسم"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 md:p-3 rounded-lg text-primary border-none outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 md:p-3 rounded-lg text-primary border-none outline-none"
                  />
                  <input
                    type="text"
                    name="storeName"
                    placeholder="اسم المتجر"
                    value={formData.storeName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 md:p-3 rounded-lg text-primary border-none outline-none"
                  />
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'جاري الإرسال...' : 'أرسل الطلب'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 flex items-center space-x-3 md:space-x-4 space-x-reverse">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">اتصل بنا</div>
                    <div className="text-blue-100 text-xs md:text-sm">(+212) 706077312</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 flex items-center space-x-3 md:space-x-4 space-x-reverse">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                    <i className="fab fa-whatsapp text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">واتساب</div>
                    <div className="text-blue-100 text-xs md:text-sm">(+212)706077312</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 flex items-center space-x-3 md:space-x-4 space-x-reverse">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">البريد الإلكتروني</div>
                    <div className="text-blue-100 text-xs md:text-sm">bmdcontact1@gmail.ma</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <img
                src="/lovable-uploads/d40f8913-3952-42ca-bbe9-3c708bc7ad99.png"
                alt="BMD Logo"
                className="h-10 md:h-12"
              />
            </div>

            <div className="flex items-center space-x-6 space-x-reverse mb-4 md:mb-0">
              <a href="https://www.facebook.com/profile.php?id=61552039906541" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                <i className="fab fa-facebook text-xl md:text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/bmd_ma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                <i className="fab fa-instagram text-xl md:text-2xl"></i>
              </a>
              <a href="#contact-form" className="text-blue-600 hover:text-blue-700 transition-colors">
                <i className="fab fa-whatsapp text-xl md:text-2xl"></i>
              </a>
            </div>

            <div className="text-gray-600 text-sm md:text-base">
              © 2024 BMD. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ClosingSection };
