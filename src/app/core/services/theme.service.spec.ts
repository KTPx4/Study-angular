import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
    let service: ThemeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ThemeService);
        localStorage.clear();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have default themes', () => {
        const themes = service.getAllThemes();
        expect(themes.length).toBeGreaterThan(0);
    });

    it('should apply theme', () => {
        service.applyTheme('fresh-green');
        expect(service.getCurrentTheme()).toBe('fresh-green');
    });

    it('should save theme to localStorage', () => {
        service.applyTheme('vibrant-orange');
        const savedTheme = localStorage.getItem('app-theme');
        expect(savedTheme).toBe('vibrant-orange');
    });
});
