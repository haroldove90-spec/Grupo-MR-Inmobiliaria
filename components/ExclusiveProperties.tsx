import React, { useState, useRef, useEffect } from 'react';
import { Property, Section } from '../types';
import { ExclusivePropertyCard } from './ExclusivePropertyCard';

interface ExclusivePropertiesProps {
  properties: Property[];
  onSelectProperty: (id: number) => void;
  onNavigate: (section: Section) => void;
}

export const ExclusiveProperties: React.FC<ExclusivePropertiesProps> = ({ properties, onSelectProperty, onNavigate }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const exclusiveProperties = properties.slice(0, 8); // Show up to 8 exclusive properties

    const checkScrollButtons = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            checkScrollButtons(); // Initial check
            slider.addEventListener('scroll', checkScrollButtons);
            window.addEventListener('resize', checkScrollButtons);
            
            return () => {
                slider.removeEventListener('scroll', checkScrollButtons);
                window.removeEventListener('resize', checkScrollButtons);
            };
        }
    }, [properties]);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth * 0.8; // Scroll by 80% of visible width
            sliderRef.current.scrollBy({ 
                left: direction === 'left' ? -scrollAmount : scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };
    
    if (exclusiveProperties.length === 0) {
        return null;
    }

    return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Propiedades <span className="text-brand-orange">Exclusivas</span></h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto md:mx-0">
            Sé el primero en explorar listados exclusivos antes de que lleguen al mercado.
          </p>
        </div>

        <div className="relative">
            <div 
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-px-6"
            >
                {exclusiveProperties.map(property => (
                    <div key={property.id} className="snap-start w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] flex-shrink-0">
                        <ExclusivePropertyCard
                            property={property}
                            onSelect={() => onSelectProperty(property.id)}
                        />
                    </div>
                ))}
            </div>
            
            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 bg-white text-brand-dark p-3 rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300 hidden md:flex items-center justify-center"
                    aria-label="Anterior"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 bg-white text-brand-dark p-3 rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300 hidden md:flex items-center justify-center"
                    aria-label="Siguiente"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
        
        <div className="text-center mt-16">
            <button
                onClick={() => onNavigate('properties')}
                className="group text-brand-orange font-semibold uppercase tracking-wider text-sm inline-flex items-center gap-3"
            >
                Ver todas las exclusivas
                <span className="block w-10 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-16"></span>
            </button>
        </div>
      </div>
    </section>
  );
};