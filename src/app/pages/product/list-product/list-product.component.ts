import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { ProductFilterComponent } from '../../../shared/components/product-filter/product-filter.component';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Product } from '../../../shared/models/product.model';
import { ProductFilter } from '../../../shared/models/filter.model';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule, ProductFilterComponent, ProductCardComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  totalProducts: number = 0;
  isLoading: boolean = true;

  // Filter options
  categoryOptions: string[] = [];
  brandOptions: string[] = [];
  priceRangeOptions = { min: 0, max: 50000000 };

  private destroy$ = new Subject<void>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Load filter options
    this.loadFilterOptions();

    // Subscribe to products
    this.productService.products$
      .pipe(takeUntil(this.destroy$))
      .subscribe(products => {
        this.products = products;
        this.totalProducts = products.length;
        this.isLoading = false;
      });

    // Initialize with all products
    this.productService.updateFilter({});
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadFilterOptions(): void {
    // Get categories
    this.categoryOptions = this.productService.getCategories();

    // Get brands
    this.brandOptions = this.productService.getBrands();

    // Get price range
    this.priceRangeOptions = this.productService.getPriceRange();
  }

  onFilterChange(filter: ProductFilter): void {
    this.isLoading = true;
    this.productService.updateFilter(filter);
  }
}
