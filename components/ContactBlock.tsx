import React from 'react';

export const ContactBlock: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    };

    return (
        <section className="py-16 md:py-24 bg-brand-dark border-t-2 border-brand-orange/20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿Listo para dar el siguiente paso?</h2>
                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                    Ponte en contacto con nosotros. Nuestro equipo de expertos está listo para ayudarte a encontrar la propiedad de tus sueños.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Tu nombre" required className="bg-gray-800 text-white placeholder-gray-400 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                        <input type="text" placeholder="Tu número" required className="bg-gray-800 text-white placeholder-gray-400 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                    </div>
                    <input type="email" placeholder="Tu email" required className="w-full bg-gray-800 text-white placeholder-gray-400 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                    <textarea placeholder="Escribe tu mensaje..." rows={4} required className="w-full bg-gray-800 text-white placeholder-gray-400 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
                    <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 text-center uppercase tracking-wider rounded-md hover:bg-orange-600 transition-colors duration-300">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
};