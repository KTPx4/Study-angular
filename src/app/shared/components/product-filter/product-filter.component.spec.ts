import { TestBed } from '@angular/core/testing';
import { ProductFilterComponent } from './product-filter.component';

describe('ProductFilterComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductFilterComponent]
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ProductFilterComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
