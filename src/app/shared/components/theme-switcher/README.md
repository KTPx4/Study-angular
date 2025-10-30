# Theme Switcher Component

Component cho phép người dùng chuyển đổi theme của website với **Floating Button** (nút nổi) và giao diện modal đẹp mắt.

## 🎯 Vị trí Button

**Floating Button** được đặt ở **góc dưới bên trái** màn hình:
- ✅ Fixed position, luôn hiển thị
- ✅ Nổi trên tất cả nội dung (z-index cao)
- ✅ Animation float lên xuống nhẹ nhàng
- ✅ Tooltip hiện khi hover
- ✅ Ripple effect khi click

## 📁 Cấu trúc

```
src/app/
├── core/
│   └── services/
│       └── theme.service.ts          # Service quản lý theme
└── shared/
    └── components/
        └── theme-switcher/
            ├── theme-switcher.component.ts
            ├── theme-switcher.component.html
            ├── theme-switcher.component.css
            └── theme-switcher.component.spec.ts
```

## 🎨 Themes có sẵn

1. **Tech Blue** (Mặc định)
   - Primary: #0066cc
   - Phù hợp: E-commerce công nghệ

2. **Fresh Green**
   - Primary: #00c853
   - Phù hợp: Sản phẩm xanh, thân thiện môi trường

3. **Vibrant Orange**
   - Primary: #ff6b35
   - Phù hợp: Năng động, trẻ trung

4. **Professional Purple**
   - Primary: #7c4dff
   - Phù hợp: Sang trọng, chuyên nghiệp

5. **Elegant Red**
   - Primary: #e53935
   - Phù hợp: Nổi bật, thu hút

6. **Dark Mode**
   - Primary: #2196f3
   - Phù hợp: Sử dụng ban đêm, bảo vệ mắt

## 🚀 Cách sử dụng

### 1. Import vào component

```typescript
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';

@Component({
  imports: [ThemeSwitcherComponent]
})
```

### 2. Thêm vào template

```html
<app-theme-switcher></app-theme-switcher>
```

### 3. Sử dụng ThemeService trong code

```typescript
import { ThemeService } from './core/services/theme.service';

constructor(private themeService: ThemeService) {}

// Đổi theme
changeTheme(themeId: string) {
  this.themeService.applyTheme(themeId);
}

// Lấy theme hiện tại
getCurrentTheme() {
  return this.themeService.getCurrentTheme();
}

// Lấy tất cả themes
getAllThemes() {
  return this.themeService.getAllThemes();
}

// Subscribe vào theme changes
this.themeService.currentTheme$.subscribe(themeId => {
  console.log('Theme changed to:', themeId);
});
```

## 🎯 Features

✅ **Modal đẹp mắt** - Giao diện chuyên nghiệp với animation
✅ **6 themes có sẵn** - Đa dạng màu sắc
✅ **Auto save** - Lưu theme vào localStorage
✅ **Responsive** - Tối ưu cho mọi thiết bị
✅ **Preview colors** - Xem trước màu theme
✅ **Active indicator** - Hiển thị theme đang dùng
✅ **Smooth transitions** - Chuyển đổi mượt mà
✅ **Keyboard support** - ESC để đóng modal
✅ **Backdrop click** - Click ngoài để đóng

## 🔧 Thêm Theme mới

### Bước 1: Thêm theme vào ThemeService

```typescript
// src/app/core/services/theme.service.ts

{
  id: 'custom-theme',
  name: 'Custom Theme',
  description: 'Theme tùy chỉnh của bạn',
  preview: {
    primary: '#YOUR_COLOR',
    secondary: '#YOUR_COLOR',
    accent: '#YOUR_COLOR'
  },
  variables: {
    '--primary-color': '#YOUR_COLOR',
    '--primary-dark': '#YOUR_DARK_COLOR',
    '--primary-light': '#YOUR_LIGHT_COLOR',
    // ... thêm các variables khác
  }
}
```

### Bước 2: Theme sẽ tự động xuất hiện trong modal

Không cần làm gì thêm, component sẽ tự động load từ service.

## 📱 Responsive Breakpoints

- **Mobile** (< 576px): 1 cột, full width
- **Tablet** (576px - 768px): 2 cột
- **Desktop** (> 768px): 3 cột

## 🎨 Customization

### Thay đổi layout modal

```css
/* theme-switcher.component.css */

.theme-grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Hoặc cố định số cột */
.theme-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

### Thay đổi màu button

```css
.theme-button {
  background: var(--primary-color);
  color: var(--text-white);
}
```

### Thay đổi animation

```css
@keyframes slideUp {
  from {
    transform: translateY(100px) scale(0.9);
  }
  to {
    transform: translateY(0) scale(1);
  }
}
```

## 🔌 API Reference

### ThemeService

#### Properties
- `currentTheme$: Observable<string>` - Observable của theme hiện tại
- `themes: Theme[]` - Danh sách tất cả themes

#### Methods
- `applyTheme(themeId: string): void` - Áp dụng theme
- `getCurrentTheme(): string` - Lấy ID theme hiện tại
- `getThemeById(themeId: string): Theme | undefined` - Lấy theme theo ID
- `getAllThemes(): Theme[]` - Lấy tất cả themes
- `resetToDefault(): void` - Reset về theme mặc định

### Theme Interface

```typescript
interface Theme {
  id: string;                    // Unique ID
  name: string;                  // Tên hiển thị
  description: string;           // Mô tả
  preview: {
    primary: string;             // Màu chính để preview
    secondary: string;           // Màu phụ để preview
    accent: string;              // Màu nhấn để preview
  };
  variables: {
    [key: string]: string;       // CSS variables
  };
}
```

## 🐛 Troubleshooting

### Theme không lưu
- Kiểm tra localStorage có enable không
- Clear localStorage: `localStorage.clear()`

### Theme không áp dụng
- Kiểm tra CSS variables trong styles.css
- F12 > Elements > :root để xem variables

### Modal không hiển thị
- Kiểm tra z-index conflicts
- Xem console có lỗi không

### Animation giật lag
- Giảm số lượng transitions
- Sử dụng transform thay vì left/top

## 💡 Tips & Best Practices

1. **Giữ số lượng theme hợp lý** (5-8 themes)
2. **Test trên nhiều thiết bị** trước khi deploy
3. **Đặt tên theme có ý nghĩa** để user dễ chọn
4. **Preview colors phải chính xác** với theme thật
5. **Document các theme mới** cho team

## 🔗 Related Files

- `src/styles.css` - Global theme variables
- `src/styles/themes.css` - Theme presets
- `THEME-GUIDE.md` - Quick start guide
- `src/styles/README.md` - Full documentation

## 📝 Examples

### Thêm theme switcher vào navbar
```typescript
// navbar.component.ts
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  imports: [ThemeSwitcherComponent]
})
```

```html
<!-- navbar.component.html -->
<li class="nav-item">
  <app-theme-switcher></app-theme-switcher>
</li>
```

### Thêm vào footer
```html
<div class="footer-theme">
  <app-theme-switcher></app-theme-switcher>
</div>
```

### Thêm vào settings page
```html
<div class="settings-section">
  <h3>Giao diện</h3>
  <app-theme-switcher></app-theme-switcher>
</div>
```
