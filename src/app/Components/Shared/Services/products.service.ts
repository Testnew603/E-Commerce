import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Products } from '../../public/model/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [
    {id:1, name:'New Balance Men', price:129, color:'Navy Blue & Grey', quantity:10, available:'Available', image:'../../../assets/shoes/d7104388-e770-419f-bf44-6e34af61d9f81656486760512-New-Balance-Men-Casual-Shoes-4981656486760210-1.webp', count:1},
    {id:2, name:'New Balance Men', price:150, color:'Mixed Color', quantity:10, available:'Available', image:'../../../assets/shoes/shoes2.avif', count:1},
    {id:3, name:'New Balance Men', price:200, color:'Grey', quantity:10, available:'Available', image:'../../../assets/shoes/shoes3.avif', count:1},
    {id:4, name:'New Balance Men', price:190, color:'Pepper Grey', quantity:10, available:'Not Available', image:'../../../assets/shoes/shoes4.jpg', count:1}
  ]

  private cart: Products[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  

  constructor() { }
  getProducts(): Observable<Products[]>{
    return of(this.products);
  }

  getProductById(id: number){
    return this.products.find(item => item.id === id)
  }

  getCart(): Observable<Products[]>{
    return of(this.cart);
  }

  getCartByID(id: number){
    return this.cart.find(item => item.id === id)
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addToCart(product: Products) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.count += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
  

  decreaseProduct(products: Products){
    for(let [index, product] of this.cart.entries()){
      if(product.id === products.id){
        product.quantity -= 1;
        if(product.quantity == 0){
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1)
  }

  removeProduct(products: Products){
    for(let [index, product] of this.cart.entries()){
      if(product.id === products.id){
        this.cartItemCount.next(this.cartItemCount.value - product.quantity);
        this.cart.splice(index, 1);
      }
    }
  }
}
