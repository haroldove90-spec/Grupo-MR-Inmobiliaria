import React, { useState } from 'react';
import { Property } from '../types';

const InfoIcon: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center space-x-3 text-gray-700">
        <span className="text-brand-orange">{icon}</span>
        <span className="text-lg">{text}</span>
    </div>
);

export const PropertyDetail: React.FC<{ property: Property, onBack: () => void }> = ({ property, onBack }) => {
    const [mainImage, setMainImage] = useState(property.gallery?.[0] || property.imageUrl);
    const [submitted, setSubmitted] = useState(false);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white text-gray-800">
            <div className="container mx-auto px-6">
                <button 
                    onClick={onBack} 
                    className="group flex items-center text-brand-orange font-semibold hover:text-orange-700 transition-colors duration-300 mb-8"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver a Propiedades
                </button>
                
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div>
                           <img src={mainImage} alt={property.title} className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg mb-4" />
                           {property.gallery && property.gallery.length > 0 && (
                             <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                  {property.gallery.map((img, index) => (
                                      <button key={index} onClick={() => setMainImage(img)} className={`focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded-md ${mainImage === img ? 'ring-2 ring-brand-orange ring-offset-2' : ''}`}>
                                          <img 
                                              src={img} 
                                              alt={`${property.title} - vista ${index + 1}`} 
                                              className="w-full h-16 sm:h-24 object-cover rounded-md cursor-pointer"
                                          />
                                      </button>
                                  ))}
                             </div>
                           )}
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Descripción</h2>
                            <p className="text-gray-700 leading-relaxed text-justify">{property.description}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-brand-light p-6 rounded-lg shadow-xl">
                           <h1 className="text-2xl sm:text-3xl font-bold text-brand-dark">{property.title}</h1>
                           <p className="text-gray-600 mt-1 mb-4">{property.location}</p>
                           <p className="text-3xl sm:text-4xl font-bold text-brand-orange mb-6">{formatPrice(property.price)}</p>
                           
                           <div className="space-y-4 mb-8 pb-8 border-b">
                                <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.46 4.383-1.46 4.383a1 1 0 01-.948.684H5a2 2 0 01-2-2V5zM20 5a2 2 0 00-2-2h-3.28a1 1 0 00-.948.684l-1.46 4.383 1.46 4.383a1 1 0 00.948.684H18a2 2 0 002-2V5z" /></svg>} text={`${property.bedrooms} Habitaciones`} />
                                <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} text={`${property.bathrooms} Baños`} />
                                <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5" /></svg>} text={`${property.area} m²`} />
                           </div>

                           <h3 className="text-xl font-bold mt-6 mb-4">Solicitar Información</h3>
                           {submitted ? (
                                <div className="text-center p-4 bg-green-100 text-green-800 rounded-md">
                                    <h4 className="font-bold">¡Gracias!</h4>
                                    <p className="text-sm">Su mensaje ha sido enviado.</p>
                                </div>
                           ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="text" placeholder="Su nombre" required className="w-full px-4 py-2 bg-gray-100 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange transition" />
                                    <input type="email" placeholder="Su email" required className="w-full px-4 py-2 bg-gray-100 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange transition" />
                                    <textarea rows={4} defaultValue={`Hola, estoy interesado/a en la propiedad "${property.title}" (${property.location}). Me gustaría recibir más información. Gracias.`} className="w-full px-4 py-2 bg-gray-100 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange transition"></textarea>
                                    <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 text-center uppercase tracking-wider rounded-md hover:bg-orange-600 transition-colors duration-300">
                                        Enviar Consulta
                                    </button>
                                </form>
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};