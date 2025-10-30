export interface ProductFilter {
    categories?: string[];
    brands?: string[];
    priceRange?: {
        min: number;
        max: number;
    };
    rating?: number;
    inStock?: boolean;
    sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'rating-desc' | 'newest';
}

export interface FilterOption {
    id: string;
    label: string;
    count?: number;
    checked?: boolean;
}

export interface FilterGroup {
    id: string;
    name: string;
    type: 'checkbox' | 'radio' | 'range' | 'toggle';
    options?: FilterOption[];
    min?: number;
    max?: number;
    value?: any;
}
