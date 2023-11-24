import { Component, Input, OnInit, Optional, Inject } from '@angular/core'; 
import { ProductsService } from 'src/app/Components/Shared/Services/products.service';
import { Products } from 'src/app/Components/public/model/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})
export class AddPopupComponent implements OnInit {
  products: Products[] = [];
  id: number;
  name: string = '';
  price: number = 0;
  color: string = '';
  quantity: number = 0;
  available: string = 'Available';
  image: string = '';
  count: number = 0;
  isUpdate = false;
  imgFileName:string = '';
  @Input() imgPath:string = "../../../../../assets/categories/";
  
  constructor(
    private _productService: ProductsService,
    public dialogRef: MatDialogRef<AddPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
      this.id = data.id;      
      this.name = data.name;
      this.price = data.price;
      this.color = data.color;
      this.quantity = data.quantity;
      this.available = data.available;
      this.image = data.image;
      this.count = data.count;
      data.isUpdate? this.isUpdate = data.isUpdate : data.isUpdate = this.isUpdate
    }

  ngOnInit(){

  }

  addProduct(){
    const lastId = this.products[this.products.length - 1];
    const lastId1 = (lastId? lastId.id : 0) as number;
    this.id = lastId1 + 1;
    const newProduct = {
    id: this.id,
    name: this.name,
    price: this.price,
    color: this.color,
    quantity: this.quantity,
    available: this.available,
    image: this.imgPath + this.image,
    count: this.count
    };
    this._productService.addProducts(newProduct);
    console.log(newProduct);
    
    this.name = '';
    this.price = 0;
    this.color = '';
    this.quantity = 0;
    this.available = 'Available';
    this.image = '';
    this.count = 0;
  }

  updateProduct(){
    const updatedProduct = {
      id: this.id,
      name: this.name || this.data.name,
      price: this.price || this.data.price,
      color: this.color || this.data.color,
      quantity: this.quantity || this.data.quantity,
      available: this.available || this.data.available,
      image: this.imgPath + this.image || this.data.image,
      count: this.count || this.data.count
    };
    
    this._productService.editProducts(updatedProduct, this.id)
    this.name = '';
    this.price = 0;
    this.color = '';
    this.quantity = 0;
    this.available = 'Available';
    this.image = '';
    this.count = 0;
  }

  closeModal(){
    this.dialogRef.close(AddPopupComponent);
  }

  fileChange(event: any) {
    this.image = event.target.files[0].name
    console.log(this.image);
    
    this.products.push(event.target.files);
  }
    
    save(filename: string) {
      const myFile = this.products.find(s => s.name === filename);
      console.log(myFile);
      
    }
}
