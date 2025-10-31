export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  brand?: string;
  material?: string;
  size?: string;
  weight?: string;
  color?: string;
  additionalImages?: string[];
  detailedDescription?: string;
  specifications?: { label: string; value: string }[];
}