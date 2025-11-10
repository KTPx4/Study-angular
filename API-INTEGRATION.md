# API Integration Guide

## Cấu trúc đã setup

### 1. Environment Configuration
- `src/environments/environment.ts` - Development config
- `src/environments/environment.prod.ts` - Production config

### 2. HTTP Interceptor
- `src/app/core/interceptors/api.interceptor.ts` - Xử lý timeout, error handling

### 3. Product Service
- Đã được cập nhật để hỗ trợ cả mock data và API calls

## Cách sử dụng trong Component

### Option 1: Client-side filtering (dùng cache)
```typescript
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Service tự động load từ API trong constructor
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
  }

  applyFilter(): void {
    // Filter ở client (data đã có trong memory)
    this.products = this.productService.getProducts({
      categories: ['Điện thoại'],
      brands: ['Apple', 'Samsung'],
      priceRange: { min: 10000000, max: 30000000 }
    });
  }
}
```

### Option 2: Server-side filtering (gọi API mỗi lần filter)
```typescript
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(filter?: any): void {
    this.isLoading = true;
    
    // Gọi API với filter params
    this.productService.getProductsFromAPI(filter).subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.isLoading = false;
      }
    });
  }

  applyFilter(): void {
    this.loadProducts({
      categories: ['Điện thoại'],
      brands: ['Apple', 'Samsung'],
      sortBy: 'price-asc'
    });
  }
}
```

### Option 3: Get single product
```typescript
loadProductDetail(id: number): void {
  this.productService.getProductById(id).subscribe({
    next: (product) => {
      if (product) {
        this.product = product;
      }
    },
    error: (error) => {
      console.error('Error loading product:', error);
    }
  });
}
```

## Backend API Format mong đợi

### GET /api/products
**Query Parameters:**
- `categories` (string): comma-separated categories
- `brands` (string): comma-separated brands  
- `minPrice` (number)
- `maxPrice` (number)
- `rating` (number)
- `inStock` (boolean)
- `sortBy` (string): 'price-asc', 'price-desc', 'name-asc', etc.

**Response:**
```json
[
  {
    "id": 1,
    "name": "iPhone 15 Pro Max",
    "image": "https://...",
    "price": 29990000,
    "originalPrice": 34990000,
    "category": "Điện thoại",
    "brand": "Apple",
    "rating": 4.9,
    "reviewCount": 128.5,
    "stockStatus": "Có sẵn"
  }
]
```

### GET /api/products/:id
**Response:**
```json
{
  "id": 1,
  "name": "iPhone 15 Pro Max",
  "image": "https://...",
  "price": 29990000,
  ...
}
```

## Testing với Mock API

### Sử dụng json-server
1. Install: `npm install -g json-server`
2. Tạo file `db.json`:
```json
{
  "products": [
    {
      "id": 1,
      "name": "iPhone 15 Pro Max",
      "price": 29990000,
      ...
    }
  ]
}
```
3. Run: `json-server --watch db.json --port 3000`
4. Update `environment.ts`: `apiUrl: 'http://localhost:3000'`

## Lưu ý quan trọng

1. **Error Handling**: Service đã có fallback về mock data nếu API lỗi
2. **Loading State**: Component nên có loading indicator khi gọi API
3. **Caching**: Option 1 load 1 lần, Option 2 load mỗi lần filter
4. **Authentication**: Uncomment code trong interceptor nếu cần auth token
5. **Environment**: Nhớ cấu hình đúng API URL cho dev và production
