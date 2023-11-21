import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Components/Shared/Services/address.service';
import { AuthGaurdService } from 'src/app/Components/Shared/Services/auth-gaurd.service';
import { Address } from 'src/app/Components/public/model/models';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  addresses: Address[] = [];
  addressId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _authGuardService: AuthGaurdService,
    private _addressService: AddressService
  ) {
  }

  ngOnInit(): void {
    this.addressId = this._authGuardService.getAddress() as number;
    this.getAddress();
  }

  getAddress(){
    this._addressService.getAddressId(this.addressId).subscribe(
      (selectedAddress) => {
          if(selectedAddress) {
            this.addresses = [selectedAddress]
          } else{
            alert("Something went wrong ...! ")
            this.router.navigate(['/address'])
          } }
    )
  }

  checkout(){
    this.router.navigate(['/successAnim'])
  }

  cancel(){
  if(confirm("Do you want to cancel ...!")) 
    this.router.navigate(['/products'])
  }
}
