
import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    fill="none" 
    {...props}
  >
    {/* 0. BACKGROUND APP ICON SHAPE */}
    {/* Gri, köşeleri bükümlü kare zemin */}
    <rect x="0" y="0" width="100" height="100" rx="22" fill="#F3F4F6" />

    {/* 1. PAPER / DOCUMENT LAYER (Arka Plan) */}
    {/* Hafif gölgeli, yuvarlak köşeli kağıt - Scale kaldırıldı, orijinal koordinatlar */}
    <rect x="25" y="10" width="50" height="60" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
    
    {/* Paper Content: Header Bar */}
    <rect x="32" y="20" width="36" height="6" rx="2" fill="#374151" />
    
    {/* Paper Content: Lines */}
    <rect x="32" y="32" width="26" height="3" rx="1.5" fill="#9CA3AF" />
    <rect x="32" y="40" width="20" height="3" rx="1.5" fill="#9CA3AF" />
    
    {/* Paper Content: Location Pin Hint (İş yeri vurgusu) */}
    <circle cx="68" cy="40" r="3" fill="#3B82F6" opacity="0.8" />

    {/* 2. POCKET LAYER (Ön Katman) */}
    {/* Cebi temsil eden kalkanımsı yapı. Brand color koyu ton. */}
    <path 
      d="M15 55 H85 V62 C85 82 70 95 50 95 C30 95 15 82 15 62 V55 Z" 
      fill="#1F2937" 
    />
    
    {/* Pocket Stitching (Dikiş İzi - Detay ve Kalite Algısı için) */}
    <path 
      d="M20 58 V62 C20 78 32 90 50 90 C68 90 80 78 80 62 V58" 
      stroke="#4B5563" 
      strokeWidth="2" 
      strokeDasharray="4 4" 
      strokeLinecap="round"
      fill="none"
    />

    {/* 3. NOTIFICATION LAYER (Aksiyon Çağrısı) */}
    {/* Sağ üst köşede, kağıdın ve cebin üstünde patlayan bildirim */}
    <circle cx="82" cy="18" r="10" fill="#D946EF" stroke="white" strokeWidth="3" />
    <circle cx="82" cy="18" r="3" fill="white" />
  </svg>
);

export default Logo;
