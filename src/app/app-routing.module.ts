import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
    { path: 'products', component:ProductsComponent },
    { path: 'product', component:ProductComponent },
    { path: 'product-details', component:ProductDetailsComponent },
    { path: 'cart', component:CartComponent },
    { path: 'orders', component:OrderComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component:PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
