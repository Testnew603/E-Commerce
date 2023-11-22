import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninSignupComponent } from './Components/customer/signin-signup/signin-signup.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CartViewComponent } from './Components/cart-view/cart-view.component';
import { NotFoundError } from 'rxjs';
import { ProductsComponent } from './Components/products/products.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { CheckoutComponent } from './Components/customer/Buyer/checkout/checkout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddressComponent } from './Components/customer/Buyer/address/address.component';
import { SuccessAnimaComponent } from './Components/customer/Buyer/success-anima/success-anima.component';
import { ProductsCrudComponent } from './Components/admin/products-crud/products-crud.component';
import { DashboardComponent } from './Components/admin/dashboard/dashboard.component';
import { SideNavComponent } from './Components/admin/side-nav/side-nav.component';
import { MainComponent } from './Components/admin/main/main.component';
import { HeaderAdminComponent } from './Components/admin/header-admin/header-admin.component';

const routes: Routes = [
  { path:'signIn', component: SigninSignupComponent },
  { path:'forgetPassword', component: ForgetPasswordComponent},
  { path:'products', component: ProductsComponent},
  { path:'products/:userId', component: ProductsComponent},
  { path:'cart', component: CartViewComponent },
  { path:'checkOut', component: CheckoutComponent },
  { path:'address', component: AddressComponent },
  { path:'successAnim', component: SuccessAnimaComponent },
  { path:'admin-products-crud', component: ProductsCrudComponent },
  { path:'productDetails/:id', component: ProductDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path:'', redirectTo: '/products', pathMatch: 'full' },
  { path:'**', component: NotFoundError}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
