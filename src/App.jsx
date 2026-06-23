import React from 'react';
import { Briefcase, Layout, Globe, Clock, CreditCard, Send, Mail, MapPin, CheckCircle } from 'lucide-react';

import './index.css';

function App() {

  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-6 border-b border-[rgba(255,255,255,0.08)]">
          <div className="text-2xl font-bold flex items-center gap-2">
            <Globe className="text-indigo-400" size={28} />
            <span>NN<span className="text-gradient">dev</span></span>
          </div>
          <div className="flex gap-4">
            <a href="#payment" className="btn btn-outline hidden sm:flex text-sm px-4 py-2">Ödəniş</a>
            <a href="#contact" className="btn btn-outline text-sm px-4 py-2">Müraciət Et</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 relative py-20 animate-fade-in">
          {/* Background decorative orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>

          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center max-w-2xl">
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 w-max mx-auto lg:mx-0 opacity-0 animate-[fadeIn_0.8s_0.1s_forwards]">
              Freelance Veb və Dizayn Xidmətləri
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-[fadeIn_0.8s_0.2s_forwards]">
              <span className="text-white">Xəyallarınızdakı layihəni</span><br />
              <span className="text-gradient">reallığa çevirək</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 opacity-0 animate-[fadeIn_0.8s_0.3s_forwards] max-w-lg mx-auto lg:mx-0">
              Müasir veb-saytların, peşəkar CV və portfolioların qısa zamanda, yüksək keyfiyyətlə hazırlanması. 
              Sizin vizyonunuz, mənim texniki bacarığım.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-[fadeIn_0.8s_0.4s_forwards]">
              <a href="#services" className="btn btn-primary px-8">Xidmətlər</a>
              <a href="#contact" className="btn btn-outline px-8">Əlaqə</a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex-1 w-full flex justify-center lg:justify-end opacity-0 animate-[fadeIn_0.8s_0.5s_forwards]">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Image Border/Glow Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl rotate-6 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
              
              {/* Actual Image */}
              <img 
                src="/profile.jpg" 
                alt="NNdev Profile" 
                className="absolute inset-0 w-full h-full object-cover rounded-3xl border-2 border-[rgba(255,255,255,0.1)] z-10 bg-gray-900"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"; 
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">100% Keyfiyyət</div>
                  <div className="text-gray-400 text-xs">Zəmanətli Təhvil</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 opacity-0 animate-[fadeIn_0.8s_0.4s_forwards]">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Xidmətlər & Planlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="glass-panel rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.2)]">
              <div className="w-14 h-14 rounded-xl bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-indigo-400 mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">CV Hazırlanması</h3>
              <p className="text-gray-400 flex-grow mb-6">Peşəkar, diqqətçəkici və müasir standartlara cavab verən CV-lərin qısa zamanda sıfırdan yaradılması və ya yenilənməsi.</p>
              <div className="flex justify-between items-center pt-6 border-t border-[rgba(255,255,255,0.08)] text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} />
                  <span>10 dəq - 2 saat</span>
                </div>
                <div className="font-semibold text-white">Büdcəyə uyğun</div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.2)]">
              <div className="w-14 h-14 rounded-xl bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-indigo-400 mb-6">
                <Layout size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Qurulması</h3>
              <p className="text-gray-400 flex-grow mb-6">İşlərinizi və bacarıqlarınızı ən yaxşı şəkildə nümayiş etdirəcək fərdi və cəlbedici portfolioların dizaynı.</p>
              <div className="flex justify-between items-center pt-6 border-t border-[rgba(255,255,255,0.08)] text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} />
                  <span>1 gün</span>
                </div>
                <div className="font-semibold text-white">Büdcəyə uyğun</div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.2)]">
              <div className="w-14 h-14 rounded-xl bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-indigo-400 mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Veb-sayt Yaradılması</h3>
              <p className="text-gray-400 flex-grow mb-6">Sadə və ya çoxsəhifəli, müasir dizayna malik fərdi veb-saytların, landing page-lərin yaradılması və istifadəyə verilməsi.</p>
              <div className="flex justify-between items-center pt-6 border-t border-[rgba(255,255,255,0.08)] text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} />
                  <span>1 - 2 gün</span>
                </div>
                <div className="font-semibold text-white">Büdcəyə uyğun</div>
              </div>
            </div>

          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 opacity-0 animate-[fadeIn_0.8s_0.6s_forwards]">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Necə İşləyir?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 bg-indigo-500/10">
                <Send size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Müraciət</h3>
              <p className="text-gray-400">Sayt üzərindən formanı dolduraraq istədiyiniz xidməti seçirsiniz.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 bg-indigo-500/10">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Təhvil</h3>
              <p className="text-gray-400">Sizinlə əlaqə saxlayıb detalları dəqiqləşdirir və işi qısa müddətdə təhvil verirəm.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 bg-indigo-500/10">
                <CreditCard size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Ödəniş</h3>
              <p className="text-gray-400">İş təhvil verildikdən və siz razı qaldıqdan sonra kartla ödəniş həyata keçirilir.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 opacity-0 animate-[fadeIn_0.8s_0.6s_forwards]">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Sifariş üçün Müraciət</h2>
          
          <div className="glass-panel rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gradient mb-4">İdeyanızı Bizimlə Bölüşün</h3>
              <p className="text-gray-400 mb-10">Sizə uyğun xidməti seçin və əlaqə məlumatlarınızı qeyd edin. Ən qısa zamanda sizinlə əlaqə saxlayacağam.</p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-indigo-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">E-poçt</div>
                    <div className="font-medium text-sm">nargizhuseynova2026@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-indigo-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Ünvan</div>
                    <div className="font-medium">Bakı, Azərbaycan (Remote)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form action="https://formsubmit.co/nargizhuseynova2026@gmail.com" method="POST" target="_blank" className="flex flex-col gap-5">
                <input type="hidden" name="_cc" value="nergiz.huseynova123@gmail.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="NNdev Platformasından Yeni Sifariş!" />
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Ad və Soyad</label>
                  <input 
                    type="text" 
                    name="name"
                    className="form-control" 
                    placeholder="Məsələn: Əli Məmmədov"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">E-poçt Ünvanı</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    placeholder="sizin@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Xidmət Seçimi</label>
                  <select 
                    name="service"
                    className="form-control"
                  >
                    <option value="CV Hazırlanması" className="bg-black text-white">CV Hazırlanması (10 dəq - 2 saat)</option>
                    <option value="Portfolio Qurulması" className="bg-black text-white">Portfolio Qurulması (1 gün)</option>
                    <option value="Veb-sayt Yaradılması" className="bg-black text-white">Veb-sayt Yaradılması (1-2 gün)</option>
                    <option value="Digər" className="bg-black text-white">Digər...</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Əlavə Qeydlər (İstəyə bağlı)</label>
                  <textarea 
                    name="message"
                    className="form-control min-h-[120px] resize-y" 
                    placeholder="İstəklərinizi buraya yaza bilərsiniz..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full mt-2"
                >
                  <Send size={18} /> Müraciət Göndər
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section id="payment" className="py-20 opacity-0 animate-[fadeIn_0.8s_0.6s_forwards]">
          <div className="glass-panel rounded-3xl p-10 md:p-16 text-center border-indigo-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Təhvil və Ödəniş</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              İşiniz tam istədiyiniz kimi təhvil verildikdən sonra aşağıdakı düymə vasitəsilə 
              bütün növ Visa və Mastercard kartları ilə təhlükəsiz şəkildə (Stripe vasitəsilə) ödəniş edə bilərsiniz.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button disabled className="btn px-8 py-4 text-lg w-full sm:w-auto bg-[rgba(255,255,255,0.08)] text-gray-500 cursor-not-allowed border border-[rgba(255,255,255,0.08)]">
                <CreditCard size={24} />
                Ödəniş Sistemi Tezliklə
              </button>
              <div className="flex items-center gap-3 text-gray-400">
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14C4 11.7909 5.79086 10 8 10H40C42.2091 10 44 11.7909 44 14V34C44 36.2091 42.2091 38 40 38H8C5.79086 38 4 36.2091 4 34V14Z" fill="#1434CB"/>
                  <path d="M44 20H4V26H44V20Z" fill="#F7B600"/>
                </svg>
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 24C30 28.9706 25.9706 33 21 33C16.0294 33 12 28.9706 12 24C12 19.0294 16.0294 15 21 15C25.9706 15 30 19.0294 30 24Z" fill="#EB001B"/>
                  <path d="M36 24C36 28.9706 31.9706 33 27 33C22.0294 33 18 28.9706 18 24C18 19.0294 22.0294 15 27 15C31.9706 15 36 19.0294 36 24Z" fill="#F79E1B"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <footer className="text-center py-8 border-t border-[rgba(255,255,255,0.08)] mt-12 text-gray-500">
        <div className="max-w-7xl mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} NNdev - Bütün hüquqlar qorunur.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
