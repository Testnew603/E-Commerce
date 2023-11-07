import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Shared/Services/products.service';
import { Products } from '../public/model/models';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent implements OnInit {
  allProductData: any[];
  cart: Products[] = [];

  constructor(private _productService: ProductsService) { }

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
}
