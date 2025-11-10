import { Routes } from '@angular/router';

import { MainComponent } from './core/shell/layout/main/main.component';
import { AuthComponent } from './core/shell/layout/auth/auth.component';
export const routes: Routes = [
    
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.routes)
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'cart',
                loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)
            },
            {
                path: 'forbidden',
                loadComponent: () => import('./pages/forbidden/forbidden.component').then(m => m.ForbiddenComponent)
            },
            {
                path: 'profile',
                loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
            },
            {
                path: 'product',
                children: [
                    { 
                        path: ":category", 
                        loadComponent: () => import('./pages/product/list-product/list-product.component').then(m => m.ListProductComponent) },
                    {
                        path: ":category/:slug", loadComponent: () => import('./pages/product/detail-product/detail-product.component').then(m => m.DetailProductComponent)
                    },
                ]
            }
            

        ]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent)
    }

];



