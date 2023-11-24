import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faDashboard, faLocation, faShop, faBox, faMoneyBill, faChartBar, faContactBook, faHand, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor(private _router: Router){ }

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faUser = faUser;

  products_crud(){
    this._router.navigate(['/admin-products-crud']);
  }

  customer_view(){
    this._router.navigate(['/admin-user-view']);
  }

  dashBoard(){
    this._router.navigate(['/dashboard'])
  }
}
