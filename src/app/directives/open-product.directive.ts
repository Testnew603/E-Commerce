import { Directive, HostListener, Input } from '@angular/core';
import { Category } from '../Model/model';
import { Router } from '@angular/router';

@Directive({
  selector: '[OpenProduct]'
})
export class OpenProductDirective {
  @Input() category: Category = {
    id: 0,
    category: '',
    subCategory: ''
  };

  @HostListener('click') openProducts() {
    this.router.navigate(['/products'], {
      queryParams: {
        category: this.category.category,
        subcategory: this.category.subCategory,
      },
    });
  }
  constructor(private router: Router) { }

}
