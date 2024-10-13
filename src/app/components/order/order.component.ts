import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { NavigationService } from '../../services/navigation.service';
import { Cart, Order, Payment, PaymentMethod } from '../../Model/model';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  selectedPaymentMethodName = 'a';
  selectedPaymentMethod = new FormControl('0');
  paymentMethods: PaymentMethod[] = [];
  displaySpinner = false;
  message = '';
  classname = '';

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
    createdAt: '',
  };

  address= '';
  mobileNumber= '';

  constructor(
    private _utilityService: UtilityService,
    private _navigationService: NavigationService,
    private _router: Router
  ) {  }

  ngOnInit(): void {
    //Get Payment Methods
    this._navigationService.getPaymentMethods().subscribe((res) => {
      this.paymentMethods = res;
    });

    this.selectedPaymentMethod.valueChanges.subscribe((res: any) => {
      if(res === '0') this.selectedPaymentMethodName = '';
      else this.selectedPaymentMethodName = res.toString();
    });

    //Get Cart
    this._navigationService
    .getActiveCartOfUser(this._utilityService.getUser().id)
    .subscribe((res: any) => {
      this.usersCart = res;    
      this._utilityService.calculatePayment(res, this.usersPaymentInfo);  
    });

    //set address and phone number
    this.address = this._utilityService.getUser().address;
    this.mobileNumber = this._utilityService.getUser().mobile;
  }  

  getPaymentMethod(id: string) {
    let x = this.paymentMethods.find((item) =>
      item.id === parseInt(id))
      return x?.type + ' - ' + x?.provider;
    }

    placeOrder() {
      this.displaySpinner = true;
      let isPaymentSuccesfull = this.payMoney();

      if(!isPaymentSuccesfull) {
        this.displaySpinner = false;
        this.message = 'Something went wrong! Payment did not happen!';
        this.classname = 'text-danger';
        return;
      }
      let step = 0;
      let count = timer(0, 3000).subscribe((res) => {
        ++step;
        if(step === 1){
          this.message = 'Processing Payment';
          this.classname = 'text-success';
        }
        if(step === 2){
          this.message = 'Payment Successful, Order is being placed.';
          this.storeOrder();
        }
        if(step === 3){
          this.message = 'Your Order has been placed';
          this.displaySpinner = false;
        }
        if(step === 4){
          this._router.navigateByUrl('/home');
          count.unsubscribe();
        }
      });
    }

    payMoney() {
      return true;
    }

    storeOrder() {
      let payment: Payment;
      let pmid = 0;
      if (this.selectedPaymentMethod.value) {
        pmid = parseInt(this.selectedPaymentMethod.value);

        payment = {
          id: 0,
          paymentMethod: {
            id: pmid,
            type: '',
            provider: '',
            available: false,
            reason: '',
          },
          user: this._utilityService.getUser(),
          totalAmount: this.usersPaymentInfo.totalAmount,
          shippingCharges: this.usersPaymentInfo.shippingCharges,
          amountReduced: this.usersPaymentInfo.amountReduced,
          amountPaid: this.usersPaymentInfo.amountPaid,
          createdAt: '',
        };

        this._navigationService
          .insertPayment(payment)
          .subscribe((paymentResponse: any) =>  {
            payment.id = parseInt(paymentResponse);
            let order: Order = {
              id: 0,
              user: this._utilityService.getUser(),
              cart: this.usersCart,
              payment: payment,
              createdAt: '',
            };
            this._navigationService.insertOrder(order).subscribe((orderResponse) => {
              this._utilityService.changeCart.next(0);
            })

          });
      }
    }
  }
