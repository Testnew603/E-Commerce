import { Component, OnInit } from '@angular/core';
import { Products } from '../public/model/models';
import { ProductsService } from '../Shared/Services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGaurdService } from '../Shared/Services/auth-gaurd.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Products;


  constructor(
    private _productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    const foundProduct = this._productService.getProductById(productIdFromRoute);
    if (foundProduct !== undefined) {
      this.product = foundProduct;
    } else {
      console.error('Product not found');
    }
  }

  checkout() {
    this.router.navigateByUrl('/address');    
    // this.router.navigateByUrl('/checkOut');
  }

  cancel() {
    this.router.navigate(['/products'])
  }

}
