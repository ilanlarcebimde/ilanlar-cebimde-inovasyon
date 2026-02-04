
import React, { useState, useEffect } from 'react';

// Kullanıcının referans gösterdiği meslek gruplarına uygun gerçekçi görseller
const heroImages = [
  {
    src: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Elektrik pano montajı yapan usta"
  },
  {
    src: "https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "İç cephe boya uygulaması"
  },
  {
    src: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "İnşaat demir ve kalıp işleri"
  },
  {
    src: "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Kaynak ve metal işleri"
  },
  {
    src: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Dış cephe ve yapı işleri"
  }
];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Her 4 saniyede bir görsel değişir

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-brand-surface text-brand-text-primary overflow-hidden pb-16 md:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Sol Taraf: Metin Alanı */}
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

          {/* Sağ Taraf: Dinamik Görsel Alanı (Slider) */}
          <div className="relative h-64 sm:h-80 md:h-[28rem] w-full order-2 md:order-2 mt-4 md:mt-0 rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-100">
             {heroImages.map((image, index) => (
               <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
               >
                 <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                 />
                 {/* Hafif karartma katmanı (yazı okunabilirliği veya atmosfer için) */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
               </div>
             ))}
             
             {/* Slider Göstergeleri (Dots) */}
             <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
               {heroImages.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentImageIndex(index)}
                   className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                     index === currentImageIndex ? 'bg-white w-6 md:w-8' : 'bg-white/50 hover:bg-white/80'
                   }`}
                   aria-label={`Görsel ${index + 1}`}
                 />
               ))}
             </div>
          </div>

        </div>
      </div>

      {/* Marquee (Kayan Yazı) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-3 md:py-4 overflow-hidden z-20 border-t border-gray-100">
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
