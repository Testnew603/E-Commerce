import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { BuyerDashboardComponent } from './Buyer/buyer-dashboard/buyer-dashboard.component';


@NgModule({
  declarations: [
    
    BuyerDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
