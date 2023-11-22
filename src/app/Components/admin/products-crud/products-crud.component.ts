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
    this._dialogBox.open(AddPopupComponent)
  }
}
