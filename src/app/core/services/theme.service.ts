import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Theme {
    id: string;
    name: string;
    description: string;
    preview: {
        primary: string;
        secondary: string;
        accent: string;
    };
    variables: {
        [key: string]: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private currentThemeSubject = new BehaviorSubject<string>('tech-blue');
    public currentTheme$: Observable<string> = this.currentThemeSubject.asObservable();

    private readonly THEME_STORAGE_KEY = 'app-theme';

    // Define all available themes
    public themes: Theme[] = [
        {
            id: 'tech-blue',
            name: 'Tech Blue',
            description: 'Xanh công nghệ - Theme mặc định',
            preview: {
                primary: '#0066cc',
                secondary: '#667eea',
                accent: '#ff9800'
            },
            variables: {
                '--primary-color': '#0066cc',
                '--primary-dark': '#0052a3',
                '--primary-light': '#0080ff',
                '--secondary-color': '#667eea',
                '--secondary-dark': '#764ba2',
                '--bg-light': '#f8f9fa',
                '--bg-white': '#f8f9fa',
                '--bg-blue-light': '#f0f7ff',
                '--text-primary': '#000000',
                '--text-secondary': '#333',
                '--text-muted': '#757575',
                '--secondary-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }
        },
        {
            id: 'fresh-green',
            name: 'Fresh Green',
            description: 'Xanh lá tươi mát - Thân thiện môi trường',
            preview: {
                primary: '#00c853',
                secondary: '#43a047',
                accent: '#ffa726'
            },
            variables: {
                '--primary-color': '#00c853',
                '--primary-dark': '#00a844',
                '--primary-light': '#00e676',
                '--secondary-color': '#43a047',
                '--secondary-dark': '#2e7d32',
                '--bg-light': '#f1f8e9',
                '--bg-white': '#f1f8e9',
                '--bg-blue-light': '#e8f5e9',
                 '--text-primary': '#000000',
                '--text-secondary': '#333',
                '--text-muted': '#757575',
                 '--secondary-gradient': 'linear-gradient(135deg, #00c853 0%, #43a047 100%)'
            }
        },
        {
            id: 'vibrant-orange',
            name: 'Vibrant Orange',
            description: 'Cam năng động - Nhiệt huyết',
            preview: {
                primary: '#ff6b35',
                secondary: '#f44336',
                accent: '#ffc107'
            },
            variables: {
                '--primary-color': '#ff6b35',
                '--primary-dark': '#e85d24',
                '--primary-light': '#ff8c66',
                '--secondary-color': '#f44336',
                '--secondary-dark': '#d32f2f',
                '--bg-light': '#fff3e0',
                '--bg-white': '#fff3e0',
                '--bg-blue-light': '#ffe0d0',
                 '--text-primary': '#000000',
                '--text-secondary': '#333',
                '--text-muted': '#757575',
                '--secondary-gradient': 'linear-gradient(135deg, #ff6b35 0%, #f44336 100%)'
            }
        },
        {
            id: 'professional-purple',
            name: 'Professional Purple',
            description: 'Tím chuyên nghiệp - Sang trọng',
            preview: {
                primary: '#7c4dff',
                secondary: '#9c27b0',
                accent: '#ff6f00'
            },
            variables: {
                '--primary-color': '#7c4dff',
                '--primary-dark': '#651fff',
                '--primary-light': '#b47cff',
                '--secondary-color': '#9c27b0',
                '--secondary-dark': '#7b1fa2',
                '--bg-light': '#f3e5f5',
                '--bg-white': '#f3e5f5',
                '--bg-blue-light': '#ede7f6',
                 '--text-primary': '#000000',
                '--text-secondary': '#333',
                '--text-muted': '#757575',
                '--secondary-gradient': 'linear-gradient(135deg, #7c4dff 0%, #9c27b0 100%)'
            }
        },
        {
            id: 'elegant-red',
            name: 'Elegant Red',
            description: 'Đỏ thanh lịch - Nổi bật',
            preview: {
                primary: '#e53935',
                secondary: '#d32f2f',
                accent: '#ffc107'
            },
            variables: {
                '--primary-color': '#e53935',
                '--primary-dark': '#c62828',
                '--primary-light': '#ff6659',
                '--secondary-color': '#d32f2f',
                '--secondary-dark': '#b71c1c',
                '--bg-light': '#ffebee',
                '--bg-white': '#ffebee',
                '--bg-blue-light': '#ffcdd2',
                 '--text-primary': '#000000',
                '--text-secondary': '#333',
                '--text-muted': '#757575',
                '--secondary-gradient': 'linear-gradient(135deg, #e53935 0%, #d32f2f 100%)'
            }
        },
        {
            id: 'dark-mode',
            name: 'Dark Mode',
            description: 'Chế độ tối - Bảo vệ mắt',
            preview: {
                primary: '#2196f3',
                secondary: '#7986cb',
                accent: '#ff9800'
            },
            variables: {
                '--primary-color': '#2196f3',
                '--primary-dark': '#1976d2',
                '--primary-light': '#64b5f6',
                '--secondary-color': '#7986cb',
                '--secondary-dark': '#5c6bc0',
                '--bg-white': '#1e1e1e',
                '--bg-light': '#2d2d2d',
                '--bg-gray': '#383838',
                '--bg-blue-light': '#263238',
                '--border-color': '#404040',
                '--text-primary': '#ffffff',
                '--text-secondary': '#b0b0b0',
                '--text-muted': '#757575',
                '--secondary-gradient': 'linear-gradient(135deg, #2196f3 0%, #7986cb 100%)'
            }
        }
    ];

    constructor() {
        this.loadTheme();
    }

    /**
     * Load theme from localStorage
     */
    private loadTheme(): void {
        const savedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);
        if (savedTheme) {
            this.applyTheme(savedTheme);
        }
    }

    /**
     * Apply theme to document
     */
    public applyTheme(themeId: string): void {
        const theme = this.themes.find(t => t.id === themeId);
        if (!theme) {
            console.error(`Theme with id "${themeId}" not found`);
            return;
        }

        // Apply CSS variables to root element
        const root = document.documentElement;
        Object.entries(theme.variables).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });

        // Save to localStorage
        localStorage.setItem(this.THEME_STORAGE_KEY, themeId);

        // Update subject
        this.currentThemeSubject.next(themeId);
    }

    /**
     * Get current theme
     */
    public getCurrentTheme(): string {
        return this.currentThemeSubject.value;
    }

    /**
     * Get theme by id
     */
    public getThemeById(themeId: string): Theme | undefined {
        return this.themes.find(t => t.id === themeId);
    }

    /**
     * Get all themes
     */
    public getAllThemes(): Theme[] {
        return this.themes;
    }

    /**
     * Reset to default theme
     */
    public resetToDefault(): void {
        this.applyTheme('tech-blue');
    }
}
