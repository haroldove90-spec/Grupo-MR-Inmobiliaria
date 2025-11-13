
import React from 'react';

const TeamMember: React.FC<{ name: string; title: string; imageUrl: string }> = ({ name, title, imageUrl }) => (
    <div className="text-center">
        <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-brand-orange">{title}</p>
    </div>
);

export const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Sobre <span className="text-brand-orange">Grupo MR Inmobiliaria</span></h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Más que una inmobiliaria, somos sus socios en la búsqueda de un estilo de vida excepcional.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://img.freepik.com/fotos-premium/promotor-bienes-raices-mediana-edad-reunion-ingenieros-construccion-mini-ciudad-modelo-construccion_482257-26511.jpg" alt="Office interior" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div className="text-gray-700 space-y-4 text-justify">
            <h3 className="text-2xl font-bold text-brand-dark">Nuestra Misión</h3>
            <p>En Grupo MR Inmobiliaria, nuestra misión es conectar a personas exigentes con las propiedades más extraordinarias del mundo. Creemos que un hogar es más que una estructura; es el santuario donde se crean los recuerdos y se viven los sueños. Por eso, nos dedicamos a ofrecer un servicio impecable, discreto y personalizado.</p>
            <p>Con décadas de experiencia combinada en el mercado de bienes raíces de lujo, nuestro equipo posee un conocimiento inigualable y una pasión por la excelencia. Entendemos las sutilezas de cada transacción y nos esforzamos por superar las expectativas en cada paso del camino.</p>
          </div>
        </div>

        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Conozca a Nuestro Equipo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <TeamMember name="Alejandro Vargas" title="Fundador y CEO" imageUrl="https://www.siia.net/wp-content/uploads/2024/03/Carlos-Lujan-1024x1024.png" />
                <TeamMember name="Isabella Montoya" title="Directora de Ventas" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANdGcRWVMvxRvJKG2psKQxf5ZgZ48IqvF_uYzcf4Q&s" />
                <TeamMember name="Mateo Rojas" title="Especialista en Propiedades" imageUrl="https://m.media-amazon.com/images/I/61kdJZI+2kL._SY450_CR0%2C0%2C450%2C450_.jpg" />
                <TeamMember name="Sofia Castillo" title="Gerente de Marketing" imageUrl="https://www.vitalvoices.org/wp-content/uploads/2023/08/Maria-Sofia-Castillo_pic-1.png" />
            </div>
        </div>
      </div>
    </section>
  );
};