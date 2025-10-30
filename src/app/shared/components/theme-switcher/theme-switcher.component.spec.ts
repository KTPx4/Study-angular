import { TestBed } from '@angular/core/testing';
import { ThemeSwitcherComponent } from './theme-switcher.component';

describe('ThemeSwitcherComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeSwitcherComponent]
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ThemeSwitcherComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
