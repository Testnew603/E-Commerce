import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../Model/model';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() view: 'grid' | 'list' | 'currentcartitem' | 'prevcartitem' = 'grid';
  @Input() product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    productCategory: {
      id: 1,
      category: '',
      subCategory: '',
    },
    offer: {
      id: 1,
      title: '',
      discount: 0,
    },
    imageName: '',
  };

  constructor(public _utilityService: UtilityService) { }
  ngOnInit(): void {
    
  }
}
