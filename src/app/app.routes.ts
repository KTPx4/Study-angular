import { Routes } from '@angular/router';

import { MainComponent } from './core/shell/layout/main/main.component';
import { AuthComponent } from './core/shell/layout/auth/auth.component';
export const routes: Routes = [
    // Auth layout routes
    // {
    //     path: 'auth',
    //     component: AuthComponent,
    //     children: [
    //         {
    //             path: 'login',
    //         },
    //         {
    //             path: 'register',
    //         }
    //     ]
    // },
    // Main layout routes
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'products',
                loadChildren: () => import('./pages/product/product.routes').then(m => m.routes)
            },
            {
                path: 'cart',
                loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)
            },
        ]
    },

];



