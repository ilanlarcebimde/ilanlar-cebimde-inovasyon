
import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';

const features = [
  "İlanları senin yerine araştırır",
  "Mesleğinle uyumlu işleri analiz eder",
  "İlanları sadeleştirir",
  "Başvuru sürecini adım adım açıklar"
];

const Card: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-brand-surface p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
    <div className="flex items-center space-x-3">
      <CheckCircleIcon className="h-7 w-7 text-green-500 flex-shrink-0" />
      <h3 className="text-lg font-semibold text-brand-text-primary">{title}</h3>
    </div>
  </div>
);

const SystemSupport: React.FC = () => {
  return (
    <section className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-text-primary sm:text-4xl">
              Sistem Sana Nasıl Yardımcı Olur?
            </h2>
            <p className="mt-4 text-lg text-brand-text-secondary">
              Platformumuz, iş arama sürecinin her adımında yanınızda.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} title={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemSupport;
