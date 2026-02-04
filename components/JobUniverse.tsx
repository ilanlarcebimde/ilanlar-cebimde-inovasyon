
import React from 'react';

const jobBlocks = [
  {
    title: "Elektrik & Tesisat",
    tags: [
      "Pano montaj", "Zayıf akım", "Bina tesisatı", "Kablo çekimi", 
      "Yangın alarm", "Kamera sistemi", "Arıza bakım", "Aydınlatma montaj", 
      "Otomasyon", "Kapı otomatiği", "İnternet kablolama", "Topraklama", "Kompanzasyon"
    ]
  },
  {
    title: "Seramik & Kaplama",
    tags: [
      "Fayans ustası", "Seramik döşeme", "Derz uygulama", "Şap", 
      "Mermer montaj", "Parke", "Epoksi", "Zemin kaplama", 
      "Alçıpan", "Sıva üstü uygulama", "Doğal taş", "Mozaik"
    ]
  },
  {
    title: "Boya & Yüzey",
    tags: [
      "İç cephe", "Dış cephe", "Alçı boya", "Macun", 
      "Endüstriyel boya", "Sprey boya", "Vernik", "İzolasyon boya", 
      "Tadilat boya", "Duvar kağıdı", "Saten alçı", "Kartonpiyer"
    ]
  },
  {
    title: "Metal & Kaynak",
    tags: [
      "Gazaltı", "Argon", "Elektrot", "Taşlama", 
      "Metal doğrama", "Çelik konstrüksiyon", "Sac kesim", "Montaj", 
      "Atölye işleri", "Ferforje", "Boru kaynağı", "Oksijen kaynağı"
    ]
  },
  {
    title: "İnşaat & Saha",
    tags: [
      "Kalıpçı", "Demirci", "Sıvacı", "Duvar Ustası",
      "Çatı ustası", "İskele kurulum", "Beton dökümü", "Hafriyat operatörü",
      "İzolasyoncu", "Drenaj", "Peyzaj"
    ]
  },
  {
    title: "Üretim & Montaj",
    tags: [
      "Montaj elemanı", "Makine operatörü", "Paketleme", "Kalite kontrol",
      "Plastik enjeksiyon", "CNC operatörü", "Bant şefi", "Depo sevkiyat"
    ]
  }
];

const marqueeTextContent = "Elektrik Tesisatı • Pano Montaj • Zayıf Akım • Kablo Çekimi • Yangın Alarm • Kamera Sistemi • Aydınlatma Montaj • Arıza Bakım • Seramik Döşeme • Fayans Ustası • Derz Uygulama • Şap • Mermer Montaj • Parke • Epoksi Zemin • Boya Ustası • İç Cephe • Dış Cephe • Alçı Boya • Macun • İzolasyon • Vernik • Gazaltı Kaynak • Argon Kaynak • Elektrot Kaynak • Metal Doğrama • Çelik Montaj • Taşlama • Sac İşleri • İnşaat Ustası • Kalıpçı • Demirci • Sıvacı • Duvar Ustası • PVC Doğrama • Çatı İşleri • Isı Yalıtım • Üretim Hattı • Montaj Elemanı • Paketleme • Makine Operatörü • Kalite Kontrol • Bakım Onarım • Teknik Servis • Klima Servisi • Asansör Bakım • Mekanik Bakım • Beyaz Eşya Servisi • Otel Kat Görevlisi • Meydancı • Teknik Personel • Mutfak Personeli • Mağaza Satış • Reyon Görevlisi • Kasiyer • Servis Elemanı • Temizlik Personeli • ";
const marqueeItems = marqueeTextContent.split('•').map(s => s.trim()).filter(Boolean);

const MarqueeText: React.FC = () => (
    <div className="flex items-center space-x-8 text-xl text-brand-text-secondary">
        {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
                <span className="whitespace-nowrap">{item}</span>
                <span className="text-brand-blue font-bold">•</span>
            </React.Fragment>
        ))}
    </div>
);


const JobUniverse: React.FC = () => {
  return (
    <section className="bg-brand-bg py-20 relative overflow-hidden">
        <div 
            className="absolute inset-0 bg-repeat opacity-[3%]" 
            style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')"}}
        ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-brand-text-primary sm:text-4xl lg:text-5xl">Ustalara Göre Meslek Evreni</h2>
          <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">Bu platform, sizin gibi ustaların uzmanlık alanlarını tanır ve en doğru işleri önceliklendirir.</p>
        </div>
        
        <div className="relative my-16 py-6 overflow-hidden bg-brand-surface border-y-2 border-brand-blue/20">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-transparent to-brand-surface z-10 pointer-events-none"></div>
            <div className="flex animate-marquee-slow">
                <MarqueeText />
                <MarqueeText />
                <MarqueeText />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobBlocks.map(block => (
            <div key={block.title} className="group bg-brand-surface p-8 rounded-xl border border-gray-200/80 transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-brand-blue/50 hover:-translate-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-text-primary mb-6">{block.title}</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-md overflow-hidden max-h-[10.5rem] group-hover:max-h-96 transition-[max-height] duration-700 ease-in-out">
                {block.tags.map(tag => (
                  <span key={tag} className="text-brand-text-secondary">
                    <span className="text-brand-blue mr-1.5">•</span>{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobUniverse;
