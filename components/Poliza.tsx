import React from 'react';

const CoverageItem: React.FC<{ title: string }> = ({ title }) => (
    <li className="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">{title}</span>
    </li>
);

export const Poliza: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-light text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Póliza Jurídica de <span className="text-brand-orange">Arrendamiento</span></h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Protege tu patrimonio y arrienda con total seguridad y tranquilidad.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-gray-700 space-y-4">
                <h3 className="text-2xl font-bold text-brand-dark">¿Por qué es indispensable una Póliza Jurídica?</h3>
                <p className="text-justify">
                    Arrendar una propiedad conlleva riesgos. Una Póliza Jurídica de Arrendamiento es la herramienta más eficaz para proteger a los propietarios. Nos encargamos de investigar a fondo a los posibles inquilinos, formalizar la relación contractual con un contrato sólido y actuar legalmente en caso de incumplimiento, todo para salvaguardar tu inversión.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
                    <h4 className="text-xl font-bold text-brand-dark mb-4">Nuestra Cobertura Incluye:</h4>
                    <ul className="space-y-3">
                        <CoverageItem title="Investigación exhaustiva del inquilino y fiador." />
                        <CoverageItem title="Elaboración de contrato de arrendamiento profesional." />
                        <CoverageItem title="Gestión de cobranza extrajudicial en caso de atraso." />
                        <CoverageItem title="Asistencia en la entrega y recepción del inmueble." />
                        <CoverageItem title="Representación legal en juicios de controversia y desalojo." />
                        <CoverageItem title="Soporte jurídico durante toda la vigencia del contrato." />
                    </ul>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <img 
                src="https://images.pexels.com/photos/7578901/pexels-photo-7578901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Persona firmando un contrato" 
                className="rounded-lg shadow-2xl w-full h-full object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
};