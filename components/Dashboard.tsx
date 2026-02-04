
import React, { useState } from 'react';
import { User } from 'firebase/auth';

interface DashboardProps {
  user: User;
}

// Mock Veriler (Sistem kuralına uygun örnek veriler)
const mockHistory = [
  { id: 1, date: "10.03.2024", time: "14:30", action: "İlan Arama", detail: "Almanya - Elektrik Ustası" },
  { id: 2, date: "09.03.2024", time: "09:15", action: "CV Oluşturma", detail: "Almanca CV Hazırlandı" },
  { id: 3, date: "08.03.2024", time: "16:45", action: "Belge Tarama", detail: "Pasaport Yüklendi" },
  { id: 4, date: "08.03.2024", time: "16:40", action: "Profil Düzenleme", detail: "Meslek bilgisi güncellendi" },
];

const mockDocuments = [
  { id: 1, type: "CV", name: "Mehmet_Yilmaz_CV_DE.pdf", lang: "Almanca" },
  { id: 2, type: "CV", name: "Mehmet_Yilmaz_CV_TR.pdf", lang: "Türkçe" },
  { id: 3, type: "Mektup", name: "Niyet_Mektubu_Siemens.pdf", lang: "Almanca" },
];

const mockJobs = [
  { id: 1, title: "Elektrik Bakım Uzmanı", company: "Siemens Energy", location: "Berlin, Almanya", status: "Başvuruldu" },
  { id: 2, title: "Şantiye Şefi (Elektrik)", company: "Hochtief", location: "Münih, Almanya", status: "İncelendi" },
  { id: 3, title: "Pano Montaj Ustası", company: "Alstom", location: "Viyana, Avusturya", status: "Önerilen" },
];

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'history' | 'documents' | 'jobs' | 'companies'>('history');

  const TabButton: React.FC<{ id: typeof activeTab; label: string; icon: React.ReactNode }> = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto ${
        activeTab === id 
          ? 'bg-brand-blue text-white shadow-md' 
          : 'bg-white text-brand-text-secondary hover:bg-gray-50 border border-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-brand-bg py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Bilgi Kartı */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="h-20 w-20 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-2xl font-bold border-2 border-white shadow-sm shrink-0">
             {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl font-bold text-brand-text-primary">{user.displayName || "Kullanıcı"}</h1>
            <p className="text-brand-text-secondary">{user.email}</p>
            <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Hesap Aktif</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">Elektrik Ustası</span>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-xs text-brand-text-secondary">Son Giriş</p>
            <p className="text-sm font-semibold text-brand-text-primary">{new Date().toLocaleDateString('tr-TR')}</p>
          </div>
        </div>

        {/* Sekmeler */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <TabButton id="profile" label="Profil Bilgilerim" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
          <TabButton id="history" label="İşlem Geçmişim" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
          <TabButton id="documents" label="Belgelerim" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} />
          <TabButton id="jobs" label="İlan Geçmişim" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} />
        </div>

        {/* İçerik Alanı */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[400px]">
          
          {/* 1. PROFİL BİLGİLERİM */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-xl font-bold text-brand-text-primary border-b border-gray-100 pb-4">Profil Bilgileri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-text-secondary">Ad Soyad</label>
                    <input type="text" value={user.displayName || ""} disabled className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm px-4 py-2 text-brand-text-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text-secondary">E-posta</label>
                    <input type="text" value={user.email || ""} disabled className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm px-4 py-2 text-brand-text-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text-secondary">Meslek</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 text-brand-text-primary focus:border-brand-blue focus:ring focus:ring-brand-blue/20">
                      <option>Elektrik Ustası</option>
                      <option>Kaynakçı</option>
                      <option>İnşaat Ustası</option>
                    </select>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-brand-text-primary mb-3">Sistem Durumu</h3>
                  <ul className="space-y-2 text-sm text-brand-text-secondary">
                    <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>E-posta doğrulandı</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Profil fotoğrafı yüklendi</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>Telefon numarası eksik</li>
                  </ul>
                  <button className="mt-4 text-sm text-brand-blue font-medium hover:underline">Düzenle</button>
                </div>
              </div>
            </div>
          )}

          {/* 2. İŞLEM GEÇMİŞİM (KRİTİK) */}
          {activeTab === 'history' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-xl font-bold text-brand-text-primary">İşlem Geçmişi</h2>
                <span className="text-xs text-brand-text-secondary bg-gray-100 px-2 py-1 rounded">Son 30 gün</span>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih / Saat</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem Türü</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detay</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockHistory.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-text-secondary">
                          <div className="font-medium text-brand-text-primary">{item.date}</div>
                          <div className="text-xs">{item.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item.action.includes('Arama') ? 'bg-blue-100 text-blue-800' : 
                              item.action.includes('Oluşturma') ? 'bg-green-100 text-green-800' : 
                              'bg-gray-100 text-gray-800'}`}>
                            {item.action}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-brand-text-primary whitespace-nowrap">{item.detail}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-brand-blue hover:text-blue-900">Detay Gör</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. BELGELERİM */}
          {activeTab === 'documents' && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-brand-text-primary mb-6 border-b border-gray-100 pb-4">Oluşturulan Belgeler</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockDocuments.map((doc) => (
                  <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                          <p className="font-medium text-brand-text-primary truncate max-w-[150px]">{doc.name}</p>
                          <p className="text-xs text-brand-text-secondary">{doc.type} • {doc.lang}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 bg-white border border-gray-300 text-brand-text-primary text-sm py-1.5 rounded hover:bg-gray-50">Önizle</button>
                      <button className="flex-1 bg-brand-blue text-white text-sm py-1.5 rounded hover:bg-blue-600 flex items-center justify-center space-x-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        <span>İndir</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. İLAN GEÇMİŞİM */}
          {activeTab === 'jobs' && (
            <div className="animate-fadeIn">
               <h2 className="text-xl font-bold text-brand-text-primary mb-6 border-b border-gray-100 pb-4">İlan Geçmişi</h2>
               <div className="space-y-4">
                 {mockJobs.map(job => (
                   <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-brand-blue transition-colors">
                     <div>
                       <h3 className="font-bold text-lg text-brand-text-primary">{job.title}</h3>
                       <p className="text-brand-text-secondary text-sm">{job.company} • {job.location}</p>
                     </div>
                     <div className="mt-3 sm:mt-0 flex items-center space-x-3">
                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                         job.status === 'Başvuruldu' ? 'bg-green-100 text-green-700' :
                         job.status === 'Önerilen' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                       }`}>
                         {job.status}
                       </span>
                       <button className="text-brand-text-secondary hover:text-brand-blue">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                       </button>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* 5. ŞİRKET ARAŞTIRMALARI (BOŞ DURUM ÖRNEĞİ) */}
          {activeTab === 'companies' && (
            <div className="animate-fadeIn text-center py-12">
              <div className="bg-gray-50 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-3m-6 3v-3m12 3v-3m-6 3v-3" /></svg>
              </div>
              <h3 className="text-lg font-medium text-brand-text-primary">Henüz bir şirket incelemediniz</h3>
              <p className="text-brand-text-secondary mt-2 max-w-sm mx-auto">İlanları incelerken şirket profillerine tıkladığınızda geçmişiniz burada listelenir.</p>
              <button className="mt-6 px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-600 transition-colors">
                İlanlara Göz At
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
