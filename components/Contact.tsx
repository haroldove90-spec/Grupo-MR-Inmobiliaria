import React, { useState } from 'react';

const FormInput: React.FC<{
    id: string;
    label: string;
    type?: string;
    placeholder: string;
    required?: boolean;
}> = ({ id, label, type = 'text', placeholder, required = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            required={required}
            className="w-full px-4 py-2 bg-gray-100 text-black placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange transition"
        />
    </div>
);

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Póngase en <span className="text-brand-orange">Contacto</span></h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Estamos aquí para ayudarle. Envíenos un mensaje y nos pondremos en contacto a la brevedad.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-brand-light p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Envíenos un Mensaje</h3>
                {submitted ? (
                    <div className="text-center p-8 bg-green-100 text-green-800 rounded-md">
                        <h4 className="font-bold text-xl">¡Gracias!</h4>
                        <p>Su mensaje ha sido enviado. Nos pondremos en contacto con usted pronto.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <FormInput id="name" label="Nombre Completo" placeholder="Su Nombre" required />
                        <FormInput id="email" type="email" label="Correo Electrónico" placeholder="su@email.com" required />
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="¿En qué podemos ayudarle?"
                                required
                                className="w-full px-4 py-2 bg-gray-100 text-black placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange transition"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-orange text-white font-bold py-3 px-6 text-lg uppercase tracking-wider rounded-sm shadow-md hover:bg-orange-600 transition-colors duration-300"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                )}
            </div>
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
                    <div className="space-y-3 text-gray-700">
                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Oficinas en CDMX y Aguascalientes</p>
                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.46 4.383-1.46 4.383a1 1 0 01-.948.684H5a2 2 0 01-2-2V5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.318c-1.397-1.397-3.6-2.16-5.482-1.226l-1.46 4.383a1 1 0 01-1.896 0L9.72 4.318c.934-1.882.17-4.085-1.227-5.482L5 3m16 12.318c-1.397-1.397-2.16-3.6-1.226-5.482l4.383-1.46a1 1 0 011.896 0l-4.383 12.44a1 1 0 01-1.896 0z" /></svg> +52 55 1234 5678</p>
                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> contacto@grupomrinmobiliaria.com</p>
                    </div>
                </div>
                <div>
                     <img src="https://media.istockphoto.com/id/1497684257/es/foto/agente-de-bienes-ra%C3%ADces-explique-los-planos-de-la-casa-para-ver-los-planos-de-la-casa-y-los.jpg?s=612x612&w=0&k=20&c=jMSaeun9OaEoxlQSyZUS9mOkMbfHB48NnSaB3siNGf4=" alt="Map" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};