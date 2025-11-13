import React from 'react';
import { Section } from '../types';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const ContactForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic, maybe show a success message
        alert('¡Gracias por tu mensaje!');
    };

    return (
        <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg max-w-md w-full shadow-2xl">
            <h2 className="text-4xl font-bold mb-2">Contáctanos</h2>
            <p className="text-gray-300 mb-6">Dinos cómo podemos ayudarte.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Tu nombre" required className="bg-gray-100 text-black placeholder-gray-500 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                    <input type="text" placeholder="Tu número" required className="bg-gray-100 text-black placeholder-gray-500 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                </div>
                <input type="email" placeholder="Tu email" required className="w-full bg-gray-100 text-black placeholder-gray-500 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                <textarea placeholder="Escribe tu mensaje..." rows={4} required className="w-full bg-gray-100 text-black placeholder-gray-500 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
                <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 text-center uppercase tracking-wider rounded-md hover:bg-orange-600 transition-colors duration-300">
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

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
      <div className="relative z-20 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 pt-28 pb-12 md:py-0">
        <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Tu hogar ideal te espera con Grupo MR Inmobiliaria
            </h1>
            <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 text-gray-200">
              Encuentra la propiedad perfecta en CDMX y Aguascalientes con asesoría profesional y atención personalizada.
            </p>
            <button 
              onClick={() => onNavigate('properties')}
              className="group text-lg font-semibold uppercase tracking-widest flex items-center gap-4 mx-auto md:mx-0"
            >
              Explorar Propiedades
              <span className="block w-16 h-0.5 bg-white transition-all duration-300 group-hover:w-24"></span>
            </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <ContactForm />
        </div>
      </div>
    </section>
  );
};
