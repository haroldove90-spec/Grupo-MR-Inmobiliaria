import React from 'react';
import { Section } from '../types';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section 
      className="relative min-h-screen min-h-[700px] flex items-center text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img 
        src="https://realdelsolags.mx/media/casas/jacaranda_01.jpg" 
        alt="Fachada de casa moderna de dos pisos"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-6 flex flex-col justify-center items-center pt-28 pb-12 md:py-0">
        <div className="w-full md:w-3/4 lg:w-2/3 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Tu hogar ideal te espera con Grupo MR Inmobiliaria
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
              Encuentra la propiedad perfecta en CDMX y Aguascalientes con asesoría profesional y atención personalizada.
            </p>
            <button 
              onClick={() => onNavigate('properties')}
              className="group text-lg font-semibold uppercase tracking-widest flex items-center gap-4 mx-auto"
            >
              Explorar Propiedades
              <span className="block w-16 h-0.5 bg-white transition-all duration-300 group-hover:w-24"></span>
            </button>
        </div>
      </div>
    </section>
  );
};