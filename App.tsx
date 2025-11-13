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
import { ExclusiveProperties } from './components/ExclusiveProperties';
import { MoveForward } from './components/MoveForward';


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
    setActiveSection('home');
    setSelectedPropertyId(null);
  };

  const handleSelectProperty = (id: number) => {
    setSelectedPropertyId(id);
    if (!isAdmin) {
      setActiveSection('propertyDetail');
    }
    window.scrollTo(0, 0);
  };

  const handleAdminBackFromDetail = () => {
    setSelectedPropertyId(null);
  };

  const handleSaveProperty = (propertyData: Omit<Property, 'id'> & { id?: number }) => {
    let savedPropertyId: number;
    if (propertyData.id) {
      savedPropertyId = propertyData.id;
      setProperties(prev => prev.map(p => p.id === propertyData.id ? { ...p, ...propertyData } as Property : p));
    } else {
      savedPropertyId = Date.now();
      setProperties(prev => [...prev, { ...propertyData, id: savedPropertyId } as Property]);
    }
    return savedPropertyId;
  };

  const handleDeleteProperty = (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta propiedad?')) {
      setProperties(prev => prev.filter(p => p.id !== id));
    }
  };

  // Admin View
  if (isAdmin) {
    if (selectedPropertyId) {
      const property = properties.find(p => p.id === selectedPropertyId);
      if (property) {
        return <PropertyDetail property={property} onBack={handleAdminBackFromDetail} isAdminView />;
      }
      // If property not found, go back to dashboard
      handleAdminBackFromDetail(); 
    }

    return (
      <div className="font-sans bg-gray-100">
        <AdminDashboard 
          properties={properties} 
          onSave={handleSaveProperty} 
          onDelete={handleDeleteProperty}
          onExitAdmin={handleToggleAdmin}
          onSelectProperty={handleSelectProperty}
        />
      </div>
    );
  }

  // Client View
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <ExclusiveProperties 
              properties={properties} 
              onSelectProperty={handleSelectProperty} 
              onNavigate={navigateTo} 
            />
            <MoveForward />
          </>
        );
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
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;