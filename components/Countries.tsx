
import React from 'react';

const countries = [
  { name: "Almanya", desc: "Sanayi ve üretimde yüksek talep." },
  { name: "Fransa", desc: "İnşaat ve restorasyon projeleri." },
  { name: "Hollanda", desc: "Teknik servis ve montaj işleri." },
  { name: "Avusturya", desc: "Makine sanayi ve inşaat projeleri." },
  { name: "İsviçre", desc: "Yüksek kaliteli inşaat ve endüstri." },
  { name: "Katar", desc: "Büyük altyapı ve inşaat projeleri." },
  { name: "Dubai/BAE", desc: "Büyük ölçekli altyapı ve mega yapılar." },
  { name: "Suudi Arabistan", desc: "Petrol ve yeni şehir projeleri." },
  { name: "Kuveyt", desc: "Altyapı ve enerji sektöründe fırsatlar." },
  { name: "Irak", desc: "Yeniden yapılanma ve inşaat." },
  { name: "Libya", desc: "Petrol ve inşaat sektöründe iş imkanları." },
];

const Countries: React.FC = () => {
  return (
    <section className="bg-brand-bg py-20 relative overflow-hidden">
        <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-5" 
            style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')"}}
        ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-text-primary sm:text-4xl">Bu meslekler en çok hangi ülkelerde aranıyor?</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {countries.map(country => (
            <div key={country.name} className="group relative">
              <div className="bg-brand-surface text-brand-text-secondary font-semibold py-3 px-6 rounded-lg shadow-md cursor-pointer ring-1 ring-gray-200 transform group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                {country.name}
              </div>
              <div className="absolute bottom-full mb-2 w-max max-w-xs p-3 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none left-1/2 -translate-x-1/2 shadow-xl">
                {country.desc}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
