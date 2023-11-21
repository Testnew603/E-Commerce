import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {
  private token: number | null = null;
  private addressId: number | null = null;
  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }

  setToken(token: number): void {
    this.token = token;
  }

  getToken(): number | null {
    return this.token;
  }

  setAddress(addressId: number): void {
    this.addressId = addressId;
  }

  getAddress(): number | null {
    return this.addressId;
  }
}
