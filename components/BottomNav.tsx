import React from 'react';
import { Section } from '../types';

interface BottomNavProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const NavItem: React.FC<{
    section: Section;
    label: string;
    icon: React.ReactNode;
    activeSection: Section;
    onNavigate: (section: Section) => void;
}> = ({ section, label, icon, activeSection, onNavigate }) => {
    const isActive = activeSection === section || (activeSection === 'propertyDetail' && section === 'properties');
    return (
        <button
            onClick={() => onNavigate(section)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors duration-200 ${isActive ? 'text-brand-dark' : 'text-white/80 hover:text-white'}`}
        >
            <div className={isActive ? 'animate-pulse-icon' : ''}>
                {icon}
            </div>
            <span className="text-xs mt-1 font-medium tracking-wide">{label}</span>
        </button>
    );
};

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
    const navItems = [
        { section: 'home', label: 'Inicio', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
        { section: 'properties', label: 'Propiedades', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-8h1m-5 8h1m-1-4h1m-1-4h1" /></svg> },
        { section: 'limpieza', label: 'Limpieza', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M19 3v4M17 5h4M14 11l-1.46-1.46a5 5 0 01-7.08 7.08L1 21M17 17l4 4M21 1l-4 4" /></svg> },
        { section: 'poliza', label: 'Póliza', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.243A12.07 12.07 0 0118 9.05c0 3.866-3.582 7-8 7s-8-3.134-8-7c0-1.4.347-2.73.968-3.882l-1.07-1.071A11.956 11.956 0 001 9.05c0 5.523 4.477 10 10 10s10-4.477 10-10c0-2.42-.863-4.634-2.305-6.382l-1.07 1.07z" /></svg> },
        { section: 'contact', label: 'Contacto', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-orange border-t border-orange-700/50 h-16 flex items-stretch z-40">
            {navItems.map(item => (
                <NavItem key={item.section} {...item} activeSection={activeSection} onNavigate={onNavigate} />
            ))}
        </nav>
    );
};