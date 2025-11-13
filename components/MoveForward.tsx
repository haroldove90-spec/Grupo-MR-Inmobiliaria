import React, { useState } from 'react';

type ServiceItem = 'buy' | 'sell' | 'rent';

const serviceData = {
    buy: {
        title: 'Comprar una casa',
        content: "Encuentra tu lugar con una experiencia fotográfica inmersiva y los listados más completos, incluyendo cosas que no encontrarás en ningún otro lugar.",
    },
    sell: {
        title: 'Vender una casa',
        content: "Utilizamos marketing estratégico y una amplia red para encontrar al comprador adecuado y obtener el mejor precio por tu propiedad.",
    },
    rent: {
        title: 'Rentar una casa',
        content: "Desde apartamentos de lujo hasta casas familiares, te ayudaremos a encontrar la propiedad de alquiler perfecta que se ajuste a tu estilo de vida y presupuesto.",
    },
};

export const MoveForward: React.FC = () => {
    const [activeItem, setActiveItem] = useState<ServiceItem>('buy');

    return (
        <section className="bg-brand-light">
            <div className="grid md:grid-cols-2">
                <div className="w-full min-h-[400px] md:h-auto">
                    <img 
                        src="https://admin.alfamexico.com/noauth/image/gw/2024%7C04%7C0137137-05.jpg"
                        alt="Modern interior of a luxurious house"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="bg-brand-dark text-white flex items-center">
                    <div className="p-12 md:p-16 lg:p-20 w-full">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                            Nos especializamos en la compra, venta y renta de inmuebles en Ciudad de México y Aguascalientes.
                        </h2>
                        <p className="text-lg text-gray-300 mb-10">
                            Ofrecemos soluciones personalizadas que se adaptan a tus necesidades. Con nosotros, cada propiedad representa una oportunidad para crecer, invertir y vivir mejor.
                        </p>
                        <div>
                            {(['buy', 'sell', 'rent'] as ServiceItem[]).map(key => {
                                const isOpen = activeItem === key;
                                const item = serviceData[key];
                                return (
                                    <div key={key} className="py-5 border-b border-gray-700 last:border-none">
                                        <button
                                            onClick={() => setActiveItem(key)}
                                            className="w-full flex items-start text-left gap-4"
                                            aria-expanded={isOpen}
                                            aria-controls={`service-content-${key}`}
                                        >
                                            <span className="text-xl font-bold pt-1">{isOpen ? '−' : '+'}</span>
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                        </button>
                                        {isOpen && (
                                            <div id={`service-content-${key}`} className="pt-2 pl-[36px] text-gray-300">
                                            <p>{item.content}</p>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};