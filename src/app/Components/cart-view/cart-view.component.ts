import { Component, OnInit } from '@angular/core';
import { Products } from '../public/model/models';
import { ProductsService } from '../Shared/Services/products.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  cart: Products[] = [];
  count = 1;
  currentQuantity = 0
  isRed: boolean = true;
  isCheckBoxChecked: boolean[] = [false];
  discount = this.getTotal() * 2 / 100;

  constructor(private _productsService: ProductsService,
    private modalCtrl: ModalController,
    private router: Router) { }

  ngOnInit(): void {
    this._productsService.getCart().subscribe(data => {
      this.cart = data;
      this.cart.forEach(product => {
        if (product.available === "Available")
          product.count = 1;
      });
    });
  }

  decreaseCartItem(products: Products) {
    this._productsService.decreaseProduct(products);
  }

  increaseCartItem(products: Products) {
    this._productsService.addToCart(products);
  }

  removeCartItem(products: Products) {
    this._productsService.removeProduct(products);
  }

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.isCheckBoxChecked[i])
        total += this.cart[i].price * this.cart[i].count;
    }
    return total;
  }

  quantityUp(index: number) {
    const stockQuantity = this.cart[index].quantity;
    if (this.cart[index].count < stockQuantity)
      this.cart[index].count += 1;
    else
      alert(this.cart[index].name + " available stock is " + this.cart[index].quantity)
  }

  quantityDown(index: number) {
    if (this.cart[index].count - 1 < 1) {
      this.cart[index].count = 1;
    }
    else {
      this.cart[index].count -= 1;
    }
  }

  toggleColor() {
    this.isRed = !this.isRed;
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkOut(page: string){
    if(page == 'checkOut')
    this.router.navigate(['/checkOut'])
  else if('products')
  this.router.navigate(['/products'])
else
  this.router.navigate(['/products'])
  }
}