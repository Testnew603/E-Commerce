import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Components/Shared/Services/address.service';
import { AuthGaurdService } from 'src/app/Components/Shared/Services/auth-gaurd.service';
import { Address } from 'src/app/Components/public/model/models';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addresses: Address[] = [];
  isEditMode: boolean = false;
  userId: number;
  length: number = 0;
  selectedIndex: number = -1;
  newAddress: Address = {
    id: 0,
    addLine1: '',
    addLine2: '',
    city: '',
    state: '',
    zipCode: '',
    userId: 0
  };
  updatedAddressIndex: number = 0;

  constructor(
    private _addressService: AddressService,
    private _router: Router,
    private _authGuardService: AuthGaurdService) {
      this.userId = this._authGuardService.getToken() as number;
    }

  ngOnInit(): void {
    this.getAddressByUser();
    this.length = this.addresses.length
  }

  getAddressByUser(){
    if(this.userId){
      this._addressService.getAddressByUserId(this.userId).subscribe(
        (address) => { if(address) this.addresses  = [address] } );
      }else{
        this._router.navigate(['/signIn'])
      }
  }

  addAddress() {
    const lastId = this.addresses[this.addresses.length - 1];
    const lastId1 = (lastId ? lastId.id : 0) as number;
    const newId = lastId1 + 1
    const newAddress1 = { ...this.newAddress, id: newId, userId: this.userId }
    this.addresses.push(newAddress1);
    
    this.clearNewAddress();
    this.length = this.addresses.length
  }

  editAddress(index: number) {
    this.newAddress = { ...this.addresses[index] };
    this.updatedAddressIndex = index;
    this.isEditMode = true;
  }

  updateAddress() {
    if (this.updatedAddressIndex !== -1) {
      this.addresses[this.updatedAddressIndex] = { ...this.newAddress };
    }
    this.isEditMode = false;
    this.clearNewAddress();
  }

  deleteAddress(index: number) {
    this.addresses.splice(index, 1);
    this.length = this.addresses.length
  }

  clearNewAddress() {
    this.newAddress = {
      id: 0,
      addLine1: '',
      addLine2: '',
      city: '',
      state: '',
      zipCode: '',
      userId: 0
    };
    this.updatedAddressIndex = -1;
  }

  selectAddress(index: number) {
    this.selectedIndex = index;
    this._authGuardService.setAddress(index);
    this._router.navigate(['/checkOut']);
  }
}
