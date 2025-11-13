import React from 'react';
import { PropertyCard } from './PropertyCard';
import { Property } from '../types';

interface PropertiesProps {
  properties: Property[];
  onSelectProperty: (id: number) => void;
}

export const Properties: React.FC<PropertiesProps> = ({ properties, onSelectProperty }) => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Propiedades <span className="text-brand-orange">Destacadas</span></h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Una selección curada de las mejores residencias disponibles.</p>
        </div>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onSelect={() => onSelectProperty(property.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-700">No hay propiedades disponibles</h3>
            <p className="text-gray-500 mt-2">Por favor, vuelva a consultar más tarde.</p>
          </div>
        )}
      </div>
    </section>
  );
};