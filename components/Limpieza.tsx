import React from 'react';

const ServiceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">{children}</span>
    </li>
);

export const Limpieza: React.FC = () => {
    const whatsappLink = "https://wa.me/525624850092?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20para%20el%20servicio%20de%20limpieza.";
  
  return (
    <section 
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-light text-gray-800"
        style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')"
        }}
    >
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                    <img src="https://appdesignmex.com/mr.jpg" alt="Logo Limpieza MR" className="h-20 w-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-800 uppercase leading-tight">
                        Servicio de Limpieza
                    </h1>
                    <p className="mt-4 text-lg font-semibold text-blue-600">
                        LIMPIEZA PARA MUDANZA EN CASAS, DEPARTAMENTOS, OFICINAS, LOCALES, ETC
                    </p>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Servicios Ofrecidos:
                        </h2>
                        <ul className="space-y-4 text-lg">
                            <ServiceItem>Una limpieza General del hogar antes de irse o al llegar.</ServiceItem>
                            <ServiceItem>Limpieza que van desde oficinas hasta consultorios, cualquier necesidad que requieran nuestros clientes.</ServiceItem>
                            <ServiceItem>Limpieza profunda: Sala, comedor, cocina, recámaras, los baños, las ventanas, los pisos entre más.</ServiceItem>
                        </ul>
                    </div>

                    <div className="mt-10 space-y-5">
                         <a 
                            href={whatsappLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-blue-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-105 duration-300 w-full sm:w-auto"
                        >
                            <span>COTIZACIÓN</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a 
                            href={whatsappLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center sm:justify-start gap-3 text-gray-600 font-semibold hover:text-green-600 transition-colors duration-300"
                        >
                             <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.75.45 3.41 1.28 4.89L2 22l5.25-1.38c1.44.78 3.05 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.01 20.14h-.01c-1.5 0-2.95-.4-4.22-1.14l-.3-.18-3.13.82.84-3.05-.2-.32a8.03 8.03 0 01-1.22-4.28c0-4.42 3.59-8.02 8.02-8.02s8.02 3.6 8.02 8.02-3.6 8.02-8.02 8.02zm4.53-6.17c-.27-.14-1.61-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.4-.42.14-.1.18-.18.27-.31.09-.14.05-.27 0-.41-.05-.14-.61-1.45-.83-2-.22-.54-.45-.47-.61-.47h-.52c-.18 0-.45.09-.69.31-.24.22-.92.9-1.12 2.17-.2 1.27.24 2.5.27 2.68.03.18 1.14 1.75 2.76 2.44 1.62.69 2.89 1.1 3.32 1.4.67.45 1.09.36 1.27.22.2-.16.83-.96.95-1.14.12-.18.24-.14.41-.09.18.05 1.1.52 1.29.61.19.09.32.14.36.22.04.09.04.54-.02.62-.07.09-.27.14-.54.27z"/></svg>
                             <span>WhatsApp 56 2485 0092</span>
                        </a>
                    </div>
                </div>
                <div className="h-64 md:h-full">
                     <img 
                        src="https://images.pexels.com/photos/6197116/pexels-photo-6197116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Cesta con productos de limpieza profesionales" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};