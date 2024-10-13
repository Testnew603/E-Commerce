import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../../Model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] = [
    {
      bannerimage: '../../../assets/Images/Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subCategory: 'mobiles'
      }
    },
    {
      bannerimage: '../../../assets/Images/Baner/Baner_Laptop.png',
      category: {
        id: 0,
        category: 'electronics',
        subCategory: 'laptops'
      }
    },
    {
      bannerimage: '../../../assets/Images/Baner/Baner_Chair.png',
      category: {
        id: 0,
        category: 'furnitures',
        subCategory: 'chairs'
      }
    }
  ];
  constructor() { }

ngOnInit(): void {
  
}

}
