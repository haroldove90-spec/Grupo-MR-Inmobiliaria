import React, { useState, useEffect } from 'react';
import { Property } from '../types';

interface PropertyFormProps {
    onSubmit: (propertyData: Omit<Property, 'id'> & { id?: number }) => void;
    onCancel: () => void;
    initialData?: Property | null;
}

const formInitialState: Omit<Property, 'id'> = {
    title: '',
    location: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    imageUrl: '',
    description: '',
    gallery: [],
};

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input {...props} className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange transition" />
    </div>
);

const FormTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea {...props} className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange transition" />
    </div>
);

export const PropertyForm: React.FC<PropertyFormProps> = ({ onSubmit, onCancel, initialData }) => {
    const [formData, setFormData] = useState(formInitialState);
    const [galleryStr, setGalleryStr] = useState('');

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
            setGalleryStr(initialData.gallery.join(', '));
        } else {
            setFormData(formInitialState);
            setGalleryStr('');
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'price' || name === 'bedrooms' || name === 'bathrooms' || name === 'area' ? Number(value) : value }));
    };

    const handleGalleryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setGalleryStr(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const gallery = galleryStr.split(',').map(url => url.trim()).filter(url => url);
        onSubmit({ ...formData, gallery, id: initialData?.id });
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">{initialData ? 'Editar Propiedad' : 'Añadir Nueva Propiedad'}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Título" name="title" value={formData.title} onChange={handleChange} placeholder="Título de la propiedad" required />
                <FormInput label="Ubicación" name="location" value={formData.location} onChange={handleChange} placeholder="Ciudad, Estado" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <FormInput label="Precio (MXN)" name="price" type="number" value={formData.price} onChange={handleChange} placeholder="e.g., 2500000" required />
                <FormInput label="Habitaciones" name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} placeholder="e.g., 3" required />
                <FormInput label="Baños" name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} placeholder="e.g., 2" required />
                <FormInput label="Área (m²)" name="area" type="number" value={formData.area} onChange={handleChange} placeholder="e.g., 150" required />
            </div>
            <FormInput label="URL de la Imagen Principal" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://example.com/imagen.jpg" required />
            <FormTextarea label="Descripción" name="description" value={formData.description} onChange={handleChange} placeholder="Describa la propiedad..." rows={4} required />
            <FormTextarea label="Galería de Imágenes" value={galleryStr} onChange={handleGalleryChange} placeholder="URLs separadas por comas: https://.../1.jpg, https://.../2.jpg" rows={3} />
            
            <div className="flex justify-end gap-4 pt-4 border-t mt-6">
                <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-md hover:bg-gray-300 transition-colors">
                    Cancelar
                </button>
                <button type="submit" className="bg-brand-orange text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
                    Guardar Cambios
                </button>
            </div>
        </form>
    );
};