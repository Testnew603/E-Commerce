import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { SuggestedProductsComponent } from './components/suggested-products/suggested-products.component';
import { ProductComponent } from './components/product/product.component';
import { OpenProductDirective } from './directives/open-product.directive';
import { OpenProductDetailsDirective } from './directives/open-product-details.directive';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';


@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        ProductComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        OrderComponent,
        PageNotFoundComponentComponent,
        ProductDetailsComponent,
        ProductsComponent,
        SuggestedProductsComponent,
        OpenProductDirective,
        OpenProductDetailsDirective,
        RegisterComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('user')
                },
                allowedDomains: ['localhost:7262']
            },
        }),
    ],
})
export class AppModule { }
