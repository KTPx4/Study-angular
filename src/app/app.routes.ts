import { Routes } from '@angular/router';

import { MainComponent } from './core/shell/layout/main/main.component';
import { AuthComponent } from './core/shell/layout/auth/auth.component';
export const routes: Routes = [
    // Auth layout routes
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.routes)
    },
    // Main layout routes
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            {path: ":category", loadComponent: () => import('./pages/product/list-product/list-product.component').then(m => m.ListProductComponent)},
            {path: ":category/:slug", loadComponent: () => import('./pages/product/detail-product/detail-product.component').then(m => m.DetailProductComponent)},
            {
                path: 'cart',
                loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)
            },
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent)
    }

];



