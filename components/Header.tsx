import React, { useState, useEffect } from 'react';
import { Section } from '../types';

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

const NavLink: React.FC<{
  section: Section;
  label: string;
  activeSection: Section;
  onNavigate: (section: Section) => void;
}> = ({ section, label, activeSection, onNavigate }) => {
  const isActive = activeSection === section || (activeSection === 'propertyDetail' && section === 'properties');
  
  return (
    <button
      onClick={() => onNavigate(section)}
      className={`
        px-3 py-2 text-sm
        font-semibold uppercase tracking-wider transition-colors duration-300
        ${isActive 
          ? 'text-brand-orange' 
          : 'text-white hover:text-brand-orange'}
      `}
    >
      {label}
    </button>
  );
};

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, isAdmin, onToggleAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems: { section: Section; label: string }[] = [
    { section: 'home', label: 'Inicio' },
    { section: 'about', label: 'Nosotros' },
    { section: 'properties', label: 'Propiedades' },
    { section: 'limpieza', label: 'Limpieza' },
    { section: 'poliza', label: 'Póliza Jurídica' },
    { section: 'contact', label: 'Contacto' },
  ];

  const isAlwaysOpaque = !['home'].includes(activeSection);
  const headerBgClass = isAlwaysOpaque || isScrolled ? 'bg-brand-dark shadow-lg' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img 
          src="https://appdesignmex.com/grupomrinmobiliario.png"
          alt="Grupo MR Inmobiliaria Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => onNavigate('home')}
        />
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center">
            {navItems.map(item => (
              <NavLink key={item.section} {...item} activeSection={activeSection} onNavigate={onNavigate} />
            ))}
          </nav>
          <button 
            onClick={onToggleAdmin}
            className="flex items-center gap-2 text-sm font-semibold p-2 px-4 rounded-full border border-white/50 hover:bg-white/10 transition-colors"
            title={isAdmin ? 'Cerrar Sesión' : 'Iniciar Sesión como Administrador'}
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              {isAdmin ? 'Salir' : 'Admin'}
          </button>
        </div>

      </div>
    </header>
  );
};