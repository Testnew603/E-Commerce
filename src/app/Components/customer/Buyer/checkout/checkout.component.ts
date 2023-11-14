import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  totalPrice = 0;
  totalQuantity = 0;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        cardHolder: [''],
        cardNumber: [''],
        expirationMonth: [''],
        expirationYear: [''],
        securityCode: ['']
      })
    });
  }

  copyShippingToBilling = (event: any): void => {
    if (event.target.checked) {
      // Access properties using array notation
      this.checkoutForm.controls['billingAddress'].setValue(
        this.checkoutForm.controls['shippingAddress'].value
      );
    } else {
      // Access properties using array notation
      this.checkoutForm.controls['billingAddress'].reset();
    }
  }
  

  onSubmit = (): void => {
    console.log(this.checkoutForm?.get('customer')?.value);
}

cancel(){
  this.router.navigate(['/products'])
}

}
