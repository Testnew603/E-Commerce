import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularDelegate, ModalController } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';

import { commonReducer } from './../app/Components/Shared/store/common.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { SearchComponent } from './Components/search/search.component';
import { NotificationComponent } from './Components/Shared/Layout/notification/notification.component';
import { MaterialsComponent } from './Components/materials/materials.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { HeaderComponent } from './Components/Shared/Layout/header/header.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ContactUsComponent } from './Contact-us/contact-us/contact-us.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './Components/Shared/Layout/footer/footer.component';
import { PageNotFoundErrorComponent } from './Components/Shared/Layout/page-not-found-error/page-not-found-error.component';
import { CartViewComponent } from './Components/cart-view/cart-view.component';
import { SigninSignupComponent } from './Components/customer/signin-signup/signin-signup.component';
import { ProductsService } from './Components/Shared/Services/products.service';
import { MaterialModule } from '../app/Components/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { CheckoutComponent } from './Components/customer/Buyer/checkout/checkout.component';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressComponent } from './Components/customer/Buyer/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    HomeComponent,
    ProductsComponent,
    SearchComponent,
    NotificationComponent,
    MaterialsComponent,
    CategoryListComponent,
    HeaderComponent,
    ProductDetailsComponent,
    SigninSignupComponent,
    ContactUsComponent,
    AdminDashboardComponent,
    FooterComponent,
    PageNotFoundErrorComponent,
    CartViewComponent,
    ForgetPasswordComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    FontAwesomeModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ common: commonReducer }),
    BrowserAnimationsModule
  ],
  providers: [ModalController, ProductsService, AngularDelegate],
  bootstrap: [AppComponent]
})
export class AppModule { }
