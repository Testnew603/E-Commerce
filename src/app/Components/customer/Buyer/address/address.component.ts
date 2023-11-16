import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/Components/Shared/Services/address.service';
import { AuthGaurdService } from 'src/app/Components/Shared/Services/auth-gaurd.service';
import { Address } from 'src/app/Components/public/model/models';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  showAddresses: boolean = false;
  sameShippingAddressAsBilling: boolean = false;
  selectedCustomerAddressId: string = '';
  allAdresses: Address = {
    id: 0,
    addLine1: '',
    addLine2: '',
    city: '',
    state: '',
    zipCode: '',
    userId: 0
  };
  
  isEditMode: boolean = false

  constructor(
    private _addresService: AddressService,
    private router: Router,
    private route: ActivatedRoute,
    private _authGuardService: AuthGaurdService

  ) { }

  ngOnInit(): void {
    this.getAddressById();    
  }

  getAddressById() {
    const userIdFromRoute = this._authGuardService.getToken();
    if (userIdFromRoute !== null && userIdFromRoute > 0) {
      const address = this._addresService.getAddressByUserId(userIdFromRoute);
      if (address) {
        this.allAdresses = address;
      } else {
        alert("No address found for this user.");
      }
    } else {
      alert("Invalid user ID.");
    }
  }

  createAddress(address: Address) {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('id'));
    if (userIdFromRoute > 0)
      this._addresService.createAddress(address)
    else
      this.router.navigate(['/signIn'])
  }

  updateAddress(id: number, userId: number, updatedAddress: Address) {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('id'));
    if (userIdFromRoute > 0)
      this._addresService.updateAddressById(id, userId, updatedAddress)
    else
      alert("Not Existing ...!");
  }

  deleteAddressById(id: number, userId: number) {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('id'));
    if (userIdFromRoute > 0) {
      const confirmation = confirm("Do you want to delete this address?");
      if (confirmation) {
        this._addresService.deleteAddressById(id, userId);
      } else {

      }
    }
    else {
      alert("Invalid user ID or conditions not met.");
    }
  }
}
