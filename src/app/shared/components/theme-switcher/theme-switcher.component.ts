import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../../core/services/theme.service';

@Component({
    selector: 'app-theme-switcher',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './theme-switcher.component.html',
    styleUrl: './theme-switcher.component.css'
})
export class ThemeSwitcherComponent implements OnInit {
    isModalOpen = false;
    themes: Theme[] = [];
    currentThemeId: string = 'tech-blue';

    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {
        this.themes = this.themeService.getAllThemes();
        this.currentThemeId = this.themeService.getCurrentTheme();

        // Subscribe to theme changes
        this.themeService.currentTheme$.subscribe(themeId => {
            this.currentThemeId = themeId;
        });
    }

    openModal(): void {
        this.isModalOpen = true;
        document.body.style.overflow = 'hidden';
    }

    closeModal(): void {
        this.isModalOpen = false;
        document.body.style.overflow = '';
    }

    selectTheme(themeId: string): void {
        this.themeService.applyTheme(themeId);
    }

    isCurrentTheme(themeId: string): boolean {
        return this.currentThemeId === themeId;
    }

    onBackdropClick(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            this.closeModal();
        }
    }
}
