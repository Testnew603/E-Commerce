import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { UtilityService } from '../../services/utility.service';
import { Product } from '../../Model/model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  view: 'grid' | 'list' = 'list';
  sortby: 'default' | 'htl' | 'lth' = 'default';
  products: Product[] = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _navigationService: NavigationService,
    private _utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params: any) => {
      let category = params.category;
      let subcategory = params.subcategory;

      if (category && subcategory)
      this._navigationService
    .getProducts(category, subcategory, 10)
    .subscribe((res: any) => {
      this.products = res;
    })
    });
  }

  sortByPrice(sortKey: string) {
    this.products.sort((a, b) => {
      if (sortKey === 'default') {
        return a.id > b.id ? 1 : -1;
      }
      if(sortKey === 'htl') {
        return this._utilityService.applyDiscount(a.price, a.offer.discount) >
        this._utilityService.applyDiscount(b.price, b.offer.discount)
          ? -1 : 1;
        }
        if(sortKey === 'lth') {
        return this._utilityService.applyDiscount(a.price, a.offer.discount) >
        this._utilityService.applyDiscount(b.price, b.offer.discount)
          ? 1 : -1;
        }
        return 0;
    });
  }
}
