import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../Shared/Services/products.service';
import { Products } from '../../public/model/models';
import { MatDialog } from '@angular/material/dialog'
import { AddPopupComponent } from './add-popup/add-popup.component';


@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

  products: Products[] = [];
  id: number;
  name: string = '';
  price: number = 0;
  color: string = '';
  quantity: number = 0;
  available: string = 'Available';
  image: string = '';
  count: number = 0;
  isUpdate: boolean = false;

  constructor(
    private _router: Router,
    private _productService: ProductsService,
    private _dialogBox: MatDialog
  ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openDialogBox(){
    this._dialogBox.open(AddPopupComponent, {
      data: {
        name: [''],
        price: [''],
        color: [''],
        quantity: [''],
        available: [''],
        image: [''],
        count: ['']
      }
    })
  }

  editProduct(product: Products){
    this.name = product['name'];
    this.price = product['price'];
    this.color = product['color'];
    this.quantity = product['quantity'];
    this.available = product['available'];
    this.image = product['image'];
    this.count = product['count'];
    this.isUpdate = true;

    const dialogRef = this._dialogBox.open(AddPopupComponent, {
      data: {
        id: product['id'],
        name: product['name'],
        price: product['price'],
        color: product['color'],
        quantity: product['quantity'],
        available: product['available'],
        image: product['image'],
        count: product['count'],
        isUpdate: true
      }
    })
  }

  removeProduct(product: Products){
    this._productService.removeProducts(product['id'])
  }
}
