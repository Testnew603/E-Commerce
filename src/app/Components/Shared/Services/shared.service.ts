import { Injectable } from '@angular/core';
import { SigninSignupComponent } from '../../customer/signin-signup/signin-signup.component';
import { MatDialog } from "@angular/material/dialog"

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private dialog: MatDialog) { }

  FunctionAdd() {
    this.OpenPopup(0, 'Create Associate');
  }

  OpenPopup(code: number, title: string) {
    this.dialog.open(SigninSignupComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })
  }
}
