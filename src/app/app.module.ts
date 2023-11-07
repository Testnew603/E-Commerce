import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductsComponent } from './Components/products/products.component';
import { SearchComponent } from './Components/search/search.component';
import { NotificationComponent } from './Components/Shared/Layout/notification/notification.component';
import { MaterialsComponent } from './Components/materials/materials.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { HeaderComponent } from './Components/Shared/Layout/header/header.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ContactUsComponent } from './Contact-us/contact-us/contact-us.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Components/admin/admin-login/admin-login.component';
import { UserCrudComponent } from './Components/admin/user-crud/user-crud.component';
import { FooterComponent } from './Components/Shared/Layout/footer/footer.component';
import { PageNotFoundErrorComponent } from './Components/Shared/Layout/page-not-found-error/page-not-found-error.component';
import { CartViewComponent } from './Components/cart-view/cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    SearchComponent,
    NotificationComponent,
    MaterialsComponent,
    CategoryListComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ContactUsComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    UserCrudComponent,
    FooterComponent,
    PageNotFoundErrorComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
