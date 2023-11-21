import { Injectable } from '@angular/core';
import { Address } from '../../public/model/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor() { }
  addresses: Address[] = [
    { id: 0, addLine1: 'kozhippuram', addLine2: 'Calicut', city: 'Calicut', state: 'Kerala', zipCode: '0001', userId: 1 },
    { id: 1, addLine1: 'Manjeri', addLine2: 'Malappuram', city: 'Malappuram', state: 'Kerala', zipCode: '0002', userId: 2 }
  ]

  getAddressByUserId(userid: number): Observable<Address | undefined> {
    return of(this.addresses.find(x => x.userId === userid))
  }

  getAddressId(addressid: number): Observable<Address | undefined> {
    return of(this.addresses.find(x => x.id === addressid))
  }

  updateAddressById(id: number, userId: number, updatedAddress: Address) {
    const index = this.addresses.findIndex(x => x.id === id);
    const lastId = this.addresses[this.addresses.length - 1];
    const lastId1 = (lastId ? lastId.id : 0) as number;

    if (index !== -1) {
      this.addresses[index] = {
        ...this.addresses[index],
        ...updatedAddress,
        userId: userId
      };
    } else {
      const newAddress = {
        ...updatedAddress,
        userId: userId
      };
      if (id) {
        newAddress.id = id
      } else {
        newAddress.id = lastId1 + 1
      }
      this.addresses.push(newAddress);
    }
  }


  deleteAddressById(id: number) {
    this.addresses.forEach((element, index) => {
      if (element.id === id)
        delete this.addresses[index]
    })
  }
}
