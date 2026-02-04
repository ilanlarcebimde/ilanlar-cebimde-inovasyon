
import React from 'react';
import Logo from './icons/Logo';

const marqueeTextContent = "Elektrik Tesisatı • Pano Montaj • Zayıf Akım • Kablo Çekimi • Yangın Alarm • Aydınlatma Montaj • Arıza Bakım • Seramik Döşeme • Fayans Ustası • Derz Uygulama • Şap • Mermer Montaj • Parke • Epoksi Zemin • Boya Ustası • İç Cephe • Dış Cephe • Alçı Boya • Macun • İzolasyon • Vernik • Gazaltı Kaynak • Argon Kaynak • Elektrot Kaynak • Metal Doğrama • Çelik Montaj • Taşlama • Sac İşleri • İnşaat Ustası • Kalıpçı • Demirci • Sıvacı • Duvar Ustası • PVC Doğrama • Çatı İşleri • Isı Yalıtım • Üretim Hattı • Montaj Elemanı • Paketleme • Makine Operasyonu • Kalite Kontrol • Bakım Onarım • Teknik Servis • Klima Servisi • Asansör Bakım • Mekanik Bakım • Beyaz Eşya Servisi • Otel Kat Görevlisi • Meydancı • Teknik Personel • Mutfak Personeli • Mağaza Satış • Reyon Görevlisi • Kasiyer • Servis Elemanı • Temizlik Personeli • ";
const marqueeItems = marqueeTextContent.split('•').map(s => s.trim()).filter(Boolean);

const MarqueeText: React.FC = () => (
    <div className="flex items-center space-x-8 text-xl font-semibold">
        {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
                <span className="whitespace-nowrap">{item}</span>
                <span className="text-brand-blue font-bold">•</span>
            </React.Fragment>
        ))}
    </div>
);


const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-surface text-brand-text-primary overflow-hidden pb-16 md:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="z-10 text-center md:text-left order-1 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 md:mb-6">
              İş arama yükünü <span className="text-brand-blue">azaltır.</span> Süreci <span className="text-brand-blue">hızlandırır.</span> Sonuca <span className="text-brand-blue">götürür.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
              Elektrik, seramik, boya, kaynak, inşaat ve üretim işlerinde çalışan ustalar için ilanları araştıran ve başvuru sürecini sadeleştiren dijital yönlendirme platformu.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-brand-orange">
              "Sen ilan aramazsın. Sistem senin için arar."
            </p>
          </div>
          <div className="relative h-64 sm:h-80 md:h-[28rem] w-full order-2 md:order-2 mt-4 md:mt-0 flex items-center justify-center bg-brand-bg rounded-xl border border-gray-100 overflow-hidden shadow-inner">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent"></div>
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
             <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
             <div className="transform rotate-12 opacity-10 scale-150">
               <Logo className="w-48 h-48 md:w-64 md:h-64 text-brand-text-secondary" />
             </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-3 md:py-4 overflow-hidden z-20">
          <div className="relative flex whitespace-nowrap text-brand-text-secondary">
              <div className="animate-marquee-slow flex">
                  <MarqueeText />
                  <MarqueeText />
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
