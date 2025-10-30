# 🎨 Quick Start Guide - Theme System

## Cách đổi màu toàn bộ website (3 bước đơn giản)

### Bước 1: Mở file `src/styles.css`

### Bước 2: Tìm phần `:root { ... }` (dòng ~7)

### Bước 3: Thay đổi màu bạn muốn

```css
:root {
  /* Đổi màu chính của website */
  --primary-color: #YOUR_COLOR_HERE;
  
  /* Ví dụ: Đổi sang màu xanh lá */
  --primary-color: #00c853;
  
  /* Hoặc đổi sang màu cam */
  --primary-color: #ff6b35;
  
  /* Hoặc đổi sang màu tím */
  --primary-color: #7c4dff;
}
```

## 🚀 Thử ngay các theme có sẵn

### Option 1: Copy từ file themes.css
1. Mở file `src/styles/themes.css`
2. Chọn theme bạn thích (Green, Orange, Purple, Dark)
3. Copy toàn bộ code theme đó
4. Paste vào `:root` trong file `src/styles.css`

### Option 2: Chỉ đổi màu chính
Chỉ cần đổi 1 dòng trong `src/styles.css`:

```css
/* Theme Xanh Lá */
--primary-color: #00c853;

/* Theme Cam */
--primary-color: #ff6b35;

/* Theme Tím */
--primary-color: #7c4dff;

/* Theme Đỏ */
--primary-color: #f44336;

/* Theme Vàng */
--primary-color: #ffc107;
```

## 📝 Variables hay dùng nhất

```css
/* Màu chính - dùng cho buttons, links, navbar */
--primary-color: #0066cc;

/* Màu giá sản phẩm */
--price-color: #ff424e;

/* Màu khuyến mãi, badges */
--discount-gradient: linear-gradient(135deg, #ff6b6b, #ff4757);

/* Màu nền */
--bg-light: #f8f9fa;

/* Màu chữ */
--text-primary: #333;
```

## 💡 Tips

### Đổi màu một component cụ thể
Trong file CSS của component đó:

```css
/* product-card.component.css */
:host {
  --primary-color: #ff0000;  /* Chỉ card này màu đỏ */
}
```

### Reset về mặc định
Copy lại code từ file này vào `styles.css`:
- Theme mặc định: Tech Blue (#0066cc)

### Test nhiều màu nhanh
Dùng DevTools (F12) > Console:

```javascript
// Test màu xanh lá
document.documentElement.style.setProperty('--primary-color', '#00c853');

// Test màu cam
document.documentElement.style.setProperty('--primary-color', '#ff6b35');

// Reset
location.reload();
```

## 🎯 Các màu đẹp gợi ý

```css
/* E-commerce themes */
--primary-color: #0066cc;  /* Tech Blue - Công nghệ */
--primary-color: #00c853;  /* Fresh Green - Tươi mới */
--primary-color: #ff6b35;  /* Vibrant Orange - Năng động */
--primary-color: #7c4dff;  /* Professional Purple - Chuyên nghiệp */

/* Brand colors */
--primary-color: #1877f2;  /* Facebook Blue */
--primary-color: #e4405f;  /* Instagram Pink */
--primary-color: #25d366;  /* WhatsApp Green */
--primary-color: #ff0000;  /* YouTube Red */
```

## ❓ FAQ

**Q: Thay đổi có hiệu quả ngay lập tức không?**
A: Có! Chỉ cần lưu file là thấy thay đổi ngay.

**Q: Có cần build lại project không?**
A: Không cần, CSS variables thay đổi real-time.

**Q: Làm sao để có Dark Mode?**
A: Copy Dark Mode theme từ `themes.css` hoặc xem hướng dẫn chi tiết trong `README.md`.

**Q: Component nào sử dụng theme system?**
A: TẤT CẢ! Navbar, Product Card, Home, Footer... đều dùng CSS variables.

**Q: Tôi muốn tạo theme riêng?**
A: Sao chép một theme có sẵn trong `themes.css`, đổi tên và chỉnh màu theo ý bạn.
