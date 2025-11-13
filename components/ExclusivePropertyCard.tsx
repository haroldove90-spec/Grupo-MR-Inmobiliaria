import React from 'react';
import { Property } from '../types';

interface ExclusivePropertyCardProps {
  property: Property;
  onSelect: () => void;
}

export const ExclusivePropertyCard: React.FC<ExclusivePropertyCardProps> = ({ property, onSelect }) => {
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
      className="relative flex-shrink-0 w-full h-96 rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-brand-orange"
    >
      <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white text-left w-full">
        <h3 className="text-lg font-semibold truncate">{property.title}</h3>
        <p className="text-2xl font-bold mt-1">{formatPrice(property.price)}</p>
        <p className="text-sm opacity-80 mt-2">
          {`${property.bedrooms} hab. | ${property.bathrooms} baños | ${property.area} m²`}
        </p>
      </div>
    </button>
  );
};
