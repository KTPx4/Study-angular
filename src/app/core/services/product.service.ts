import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { ProductFilter } from '../../shared/models/filter.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsSubject = new BehaviorSubject<Product[]>([]);
    public products$: Observable<Product[]> = this.productsSubject.asObservable();

    private filterSubject = new BehaviorSubject<ProductFilter>({});
    public filter$: Observable<ProductFilter> = this.filterSubject.asObservable();

    // Mock data - Trong thực tế sẽ gọi API
    private allProducts: Product[] = [
        {
            id: 1,
            name: 'iPhone 15 Pro Max 256GB',
            image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-1.jpg',
            price: 29990000,
            originalPrice: 34990000,
            category: 'Điện thoại',
            brand: 'Apple',
            promotionLabel: 'Trả góp 0%',
            specifications: ['6.7 inch', 'Chip A17 Pro'],
            storageOptions: ['256GB', '512GB', '1TB'],
            rating: 4.9,
            reviewCount: 128.5,
            stockStatus: 'Có sẵn',
            gift: 'Tặng sạc nhanh 20W'
        },
        {
            id: 2,
            name: 'Samsung Galaxy S24 Ultra 512GB',
            image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-1.jpg',
            price: 32990000,
            originalPrice: 36990000,
            category: 'Điện thoại',
            brand: 'Samsung',
            specifications: ['6.8 inch', 'Snapdragon 8 Gen 3'],
            storageOptions: ['256GB', '512GB', '1TB'],
            rating: 4.8,
            reviewCount: 95.3,
            stockStatus: 'Có sẵn'
        },
        {
            id: 3,
            name: 'Xiaomi 14 Ultra 5G',
            image: 'https://cdn.tgdd.vn/Products/Images/42/320722/xiaomi-14-ultra-black-1.jpg',
            price: 24990000,
            originalPrice: 29990000,
            category: 'Điện thoại',
            brand: 'Xiaomi',
            promotionLabel: 'Giảm 5 triệu',
            specifications: ['6.73 inch', 'Snapdragon 8 Gen 3'],
            rating: 4.7,
            reviewCount: 67.2,
            stockStatus: 'Có sẵn'
        },
        {
            id: 4,
            name: 'OPPO Find X7 Ultra',
            image: 'https://cdn.tgdd.vn/Products/Images/42/322096/oppo-find-x7-ultra-black-1.jpg',
            price: 22990000,
            originalPrice: 26990000,
            category: 'Điện thoại',
            brand: 'OPPO',
            specifications: ['6.82 inch', 'Snapdragon 8 Gen 3'],
            rating: 4.6,
            reviewCount: 45.8,
            stockStatus: 'Có sẵn'
        },
        {
            id: 5,
            name: 'Vivo X200 Pro 5G',
            image: 'https://cdn.tgdd.vn/Products/Images/42/329506/vivo-x200-pro-blue-1.jpg',
            price: 21490000,
            originalPrice: 24990000,
            category: 'Điện thoại',
            brand: 'Vivo',
            rating: 4.7,
            reviewCount: 38.4,
            stockStatus: 'Có sẵn'
        },
        {
            id: 6,
            name: 'Realme GT 7 Pro 5G',
            image: 'https://cdn.tgdd.vn/Products/Images/42/329390/realme-gt-7-pro-orange-1.jpg',
            price: 16990000,
            originalPrice: 19990000,
            category: 'Điện thoại',
            brand: 'Realme',
            rating: 4.5,
            reviewCount: 29.6,
            stockStatus: 'Có sẵn'
        },
        {
            id: 7,
            name: 'iPhone 14 Pro 128GB',
            image: 'https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-purple-1.jpg',
            price: 24990000,
            originalPrice: 27990000,
            category: 'Điện thoại',
            brand: 'Apple',
            specifications: ['6.1 inch', 'Chip A16 Bionic'],
            rating: 4.8,
            reviewCount: 156.3,
            stockStatus: 'Có sẵn'
        },
        {
            id: 8,
            name: 'Samsung Galaxy Z Fold5',
            image: 'https://cdn.tgdd.vn/Products/Images/42/309816/samsung-galaxy-z-fold5-kem-1.jpg',
            price: 35990000,
            originalPrice: 40990000,
            category: 'Điện thoại',
            brand: 'Samsung',
            promotionLabel: 'Hot sale',
            specifications: ['7.6 inch', 'Snapdragon 8 Gen 2'],
            rating: 4.7,
            reviewCount: 42.1,
            stockStatus: 'Có sẵn'
        }
    ];

    constructor() {
        this.productsSubject.next(this.allProducts);
    }

    /**
     * Get all products with filters applied
     */
    public getProducts(filter?: ProductFilter): Product[] {
        let filtered = [...this.allProducts];

        if (filter) {
            // Filter by categories
            if (filter.categories && filter.categories.length > 0) {
                filtered = filtered.filter(p => filter.categories!.includes(p.category || ''));
            }

            // Filter by brands
            if (filter.brands && filter.brands.length > 0) {
                filtered = filtered.filter(p => filter.brands!.includes(p.brand || ''));
            }

            // Filter by price range
            if (filter.priceRange) {
                filtered = filtered.filter(p =>
                    p.price >= filter.priceRange!.min &&
                    p.price <= filter.priceRange!.max
                );
            }

            // Filter by rating
            if (filter.rating) {
                filtered = filtered.filter(p => (p.rating || 0) >= filter.rating!);
            }

            // Filter by stock
            if (filter.inStock !== undefined) {
                filtered = filtered.filter(p =>
                    filter.inStock ? p.stockStatus === 'Có sẵn' : true
                );
            }

            // Sort
            if (filter.sortBy) {
                filtered = this.sortProducts(filtered, filter.sortBy);
            }
        }

        this.productsSubject.next(filtered);
        return filtered;
    }

    /**
     * Sort products
     */
    private sortProducts(products: Product[], sortBy: string): Product[] {
        const sorted = [...products];

        switch (sortBy) {
            case 'price-asc':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sorted.sort((a, b) => b.price - a.price);
            case 'name-asc':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case 'rating-desc':
                return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            case 'newest':
                return sorted.reverse();
            default:
                return sorted;
        }
    }

    /**
     * Update filter
     */
    public updateFilter(filter: ProductFilter): void {
        this.filterSubject.next(filter);
        this.getProducts(filter);
    }

    /**
     * Get available categories
     */
    public getCategories(): string[] {
        return [...new Set(this.allProducts.map(p => p.category).filter(c => c))] as string[];
    }

    /**
     * Get available brands
     */
    public getBrands(): string[] {
        return [...new Set(this.allProducts.map(p => p.brand).filter(b => b))] as string[];
    }

    /**
     * Get price range
     */
    public getPriceRange(): { min: number; max: number } {
        const prices = this.allProducts.map(p => p.price);
        return {
            min: Math.min(...prices),
            max: Math.max(...prices)
        };
    }
}
