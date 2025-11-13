import React, { useState, useMemo } from 'react';
import { Property } from '../types';
import { PropertyForm } from './PropertyForm';

interface AdminDashboardProps {
    properties: Property[];
    onSave: (propertyData: Omit<Property, 'id'> & { id?: number }) => void;
    onDelete: (id: number) => void;
}

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 border border-gray-200">
        <div className="bg-brand-orange/20 text-brand-orange p-3 rounded-full">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    </div>
);

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
};

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ properties, onSave, onDelete }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProperty, setEditingProperty] = useState<Property | null>(null);

    const stats = useMemo(() => {
        const totalValue = properties.reduce((sum, p) => sum + p.price, 0);
        const averagePrice = properties.length > 0 ? totalValue / properties.length : 0;
        return {
            count: properties.length.toString(),
            totalValue: formatCurrency(totalValue),
            averagePrice: formatCurrency(averagePrice),
        };
    }, [properties]);

    const handleEdit = (property: Property) => {
        setEditingProperty(property);
        setIsFormOpen(true);
    };

    const handleAddNew = () => {
        setEditingProperty(null);
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditingProperty(null);
    };
    
    const handleSaveForm = (propertyData: Omit<Property, 'id'> & { id?: number }) => {
        onSave(propertyData);
        handleCloseForm();
    };

    return (
        <section className="py-24 md:py-32 bg-gray-100 text-gray-800 min-h-screen">
            <div className="container mx-auto px-6">
                
                <div className="bg-brand-dark rounded-lg shadow-xl p-8 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Dashboard</h2>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <StatCard 
                        title="Propiedades Totales" 
                        value={stats.count}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                    />
                    <StatCard 
                        title="Valor Total del Portafolio" 
                        value={stats.totalValue}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01M12 14c1.657 0 3-.895 3-2s-1.343-2-3-2-3-.895-3-2 1.343-2 3-2m0 8c1.11 0 2.08-.402 2.599-1M12 14v1m0-1v-.01M12 16v1m0 1v1m0-2.01" /></svg>}
                    />
                     <StatCard 
                        title="Precio Promedio" 
                        value={stats.averagePrice}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>}
                    />
                </div>

                {/* Properties List */}
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Mis Propiedades</h3>
                        <button
                            onClick={handleAddNew}
                            className="w-full sm:w-auto bg-brand-orange text-white font-bold py-2 px-5 uppercase tracking-wider rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
                            Añadir Propiedad
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-full">
                            {/* Header */}
                            <div className="hidden md:grid grid-cols-12 gap-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider p-4 border-b border-gray-200">
                                <div className="col-span-1"></div>
                                <div className="col-span-4">Título</div>
                                <div className="col-span-3">Ubicación</div>
                                <div className="col-span-2">Precio</div>
                                <div className="col-span-2 text-right">Acciones</div>
                            </div>
                            {/* Body */}
                            <div>
                                {properties.map(prop => (
                                    <div key={prop.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                                        <div className="md:col-span-1 col-span-full">
                                            <img src={prop.imageUrl} alt={prop.title} className="w-full h-24 md:w-24 md:h-16 object-cover rounded-md"/>
                                        </div>
                                        <div className="md:col-span-4 col-span-full font-semibold text-gray-900">{prop.title}</div>
                                        <div className="md:col-span-3 col-span-full text-gray-600">{prop.location}</div>
                                        <div className="md:col-span-2 col-span-full text-brand-orange font-bold">{formatCurrency(prop.price)}</div>
                                        <div className="md:col-span-2 col-span-full flex md:justify-end gap-4 mt-2 md:mt-0">
                                            <button onClick={() => handleEdit(prop)} className="flex items-center gap-1 text-blue-500 hover:text-blue-700 font-semibold text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" /></svg>
                                                Editar
                                            </button>
                                            <button onClick={() => onDelete(prop.id)} className="flex items-center gap-1 text-red-500 hover:text-red-700 font-semibold text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Form Modal */}
            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={handleCloseForm}></div>
                    
                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">
                         <PropertyForm 
                            onSubmit={handleSaveForm} 
                            onCancel={handleCloseForm} 
                            initialData={editingProperty} 
                        />
                    </div>
                </div>
            )}
        </section>
    );
};