import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Sample products data
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17 Pro Max 256GB',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329149/iphone-17-pro-max-orange-1.jpg',
      price: 37990000,
      originalPrice: 42990000,
      promotionLabel: 'Trả chậm 0% trước 06',
      specifications: ['Super Retina XDR', '6.9"'],
      storageOptions: ['256GB', '512GB', '1TB', '2TB'],
      rating: 4.9,
      reviewCount: 35.5,
      stockStatus: 'Có sẵn'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 256GB',
      image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-1.jpg',
      price: 29990000,
      originalPrice: 33990000,
      gift: 'Tặng balo và ốp lưng Samsung trị giá 1.500.000đ',
      specifications: ['Dynamic AMOLED 2X', '6.8"'],
      storageOptions: ['256GB', '512GB', '1TB'],
      rating: 4.8,
      reviewCount: 28.3,
      stockStatus: 'Có sẵn'
    },
    {
      id: 3,
      name: 'Xiaomi 14 Ultra 5G 512GB',
      image: 'https://cdn.tgdd.vn/Products/Images/42/320722/xiaomi-14-ultra-black-1.jpg',
      price: 24990000,
      originalPrice: 29990000,
      promotionLabel: 'Giảm thêm 2 triệu',
      specifications: ['AMOLED', '6.73"'],
      storageOptions: ['256GB', '512GB'],
      rating: 4.7,
      reviewCount: 15.2,
      stockStatus: 'Có sẵn',
      gift: 'Tặng sạc nhanh 120W'
    },
    {
      id: 4,
      name: 'OPPO Find X7 Ultra 5G',
      image: 'https://cdn.tgdd.vn/Products/Images/42/322096/oppo-find-x7-ultra-black-1.jpg',
      price: 22990000,
      originalPrice: 25990000,
      specifications: ['AMOLED', '6.82"'],
      storageOptions: ['256GB', '512GB'],
      rating: 4.6,
      reviewCount: 12.8,
      stockStatus: 'Có sẵn'
    },
    {
      id: 5,
      name: 'Vivo X200 Pro 5G 256GB',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329506/vivo-x200-pro-blue-1.jpg',
      price: 21490000,
      originalPrice: 24990000,
      promotionLabel: 'Hot Sale',
      specifications: ['AMOLED', '6.78"'],
      storageOptions: ['256GB', '512GB'],
      rating: 4.7,
      reviewCount: 9.5,
      stockStatus: 'Có sẵn',
      gift: 'Tặng tai nghe Vivo TWS'
    },
    {
      id: 6,
      name: 'Realme GT 7 Pro 5G',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329390/realme-gt-7-pro-orange-1.jpg',
      price: 16990000,
      originalPrice: 19990000,
      specifications: ['AMOLED', '6.78"'],
      storageOptions: ['256GB', '512GB'],
      rating: 4.5,
      reviewCount: 8.2,
      stockStatus: 'Có sẵn'
    }
  ];
}
