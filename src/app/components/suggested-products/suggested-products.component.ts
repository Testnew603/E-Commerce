import { Component, OnInit, Input } from '@angular/core';
import { Category, Product } from '../../Model/model'
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-suggested-products',
  templateUrl: './suggested-products.component.html',
  styleUrl: './suggested-products.component.css'
})
export class SuggestedProductsComponent implements OnInit {
  @Input() category: Category = {
    id: 0,
    category: '',
    subCategory: ''
  };
  
  @Input() count: number = 3;
  products: Product[] = [];
  constructor(private _navigationService: NavigationService) {  }

  ngOnInit(): void {
    this._navigationService.getProducts(
      this.category.category,
      this.category.subCategory,
      this.count
    )
    .subscribe((res: any[]) => {
      for(let product of res){
        this.products.push(product);
      }
    })
  }
}
