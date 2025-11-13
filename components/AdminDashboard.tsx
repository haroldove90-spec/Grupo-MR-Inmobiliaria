import React, { useState } from 'react';
import { Property } from '../types';
import { PropertyForm } from './PropertyForm';

interface AdminDashboardProps {
    properties: Property[];
    onSave: (propertyData: Omit<Property, 'id'> & { id?: number }) => void;
    onDelete: (id: number) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ properties, onSave, onDelete }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProperty, setEditingProperty] = useState<Property | null>(null);

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
        <section className="py-24 md:py-32 bg-brand-light text-brand-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 md:mb-0">
                        Panel de Administración
                    </h2>
                    <button
                        onClick={handleAddNew}
                        className="w-full md:w-auto bg-brand-orange text-white font-bold py-3 px-6 uppercase tracking-wider rounded-md hover:bg-orange-600 transition-colors duration-300"
                    >
                        Añadir Propiedad
                    </button>
                </div>

                {isFormOpen ? (
                    <PropertyForm 
                        onSubmit={handleSaveForm} 
                        onCancel={handleCloseForm} 
                        initialData={editingProperty} 
                    />
                ) : (
                    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b-2 border-gray-200">
                                <tr>
                                    <th className="p-4 hidden md:table-cell">Imagen</th>
                                    <th className="p-4">Título</th>
                                    <th className="p-4 hidden sm:table-cell">Ubicación</th>
                                    <th className="p-4 hidden lg:table-cell">Precio</th>
                                    <th className="p-4">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map(prop => (
                                    <tr key={prop.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 hidden md:table-cell">
                                            <img src={prop.imageUrl} alt={prop.title} className="w-24 h-16 object-cover rounded-md"/>
                                        </td>
                                        <td className="p-4 font-semibold">{prop.title}</td>
                                        <td className="p-4 text-gray-600 hidden sm:table-cell">{prop.location}</td>
                                        <td className="p-4 text-gray-800 font-bold hidden lg:table-cell">
                                            {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(prop.price)}
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button onClick={() => handleEdit(prop)} className="text-blue-600 hover:text-blue-800 font-semibold">Editar</button>
                                                <button onClick={() => onDelete(prop.id)} className="text-red-600 hover:text-red-800 font-semibold">Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};