import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Shared/Services/products.service';
import { Products } from '../public/model/models';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGaurdService } from '../Shared/Services/auth-gaurd.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent implements OnInit {
  allProductData: any[];
  cart: Products[] = [];
  

  constructor(
    private _productService: ProductsService,
    private router: Router,
    private _authGuardService: AuthGaurdService
    ) { }

  ngOnInit(){    
    this.getTotalProducts();
  }

  getTotalProducts(){
    this._productService.getProducts().subscribe((data) => {            
      this.allProductData = data;      
    }, (error) =>{
      console.error("Error Occured", error);      
    })
  }

  addToCart(id: number) {
    const cartProduct = this._productService.getProductById(id);
    if (cartProduct) {
      this._productService.addToCart(cartProduct);
    }
    this.router.navigate(['/cart']);
  }

  buyNow(id: number){
    const userId = this._authGuardService.getToken() as number;
    if(userId){
      this.router.navigate(['/productDetails',+id])
    }else{
      // this._sharedService.OpenPopup(0, 'Create Associate')
      this.router.navigate(['/signIn'])
    }
  }
  
}
