import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Properties } from './components/Properties';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PropertyDetail } from './components/PropertyDetail';
import { AdminDashboard } from './components/AdminDashboard';
import { Section, Property } from './types';
import { mockProperties } from './data';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [properties, setProperties] = useState<Property[]>(() => {
    try {
      const savedProperties = localStorage.getItem('properties');
      if (savedProperties) {
        return JSON.parse(savedProperties);
      }
    } catch (error) {
      console.error("Could not parse properties from localStorage", error);
    }
    return mockProperties;
  });

  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(properties));
  }, [properties]);

  const navigateTo = useCallback((section: Section) => {
    setActiveSection(section);
    setSelectedPropertyId(null);
     if (section !== 'home') {
        window.scrollTo(0, 0);
    }
  }, []);

  const handleToggleAdmin = () => {
    setIsAdmin(prev => !prev);
    navigateTo('home');
  };

  const handleSelectProperty = (id: number) => {
    setSelectedPropertyId(id);
    setActiveSection('propertyDetail');
    window.scrollTo(0, 0);
  };

  const handleSaveProperty = (propertyData: Omit<Property, 'id'> & { id?: number }) => {
    if (propertyData.id) {
      setProperties(prev => prev.map(p => p.id === propertyData.id ? { ...p, ...propertyData } as Property : p));
    } else {
      setProperties(prev => [...prev, { ...propertyData, id: Date.now() } as Property]);
    }
  };

  const handleDeleteProperty = (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta propiedad?')) {
      setProperties(prev => prev.filter(p => p.id !== id));
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onNavigate={navigateTo} />;
      case 'about':
        return <About />;
      case 'properties':
        return <Properties properties={properties} onSelectProperty={handleSelectProperty} />;
      case 'contact':
        return <Contact />;
      case 'propertyDetail': {
        const property = properties.find(p => p.id === selectedPropertyId);
        if (property) {
          return <PropertyDetail property={property} onBack={() => navigateTo('properties')} />;
        }
        return <Properties properties={properties} onSelectProperty={handleSelectProperty} />; // Fallback
      }
      case 'admin': {
        if (isAdmin) {
          return <AdminDashboard properties={properties} onSave={handleSaveProperty} onDelete={handleDeleteProperty} />;
        }
        return <Hero onNavigate={navigateTo} />; // Fallback if not admin
      }
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="font-sans bg-brand-dark text-brand-light">
      <Header 
        activeSection={activeSection} 
        onNavigate={navigateTo} 
        isAdmin={isAdmin} 
        onToggleAdmin={handleToggleAdmin}
      />
      <main>
        {renderSection()}
      </main>
      {activeSection !== 'home' && <Footer onNavigate={navigateTo} />}
    </div>
  );
};

export default App;