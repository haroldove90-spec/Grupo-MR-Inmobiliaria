
import React from 'react';
import { Section } from '../types';

interface FooterProps {
    onNavigate: (section: Section) => void;
}

const FooterLink: React.FC<{
    section: Section;
    label: string;
    onNavigate: (section: Section) => void;
}> = ({ section, label, onNavigate }) => (
    <button
        onClick={() => onNavigate(section)}
        className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
    >
        {label}
    </button>
);


export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">Grupo MR <span className="text-brand-orange">Inmobiliaria</span></h3>
            <p className="text-gray-400">Su socio de confianza en bienes raíces.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">Navegación</h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink section="home" label="Inicio" onNavigate={onNavigate} />
              <FooterLink section="about" label="Nosotros" onNavigate={onNavigate} />
              <FooterLink section="properties" label="Propiedades" onNavigate={onNavigate} />
              <FooterLink section="contact" label="Contacto" onNavigate={onNavigate} />
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">Síganos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
                {/* Placeholder social icons */}
                <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                 <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.003 3.905a1.532 1.532 0 100 3.064 1.532 1.532 0 000-3.064zm-7.15 1.532a1.532 1.532 0 100 3.064 1.532 1.532 0 000-3.064zm11.332-1.47a1.182 1.182 0 100 2.364 1.182 1.182 0 000-2.364zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666z" clipRule="evenodd" /></svg>
                </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Grupo MR Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};