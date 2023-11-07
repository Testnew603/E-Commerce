import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { BuyerDashboardComponent } from './Buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './Buyer/checkout/checkout.component';



@NgModule({
  declarations: [
    SigninSignupComponent,
    BuyerDashboardComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
