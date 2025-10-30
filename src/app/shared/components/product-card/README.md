# Product Card Component

Component hiển thị thẻ sản phẩm với đầy đủ thông tin: ảnh, tên, giá, khuyến mãi, đánh giá.

## Sử dụng

```typescript
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { Product } from './shared/models/product.model';

// Trong component
products: Product[] = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max 256GB',
    image: 'url-to-image.jpg',
    price: 37990000,
    originalPrice: 42990000,
    promotionLabel: 'Trả chậm 0% trước 06',
    specifications: ['Super Retina XDR', '6.9"'],
    storageOptions: ['256GB', '512GB', '1TB', '2TB'],
    rating: 4.9,
    reviewCount: 35.5,
    stockStatus: 'Có sẵn',
    gift: 'Tặng sạc nhanh'
  }
];
```

```html
<!-- Trong template -->
<app-product-card [product]="product"></app-product-card>
```

## Properties

### Product Interface

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | number | ✅ | ID sản phẩm |
| name | string | ✅ | Tên sản phẩm |
| image | string | ✅ | URL ảnh sản phẩm |
| price | number | ✅ | Giá hiện tại |
| originalPrice | number | ❌ | Giá gốc (trước khuyến mãi) |
| promotionLabel | string | ❌ | Nhãn khuyến mãi (góc trên trái) |
| specifications | string[] | ❌ | Thông số kỹ thuật (hiển thị dạng badge) |
| storageOptions | string[] | ❌ | Các tùy chọn dung lượng |
| gift | string | ❌ | Quà tặng kèm theo |
| rating | number | ❌ | Đánh giá (0-5 sao) |
| reviewCount | number | ❌ | Số lượng đánh giá (nghìn) |
| stockStatus | string | ❌ | Trạng thái hàng ('Có sẵn', 'Hết hàng'...) |
| discount | number | ❌ | Phần trăm giảm giá |
| category | string | ❌ | Danh mục sản phẩm |
| brand | string | ❌ | Thương hiệu |
| description | string | ❌ | Mô tả sản phẩm |

## Features

✨ **Responsive**: Tự động điều chỉnh trên mọi thiết bị
🎨 **Modern UI**: Thiết kế đẹp mắt giống thegioididong.com
⚡ **Smooth Animation**: Hiệu ứng hover mượt mà
🔗 **Router Integration**: Click vào card sẽ chuyển đến trang chi tiết
💰 **Auto Calculate Discount**: Tự động tính % giảm giá
🎁 **Gift Display**: Hiển thị quà tặng kèm theo
⭐ **Rating Display**: Hiển thị đánh giá và số lượng review
📱 **Mobile Optimized**: Tối ưu cho mobile

## Grid Layout Examples

### 6 cột (Desktop)
```html
<div class="row g-3">
  <div class="col-6 col-md-4 col-lg-3 col-xl-2" *ngFor="let product of products">
    <app-product-card [product]="product"></app-product-card>
  </div>
</div>
```

### 4 cột (Laptop)
```html
<div class="row g-4">
  <div class="col-6 col-md-4 col-lg-3" *ngFor="let product of products">
    <app-product-card [product]="product"></app-product-card>
  </div>
</div>
```

### 3 cột (Tablet)
```html
<div class="row g-3">
  <div class="col-6 col-md-4" *ngFor="let product of products">
    <app-product-card [product]="product"></app-product-card>
  </div>
</div>
```

## Styling

Component sử dụng Bootstrap 5 và custom CSS. Có thể tùy chỉnh màu sắc bằng cách override các CSS variables:

```css
.product-card {
  --primary-color: #0066cc;
  --discount-color: #ff424e;
  --gift-bg: #fff9e6;
  --rating-color: #ffc107;
}
```
