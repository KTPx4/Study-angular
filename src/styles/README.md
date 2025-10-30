# Theme System Documentation

## 📋 Tổng quan

Hệ thống theme của dự án sử dụng CSS Variables (Custom Properties) để quản lý màu sắc, spacing, và các giá trị thiết kế tập trung. Khi muốn thay đổi giao diện, chỉ cần chỉnh sửa file `src/styles.css`.

## 🎨 Danh sách Variables

### 1. Primary Colors (Màu chủ đạo)
```css
--primary-color: #0066cc;        /* Màu xanh chính */
--primary-dark: #0052a3;         /* Xanh đậm */
--primary-light: #0080ff;        /* Xanh nhạt */
--primary-gradient: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
```

**Sử dụng cho:**
- Navbar
- Buttons chính
- Links
- Icons chính
- Border active states

### 2. Secondary Colors (Màu phụ)
```css
--secondary-color: #667eea;      /* Tím nhạt */
--secondary-dark: #764ba2;       /* Tím đậm */
--secondary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Sử dụng cho:**
- Hero sections
- Headers lớn
- Background đặc biệt

### 3. Accent Colors (Màu nhấn)
```css
--accent-orange: #ff9800;        /* Cam (icons, gifts) */
--accent-red: #ff424e;           /* Đỏ (prices, alerts) */
--accent-yellow: #ffd966;        /* Vàng (borders, highlights) */
--accent-green: #4caf50;         /* Xanh lá (success) */
```

### 4. Price & Discount (Giá & Khuyến mãi)
```css
--price-color: #ff424e;          /* Màu giá */
--discount-gradient: linear-gradient(135deg, #ff6b6b, #ff4757);
--original-price-color: #999;    /* Giá gốc */
```

### 5. Background Colors (Màu nền)
```css
--bg-white: #ffffff;
--bg-light: #f8f9fa;            /* Nền sáng */
--bg-gray: #f0f0f0;             /* Xám nhạt */
--bg-blue-light: #f0f7ff;       /* Xanh nhạt (badges) */
--bg-yellow-light: #fff9e6;     /* Vàng nhạt (gifts) */
```

### 6. Border Colors (Màu viền)
```css
--border-color: #e0e0e0;        /* Viền chuẩn */
--border-light: #f0f0f0;        /* Viền nhạt */
--border-gray: #d0d0d0;         /* Viền xám */
```

### 7. Text Colors (Màu chữ)
```css
--text-primary: #333;           /* Chữ chính */
--text-secondary: #666;         /* Chữ phụ */
--text-muted: #999;             /* Chữ mờ */
--text-white: #ffffff;          /* Chữ trắng */
```

### 8. Shadows (Bóng đổ)
```css
--shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.1);
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 12px 32px rgba(0, 102, 204, 0.15);
--shadow-primary: 0 8px 24px rgba(102, 126, 234, 0.25);
--shadow-discount: 2px 2px 8px rgba(255, 71, 87, 0.3);
```

### 9. Spacing (Khoảng cách)
```css
--spacing-xs: 4px;
--spacing-sm: 6px;
--spacing-md: 8px;
--spacing-lg: 12px;
--spacing-xl: 16px;
```

### 10. Border Radius (Bo góc)
```css
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-xxl: 16px;
```

### 11. Font Sizes (Cỡ chữ)
```css
--font-xs: 0.75rem;     /* 12px */
--font-sm: 0.8rem;      /* 12.8px */
--font-md: 0.95rem;     /* 15.2px */
--font-lg: 1.1rem;      /* 17.6px */
--font-xl: 1.75rem;     /* 28px */
```

### 12. Font Weights (Độ đậm chữ)
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 13. Transitions (Chuyển động)
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### 14. Z-Index (Độ cao)
```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal: 1040;
--z-tooltip: 1050;
```

## 💡 Cách sử dụng

### Trong Component CSS

```css
/* ❌ KHÔNG NÊN (Hard-coded) */
.button {
  background-color: #0066cc;
  padding: 12px;
  border-radius: 8px;
}

/* ✅ NÊN (Dùng variables) */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}
```

### Fallback Values

```css
/* Cung cấp giá trị dự phòng */
.element {
  color: var(--primary-color, #0066cc);
}
```

### Override trong Component

```css
/* Component có thể override variables */
:host {
  --primary-color: #ff0000;  /* Đổi màu chính cho component này */
}
```

## 🎯 Tạo Theme mới

### Theme Tối (Dark Mode)
```css
/* Thêm vào styles.css */
[data-theme="dark"] {
  --bg-white: #1a1a1a;
  --bg-light: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --border-color: #404040;
}
```

### Theme Cam (Orange Theme)
```css
[data-theme="orange"] {
  --primary-color: #ff6b35;
  --primary-dark: #e85d24;
  --primary-light: #ff8c66;
  --primary-gradient: linear-gradient(135deg, #ff6b35 0%, #e85d24 100%);
}
```

### Theme Xanh Lá (Green Theme)
```css
[data-theme="green"] {
  --primary-color: #00c853;
  --primary-dark: #00a844;
  --primary-light: #00e676;
  --primary-gradient: linear-gradient(135deg, #00c853 0%, #00a844 100%);
}
```

## 🔧 Cách đổi Theme

### 1. Đổi toàn bộ ứng dụng
Chỉnh sửa trực tiếp trong `src/styles.css`:

```css
:root {
  --primary-color: #YOUR_NEW_COLOR;
  /* ... */
}
```

### 2. Đổi theme runtime (JavaScript)
```typescript
// Trong component hoặc service
changeTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme);
}
```

### 3. Lưu theme preference
```typescript
// Service để quản lý theme
export class ThemeService {
  setTheme(theme: string) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
  
  loadTheme() {
    const theme = localStorage.getItem('theme') || 'default';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
```

## 📚 Best Practices

### ✅ NÊN
- Luôn dùng CSS variables thay vì hard-code màu
- Đặt tên variable rõ ràng, có ý nghĩa
- Group variables theo chức năng
- Comment giải thích mục đích sử dụng
- Cung cấp fallback values

### ❌ KHÔNG NÊN
- Hard-code màu sắc trực tiếp
- Tạo quá nhiều variables không cần thiết
- Dùng giá trị magic numbers
- Override variables lung tung
- Quên document khi thêm variable mới

## 🎨 Theme Presets

### Preset 1: Tech Blue (Mặc định)
```
Primary: #0066cc (Xanh công nghệ)
Secondary: #667eea (Tím gradient)
Accent: Orange/Red
```

### Preset 2: Fresh Green
```
Primary: #00c853 (Xanh lá tươi)
Secondary: #43a047 (Xanh lá đậm)
Accent: Yellow/Orange
```

### Preset 3: Vibrant Orange
```
Primary: #ff6b35 (Cam nổi bật)
Secondary: #f44336 (Đỏ cam)
Accent: Yellow/Purple
```

### Preset 4: Professional Purple
```
Primary: #7c4dff (Tím chuyên nghiệp)
Secondary: #651fff (Tím đậm)
Accent: Pink/Blue
```

## 🔗 Links liên quan

- [CSS Variables MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Color Palette Generator](https://coolors.co/)
- [Material Design Colors](https://material.io/design/color)
