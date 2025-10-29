import { Routes } from "@angular/router";


export const routes: Routes = [
    {path: "product-list", loadComponent: () => import('./list-product/list-product.component').then(m => m.ListProductComponent)},
    {path: "product-detail/:id", loadComponent: () => import('./detail-product/detail-product.component').then(m => m.DetailProductComponent)},
]