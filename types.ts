export type Section = 'home' | 'about' | 'properties' | 'contact' | 'propertyDetail' | 'limpieza' | 'poliza';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  description: string;
  gallery: string[];
}