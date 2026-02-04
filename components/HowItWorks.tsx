
import React from 'react';

const LoginIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>;
const ProfileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const CheckListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;


const steps = [
  { number: 1, title: "Giriş Yap", description: "Platforma kolayca kaydolun veya giriş yapın.", icon: <LoginIcon /> },
  { number: 2, title: "Mesleğini Belirt", description: "Uzmanlık alanlarınızı ve tecrübelerinizi sisteme tanımlayın.", icon: <ProfileIcon /> },
  { number: 3, title: "Sistem Araştırsın", description: "Arkanıza yaslanın, sistem binlerce ilanı sizin için tarasın.", icon: <SearchIcon /> },
  { number: 4, title: "En Uygun İşler Gelsin", description: "Size en uygun ilanlar analiz edilir ve önceliklendirilir.", icon: <CheckListIcon /> },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-text-primary sm:text-4xl">Nasıl Çalışır?</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-300"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            {steps.map(step => (
              <div key={step.number} className="text-center">
                <div className="flex justify-center items-center mb-4">
                    <div className="relative z-10 w-24 h-24 flex items-center justify-center bg-brand-surface text-brand-blue font-bold text-2xl rounded-full shadow-lg border-2 border-gray-200">
                        {step.icon}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-brand-text-primary mb-2">{step.title}</h3>
                <p className="text-brand-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
