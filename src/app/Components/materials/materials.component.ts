import { Component } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent {

materials = [
  {id:100, name: 'abc', description: 'abcDescription', quantity: 20, type: 'free', price: 150, ratings: 3.5, image:'../../../assets/shoes/d7104388-e770-419f-bf44-6e34af61d9f81656486760512-New-Balance-Men-Casual-Shoes-4981656486760210-1.webp', longDescription:'its a test case for description'},
  {id:101, name: 'def', description: 'defDescription', quantity: 10, type: 'premium', price: 1500, ratings: 5.0, image:'../../../assets/shoes/shoes2.avif', longDescription:'its a test case for description def'},
  {id:102, name: 'ghi', description: 'ghiDescription', quantity: 30, type: 'free', price: 150, ratings: 3.5, image:'../../../assets/shoes/shoes3.avif', longDescription:'its a test case for description ghi'},
  {id:103, name: 'jkl', description: 'jklDescription', quantity: 20, type: 'free', price: 150, ratings: 4.0, image:'../../../assets/shoes/shoes3.avif', longDescription:'its a test case for description jkl'},
  {id:104, name: 'mno', description: 'mnoDescription', quantity: 50, type: 'premium', price: 180, ratings: 4.0, image:'../../../assets/shoes/shoes4.jpg', longDescription:'its a test case for description jkl'}
]

}
