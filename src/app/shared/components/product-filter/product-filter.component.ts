import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFilter, FilterGroup } from '../../../shared/models/filter.model';

@Component({
    selector: 'app-product-filter',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './product-filter.component.html',
    styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent implements OnInit {
    @Input() categories: string[] = [];
    @Input() brands: string[] = [];
    @Input() priceRange: { min: number; max: number } = { min: 0, max: 50000000 };
    @Input() currentFilter: ProductFilter = {};

    @Output() filterChange = new EventEmitter<ProductFilter>();
    @Output() filterReset = new EventEmitter<void>();

    isModalOpen = false;

    // Filter state
    selectedCategories: string[] = [];
    selectedBrands: string[] = [];
    minPrice: number = 0;
    maxPrice: number = 50000000;
    selectedRating: number = 0;
    inStockOnly: boolean = false;
    sortBy: string = '';

    sortOptions = [
        { value: '', label: 'Mặc định' },
        { value: 'price-asc', label: 'Giá: Thấp đến cao' },
        { value: 'price-desc', label: 'Giá: Cao đến thấp' },
        { value: 'name-asc', label: 'Tên: A-Z' },
        { value: 'name-desc', label: 'Tên: Z-A' },
        { value: 'rating-desc', label: 'Đánh giá cao nhất' },
        { value: 'newest', label: 'Mới nhất' }
    ];

    ratingOptions = [
        { value: 0, label: 'Tất cả', icon: '⭐' },
        { value: 4.5, label: '4.5 sao trở lên', icon: '⭐⭐⭐⭐⭐' },
        { value: 4.0, label: '4.0 sao trở lên', icon: '⭐⭐⭐⭐' },
        { value: 3.5, label: '3.5 sao trở lên', icon: '⭐⭐⭐' }
    ];

    ngOnInit(): void {
        this.initializeFilter();
    }

    initializeFilter(): void {
        if (this.currentFilter) {
            this.selectedCategories = this.currentFilter.categories || [];
            this.selectedBrands = this.currentFilter.brands || [];
            this.minPrice = this.currentFilter.priceRange?.min || this.priceRange.min;
            this.maxPrice = this.currentFilter.priceRange?.max || this.priceRange.max;
            this.selectedRating = this.currentFilter.rating || 0;
            this.inStockOnly = this.currentFilter.inStock || false;
            this.sortBy = this.currentFilter.sortBy || '';
        }
    }

    openModal(): void {
        this.isModalOpen = true;
        document.body.style.overflow = 'hidden';
    }

    closeModal(): void {
        this.isModalOpen = false;
        document.body.style.overflow = '';
    }

    onBackdropClick(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            this.closeModal();
        }
    }

    toggleCategory(category: string): void {
        const index = this.selectedCategories.indexOf(category);
        if (index > -1) {
            this.selectedCategories.splice(index, 1);
        } else {
            this.selectedCategories.push(category);
        }
    }

    isCategorySelected(category: string): boolean {
        return this.selectedCategories.includes(category);
    }

    toggleBrand(brand: string): void {
        const index = this.selectedBrands.indexOf(brand);
        if (index > -1) {
            this.selectedBrands.splice(index, 1);
        } else {
            this.selectedBrands.push(brand);
        }
    }

    isBrandSelected(brand: string): boolean {
        return this.selectedBrands.includes(brand);
    }

    formatPrice(price: number): string {
        return (price / 1000000).toFixed(1) + 'M';
    }

    applyFilter(): void {
        const filter: ProductFilter = {
            categories: this.selectedCategories.length > 0 ? this.selectedCategories : undefined,
            brands: this.selectedBrands.length > 0 ? this.selectedBrands : undefined,
            priceRange: {
                min: this.minPrice,
                max: this.maxPrice
            },
            rating: this.selectedRating > 0 ? this.selectedRating : undefined,
            inStock: this.inStockOnly || undefined,
            sortBy: this.sortBy as any || undefined
        };

        this.filterChange.emit(filter);
        this.closeModal();
    }

    resetFilter(): void {
        this.selectedCategories = [];
        this.selectedBrands = [];
        this.minPrice = this.priceRange.min;
        this.maxPrice = this.priceRange.max;
        this.selectedRating = 0;
        this.inStockOnly = false;
        this.sortBy = '';

        this.filterReset.emit();
        this.filterChange.emit({});
    }

    getActiveFilterCount(): number {
        let count = 0;
        if (this.selectedCategories.length > 0) count++;
        if (this.selectedBrands.length > 0) count++;
        if (this.minPrice > this.priceRange.min || this.maxPrice < this.priceRange.max) count++;
        if (this.selectedRating > 0) count++;
        if (this.inStockOnly) count++;
        if (this.sortBy) count++;
        return count;
    }
}
