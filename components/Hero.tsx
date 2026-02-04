
// FIX: Corrected the import statement for React and its hooks.
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Construction workers on site wide shot
  'https://images.pexels.com/photos/1748273/pexels-photo-1748273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Welder in workshop wide shot
  'https://images.pexels.com/photos/5691629/pexels-photo-5691629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Electrician installing wiring medium shot
  'https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Painter on a ladder wide shot
  'https://images.pexels.com/photos/8005396/pexels-photo-8005396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Tile installer laying tiles wide shot
  'https://images.pexels.com/photos/3754438/pexels-photo-3754438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Hotel housekeeping making a bed wide shot
];

const marqueeTextContent = "Elektrik Tesisatı • Pano Montaj • Zayıf Akım • Kablo Çekimi • Yangın Alarm • Kamera Sistemi • Aydınlatma Montaj • Arıza Bakım • Seramik Döşeme • Fayans Ustası • Derz Uygulama • Şap • Mermer Montaj • Parke • Epoksi Zemin • Boya Ustası • İç Cephe • Dış Cephe • Alçı Boya • Macun • İzolasyon • Vernik • Gazaltı Kaynak • Argon Kaynak • Elektrot Kaynak • Metal Doğrama • Çelik Montaj • Taşlama • Sac İşleri • İnşaat Ustası • Kalıpçı • Demirci • Sıvacı • Duvar Ustası • PVC Doğrama • Çatı İşleri • Isı Yalıtım • Üretim Hattı • Montaj Elemanı • Paketleme • Makine Operatörü • Kalite Kontrol • Bakım Onarım • Teknik Servis • Klima Servisi • Asansör Bakım • Mekanik Bakım • Beyaz Eşya Servisi • Otel Kat Görevlisi • Meydancı • Teknik Personel • Mutfak Personeli • Mağaza Satış • Reyon Görevlisi • Kasiyer • Servis Elemanı • Temizlik Personeli • ";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-brand-surface text-brand-text-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              İş arama yükünü <span className="text-brand-blue">azaltır.</span> Süreci <span className="text-brand-blue">hızlandırır.</span> Sonuca <span className="text-brand-blue">götürür.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text-secondary mb-8 max-w-2xl mx-auto md:mx-0">
              Elektrik, seramik, boya, kaynak, inşaat ve üretim işlerinde çalışan ustalar için ilanları araştıran ve başvuru sürecini sadeleştiren dijital yönlendirme platformu.
            </p>
            <p className="text-xl md:text-2xl font-bold text-brand-orange">
              "Sen ilan aramazsın. Sistem senin için arar."
            </p>
          </div>
          <div className="relative h-80 md:h-full w-full rounded-xl overflow-hidden shadow-2xl group">
             {images.map((src, index) => (
                <div
                    key={src}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: index === currentIndex ? 1 : 0 }}
                >
                    <img 
                        src={src}
                        alt="İnşaat ve sanayi sektöründen ustalar çalışırken" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-sm py-4 overflow-hidden">
          <div className="relative flex whitespace-nowrap text-brand-text-secondary">
              <div className="animate-marquee-fast flex">
                  <MarqueeText />
                  <MarqueeText />
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
