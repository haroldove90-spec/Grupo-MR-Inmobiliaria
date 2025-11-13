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
  isMobile?: boolean;
}> = ({ section, label, activeSection, onNavigate, isMobile = false }) => {
  const isActive = activeSection === section || (activeSection === 'propertyDetail' && section === 'properties');
  
  return (
    <button
      onClick={() => onNavigate(section)}
      className={`
        ${isMobile ? 'block w-full text-center py-3 text-lg' : 'px-3 py-2 text-sm'}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    { section: 'contact', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img 
          src="https://appdesignmex.com/grupomrinmobiliario.png"
          alt="Grupo MR Inmobiliaria Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => onNavigate('home')}
        />
        
        <nav className="hidden md:flex items-center">
          {navItems.map(item => (
            <NavLink key={item.section} {...item} activeSection={activeSection} onNavigate={onNavigate} />
          ))}
          {isAdmin && <NavLink section="admin" label="Panel Admin" activeSection={activeSection} onNavigate={onNavigate} />}
        </nav>

        <div className="hidden md:flex items-center">
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

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none z-20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-sm absolute top-0 left-0 w-full h-screen pt-24">
          <nav className="flex flex-col items-center gap-4">
            {navItems.map(item => (
                <NavLink 
                    key={item.section} 
                    {...item}
                    activeSection={activeSection} 
                    onNavigate={(section) => {
                        onNavigate(section);
                        setIsMenuOpen(false);
                    }} 
                    isMobile 
                />
            ))}
            {isAdmin && <NavLink section="admin" label="Panel Admin" activeSection={activeSection} onNavigate={(section) => { onNavigate(section); setIsMenuOpen(false); }} isMobile />}
             <div className="mt-6 border-t border-gray-700 w-full flex justify-center pt-6">
                <button 
                  onClick={() => { onToggleAdmin(); setIsMenuOpen(false); }}
                  className="flex items-center gap-3 text-lg font-semibold p-3 px-6 rounded-full border border-white/50 hover:bg-white/10 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    {isAdmin ? 'Salir' : 'Admin'}
                </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};