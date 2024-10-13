import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { NavigationService } from '../../services/navigation.service';
import { Cart, Payment } from '../../Model/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  usersCart: Cart = {
    id: 0,
    user: this._utilityService.getUser(),
    cartItems: [],
    ordered: false,
    orderedOn: '',
  };

  usersPaymentInfo: Payment = {
    id: 0,
    user: this._utilityService.getUser(),
    paymentMethod: {
      id: 0,
      type: '',
      provider: '',
      available: false,
      reason: '',
    },
    totalAmount: 0,
    shippingCharges: 0,
    amountReduced: 0,
    amountPaid: 0,
    createdAt: ''
  };

  usersPreviousCarts: Cart[] = [];

  constructor(
    public _utilityService: UtilityService,
    private _navigationService: NavigationService
    ) { }

  ngOnInit(): void {
    //Get Cart
    this._navigationService
    .getActiveCartOfUser(this._utilityService.getUser().id)
    .subscribe((res: any) => {
      this.usersCart = res;

      //Calculate Payment
      this._utilityService.calculatePayment(
      this.usersCart, this.usersPaymentInfo);
    });

    //Get Previous Carts
    this._navigationService
    .getAllPreviousCartOfUser(this._utilityService.getUser().id)
    .subscribe((res: any) => {
      this.usersPreviousCarts = res;
    });
  }
}
