import { Injectable } from '@angular/core';
import { Address } from '../../public/model/models';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }
  addresses: Address[] = [
    {id:1, addLine1:'kozhippuram', addLine2:'Calicut', city:'Calicut', state:'Kerala', zipCode:'0001', userId:1 },
    {id:2, addLine1:'Manjeri', addLine2:'Malappuram', city:'Malappuram', state:'Kerala', zipCode:'0002', userId:2 }
  ]

  createAddress(address: Address): Address{
    this.addresses.push(address)
    return address
  } 

  getAddressByUserId(userid: number){
    return this.addresses.find(uid => uid.userId === userid)
  }

  updateAddressById(id: number, userId: number, updatedAddress: Address) {
    const index = this.addresses.findIndex(data => data.id === id && data.userId === userId);  
    if (index !== -1) {
      this.addresses[index] = { ...this.addresses[index], ...updatedAddress };
    } else {
      console.log('Address not found');
    }
  }

  deleteAddressById(id: number, userId: number){
    const index = this.addresses.findIndex(data => data.id === id && data.userId === userId); 
    if (index !== -1) {
      this.addresses.splice(index, 1)
    } else {
      console.log('Address not found');
    }

  }
  
}
