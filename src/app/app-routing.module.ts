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

const routes: Routes = [
  { path:'signIn', component: SigninSignupComponent },
  { path:'forgetPassword', component: ForgetPasswordComponent},
  { path:'products', component: ProductsComponent},
  { path:'cart', component: CartViewComponent },
  { path:'checkOut', component: CheckoutComponent },
  { path:'', redirectTo: '/signIn', pathMatch: 'full' },
  { path:'**', component: NotFoundError}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
