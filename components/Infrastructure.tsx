
import React from 'react';

const features = [
  "Pasaport ve belge tarama",
  "Mesleğe göre veri tabanı analizi",
  "Güncel ilan araştırma ve getirme",
  "CV oluşturma desteği",
  "Yabancı dil ve başvuru metni desteği",
  "Gelişmiş asistan yönlendirmesi",
  "Fotoğraf düzenleme",
  "Şirket araştırma ve firma bilgileri",
];

const CheckIcon = () => <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

const Infrastructure: React.FC = () => {
  return (
    <section className="bg-brand-surface py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-text-primary sm:text-4xl">Gelişmiş Dijital Altyapı ile Çalışır</h2>
          <p className="mt-4 text-lg text-brand-text-secondary">Arka planda, iş bulma sürecinizi kolaylaştıran güçlü bir teknoloji var.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6">
          {features.map(feature => (
            <div key={feature} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <CheckIcon />
              </div>
              <p className="text-lg text-brand-text-primary">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
