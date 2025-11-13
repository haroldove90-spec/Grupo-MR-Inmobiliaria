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
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">{initialData ? 'Editar Propiedad' : 'Añadir Nueva Propiedad'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="title" value={formData.title} onChange={handleChange} placeholder="Título" required className="w-full p-3 border rounded-md" />
                    <input name="location" value={formData.location} onChange={handleChange} placeholder="Ubicación" required className="w-full p-3 border rounded-md" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Precio" required className="w-full p-3 border rounded-md" />
                    <input name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} placeholder="Habitaciones" required className="w-full p-3 border rounded-md" />
                    <input name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} placeholder="Baños" required className="w-full p-3 border rounded-md" />
                    <input name="area" type="number" value={formData.area} onChange={handleChange} placeholder="Área (m²)" required className="w-full p-3 border rounded-md" />
                </div>
                <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="URL de la imagen principal" required className="w-full p-3 border rounded-md" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Descripción" rows={4} required className="w-full p-3 border rounded-md" />
                <textarea value={galleryStr} onChange={handleGalleryChange} placeholder="Galería de imágenes (URLs separadas por comas)" rows={3} className="w-full p-3 border rounded-md" />
                
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-md hover:bg-gray-400 transition-colors">
                        Cancelar
                    </button>
                    <button type="submit" className="bg-brand-orange text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};