
import React from 'react';

const marqueeTextContent = "Elektrik Tesisatı • Pano Montaj • Zayıf Akım • Kablo Çekimi • Yangın Alarm • Kamera Sistemi • Aydınlatma Montaj • Arıza Bakım • Seramik Döşeme • Fayans Ustası • Derz Uygulama • Şap • Mermer Montaj • Parke • Epoksi Zemin • Boya Ustası • İç Cephe • Dış Cephe • Alçı Boya • Macun • İzolasyon • Vernik • Gazaltı Kaynak • Argon Kaynak • Elektrot Kaynak • Metal Doğrama • Çelik Montaj • Taşlama • Sac İşleri • İnşaat Ustası • Kalıpçı • Demirci • Sıvacı • Duvar Ustası • PVC Doğrama • Çatı İşleri • Isı Yalıtım • Üretim Hattı • Montaj Elemanı • Paketleme • Makine Operasyonu • Kalite Kontrol • Bakım Onarım • Teknik Servis • Klima Servisi • Asansör Bakım • Mekanik Bakım • Beyaz Eşya Servisi • Otel Kat Görevlisi • Meydancı • Teknik Personel • Mutfak Personeli • Mağaza Satış • Reyon Görevlisi • Kasiyer • Servis Elemanı • Temizlik Personeli • ";
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
    <section className="relative bg-brand-surface text-brand-text-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            İş arama yükünü <span className="text-brand-blue">azaltır.</span> Süreci <span className="text-brand-blue">hızlandırır.</span> Sonuca <span className="text-brand-blue">götürür.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text-secondary mb-8">
            Elektrik, seramik, boya, kaynak, inşaat ve üretim işlerinde çalışan ustalar için ilanları araştıran ve başvuru sürecini sadeleştiren dijital yönlendirme platformu.
          </p>
          <p className="text-xl md:text-2xl font-bold text-brand-orange">
            "Sen ilan aramazsın. Sistem senin için arar."
          </p>
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