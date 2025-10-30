import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';

interface ProductImage {
  url: string;
  alt: string;
}

interface Specification {
  label: string;
  value: string;
}

interface Review {
  id: number;
  userName: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
}

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {
  product: Product | null = null;
  selectedImage: string = '';
  selectedStorage: string = '';
  selectedColor: string = '';
  quantity: number = 1;

  // Product images
  productImages: ProductImage[] = [
    { url: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg', alt: 'View 1' },
    { url: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-1-1.jpg', alt: 'View 2' },
    { url: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-2-1.jpg', alt: 'View 3' },
    { url: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-3.jpg', alt: 'View 4' }
  ];

  // Promotions
  promotions: string[] = [
    'Giảm thêm 1.000.000đ khi thu cũ đổi mới',
    'Trả góp 0% qua thẻ tín dụng',
    'Tặng gói bảo hiểm VIP 1 năm',
    'Miễn phí giao hàng toàn quốc'
  ];

  // Commitments
  commitments: Array<{ icon: string, title: string, description: string }> = [
    { icon: 'fa-shield-alt', title: 'Bảo hành chính hãng', description: '12 tháng tại các trung tâm bảo hành' },
    { icon: 'fa-sync-alt', title: 'Đổi trả trong 15 ngày', description: 'Nếu phát hiện lỗi do nhà sản xuất' },
    { icon: 'fa-truck', title: 'Giao hàng nhanh', description: 'Miễn phí trong 1 giờ hoặc nhận tại cửa hàng' },
    { icon: 'fa-certificate', title: 'Chính hãng 100%', description: 'Sản phẩm chính hãng, nguồn gốc rõ ràng' }
  ];

  // Specifications
  specifications: Specification[] = [
    { label: 'Màn hình', value: '6.7", Super Retina XDR' },
    { label: 'Chip xử lý', value: 'Apple A17 Pro 6 nhân' },
    { label: 'Camera sau', value: 'Chính 48 MP & Phụ 12 MP, 12 MP' },
    { label: 'Camera trước', value: '12 MP' },
    { label: 'RAM', value: '8 GB' },
    { label: 'Bộ nhớ trong', value: '256 GB' },
    { label: 'Pin', value: '4422 mAh, 20 W' },
    { label: 'Hệ điều hành', value: 'iOS 17' },
    { label: 'Kết nối', value: '5G, WiFi 6E, Bluetooth 5.3' },
    { label: 'Trọng lượng', value: '221 g' }
  ];

  // Reviews
  reviews: Review[] = [
    {
      id: 1,
      userName: 'Nguyễn Văn A',
      avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=0066cc&color=fff',
      rating: 5,
      date: '15/10/2024',
      comment: 'Sản phẩm rất tốt, hiệu năng mạnh mẽ. Camera chụp ảnh đẹp, pin trâu. Rất hài lòng với lựa chọn của mình.',
      likes: 24
    },
    {
      id: 2,
      userName: 'Trần Thị B',
      avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+B&background=ff424e&color=fff',
      rating: 5,
      date: '10/10/2024',
      comment: 'Máy đẹp, sang trọng. Giao hàng nhanh, nhân viên tư vấn nhiệt tình. Giá cả hợp lý.',
      likes: 18
    },
    {
      id: 3,
      userName: 'Lê Văn C',
      avatar: 'https://ui-avatars.com/api/?name=Le+Van+C&background=00a651&color=fff',
      rating: 4,
      date: '05/10/2024',
      comment: 'Máy tốt nhưng giá hơi cao. Nhìn chung vẫn đáng tiền.',
      likes: 12
    }
  ];

  averageRating: number = 4.8;
  totalReviews: number = 156;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Mock product data
    this.product = {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      slug: 'iphone-15-pro-max-256gb',
      price: 29990000,
      originalPrice: 34990000,
      discount: 14,
      image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
      rating: 4.8,
      reviewCount: 156,
      sold: 1234,
      stock: 50,
      category: 'Điện thoại',
      brand: 'Apple',
      storageOptions: ['128GB', '256GB', '512GB', '1TB'],
      colorOptions: ['Titan Tự nhiên', 'Titan Xanh', 'Titan Trắng', 'Titan Đen'],
      specifications: ['Chip A17 Pro', 'RAM 8GB', 'Camera 48MP'],
      gifts: ['Ốp lưng', 'Cáp sạc nhanh'],
      isNew: true,
      isFeatured: true
    };

    this.selectedImage = this.productImages[0].url;
    if (this.product?.storageOptions) {
      this.selectedStorage = this.product.storageOptions[1] || '';
    }
    if (this.product?.colorOptions) {
      this.selectedColor = this.product.colorOptions[0] || '';
    }
  }

  selectImage(url: string): void {
    this.selectedImage = url;
  }

  selectStorage(storage: string): void {
    this.selectedStorage = storage;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    if (this.quantity < (this.product?.stock || 99)) {
      this.quantity++;
    }
  }

  addToCart(): void {
    console.log('Add to cart:', {
      product: this.product,
      storage: this.selectedStorage,
      color: this.selectedColor,
      quantity: this.quantity
    });
    // TODO: Implement cart service
  }

  buyNow(): void {
    console.log('Buy now:', {
      product: this.product,
      storage: this.selectedStorage,
      color: this.selectedColor,
      quantity: this.quantity
    });
    // TODO: Implement checkout
  }

  checkStore(): void {
    console.log('Check store availability');
    // TODO: Implement store check
  }

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
  }

  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
}
