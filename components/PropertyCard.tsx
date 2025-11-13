import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onSelect: () => void;
}

const InfoIcon: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center space-x-2 text-gray-600">
        {icon}
        <span>{text}</span>
    </div>
);

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <button 
      onClick={onSelect}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col text-left w-full focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
    >
      <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-brand-dark mb-2">{property.title}</h3>
        <p className="text-gray-500 mb-4">{property.location}</p>
        <div className="grid grid-cols-3 gap-4 text-sm mb-4">
          <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.46 4.383-1.46 4.383a1 1 0 01-.948.684H5a2 2 0 01-2-2V5zM20 5a2 2 0 00-2-2h-3.28a1 1 0 00-.948.684l-1.46 4.383 1.46 4.383a1 1 0 00.948.684H18a2 2 0 002-2V5z" /></svg>} text={`${property.bedrooms} hab.`} />
          <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} text={`${property.bathrooms} baños`} />
          <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5" /></svg>} text={`${property.area} m²`} />
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200">
           <p className="text-2xl font-bold text-brand-orange">{formatPrice(property.price)}</p>
        </div>
      </div>
    </button>
  );
};
