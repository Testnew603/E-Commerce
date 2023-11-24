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
import { SuccessAnimaComponent } from './Components/customer/Buyer/success-anima/success-anima.component';
import { CustomerComponent } from './Components/admin/customer/customer.component';
import { HeaderAdminComponent } from './Components/admin/header-admin/header-admin.component';
import { MainComponent } from './Components/admin/main/main.component';
import { SideNavComponent } from './Components/admin/side-nav/side-nav.component';
import { TopWidgetsComponent } from './Components/admin/top-widgets/top-widgets.component';
import { AdminProductsComponent } from './Components/admin/admin-products/admin-products.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ProductsCrudComponent } from './Components/admin/products-crud/products-crud.component';
import { DashboardComponent } from './Components/admin/dashboard/dashboard.component';
import { AddPopupComponent } from './Components/admin/products-crud/add-popup/add-popup.component';
import { CustomerViewComponent } from './Components/admin/customer-view/customer-view.component';
import { ViewPopupComponent } from './Components/admin/customer-view/view-popup/view-popup.component';
import { LoginComponent } from './Components/Shared/login/login.component';
import { SignUpComponent } from './Components/Shared/sign-up/sign-up.component';




@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AdminProductsComponent,
    CustomerViewComponent,
    AddPopupComponent,
    ViewPopupComponent,
    DashboardComponent,
    HomeComponent,
    ProductsComponent,
    SearchComponent,
    NotificationComponent,
    MaterialsComponent,
    CategoryListComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductsCrudComponent,
    SigninSignupComponent,
    ContactUsComponent,
    FooterComponent,
    PageNotFoundErrorComponent,
    SuccessAnimaComponent,
    CartViewComponent,
    ForgetPasswordComponent,
    CheckoutComponent,
    CustomerComponent,
    HeaderAdminComponent,
    MainComponent,
    SideNavComponent,
    TopWidgetsComponent,
    LoginComponent,
    SignUpComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    FontAwesomeModule,
    HighchartsChartModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ common: commonReducer }),
    BrowserAnimationsModule
  ],
  providers: [ModalController, ProductsService, AngularDelegate],
  bootstrap: [AppComponent]
})
export class AppModule { }
