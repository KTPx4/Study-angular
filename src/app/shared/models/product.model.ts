export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    gift?: string;
    rating?: number;
    reviewCount?: number;
    stockStatus?: string;
    specifications?: string[];
    storageOptions?: string[];
    colorOptions?: string[];
    promotionLabel?: string;
    category?: string;
    brand?: string;
    description?: string;
    slug?: string;
    stock?: number;
    sold?: number;
    gifts?: string[];
    isNew?: boolean;
    isFeatured?: boolean;
}
